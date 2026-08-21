# TEMPLATE_AUDIT.md — Oriolus Scientific Template Audit

**Project Target:** ORIOLUS SCIENTIFIC — Yoga & Naturopathy Research Center  
**Parent Organization:** A Division of Funicle Health Care and Wellness Pvt. Ltd.  
**Audit Phase:** PHASE 0 — Protect & Audit the Existing Template  
**Audit Mode:** READ-ONLY Deep Inspection & Architectural Mapping  
**Date of Audit:** August 21, 2026  

---

## 1. Technology Stack

- **Framework & Runtime:** React 18.3.1 (Strict Mode enabled, Functional Components, React Hooks: `useState`, `useEffect`, `useRef`, `useLocation`)
- **Build System & Tooling:** Vite 5.4.21 (Fast HMR, optimized Rollup bundling, ES modules)
- **Routing Engine:** React Router DOM 6.26.1 (`BrowserRouter`, `Routes`, `Route`, `Navigate`)
- **CSS Architecture & Layout:** Vanilla CSS with modular Bootstrap 3.3.6 grid system (`container`, `row`, `col-lg-*`, `col-md-*`, `col-sm-*`, `col-xs-*`)
- **Core Stylesheets Loaded:**
  - `css/bootstrap.min.css` (Grid foundation & layout classes)
  - `css/font-awesome.min.css` (FontAwesome 4.7.0 icons)
  - `css/flaticon.css` (Flaticon custom wellness glyphs)
  - `css/icomoon.css` (Icomoon UI glyphs)
  - `css/animate.css` (CSS3 keyframe animations)
  - `css/hover.css` (Interactive hover micro-animations)
  - `css/owl.carousel.css` & `css/owl.theme.default.min.css` (Carousel structures)
  - `css/prettyPhoto.css` (Lightbox styling)
  - `css/style.css` (Master design system, typography, color tokens)
  - `css/responsive.css` (Responsive media query breakpoints)
- **Typography & Font System:**
  - Headings: *Playfair Display* / *Oswald* (Sophisticated editorial display & serif)
  - Body & UI: *Open Sans* / *Roboto* (Clean, legible sans-serif for medical/scientific clarity)
  - Vector Glyph Fonts: Flaticon (lotus, botanical herbs, hands, medical, laurel, stethoscope/wellness), FontAwesome

---

## 2. Current Route Map

All 25 application routes are configured inside `src/App.jsx` with direct URL paths and `.html` alias fallbacks:

| Route Path | Aliases | React Component | Template Purpose |
|---|---|---|---|
| `/` | `/index.html` | `HomePage.jsx` | Main Landing / Overview |
| `/about` | `/about.html` | `AboutPage.jsx` | Institutional Profile & Heritage |
| `/procedures` | `/procedures.html` | `ProceduresPage.jsx` | Clinical Therapies & Treatments Catalog |
| `/massage-therapy` | `/massage-therapy.html` | `MassageTherapyPage.jsx` | Single Therapy Detail: Massage Therapy |
| `/facial-treatments` | `/facial-treatments.html` | `FacialTreatmentsPage.jsx` | Single Therapy Detail: Facial & Skin |
| `/pedicure-menicure` | `/pedicure-menicure.html` | `PedicureMenicurePage.jsx` | Single Therapy Detail: Reflexology & Extremities |
| `/salt-oil-bath` | `/salt-oil-bath.html` | `SaltOilBathPage.jsx` | Single Therapy Detail: Hydrotherapy & Mud Baths |
| `/perfect-makeup` | `/perfect-makeup.html` | `PerfectMakeupPage.jsx` | Single Therapy Detail: Aesthetic & Cosmetic Care |
| `/hair-treatments` | `/hair-treatments.html` | `HairTreatmentsPage.jsx` | Single Therapy Detail: Scalp & Botanical Therapies |
| `/therapists` | `/therapists.html` | `TherapistsPage.jsx` | Medical Faculty, Doctors & Naturopaths |
| `/appointment` | `/appointment.html` | `AppointmentPage.jsx` | Clinical Consultation & OPD Booking Portal |
| `/testimonials` | `/testimonials.html` | `TestimonialsPage.jsx` | Patient Case Studies & Recovery Stories |
| `/faq` | `/faq.html` | `FaqPage.jsx` | Clinical & Institutional FAQs (5 Categories) |
| `/gallery-grid` | `/gallery-grid.html` | `GalleryGridPage.jsx` | Campus, Research Lab & Therapy Gallery |
| `/gallery-without-grid` | `/gallery-without-grid.html` | `GalleryWithoutGridPage.jsx` | Facility & Nature Retreat Masonry Gallery |
| `/gallery-single` | `/gallery-single.html` | `GallerySinglePage.jsx` | Clinical Case Study / Research Showcase |
| `/blog-default` | `/blog-default.html` | `BlogDefaultPage.jsx` | Scientific Articles, Research Papers & Health Tips |
| `/blog-large` | `/blog-large.html` | `BlogLargePage.jsx` | Editorial Features & Clinical Bulletins |
| `/blog-single` | `/blog-single.html` | `BlogSinglePage.jsx` | Individual Research Paper / Article Deep Dive |
| `/shop` | `/shop.html` | `ShopPage.jsx` | Naturopathic Herbal Formulations & Wellness Store |
| `/shop-single` | `/shop-single.html` | `ShopSinglePage.jsx` | Formulation Detail, Dosage & Clinical Studies |
| `/shopping-cart` | `/shopping-cart.html` | `ShoppingCartPage.jsx` | Order Cart & Prescription Manager |
| `/checkout` | `/checkout.html` | `CheckoutPage.jsx` | Billing, Shipping & Order Placement |
| `/account` | `/account.html` | `AccountPage.jsx` | Patient Portal (Login / Registration / Records) |
| `/contact` | `/contact.html` | `ContactPage.jsx` | Research Center Location, OPD Hours & Form |

