import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import {
  getExperienceById,
  createExperience,
  updateExperience,
} from "../../lib/adminExperiences.js";

const emptyForm = {
  name: "",
  slug: "",
  location: "",
  image: "",
  description: "",
  price: "",
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminExperienceForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) return;
    getExperienceById(id)
      .then((data) =>
        setForm({
          name: data.name || "",
          slug: data.slug || "",
          location: data.location || "",
          image: data.image || "",
          description: data.description || "",
          price: data.price || "",
        })
      )
      .catch((err) => setError(`Failed to load experience: ${err.message}`))
      .finally(() => setLoading(false));
  }, [id, isEditing]);

  const handleNameChange = (value) => {
    setForm((prev) => ({
      ...prev,
      name: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.slug.trim()) {
      setError("Name and slug are required.");
      return;
    }

    setSaving(true);
    try {
      if (isEditing) {
        await updateExperience(id, form);
      } else {
        await createExperience(form);
      }
      navigate("/admin/experiences");
    } catch (err) {
      setError(`Failed to save: ${err.message}`);
      setSaving(false);
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

  return (
    <div className="mx-auto max-w-2xl">
      <Link to="/admin/experiences" className="inline-flex items-center gap-1 text-sm text-stone hover:text-savanna">
        <ArrowLeft size={14} />
        Back to Experiences
      </Link>
      <h1 className="mt-3 text-2xl text-savanna">
        {isEditing ? "Edit Experience" : "Add New Experience"}
      </h1>

      {error && (
        <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-sm bg-white p-6 shadow-sm">
        <div>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input
            type="text"
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((prev) => ({ ...prev, slug: e.target.value }));
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Location (optional)</label>
          <input
            type="text"
            placeholder="e.g. Maasai Mara"
            value={form.location}
            onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Image URL</label>
          <input
            type="text"
            required
            placeholder="https://..."
            value={form.image}
            onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Price (optional)</label>
          <input
            type="text"
            placeholder="e.g. From KSh 4,000 pp"
            value={form.price}
            onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
            className={inputClass}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60">
            {saving ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={16} />
                {isEditing ? "Save Changes" : "Create Experience"}
              </>
            )}
          </button>
          <Link to="/admin/experiences" className="text-sm text-stone hover:text-savanna">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}