import WhatsAppIcon from "../ui/WhatsAppIcon.jsx";
import { getWhatsAppLink } from "../../data/contact.js";

/**
 * Fixed WhatsApp button in the bottom-right corner, visible on every page.
 * Rendered once in App.jsx, outside the routed page content, so it persists
 * across navigation without needing to be added to each page individually.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink("Hi! I'd like to know more about your safari packages.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-wobble items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={28} />

      {/* "Active now" indicator — pulsing ring + solid dot */}
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-cream bg-red-500" />
      </span>
    </a>
  );
}