---

## 3. Current Homepage Section Order

The homepage (`src/pages/HomePage.jsx`) assembles 9 core interactive sections within `MainLayout`:

1. **Header Area (`Header.jsx`):**
   - Top bar with contact telephone, email, physical address, and social links.
   - Main navigation with logo, dropdown menus, search popover, and mobile toggle.
2. **Hero Slider (`HeroSlider.jsx`):**
   - 3-Slide animated carousel with background images, category tags, headings, descriptions, and dual CTA action buttons.
3. **Welcome Area (`WelcomeArea.jsx`):**
   - Institutional title, subtitle, dual Mission and Vision value cards, "Need Advice?" phone prompt, and featured welcoming imagery.
4. **Procedures / Therapies Grid (`ProceduresList.jsx`):**
   - 4-Card interactive treatment grid featuring Flaticon vector badges, image overlays (`.overlay-style-one`), front badges, and hover flip reveals.
5. **Slogan Banner (`SloganBanner.jsx`):**
   - Full-width parallax banner with callout headline, sub-copy, and direct appointment action button.
6. **Why Choose Us (`WhyChooseUs.jsx`):**
   - 6-Pillar feature matrix with circular icons: Mind Relaxing, Healthy Life, Special Guides, Herbal & Natural, Well Care Therapists, Effective Treatments.
7. **Testimonials / Successful Stories (`Testimonials.jsx`):**
   - 3-Card patient review grid with rounded avatars, star rating badges, review quotes, and patient names.
8. **Quick Appointment Section (`QuickAppointment.jsx`):**
   - Left: 26-Year experience badge + Laurel vector emblem.
   - Center: Interactive appointment booking form (Name, Email, Service select, Message).
   - Right: Quick contact details card with address, emergency phone, email, and hours.
9. **Pricing & Membership Plans (`PricingPlans.jsx`):**
   - 3-Tier package cards (Family Pack, Premium Pack, Ultimate Pack) with price badges, feature checklists, and purchase action buttons.
10. **Latest Blog / Scientific Publications (`LatestBlog.jsx`):**
    - 3-Card recent articles preview with thumbnails, category chips, dates, comment counts, titles, excerpts, and "Read More" button.
11. **Footer Area (`Footer.jsx`):**
    - 4-Column widget layout, brand logo, newsletter subscription, working hours, and sub-footer copyright.
12. **Scroll to Top (`ScrollToTop.jsx`):**
    - Floating action button triggering smooth scroll to window top.

---

## 4. Header Architecture

