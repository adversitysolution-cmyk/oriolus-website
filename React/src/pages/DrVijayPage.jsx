import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { drVijayContent } from '../content/drVijayContent';

const DrVijayPage = () => {
  const content = drVijayContent;
  const [hoveredFocus, setHoveredFocus] = useState(null);

  // Exact SVG Icons & Silhouettes matching the reference image
  const renderFocusIcon = (iconName) => {
    switch (iconName) {
      case 'yoga':
        return (
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Meditating Silhouette */}
            <circle cx="24" cy="14" r="4.5" fill="#23492D" />
            <path d="M24 19.5C21 19.5 17 21 16 26C15.5 28 17 31 19 32L14 36C12.5 37 13.5 39 15.5 39H32.5C34.5 39 35.5 37 34 36L29 32C31 31 32.5 28 32 26C31 21 27 19.5 24 19.5Z" fill="#23492D" />
          </svg>
        );
      case 'naturopathy':
        return (
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Water Drop Contour */}
            <path d="M24 8C24 8 13 21 13 29C13 35.0751 17.9249 40 24 40C30.0751 40 35 35.0751 35 29C35 21 24 8 24 8Z" stroke="#23492D" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
            {/* Dual leaves inside */}
            <path d="M24 33C19 33 17 29 18 26C21 25 24 29 24 33Z" fill="#23492D" />
            <path d="M24 33C29 33 31 29 30 26C27 25 24 29 24 33Z" fill="#23492D" />
            <path d="M24 24V35" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'mobility':
        return (
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Standing figure with raised arm silhouette */}
            <circle cx="24" cy="11" r="4.5" fill="#23492D" />
            <path d="M22 17H26V28H22V17Z" fill="#23492D" />
            {/* Left raised arm */}
            <path d="M22 18L17 12V6H19V11L23 16" fill="#23492D" />
            {/* Right lowered arm */}
            <path d="M26 18L29 25H27L25 19" fill="#23492D" />
            {/* Legs standing straight */}
            <path d="M21.5 28H23.5V39H21.5V28Z" fill="#23492D" />
            <path d="M24.5 28H26.5V39H24.5V28Z" fill="#23492D" />
          </svg>
        );
      case 'lifestyle':
      default:
        return (
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 5-Petal Lotus Bloom Outline */}
            <path d="M24 10C21 17 21 27 24 33C27 27 27 17 24 10Z" stroke="#23492D" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
            <path d="M24 33C19 29 14 22 13 16C18 17 22 24 24 33Z" stroke="#23492D" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
            <path d="M24 33C29 29 34 22 35 16C30 17 26 24 24 33Z" stroke="#23492D" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
            <path d="M24 33C17 32 10 28 7 22C11 21 18 25 24 33Z" stroke="#23492D" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M24 33C31 32 38 28 41 22C37 21 30 25 24 33Z" stroke="#23492D" strokeWidth="2" strokeLinejoin="round" fill="none" />
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
      <section style={{ padding: '90px 0 85px', backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Narrative, Philosophy & Buttons */}
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
                      flexShrink: 0
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      boxShadow: '0 4px 14px rgba(35, 73, 45, 0.25)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(35, 73, 45, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(35, 73, 45, 0.25)';
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

            {/* Right Column: Hero Portrait Visual Container */}
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
          backgroundColor: '#F7F8F3', 
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                <span style={{ width: '36px', height: '1.2px', background: '#23492D', opacity: 0.4 }}></span>
                <span style={{ color: '#23492D', fontSize: '16px' }}>🪷</span>
                <span style={{ width: '36px', height: '1.2px', background: '#23492D', opacity: 0.4 }}></span>
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
                    {/* Exact Solid Sage-Olive Circular Emblem */}
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
                        margin: '0 auto 18px',
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
            width: '260px', 
            height: '260px', 
            pointerEvents: 'none',
            opacity: 0.22,
            zIndex: 1
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M190 10C190 10 165 75 105 120C45 165 10 190 10 190C10 190 75 165 120 105C165 45 190 10 190 10Z" fill="#688562" />
            <path d="M120 105L190 190" stroke="#688562" strokeWidth="3" strokeLinecap="round" />
            <path d="M145 60C115 80 100 115 100 115" stroke="#688562" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M60 145C80 115 115 100 115 100" stroke="#688562" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Left Column: Visual Container Frame */}
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

            {/* Right Column: Narrative & 3 Checkpoint Cards */}
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {content.approach.checkpoints.map((item) => (
                    <div 
                      key={item.id} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '16px' 
                      }}
                    >
                      {/* Exact Sage Checkmark Badge */}
                      <div 
                        style={{ 
                          width: '34px', 
                          height: '34px', 
                          borderRadius: '50%', 
                          background: '#DFE8D3', 
                          border: '1px solid #C4DCC1', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="#23492D" strokeWidth="1.6" />
                          <path d="M8.5 12L11 14.5L15.5 10" stroke="#23492D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Text Details */}
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
                            lineHeight: '1.6', 
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
