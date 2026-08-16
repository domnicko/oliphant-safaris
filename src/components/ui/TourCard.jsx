import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";

/**
 * Displays a single safari package as a card.
 * Expects a `safari` object shaped like the entries in src/data/safaris.js.
 */
export default function TourCard({ safari }) {
  const { slug, name, destination, duration, startingPrice, image, shortDescription, categories } =
    safari;
  const badges = categories && categories.length > 0 ? categories : [safari.category];

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`${name} — ${destination}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {badges.map((cat) => (
            <span
              key={cat}
              className="rounded-sm bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-savanna"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{name}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone">
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} className="text-ochre" />
            {destination}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} className="text-ochre" />
            {duration}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm text-stone">{shortDescription}</p>

        <div className="mt-5 flex items-center justify-between border-t border-sand pt-4">
          <span className="text-sm text-stone">
            {startingPrice ? (
              <>
                From <span className="font-semibold text-savanna">{startingPrice}</span>
              </>
            ) : (
              <span className="italic">Price on request</span>
            )}
          </span>
          <Link
            to={`/safaris/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-ochre hover:text-ochre-dark"
          >
            View Safari
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}