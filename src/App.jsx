import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Safaris from "./pages/Safaris.jsx";
import SafariDetails from "./pages/SafariDetails.jsx";
import Experiences from "./pages/Experiences.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Enquiry from "./pages/Enquiry.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
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
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/safaris/:slug" element={<SafariDetails />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;