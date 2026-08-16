import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import TourCard from "../components/ui/TourCard.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import { getSafaris } from "../lib/safaris.js";

const CATEGORIES = [
  "All Safaris",
  "Kenya Safaris",
  "Tanzania Safaris",
  "Beach Holiday",
  "Beach & Safari",
  "Luxury Safaris",
  "Family Safaris",
  "Honeymoon Safaris",
  "Budget Safaris",
  "Photography Safaris",
];

export default function Safaris() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Safaris");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getSafaris().then((data) => {
      if (isMounted) {
        setSafaris(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredSafaris = useMemo(() => {
    return safaris.filter((safari) => {
      const matchesCategory =
        activeCategory === "All Safaris" || safari.categories.includes(activeCategory);
      const matchesQuery =
        query.trim() === "" ||
        safari.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        safari.destination.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [safaris, activeCategory, query]);

  return (
    <>
      <Seo
        title="Safaris & Tours"
        description="Browse Kenya and East Africa safari packages — from classic Maasai Mara safaris to honeymoon, family, and photography safaris. Filter by style and find your trip."
      />
      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">Explore Our Journeys</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">
            Safaris &amp; Tours
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Browse safari packages across Kenya and East Africa. Filter by
            style or search by name and destination to find the right trip.
          </p>
        </div>
      </section>

      {/* Services summary — every safari can include these arrangements */}
      <section className="bg-sand-light py-8">
        <div className="container-content flex flex-col items-center gap-2 text-center text-sm text-stone md:flex-row md:justify-center md:gap-3">
          <span>
            Every safari can include hotel booking, airport transfers, SGR
            bookings, and domestic flights.
          </span>
          <Link
            to="/#our-services"
            className="font-semibold text-ochre hover:text-ochre-dark"
          >
            See Our Services →
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-sand bg-cream py-8">
        <div className="container-content flex flex-col gap-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or destination..."
              aria-label="Search safaris"
              className="w-full rounded-sm border border-sand bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-stone focus:border-ochre focus:outline-none"
            />
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
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
        </div>
      </section>

      {/* Results */}
      <section className="container-content py-16">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-16 text-stone">
            <Loader2 size={28} className="animate-spin text-ochre" />
            <p className="text-sm">Loading safaris...</p>
          </div>
        ) : (
          <>
            <p className="mb-8 text-sm text-stone">
              Showing {filteredSafaris.length} of {safaris.length} safaris
            </p>

            {filteredSafaris.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredSafaris.map((safari) => (
                  <TourCard key={safari.slug} safari={safari} />
                ))}
              </div>
            ) : (
              <div className="rounded-sm bg-sand-light py-16 text-center">
                <p className="text-lg text-savanna">No safaris match your search.</p>
                <p className="mt-2 text-sm text-stone">
                  Try a different category or search term, or{" "}
                  <Link to="/enquiry" className="text-ochre underline">
                    tell us what you're looking for
                  </Link>
                  .
                </p>
              </div>
            )}
          </>
        )}
      </section>

      <CTASection
        title="Can't Find the Right Fit?"
        description="Every safari can be tailored. Tell us your dates, interests, and group size and we'll design a custom itinerary."
        primaryLabel="Plan Your Safari"
        primaryTo="/enquiry"
      />
    </>
  );
}