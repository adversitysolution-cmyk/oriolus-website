# ORIOLUS_MIGRATION_TRACKER.md

**Target Organization:** ORIOLUS SCIENTIFIC — Yoga & Naturopathy Research Center  
**Parent Entity:** A Division of Funicle Health Care and Wellness Pvt. Ltd.  
**Tracker Purpose:** Phase-by-Phase Execution, Verification & Quality Assurance  
**Last Updated:** August 21, 2026  
**Current Phase:** PHASE 1 — Safe Migration Baseline  

---

## Migration Progress Overview

| # | Migration Phase | Status | Validation Status |
|---|---|---|---|
| 1 | Baseline | COMPLETED | VERIFIED (Build: 0 errors) |
| 2 | Branding | PENDING | AWAITING PHASE 2 |
| 3 | Content Architecture | PENDING | AWAITING PHASE 3 |
| 4 | Navigation | PENDING | AWAITING PHASE 4 |
| 5 | Homepage | PENDING | AWAITING PHASE 5 |
| 6 | About | PENDING | AWAITING PHASE 6 |
| 7 | Yoga | PENDING | AWAITING PHASE 7 |
| 8 | Naturopathy | PENDING | AWAITING PHASE 8 |
| 9 | Ayurveda | PENDING | AWAITING PHASE 9 |
| 10 | Acupuncture | PENDING | AWAITING PHASE 10 |
| 11 | Programs | PENDING | AWAITING PHASE 11 |
| 12 | Contact | PENDING | AWAITING PHASE 12 |
| 13 | Footer | PENDING | AWAITING PHASE 13 |
| 14 | SEO | PENDING | AWAITING PHASE 14 |
| 15 | Imagery | PENDING | AWAITING PHASE 15 |
| 16 | Responsive QA | PENDING | AWAITING PHASE 16 |
| 17 | Content QA | PENDING | AWAITING PHASE 17 |
| 18 | Performance QA | PENDING | AWAITING PHASE 18 |
| 19 | Accessibility QA | PENDING | AWAITING PHASE 19 |
| 20 | Final Cleanup | PENDING | AWAITING PHASE 20 |

---

## Detailed Phase Breakdown

### 1. Phase: Baseline
- **Status:** `COMPLETED`
- **Affected Files:**
  - `React/package.json`
  - `React/vite.config.js`
  - `React/index.html`
  - `React/src/App.jsx`
  - `React/src/main.jsx`
- **Completed Changes:**
  - Verified pure React 18 / Vite project isolation inside `React/` folder.
  - Confirmed 0 compilation errors and 0 broken imports on production build.
  - Verified Git status and ensured no uncommitted user files are modified.
  - Completed Phase 0 Audit (`TEMPLATE_AUDIT.md`) and Phase 1 Migration Tracker (`ORIOLUS_MIGRATION_TRACKER.md`).
- **Remaining Work:** None for Baseline.
- **Validation Status:** `PASSED` (`npm run build` completed in 2.81s with 0 errors).

---

### 2. Phase: Branding
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/components/common/Header.jsx`
  - `React/src/components/common/Footer.jsx`
  - `React/index.html`
- **Completed Changes:** Pre-migration audit completed; brand guidelines documented.
- **Remaining Work:**
  - Update Brand Title: "ORIOLUS SCIENTIFIC — Yoga & Naturopathy Research Center (A Division of Funicle Health Care and Wellness Pvt. Ltd.)".
  - Integrate Oriolus Scientific logos into Header and Footer.
  - Align contact telephone, email (`info@oriolusscientific.com`), and physical campus address.
- **Validation Status:** `AWAITING EXECUTION`

---

### 3. Phase: Content Architecture
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/App.jsx`
  - All 25 component page files in `React/src/pages/`
- **Completed Changes:** Architecture mapping defined in `TEMPLATE_AUDIT.md`.
- **Remaining Work:**
  - Map clinical therapy taxonomy: Classical Naturopathy, Medical Yoga, Mud Therapy, Hydrotherapy, Dietetics & Fasting Science, Acupuncture & Manipulative Care.
  - Structure patient care pathways, research bulletins, and OPD booking states.
- **Validation Status:** `AWAITING EXECUTION`

---

