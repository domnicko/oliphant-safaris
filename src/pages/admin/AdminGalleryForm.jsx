import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, Save, Upload } from "lucide-react";
import { supabase } from "../../lib/supabaseClient.js";
import {
  createGalleryImage,
  updateGalleryImage,
  uploadGalleryFile,
} from "../../lib/adminGallery.js";

const CATEGORIES = [
  "Wildlife",
  "Landscapes",
  "Safari Vehicles",
  "Accommodation",
  "Culture",
  "Beaches",
  "Experiences",
];

export default function AdminGalleryForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [loading, setLoading] = useState(isEditing);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) return;
    supabase
      .from("gallery_images")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error: fetchError }) => {
        if (fetchError) {
          setError(`Failed to load photo: ${fetchError.message}`);
          return;
        }
        setSrc(data.src);
        setAlt(data.alt || "");
        setCategory(data.category || CATEGORIES[0]);
      })
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

    if (!alt.trim()) {
      setError("Please add a short description (alt text) for this photo.");
      return;
    }
    if (!file && !src) {
      setError("Please upload a photo.");
      return;
    }

    setSaving(true);
    try {
      let finalSrc = src;

      if (file) {
        setUploading(true);
        finalSrc = await uploadGalleryFile(file);
        setUploading(false);
      }

      const payload = { src: finalSrc, alt, category };

      if (isEditing) {
        await updateGalleryImage(id, payload);
      } else {
        await createGalleryImage(payload);
      }
      navigate("/admin/gallery");
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

  const displayImage = previewUrl || src;

  return (
    <div className="mx-auto max-w-xl">
      <Link to="/admin/gallery" className="inline-flex items-center gap-1 text-sm text-stone hover:text-savanna">
        <ArrowLeft size={14} />
        Back to Gallery
      </Link>
      <h1 className="mt-3 text-2xl text-savanna">
        {isEditing ? "Edit Photo" : "Add New Photo"}
      </h1>

      {error && (
        <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-sm bg-white p-6 shadow-sm">
        <div>
          <label className={labelClass}>Photo</label>
          {displayImage && (
            <div className="mb-3 aspect-video w-full overflow-hidden rounded-sm bg-sand-light">
              <img src={displayImage} alt="Preview" className="h-full w-full object-cover" />
            </div>
          )}
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-sand bg-sand-light px-4 py-6 text-sm text-savanna hover:bg-sand">
            <Upload size={18} />
            {file ? file.name : isEditing ? "Upload a new photo to replace this one" : "Click to upload a photo"}
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        </div>

        <div>
          <label className={labelClass}>Description (alt text)</label>
          <input
            type="text"
            required
            placeholder="e.g. Elephant herd crossing the plains"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

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
                {isEditing ? "Save Changes" : "Add Photo"}
              </>
            )}
          </button>
          <Link to="/admin/gallery" className="text-sm text-stone hover:text-savanna">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}