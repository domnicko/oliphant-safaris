import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import {
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
} from "../../lib/adminTestimonials.js";

const emptyForm = { name: "", origin: "", quote: "" };

export default function AdminTestimonialForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) return;
    getTestimonialById(id)
      .then((data) =>
        setForm({
          name: data.name || "",
          origin: data.origin || "",
          quote: data.quote || "",
        })
      )
      .catch((err) => setError(`Failed to load testimonial: ${err.message}`))
      .finally(() => setLoading(false));
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.quote.trim()) {
      setError("Name and quote are required.");
      return;
    }

    setSaving(true);
    try {
      if (isEditing) {
        await updateTestimonial(id, form);
      } else {
        await createTestimonial(form);
      }
      navigate("/admin/testimonials");
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
    <div className="mx-auto max-w-xl">
      <Link to="/admin/testimonials" className="inline-flex items-center gap-1 text-sm text-stone hover:text-savanna">
        <ArrowLeft size={14} />
        Back to Testimonials
      </Link>
      <h1 className="mt-3 text-2xl text-savanna">
        {isEditing ? "Edit Testimonial" : "Add New Testimonial"}
      </h1>

      {error && (
        <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-sm bg-white p-6 shadow-sm">
        <div>
          <label className={labelClass}>Guest Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Origin (country)</label>
          <input
            type="text"
            placeholder="e.g. Italy"
            value={form.origin}
            onChange={(e) => setForm((prev) => ({ ...prev, origin: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Quote</label>
          <textarea
            rows={5}
            required
            value={form.quote}
            onChange={(e) => setForm((prev) => ({ ...prev, quote: e.target.value }))}
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
                {isEditing ? "Save Changes" : "Add Testimonial"}
              </>
            )}
          </button>
          <Link to="/admin/testimonials" className="text-sm text-stone hover:text-savanna">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}