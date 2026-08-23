import React, { useState } from 'react';
import {
  Accessibility,
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Armchair,
  ChevronDown,
  Dumbbell,
  Flower2,
  HeartPulse,
  Leaf,
  PersonStanding,
  Settings2,
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
  { icon: PersonStanding, label: <>Improve<br />mobility &<br />flexibility</> },
  { icon: Armchair, label: <>Encourage better<br />postural<br />awareness</> },
  { icon: Dumbbell, label: <>Support gentle<br />strengthening</> },
  { icon: Armchair, label: <>Reduce stiffness<br />from prolonged<br />sitting</> },
  { icon: Lungs, label: <>Improve breathing<br />awareness</> },
  { icon: Flower2, label: <>Support relaxation<br />and stress<br />management</> },
  { icon: Accessibility, label: <>Build confidence<br />in regular physical<br />activity</> },
];

const experiences = [
  {
    icon: Flower2,
    title: 'Gentle Mobility',
    text: 'Controlled movements designed around your current range.',
  },
  {
    icon: Activity,
    title: 'Postural Awareness',
    text: 'Practices that help you recognise and improve everyday patterns.',
  },
  {
    icon: PersonStanding,
    title: 'Supportive Asanas',
    text: 'Modified Yoga postures using props such as belts, chairs and bolsters.',
  },
  {
    icon: Wind,
    title: 'Breathwork',
    text: 'Simple breathing practices supporting relaxation and awareness.',
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
    text: 'We begin by discussing your lifestyle, mobility, concerns and wellness objectives.',
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
    text: 'Your practice may be reviewed and gradually adapted as mobility, confidence and comfort evolve.',
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
];

function DecorativeTitle({ children }) {
  return (
    <div className="ty-section-title-wrap">
      <h2 className="ty-section-title">{children}</h2>
      <div className="ty-title-ornament" aria-hidden="true">
        <span />
        <Leaf size={14} strokeWidth={1.7} />
        <span />
      </div>
    </div>
  );
}

function TherapeuticYogaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="ty-page">
      <section className="ty-hero">
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
            <a href="#consultation" className="ty-btn ty-btn-primary">
              <CalendarDays size={17} />
              <span>Book a Yoga Consultation</span>
            </a>
            <a href="#experience" className="ty-btn ty-btn-secondary">
              <span>Explore Yoga Therapies</span>
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="ty-trust-row">
            <div className="ty-trust-item">
              <UserRoundCheck size={28} />
              <span>Personalised<br />Sessions</span>
            </div>
            <div className="ty-trust-item">
              <Leaf size={28} />
              <span>Beginner<br />Friendly</span>
            </div>
            <div className="ty-trust-item">
              <Accessibility size={28} />
              <span>Mobility<br />Focused</span>
            </div>
            <div className="ty-trust-item">
              <Sparkles size={28} />
              <span>Guided by<br />Experts</span>
            </div>
          </div>
        </div>

        <div className="ty-hero-image-wrap">
          <img
            src="/images/hero-therapeutic-yoga.png"
            alt="Yoga therapist supporting a client in a side bending posture"
            className="ty-hero-image"
          />
        </div>
      </section>

      <section className="ty-intro">
        <div className="ty-intro-image-wrap">
          <img
            src="/images/what-is-therapeutic-yoga.png"
            alt="Instructor guiding a client through a supported therapeutic yoga movement"
          />
        </div>

        <div className="ty-intro-content">
          <div className="ty-mini-accent"><span /></div>
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
            <div className="ty-note-icon"><Leaf size={26} /></div>
            <p>
              The focus is not on advanced poses.<br />
              It is on creating a comfortable and meaningful
              practice that supports better movement,
              body awareness and overall wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="ty-support">
        <DecorativeTitle>How Therapeutic Yoga May Support You</DecorativeTitle>
        <div className="ty-benefit-grid">
          {benefits.map(({ icon: Icon, label }, index) => (
            <div className="ty-benefit" key={index}>
              <Icon size={31} strokeWidth={1.55} />
              <div>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ty-experience" id="experience">
        <DecorativeTitle>Your Therapeutic Yoga Experience</DecorativeTitle>

        <div className="ty-experience-track">
          {experiences.map(({ icon: Icon, title, text }, index) => (
            <article className="ty-experience-item" key={title}>
              <div className="ty-experience-icon">
                <Icon size={27} strokeWidth={1.6} />
              </div>
              {index < experiences.length - 1 && <span className="ty-track-line" aria-hidden="true" />}
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <Leaf className="ty-experience-leaf" size={115} strokeWidth={0.8} aria-hidden="true" />
      </section>

      <section className="ty-journey">
        <DecorativeTitle>Your 3-Step Journey</DecorativeTitle>
        <div className="ty-journey-grid">
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article className="ty-step" key={number}>
              <div className="ty-step-number">{number}</div>
              <div className="ty-step-icon"><Icon size={28} strokeWidth={1.55} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ty-faq">
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
                    <ChevronDown size={17} />
                  </button>
                  <div className="ty-faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ty-cta" id="consultation">
        <div className="ty-cta-inner">
          <div className="ty-cta-icon"><UserRoundCheck size={43} strokeWidth={1.45} /></div>
          <div className="ty-cta-copy">
            <h2>Begin With Movement That Understands You</h2>
            <p>
              Discover a personalised Yoga practice designed around
              your mobility, comfort and wellness goals.
            </p>
          </div>
          <a href="/contact" className="ty-cta-button">
            <CalendarDays size={17} />
            <span>Book Therapeutic Yoga Consultation</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default TherapeuticYogaPage;
