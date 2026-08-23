import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import {
  Activity,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Flower2,
  HeartPulse,
  Leaf,
  PersonStanding,
  Sparkles,
  UserRoundCheck,
  Wind,
  ShieldCheck,
  Award,
  Stethoscope,
  CheckCircle2
} from 'lucide-react';
import './therapeutic-yoga.css';

// Blank Image Slot Component
const BlankImagePlaceholder = ({ minHeight = '380px', label = 'Procedures Overview' }) => (
  <div
    style={{
      width: '100%',
      minHeight,
      height: '100%',
      background: 'linear-gradient(135deg, #F3EFE6 0%, #EAE6DF 100%)',
      borderRadius: '12px',
      border: '1px solid #DED8CD',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2E5F31" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="2" fill="#2E5F31" />
      <path d="M21 15L16 10L5 21" stroke="#2E5F31" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
    <span style={{ fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#687768', fontWeight: 600, opacity: 0.6 }}>
      {label}
    </span>
  </div>
);

function DecorativeTitle({ children }) {
  return (
    <div className="ty-section-title-wrap">
      <h2 className="ty-section-title">{children}</h2>
      <div className="ty-title-ornament" aria-hidden="true">
        <span />
        <Leaf size={16} strokeWidth={1.8} />
        <span />
      </div>
    </div>
  );
}

const proceduresFaqs = [
  {
    q: 'How are clinical therapies prescribed at Oriolus Scientific?',
    a: 'Each treatment plan begins with an in-depth diagnostic consultation with Dr. Vijay. Based on your health history, dosha constitution, musculoskeletal evaluation, and clinical requirements, a custom combination of Yoga Therapy, Naturopathy, Ayurveda, and Acupuncture is tailored.'
  },
  {
    q: 'Can multiple therapies be combined in a single treatment course?',
    a: 'Yes. Our integrative methodology is designed to leverage synergy between disciplines. For example, Naturopathic colon hydrotherapy is often paired with Ayurvedic Panchakarma and gentle therapeutic asanas for accelerated cellular detoxification and chronic pain relief.'
  },
  {
    q: 'Are the treatments safe for elderly patients and chronic conditions?',
    a: 'Absolutely. All procedures are 100% drugless, non-invasive, and adapted to each individual’s mobility, age, and stamina under direct medical supervision.'
  },
  {
    q: 'How do I book an initial consultation or treatment package?',
    a: 'You can book an appointment online through our consultation booking portal or contact our OPD reception desk directly at +91 98450 12345.'
  }
];

const disciplinesData = [
  {
    id: 'yoga-therapy',
    title: 'Yoga Therapy',
    kicker: 'Movement & Alignment',
    icon: Flower2,
    desc: 'Condition-specific biomechanical realignment, therapeutic asanas, restorative pranayama, and prop-assisted therapy for pain and chronic stress.',
    services: [
      { name: 'Therapeutic Yoga', path: '/services/therapeutic-yoga' },
      { name: 'Stick Yoga / Danda Yoga', path: '/services/stick-yoga' },
      { name: 'Aerial Yoga', path: '/services/aerial-yoga' },
      { name: 'Pain Management Yoga', path: '/services/pain-management-yoga' }
    ]
  },
  {
    id: 'naturopathy',
    title: 'Clinical Naturopathy',
    kicker: 'Detox & Hydrotherapy',
    icon: Wind,
    desc: 'Evidence-based hydrotherapy, clinical detoxification, nutritional fasting, and therapeutic dietetics to restore the body’s innate self-healing intelligence.',
    services: [
      { name: 'Colon Hydrotherapy', path: '/services/colon-hydrotherapy' },
      { name: 'Clinical Detoxification', path: '/services/clinical-detoxification' },
      { name: 'Diabetes Wellness Support', path: '/services/diabetes-wellness-support' },
      { name: 'Obesity Reduction', path: '/services/obesity-reduction' }
    ]
  },
  {
    id: 'ayurveda',
    title: 'Classical Ayurveda',
    kicker: 'Panchakarma & Rejuvenation',
    icon: Leaf,
    desc: 'Authentic Vedic healing traditions, classical Panchakarma cleansing, medicated oil therapies, and dosha balancing for deep cellular revitalization.',
    services: [
      { name: 'Classical Panchakarma', path: '/services/panchakarma' },
      { name: 'Abhyanga Massage', path: '/services/abhyanga' },
      { name: 'Shirodhara Stream', path: '/services/shirodhara' },
      { name: 'Udwarthanam Powder Massage', path: '/services/udwarthanam' },
      { name: 'Herbal Swedana Steam', path: '/services/swedana' }
    ]
  },
  {
    id: 'acupuncture',
    title: 'Medical Acupuncture',
    kicker: 'Neuro-Meridian Therapy',
    icon: Activity,
    desc: 'Precision neuro-meridian point stimulation and micro-needling to modulate nervous system responses, relieve acute pain, and restore energetic balance.',
    services: [
      { name: 'Pain Management Acupuncture', path: '/services/acupuncture-pain-management' },
      { name: 'Chronic Conditions Therapy', path: '/services/acupuncture-chronic-conditions' }
    ]
  },
  {
    id: 'structured-programs',
    title: 'Structured Wellness Programs',
    kicker: 'Residential & Day Packages',
    icon: Sparkles,
    desc: 'Multi-day clinical immersion programs curated to reverse chronic lifestyle disorders, eliminate metabolic toxicity, and establish sustainable health.',
    services: [
      { name: 'Obesity & Detox Program', path: '/services/obesity-reduction-detox' },
      { name: 'Diabetes Wellness Program', path: '/services/diabetes-wellness' },
      { name: 'Spine & Joint Pain Care', path: '/services/spine-joint-pain' },
      { name: 'Full-Body Rejuvenation Retreat', path: '/services/full-body-retreat' }
    ]
  }
];

const ProceduresPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <MainLayout>
      <Breadcrumb title="Clinical Services & Procedures" activeTitle="Services" />

      <main className="ty-page">
        {/* ==========================================================================
            1. HERO SECTION
            ========================================================================== */}
        <section className="ty-hero-section">
          <div className="ty-container">
            <div className="ty-hero-grid">
              <div className="ty-hero-content">
                <div className="ty-kicker-row">
                  <span className="ty-kicker">Evidence-Based Natural Medicine</span>
                  <span className="ty-kicker-line" aria-hidden="true" />
                </div>
                <h1>Clinical Procedures &amp; Therapies</h1>
                <h2>Personalized Drugless Healthcare Across 5 Medical Disciplines</h2>
                <p className="ty-hero-copy">
                  Oriolus Scientific unites Yoga Therapy, Clinical Naturopathy, Classical Ayurveda, Medical Acupuncture, and Structured Residential Programs to eliminate root causes of chronic illness and cultivate enduring vitality.
                </p>

                <div className="ty-hero-actions">
                  <a href="#all-disciplines" className="ty-btn ty-btn-primary">
                    <span>Explore All Services</span>
                    <ArrowRight size={18} />
                  </a>
                  <Link to="/appointment" className="ty-btn ty-btn-secondary">
                    <CalendarDays size={18} />
                    <span>Book a Consultation</span>
                  </Link>
                </div>

                <div className="ty-trust-row">
                  <div className="ty-trust-item">
                    <Award size={20} />
                    <span>40+ Yrs Clinical Heritage</span>
                  </div>
                  <div className="ty-trust-item">
                    <ShieldCheck size={20} />
                    <span>100% Drugless Therapies</span>
                  </div>
                  <div className="ty-trust-item">
                    <Stethoscope size={20} />
                    <span>Holistic Diagnostics</span>
                  </div>
                  <div className="ty-trust-item">
                    <UserRoundCheck size={20} />
                    <span>Doctor Led Care</span>
                  </div>
                </div>
              </div>

              <div className="ty-hero-image-wrap">
                <BlankImagePlaceholder minHeight="420px" label="Oriolus Clinical Therapy Overview" />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. WHAT IS OUR CLINICAL METHODOLOGY
            ========================================================================== */}
        <section className="ty-intro-section">
          <div className="ty-container">
            <div className="ty-intro-grid">
              <div className="ty-intro-image-wrap">
                <BlankImagePlaceholder minHeight="380px" label="Integrative Medical Approach" />
              </div>

              <div className="ty-intro-content">
                <h2>Ancient Healing Science Powered by Modern Clinical Precision</h2>
                <p>
                  Rather than treating symptoms in isolation, Oriolus Scientific restores physiological equilibrium. Our clinical protocols address the metabolic, biochemical, musculoskeletal, and psycho-somatic roots of imbalance.
                </p>
                <p>
                  Every patient receives a personalized combination of non-invasive therapies designed to stimulate the body's internal regenerative capacity without pharmaceutical side effects.
                </p>

                <div className="ty-note-card">
                  <div className="ty-note-icon">
                    <Leaf size={22} />
                  </div>
                  <p>
                    All therapies are administered in specialized clinical treatment suites by licensed practitioners under the direct medical guidance of Dr. Vijay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. ALL 5 DISCIPLINES & DETAILED SERVICES SHOWCASE
            ========================================================================== */}
        <section id="all-disciplines" className="ty-support-section" style={{ background: '#FFFFFF' }}>
          <div className="ty-container">
            <DecorativeTitle>Our 5 Core Medical Disciplines</DecorativeTitle>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
              {disciplinesData.map((disc, idx) => {
                const Icon = disc.icon;
                return (
                  <div 
                    key={disc.id}
                    style={{
                      background: idx % 2 === 0 ? '#FBF8F2' : '#FFFFFF',
                      border: '1px solid #DED8CD',
                      borderRadius: '12px',
                      padding: '36px 32px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.3fr',
                      gap: '30px',
                      alignItems: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2E5F31', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <Icon size={18} />
                        <span>{disc.kicker}</span>
                      </div>
                      <h3 style={{ fontSize: '28px', color: '#171B17', fontWeight: 700, marginBottom: '12px', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        {disc.title}
                      </h3>
                      <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#555E55', marginBottom: '20px' }}>
                        {disc.desc}
                      </p>
                      <Link 
                        to={`/${disc.id}`} 
                        className="ty-btn ty-btn-secondary" 
                        style={{ padding: '0 20px', minHeight: '42px', fontSize: '13px' }}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '8px', border: '1px solid #EAE5DB' }}>
                      <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#2E5F31', fontWeight: 700, marginBottom: '14px', fontFamily: "'Inter', sans-serif" }}>
                        Available Procedures:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {disc.services.map(srv => (
                          <li key={srv.path}>
                            <Link 
                              to={srv.path}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 14px',
                                background: '#FBF8F2',
                                borderRadius: '6px',
                                border: '1px solid #EAE5DB',
                                color: '#171B17',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                transition: 'all 0.25s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#2ACB35';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = '#2ACB35';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#FBF8F2';
                                e.currentTarget.style.color = '#171B17';
                                e.currentTarget.style.borderColor = '#EAE5DB';
                              }}
                            >
                              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle2 size={16} color="#2E5F31" />
                                {srv.name}
                              </span>
                              <ArrowRight size={15} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. 3-STEP TREATMENT JOURNEY
            ========================================================================== */}
        <section className="ty-journey-section">
          <div className="ty-container">
            <DecorativeTitle>Your 3-Step Treatment Journey</DecorativeTitle>

            <div className="ty-journey-grid">
              <div className="ty-step-card">
                <span className="ty-step-number">01</span>
                <h3>Comprehensive Consultation</h3>
                <p>
                  A 60-minute in-depth medical evaluation with Dr. Vijay assessing pulse diagnostics, musculoskeletal alignment, and medical history.
                </p>
              </div>

              <div className="ty-step-card">
                <span className="ty-step-number">02</span>
                <h3>Targeted Therapy Plan</h3>
                <p>
                  Custom-scheduled clinical sessions integrating daily Yoga Therapy, Panchakarma detox, Naturopathy, or Acupuncture.
                </p>
              </div>

              <div className="ty-step-card">
                <span className="ty-step-number">03</span>
                <h3>Sustainable Health Restoration</h3>
                <p>
                  Continuous progress monitoring, dietary realignment, home practices, and long-term vitality management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. FREQUENTLY ASKED QUESTIONS
            ========================================================================== */}
        <section className="ty-faq-section">
          <div className="ty-container">
            <DecorativeTitle>Frequently Asked Questions</DecorativeTitle>

            <div className="ty-faq-grid">
              <div className="ty-faq-image-wrap">
                <BlankImagePlaceholder minHeight="400px" label="Patient FAQ & Assistance" />
              </div>

              <div className="ty-faq-list">
                {proceduresFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className={`ty-faq-item ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        className="ty-faq-question"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className="ty-faq-icon" size={20} />
                      </button>

                      {isOpen && (
                        <div className="ty-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            6. BOTTOM CTA CONSULTATION BANNER
            ========================================================================== */}
        <section className="ty-cta-section">
          <div className="ty-container">
            <div className="ty-cta-inner">
              <div className="ty-cta-copy">
                <h2>Ready to Begin Your Healing Journey?</h2>
                <p>Schedule your clinical diagnostic consultation with Dr. Vijay at Oriolus Scientific.</p>
              </div>
              <Link to="/appointment" className="ty-cta-button">
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default ProceduresPage;