### 4. Phase: Navigation
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/components/common/Header.jsx`
- **Completed Changes:** Dynamic sticky navigation and mobile drawer structure verified.
- **Remaining Work:**
  - Replace demo nav labels with: Home, About Us (Philosophy, Research Center, Dr. Vijay, Heritage), Therapies (Naturopathy, Yoga, Hydrotherapy, Mud Therapy, Acupuncture, Dietetics), Programs (7-Day Detox, Chronic Disease Reversal, Wellness Retreats), Research & Publications, Patient Portal, Contact Us.
- **Validation Status:** `AWAITING EXECUTION`

---

### 5. Phase: Homepage
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/components/home/HeroSlider.jsx`
  - `React/src/components/home/WelcomeArea.jsx`
  - `React/src/components/home/ProceduresList.jsx`
  - `React/src/components/home/SloganBanner.jsx`
  - `React/src/components/home/WhyChooseUs.jsx`
  - `React/src/components/home/Testimonials.jsx`
  - `React/src/components/home/QuickAppointment.jsx`
  - `React/src/components/home/PricingPlans.jsx`
  - `React/src/components/home/LatestBlog.jsx`
- **Completed Changes:** All 9 homepage components isolated and audited.
- **Remaining Work:**
  - Migrate Hero Slider to Oriolus Scientific Research & Clinical Excellence slides.
  - Update Welcome Area with institutional mission and vision of Funicle Health Care and Wellness.
  - Populate 4 core clinical disciplines in Procedures List.
  - Transform Why Choose Us into 6 medical & research pillars.
  - Update Patient Stories with authentic clinical recovery outcomes.
  - Configure OPD Consultation booking widget and clinical wellness packages.
- **Validation Status:** `AWAITING EXECUTION`

---

### 6. Phase: About
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/AboutPage.jsx`
- **Completed Changes:** Counter metrics and section structure cataloged.
- **Remaining Work:**
  - Update institutional history: Funicle Health Care and Wellness Pvt. Ltd. foundation.
  - Update Research Center statistics (Clinical Trials, Patients Healed, Certified Naturopaths, 100% Drugless Therapies).
  - Add Naturopathic Philosophy and accreditation statements.
- **Validation Status:** `AWAITING EXECUTION`

---

### 7. Phase: Yoga (Medical Yoga & Pranayama)
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/MassageTherapyPage.jsx` (mapped to Medical Yoga & Therapy)
  - `React/src/components/procedures/ProcedureSidebar.jsx`
- **Completed Changes:** Template geometry and sidebar architecture preserved.
- **Remaining Work:**
  - Populate evidence-based Yoga Therapy, Asana bio-mechanics, Pranayama autonomic balancing, and Meditation research protocols.
  - Include session durations, physiological mechanisms, and clinical consultation CTA.
- **Validation Status:** `AWAITING EXECUTION`

---

### 8. Phase: Naturopathy (Classical Clinical Therapies)
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/ProceduresPage.jsx`
  - `React/src/pages/FacialTreatmentsPage.jsx`
  - `React/src/pages/SaltOilBathPage.jsx`
- **Completed Changes:** Therapy card grid and sidebar verified.
- **Remaining Work:**
  - Detail Hydrotherapy (Hip Bath, Spinal Spray, Steam Inhalation, Immersion Baths).
  - Detail Mud Therapy (Full-Body Mineral Mud Packs, Abdominal Mud Applications).
  - Detail Therapeutic Dietetics and Fasting Science.
- **Validation Status:** `AWAITING EXECUTION`

---

### 9. Phase: Ayurveda (Integrative Wellness)
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/HairTreatmentsPage.jsx`
  - `React/src/pages/PedicureMenicurePage.jsx`
- **Completed Changes:** Treatment benefits and package pricing layout preserved.
- **Remaining Work:**
  - Integrate Classical Botanical Formulations, Herbal Scalp Rejuvenation, and Natural Extremity Reflexology therapies.
- **Validation Status:** `AWAITING EXECUTION`

---

### 10. Phase: Acupuncture & Manipulative Care
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/PerfectMakeupPage.jsx` (mapped to Aesthetic & Manipulative Naturopathy)
  - `React/src/pages/TherapistsPage.jsx`
- **Completed Changes:** Card layout and booking CTA preserved.
- **Remaining Work:**
  - Detail Clinical Acupuncture meridians, Pain Management protocols, Acupressure, and Physiotherapeutic Manipulations.
- **Validation Status:** `AWAITING EXECUTION`

---

### 11. Phase: Programs (Retreats & Disease Reversal)
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/components/home/PricingPlans.jsx`
  - `React/src/pages/GallerySinglePage.jsx`
  - `React/src/pages/AppointmentPage.jsx`
