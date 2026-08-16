import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Megaphone, ArrowRight } from "lucide-react";
import { getActivePromotions } from "../../lib/promotions.js";

const ROTATE_INTERVAL_MS = 6000;

export default function PromoBanner() {
  const [promotions, setPromotions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    getActivePromotions().then((data) => {
      if (isMounted) setPromotions(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Rotate to the next promotion every few seconds — only runs when
  // there's more than one to rotate between.
  useEffect(() => {
    if (promotions.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % promotions.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [promotions.length]);

  // Nothing active right now — render nothing at all
  if (promotions.length === 0) return null;

  const promo = promotions[activeIndex];

  return (
    <section className="overflow-hidden bg-ochre">
      {/*
        Sway + fade animations are defined here directly (not in
        tailwind.config.js), since that file has been unreliable to save
        in this environment. Respects prefers-reduced-motion via the
        global rule already in index.css, which forces near-zero
        animation duration on everything, including these.
      */}
      <style>{`
        @keyframes promo-sway {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(18px); }
          75% { transform: translateX(-18px); }
        }
        .promo-sway {
          animation: promo-sway 3.5s ease-in-out infinite;
        }
        @keyframes promo-fade-in {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .promo-fade-in {
          animation: promo-fade-in 0.4s ease-out;
        }
      `}</style>

      <div className="container-content flex flex-col items-center gap-4 py-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Keying on the promo id remounts this block whenever the active
            promotion changes, restarting the fade-in animation */}
        <div key={promo.id} className="promo-fade-in promo-sway flex items-center gap-4">
          {promo.image ? (
            <img
              src={promo.image}
              alt={promo.title}
              className="h-16 w-16 shrink-0 rounded-sm object-cover sm:h-20 sm:w-20"
            />
          ) : (
            <Megaphone size={22} className="shrink-0 text-cream" />
          )}
          <div>
            <p className="font-display text-xl font-bold text-[#FF3B30]">{promo.title}</p>
            {promo.description && (
              <p className="text-sm text-cream/90">{promo.description}</p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {promotions.length > 1 && (
            <div className="flex gap-1.5" role="tablist" aria-label="Active promotions">
              {promotions.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show promotion ${i + 1} of ${promotions.length}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === activeIndex ? "bg-cream" : "bg-cream/40 hover:bg-cream/70"
                  }`}
                />
              ))}
            </div>
          )}
          <Link
            to="/enquiry"
            className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-cream px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ochre-dark hover:bg-white"
          >
            Plan Your Safari
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}