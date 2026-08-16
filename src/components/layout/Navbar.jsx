import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Safaris", to: "/safaris" },
  { label: "Experiences", to: "/experiences" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change / resize back to desktop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-ochre" : "text-savanna hover:text-ochre"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-cream/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Oliphant Safaris"
            className="h-14 w-14 rounded-full shadow-sm md:h-16 md:w-16"
          />
          <span className="font-display text-2xl font-semibold text-savanna">
            OLIPHANT <span className="text-ochre">SAFARIS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/enquiry" className="btn-primary hidden md:inline-flex">
          Plan Your Safari
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-savanna md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav
          className="border-t border-savanna/10 bg-cream md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-3 text-base font-medium ${
                    isActive ? "text-ochre" : "text-savanna"
                  }`
                }
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/enquiry"
              className="btn-primary mt-3 w-full"
              onClick={() => setIsOpen(false)}
            >
              Plan Your Safari
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}