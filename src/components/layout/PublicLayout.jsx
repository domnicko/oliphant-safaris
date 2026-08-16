import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import FloatingWhatsApp from "./FloatingWhatsApp.jsx";

/**
 * Shared layout for every public-facing page — nav, footer, WhatsApp
 * button, scroll reset, and the page-transition animation. The admin
 * panel intentionally does NOT use this layout (see AdminLayout.jsx).
 */
export default function PublicLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        {/*
          Keying on pathname remounts this div on every route change, which
          restarts the CSS animation below — a lightweight page-transition
          approach using Tailwind's existing keyframe system rather than a
          routing/animation library. prefers-reduced-motion is already
          handled globally in index.css, so no extra logic is needed here.
        */}
        <div key={location.pathname} className="animate-page-in">
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}