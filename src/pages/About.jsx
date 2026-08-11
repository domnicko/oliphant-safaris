import { Compass, ShieldCheck, Users } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import { team } from "../data/team.js";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "Your safety and comfort are important to us. We carefully plan each journey and work with reliable service providers to ensure a smooth and well-organized experience.",
  },
  {
    icon: Compass,
    title: "Personalized Itineraries",
    description:
      "We tailor each safari to your interests, budget and preferred pace. Whether you want wildlife, adventure, relaxation or culture, we help create a journey that suits you.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Our knowledge of Kenya helps us guide you towards destinations and experiences that match your interests. We provide practical advice to help you make the most of your time in Kenya.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Oliphant Safaris — our story, mission, values, and what sets our journeys apart across Kenya and East Africa."
      />
      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">About Oliphant Safaris</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">Who We Are</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Discover why "Oliphant" — and the passion behind every safari we
            design.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="container-content py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Why "Oliphant"?</h2>
          <p className="mt-6 text-stone">
            The name Oliphant is an ancient word meaning elephant — our
            founder's favorite animal, and a symbol of strength, wisdom,
            resilience, and loyalty. These qualities inspire who we are and
            the experiences we create.
          </p>
          <p className="mt-4 text-stone">
            At Oliphant Safaris we are passionate about showcasing East
            Africa's breathtaking wildlife, landscape, and culture through
            unforgettable safari adventures.
          </p>
        </div>
      </section>

      <div className="horizon-divider" />

      {/* Mission & Vision */}
      <section className="bg-sand-light py-20">
        <div className="container-content mx-auto max-w-4xl">
          <div className="text-center">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Our Mission &amp; Vision</h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl text-savanna">Mission</h3>
              <p className="mt-3 text-stone">
                To connect travelers with the beauty of Kenya through
                authentic, personalized, and unforgettable safari
                experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-savanna">Vision</h3>
              <p className="mt-3 text-stone">
                To be a trusted name in African travel, creating
                unforgettable journeys while contributing positively to the
                people, wildlife, and places we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why travel with us */}
      <section className="bg-sand-light py-20">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Travel With Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              What Sets Oliphant Safaris Apart
            </h2>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
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
        </div>
      </section>

      <div className="horizon-divider" />

      {/* Team */}
      <section className="bg-sand-light py-20">
        <div className="container-content">
          <div className="text-center">
            <p className="eyebrow">Meet the People Behind the Journeys</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-4xl">
              Our Team
            </h2>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={`${member.name} — PLACEHOLDER photo`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg text-savanna">{member.name}</h3>
                <p className="text-sm text-stone">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Planning?"
        description="Tell us about the trip you're imagining and we'll help bring it to life."
        primaryLabel="Plan Your Safari"
        primaryTo="/enquiry"
        secondaryLabel="Browse Safaris"
        secondaryTo="/safaris"
      />
    </>
  );
}