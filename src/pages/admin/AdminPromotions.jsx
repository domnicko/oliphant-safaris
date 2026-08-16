import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import {
  getAllPromotionsAdmin,
  deletePromotion,
  setPromotionActive,
} from "../../lib/adminPromotions.js";

function formatDate(value) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminPromotions() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const load = () => {
    setLoading(true);
    getAllPromotionsAdmin()
      .then(setPromotions)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deletePromotion(id);
      setPromotions((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(`Failed to delete: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggle = async (id, currentValue) => {
    setTogglingId(id);
    try {
      await setPromotionActive(id, !currentValue);
      setPromotions((prev) =>
        prev.map((p) => (p.id === id ? { ...p, is_active: !currentValue } : p))
      );
    } catch (err) {
      alert(`Failed to update: ${err.message}`);
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-savanna">Promotions</h1>
          <p className="mt-1 text-sm text-stone">
            {promotions.length} total — active ones can show as a homepage banner.
          </p>
        </div>
        <Link to="/admin/promotions/new" className="btn-primary">
          <Plus size={16} />
          Add Promotion
        </Link>
      </div>

      {loading ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-stone">
          <Loader2 size={28} className="animate-spin text-ochre" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {promotions.map((promo) => (
            <div key={promo.id} className="flex gap-4 rounded-sm bg-white p-4 shadow-sm">
              {promo.image && (
                <div className="h-20 w-28 shrink-0 overflow-hidden rounded-sm bg-sand-light">
                  <img src={promo.image} alt={promo.title} className="h-full w-full object-cover" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-savanna">{promo.title}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      promo.is_active
                        ? "bg-savanna/10 text-savanna"
                        : "bg-sand-light text-stone"
                    }`}
                  >
                    {promo.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
                {promo.description && (
                  <p className="mt-1 line-clamp-1 text-sm text-stone">{promo.description}</p>
                )}
                {(promo.starts_at || promo.ends_at) && (
                  <p className="mt-1 text-xs text-stone">
                    {formatDate(promo.starts_at) || "No start date"} –{" "}
                    {formatDate(promo.ends_at) || "No end date"}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 flex-col items-end justify-between gap-2">
                <div className="flex gap-2">
                  <Link
                    to={`/admin/promotions/${promo.id}/edit`}
                    className="rounded-sm p-2 text-savanna hover:bg-sand-light"
                    aria-label={`Edit ${promo.title}`}
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(promo.id, promo.title)}
                    disabled={deletingId === promo.id}
                    className="rounded-sm p-2 text-red-500 hover:bg-red-50 disabled:opacity-50"
                    aria-label={`Delete ${promo.title}`}
                  >
                    {deletingId === promo.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle(promo.id, promo.is_active)}
                  disabled={togglingId === promo.id}
                  className={`rounded-sm px-3 py-1.5 text-xs font-semibold disabled:opacity-50 ${
                    promo.is_active
                      ? "bg-sand-light text-savanna hover:bg-sand"
                      : "bg-savanna text-cream hover:bg-savanna-dark"
                  }`}
                >
                  {togglingId === promo.id ? (
                    <Loader2 size={12} className="animate-spin" />
                  ) : promo.is_active ? (
                    "Turn Off"
                  ) : (
                    "Turn On"
                  )}
                </button>
              </div>
            </div>
          ))}
          {promotions.length === 0 && (
            <p className="py-16 text-center text-sm text-stone">
              No promotions yet. Click "Add Promotion" to create your first offer.
            </p>
          )}
        </div>
      )}
    </div>
  );
}