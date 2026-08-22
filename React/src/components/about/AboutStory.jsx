import React, { useState } from 'react';
import { aboutContent } from '../../content/aboutContent';

const AboutStory = () => {
  const story = aboutContent.ourStory;
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // SVG Icons for the 4 Journey Milestones
  const renderJourneyIcon = (iconName) => {
    switch (iconName) {
      case 'lifestyle':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7.5" r="3.5" stroke="#2D6A4F" strokeWidth="1.8" fill="#EDF6EC" />
            <path d="M5 19.5C5 16 8 13.5 12 13.5C16 13.5 19 16 19 19.5" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'wisdom':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#2D6A4F" strokeWidth="1.8" strokeLinejoin="round" fill="#EDF6EC" />
            <path d="M6 19L11 14" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 9C10 11 9 14 9 14" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 'bridge':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bridge arch */}
            <path d="M3 16C6 12 10 10 12 10C14 10 18 12 21 16" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="2" y1="17.5" x2="22" y2="17.5" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
            {/* Bridge pillars */}
            <line x1="6" y1="14" x2="6" y2="17.5" stroke="#2D6A4F" strokeWidth="1.6" />
            <line x1="12" y1="10" x2="12" y2="17.5" stroke="#2D6A4F" strokeWidth="1.6" />
            <line x1="18" y1="14" x2="18" y2="17.5" stroke="#2D6A4F" strokeWidth="1.6" />
          </svg>
        );
      case 'care':
      default:
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="3.2" stroke="#2D6A4F" strokeWidth="1.8" fill="#EDF6EC" />
            <path d="M6 19.5C6 16.5 8.5 14 12 14C15.5 14 18 16.5 18 19.5" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 16.5C18 16.5 19.5 17.5 19.5 19.5" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="18" r="1.8" fill="#2D6A4F" />
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
            <circle cx="12" cy="6" r="2.5" stroke="#2D6A4F" strokeWidth="1.6" fill="#EDF6EC" />
            <path d="M12 9V15" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8 13L12 11L16 13" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 18C8 15 10 15 12 16C14 15 16 15 17 18" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'traditional':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 15 4 9C4 5 7 2 12 2C17 2 20 5 20 9C20 15 12 21 12 21Z" stroke="#2D6A4F" strokeWidth="1.6" strokeLinejoin="round" fill="#EDF6EC" />
            <path d="M12 7V13M9 10L15 10" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'individual':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="8" r="3" stroke="#2D6A4F" strokeWidth="1.6" fill="#EDF6EC" />
            <path d="M3 18C3 15 5.5 13 9 13C12.5 13 15 15 15 18" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M15 8H21M18 5V11" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'everyday':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="#2D6A4F" strokeWidth="1.6" fill="#EDF6EC" />
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
                  <span style={{ color: '#2D6A4F' }}>Integrated</span> View of Wellness
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
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #E3EFE0 0%, #D2E4CE 100%)', 
                        border: '1.5px solid #2D6A4F', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 14px rgba(45, 106, 79, 0.15)'
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" fill="#C5DDC0" />
                        <path d="M6 19L11 14" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
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
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #E3EFE0 0%, #D2E4CE 100%)', 
                        border: '1.5px solid #2D6A4F', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 14px rgba(45, 106, 79, 0.15)'
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#2D6A4F" strokeWidth="1.8" fill="#C5DDC0" />
                        <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#2D6A4F" strokeWidth="1.8" />
                        <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#2D6A4F" strokeWidth="1.8" />
                        <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
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
          backgroundColor: '#F5F7F2', 
          borderTop: '1px solid #E8ECE5',
          borderBottom: '1px solid #E8ECE5',
          position: 'relative',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(45, 106, 79, 0.04) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(197, 168, 128, 0.04) 0%, transparent 40%)'
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
                  margin: '0 0 10px' 
                }}
              >
                The <span style={{ color: '#2D6A4F' }}>Oriolus Journey</span>
              </h2>
              
              {/* Central Botanical Leaf Accent */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span style={{ width: '28px', height: '1.2px', background: '#2D6A4F', opacity: 0.6 }}></span>
                <span style={{ color: '#2D6A4F', fontSize: '13px' }}>♥</span>
                <span style={{ width: '28px', height: '1.2px', background: '#2D6A4F', opacity: 0.6 }}></span>
              </div>
            </div>
          </div>

          {/* 4 Connected Milestone Steps */}
          <div style={{ position: 'relative' }}>
            
            {/* Horizontal Connecting Dashed Track (Desktop/Tablet) */}
            <div 
              className="hidden-xs"
              style={{ 
                position: 'absolute', 
                top: '38px', 
                left: '12%', 
                right: '12%', 
                height: '2px', 
                borderTop: '1.8px dashed #8FA895', 
                zIndex: 1,
                opacity: 0.65
              }}
            >
              {/* Midpoint Junction Dots */}
              <span style={{ position: 'absolute', top: '-4px', left: '33.3%', width: '8px', height: '8px', borderRadius: '50%', background: '#66896E' }}></span>
              <span style={{ position: 'absolute', top: '-4px', left: '66.6%', width: '8px', height: '8px', borderRadius: '50%', background: '#66896E' }}></span>
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
                        padding: '0 16px',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      {/* Step Circle Badge */}
                      <div 
                        style={{ 
                          width: '78px', 
                          height: '78px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #E2EFE0 0%, #D0E6CC 100%)', 
                          border: '1.8px solid #C4DCC1', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          margin: '0 auto 16px',
                          position: 'relative',
                          zIndex: 2,
                          boxShadow: '0 6px 18px rgba(45, 106, 79, 0.15)',
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
                          color: '#162D3D', 
                          fontSize: '16.5px', 
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
                          color: '#5A6B74', 
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
                            border: isValHovered ? '1px solid #2D6A4F' : '1px solid #EAECE8', 
                            borderRadius: '16px', 
                            padding: '20px 10px 16px', 
                            textAlign: 'center', 
                            boxShadow: isValHovered ? '0 10px 25px rgba(45, 106, 79, 0.14)' : '0 4px 16px rgba(0,0,0,0.03)',
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
                              background: 'linear-gradient(135deg, #E6F1E4 0%, #D2E4CE 100%)', 
                              border: '1px solid #D2E4CE', 
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
