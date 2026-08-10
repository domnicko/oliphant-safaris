import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-elephants-closeup.jpg";

/**
 * Homepage hero. Uses a real Oliphant Safaris photo.
 */

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Close-up of elephants grazing among the bush"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-savanna-dark/90 via-savanna-dark/50 to-savanna-dark/20" />

      <div className="container-content relative z-10 animate-fade-rise text-cream">
        <p className="eyebrow text-gold">Kenya &amp; East Africa Safari Specialists</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight text-cream md:text-6xl">
          Authentic Safari Journeys, Planned Around You
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Oliphant Safaris designs personalized wildlife and adventure
          experiences across Kenya and East Africa — for couples, families,
          and travelers seeking the real Africa.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/safaris" className="btn-primary">
            Explore Safaris
          </Link>
          <Link
            to="/enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-savanna"
          >
            Plan Your Safari
          </Link>
        </div>
      </div>
    </section>
  );
}