import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProceduresPage from './pages/ProceduresPage';
import MassageTherapyPage from './pages/MassageTherapyPage';
import FacialTreatmentsPage from './pages/FacialTreatmentsPage';
import PedicureMenicurePage from './pages/PedicureMenicurePage';
import SaltOilBathPage from './pages/SaltOilBathPage';
import PerfectMakeupPage from './pages/PerfectMakeupPage';
import HairTreatmentsPage from './pages/HairTreatmentsPage';
import TherapistsPage from './pages/TherapistsPage';
import AppointmentPage from './pages/AppointmentPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import GalleryGridPage from './pages/GalleryGridPage';
import GalleryWithoutGridPage from './pages/GalleryWithoutGridPage';
import GallerySinglePage from './pages/GallerySinglePage';
import BlogDefaultPage from './pages/BlogDefaultPage';
import BlogLargePage from './pages/BlogLargePage';
import BlogSinglePage from './pages/BlogSinglePage';
import ShopPage from './pages/ShopPage';
import ShopSinglePage from './pages/ShopSinglePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import ContactPage from './pages/ContactPage';
import DrVijayPage from './pages/DrVijayPage';
import YogaTherapyPage from './pages/YogaTherapyPage';
import NaturopathyPage from './pages/NaturopathyPage';
import AyurvedaPage from './pages/AyurvedaPage';
import AcupuncturePage from './pages/AcupuncturePage';
import StructuredWellnessProgramsPage from './pages/StructuredWellnessProgramsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/about/meet-dr-vijay" element={<DrVijayPage />} />
        <Route path="/dr-vijay" element={<DrVijayPage />} />
        <Route path="/dr-vijay.html" element={<DrVijayPage />} />
        <Route path="/therapists/dr-vijay" element={<DrVijayPage />} />

        {/* Procedures & 5 Core Disciplines */}
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="/procedures.html" element={<ProceduresPage />} />
        <Route path="/yoga-therapy" element={<YogaTherapyPage />} />
        <Route path="/yoga-therapy.html" element={<YogaTherapyPage />} />
        <Route path="/naturopathy" element={<NaturopathyPage />} />
        <Route path="/naturopathy.html" element={<NaturopathyPage />} />
        <Route path="/ayurveda" element={<AyurvedaPage />} />
        <Route path="/ayurveda.html" element={<AyurvedaPage />} />
        <Route path="/acupuncture" element={<AcupuncturePage />} />
        <Route path="/acupuncture.html" element={<AcupuncturePage />} />
        <Route path="/structured-wellness-programs" element={<StructuredWellnessProgramsPage />} />
        <Route path="/structured-wellness-programs.html" element={<StructuredWellnessProgramsPage />} />
        <Route path="/wellness-programs" element={<StructuredWellnessProgramsPage />} />
        <Route path="/wellness-programs.html" element={<StructuredWellnessProgramsPage />} />

        {/* Detailed Individual Service Pages */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/services/:slug.html" element={<ServiceDetailPage />} />
        <Route path="/therapies/:discipline/:slug" element={<ServiceDetailPage />} />
        <Route path="/therapies/:discipline/:slug.html" element={<ServiceDetailPage />} />
        <Route path="/programs/:slug" element={<ServiceDetailPage />} />
        <Route path="/programs/:slug.html" element={<ServiceDetailPage />} />

        {/* Single Procedures */}
        <Route path="/massage-therapy" element={<MassageTherapyPage />} />
        <Route path="/massage-therapy.html" element={<MassageTherapyPage />} />
        <Route path="/facial-treatments" element={<FacialTreatmentsPage />} />
        <Route path="/facial-treatments.html" element={<FacialTreatmentsPage />} />
        <Route path="/pedicure-menicure" element={<PedicureMenicurePage />} />
        <Route path="/pedicure-menicure.html" element={<PedicureMenicurePage />} />
        <Route path="/salt-oil-bath" element={<SaltOilBathPage />} />
        <Route path="/salt-oil-bath.html" element={<SaltOilBathPage />} />
        <Route path="/perfect-makeup" element={<PerfectMakeupPage />} />
        <Route path="/perfect-makeup.html" element={<PerfectMakeupPage />} />
        <Route path="/hair-treatments" element={<HairTreatmentsPage />} />
        <Route path="/hair-treatments.html" element={<HairTreatmentsPage />} />

        {/* Therapists */}
        <Route path="/therapists" element={<TherapistsPage />} />
        <Route path="/therapists.html" element={<TherapistsPage />} />

        {/* Appointment */}
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/appointment.html" element={<AppointmentPage />} />

        {/* Testimonials */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/testimonials.html" element={<TestimonialsPage />} />

        {/* FAQ */}
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq.html" element={<FaqPage />} />

        {/* Gallery */}
        <Route path="/gallery-grid" element={<GalleryGridPage />} />
        <Route path="/gallery-grid.html" element={<GalleryGridPage />} />
        <Route path="/gallery-without-grid" element={<GalleryWithoutGridPage />} />
        <Route path="/gallery-without-grid.html" element={<GalleryWithoutGridPage />} />
        <Route path="/gallery-single" element={<GallerySinglePage />} />
        <Route path="/gallery-single.html" element={<GallerySinglePage />} />

        {/* Blog */}
        <Route path="/blog-default" element={<BlogDefaultPage />} />
        <Route path="/blog-default.html" element={<BlogDefaultPage />} />
        <Route path="/blog-large" element={<BlogLargePage />} />
        <Route path="/blog-large.html" element={<BlogLargePage />} />
        <Route path="/blog-single" element={<BlogSinglePage />} />
        <Route path="/blog-single.html" element={<BlogSinglePage />} />

        {/* Shop */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop.html" element={<ShopPage />} />
        <Route path="/shop-single" element={<ShopSinglePage />} />
        <Route path="/shop-single.html" element={<ShopSinglePage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/shopping-cart.html" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout.html" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account.html" element={<AccountPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