- **Completed Changes:** Package card tiers and case study templates cataloged.
- **Remaining Work:**
  - Implement 3 Core Institutional Programs:
    1. *Comprehensive OPD Diagnostic Assessment*
    2. *7-Day Intensive Naturopathic Detoxification*
    3. *21-Day Chronic Disease Reversal In-Patient Retreat*
- **Validation Status:** `AWAITING EXECUTION`

---

### 12. Phase: Contact
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/pages/ContactPage.jsx`
  - `React/src/pages/AppointmentPage.jsx`
- **Completed Changes:** Interactive form states and map embed validated.
- **Remaining Work:**
  - Update Campus Location coordinates, OPD timings (Mon-Sat: 8:00 AM - 6:00 PM), Clinical Reception email, and Emergency Wellness helpline.
- **Validation Status:** `AWAITING EXECUTION`

---

### 13. Phase: Footer
- **Status:** `PENDING`
- **Affected Files:**
  - `React/src/components/common/Footer.jsx`
- **Completed Changes:** 4-Column widget architecture preserved.
- **Remaining Work:**
  - Update institutional bio (Funicle Health Care and Wellness Pvt. Ltd.), department links, research paper thumbnails, and accreditation disclaimer.
- **Validation Status:** `AWAITING EXECUTION`

---

### 14. Phase: SEO
- **Status:** `PENDING`
- **Affected Files:**
  - `React/index.html`
  - `React/src/pages/*.jsx`
- **Completed Changes:** Base meta tags and title structure checked.
- **Remaining Work:**
  - Implement comprehensive SEO title tags, meta descriptions, OpenGraph tags, and schema.org medical institution structured data.
- **Validation Status:** `AWAITING EXECUTION`

---

### 15. Phase: Imagery
- **Status:** `PENDING`
- **Affected Files:**
  - `React/public/images/`
  - `React/src/components/home/HeroSlider.jsx`
  - `React/src/pages/*.jsx`
- **Completed Changes:** Asset directory structure preserved.
- **Remaining Work:**
  - Align photography with serene yoga pavilions, medicinal herb gardens, clinical hydrotherapy suites, and research laboratory environments.
- **Validation Status:** `AWAITING EXECUTION`

---

### 16. Phase: Responsive QA
- **Status:** `PENDING`
- **Affected Files:** All components and `React/public/css/responsive.css`
- **Completed Changes:** Responsive media breakpoints mapped.
- **Remaining Work:**
  - Test across Desktop (`> 1200px`), Tablet (`768px - 991px`), and Mobile (`< 767px` and `< 480px`).
- **Validation Status:** `AWAITING EXECUTION`

---

### 17. Phase: Content QA
- **Status:** `PENDING`
- **Affected Files:** All pages and components
- **Completed Changes:** Replacement content mapped in audit.
- **Remaining Work:**
  - Review all medical claims, dosage notes, scientific references, and typography alignment.
- **Validation Status:** `AWAITING EXECUTION`

---

### 18. Phase: Performance QA
- **Status:** `PENDING`
- **Affected Files:** `React/dist/` production assets
- **Completed Changes:** Baseline build takes 2.81s.
- **Remaining Work:**
  - Audit asset chunk sizes, lazy load non-critical routes, verify sub-3s render times.
- **Validation Status:** `AWAITING EXECUTION`

---

### 19. Phase: Accessibility QA
- **Status:** `PENDING`
- **Affected Files:** Form components, buttons, navigation links
- **Completed Changes:** ARIA labels on navigation and buttons verified.
- **Remaining Work:**
  - Verify WCAG 2.1 AA color contrast, keyboard focus indicators, screen reader accessibility.
- **Validation Status:** `AWAITING EXECUTION`

---

### 20. Phase: Final Cleanup
- **Status:** `PENDING`
- **Affected Files:** Entire `React/` repository
- **Completed Changes:** Folder separation completed.
- **Remaining Work:**
  - Remove any legacy commented demo strings, verify clean console logs, and produce final migration handover report.
- **Validation Status:** `AWAITING EXECUTION`

---

## Baseline Verification Summary
- **Vite Production Build:** `SUCCESS` (`dist/` created with 0 errors in 2.81s)
- **Git Safety Check:** Confirmed safe execution environment with no uncommitted user conflicts.
- **Visual Design Parity:** 100% template geometry, styling, and interactions preserved.
- **Safe to Proceed to Phase 2 (Branding):** `YES`
