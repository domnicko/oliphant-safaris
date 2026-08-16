import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { getAllTestimonialsAdmin, deleteTestimonial } from "../../lib/adminTestimonials.js";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const load = () => {
    setLoading(true);
    getAllTestimonialsAdmin()
      .then(setTestimonials)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete testimonial from "${name}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteTestimonial(id);
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert(`Failed to delete: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-savanna">Testimonials</h1>
          <p className="mt-1 text-sm text-stone">{testimonials.length} total</p>
        </div>
        <Link to="/admin/testimonials/new" className="btn-primary">
          <Plus size={16} />
          Add Testimonial
        </Link>
      </div>

      {loading ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-stone">
          <Loader2 size={28} className="animate-spin text-ochre" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-sm bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-savanna">{t.name}</p>
                  <p className="text-sm text-stone">{t.origin}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Link
                    to={`/admin/testimonials/${t.id}/edit`}
                    className="rounded-sm p-2 text-savanna hover:bg-sand-light"
                    aria-label={`Edit testimonial from ${t.name}`}
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id, t.name)}
                    disabled={deletingId === t.id}
                    className="rounded-sm p-2 text-red-500 hover:bg-red-50 disabled:opacity-50"
                    aria-label={`Delete testimonial from ${t.name}`}
                  >
                    {deletingId === t.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm italic text-stone">"{t.quote}"</p>
            </div>
          ))}
          {testimonials.length === 0 && (
            <p className="py-16 text-center text-sm text-stone">
              No testimonials yet. Click "Add Testimonial" to add your first one.
            </p>
          )}
        </div>
      )}
    </div>
  );
}