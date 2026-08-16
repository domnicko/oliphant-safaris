import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, CheckCircle2, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
import TikTokIcon from "../components/ui/TikTokIcon.jsx";
import { contactInfo, socialLinks } from "../data/contact.js";
import { submitEnquiry } from "../lib/enquiries.js";

const DESTINATIONS = ["Kenya", "Tanzania", "Uganda", "Rwanda", "Beach & Safari", "Not sure yet"];
const SAFARI_TYPES = [
  "Kenya Safaris",
  "Luxury Safaris",
  "Family Safaris",
  "Honeymoon Safaris",
  "Budget Safaris",
  "Photography Safaris",
  "Not sure yet",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelDates: "",
  travelers: "",
  destination: "",
  safariType: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        await submitEnquiry({ formType: "contact", ...values });
        setSubmitted(true);
        setValues(initialForm);
      } catch (err) {
        setSubmitError(
          "Something went wrong sending your message. Please try again, or reach us directly using the details on this page."
        );
      } finally {
        setSubmitting(false);
      }
    }
  };

  const inputClass = (field) =>
    `w-full rounded-sm border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-stone focus:outline-none ${
      errors[field] ? "border-red-400" : "border-sand focus:border-ochre"
    }`;

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Oliphant Safaris to ask questions or start planning your Kenya and East Africa safari."
      />
      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">Get in Touch</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Questions about a safari, or ready to start planning? Reach out —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Reach Us Directly</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-ochre" />
                <div>
                  <p className="font-semibold text-savanna">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-stone hover:text-ochre">
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-ochre" />
                <div>
                  <p className="font-semibold text-savanna">Phone</p>
                  {contactInfo.phone ? (
                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="text-stone hover:text-ochre">
                      {contactInfo.phone}
                    </a>
                  ) : (
                    /* PLACEHOLDER — replace with real phone number */
                    <p className="text-stone">[phone placeholder]</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-ochre" />
                <div>
                  <p className="font-semibold text-savanna">WhatsApp</p>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone hover:text-ochre"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-ochre" />
                <div>
                  <p className="font-semibold text-savanna">Location</p>
                  <p className="text-stone">{contactInfo.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              {socialLinks.facebook ? (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-light text-savanna hover:bg-sand"
                >
                  <Facebook size={18} />
                </a>
              ) : (
                /* PLACEHOLDER — replace href once a Facebook page exists */
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-light text-savanna hover:bg-sand"
                >
                  <Facebook size={18} />
                </a>
              )}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-light text-savanna hover:bg-sand"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-light text-savanna hover:bg-sand"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-sm bg-savanna/10 p-4 text-sm text-savanna">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                <p>
                  Thanks — your message has been sent. We'll get back to you
                  soon.
                </p>
              </div>
            )}
            {submitError && (
              <div className="mb-6 rounded-sm bg-red-50 p-4 text-sm text-red-600">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-savanna">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-savanna">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-savanna">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="+254 ..."
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="travelDates" className="mb-1.5 block text-sm font-medium text-savanna">
                  Preferred Travel Dates
                </label>
                <input
                  id="travelDates"
                  name="travelDates"
                  type="text"
                  value={values.travelDates}
                  onChange={handleChange}
                  className={inputClass("travelDates")}
                  placeholder="e.g. March 2027, flexible"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="travelers" className="mb-1.5 block text-sm font-medium text-savanna">
                  Number of Travelers
                </label>
                <input
                  id="travelers"
                  name="travelers"
                  type="number"
                  min="1"
                  value={values.travelers}
                  onChange={handleChange}
                  className={inputClass("travelers")}
                  placeholder="e.g. 2"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-savanna">
                  Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={values.destination}
                  onChange={handleChange}
                  className={inputClass("destination")}
                >
                  <option value="">Select a destination</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="safariType" className="mb-1.5 block text-sm font-medium text-savanna">
                  Safari Type
                </label>
                <select
                  id="safariType"
                  name="safariType"
                  value={values.safariType}
                  onChange={handleChange}
                  className={inputClass("safariType")}
                >
                  <option value="">Select a safari type</option>
                  {SAFARI_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-savanna">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={inputClass("message")}
                  placeholder="Tell us about the trip you're imagining..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}