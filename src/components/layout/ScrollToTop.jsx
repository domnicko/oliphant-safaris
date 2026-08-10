import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top whenever the route changes.
 *
 * Uses an instant (non-smooth) scroll intentionally: a smooth scroll here
 * would race against the page-transition fade and could still be mid-scroll
 * when the new page finishes fading in, which reads as janky rather than
 * premium. Instant reset + a fast fade feels more polished in practice.
 * Smooth scrolling is still appropriate for in-page anchor links, which
 * this component doesn't affect.
 *
 * Render once, near the top of the router tree (see App.jsx).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}