- **File Location:** `src/components/common/Header.jsx`
- **Behavior:**
  - Dynamic Sticky State: Adds `.stricky-fixed` class when `window.scrollY > 100px`.
  - Nested Navigation: Supports multi-tier dropdown menus on hover and mobile click accordion.
  - Active Route Highlighting: Compares current route with `useLocation().pathname`.
  - Search Popover: Collapsible search input box with animated toggle state.
  - Mobile Menu: Off-canvas responsive accordion toggled via `.navbar-toggle` button.

---

## 5. Footer Architecture

- **File Location:** `src/components/common/Footer.jsx`
- **Structure:**
  - Decorative top ribbon and lotus flower emblem.
  - Centered institutional logo (`/images/footer/footer-logo.png`).
  - Column 1: Quick Contact summary, address, phone, email.
  - Column 2: Useful Links (split dual-column links to departments, therapies, guidelines).
  - Column 3: Recent Research Bulletins & Articles with thumbnail miniatures.
  - Column 4: Newsletter Subscription form with feedback state and OPD Consultation Hours.
  - Sub-Footer: Copyright notice and verified social media links.

---

## 6. Existing Reusable Components

1. `Header.jsx` (`src/components/common/Header.jsx`) — Global navigation, top bar, search, mobile drawer.
2. `Footer.jsx` (`src/components/common/Footer.jsx`) — Global footer with 4-column widget ecosystem.
3. `Breadcrumb.jsx` (`src/components/common/Breadcrumb.jsx`) — Hero breadcrumb banner with background image, title, and link trail.
4. `ScrollToTop.jsx` (`src/components/common/ScrollToTop.jsx`) — Smooth back-to-top floating button.
5. `MainLayout.jsx` (`src/layouts/MainLayout.jsx`) — Root layout wrapper handling header, content, footer, scroll-to-top, and route change scroll reset.
6. `ProcedureSidebar.jsx` (`src/components/procedures/ProcedureSidebar.jsx`) — Reusable therapy navigation menu, brochure download card, and quick consultation CTA.
7. `ShopSidebar.jsx` (`src/components/shop/ShopSidebar.jsx`) — Herbal category filter, top-rated remedies list, and patient discount banner.
8. `BlogSidebar.jsx` (`src/components/blog/BlogSidebar.jsx`) — Article search, research categories, recent papers, and tag cloud.

---

## 7. Existing Card Types

1. **Therapy / Procedure Card (`.single-item`):**
   - Media holder with image, hover overlay with center Flaticon icon, front icon badge, title, and flip hover state with description and link.
2. **Clinical Feature / Why Choose Us Card (`.single-item`):**
   - Double-bordered icon circle (`.iocn-holder .inner-border`) with Flaticon vector, bold title, and explanatory clinical copy.
3. **Patient Experience / Testimonial Card (`.single-testimonial-item`):**
   - Rounded patient portrait, 5-star rating icons, heading, quote text, golden divider line, and patient name/designation.
4. **Wellness Package / Pricing Card (`.single-price-box`):**
   - Distinctive package price header (`$49/Mo`), tier name, bulleted inclusion checklist, and gold action button.
5. **Research / Blog Post Card (`.single-blog-item`):**
   - High-res cover image, category badge chip, metadata row (calendar date, comment count), bold title, excerpt, and "Read More" button.
6. **Faculty / Doctor Profile Card (`.single-team-member`):**
   - Portrait photo, physician name, specialization/degree, biography summary, and social/academic links.
7. **Research Project / Gallery Card (`.single-project-item`):**
   - Image box with dark translucent overlay on hover, search icon opening lightbox, and link icon to full case study.
8. **Naturopathic Product Card (`.single-product-item`):**
   - Product photo with "Add to Cart" hover button, product title, star rating, and price tag.

---

## 8. Existing Detail Page Templates

1. **Single Therapy Detail Template (`MassageTherapyPage.jsx`, `FacialTreatmentsPage.jsx`, etc.):**
   - Large hero banner, title with gold accent line, clinical description paragraphs, 2-column benefits & treatment packages, booking callout banner, and `ProcedureSidebar`.
2. **Single Naturopathic Remedy Template (`ShopSinglePage.jsx`):**
   - High-res product showcase, rating, pricing, in-stock badge, SKU/category, quantity touchspin, "Add to Cart" button, tabbed specifications (Description / Clinical Reviews), and related remedies.
