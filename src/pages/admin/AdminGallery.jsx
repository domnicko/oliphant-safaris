import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { getAllGalleryImagesAdmin, deleteGalleryImage } from "../../lib/adminGallery.js";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const load = () => {
    setLoading(true);
    getAllGalleryImagesAdmin()
      .then(setImages)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id, alt) => {
    if (!window.confirm(`Delete "${alt}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteGalleryImage(id);
      setImages((prev) => prev.filter((img) => img.id !== id));
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
          <h1 className="text-2xl text-savanna">Gallery</h1>
          <p className="mt-1 text-sm text-stone">{images.length} total</p>
        </div>
        <Link to="/admin/gallery/new" className="btn-primary">
          <Plus size={16} />
          Add Photo
        </Link>
      </div>

      {loading ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-stone">
          <Loader2 size={28} className="animate-spin text-ochre" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <>
          {images.length === 0 ? (
            <p className="mt-16 text-center text-sm text-stone">
              No photos yet. Click "Add Photo" to upload your first one.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {images.map((img) => (
                <div key={img.id} className="overflow-hidden rounded-sm bg-white shadow-sm">
                  <div className="aspect-square overflow-hidden">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3">
                    <span className="inline-block rounded-full bg-sand-light px-2 py-0.5 text-xs font-semibold text-savanna">
                      {img.category}
                    </span>
                    <p className="mt-2 truncate text-xs text-stone">{img.alt}</p>
                    <div className="mt-2 flex gap-2">
                      <Link
                        to={`/admin/gallery/${img.id}/edit`}
                        className="flex-1 rounded-sm bg-sand-light py-1.5 text-center text-xs font-semibold text-savanna hover:bg-sand"
                      >
                        <Pencil size={12} className="mr-1 inline" />
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(img.id, img.alt)}
                        disabled={deletingId === img.id}
                        className="flex-1 rounded-sm bg-red-50 py-1.5 text-center text-xs font-semibold text-red-500 hover:bg-red-100 disabled:opacity-50"
                      >
                        {deletingId === img.id ? (
                          <Loader2 size={12} className="mx-auto animate-spin" />
                        ) : (
                          <>
                            <Trash2 size={12} className="mr-1 inline" />
                            Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}