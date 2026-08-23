import React, { useState } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import {
  Accessibility,
  Activity,
  ArrowRight,
  Armchair,
  CalendarDays,
  ChevronDown,
  Dumbbell,
  Flower2,
  HeartPulse,
  Leaf,
  PersonStanding,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Wind,
} from 'lucide-react';
import { servicesDetailData } from '../content/servicesDetailContent';
import './therapeutic-yoga.css';

// Blank Image Slot Component
const BlankImagePlaceholder = ({ minHeight = '380px', label = 'Image Placeholder' }) => (
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
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2E5F31" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="2" fill="#2E5F31" />
      <path d="M21 15L16 10L5 21" stroke="#2E5F31" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
    <span style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#687768', fontWeight: 600, opacity: 0.5 }}>
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

// Icon mapper for benefits
const benefitIcons = [PersonStanding, Armchair, Dumbbell, Armchair, Wind, Flower2, Accessibility, HeartPulse, Activity];

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Determine key from URL path or params
  let serviceKey = slug;
  if (!serviceKey) {
    const path = location.pathname.toLowerCase();
    for (const [key, item] of Object.entries(servicesDetailData)) {
      if (path.includes(key) || (item.aliasUrl && path.includes(item.aliasUrl))) {
        serviceKey = key;
        break;
      }
    }
  }

  const service = servicesDetailData[serviceKey];
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return <Navigate to="/procedures" replace />;
  }

  return (
    <MainLayout>
      <Breadcrumb 
        title={service.title} 
        parent={service.category} 
        parentLink={service.parentLink} 
        activeTitle={service.title} 
      />

      <main className="ty-page">
        
        {/* 1. HERO SECTION */}
        <section className="ty-hero-section">
          <div className="ty-container">
            <div className="ty-hero-grid">
              <div className="ty-hero-content">
                <div className="ty-kicker-row">
                  <span className="ty-kicker">{service.eyebrow || service.category}</span>
                  <span className="ty-kicker-line" />
                </div>

                <h1>{service.title}</h1>
                <h2>{service.tagline}</h2>

                <p className="ty-hero-copy">
                  {service.heroDescription}
                </p>

                <div className="ty-hero-actions">
                  <Link to="/appointment" className="ty-btn ty-btn-primary">
                    <CalendarDays size={18} />
                    <span>Book a Consultation</span>
                  </Link>
                  <Link to={service.parentLink} className="ty-btn ty-btn-secondary">
                    <span>Explore {service.category}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="ty-trust-row">
                  <div className="ty-trust-item">
                    <UserRoundCheck size={24} />
                    <span>Personalised<br />Care</span>
                  </div>
                  <div className="ty-trust-item">
                    <Leaf size={24} />
                    <span>Natural &amp;<br />Drugless</span>
                  </div>
                  <div className="ty-trust-item">
                    <Accessibility size={24} />
                    <span>Whole Person<br />Approach</span>
                  </div>
                  <div className="ty-trust-item">
                    <Sparkles size={24} />
                    <span>Expert<br />Guidance</span>
                  </div>
                </div>
              </div>

              {/* Blank Hero Image Slot */}
              <div className="ty-hero-image-wrap">
                <BlankImagePlaceholder minHeight="420px" label={`${service.title} Feature Slot`} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW / WHAT IS [THERAPY] SECTION */}
        <section className="ty-intro-section">
          <div className="ty-container">
            <div className="ty-intro-grid">
              {/* Blank Overview Image Slot */}
              <div className="ty-intro-image-wrap">
                <BlankImagePlaceholder minHeight="380px" label={`${service.title} Overview Slot`} />
              </div>

              <div className="ty-intro-content">
                <h2>{service.overviewTitle || `What Is ${service.title}?`}</h2>
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                <div className="ty-note-card">
                  <div className="ty-note-icon"><Leaf size={24} /></div>
                  <p>
                    Every program at Oriolus Scientific is personalized around your comfort, lifestyle, and individual wellness goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW [THERAPY] MAY SUPPORT YOU (BENEFITS GRID) */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="ty-support-section">
            <div className="ty-container">
              <DecorativeTitle>How {service.title} May Support You</DecorativeTitle>
              <div className="ty-benefit-grid" style={{ gridTemplateColumns: `repeat(${Math.min(service.benefits.length, 7)}, 1fr)` }}>
                {service.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <div className="ty-benefit" key={index}>
                      <div className="ty-benefit-icon-wrap">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      <div className="ty-benefit-label">{benefit}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 4. WHO MAY BENEFIT / YOUR EXPERIENCE */}
        {service.whatToExpect && service.whatToExpect.length > 0 && (
          <section className="ty-experience-section" id="experience">
            <div className="ty-container">
              <DecorativeTitle>Your {service.title} Experience</DecorativeTitle>

              <div className="ty-experience-track" style={{ gridTemplateColumns: `repeat(${Math.min(service.whatToExpect.length, 5)}, 1fr)` }}>
                {service.whatToExpect.map((exp, index) => (
                  <article className="ty-experience-item" key={index}>
                    <div className="ty-experience-icon">
                      <Flower2 size={26} strokeWidth={1.8} />
                    </div>
                    <h3>{exp.title}</h3>
                    <p>{exp.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. YOUR 3-STEP JOURNEY */}
        {service.threeStepJourney && service.threeStepJourney.length > 0 && (
          <section className="ty-journey-section">
            <div className="ty-container">
              <DecorativeTitle>Your 3-Step Journey</DecorativeTitle>
              <div className="ty-journey-grid">
                {service.threeStepJourney.map((step, index) => (
                  <article className="ty-step-card" key={index}>
                    <div className="ty-step-number">{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. IMPORTANT CONSIDERATIONS (SAFETY ALERT) */}
        {service.importantConsiderations && (
          <section style={{ padding: '45px 0', background: '#fffdf5', borderTop: '1px solid #f6e6b8', borderBottom: '1px solid #f6e6b8' }}>
            <div className="ty-container">
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '18px', 
                padding: '24px 28px', 
                background: '#ffffff', 
                borderRadius: '8px', 
                borderLeft: '4px solid #c59d5f',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <div style={{ color: '#c59d5f', fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>
                  <i className="fa fa-info-circle"></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 6px', fontSize: '16px', color: '#7a5a1e', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                    Important Considerations &amp; Safety Guidance
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: '#6c5324', lineHeight: '1.7' }}>
                    {service.importantConsiderations}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="ty-faq-section">
            <div className="ty-container">
              <div className="ty-faq-grid">
                {/* Blank FAQ Image Slot */}
                <div className="ty-faq-image-wrap">
                  <BlankImagePlaceholder minHeight="400px" label="Props / Clinic Environment Slot" />
                </div>

                <div className="ty-faq-content">
                  <DecorativeTitle>Frequently Asked Questions</DecorativeTitle>
                  <div className="ty-faq-list">
                    {service.faqs.map((item, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div className={`ty-faq-item ${isOpen ? 'is-open' : ''}`} key={index}>
                          <button
                            className="ty-faq-question"
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <ChevronDown size={18} className="ty-faq-icon" />
                          </button>
                          {isOpen && (
                            <div className="ty-faq-answer">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. RELATED THERAPIES STRIP */}
        {service.relatedLinks && service.relatedLinks.length > 0 && (
          <section style={{ padding: '45px 0', background: '#fbf8f2', borderTop: '1px solid #ded8cd' }}>
            <div className="ty-container text-center">
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>
                Related Therapies &amp; Complementary Practices:
              </h4>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {service.relatedLinks.map((rel, idx) => (
                  <Link 
                    key={idx}
                    to={rel.link} 
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 22px',
                      background: '#ffffff',
                      border: '1px solid #cbd8c8',
                      borderRadius: '30px',
                      fontSize: '13.5px',
                      color: '#2e5f31',
                      fontWeight: 600,
                      textDecoration: 'none',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.borderColor = '#2e5f31';
                      e.currentTarget.style.background = '#f4f8f4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#cbd8c8';
                      e.currentTarget.style.background = '#ffffff';
                    }}
                  >
                    <span>{rel.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. BOTTOM GREEN CTA BANNER */}
        <section className="ty-cta-section" id="consultation">
          <div className="ty-container">
            <div className="ty-cta-inner">
              <div className="ty-cta-copy">
                <h2>{service.cta?.heading || 'Begin With Movement That Understands You'}</h2>
                <p>
                  {service.cta?.subheading || 'Discover a personalised natural wellness practice designed around your comfort and goals.'}
                </p>
              </div>
              <Link to="/appointment" className="ty-cta-button">
                <CalendarDays size={18} />
                <span>{service.cta?.btnText || 'Book a Consultation'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 10. UNIVERSAL MEDICAL / WELLNESS DISCLAIMER NOTE */}
        <section style={{ padding: '30px 0', background: '#fafaf8', borderTop: '1px solid #eae6df' }}>
          <div className="ty-container">
            <div style={{ 
              padding: '16px 20px', 
              background: '#ffffff', 
              border: '1px solid #e7e2d8', 
              borderRadius: '6px', 
              fontSize: '12.5px', 
              color: '#777', 
              lineHeight: '1.7' 
            }}>
              <strong>Wellness Information:</strong> Information on this website is intended for general wellness and educational purposes. Individual responses to therapies vary. Oriolus Scientific therapies are not a substitute for emergency care, medical diagnosis or prescribed treatment. If you have an existing medical condition, take medication, are pregnant, recently underwent surgery or have significant health concerns, please consult an appropriate healthcare professional before beginning a new therapy.
            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
};

export default ServiceDetailPage;
