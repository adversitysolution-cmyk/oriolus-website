import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const WellnessJourney = () => {
  const content = homeContent.wellnessJourney;
  const [hoveredCard, setHoveredCard] = useState(null);

  // SVG Icons for the 3 steps matching the design exactly
  const renderStepIcon = (iconName) => {
    switch (iconName) {
      case 'consultation':
        return (
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="8" width="22" height="32" rx="3" stroke="#0F8B8D" strokeWidth="2.5" fill="none" />
            <path d="M17 6H25C25 4.89543 24.1046 4 23 4H19C17.8954 4 17 4.89543 17 6Z" stroke="#0F8B8D" strokeWidth="2.5" fill="#E8F6F6" />
            <path d="M16 16H26" stroke="#0F8B8D" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 21H24" stroke="#0F8B8D" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 26H21" stroke="#0F8B8D" strokeWidth="2" strokeLinecap="round" />
            {/* Person avatar */}
            <circle cx="34" cy="30" r="5" stroke="#0F8B8D" strokeWidth="2.5" fill="#fff" />
            <path d="M28 42C28 38.6863 30.6863 36 34 36C37.3137 36 40 38.6863 40 42" stroke="#0F8B8D" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'lotus':
        return (
          <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center petal */}
            <path d="M24 8C21 16 21 26 24 32C27 26 27 16 24 8Z" stroke="#0F8B8D" strokeWidth="2.3" strokeLinejoin="round" fill="#F0F9F9" />
            {/* Left petal */}
            <path d="M24 32C19 28 14 21 13 15C18 16 22 23 24 32Z" stroke="#0F8B8D" strokeWidth="2.3" strokeLinejoin="round" />
            {/* Right petal */}
            <path d="M24 32C29 28 34 21 35 15C30 16 26 23 24 32Z" stroke="#0F8B8D" strokeWidth="2.3" strokeLinejoin="round" />
            {/* Outer left petal */}
            <path d="M24 32C17 31 10 27 7 21C11 20 18 24 24 32Z" stroke="#0F8B8D" strokeWidth="2" strokeLinejoin="round" />
            {/* Outer right petal */}
            <path d="M24 32C31 31 38 27 41 21C37 20 30 24 24 32Z" stroke="#0F8B8D" strokeWidth="2" strokeLinejoin="round" />
            {/* Base curve */}
            <path d="M12 34C18 36.5 30 36.5 36 34" stroke="#0F8B8D" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
        );
      case 'progress':
      default:
        return (
          <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Meditating figure */}
            <circle cx="20" cy="14" r="4.5" stroke="#0F8B8D" strokeWidth="2.3" fill="#fff" />
            {/* Body */}
            <path d="M20 19V29" stroke="#0F8B8D" strokeWidth="2.3" strokeLinecap="round" />
            {/* Crossed legs */}
            <path d="M12 33C14 28 17 28 20 29C23 28 26 28 28 33C25 35 15 35 12 33Z" stroke="#0F8B8D" strokeWidth="2.3" strokeLinejoin="round" fill="#F0F9F9" />
            {/* Arms in mudra */}
            <path d="M13 25L17 24L20 22L23 24L27 25" stroke="#0F8B8D" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Progress upward arrow */}
            <path d="M30 27L39 18M39 18H32M39 18V25" stroke="#0F8B8D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  return (
    <section 
      className="wellness-journey-area" 
      style={{ 
        position: 'relative', 
        padding: '90px 0 100px', 
        backgroundColor: '#FAFAF7',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(15, 139, 141, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(18, 48, 92, 0.03) 0%, transparent 40%)',
        overflow: 'hidden' 
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Section */}
        <div className="row">
          <div className="col-md-12 text-center">
            {/* Eyebrow */}
            <div 
              style={{ 
                color: '#0F8B8D', 
                fontSize: '13px', 
                fontWeight: 700, 
                letterSpacing: '3px', 
                textTransform: 'uppercase', 
                marginBottom: '10px' 
              }}
            >
              {content.eyebrow}
            </div>

            {/* Central Lotus / Butterfly Divider Ornament */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '14px' }}>
              <span style={{ width: '38px', height: '1.5px', background: '#0F8B8D', display: 'inline-block' }}></span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#0F8B8D" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <circle cx="12" cy="14" r="1.5" fill="#0F8B8D" />
                <path d="M9 15C7 18 8 20 12 20C16 20 17 18 15 15" stroke="#0F8B8D" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span style={{ width: '38px', height: '1.5px', background: '#0F8B8D', display: 'inline-block' }}></span>
            </div>

            {/* Main Title */}
            <h2 
              style={{ 
                color: '#12305C', 
                fontSize: '38px', 
                fontWeight: 700, 
                fontFamily: "'Playfair Display', Georgia, serif", 
                marginBottom: '18px',
                lineHeight: '1.25'
              }}
            >
              {content.title}
            </h2>

            {/* Description */}
            <p 
              style={{ 
                color: '#555555', 
                fontSize: '15px', 
                lineHeight: '1.7', 
                maxWidth: '720px', 
                margin: '0 auto 65px' 
              }}
            >
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Step Cards with Floating Badges and Timeline Connecting Curve */}
        <div style={{ position: 'relative', marginBottom: '50px' }}>
          
          {/* Connecting Arch Line (Visible on Desktop/Tablet) */}
          <div 
            className="hidden-xs"
            style={{ 
              position: 'absolute', 
              top: '72px', 
              left: '16%', 
              right: '16%', 
              height: '35px', 
              zIndex: 1,
              pointerEvents: 'none'
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 800 40" fill="none" preserveAspectRatio="none">
              <path 
                d="M 10 32 C 120 10, 260 10, 390 30 C 520 10, 670 10, 790 32" 
                stroke="#0F8B8D" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none" 
              />
              {/* Midpoint milestone dots */}
              <circle cx="190" cy="18" r="4.5" fill="#0F8B8D" />
              <circle cx="590" cy="18" r="4.5" fill="#0F8B8D" />
            </svg>
          </div>

          <div className="row">
            {content.steps.map((step, index) => {
              const isHovered = hoveredCard === index;
              const isTealBadge = step.stepNumber === '02';

              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ marginBottom: '35px' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    {/* Top Step Number Circle with Dashed Halo */}
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        border: `1.5px dashed ${isTealBadge ? '#0F8B8D' : '#12305C'}`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background: '#ffffff',
                        marginBottom: '0',
                        position: 'relative',
                        zIndex: 4,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}
                    >
                      <div 
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          borderRadius: '50%', 
                          background: isTealBadge ? '#0F8B8D' : '#12305C', 
                          color: '#ffffff', 
                          fontWeight: 700, 
                          fontSize: '17px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                      >
                        {step.stepNumber}
                      </div>
                    </div>

                    {/* Connecting Vertical Stem */}
                    <div 
                      style={{ 
                        width: '2px', 
                        height: '24px', 
                        background: '#0F8B8D', 
                        zIndex: 3 
                      }}
                    />

                    {/* Floating Circular Icon Badge */}
                    <div 
                      style={{ 
                        width: '78px', 
                        height: '78px', 
                        borderRadius: '50%', 
                        background: '#ffffff', 
                        border: '2px solid #E4F2F2', 
                        boxShadow: isHovered ? '0 10px 25px rgba(15, 139, 141, 0.25)' : '0 6px 20px rgba(0,0,0,0.06)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative', 
                        zIndex: 4,
                        marginBottom: '-39px',
                        transition: 'all 0.35s ease',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                      }}
                    >
                      {renderStepIcon(step.icon)}
                    </div>

                    {/* Main Card Container */}
                    <div 
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ 
                        background: '#ffffff', 
                        borderRadius: '16px', 
                        padding: '60px 28px 38px', 
                        textAlign: 'center', 
                        width: '100%', 
                        flexGrow: 1, 
                        border: isHovered ? '1px solid #C5E6E6' : '1px solid #ECEBE6', 
                        boxShadow: isHovered ? '0 18px 45px rgba(15, 139, 141, 0.12)' : '0 8px 30px rgba(0,0,0,0.04)', 
                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)', 
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        {/* Card Title */}
                        <h3 
                          style={{ 
                            fontSize: '18px', 
                            fontWeight: 700, 
                            color: '#12305C', 
                            marginBottom: '12px',
                            fontFamily: "'Poppins', sans-serif"
                          }}
                        >
                          {step.title}
                        </h3>

                        {/* Short Accent Divider */}
                        <div 
                          style={{ 
                            width: '28px', 
                            height: '2px', 
                            background: '#0F8B8D', 
                            margin: '0 auto 16px', 
                            borderRadius: '2px' 
                          }}
                        />

                        {/* Card Description */}
                        <p 
                          style={{ 
                            color: '#666666', 
                            fontSize: '14px', 
                            lineHeight: '1.65', 
                            margin: 0 
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="row">
          <div className="col-md-12 text-center">
            <Link 
              to={content.cta.btnLink} 
              className="wellness-journey-btn"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                background: 'linear-gradient(135deg, #0F8B8D 0%, #007678 100%)', 
                color: '#ffffff', 
                borderRadius: '30px', 
                padding: '14px 34px', 
                fontSize: '14px', 
                fontWeight: 600, 
                letterSpacing: '0.5px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(15, 139, 141, 0.35)',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 139, 141, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 139, 141, 0.35)';
              }}
            >
              {/* Left Butterfly / Lotus Glyph */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <circle cx="12" cy="14" r="1.5" fill="#ffffff" />
              </svg>
              <span>{content.cta.btnText}</span>
              {/* Right Arrow */}
              <i className="fa fa-angle-right" style={{ fontSize: '16px', fontWeight: 'bold' }}></i>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessJourney;
