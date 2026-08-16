import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import TikTokIcon from "../ui/TikTokIcon.jsx";
import logo from "../../assets/logo.jpg";
import { contactInfo, socialLinks, getWhatsAppLink } from "../../data/contact.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-savanna text-cream">
      <div className="container-content grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Oliphant Safaris"
              className="h-16 w-16 rounded-full shadow-sm"
            />
            <p className="font-display text-2xl font-semibold">
              Oliphant <span className="text-gold">Safaris</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70">
            Authentic safari experiences across East Africa —
            planned around you.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/safaris" className="hover:text-gold">Safaris</Link></li>
            <li><Link to="/experiences" className="hover:text-gold">Experiences</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/enquiry" className="hover:text-gold">Plan Your Safari</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Get in Touch</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold" />
              {contactInfo.phone ? (
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-gold">
                  {contactInfo.phone}
                </a>
              ) : (
                /* PLACEHOLDER — replace with real phone number */
                <span>[phone&nbsp;placeholder]</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="shrink-0 text-gold" />
              <a
                href={getWhatsAppLink("Hi! I'd like to know more about your safari packages.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-gold" />
              <span>{contactInfo.location}</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            {socialLinks.facebook ? (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream/70 hover:text-gold"
              >
                <Facebook size={18} />
              </a>
            ) : (
              /* PLACEHOLDER — replace href once a Facebook page exists */
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold">
                <Facebook size={18} />
              </a>
            )}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 hover:text-gold"
            >
              <Instagram size={18} />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-cream/70 hover:text-gold"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="horizon-divider" />

      <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/60 md:flex-row">
        <p>© {year} Oliphant Safaris. All rights reserved.</p>
        <p>Kenya &amp; Tanzania Safari Specialists</p>
      </div>
    </footer>
  );
}