import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { drVijayContent } from '../content/drVijayContent';

const DrVijayPage = () => {
  const content = drVijayContent;
  const [hoveredFocus, setHoveredFocus] = useState(null);

  // SVG Icons for the 4 Focus Areas
  const renderFocusIcon = (iconName) => {
    switch (iconName) {
      case 'yoga':
        return (
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5.5" r="2.5" stroke="#23492D" strokeWidth="1.8" fill="#DFE8D3" />
            <path d="M12 8.5V14" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M7.5 12L12 10.5L16.5 12" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 17.5C7.5 14.5 9.5 14.5 12 15.5C14.5 14.5 16.5 14.5 17.5 17.5" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'naturopathy':
        return (
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Water drop */}
            <path d="M12 3C12 3 6 10 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 10 12 3 12 3Z" stroke="#23492D" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            {/* Inner leaves */}
            <path d="M12 18C9.5 18 8.5 15.5 9 13.5C10.5 13 12 15.5 12 18Z" fill="#23492D" />
            <path d="M12 18C14.5 18 15.5 15.5 15 13.5C13.5 13 12 15.5 12 18Z" fill="#23492D" />
            <path d="M12 12V18" stroke="#23492D" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 'mobility':
        return (
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="2.2" stroke="#23492D" strokeWidth="1.8" fill="#DFE8D3" />
            <path d="M12 7.5V17" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            {/* Arms raised up for mobility/wellness */}
            <path d="M7 9L12 8L17 9" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 9V5" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M17 9V5" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
            {/* Legs */}
            <path d="M9 21L12 17L15 21" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'lifestyle':
      default:
        return (
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lotus flower */}
            <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#23492D" strokeWidth="1.8" fill="#DFE8D3" />
            <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#23492D" strokeWidth="1.8" />
            <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#23492D" strokeWidth="1.8" />
            <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      {/* ─────────────────────────────────────────────────────────────
          TIER 1: Hero Profile & Philosophy Section
         ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '95px 0 85px', backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Narrative & Philosophy */}
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
                    {content.hero.eyebrow}
                  </span>
                  <span style={{ width: '45px', height: '1.5px', background: '#D4C5A9', display: 'inline-block' }}></span>
                </div>

                {/* Main Heading */}
                <h1 
                  style={{ 
                    color: '#162D3D', 
                    fontSize: '46px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '14px',
                    lineHeight: '1.15'
                  }}
                >
                  Meet <span style={{ color: '#23492D' }}>Dr. Vijay</span>
                </h1>

                {/* Subtitle Heading */}
                <h3 
                  style={{ 
                    color: '#162D3D', 
                    fontSize: '22px', 
                    fontWeight: 600, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '22px',
                    lineHeight: '1.35'
                  }}
                >
                  {content.hero.subtitle}
                </h3>

                {/* Bio Narrative */}
                <p style={{ color: '#5A6B74', fontSize: '15px', lineHeight: '1.75', marginBottom: '14px', fontFamily: "'Open Sans', sans-serif" }}>
                  {content.hero.p1}
                </p>
                <p style={{ color: '#5A6B74', fontSize: '15px', lineHeight: '1.75', marginBottom: '26px', fontFamily: "'Open Sans', sans-serif" }}>
                  {content.hero.p2}
                </p>

                {/* Philosophy Callout Box */}
                <div 
                  style={{ 
                    background: '#F3F6EE', 
                    borderRadius: '14px', 
                    padding: '18px 24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    marginBottom: '32px',
                    border: '1px solid #E5ECD8'
                  }}
                >
                  {/* Left Circle Badge */}
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '50%', 
                      background: '#23492D', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(35, 73, 45, 0.25)'
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                      <path d="M6 19L11 14" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div style={{ color: '#162D3D', fontSize: '14px', fontWeight: 600, lineHeight: '1.5', fontFamily: "'Open Sans', sans-serif" }}>
                    {content.hero.philosophyCallout.text}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <a 
                    href={content.hero.btn1.link}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      background: '#23492D', 
                      color: '#ffffff', 
                      borderRadius: '8px', 
                      padding: '13px 26px', 
                      fontSize: '14px', 
                      fontWeight: 600, 
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(35, 73, 45, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 22px rgba(35, 73, 45, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(35, 73, 45, 0.3)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                      <path d="M6 19L11 14" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <span>{content.hero.btn1.text}</span>
                  </a>

                  <Link 
                    to={content.hero.btn2.link}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      background: '#FFFFFF', 
                      color: '#23492D', 
                      border: '1.5px solid #23492D', 
                      borderRadius: '8px', 
                      padding: '12px 24px', 
                      fontSize: '14px', 
                      fontWeight: 600, 
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#23492D';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.color = '#23492D';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fa fa-calendar" style={{ fontSize: '14px' }}></i>
                    <span>{content.hero.btn2.text}</span>
                  </Link>
                </div>

              </div>
            </div>

            {/* Right Column: Hero Visual Picture Frame */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 18px 50px rgba(0,0,0,0.09)', 
                  border: '1px solid #EAECE8',
                  minHeight: '440px',
                  background: '#EAE6DF',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={content.hero.image} 
                  alt={content.hero.imageAlt}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '440px',
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
                  <svg width="68" height="68" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          TIER 2: Areas of Focus Section
         ───────────────────────────────────────────────────────────── */}
      <section 
        style={{ 
          padding: '85px 0 95px', 
          backgroundColor: '#FAF9F5', 
          borderTop: '1px solid #E8ECE5',
          borderBottom: '1px solid #E8ECE5',
          position: 'relative' 
        }}
      >
        <div className="container">
          
          {/* Header Title */}
          <div className="row">
            <div className="col-md-12 text-center" style={{ marginBottom: '60px' }}>
              <h2 
                style={{ 
                  color: '#162D3D', 
                  fontSize: '36px', 
                  fontWeight: 700, 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  margin: '0 0 12px' 
                }}
              >
                {content.focusAreas.title}
              </h2>
              
              {/* Lotus flower glyph divider */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1.2px', background: '#23492D', opacity: 0.5 }}></span>
                <span style={{ color: '#23492D', fontSize: '15px' }}>🪷</span>
                <span style={{ width: '32px', height: '1.2px', background: '#23492D', opacity: 0.5 }}></span>
              </div>
            </div>
          </div>

          {/* 4 Pillar Focus Cards */}
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {content.focusAreas.items.map((item, idx) => {
              const isHovered = hoveredFocus === idx;

              return (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                  <div 
                    onMouseEnter={() => setHoveredFocus(idx)}
                    onMouseLeave={() => setHoveredFocus(null)}
                    style={{ 
                      textAlign: 'center', 
                      padding: '0 14px',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                  >
                    {/* Sage Green Circular Emblem */}
                    <div 
                      style={{ 
                        width: '84px', 
                        height: '84px', 
                        borderRadius: '50%', 
                        background: '#DFE8D3', 
                        border: '1.5px solid #C4DCC1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 18px',
                        boxShadow: '0 4px 14px rgba(35, 73, 45, 0.12)',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {renderFocusIcon(item.icon)}
                    </div>

                    {/* Title */}
                    <h4 
                      style={{ 
                        color: '#162D3D', 
                        fontSize: '17px', 
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
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p 
                      style={{ 
                        color: '#5A6B74', 
                        fontSize: '13.5px', 
                        lineHeight: '1.65', 
                        margin: 0,
                        fontFamily: "'Open Sans', sans-serif"
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TIER 3: Our Approach (Thoughtful, Individual-First)
         ───────────────────────────────────────────────────────────── */}
      <section id="about-approach" style={{ padding: '95px 0 100px', backgroundColor: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        
        {/* Soft botanical leaf watermark in bottom-right corner */}
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            right: '-20px', 
            width: '240px', 
            height: '240px', 
            pointerEvents: 'none',
            opacity: 0.18,
            zIndex: 1
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 20C180 20 160 80 100 120C40 160 20 180 20 180C20 180 80 160 120 100C160 40 180 20 180 20Z" fill="#23492D" />
            <path d="M120 100L180 180" stroke="#23492D" strokeWidth="3" strokeLinecap="round" />
            <path d="M140 60C110 80 100 110 100 110" stroke="#23492D" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Visual Frame */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 16px 45px rgba(0,0,0,0.08)', 
                  border: '1px solid #EAECE8',
                  minHeight: '420px',
                  background: '#EAE6DF',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={content.approach.image} 
                  alt={content.approach.imageAlt}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '420px',
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

            {/* Right Column: Narrative & Checkpoints */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div style={{ paddingLeft: '25px' }}>
                
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
                    {content.approach.eyebrow}
                  </span>
                  <span style={{ width: '45px', height: '1.5px', background: '#D4C5A9', display: 'inline-block' }}></span>
                </div>

                {/* Main Heading */}
                <h2 
                  style={{ 
                    color: '#162D3D', 
                    fontSize: '38px', 
                    fontWeight: 700, 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    marginBottom: '28px',
                    lineHeight: '1.22',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {content.approach.title}
                </h2>

                {/* 3 Checkpoint Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {content.approach.checkpoints.map((item) => (
                    <div 
                      key={item.id} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '16px' 
                      }}
                    >
                      {/* Sage Checkmark Badge */}
                      <div 
                        style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#E2EFE0', 
                          border: '1px solid #C4DCC1', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <i className="fa fa-check" style={{ color: '#23492D', fontSize: '13px' }}></i>
                      </div>

                      {/* Text */}
                      <div>
                        <h4 
                          style={{ 
                            color: '#162D3D', 
                            fontSize: '15.5px', 
                            fontWeight: 700, 
                            margin: '0 0 4px',
                            fontFamily: "'Poppins', sans-serif",
                            lineHeight: '1.4'
                          }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          style={{ 
                            color: '#5A6B74', 
                            fontSize: '13.5px', 
                            lineHeight: '1.55', 
                            margin: 0,
                            fontFamily: "'Open Sans', sans-serif"
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default DrVijayPage;