3. **Single Scientific Article Template (`BlogSinglePage.jsx`):**
   - Cover photo, metadata, article title, editorial body copy, highlighted blockquote, physician author bio box with avatar, threaded patient/reader comments, and comment form.
4. **Single Clinical Case Study Template (`GallerySinglePage.jsx`):**
   - Case study image, title, treatment methodology narrative, and right-side metadata card (Patient/Subject, Category, Date, Lead Physician, Treatment Duration).

---

## 9. Existing Form Components

1. **Homepage Quick Booking Form (`QuickAppointment.jsx`):**
   - Fields: Name, Email, Service Selector dropdown, Message textarea.
   - Interactive State: Controlled React state with confirmation notice.
2. **Full Clinical Consultation Booking Portal (`AppointmentPage.jsx`):**
   - Fields: First Name, Last Name, Email, Phone, Therapy dropdown, Preferred Doctor dropdown, Date picker, Time slot dropdown, Special requests/health notes.
   - Feedback: Full clinical appointment confirmation screen with personalized details.
3. **Inquiry & Research Center Form (`ContactPage.jsx`):**
   - Fields: Name, Email, Phone, Subject, Message textarea.
   - Feedback: Submission dispatch banner + Google Maps interactive embed.
4. **Newsletter Subscription Form (`Footer.jsx`):**
   - Email input with paper-plane icon and subscription confirmation.
5. **Clinical Discussion / Comment Form (`BlogSinglePage.jsx`):**
   - Name, Email, Comment textarea with instant comment append.
6. **E-Commerce Checkout & Billing Form (`CheckoutPage.jsx`):**
   - Billing address fields, payment method toggles (Bank Transfer, PayPal/Card), and order placement confirmation.
7. **Patient Portal Authentication Form (`AccountPage.jsx`):**
   - 2-Column split Login and Registration forms with validation feedback.

---

## 10. Existing Animation System

- **Hero Slider Carousel:** Automatic 6-second transition timer with CSS fade-in keyframe animations.
- **Micro-Animations & Hover States:**
  - `.overlay-style-one`: Opacity transition `0 -> 1` with 0.3s-0.4s ease.
  - Buttons (`.thm-btn.bgclr-1`): Background color transition, gold border shifts, box-shadow depth.
  - Cards: `translateY(-5px)` subtle lift on hover.
  - Sticky Header: Smooth slide-down transition on scroll offset.
- **Scroll Reveal & Keyframes:** `animate.css` animations (`fadeIn`, `fadeInUp`, `slideInRight`).

---

## 11. Existing Responsive System

- **Mobile First / Fluid Grid:** Bootstrap 3 grid with comprehensive CSS media queries inside `responsive.css`.
- **Breakpoints:**
  - Large Desktop: `1200px+` (Full 1170px container, multi-column cards)
  - Medium Desktop / Laptops: `992px - 1199px` (Adjusted padding and font scales)
  - Tablets: `768px - 991px` (2-column grids, sidebar stacking, condensed header)
  - Mobile Phones: `< 767px` and `< 480px` (Single column cards, full-width forms, off-canvas mobile menu)

---

## 12. Global Brand / Theme Tokens

- **Primary Brand Color (Warm Gold / Solar Energy):** `#c59d5f` (Hover: `#b38c4f`)
- **Primary Navy / Clinical Charcoal (Scientific Credibility):** `#131d33` / `#1a1a1a` / `#262626`
- **Secondary Background (Peaceful Cream / Natural):** `#f9f8f6` / `#fafafa` / `#f4f4f4`
- **Text Body Color:** `#777777` / `#666666` (High contrast, easy reading)
- **Border / Divider Color:** `#eeeeee` / `#e5e5e5`
- **Success / Botanical Green:** `#4caf50` (Stock status, health indicators)

---

## 13. Current Demo Content Locations & Recommended Oriolus Replacement

