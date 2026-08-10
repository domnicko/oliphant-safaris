import { Link } from "react-router-dom";

/**
 * Full-width call-to-action banner. Reusable across Home, Safaris,
 * Destinations, etc. — pass different copy/links per page.
 */
export default function CTASection({
  eyebrow = "Start Planning",
  title,
  description,
  primaryLabel = "Plan Your Safari",
  primaryTo = "/enquiry",
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-savanna py-20 text-cream">
      <div className="container-content text-center">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h2 className="mt-3 text-3xl text-cream md:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{description}</p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-savanna"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
