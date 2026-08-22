import React, { useState } from 'react';
import { aboutContent } from '../../content/aboutContent';

const AboutStory = () => {
  const story = aboutContent.ourStory;
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Exact Line-Art SVG Icons matching the reference image
  const renderJourneyIcon = (iconName) => {
    switch (iconName) {
      case 'lifestyle':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Person Head */}
            <circle cx="24" cy="16" r="6" stroke="#23492D" strokeWidth="2" fill="none" />
            {/* Hair contour */}
            <path d="M19 15C19 12 21 10 24 10C27 10 29 12 29 15" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            {/* Neck */}
            <path d="M22 22V25H26V22" stroke="#23492D" strokeWidth="1.8" />
            {/* Shoulders & V-collar */}
            <path d="M13 37C13 30 18 27 21 26L24 30L27 26C30 27 35 30 35 37" stroke="#23492D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case 'wisdom':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main leaf pointing up-right */}
            <path d="M20 33C20 33 21 21 33 13C33 13 34 26 23 31" stroke="#23492D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M22 31L29 20" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            {/* Secondary leaf branching down-left */}
            <path d="M21 28C16 27 14 31 16 34C19 35 22 32 21 28Z" stroke="#23492D" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            {/* Branch stem */}
            <path d="M15 36C18 36 21 34 23 31" stroke="#23492D" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'bridge':
        return (
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Roadway beam */}
            <line x1="8" y1="31" x2="40" y2="31" stroke="#23492D" strokeWidth="2.2" strokeLinecap="round" />
            {/* Left Tower */}
            <path d="M16 16L14 34M16 16L18 34" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14 16H18M14 24H18" stroke="#23492D" strokeWidth="1.6" />
            {/* Right Tower */}
            <path d="M32 16L30 34M32 16L34 34" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M30 16H34M30 24H34" stroke="#23492D" strokeWidth="1.6" />
            {/* Suspension Cables */}
            <path d="M8 26C12 21 16 16 16 16C16 16 24 25 32 16C32 16 36 21 40 26" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* Vertical hanger cables */}
            <line x1="21" y1="23" x2="21" y2="31" stroke="#23492D" strokeWidth="1.4" />
            <line x1="24" y1="25" x2="24" y2="31" stroke="#23492D" strokeWidth="1.4" />
            <line x1="27" y1="23" x2="27" y2="31" stroke="#23492D" strokeWidth="1.4" />
          </svg>
        );
      case 'care':
      default:
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Doctor Head with Medical Cap */}
            <circle cx="24" cy="17" r="5.5" stroke="#23492D" strokeWidth="2" fill="none" />
            <path d="M18.5 16C18.5 13 21 11.5 24 11.5C27 11.5 29.5 13 29.5 16" stroke="#23492D" strokeWidth="2" strokeLinecap="round" fill="#DFE8D3" />
            {/* Shoulders */}
            <path d="M14 37C14 30.5 18.5 27 24 27C29.5 27 34 30.5 34 37" stroke="#23492D" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Stethoscope */}
            <path d="M20 27V31C20 33 22 34.5 24 34.5C26 34.5 28 33 28 31V27" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="28" cy="31" r="1.8" fill="#23492D" />
          </svg>
        );
    }
  };

  // SVG Icons for the 4 Value Cards
  const renderValueIcon = (iconName) => {
    switch (iconName) {
      case 'contemporary':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2.5" stroke="#23492D" strokeWidth="1.6" fill="#DFE8D3" />
            <path d="M12 9V15" stroke="#23492D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8 13L12 11L16 13" stroke="#23492D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 18C8 15 10 15 12 16C14 15 16 15 17 18" stroke="#23492D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'traditional':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 15 4 9C4 5 7 2 12 2C17 2 20 5 20 9C20 15 12 21 12 21Z" stroke="#23492D" strokeWidth="1.6" strokeLinejoin="round" fill="#DFE8D3" />
            <path d="M12 7V13M9 10L15 10" stroke="#23492D" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'individual':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="8" r="3" stroke="#23492D" strokeWidth="1.6" fill="#DFE8D3" />
            <path d="M3 18C3 15 5.5 13 9 13C12.5 13 15 15 15 18" stroke="#23492D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M15 8H21M18 5V11" stroke="#23492D" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'everyday':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="#23492D" strokeWidth="1.6" fill="#DFE8D3" />
            <path d="M12 9V15M9 12H15" stroke="#23492D" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className="about-story-master-section" style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* ─────────────────────────────────────────────────────────────
          PART 1: Top Hero / Built Around a More Integrated View
         ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '90px 0 80px', backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Story Copy & Metrics */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
              <div style={{ paddingRight: '25px' }}>
                
                {/* Eyebrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span 
                    style={{ 
                      color: '#4B7355', 
                      fontSize: '13px', 
                      fontWeight: 700, 
                      letterSpacing: '2.5px', 
                      textTransform: 'uppercase',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    {story.hero.eyebrow}
                  </span>
                  <span style={{ width: '45px', height: '1.5px', background: '#D4C5A9', display: 'inline-block' }}></span>
                </div>

                {/* Main Headline */}
                <h2 
                  style={{ 
                    color: '#162D3D', 
                    fontSize: '42px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '22px',
                    lineHeight: '1.2'
                  }}
                >
                  Built Around a More{' '}
                  <span style={{ color: '#23492D' }}>Integrated</span> View of Wellness
                </h2>

                {/* Description */}
                <p 
                  style={{ 
                    color: '#5A6B74', 
                    fontSize: '15px', 
                    lineHeight: '1.75', 
                    marginBottom: '38px',
                    fontFamily: "'Open Sans', sans-serif"
                  }}
                >
                  {story.hero.desc}
                </p>

                {/* Two Stat Highlights Side-by-Side */}
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
                  
                  {/* Highlight 1: 26+ Years Clinical Heritage */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        background: '#DFE8D3', 
                        border: '1.5px solid #C4DCC1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#23492D" strokeWidth="2" strokeLinejoin="round" fill="none" />
                        <path d="M6 19L11 14" stroke="#23492D" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#162D3D', lineHeight: '1', fontFamily: "'Poppins', sans-serif" }}>
                        {story.hero.heritageStat.number}
                      </div>
                      <div style={{ fontSize: '13px', color: '#5A6B74', marginTop: '5px', lineHeight: '1.35', fontWeight: 500 }}>
                        {story.hero.heritageStat.line1}<br />{story.hero.heritageStat.line2}
                      </div>
                    </div>
                  </div>

                  {/* Highlight 2: 4 Integrated Disciplines */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        background: '#DFE8D3', 
                        border: '1.5px solid #C4DCC1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#23492D" strokeWidth="1.8" fill="none" />
                        <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#23492D" strokeWidth="1.8" />
                        <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#23492D" strokeWidth="1.8" />
                        <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#162D3D', lineHeight: '1', fontFamily: "'Poppins', sans-serif" }}>
                        {story.hero.disciplinesStat.number}
                      </div>
                      <div style={{ fontSize: '13px', color: '#5A6B74', marginTop: '5px', lineHeight: '1.35', fontWeight: 500 }}>
                        {story.hero.disciplinesStat.line1}<br />{story.hero.disciplinesStat.line2}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Column: Hero Visual Picture Frame */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 16px 45px rgba(0,0,0,0.08)', 
                  border: '1px solid #EAECE8',
                  minHeight: '400px',
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
                    minHeight: '400px',
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = '#EAE6DF';
                  }}
                />

                {/* Clean Blank Container Indicator */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    pointerEvents: 'none', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    opacity: 0.25
                  }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#162D3D" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="2" fill="#162D3D" />
                    <path d="M21 15L16 10L5 21" stroke="#162D3D" strokeWidth="1.5" strokeLinejoin="round" />
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
          padding: '85px 0 95px', 
          backgroundColor: '#F3F4EE', 
          borderTop: '1px solid #E5E7DF',
          borderBottom: '1px solid #E5E7DF',
          position: 'relative'
        }}
      >
        <div className="container">
          
          {/* Header Title */}
          <div className="row">
            <div className="col-md-12 text-center" style={{ marginBottom: '65px' }}>
              <h2 
                style={{ 
                  color: '#162D3D', 
                  fontSize: '36px', 
                  fontWeight: 700, 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  margin: '0 0 12px' 
                }}
              >
                The <span style={{ color: '#23492D' }}>Oriolus Journey</span>
              </h2>
              
              {/* Central Botanical Leaf / Sprout Ornament */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1.2px', background: '#23492D', opacity: 0.5 }}></span>
                <span style={{ color: '#23492D', fontSize: '15px' }}>🌱</span>
                <span style={{ width: '32px', height: '1.2px', background: '#23492D', opacity: 0.5 }}></span>
              </div>
            </div>
          </div>

          {/* 4 Connected Milestone Steps with Center Dashed Line & Milestone Dots */}
          <div style={{ position: 'relative' }}>
            
            {/* Horizontal Center Dashed Line across all 4 circles */}
            <div 
              className="hidden-xs"
              style={{ 
                position: 'absolute', 
                top: '43px', 
                left: '12.5%', 
                right: '12.5%', 
                height: '0', 
                borderTop: '1.6px dashed #9EAC95', 
                zIndex: 1
              }}
            >
              {/* 3 Milestone Dots in between each pair of circles */}
              <span 
                style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  left: '33.3%', 
                  transform: 'translateX(-50%)',
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#688562' 
                }}
              />
              <span 
                style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  left: '66.6%', 
                  transform: 'translateX(-50%)',
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#688562' 
                }}
              />
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
                        padding: '0 12px',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      {/* Step Circle Badge (Exact solid soft sage circle) */}
                      <div 
                        style={{ 
                          width: '86px', 
                          height: '86px', 
                          borderRadius: '50%', 
                          background: '#DFE8D3', 
                          border: '1.5px solid #C4DCC1', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          margin: '0 auto 16px',
                          position: 'relative',
                          zIndex: 2,
                          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        {renderJourneyIcon(step.icon)}
                      </div>

                      {/* Step Number */}
                      <div 
                        style={{ 
                          color: '#23492D', 
                          fontSize: '15px', 
                          fontWeight: 700, 
                          letterSpacing: '0.5px',
                          marginBottom: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Step Title */}
                      <h4 
                        style={{ 
                          color: '#162D3D', 
                          fontSize: '16.5px', 
                          fontWeight: 700, 
                          marginBottom: '10px',
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: '1.3',
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
                          color: '#4A5859', 
                          fontSize: '13px', 
                          lineHeight: '1.65', 
                          margin: 0,
                          fontFamily: "'Open Sans', sans-serif"
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
      <section style={{ padding: '90px 0 95px', backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Visual Container Frame */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 16px 45px rgba(0,0,0,0.08)', 
                  border: '1px solid #EAECE8',
                  minHeight: '400px',
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
                    minHeight: '400px',
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = '#EAE6DF';
                  }}
                />

                {/* Clean Blank Container Indicator */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    pointerEvents: 'none', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    opacity: 0.25
                  }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#162D3D" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="2" fill="#162D3D" />
                    <path d="M21 15L16 10L5 21" stroke="#162D3D" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & 4 Value Badges */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div style={{ paddingLeft: '25px' }}>
                
                {/* Main Heading */}
                <h2 
                  style={{ 
                    color: '#162D3D', 
                    fontSize: '36px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '20px',
                    lineHeight: '1.25'
                  }}
                >
                  {story.whyCreated.title}
                </h2>

                {/* Narrative Paragraphs */}
                <p style={{ color: '#5A6B74', fontSize: '15px', lineHeight: '1.75', marginBottom: '14px', fontFamily: "'Open Sans', sans-serif" }}>
                  {story.whyCreated.p1}
                </p>
                <p style={{ color: '#5A6B74', fontSize: '15px', lineHeight: '1.75', marginBottom: '34px', fontFamily: "'Open Sans', sans-serif" }}>
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
                        style={{ padding: '0 6px', marginBottom: '14px' }}
                      >
                        <div 
                          onMouseEnter={() => setHoveredValue(item.id)}
                          onMouseLeave={() => setHoveredValue(null)}
                          style={{ 
                            background: '#FFFFFF', 
                            border: isValHovered ? '1px solid #23492D' : '1px solid #EAECE8', 
                            borderRadius: '16px', 
                            padding: '20px 10px 16px', 
                            textAlign: 'center', 
                            boxShadow: isValHovered ? '0 10px 25px rgba(35, 73, 45, 0.14)' : '0 4px 16px rgba(0,0,0,0.03)',
                            transform: isValHovered ? 'translateY(-3px)' : 'translateY(0)',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {/* Sage Green Circular Icon */}
                          <div 
                            style={{ 
                              width: '44px', 
                              height: '44px', 
                              borderRadius: '50%', 
                              background: '#DFE8D3', 
                              border: '1px solid #C4DCC1', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              marginBottom: '10px',
                              transform: isValHovered ? 'scale(1.08)' : 'scale(1)',
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            {renderValueIcon(item.icon)}
                          </div>

                          <div 
                            style={{ 
                              color: '#162D3D', 
                              fontSize: '12px', 
                              fontWeight: 700, 
                              lineHeight: '1.35',
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