| File | Component | State Type | Current Demo Content | Recommended Oriolus Scientific Replacement |
|---|---|---|---|---|
| `Header.jsx` | Top Bar | Hardcoded | `Phone: (020) 4567 89012`, `Mail@dailyspanz.com`, `121, Park Drive, Newyork` | `Phone: +91 80 2345 6789`, `Email: info@oriolusscientific.com`, `Center: Bengaluru / Kerala Campus, India` |
| `Header.jsx` | Navigation | Hardcoded | "Daily Spanz", Spa dropdowns | "ORIOLUS SCIENTIFIC", Yoga & Naturopathy, Research, Therapies, Faculty, Patient Portal |
| `HeroSlider.jsx` | Slide 1 | Data array | "Welcome to Daily Spanz", "Give you unique relaxation experience" | "ORIOLUS SCIENTIFIC", "Evidence-Based Yoga & Naturopathy Research Center", "A Division of Funicle Health Care and Wellness Pvt. Ltd." |
| `HeroSlider.jsx` | Slide 2 | Data array | "Refresh, Renew, Rejuvenate...", "Get a therapy of your choice" | "Clinical Naturopathic Medicine", "Root-Cause Healing Through Drugless Therapies & Ancient Yogic Science" |
| `HeroSlider.jsx` | Slide 3 | Data array | "Experience the secrets of relaxation", "Our Solutions" | "Holistic Disease Management", "Integrative Protocols for Metabolic, Musculoskeletal & Chronic Conditions" |
| `WelcomeArea.jsx` | Welcome | Hardcoded | "Daily Spanz is an Elegant, good looking beauty spa..." | "Oriolus Scientific Yoga & Naturopathy Research Center is a pioneering holistic healthcare institution combining accredited Naturopathic medical science with authentic classical Yoga therapy." |
| `WelcomeArea.jsx` | Mission/Vision | Hardcoded | "Explain to you how all this mistaken idea..." | **Our Mission:** To provide scientifically validated, drugless, holistic healthcare through Yoga and Naturopathy.<br>**Our Vision:** Global leadership in natural medicine research and transformative patient healing. |
| `ProceduresList.jsx` | Therapies | Data array | Hot Stone Massage, Facial Treatment, Pedicure & Menicure, Salt & Oil Bath | **1. Classical Naturopathy & Hydrotherapy**, **2. Medical Yoga & Pranayama Therapy**, **3. Mud & Herbal Detox Therapy**, **4. Therapeutic Dietetics & Fasting Science** |
| `WhyChooseUs.jsx` | 6 Pillars | Hardcoded | Mind Relaxing, Healthy Life, Special Guides, Herbal & Natural, Well Care Therapists, Effective Treatments | **1. Medically Credible Protocols**, **2. Evidence-Based Research**, **3. Certified Naturopaths & Doctors**, **4. Pure 100% Drugless Healing**, **5. Individualized Patient Care**, **6. Integrative Wellness Campus** |
| `Testimonials.jsx` | Reviews | Data array | Findlay Davis, Linforde Iris, Marsh Harnel (Spa vacation quotes) | Verified Patient Recovery Case Studies (Reversal of Hypertension, Chronic Arthritis Management, Type 2 Diabetes Remission) |
| `QuickAppointment.jsx` | Badge & Form | Hardcoded | "Since 1991, 26 Years of experience" | "Accredited Center of Excellence — Research & Clinical Naturopathy by Funicle Health Care & Wellness" |
| `PricingPlans.jsx` | Pricing | Data array | Family Pack $49, Premium Pack $79, Ultimate Pack $99 | **OPD Consultation & Assessment**, **7-Day Intensive Detox Program**, **21-Day Chronic Disease Reversal Retreat** |
| `LatestBlog.jsx` | Publications | Data array | "Massage therapy for managing work place stress" | **1. Clinical Research: Impact of Pranayama on Autonomic Balance**, **2. Therapeutic Fasting in Metabolic Disorders**, **3. Hydrotherapy Mechanisms in Chronic Pain** |
| `Footer.jsx` | Footer | Hardcoded | "Daily Spanz brings 41 years of interior designs..." | "ORIOLUS SCIENTIFIC — Yoga & Naturopathy Research Center. A Division of Funicle Health Care and Wellness Pvt. Ltd. Committed to clinical excellence, evidence-based natural healing, and scientific wellness research." |

---

## 14. Oriolus Migration Mapping

This mapping defines how existing pages and components directly map to the **Oriolus Scientific** brand ecosystem:

