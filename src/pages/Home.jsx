import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hotel, Car, TrainFront, Plane, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import Hero from "../components/layout/Hero.jsx";
import PromoBanner from "../components/layout/PromoBanner.jsx";
import TourCard from "../components/ui/TourCard.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import TestimonialCard from "../components/ui/TestimonialCard.jsx";
import { getFeaturedSafaris } from "../lib/safaris.js";
import { getTestimonials } from "../lib/testimonials.js";
import { getGalleryPreview } from "../lib/gallery.js";

const ourServices = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "We help you find and book accommodation that matches your budget, destination and travel needs. From budget hotels to luxury lodges and safari camps, we handle the booking process for you. We arrange: Nairobi hotels, safari lodges, beach resorts, camps and city accommodation.",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Enjoy a smooth arrival or departure with our private airport transfer services. Our drivers pick you up from the airport and transfer you safely to your hotel, safari destination or other preferred location. Available from: JKIA, Wilson Airport and other major airports across Kenya.",
  },
  {
    icon: TrainFront,
    title: "SGR Bookings",
    description:
      "Let us arrange your Standard Gauge Railway (SGR) tickets for convenient travel between Nairobi and Mombasa. We assist with ticket booking and provide the travel details you need before your journey. Routes: Nairobi – Mombasa and Mombasa – Nairobi and other in between routes.",
  },
  {
    icon: Plane,
    title: "Flight Bookings",
    description:
      "Save time by flying between Kenya's major destinations. We arrange domestic flights to popular destinations including Maasai Mara, Diani, Mombasa, Malindi, Kisumu, Amboseli, and other destinations.",
  },
];

export default function Home() {
  const [featuredSafaris, setFeaturedSafaris] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [galleryPreviewImages, setGalleryPreviewImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    Promise.all([getFeaturedSafaris(), getTestimonials(), getGalleryPreview(3)]).then(
      ([safarisData, testimonialsData, galleryData]) => {
        if (!isMounted) return;
        setFeaturedSafaris(safarisData);
        setTestimonials(testimonialsData);
        setGalleryPreviewImages(galleryData);
        setLoading(false);
      }
    );
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Seo
        title="Kenya & East Africa Safari Tours"
        description="Oliphant Safaris designs authentic, personalized safari experiences across Kenya and East Africa — Maasai Mara wildlife tours, honeymoon safaris, family adventures, and luxury journeys."
      />
      <Hero />
      <PromoBanner />

      {/* Company introduction */}
      <section className="container-content py-20 text-center">
        <p className="eyebrow">Welcome to Oliphant Safaris</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-4xl">
          Your Journey Into the Heart of East Africa
        </h2>
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

          {loading ? (
            <div className="mt-12 flex flex-col items-center gap-3 py-16 text-stone">
              <Loader2 size={28} className="animate-spin text-ochre" />
              <p className="text-sm">Loading safaris...</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredSafaris.map((safari) => (
                <TourCard key={safari.slug} safari={safari} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our services */}
      <section id="our-services" className="container-content py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How We Help</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Our Services</h2>
          <p className="mt-4 text-stone">
            Beyond tours and safaris, we make your entire journey easier.
            From accommodation and airport transfers to train and domestic
            flight bookings, we take care of the essential travel
            arrangements so you can enjoy a smooth and stress-free trip.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {ourServices.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-savanna/10 text-savanna">
                <Icon size={26} />
              </div>
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm text-stone">{description}</p>
              </div>
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