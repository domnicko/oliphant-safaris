import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { getAllExperiencesAdmin, deleteExperience } from "../../lib/adminExperiences.js";

export default function AdminExperiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const load = () => {
    setLoading(true);
    getAllExperiencesAdmin()
      .then(setExperiences)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteExperience(id);
      setExperiences((prev) => prev.filter((e) => e.id !== id));
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
          <h1 className="text-2xl text-savanna">Experiences</h1>
          <p className="mt-1 text-sm text-stone">{experiences.length} total</p>
        </div>
        <Link to="/admin/experiences/new" className="btn-primary">
          <Plus size={16} />
          Add Experience
        </Link>
      </div>

      {loading ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-stone">
          <Loader2 size={28} className="animate-spin text-ochre" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-sm bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-sand bg-sand-light text-xs uppercase tracking-wide text-stone">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((experience) => (
                <tr key={experience.id} className="border-b border-sand last:border-0">
                  <td className="px-4 py-3 font-medium text-savanna">{experience.name}</td>
                  <td className="px-4 py-3 text-stone">
                    {experience.location || <span className="italic">—</span>}
                  </td>
                  <td className="px-4 py-3 text-stone">
                    {experience.price || <span className="italic">—</span>}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/experiences/${experience.id}/edit`}
                        className="rounded-sm p-2 text-savanna hover:bg-sand-light"
                        aria-label={`Edit ${experience.name}`}
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(experience.id, experience.name)}
                        disabled={deletingId === experience.id}
                        className="rounded-sm p-2 text-red-500 hover:bg-red-50 disabled:opacity-50"
                        aria-label={`Delete ${experience.name}`}
                      >
                        {deletingId === experience.id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {experiences.length === 0 && (
            <p className="p-8 text-center text-sm text-stone">
              No experiences yet. Click "Add Experience" to create your first one.
            </p>
          )}
        </div>
      )}
    </div>
  );
}