```text
TEMPLATE SECTION / PAGE                -->  ORIOLUS SCIENTIFIC TARGET ROLE
─────────────────────────────────────────────────────────────────────────────────────────────────
HomePage.jsx                           -->  Oriolus Scientific Flagship Portal (Hero, Mission, Clinical Disciplines, Research Highlights, OPD Booking)
AboutPage.jsx                          -->  Institutional Profile, Research Philosophy, Funicle Health Care & Wellness Heritage
TherapistsPage.jsx                     -->  Medical Advisory Board, Chief Medical Officers, Dr. Vijay & Certified Naturopaths
ProceduresPage.jsx                     -->  Comprehensive Naturopathic & Yogic Therapies Overview
MassageTherapyPage.jsx                 -->  Therapeutic Manipulative Therapy & Acupressure
FacialTreatmentsPage.jsx               -->  Herbal Facial Reflexology & Botanical Skin Health
PedicureMenicurePage.jsx               -->  Extremity Hydrotherapy & Reflexology Care
SaltOilBathPage.jsx                    -->  Hydrotherapy (Steam, Spinal Bath, Hip Bath, Immersion Salt Soak) & Mud Therapy
PerfectMakeupPage.jsx                  -->  Holistic Aesthetic Wellness & Natural Rejuvenation
HairTreatmentsPage.jsx                 -->  Herbal Scalp Therapies & Botanical Trichology
AppointmentPage.jsx                    -->  Clinical OPD Consultation & In-Patient Admission Request Portal
TestimonialsPage.jsx                   -->  Clinical Case Studies, Patient Recovery Testimonials & Clinical Outcomes
FaqPage.jsx                            -->  Naturopathy Principles, In-Patient Guidelines, Diet Protocols & FAQs
GalleryGridPage.jsx                    -->  Research Center, Organic Herb Gardens, Yoga Pavilions & Clinical Suites
GallerySinglePage.jsx                  -->  Detailed Clinical Case Study (e.g. Metabolic Syndrome Reversal Case Study)
BlogDefaultPage.jsx / BlogSinglePage   -->  Scientific Research Papers, Naturopathic Clinical Bulletins & Wellness Journals
ShopPage.jsx / ShopSinglePage          -->  Standardized Herbal Formulations, Therapeutic Teas & Naturopathic Supplies
ShoppingCartPage / CheckoutPage        -->  Prescription & Botanical Order Processing
AccountPage.jsx                        -->  Patient Portal (Health Records, Consultation History & Care Plans)
ContactPage.jsx                        -->  Center Location, OPD Consultation Schedule, Map & Inquiries
Footer.jsx                             -->  Institutional Accreditation, Legal Notice (Funicle Health Care and Wellness Pvt. Ltd.), OPD Timings
```

---

## 15. Components That Must Be Protected

The following visually superior UI architectures in the template **must be 100% preserved** without structural disruption:

1. **`HeroSlider.jsx`:** The 3-slide layered typography animations, smooth transitions, and responsive overlay coordinates.
2. **`ProceduresList.jsx` & `ProceduresPage.jsx`:** The unique `.overlay-style-one` hover-reveal card interaction with double-layer vector badges.
3. **`WhyChooseUs.jsx`:** The 6-box double-bordered circular icon layout (`.inner-border`) and grid spacing.
4. **`Header.jsx`:** The sticky header scroll calculation (`.stricky-fixed`), multi-level dropdown menus, search popover, and mobile toggle drawer.
5. **`QuickAppointment.jsx` & `AppointmentPage.jsx`:** The 26-year laurel emblem layout, clean form inputs, and custom response state screens.
6. **`Footer.jsx`:** The distinctive decorative top arrow, centered logo placement, 4-column balanced widget hierarchy, and sub-footer.
7. **`FaqPage.jsx`:** The 5-tab category switcher and smooth expandable accordion blocks.
8. **`ShopPage.jsx` & `ShopSinglePage.jsx`:** The 3-column product cards, star ratings, and tabbed specifications.
9. **`Testimonials.jsx`:** The circular framed patient headshot and centered quote format.
10. **`ScrollToTop.jsx`:** Smooth window scrolling trigger.

---

## SAFE TO BEGIN CONTENT MIGRATION: YES

*The repository audit is complete. All 25 routes, components, styles, animations, layouts, and demo content locations have been cataloged and mapped. Zero structural code has been modified during Phase 0.*
