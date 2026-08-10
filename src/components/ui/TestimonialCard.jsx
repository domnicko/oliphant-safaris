import { Quote } from "lucide-react";

/**
 * Displays a single testimonial. Expects an object shaped like entries
 * in src/data/testimonials.js.
 */
export default function TestimonialCard({ testimonial }) {
  const { name, origin, quote } = testimonial;

  return (
    <figure className="flex h-full flex-col rounded-sm bg-white p-8 shadow-sm">
      <Quote className="text-ochre/40" size={32} />
      <blockquote className="mt-4 flex-1 text-stone">"{quote}"</blockquote>
      <figcaption className="mt-6 border-t border-sand pt-4">
        <p className="font-semibold text-savanna">{name}</p>
        <p className="text-sm text-stone">{origin}</p>
      </figcaption>
    </figure>
  );
}
