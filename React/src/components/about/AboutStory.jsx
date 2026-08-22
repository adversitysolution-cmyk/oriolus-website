import React, { useState } from 'react';
import { aboutContent } from '../../content/aboutContent';

const AboutStory = () => {
  const story = aboutContent.ourStory;
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // SVG Icons for Timeline Steps
  const renderJourneyIcon = (iconName) => {
    switch (iconName) {
      case 'lifestyle':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="4" stroke="#2D6A4F" strokeWidth="1.8" fill="#E8F3E8" />
            <path d="M4 20C4 16.5 7.5 14 12 14C16.5 14 20 16.5 20 20" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'wisdom':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#2D6A4F" strokeWidth="1.8" strokeLinejoin="round" fill="#E8F3E8" />
            <path d="M6 19L11 14" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'bridge':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17C6 13 10 11 12 11C14 11 18 13 21 17" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="15" x2="6" y2="18" stroke="#2D6A4F" strokeWidth="1.5" />
            <line x1="12" y1="11" x2="12" y2="18" stroke="#2D6A4F" strokeWidth="1.5" />
            <line x1="18" y1="15" x2="18" y2="18" stroke="#2D6A4F" strokeWidth="1.5" />
          </svg>
        );
      case 'care':
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="3.5" stroke="#2D6A4F" strokeWidth="1.8" fill="#E8F3E8" />
            <path d="M6 19C6 16 8.5 14 12 14C15.5 14 18 16 18 19" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 16C18 16 20 17 20 19" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="18" r="2" fill="#2D6A4F" />
          </svg>
        );
    }
  };

  // SVG Icons for Bottom Value Cards
  const renderValueIcon = (iconName) => {
    switch (iconName) {
      case 'contemporary':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2.5" stroke="#2D6A4F" strokeWidth="1.6" fill="#E8F3E8" />
            <path d="M12 9V15" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8 13L12 11L16 13" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 18C8 15 10 15 12 16C14 15 16 15 17 18" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'traditional':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 15 4 9C4 5 7 2 12 2C17 2 20 5 20 9C20 15 12 21 12 21Z" stroke="#2D6A4F" strokeWidth="1.6" strokeLinejoin="round" fill="#E8F3E8" />
            <path d="M12 7V13M9 10L15 10" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'individual':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="8" r="3" stroke="#2D6A4F" strokeWidth="1.6" fill="#E8F3E8" />
            <path d="M3 18C3 15 5.5 13 9 13C12.5 13 15 15 15 18" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M15 8H21M18 5V11" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'everyday':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="#2D6A4F" strokeWidth="1.6" fill="#E8F3E8" />
            <path d="M12 9V15M9 12H15" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className="about-story-master-section" style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* ─────────────────────────────────────────────────────────────
          PART 1: Top Hero / Built Around a More Integrated View
         ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '85px 0 75px', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Text & Metrics */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
              <div style={{ paddingRight: '20px' }}>
                
                {/* Eyebrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span 
                    style={{ 
                      color: '#2D6A4F', 
                      fontSize: '13px', 
                      fontWeight: 700, 
                      letterSpacing: '2.5px', 
                      textTransform: 'uppercase' 
                    }}
                  >
                    {story.hero.eyebrow}
                  </span>
                  <span style={{ width: '40px', height: '1.5px', background: '#C5A880', display: 'inline-block' }}></span>
                </div>

                {/* Main Headline */}
                <h2 
                  style={{ 
                    color: '#12305C', 
                    fontSize: '40px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '20px',
                    lineHeight: '1.22'
                  }}
                >
                  Built Around a More{' '}
                  <span style={{ color: '#2D6A4F' }}>Integrated</span> View of Wellness
                </h2>

                {/* Description */}
                <p 
                  style={{ 
                    color: '#555555', 
                    fontSize: '15px', 
                    lineHeight: '1.7', 
                    marginBottom: '35px' 
                  }}
                >
                  {story.hero.desc}
                </p>

                {/* Two Metric Highlights Side-by-Side */}
                <div style={{ display: 'flex', gap: '35px', alignItems: 'center', flexWrap: 'wrap' }}>
                  
                  {/* Highlight 1: 26+ Years Clinical Heritage */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #E6F3E6 0%, #D4EBD4 100%)', 
                        border: '1.5px solid #2D6A4F', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(45, 106, 79, 0.12)'
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" fill="#CBE5CB" />
                        <path d="M6 19L11 14" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '26px', fontWeight: 800, color: '#12305C', lineHeight: '1', fontFamily: "'Poppins', sans-serif" }}>
                        {story.hero.heritageStat.number}
                      </div>
                      <div style={{ fontSize: '13px', color: '#555555', marginTop: '4px', lineHeight: '1.3' }}>
                        {story.hero.heritageStat.line1}<br />{story.hero.heritageStat.line2}
                      </div>
                    </div>
                  </div>

                  {/* Highlight 2: 4 Integrated Disciplines */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #E6F3E6 0%, #D4EBD4 100%)', 
                        border: '1.5px solid #2D6A4F', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(45, 106, 79, 0.12)'
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#2D6A4F" strokeWidth="1.8" fill="#CBE5CB" />
                        <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#2D6A4F" strokeWidth="1.8" />
                        <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#2D6A4F" strokeWidth="1.8" />
                        <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '26px', fontWeight: 800, color: '#12305C', lineHeight: '1', fontFamily: "'Poppins', sans-serif" }}>
                        {story.hero.disciplinesStat.number}
                      </div>
                      <div style={{ fontSize: '13px', color: '#555555', marginTop: '4px', lineHeight: '1.3' }}>
                        {story.hero.disciplinesStat.line1}<br />{story.hero.disciplinesStat.line2}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Column: Hero Visual Container */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div 
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)', 
                  border: '1px solid #ECEBE6',
                  minHeight: '380px',
                  background: '#EAE6DF',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={story.hero.image} 
                  alt={story.hero.imageAlt}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '380px',
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = '#EFECE6';
                  }}
                />

                {/* Blank / Placeholder fallback visual icon */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    pointerEvents: 'none', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    opacity: 0.3
                  }}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#12305C" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="2" fill="#12305C" />
                    <path d="M21 15L16 10L5 21" stroke="#12305C" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PART 2: Middle Timeline Strip ("The Oriolus Journey")
         ───────────────────────────────────────────────────────────── */}
      <section 
        style={{ 
          padding: '80px 0 90px', 
          backgroundColor: '#FAFAF7', 
          borderTop: '1px solid #F0EFEB',
          borderBottom: '1px solid #F0EFEB',
          position: 'relative',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(45, 106, 79, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(197, 168, 128, 0.03) 0%, transparent 40%)'
        }}
      >
        <div className="container">
          
          {/* Header Title */}
          <div className="row">
            <div className="col-md-12 text-center" style={{ marginBottom: '60px' }}>
              <h2 
                style={{ 
                  color: '#12305C', 
                  fontSize: '34px', 
                  fontWeight: 700, 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  margin: '0 0 10px' 
                }}
              >
                The <span style={{ color: '#2D6A4F' }}>Oriolus Journey</span>
              </h2>
              {/* Subtle heart/leaf glyph */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ width: '25px', height: '1px', background: '#2D6A4F' }}></span>
                <span style={{ color: '#2D6A4F', fontSize: '13px' }}>♥</span>
                <span style={{ width: '25px', height: '1px', background: '#2D6A4F' }}></span>
              </div>
            </div>
          </div>

          {/* 4 Connected Timeline Milestones */}
          <div style={{ position: 'relative' }}>
            
            {/* Horizontal Connecting Dashed Track (Desktop/Tablet) */}
            <div 
              className="hidden-xs"
              style={{ 
                position: 'absolute', 
                top: '32px', 
                left: '12%', 
                right: '12%', 
                height: '2px', 
                borderTop: '1.8px dashed #2D6A4F', 
                zIndex: 1,
                opacity: 0.55
              }}
            >
              {/* Midpoint Milestone Dots */}
              <span style={{ position: 'absolute', top: '-4px', left: '33%', width: '8px', height: '8px', borderRadius: '50%', background: '#2D6A4F' }}></span>
              <span style={{ position: 'absolute', top: '-4px', left: '66%', width: '8px', height: '8px', borderRadius: '50%', background: '#2D6A4F' }}></span>
            </div>

            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {story.journey.steps.map((step, idx) => {
                const isHovered = hoveredStep === idx;

                return (
                  <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                    <div 
                      onMouseEnter={() => setHoveredStep(idx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      style={{ 
                        textAlign: 'center', 
                        padding: '0 15px',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      {/* Step Circle Badge */}
                      <div 
                        style={{ 
                          width: '66px', 
                          height: '66px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #E8F3E8 0%, #D8EBD8 100%)', 
                          border: '1.8px solid #2D6A4F', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          margin: '0 auto 16px',
                          position: 'relative',
                          zIndex: 2,
                          boxShadow: '0 4px 14px rgba(45, 106, 79, 0.15)',
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        {renderJourneyIcon(step.icon)}
                      </div>

                      {/* Step Number */}
                      <div 
                        style={{ 
                          color: '#2D6A4F', 
                          fontSize: '14px', 
                          fontWeight: 800, 
                          letterSpacing: '1px',
                          marginBottom: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Step Title */}
                      <h4 
                        style={{ 
                          color: '#12305C', 
                          fontSize: '16px', 
                          fontWeight: 700, 
                          marginBottom: '10px',
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: '1.35',
                          minHeight: '44px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {step.title}
                      </h4>

                      {/* Step Description */}
                      <p 
                        style={{ 
                          color: '#666666', 
                          fontSize: '13px', 
                          lineHeight: '1.6', 
                          margin: 0 
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PART 3: Bottom "Why Oriolus Scientific Was Created" Row
         ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '85px 0 90px', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Visual Container */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
              <div 
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)', 
                  border: '1px solid #ECEBE6',
                  minHeight: '380px',
                  background: '#EAE6DF',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={story.whyCreated.image} 
                  alt={story.whyCreated.imageAlt}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '380px',
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = '#EFECE6';
                  }}
                />

                {/* Blank / Placeholder fallback visual icon */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    pointerEvents: 'none', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    opacity: 0.3
                  }}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#12305C" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="2" fill="#12305C" />
                    <path d="M21 15L16 10L5 21" stroke="#12305C" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & 4 Value Badges */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div style={{ paddingLeft: '20px' }}>
                
                {/* Main Heading */}
                <h2 
                  style={{ 
                    color: '#12305C', 
                    fontSize: '34px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '20px',
                    lineHeight: '1.25'
                  }}
                >
                  {story.whyCreated.title}
                </h2>

                {/* Narrative Paragraphs */}
                <p style={{ color: '#555555', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '14px' }}>
                  {story.whyCreated.p1}
                </p>
                <p style={{ color: '#555555', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '32px' }}>
                  {story.whyCreated.p2}
                </p>

                {/* 4 Value Badges Row */}
                <div className="row" style={{ margin: '0 -8px', display: 'flex', flexWrap: 'wrap' }}>
                  {story.whyCreated.values.map((item) => {
                    const isValHovered = hoveredValue === item.id;

                    return (
                      <div 
                        key={item.id} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-6" 
                        style={{ padding: '0 6px', marginBottom: '12px' }}
                      >
                        <div 
                          onMouseEnter={() => setHoveredValue(item.id)}
                          onMouseLeave={() => setHoveredValue(null)}
                          style={{ 
                            background: '#FFFFFF', 
                            border: isValHovered ? '1px solid #2D6A4F' : '1px solid #EBEAE5', 
                            borderRadius: '12px', 
                            padding: '16px 8px 14px', 
                            textAlign: 'center', 
                            boxShadow: isValHovered ? '0 8px 20px rgba(45, 106, 79, 0.12)' : '0 2px 8px rgba(0,0,0,0.03)',
                            transform: isValHovered ? 'translateY(-3px)' : 'translateY(0)',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <div style={{ marginBottom: '8px' }}>
                            {renderValueIcon(item.icon)}
                          </div>
                          <div 
                            style={{ 
                              color: '#12305C', 
                              fontSize: '11.5px', 
                              fontWeight: 700, 
                              lineHeight: '1.3',
                              fontFamily: "'Poppins', sans-serif"
                            }}
                          >
                            {item.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutStory;
