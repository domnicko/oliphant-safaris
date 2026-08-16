import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Seo from "../components/ui/Seo.jsx";
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
const ACCOMMODATION_LEVELS = ["Budget", "Mid-Range", "Luxury", "Not sure yet"];
const BUDGET_RANGES = [
  "Under $1,000 per person",
  "$1,000 – $2,500 per person",
  "$2,500 – $5,000 per person",
  "$5,000+ per person",
  "Not sure yet",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelers: "",
  travelDates: "",
  destination: "",
  safariType: "",
  accommodation: "",
  budget: "",
  requirements: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.travelers.trim()) errors.travelers = "Please enter number of travelers.";
  if (!values.destination) errors.destination = "Please select a destination.";
  return errors;
}

export default function Enquiry() {
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
        const { requirements, ...rest } = values;
        await submitEnquiry({ formType: "enquiry", message: requirements, ...rest });
        setSubmitted(true);
        setValues(initialForm);
      } catch (err) {
        setSubmitError(
          "Something went wrong sending your enquiry. Please try again, or reach us directly via WhatsApp or email."
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
        title="Plan Your Safari"
        description="Tell Oliphant Safaris about the trip you're imagining — destination, dates, group size, and preferences — and get a tailored itinerary."
      />
      {/* Page header */}
      <section className="bg-savanna py-20 text-cream">
        <div className="container-content text-center">
          <p className="eyebrow text-gold">Let's Plan Your Trip</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">
            Plan Your Safari
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Share a few details about the trip you're imagining and we'll
            follow up with a tailored itinerary and pricing.
          </p>
        </div>
      </section>

      <section className="container-content py-16">
        <div className="mx-auto max-w-2xl">
          {submitted && (
            <div className="mb-6 flex items-start gap-3 rounded-sm bg-savanna/10 p-4 text-sm text-savanna">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              <p>
                Thanks — your enquiry has been sent. We'll follow up with a
                tailored itinerary and pricing soon.
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
              {errors.travelers && <p className="mt-1 text-xs text-red-500">{errors.travelers}</p>}
            </div>

            <div className="sm:col-span-2">
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
              {errors.destination && <p className="mt-1 text-xs text-red-500">{errors.destination}</p>}
            </div>

            <div className="sm:col-span-1">
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

            <div className="sm:col-span-1">
              <label htmlFor="accommodation" className="mb-1.5 block text-sm font-medium text-savanna">
                Accommodation Preference
              </label>
              <select
                id="accommodation"
                name="accommodation"
                value={values.accommodation}
                onChange={handleChange}
                className={inputClass("accommodation")}
              >
                <option value="">Select a preference</option>
                {ACCOMMODATION_LEVELS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-savanna">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className={inputClass("budget")}
              >
                <option value="">Select a budget range</option>
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="requirements" className="mb-1.5 block text-sm font-medium text-savanna">
                Additional Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={5}
                value={values.requirements}
                onChange={handleChange}
                className={inputClass("requirements")}
                placeholder="Dietary needs, mobility considerations, special occasions, or anything else we should know..."
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-60 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}