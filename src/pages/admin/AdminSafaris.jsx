import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Loader2, Star } from "lucide-react";
import {
  getAllSafarisAdmin,
  deleteSafari,
  setSafariFeatured,
} from "../../lib/adminSafaris.js";

export default function AdminSafaris() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);
  const [view, setView] = useState("all"); // "all" | "homepage"

  const load = () => {
    setLoading(true);
    getAllSafarisAdmin()
      .then(setSafaris)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteSafari(id);
      setSafaris((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      alert(`Failed to delete: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleFeatured = async (id, currentValue) => {
    setTogglingId(id);
    try {
      await setSafariFeatured(id, !currentValue);
      setSafaris((prev) =>
        prev.map((s) => (s.id === id ? { ...s, isFeatured: !currentValue } : s))
      );
    } catch (err) {
      alert(`Failed to update: ${err.message}`);
    } finally {
      setTogglingId(null);
    }
  };

  const homepageCount = useMemo(() => safaris.filter((s) => s.isFeatured).length, [safaris]);
  const visibleSafaris = view === "homepage" ? safaris.filter((s) => s.isFeatured) : safaris;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-savanna">Safaris</h1>
          <p className="mt-1 text-sm text-stone">
            {safaris.length} total — {homepageCount} shown on the homepage
          </p>
        </div>
        <Link to="/admin/safaris/new" className="btn-primary">
          <Plus size={16} />
          Add Safari
        </Link>
      </div>

      {/* View filter: All Safaris vs Homepage Safaris */}
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => setView("all")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
            view === "all" ? "bg-ochre text-cream" : "bg-sand-light text-savanna hover:bg-sand"
          }`}
        >
          All Safaris ({safaris.length})
        </button>
        <button
          type="button"
          onClick={() => setView("homepage")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
            view === "homepage" ? "bg-ochre text-cream" : "bg-sand-light text-savanna hover:bg-sand"
          }`}
        >
          Homepage Safaris ({homepageCount})
        </button>
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
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Destination</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Homepage</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleSafaris.map((safari) => (
                <tr key={safari.id} className="border-b border-sand last:border-0">
                  <td className="px-4 py-3 font-medium text-savanna">{safari.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {(safari.categories && safari.categories.length > 0
                        ? safari.categories
                        : [safari.category]
                      ).map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-sand-light px-2 py-0.5 text-xs text-savanna"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-stone">{safari.destination}</td>
                  <td className="px-4 py-3 text-stone">{safari.duration}</td>
                  <td className="px-4 py-3 text-stone">
                    {safari.startingPrice || <span className="italic">—</span>}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => handleToggleFeatured(safari.id, safari.isFeatured)}
                      disabled={togglingId === safari.id}
                      aria-label={
                        safari.isFeatured
                          ? `Remove ${safari.name} from homepage`
                          : `Show ${safari.name} on homepage`
                      }
                      className="rounded-sm p-1.5 hover:bg-sand-light disabled:opacity-50"
                    >
                      {togglingId === safari.id ? (
                        <Loader2 size={16} className="animate-spin text-stone" />
                      ) : (
                        <Star
                          size={16}
                          className={safari.isFeatured ? "fill-ochre text-ochre" : "text-stone"}
                        />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/safaris/${safari.id}/edit`}
                        className="rounded-sm p-2 text-savanna hover:bg-sand-light"
                        aria-label={`Edit ${safari.name}`}
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(safari.id, safari.name)}
                        disabled={deletingId === safari.id}
                        className="rounded-sm p-2 text-red-500 hover:bg-red-50 disabled:opacity-50"
                        aria-label={`Delete ${safari.name}`}
                      >
                        {deletingId === safari.id ? (
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
          {visibleSafaris.length === 0 && (
            <p className="p-8 text-center text-sm text-stone">
              {view === "homepage"
                ? "No safaris are marked to show on the homepage yet. Click the star icon on any safari to feature it."
                : 'No safaris yet. Click "Add Safari" to create your first one.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}