import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout.jsx";

import Home from "./pages/Home.jsx";
import Safaris from "./pages/Safaris.jsx";
import SafariDetails from "./pages/SafariDetails.jsx";
import Experiences from "./pages/Experiences.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Enquiry from "./pages/Enquiry.jsx";
import NotFound from "./pages/NotFound.jsx";

import ProtectedRoute from "./components/admin/ProtectedRoute.jsx";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminSafaris from "./pages/admin/AdminSafaris.jsx";
import AdminSafariForm from "./pages/admin/AdminSafariForm.jsx";
import AdminExperiences from "./pages/admin/AdminExperiences.jsx";
import AdminExperienceForm from "./pages/admin/AdminExperienceForm.jsx";
import AdminGallery from "./pages/admin/AdminGallery.jsx";
import AdminGalleryForm from "./pages/admin/AdminGalleryForm.jsx";
import AdminTestimonials from "./pages/admin/AdminTestimonials.jsx";
import AdminTestimonialForm from "./pages/admin/AdminTestimonialForm.jsx";
import AdminEnquiries from "./pages/admin/AdminEnquiries.jsx";
import AdminPromotions from "./pages/admin/AdminPromotions.jsx";
import AdminPromotionForm from "./pages/admin/AdminPromotionForm.jsx";

function App() {
  return (
    <Routes>
      {/* Admin login — standalone, no public nav/footer, no protection
          (this IS the page that lets you become authenticated) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin panel — protected, uses its own sidebar layout */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="safaris" element={<AdminSafaris />} />
        <Route path="safaris/new" element={<AdminSafariForm />} />
        <Route path="safaris/:id/edit" element={<AdminSafariForm />} />
        <Route path="experiences" element={<AdminExperiences />} />
        <Route path="experiences/new" element={<AdminExperienceForm />} />
        <Route path="experiences/:id/edit" element={<AdminExperienceForm />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="gallery/new" element={<AdminGalleryForm />} />
        <Route path="gallery/:id/edit" element={<AdminGalleryForm />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="testimonials/new" element={<AdminTestimonialForm />} />
        <Route path="testimonials/:id/edit" element={<AdminTestimonialForm />} />
        <Route path="enquiries" element={<AdminEnquiries />} />
        <Route path="promotions" element={<AdminPromotions />} />
        <Route path="promotions/new" element={<AdminPromotionForm />} />
        <Route path="promotions/:id/edit" element={<AdminPromotionForm />} />
      </Route>

      {/* Public site — nav, footer, page transitions */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/safaris/:slug" element={<SafariDetails />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;