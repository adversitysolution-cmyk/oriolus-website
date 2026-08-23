import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Leaf,
  PersonStanding,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Wind,
} from 'lucide-react';
import './therapeutic-yoga.css';

const Lungs = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4v7" />
    <path d="M12 11c-2-2-4-2-6-1-2 1-3 4-2 7 1 3 3 4 5 4h1v-7" />
    <path d="M12 11c2-2 4-2 6-1 2 1 3 4 2 7-1 3-3 4-5 4h-1v-7" />
  </svg>
);

const benefits = [
  { icon: PersonStanding, label: <>Improve mobility<br />&amp; flexibility</> },
  { icon: Armchair, label: <>Encourage better<br />postural awareness</> },
  { icon: Dumbbell, label: <>Support gentle<br />strengthening</> },
  { icon: Armchair, label: <>Reduce stiffness<br />from sitting</> },
  { icon: Lungs, label: <>Improve breathing<br />awareness</> },
  { icon: Flower2, label: <>Support relaxation<br />&amp; stress relief</> },
  { icon: Accessibility, label: <>Build confidence in<br />daily movement</> },
];

const experiences = [
  {
    icon: Flower2,
    title: 'Gentle Mobility',
    text: 'Controlled movements designed around your current range of motion.',
  },
  {
    icon: Activity,
    title: 'Postural Awareness',
    text: 'Practices that help you recognise and improve everyday movement patterns.',
  },
  {
    icon: PersonStanding,
    title: 'Supportive Asanas',
    text: 'Modified Yoga postures using props such as belts, chairs and bolsters.',
  },
  {
    icon: Wind,
    title: 'Breathwork',
    text: 'Simple breathing practices supporting deep relaxation and awareness.',
  },
  {
    icon: Flower2,
    title: 'Guided Relaxation',
    text: 'A calm closing practice allowing the body and mind to settle.',
  },
];

const steps = [
  {
    number: '01',
    icon: UserRoundCheck,
    title: 'Understand',
    text: 'We begin by discussing your lifestyle, mobility, previous injuries and wellness objectives.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Personalise',
    text: 'Suitable movements, breathing techniques and supportive practices are selected around your comfort and ability.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Progress',
    text: 'Your practice is reviewed and gradually adapted as mobility, confidence and comfort evolve.',
  },
];

const faqs = [
  {
    q: 'Is Therapeutic Yoga suitable for beginners?',
    a: 'Yes. The practice is adapted to your current comfort, mobility and experience level, so no previous Yoga experience is required.',
  },
  {
    q: 'What if I cannot sit on the floor?',
    a: 'That is completely fine. Chairs, bolsters, blocks and other supportive options can be used so the practice remains comfortable and accessible.',
  },
  {
    q: 'What should I wear?',
    a: 'Choose comfortable clothing that allows easy movement. You do not need specialised Yoga clothing.',
  },
  {
    q: 'How is this different from a regular Yoga class?',
    a: 'Rather than following a fixed group sequence, each session is shaped around your movement patterns, comfort, breathing, posture and personal wellness goals.',
  },
  {
    q: 'Can I attend if I have an existing health concern?',
    a: 'Inform your practitioner of diagnosed conditions or injuries beforehand so practices can be tailored safely to your needs.',
  },
];

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

function TherapeuticYogaPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <MainLayout>
      <Breadcrumb 
        title="Therapeutic Yoga" 
        parent="Yoga Therapy" 
        parentLink="/yoga-therapy" 
        activeTitle="Therapeutic Yoga" 
      />

      <main className="ty-page">
        {/* 1. HERO SECTION */}
        <section className="ty-hero-section">
          <div className="ty-container">
            <div className="ty-hero-grid">
              <div className="ty-hero-content">
                <div className="ty-kicker-row">
                  <span className="ty-kicker">YOGA THERAPY</span>
                  <span className="ty-kicker-line" />
                </div>

                <h1>Therapeutic Yoga</h1>
                <h2>Movement Designed Around Your Body</h2>

                <p className="ty-hero-copy">
                  A personalised approach to Yoga that adapts movement,
                  posture, breathing and relaxation practices according to
                  your mobility, comfort and individual wellness goals.
                </p>

                <div className="ty-hero-actions">
                  <Link to="/appointment" className="ty-btn ty-btn-primary">
                    <CalendarDays size={18} />
                    <span>Book a Yoga Consultation</span>
                  </Link>
                  <Link to="/yoga-therapy" className="ty-btn ty-btn-secondary">
                    <span>Explore Yoga Therapies</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="ty-trust-row">
                  <div className="ty-trust-item">
                    <UserRoundCheck size={24} />
                    <span>Personalised<br />Sessions</span>
                  </div>
                  <div className="ty-trust-item">
                    <Leaf size={24} />
                    <span>Beginner<br />Friendly</span>
                  </div>
                  <div className="ty-trust-item">
                    <Accessibility size={24} />
                    <span>Mobility<br />Focused</span>
                  </div>
                  <div className="ty-trust-item">
                    <Sparkles size={24} />
                    <span>Guided by<br />Experts</span>
                  </div>
                </div>
              </div>

              <div className="ty-hero-image-wrap">
                <img
                  src="/images/hero-therapeutic-yoga.png"
                  alt="Yoga therapist supporting a client in a posture"
                  className="ty-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS THERAPEUTIC YOGA */}
        <section className="ty-intro-section">
          <div className="ty-container">
            <div className="ty-intro-grid">
              <div className="ty-intro-image-wrap">
                <img
                  src="/images/what-is-therapeutic-yoga.png"
                  alt="Instructor guiding a client through a supported therapeutic yoga movement"
                />
              </div>

              <div className="ty-intro-content">
                <h2>What Is Therapeutic Yoga?</h2>
                <p>
                  Therapeutic Yoga applies traditional Yoga principles in a more
                  individualised and purposeful way.
                </p>
                <p>
                  Instead of following the same sequence as a group class, each session
                  considers your movement patterns, breathing habits, physical comfort
                  and personal wellness goals.
                </p>

                <div className="ty-note-card">
                  <div className="ty-note-icon"><Leaf size={24} /></div>
                  <p>
                    The focus is not on advanced poses. It is on creating a comfortable and meaningful
                    practice that supports better movement, body awareness and overall wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW THERAPEUTIC YOGA MAY SUPPORT YOU */}
        <section className="ty-support-section">
          <div className="ty-container">
            <DecorativeTitle>How Therapeutic Yoga May Support You</DecorativeTitle>
            <div className="ty-benefit-grid">
              {benefits.map(({ icon: Icon, label }, index) => (
                <div className="ty-benefit" key={index}>
                  <div className="ty-benefit-icon-wrap">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="ty-benefit-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. YOUR THERAPEUTIC YOGA EXPERIENCE */}
        <section className="ty-experience-section" id="experience">
          <div className="ty-container">
            <DecorativeTitle>Your Therapeutic Yoga Experience</DecorativeTitle>

            <div className="ty-experience-track">
              {experiences.map(({ icon: Icon, title, text }) => (
                <article className="ty-experience-item" key={title}>
                  <div className="ty-experience-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. YOUR 3-STEP JOURNEY */}
        <section className="ty-journey-section">
          <div className="ty-container">
            <DecorativeTitle>Your 3-Step Journey</DecorativeTitle>
            <div className="ty-journey-grid">
              {steps.map(({ number, title, text }) => (
                <article className="ty-step-card" key={number}>
                  <div className="ty-step-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FREQUENTLY ASKED QUESTIONS */}
        <section className="ty-faq-section">
          <div className="ty-container">
            <div className="ty-faq-grid">
              <div className="ty-faq-image-wrap">
                <img
                  src="/images/yoga-props.png"
                  alt="Yoga mat, blocks, strap and meditation cushion"
                />
              </div>

              <div className="ty-faq-content">
                <DecorativeTitle>Frequently Asked Questions</DecorativeTitle>
                <div className="ty-faq-list">
                  {faqs.map((item, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div className={`ty-faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
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

        {/* 7. BOTTOM GREEN CTA BANNER */}
        <section className="ty-cta-section" id="consultation">
          <div className="ty-container">
            <div className="ty-cta-inner">
              <div className="ty-cta-copy">
                <h2>Begin With Movement That Understands You</h2>
                <p>
                  Discover a personalised Yoga practice designed around
                  your mobility, comfort and wellness goals.
                </p>
              </div>
              <Link to="/appointment" className="ty-cta-button">
                <CalendarDays size={18} />
                <span>Book Therapeutic Yoga Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default TherapeuticYogaPage;
