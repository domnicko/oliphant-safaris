import { Link } from "react-router-dom";
import { ShieldCheck, Compass, Users, Heart } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import Hero from "../components/layout/Hero.jsx";
import TourCard from "../components/ui/TourCard.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import TestimonialCard from "../components/ui/TestimonialCard.jsx";
import { safaris } from "../data/safaris.js";
import { testimonials } from "../data/testimonials.js";
import { galleryPreviewImages } from "../data/gallery.js";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "PLACEHOLDER — describe safety standards, vehicle maintenance, and guide vetting once confirmed.",
  },
  {
    icon: Compass,
    title: "Personalized Itineraries",
    description:
      "PLACEHOLDER — describe how trips are tailored to each traveler's interests and pace.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "PLACEHOLDER — describe guide experience and on-the-ground knowledge once confirmed.",
  },
  {
    icon: Heart,
    title: "Kenyan Hospitality",
    description:
      "PLACEHOLDER — describe the warmth and care travelers can expect throughout their journey.",
  },
];

// Show a maximum of 6 featured safaris on the homepage
const featuredSafaris = safaris.slice(0, 6);

export default function Home() {
  return (
    <>
      <Seo
        title="Kenya & East Africa Safari Tours"
        description="Oliphant Safaris designs authentic, personalized safari experiences across Kenya and East Africa — Maasai Mara wildlife tours, honeymoon safaris, family adventures, and luxury journeys."
      />
      <Hero />

      {/* Company introduction */}
      <section className="container-content py-20 text-center">
        <p className="eyebrow">Welcome to Oliphant Safaris</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-4xl">
          Your Journey Into the Heart of East Africa
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-stone">
          At Oliphant Safaris we are passionate about showcasing Kenya's
          breathtaking wildlife, culture and landscape through unforgettable
          safari adventures.
        </p>
      </section>

      <div className="horizon-divider" />

      {/* Featured safaris */}
      <section className="bg-sand-light py-20">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured Journeys</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Popular Safari Packages</h2>
            </div>
            <Link
              to="/safaris"
              className="text-sm font-semibold uppercase tracking-wide text-ochre hover:text-ochre-dark"
            >
              View All Safaris →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredSafaris.map((safari) => (
              <TourCard key={safari.slug} safari={safari} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-content py-20">
        <div className="text-center">
          <p className="eyebrow">Why Travel With Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-4xl">
            Why Choose Oliphant Safaris
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-savanna/10 text-savanna">
                <Icon size={26} />
              </div>
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-stone">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="horizon-divider" />

      {/* Testimonials */}
      <section className="container-content py-20">
        <div className="text-center">
          <p className="eyebrow">Guest Stories</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-4xl">
            What Our Travelers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="pb-20">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">A Glimpse of the Journey</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Gallery</h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-semibold uppercase tracking-wide text-ochre hover:text-ochre-dark"
            >
              View Full Gallery →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {galleryPreviewImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Safari?"
        description="Tell us what you're looking for and we'll help design a journey around it."
        primaryLabel="Plan Your Safari"
        primaryTo="/enquiry"
        secondaryLabel="Browse Safaris"
        secondaryTo="/safaris"
      />
    </>
  );
}