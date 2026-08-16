import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Check, X, Info, ArrowLeft, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import { getSafariBySlug } from "../lib/safaris.js";

export default function SafariDetails() {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setSafari(null);
    getSafariBySlug(slug).then((data) => {
      if (isMounted) {
        setSafari(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Still fetching
  if (loading) {
    return (
      <section className="container-content flex flex-col items-center gap-3 py-24 text-stone">
        <Loader2 size={28} className="animate-spin text-ochre" />
        <p className="text-sm">Loading safari...</p>
      </section>
    );
  }

  // Safari not found — guide the visitor back rather than showing a dead end
  if (!safari) {
    return (
      <section className="container-content py-24 text-center">
        <Seo title="Safari Not Found" description="This safari could not be found." />
        <p className="eyebrow">Safari Not Found</p>
        <h1 className="mt-3 text-3xl md:text-4xl">
          We couldn't find that safari
        </h1>
        <p className="mx-auto mt-4 max-w-md text-stone">
          It may have been renamed or removed. Browse all current safaris
          below.
        </p>
        <Link to="/safaris" className="btn-primary mt-8 inline-flex">
          <ArrowLeft size={16} />
          Back to All Safaris
        </Link>
      </section>
    );
  }

  const {
    name,
    destination,
    duration,
    startingPrice,
    image,
    shortDescription,
    overview,
    highlights,
    itinerary,
    accommodation,
    included,
    excluded,
    importantInfo,
    gallery,
  } = safari;

  return (
    <>
      <Seo
        title={`${name} — ${destination}`}
        description={shortDescription || overview}
      />
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[400px] items-end">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-savanna-dark/90 via-savanna-dark/40 to-savanna-dark/10" />

        <div className="container-content relative z-10 pb-12 text-cream">
          <Link
            to="/safaris"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-cream px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-savanna-dark"
          >
            <ArrowLeft size={16} />
            Back to All Safaris
          </Link>
          <h1 className="mt-4 max-w-2xl text-3xl text-cream md:text-5xl">{name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/90">
            <span className="inline-flex items-center gap-1">
              <MapPin size={16} className="text-gold" />
              {destination}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={16} className="text-gold" />
              {duration}
            </span>
          </div>
        </div>
      </section>

      <div className="container-content grid gap-12 py-16 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Overview */}
          <section>
            <h2 className="text-2xl">Overview</h2>
            <p className="mt-4 text-stone">{overview}</p>
          </section>

          {/* Highlights */}
          <section className="mt-12">
            <h2 className="text-2xl">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-stone">
                  <Check size={18} className="mt-0.5 shrink-0 text-ochre" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Itinerary */}
          <section className="mt-12">
            <h2 className="text-2xl">Itinerary</h2>
            <div className="mt-6 space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-savanna text-sm font-semibold text-cream">
                    {day.day}
                  </div>
                  <div className="border-b border-sand pb-6">
                    <h3 className="text-lg text-savanna">{day.title}</h3>
                    <p className="mt-1 text-sm text-stone">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Accommodation */}
          <section className="mt-12">
            <h2 className="text-2xl">Accommodation</h2>
            <p className="mt-4 text-stone">{accommodation}</p>
          </section>

          {/* Included / Excluded */}
          <section className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl">What's Included</h2>
              <ul className="mt-4 space-y-2">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-stone">
                    <Check size={16} className="mt-0.5 shrink-0 text-savanna" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl">What's Excluded</h2>
              <ul className="mt-4 space-y-2">
                {excluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-stone">
                    <X size={16} className="mt-0.5 shrink-0 text-ochre" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Important information */}
          <section className="mt-12 rounded-sm bg-sand-light p-6">
            <h2 className="flex items-center gap-2 text-lg text-savanna">
              <Info size={20} className="text-ochre" />
              Important Information
            </h2>
            <p className="mt-3 text-sm text-stone">{importantInfo}</p>
          </section>

          {/* Gallery */}
          <section className="mt-12">
            <h2 className="text-2xl">Gallery</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallery.map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt={`${name} gallery image ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-sm border border-sand bg-white p-6 shadow-sm">
            <p className="text-sm text-stone">Starting from</p>
            <p className="mt-1 text-2xl text-savanna">
              {startingPrice ?? (
                <span className="text-lg italic text-stone">Price on request</span>
              )}
            </p>

            <dl className="mt-6 space-y-3 border-t border-sand pt-6 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone">Destination</dt>
                <dd className="font-medium text-savanna">{destination}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Duration</dt>
                <dd className="font-medium text-savanna">{duration}</dd>
              </div>
            </dl>

            <Link to="/enquiry" className="btn-primary mt-6 w-full">
              Enquire About This Safari
            </Link>
          </div>
        </aside>
      </div>

      <CTASection
        eyebrow="Have Questions?"
        title="Let's Plan This Safari Together"
        description="Share your travel dates and preferences and we'll tailor this itinerary to fit."
        primaryLabel="Plan Your Safari"
        primaryTo="/enquiry"
        secondaryLabel="View Other Safaris"
        secondaryTo="/safaris"
      />
    </>
  );
}