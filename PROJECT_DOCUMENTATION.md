# Comprehensive End-to-End Project Documentation: Daily Spanz

**Project Name:** Daily Spanz - Beauty Spa, Salon & Wellness HTML5 Responsive Template  
**Project Type:** Multi-Page Static & Dynamic Web Application Template  
**Architecture:** HTML5, CSS3, JavaScript (ES5/ES6, jQuery), Bootstrap 3.3.6, Slider Revolution, PHP Contact Mailer  
**Generated Date:** August 21, 2026  

---

## Table of Contents
1. [Project Executive Overview](#1-project-executive-overview)
2. [Complete Directory & File Structure](#2-complete-directory--file-structure)
3. [Master File Inventory & Roles](#3-master-file-inventory--roles)
4. [Detailed Page-by-Page Content & Architecture](#4-detailed-page-by-page-content--architecture)
   - 4.1. [index.html (Homepage)](#41-indexhtml-homepage)
   - 4.2. [about.html (About Us)](#42-abouthtml-about-us)
   - 4.3. [procedures.html (Procedures Overview)](#43-procedureshtml-procedures-overview)
   - 4.4. [massage-therapy.html (Single Procedure: Massage Therapy)](#44-massage-therapyhtml-massage-therapy)
   - 4.5. [facial-treatments.html (Single Procedure: Facial Treatments)](#45-facial-treatmentshtml-facial-treatments)
   - 4.6. [pedicure-menicure.html (Single Procedure: Pedicure & Manicure)](#46-pedicure-menicurehtml-pedicure--manicure)
   - 4.7. [salt-oil-bath.html (Single Procedure: Salt and Oil Bath)](#47-salt-oil-bathhtml-salt-and-oil-bath)
   - 4.8. [perfect-makeup.html (Single Procedure: Perfect Makeup)](#48-perfect-makeuphtml-perfect-makeup)
   - 4.9. [hair-treatments.html (Single Procedure: Hair Treatments)](#49-hair-treatmentshtml-hair-treatments)
   - 4.10. [therapists.html (Our Therapists / Team)](#410-therapistshtml-our-therapists--team)
   - 4.11. [appointment.html (Make an Appointment)](#411-appointmenthtml-make-an-appointment)
   - 4.12. [testimonials.html (Client Stories & Reviews)](#412-testimonialshtml-client-stories--reviews)
   - 4.13. [faq.html (Frequently Asked Questions)](#413-faqhtml-frequently-asked-questions)
   - 4.14. [gallery-grid.html (Gallery Grid View)](#414-gallery-gridhtml-gallery-grid-view)
   - 4.15. [gallery-without-grid.html (Gallery Masonry / Fluid View)](#415-gallery-without-gridhtml-gallery-masonry--fluid-view)
   - 4.16. [gallery-single.html (Gallery Single Case Study)](#416-gallery-singlehtml-gallery-single-case-study)
   - 4.17. [blog-default.html (Blog Standard Layout)](#417-blog-defaulthtml-blog-standard-layout)
   - 4.18. [blog-large.html (Blog Large Image Layout)](#418-blog-largehtml-blog-large-image-layout)
   - 4.19. [blog-single.html (Blog Single Post Details)](#419-blog-singlehtml-blog-single-post-details)
   - 4.20. [shop.html (E-Commerce Product Catalog)](#420-shophtml-e-commerce-product-catalog)
   - 4.21. [shop-single.html (Product Detail & Reviews)](#421-shop-singlehtml-product-detail--reviews)
   - 4.22. [shopping-cart.html (Shopping Cart Management)](#422-shopping-carthtml-shopping-cart-management)
   - 4.23. [checkout.html (Order Checkout & Payment Options)](#423-checkouthtml-order-checkout--payment-options)
   - 4.24. [account.html (User Authentication & My Account)](#424-accounthtml-user-authentication--my-account)
   - 4.25. [contact.html (Contact Us & Interactive Map)](#425-contacthtml-contact-us--interactive-map)
5. [Backend Processing & Email System (`inc/sendmail.php`)](#5-backend-processing--email-system-incsendmailphp)
6. [CSS Architecture, Design System & Typography](#6-css-architecture-design-system--typography)
7. [JavaScript Plugins, Libraries & Custom Engine](#7-javascript-plugins-libraries--custom-engine)
8. [Asset Directories & Third-Party Vendor Modules](#8-asset-directories--third-party-vendor-modules)
9. [Iconography, Fonts & Media Structure](#9-iconography-fonts--media-structure)
10. [Step-by-Step Customization & Deployment Guide](#10-step-by-step-customization--deployment-guide)

---

## 1. Project Executive Overview

**Daily Spanz** is a complete, enterprise-grade, responsive website template specifically crafted for luxury beauty salons, wellness centers, holistic spa resorts, massage clinics, nail salons, and cosmetic treatment practices.

### Key Capabilities & Highlights:
- **Total HTML Webpages:** 25 pre-built production-ready HTML5 templates.
- **E-Commerce Suite:** Product listing catalog, product details with zoom, interactive cart manager, checkout billing/shipping, user account registration/login.
- **Service & Procedure Showcase:** Overview page plus 6 dedicated individual service deep-dive pages.
- **Booking Engine:** Interactive appointment booking forms with date/time pickers and staff/service selectors.
- **Customer Engagement:** Multi-category FAQ accordions, testimonials carousels, filterable portfolio/gallery grids, multiple blog formats with comment threads.
- **Interactive UI Elements:** Slider Revolution multi-layer animated banners, sticky responsive navigation with mobile off-canvas toggle, Google Maps integration, count-up metric stats, touchspin number inputs, price slider filters, and lightbox popups.
- **Responsive & Cross-Browser:** Fully adapted for ultra-wide desktops, laptops, tablets, and mobile devices (iOS, Android, Windows, macOS).

---

## 2. Complete Directory & File Structure

```text
Daily_spanz-html/
│
├── about.html
├── account.html
├── appointment.html
├── blog-default.html
├── blog-large.html
├── blog-single.html
├── checkout.html
├── contact.html
├── facial-treatments.html
├── faq.html
├── gallery-grid.html
├── gallery-single.html
├── gallery-without-grid.html
├── hair-treatments.html
├── index.html
├── massage-therapy.html
├── pedicure-menicure.html
├── perfect-makeup.html
├── procedures.html
├── salt-oil-bath.html
├── shop-single.html
├── shop.html
├── shopping-cart.html
├── testimonials.html
├── therapists.html
│
├── inc/
│   └── sendmail.php
│
├── css/
│   ├── animate.css
│   ├── bootstrap-select.min.css
│   ├── bootstrap.min.css
│   ├── flaticon.css
│   ├── flexslider.css
│   ├── font-awesome.min.css
│   ├── hover.css
│   ├── icomoon.css
│   ├── imp.css
│   ├── jquery.bootstrap-touchspin.css
│   ├── jquery.bxslider.css
│   ├── jquery.fancybox.css
│   ├── owl.carousel.css
│   ├── owl.theme.default.min.css
│   ├── prettyPhoto.css
│   ├── responsive.css
│   └── style.css
│
├── js/
│   ├── bootstrap.min.js
│   ├── custom.js
│   ├── gmaps.js
│   ├── html5shiv.js
│   ├── imagezoom.js
│   ├── isotope.js
│   ├── jquery-latest.js
│   ├── jquery.appear.js
│   ├── jquery.bootstrap-touchspin.js
│   ├── jquery.bxslider.min.js
│   ├── jquery.countTo.js
│   ├── jquery.countdown.min.js
│   ├── jquery.easing.min.js
│   ├── jquery.fancybox.pack.js
│   ├── jquery.mixitup.min.js
│   ├── jquery.prettyPhoto.js
│   ├── map-helper.js
│   ├── owl.carousel.min.js
│   ├── validation.js
│   └── wow.js
│
├── fonts/
│   ├── FontAwesome.otf
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   ├── fontawesome-webfont.woff2
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   ├── glyphicons-halflings-regular.woff
│   ├── glyphicons-halflings-regular.woff2
│   └── flaticon/
│       ├── Flaticon.eot
│       ├── Flaticon.svg
│       ├── Flaticon.ttf
│       ├── Flaticon.woff
│       └── flaticon.css
│
├── assets/
│   ├── bootstrap-sl-1.12.1/
│   │   ├── bootstrap-select.css
│   │   ├── bootstrap-select.js
│   │   ├── bootstrap-select.min.css
│   │   └── bootstrap-select.min.js
│   ├── html5lightbox/
│   │   ├── html5lightbox.js
│   │   └── icons & skins/
│   ├── jquery-ui-1.11.4/
│   │   ├── jquery-ui.css
│   │   ├── jquery-ui.js
│   │   ├── jquery-ui.min.css
│   │   ├── jquery-ui.min.js
│   │   └── jquery-ui.structure.css
│   ├── language-switcher/
│   │   ├── jquery.polyglot.language.switcher.js
│   │   └── polyglot-language-switcher.css
│   ├── price-filter/
│   │   ├── jquery-ui.css
│   │   ├── jquery-ui.js
│   │   ├── nouislider.js
│   │   └── nouislider.pips.css
│   ├── revolution/
│   │   ├── css/ (layers.css, navigation.css, settings.css)
│   │   └── js/ (jquery.themepunch.tools.min.js, jquery.themepunch.revolution.min.js, and extension scripts)
│   └── timepicker/
│       ├── timePicker.css
│       └── timePicker.js
│
└── images/
    ├── about/ (About page imagery and certificates)
    ├── blog/ (Blog thumbnails, latest-blog-1/2/3, blog single banners, author avatars)
    ├── brand/ (Client and partner brand logos 1.png - 5.png)
    ├── certificates/ (Award and accreditation badges)
    ├── events/ (Special events and workshop photos)
    ├── fancybox/ (Fancybox UI navigation icons and preloader sprites)
    ├── favicon/ (Apple touch icon, favicon-16x16, favicon-32x32)
    ├── footer/ (Footer logo, background textures, latest news miniatures)
    ├── icon/ (Custom decorative vectors, laurel wreaths, appointment icons)
    ├── prettyPhoto/ (PrettyPhoto lightbox theme assets)
    ├── procedure-single/ (Dedicated high-res procedure hero banners)
    ├── procedures/ (Procedure category feature cards 1.png - 6.png)
    ├── projects/ (Gallery and portfolio images 1.jpg - 9.jpg)
    ├── resources/ (Logo, breadcrumb background, slogan background, welcome image, decorative arrows)
    ├── shop/ (E-commerce product photos 1.jpg - 12.jpg, single product zoom images)
    ├── sidebar/ (Sidebar banner ads and thumbnail widgets)
    ├── slides/ (Revolution slider full-width hero slides 1.jpg, 2.jpg, 3.jpg)
    ├── team/ (Therapist staff portraits 1.jpg - 8.jpg)
    └── testimonial/ (Client review avatars, testimonial background texture)
```

---

## 3. Master File Inventory & Roles

| # | File Name | Size (approx) | Primary Purpose / Role |
|---|---|---|---|
| 1 | `index.html` | ~62.5 KB | Main landing page featuring full animated slider, value proposition, procedures, testimonials, appointment widget, pricing, blog previews, and footer. |
| 2 | `about.html` | ~39.3 KB | Company heritage, mission & vision, 26-year experience counter, therapist team showcase, and partner brands. |
| 3 | `procedures.html` | ~39.5 KB | Complete procedures catalog showcasing 6 key spa treatments with hover cards, sidebar navigation, and quick booking. |
| 4 | `massage-therapy.html` | ~38.8 KB | Dedicated service deep-dive on Hot Stone & Swedish Massage, benefits checklist, package breakdown, and booking widget. |
| 5 | `facial-treatments.html` | ~38.8 KB | Dedicated service page for Anti-Aging & Herbal Facials, skin rejuvenation techniques, pricing, and consultation CTA. |
| 6 | `pedicure-menicure.html` | ~38.8 KB | Dedicated service page for Hand, Foot, and Nail Spa Care, luxury polish options, hygiene protocols, and pricing. |
| 7 | `salt-oil-bath.html` | ~38.8 KB | Dedicated service page for Hydrotherapy, Dead Sea mineral salt soaking, aromatherapy oils, and detox benefits. |
| 8 | `perfect-makeup.html` | ~38.8 KB | Dedicated service page for Bridal, Event, and High-Fashion makeup artistry, cosmetics brand selection, and schedule planner. |
| 9 | `hair-treatments.html` | ~38.8 KB | Dedicated service page for Scalp therapy, deep conditioning, organic coloring, styling, and pricing tables. |
| 10 | `therapists.html` | ~32.3 KB | Team roster displaying certified therapists, master aesthetician bios, specialties, and social media links. |
| 11 | `appointment.html` | ~26.9 KB | Direct booking portal with multi-field inputs, therapist selection, calendar date selection, and contact sidebar. |
| 12 | `testimonials.html` | ~29.5 KB | Customer feedback showcase featuring reviews, star ratings, video story section, and client quotes. |
| 13 | `faq.html` | ~47.8 KB | Multi-tab interactive accordion answering FAQs on bookings, medical conditions, etiquette, pricing, and gift cards. |
| 14 | `gallery-grid.html` | ~30.5 KB | Filterable responsive image gallery with category tabs and popup lightbox viewing. |
| 15 | `gallery-without-grid.html`| ~31.2 KB | Masonry/fluid full-width layout for visual photo collections and facility tours. |
| 16 | `gallery-single.html` | ~28.3 KB | Single project case study with overview metrics, problem/solution breakdown, and photo carousel. |
| 17 | `blog-default.html` | ~44.3 KB | Standard column blog listing with author info, publication dates, comment counts, pagination, and multi-widget sidebar. |
| 18 | `blog-large.html` | ~43.2 KB | Full-width large-image blog article feed tailored for rich photography and editorial reading. |
| 19 | `blog-single.html` | ~49.0 KB | Individual article view with full article copy, quote callouts, author biography box, related posts, comments thread, and comment form. |
| 20 | `shop.html` | ~51.6 KB | E-commerce storefront with product cards, rating badges, price sorting dropdown, price slider widget, and categories. |
| 21 | `shop-single.html` | ~52.2 KB | Single product page with zoomable gallery, price tags, quantity touchspin, Add to Cart, tabbed specs/reviews, and related items. |
| 22 | `shopping-cart.html` | ~29.5 KB | Full shopping cart table with quantity adjusters, dynamic calculation layout, coupon submission, and subtotal breakdown. |
| 23 | `checkout.html` | ~34.8 KB | Complete checkout flow with billing fields, ship-to-different-address toggle, order summary table, and payment gateway options. |
| 24 | `account.html` | ~28.3 KB | Authentication portal providing split login and registration panels with password recovery links. |
| 25 | `contact.html` | ~26.8 KB | Contact information cards, working hours, working contact form (linked to `sendmail.php`), and Google Map embed. |
| 26 | `inc/sendmail.php` | ~0.9 KB | Server-side PHP script handling form submissions, email header configuration, and response rendering. |

---

## 4. Detailed Page-by-Page Content & Architecture

### Global Elements Present Across All Pages
Every page shares a unified, high-converting layout architecture:
1. **Top Bar:** Phone number `(020) 4567 89012`, Email `Mail@dailyspanz.com`, Physical Address `121, Park Drive, Newyork 10012, USA`, and social media links (Facebook, Twitter, Google+, Pinterest, LinkedIn).
2. **Main Navigation (`.mainmenu-area.stricky`):**
   - Brand Logo (`images/resources/logo.png`)
   - Left Navigation:
     - **Home** (`index.html`)
     - **About Us** (Dropdown: About Daily Spanz, Testimonials, FAQ’s, Make an Appointment)
     - **Procedures** (Dropdown: Massage Therapy, Facial Treatments, Pedicure & Menicure, Salt and Oil Bath, Perfect Makeup, Hair Treatments)
     - **Therapists** (`therapists.html`)
   - Right Navigation:
     - **Blog** (Dropdown: Blog Default, Blog Large, Blog Single Post)
     - **Gallery** (Dropdown: Gallery Grid View, Gallery Without Grid, Gallery Single)
     - **Shop** (Dropdown: Shop Products, Products Single, Shopping Cart, Checkout, My Account)
     - **Contact Us** (`contact.html`)
   - **Search Box:** Expandable search overlay button toggling real-time input.
3. **Breadcrumb Banner (on inner pages):** Parallax background image (`images/resources/breadcrumb-bg.jpg`), dynamic page title, and interactive path trail.
4. **Footer Area (`.footer-area`):**
   - Column 1: Quick Contact info, address, telephone, email, and intro summary.
   - Column 2: Useful Links (split columns of internal links to procedures, pricing, offers, policies).
   - Column 3: Popular Blog Posts with thumbnail, date, and link.
   - Column 4: Newsletter Subscription input with instant submission button and weekly opening hours schedule.
5. **Footer Bottom (`.footer-bottom-area`):** Copyright notice © 2017 All Rights Reserved, Powered by Daily Spanz, and social icons.
6. **Floating Scroll-To-Top Button:** Smooth-scroll back to `<html data-target="html">`.

---

### 4.1. `index.html` (Homepage)
- **Title:** `Home || Daily Spanz || Responsive HTML 5 Template`
- **Section 1 - Revolution Slider (`#slider1`):**
  - *Slide 1:* Left-aligned typography. Title: "Welcome to Daily Spanz", Heading: "Give you unique relaxation experience", Subtitle: "Daily Spanz is an Elegant, good looking Beauty Spa Website.", CTAs: "Know More", "Contact Us". Background: `images/slides/1.jpg`.
  - *Slide 2:* Center-aligned typography. Title: "Refresh, Renew, Rejuvenate...", Heading: "Get a therapy of your choice", CTAs: "Know More", "Contact Us". Background: `images/slides/2.jpg`.
  - *Slide 3:* Right-aligned typography. Title: "Welcome to Daily Spanz", Heading: "Experience the secrets of relaxation", CTAs: "Our Solutions", "Contact Us". Background: `images/slides/3.jpg`.
- **Section 2 - Welcome Area:**
  - Mission statement: "Explain to you how all this mistaken idea of denouncing..."
  - Vision statement: "Pleasure work praising pain ut was born and will give you can complete design..."
  - Consultation Phone CTA: `+321 456 7890`.
  - Featured welcome visual: `images/resources/welcome.jpg`.
- **Section 3 - Our Procedures (4 Core Treatment Cards):**
  1. *Hot Stone Massage* (`flaticon-hands` icon, `images/procedures/1.png`)
  2. *Facial Treatment* (`flaticon-medical` icon, `images/procedures/2.png`)
  3. *Pedicure & Medicure* (`flaticon-people` icon, `images/procedures/3.png`)
  4. *Salt & Oil Bath* (`flaticon-relax` icon, `images/procedures/4.png`)
- **Section 4 - Slogan Callout Banner:**
  - Background: `images/resources/slogan-bg.jpg`.
  - Heading: "Treat Yourself for Rejuvenating Your Body & Soul".
  - CTA Button: "Make an Appointment".
- **Section 5 - Why Choosing Us? (6 Pillar Value Props):**
  1. *Mind Relaxing* (`flaticon-medical-1`)
  2. *Healthy Life* (`flaticon-medical-2`)
  3. *Special Guides* (`flaticon-people-1`)
  4. *Herbal & Natural* (`flaticon-nature-1`)
  5. *Well Care Therapists* (`flaticon-hairdresser`)
  6. *Effective Treatments* (`flaticon-flower`)
- **Section 6 - Testimonials / Successful Stories:**
  - Findlay Davis ("Daily Spanz is outstanding! Great experience and a wonderful addition...")
  - Linforde Iris ("Always a gentle and renewed. I was greeted at the reception desk...")
  - Marsh Harnel ("Comfortable and clean. Daily Spanz is fantastic. From entering into the Spa...")
- **Section 7 - Quick Appointment Section:**
  - Badge: "Since 1991, 26 Years of experience".
  - Form Fields: Name, Email, Service Selector dropdown, Message text area, Submit button.
  - Side Contact Card: Address, Phone `(123) 0200 12345 / 1800-45-678-9012`, Email, Working hours.
- **Section 8 - Pricing Plans (3 Tiers):**
  1. *Family Pack:* `$49/Mo` (Nail Cutting & styling, Spa Therapy with manicure, Foot massage, Hair Coloring & Styling).
  2. *Premium Pack:* `$79/Mo` (Spa Therapy with manicure, Foot massage, Hair Coloring & Styling, Body Hand & Foot massage).
  3. *Ultimate Pack:* `$99/Mo` (Nail Cutting & styling, Spa Therapy with manicure, Foot massage, Hair Coloring & Styling).
- **Section 9 - Latest From Blog (3 Cards):**
  - Post 1: "Massage therapy for managing work place stress" (Category: Massage, April 21, 2017, 10 Comments).
  - Post 2: "When massage may not be a good idea for you" (Category: Wellness, Feb 05, 2017, 24 Comments).
  - Post 3: "New therapy center opened at California" (Category: Massage, Jan 14, 2017, 18 Comments).

---

### 4.2. `about.html` (About Us)
- **Title:** `About || Daily Spanz || Responsive HTML 5 Template`
- **Breadcrumb:** Home > About Us
- **Company Profile:** Detailed narrative covering the inception, spa philosophy, and certified organic treatment products.
- **Mission & Vision Blocks:** Dual card presentation highlighting client care and sustainable skincare.
- **Fact Counter Area (jQuery CountTo):**
  - Stat 1: 26+ Years of Experience
  - Stat 2: 1200+ Satisfied Clients
  - Stat 3: 45+ Master Therapists
  - Stat 4: 100% Herbal & Organic Formulations
- **Therapist Preview Carousel:** Highlighting key specialists with social links.
- **Partner Brands Carousel (`.brand-carousel`):** 5 luxury beauty brand partner logos (`images/brand/1.png` - `5.png`).

---

### 4.3. `procedures.html` (Procedures Overview)
- **Title:** `Procedures || Daily Spanz || Responsive HTML 5 Template`
- **Layout:** 2-Column layout with left navigation sidebar and right service grid.
- **Service Catalog Grid (6 Comprehensive Procedures):**
  1. *Hot Stone Massage:* Thermal basalt stones for muscular release and deep circulatory relaxation.
  2. *Facial Treatments:* Deep pore cleansing, micro-exfoliation, collagen hydration masks.
  3. *Pedicure & Menicure:* Cuticle treatment, exfoliating foot scrubs, paraffin wax wrap, nail art.
  4. *Salt & Oil Bath:* Mineral-rich Himalayan bath salts infused with eucalyptus and lavender oils.
  5. *Perfect Makeup:* Daytime, bridal, and gala evening cosmetic applications by master makeup artists.
  6. *Hair Treatments:* Keratin infusions, botanical scalp massage, restoration masks, precision cutting.
- **Sidebar Elements:** Category menu links, Download Brochure PDF CTA, Quick Appointment Widget.

---

### 4.4. to 4.9. Single Procedure Pages
Each single procedure page provides an in-depth service guide:
- **`massage-therapy.html`:** Focuses on Swedish, Deep Tissue, Hot Stone, and Aromatherapy techniques. Includes session durations (30m, 60m, 90m), pricing tiers, physiological benefits, and booking CTA.
- **`facial-treatments.html`:** Detailed skin-type analysis, organic products, anti-aging serums, procedure steps, and aftercare guidelines.
- **`pedicure-menicure.html`:** Spa manicure, luxury pedicure, reflexology pressure points, gel polishes, and sterilization standards.
- **`salt-oil-bath.html`:** Hydrotherapy tub rituals, dead sea salts, essential oil combinations, aromatherapy sensory benefits.
- **`perfect-makeup.html`:** Color matching, skin prep, contouring, bridal trial bookings, lash extensions, and evening looks.
- **`hair-treatments.html`:** Deep conditioning hair spa, herbal scalp therapy, dandruff/hair-fall solutions, organic hair coloring.

---

### 4.10. `therapists.html` (Our Therapists / Team)
- **Title:** `Therapists || Daily Spanz || Responsive HTML 5 Template`
- **Roster of Specialists (8 Detailed Staff Profiles):**
  1. *Elena Gilbert* - Senior Massage Specialist
  2. *Katherina Pierce* - Master Aesthetician & Skin Care Specialist
  3. *Caroline Forbes* - Nail Art & Pedicure Expert
  4. *Bonnie Bennett* - Herbal Bath & Hydrotherapy Specialist
  5. *Stefan Salvatore* - Deep Tissue & Sports Therapist
  6. *Damon Salvatore* - Wellness & Holistic Consultant
  7. *Rebekah Mikaelson* - Hair Stylist & Scalp Specialist
  8. *Freya Mikaelson* - Luxury Makeup Artist
- **Card Elements:** Professional portrait image, role designation, short bio, social icons (Facebook, Twitter, LinkedIn, Instagram), and direct appointment booking button.

---

### 4.11. `appointment.html` (Make an Appointment)
- **Title:** `Appointment || Daily Spanz || Responsive HTML 5 Template`
- **Interactive Form Fields:**
  - First Name & Last Name (Text inputs)
  - Email Address (Email input)
  - Phone Number (Tel input)
  - Select Procedure / Service (Dropdown select with all 6 spa categories)
  - Select Preferred Therapist (Dropdown select with staff members)
  - Preferred Date (jQuery UI Datepicker input)
  - Preferred Time (Timepicker dropdown: Morning, Afternoon, Evening slots)
  - Special Requests / Health Notes (Multi-line textarea)
  - Submit Booking Request (Button triggering validation)
- **Right Information Panel:** Operating hours schedule, emergency contact line, cancellation policy notice.

---

### 4.12. `testimonials.html` (Client Stories & Reviews)
- **Title:** `Testimonials || Daily Spanz || Responsive HTML 5 Template`
- **Layout:** Grid of client feedback cards with star rating badges, customer headshots, quote text, client location/profession, and date of visit.
- **Video Experience Section:** Video modal lightbox showcasing customer relaxation stories and facility tour.

---

### 4.13. `faq.html` (Frequently Asked Questions)
- **Title:** `FAQ’s || Daily Spanz || Responsive HTML 5 Template`
- **Tabbed Category System (`.tab-menu`):**
  1. *About Daily Spanz:* Facility questions, parking, arrival times, gift certificates.
  2. *Body Massage Therapy:* What to wear, pressure adjustment, medical contraindications.
  3. *Polish Your Skin:* Skin sensitivity precautions, frequency of exfoliation, sun exposure.
  4. *Manicure / Pedicure:* Polish longevity, hygiene and autoclave sterilization protocols.
  5. *Spa Pricing Plan:* Package discounts, membership subscriptions, refund policies.
- **Interactive Collapsible Accordions:** Animated expand/collapse for smooth reading.
- **Submit a Question Box:** Dedicated inquiry form for unlisted queries.

---

### 4.14. `gallery-grid.html` (Gallery Grid View)
- **Title:** `Gallery || Daily Spanz || Responsive HTML 5 Template`
- **Filtering System (Isotope / MixItUp):**
  - `*` (All Works)
  - `.massage` (Massage & Bodywork)
  - `.facial` (Facials & Skincare)
  - `.pedicure` (Nails & Pedicure)
  - `.makeup` (Makeup Artistry)
- **Item Overlay:** Magnifying glass icon opening PrettyPhoto/HTML5Lightbox fullscreen preview, link icon navigating to `gallery-single.html`.

---

### 4.15. `gallery-without-grid.html` (Gallery Masonry / Fluid View)
- **Title:** `Gallery Without Grid || Daily Spanz || Responsive HTML 5 Template`
- **Layout:** Full-bleed fluid dynamic column layout allowing variable image heights and creative masonry displays.

---

### 4.16. `gallery-single.html` (Gallery Single Case Study)
- **Title:** `Gallery Single || Daily Spanz || Responsive HTML 5 Template`
- **Content:** Case study presentation of a custom spa retreat package, client goals, treatment roadmap, before-and-after imagery slider, therapist notes, and project metadata (Date, Category, Client, Duration).

---

### 4.17. `blog-default.html` & 4.18. `blog-large.html` (Blog Listings)
- **Titles:** `Blog Default` / `Blog Large || Daily Spanz || Responsive HTML 5 Template`
- **Feed Elements:** Featured images, Category badges, Date stamps, Author names, Comment count counters, Excerpt paragraphs, "Read More" button.
- **Pagination:** Numbered page selector (1, 2, 3, Next `fa-angle-right`).
- **Sidebar Widgets:**
  - Search input widget
  - Category list with post counts
  - Recent / Popular Posts with miniatures
  - Tag Cloud (Spa, Organic, Massage, Beauty, Oils, Health)
  - Promotional Banner Ad

---

### 4.19. `blog-single.html` (Blog Post Details)
- **Title:** `Blog Single || Daily Spanz || Responsive HTML 5 Template`
- **Article Header & Body:** Full-length educational article with typography styling, bulleted benefit lists, and blockquote pull-quotes.
- **Author Bio Card:** Author headshot, bio, social links.
- **Post Navigation:** Previous Post & Next Post arrows with title teasers.
- **User Comments Section:** Threaded comment tree showing reviewer avatars, timestamps, reply buttons.
- **Leave a Comment Form:** Name, Email, Website, Message textarea with client-side validation.

---

### 4.20. `shop.html` (E-Commerce Product Catalog)
- **Title:** `Shop || Daily Spanz || Responsive HTML 5 Template`
- **Catalog Layout:** 3-column product grid (12 featured products):
  1. *Jumping Rope* - `$34.99`
  2. *Running Shoe* - `$44.99`
  3. *Herbal Body Scrub* - `$29.99`
  4. *Organic Lavender Oil* - `$19.99`
  5. *Aromatherapy Diffuser* - `$49.99`
  6. *Facial Cleansing Gel* - `$24.99`
  7. *Dead Sea Bath Salts* - `$18.99`
  8. *Botanical Hair Serum* - `$32.99`
  9. *Nail Care & Polish Kit* - `$27.99`
  10. *Jade Face Roller* - `$22.99`
  11. *Detox Herbal Tea Blend* - `$15.99`
  12. *Luxury Spa Robe* - `$65.00`
- **Product Controls:** Sorting dropdown (Default, Price Low to High, Price High to Low, Rating), Price Range slider widget, Cart overlay button.

---

### 4.21. `shop-single.html` (Product Detail & Reviews)
- **Title:** `Shop Single || Daily Spanz || Responsive HTML 5 Template`
- **Visuals:** Main image with zoom preview (`js/imagezoom.js`) and thumbnail carousel.
- **Details:** Product SKU, Stock Status ("In Stock"), Star Rating (5/5), Price, Description copy.
- **Cart Form:** TouchSpin quantity selector, "Add to Cart" button.
- **Product Tabs:**
  - *Description:* Full specifications, ingredients, directions of use.
  - *Additional Information:* Dimensions, weight, organic certification.
  - *Reviews (3):* Customer feedback list and submission form with star-rating selector.
- **Related Products Carousel:** Carousel of 4 recommended items.

---

### 4.22. `shopping-cart.html` (Shopping Cart Management)
- **Title:** `Cart || Daily Spanz || Responsive HTML 5 Template`
- **Cart Table Columns:** Remove Button (`fa-times`), Product Thumbnail, Product Name, Unit Price, Quantity Spinner, Subtotal.
- **Coupon Application Form:** Coupon code input field and "Apply Coupon" button.
- **Cart Totals Summary Box:**
  - Cart Subtotal
  - Shipping Calculation (Free Shipping / Flat Rate)
  - Order Total
  - "Proceed to Checkout" CTA button.

---

### 4.23. `checkout.html` (Order Checkout & Payment)
- **Title:** `Checkout || Daily Spanz || Responsive HTML 5 Template`
- **Billing Details Form:** First Name, Last Name, Company Name, Email, Phone, Country dropdown, Street Address, City, State/Province, Postcode/ZIP, Account creation checkbox.
- **Ship to Different Address:** Collapsible checkbox revealing separate shipping address inputs.
- **Order Review Table:** Summary of purchased products, quantities, and line totals.
- **Payment Method Selectors:**
  - Direct Bank Transfer (with instruction text)
  - Cheque Payment
  - PayPal & Credit Card Gateway
- **Action:** "Place Order" submission button.

---

### 4.24. `account.html` (User Authentication & My Account)
- **Title:** `Account || Daily Spanz || Responsive HTML 5 Template`
- **2-Column Split Interface:**
  - *Login Column:* Username or Email input, Password input, "Remember Me" checkbox, "Login" button, "Lost your password?" link.
  - *Register Column:* Email address input, Password input, Privacy Policy disclaimer, "Register" button.

---

### 4.25. `contact.html` (Contact Us & Interactive Map)
- **Title:** `Contact Us || Daily Spanz || Responsive HTML 5 Template`
- **Google Maps Integration:** Full-width interactive map centered on New York office (`js/gmaps.js` & `js/map-helper.js`).
- **Contact Cards:** Address, Phone, Email, Operating Hours.
- **Contact Inquiry Form:**
  - Full Name (`name="form_name"`, required)
  - Email (`name="form_email"`, required)
  - Phone Number (`name="form_phone"`)
  - Subject (`name="form_subject"`)
  - Message (`name="form_message"`, required)
  - Bot Protection (`name="form_botcheck"`, hidden honey-pot)
  - Submit Button (`thm-btn bgclr-1`) triggering `inc/sendmail.php`.

---

## 5. Backend Processing & Email System (`inc/sendmail.php`)

The contact form submissions are processed via `inc/sendmail.php`.

### Code Implementation:
```php
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$dropdown = $_POST['dropdown'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "your@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo '<div class="form-group">
<div style="background: #fff;padding-top:200px;color:#fff;">
    <div class="container" style="position: static;max-width: 1200px;margin: 0 auto;background: #131d33;padding: 100px 15px;text-align: center;">
        <h1 style="text-shadow: 11px 20px 8px rgb(0, 0, 0);">Congratulations! Your Mail has been sent Successfully from '.$email.' </h1>
        <a href="contact.html" style="background: #ffffff;text-decoration: none;color: #000;font-weight: 700;padding: 15px 30px;margin-top: 10px;display: inline-block;">Back To Home</a>
    </div>
</div>
</div>';
?>
```

### Configuration Instructions:
To receive leads directly to your mailbox:
1. Open `inc/sendmail.php`.
2. Locate line 7: `$recipient = "your@gmail.com";`.
3. Replace `"your@gmail.com"` with your actual business email address (e.g., `info@yourspadomain.com`).

---

## 6. CSS Architecture, Design System & Typography

### Master CSS Stylesheets
1. **`css/style.css` (144 KB):** The core design system containing global resets, header styling, navigation states, hero sections, pricing cards, shop widgets, comment lists, and footer styles.
2. **`css/responsive.css` (37.4 KB):** Media query breakpoints optimizing layouts across desktops (`1200px+`), laptops (`992px - 1199px`), tablets (`768px - 991px`), and smartphones (`< 767px`).
3. **`css/bootstrap.min.css` (121.2 KB):** Grid foundation, column flexibilities, and utility classes.
4. **`css/animate.css` (23.8 KB):** WOW.js CSS3 keyframe animations (`fadeInUp`, `slideInRight`, `bounceIn`, etc.).
5. **`css/hover.css` (117.9 KB):** Micro-interactions and hover animation effects on buttons and image overlays.
6. **`css/font-awesome.min.css` (27.5 KB):** FontAwesome 4.7.0 vector icons.
7. **`css/flaticon.css` & `css/icomoon.css`:** Custom spa icons (lotus flowers, hands, essential oils, laurel wreaths).
8. **`css/owl.carousel.css` & `css/owl.theme.default.min.css`:** Touch-friendly slider styling.
9. **`css/jquery.bxslider.css` & `css/jquery.fancybox.css`:** Slider and modal popup wrappers.
10. **`css/prettyPhoto.css`:** Image lightbox styling.
11. **`css/bootstrap-select.min.css` & `css/jquery.bootstrap-touchspin.css`:** Form UI enhancements.

### Color Palette System
- **Primary Accent / Gold:** `#c59d5f` (Warm golden bronze representing luxury & tranquility)
- **Primary Accent Hover:** `#b38c4f`
- **Dark Neutral / Charcoal:** `#262626` / `#1a1a1a` (High-contrast typography & dark banners)
- **Light Neutral / Cream:** `#f9f8f6` / `#f4f4f4` (Card backgrounds & section backdrops)
- **Muted Text / Gray:** `#777777` / `#888888` (Body copy & metadata)
- **Pure White:** `#ffffff` (Card surfaces & contrast headings)
- **Borders & Dividers:** `#e5e5e5` / `#eaeaea`

---

## 7. JavaScript Plugins, Libraries & Custom Engine

### Master Execution Flow (`js/custom.js`)
`custom.js` acts as the central conductor initializing all jQuery modules on DOM ready:
- **`revolutionSliderActiver()`:** Configures Revolution Slider 5.0 with full parallax layers, Ken Burns effects, and responsive grid calculations.
- **`mainmenu()` & `stickyHeader()`:** Computes window scroll offset (`> 100px`) to attach `.stricky-fixed` class and reveal the sticky navigation bar.
- **`scrollToTop()`:** Handles smooth page scrolling when the footer up-arrow is clicked.
- **`brandCarousel()` & `testimonialCarousel()`:** Initializes Owl Carousel with responsive item breakpoints.
- **`priceFilter()`:** Configures jQuery UI / NoUiSlider price range handles.
- **`cartTouchSpin()`:** Attaches TouchSpin quantity controls to product quantity inputs.
- **`contactFormValidation()`:** Integrates `js/validation.js` with AJAX feedback.

### Script Directory Reference:
- `jquery-latest.js`: jQuery core framework.
- `bootstrap.min.js`: Bootstrap 3 UI components (modals, dropdowns, collapse).
- `wow.js`: Scroll-triggered reveal animations.
- `isotope.js` & `jquery.mixitup.min.js`: Dynamic sorting and masonry layout engines.
- `jquery.countTo.js`: Animated metric number counters.
- `jquery.countdown.min.js`: Special offer countdown clocks.
- `jquery.fancybox.pack.js` & `jquery.prettyPhoto.js`: Modal lightbox viewing.
- `imagezoom.js`: E-commerce product photo magnification on hover.
- `gmaps.js` & `map-helper.js`: Google Maps API marker rendering and styling.

---

## 8. Asset Directories & Third-Party Vendor Modules

The `assets/` directory houses specialized third-party toolkits:
- **`assets/revolution/`:** Complete Slider Revolution 5 bundle including tools, animation extensions (actions, carousel, kenburn, layeranimation, navigation, parallax, slideanims, video).
- **`assets/timepicker/`:** Specialized time selection UI for scheduling spa visits.
- **`assets/bootstrap-sl-1.12.1/`:** Enhanced `<select>` dropdown replacement with search filtering.
- **`assets/jquery-ui-1.11.4/`:** jQuery UI theme, datepicker, and slider widgets.
- **`assets/price-filter/`:** Interactive dual-handle price range slider.
- **`assets/language-switcher/`:** Polyglot multi-language dropdown selector.
- **`assets/html5lightbox/`:** Mobile-compatible HTML5 video and photo lightbox player.

---

## 9. Iconography, Fonts & Media Structure

### Typography & Google Web Fonts:
- Primary Headings: *Playfair Display* / *Oswald* (Sophisticated serif & clean display fonts).
- Body Copy: *Open Sans* / *Roboto* (Clean, legible sans-serif for reading comfort).

### Icon Font Glyphs:
- **Flaticon Glyph Set:**
  - `flaticon-hands`: Massage & Body treatments
  - `flaticon-medical`: Skin & facial therapies
  - `flaticon-people`: Manicure & Pedicure
  - `flaticon-relax`: Salt bath & hydrotherapy
  - `flaticon-light`: Ambient relaxation
  - `flaticon-flower`: Organic botanicals
  - `flaticon-laurel`: Awards & years of experience badge
  - `flaticon-location`, `flaticon-technology`, `flaticon-note`, `flaticon-clock`: Contact info icons

---

## 10. Step-by-Step Customization & Deployment Guide

### A. Updating Business Info & Branding
1. **Logo:** Replace `images/resources/logo.png` (navbar) and `images/footer/footer-logo.png` (footer) with your branded PNG logo (recommended height: 50px - 70px).
2. **Contact Details:** Search across HTML files for `(020) 4567 89012`, `Mail@dailyspanz.com`, and `121, Park Drive` to replace them with your actual business contact data.
3. **Google Map Pin:** Open `js/map-helper.js`, locate `latitude` and `longitude`, and input your venue's GPS coordinates.

### B. Configuring Booking & Contact Forms
1. Open `inc/sendmail.php`.
2. Update line 7 with your email address: `$recipient = "admin@yourdomain.com";`.
3. If deploying to a server requiring SMTP (e.g. PHPMailer / SendGrid / Amazon SES), integrate your credentials into `inc/sendmail.php`.

### C. Adding or Modifying Products & Services
1. **New Services:** Duplicate any single procedure template (e.g. `massage-therapy.html`), rename it (e.g. `aromatherapy.html`), update text/images, and add a link in `procedures.html` and the main navbar.
2. **New Products:** Duplicate product blocks in `shop.html`, configure images in `images/shop/`, and link to updated `shop-single.html` pages.

### D. Production Deployment
- **Static Hosting (Vercel / Netlify / GitHub Pages / Cloudflare Pages):** All HTML, CSS, JS, and image files will work immediately out-of-the-box. Note: To use the PHP mail script on static hosts, replace `inc/sendmail.php` with a serverless function or form service (such as Formspree, Basin, or Netlify Forms).
- **Standard Web Hosting (cPanel / Apache / Nginx / Plesk):** Upload the contents of the `Daily_spanz-html` directory to your `public_html` or document root. Ensure PHP 7.4+ or 8.x is enabled to process `inc/sendmail.php`.

---

## Document Summary & Verification
This master document outlines the entire end-to-end structure, content copy, file organization, assets, styles, scripts, forms, and deployment workflows for the **Daily Spanz** project. Every single file, section, and component in the repository is cataloged above.
