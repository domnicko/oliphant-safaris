import { MapPin } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import { experiences } from "../data/experiences.js";

export default function Experiences() {
  return (
    <>
      <Seo
        title="Special Experiences"
        description="Hot air balloon safaris, sundowners, bush dining, Maasai village visits, and more — special experiences you can add to any Oliphant Safaris journey."
      />

      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">Beyond the Game Drive</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">
            Special Experiences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Add one or more of these to any safari itinerary for moments that
            go beyond the standard game drive.
          </p>
        </div>
      </section>

      {/* Experiences grid */}
      <section className="container-content py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.slug}
              className="overflow-hidden rounded-sm bg-white shadow-sm"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-xl text-savanna">{experience.name}</h2>
                  {experience.price && (
                    <span className="shrink-0 rounded-full bg-ochre/10 px-3 py-1 text-xs font-semibold text-ochre">
                      {experience.price}
                    </span>
                  )}
                </div>
                {experience.location && (
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-stone">
                    <MapPin size={12} className="text-ochre" />
                    {experience.location}
                  </p>
                )}
                <p className="mt-3 text-sm text-stone">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Customize Your Trip"
        title="Add a Special Experience to Your Safari"
        description="Let us know which experiences interest you and we'll build them into your itinerary."
        primaryLabel="Plan Your Safari"
        primaryTo="/enquiry"
        secondaryLabel="Browse Safaris"
        secondaryTo="/safaris"
      />
    </>
  );
}