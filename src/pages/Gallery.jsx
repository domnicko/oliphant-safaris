import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import { getGalleryImages } from "../lib/gallery.js";

// Fixed filter categories — these are just UI options, not data, so they
// stay as a local constant rather than a database table. All 8 show up as
// filter buttons even if a category currently has 0 photos.
const CATEGORIES = [
  "All",
  "Wildlife",
  "Landscapes",
  "Safari Vehicles",
  "Accommodation",
  "Culture",
  "Beaches",
  "Experiences",
];

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getGalleryImages().then((data) => {
      if (isMounted) {
        setGalleryImages(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Seo
        title="Photo Gallery"
        description="Browse photos of Kenya and East Africa wildlife, landscapes, safari accommodation, and traveler experiences from Oliphant Safaris."
      />
      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">A Glimpse of the Journey</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Wildlife, landscapes, accommodation, and moments from across
            Kenya and East Africa.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-sand bg-cream py-8">
        <div className="container-content flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
          {CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "bg-ochre text-cream"
                    : "bg-sand-light text-savanna hover:bg-sand"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Image grid */}
      <section className="container-content py-16">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-16 text-stone">
            <Loader2 size={28} className="animate-spin text-ochre" />
            <p className="text-sm">Loading gallery...</p>
          </div>
        ) : (
          <>
            <p className="mb-8 text-sm text-stone">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filteredImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setLightboxImage(img)}
                  className="group aspect-square overflow-hidden rounded-sm"
                  aria-label={`View larger image: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-savanna-dark/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close enlarged image"
            className="absolute right-6 top-6 text-cream hover:text-gold"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}