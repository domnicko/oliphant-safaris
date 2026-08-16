import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, Save, Upload } from "lucide-react";
import {
  getPromotionById,
  createPromotion,
  updatePromotion,
  uploadPromotionFile,
} from "../../lib/adminPromotions.js";

export default function AdminPromotionForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [loading, setLoading] = useState(isEditing);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) return;
    getPromotionById(id)
      .then((data) => {
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImage(data.image || "");
        setIsActive(!!data.is_active);
        setStartsAt(data.starts_at ? data.starts_at.slice(0, 10) : "");
        setEndsAt(data.ends_at ? data.ends_at.slice(0, 10) : "");
      })
      .catch((err) => setError(`Failed to load promotion: ${err.message}`))
      .finally(() => setLoading(false));
  }, [id, isEditing]);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    setSaving(true);
    try {
      let finalImage = image;
      if (file) {
        setUploading(true);
        finalImage = await uploadPromotionFile(file);
        setUploading(false);
      }

      const payload = {
        title,
        description,
        image: finalImage || null,
        is_active: isActive,
        starts_at: startsAt || null,
        ends_at: endsAt || null,
      };

      if (isEditing) {
        await updatePromotion(id, payload);
      } else {
        await createPromotion(payload);
      }
      navigate("/admin/promotions");
    } catch (err) {
      setError(`Failed to save: ${err.message}`);
      setSaving(false);
      setUploading(false);
    }
  };

  const inputClass =
    "w-full rounded-sm border border-sand bg-white px-3 py-2 text-sm text-charcoal focus:border-ochre focus:outline-none";
  const labelClass = "mb-1.5 block text-sm font-medium text-savanna";

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 py-24 text-stone">
        <Loader2 size={28} className="animate-spin text-ochre" />
        <p className="text-sm">Loading...</p>
      </div>
    );
  }

  const displayImage = previewUrl || image;

  return (
    <div className="mx-auto max-w-xl">
      <Link to="/admin/promotions" className="inline-flex items-center gap-1 text-sm text-stone hover:text-savanna">
        <ArrowLeft size={14} />
        Back to Promotions
      </Link>
      <h1 className="mt-3 text-2xl text-savanna">
        {isEditing ? "Edit Promotion" : "Add New Promotion"}
      </h1>

      {error && (
        <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-sm bg-white p-6 shadow-sm">
        <div>
          <label className={labelClass}>Title</label>
          <input
            type="text"
            required
            placeholder="e.g. 15% Off Serengeti Safaris This Month"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Description (optional)</label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Photo (optional)</label>
          {displayImage && (
            <div className="mb-3 aspect-video w-full overflow-hidden rounded-sm bg-sand-light">
              <img src={displayImage} alt="Preview" className="h-full w-full object-cover" />
            </div>
          )}
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-sand bg-sand-light px-4 py-6 text-sm text-savanna hover:bg-sand">
            <Upload size={18} />
            {file ? file.name : "Click to upload a photo"}
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Starts (optional)</label>
            <input
              type="date"
              value={startsAt}
              onChange={(e) => setStartsAt(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Ends (optional)</label>
            <input
              type="date"
              value={endsAt}
              onChange={(e) => setEndsAt(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-savanna">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="h-4 w-4 rounded border-sand text-ochre focus:ring-ochre"
          />
          Show this promotion on the homepage now
        </label>

        <div className="flex items-center gap-3 pt-2">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60">
            {saving ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {uploading ? "Uploading photo..." : "Saving..."}
              </>
            ) : (
              <>
                <Save size={16} />
                {isEditing ? "Save Changes" : "Add Promotion"}
              </>
            )}
          </button>
          <Link to="/admin/promotions" className="text-sm text-stone hover:text-savanna">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}