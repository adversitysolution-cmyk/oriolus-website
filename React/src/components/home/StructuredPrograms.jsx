import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const StructuredPrograms = () => {
  const content = homeContent.structuredPrograms;
  const [hoveredCard, setHoveredCard] = useState(null);

  // Custom SVG floating icons for the 4 program categories
  const renderProgramIcon = (iconName) => {
    switch (iconName) {
      case 'obesity':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="3.5" stroke="#0F8B8D" strokeWidth="1.8" fill="#E8F6F6" />
            <path d="M7 14C7 12 9 11 12 11C15 11 17 12 17 14C18 16 18 19 18 21H6C6 19 6 16 7 14Z" stroke="#0F8B8D" strokeWidth="1.8" strokeLinejoin="round" />
            {/* Measuring Tape indicator */}
            <path d="M5 16.5H19" stroke="#0F8B8D" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
          </svg>
        );
      case 'diabetes':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hand supporting blood drop */}
            <path d="M12 4C12 4 8 8 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8 12 4 12 4Z" stroke="#0F8B8D" strokeWidth="1.8" fill="#E8F6F6" />
            <path d="M4 18C4 18 8 16 12 16C16 16 20 18 20 18L18 21H6L4 18Z" stroke="#0F8B8D" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        );
      case 'spine':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spine & posture vertebra */}
            <path d="M7 6C7 6 9 9 9 12C9 15 7 18 7 18" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M17 6C17 6 15 9 15 12C15 15 17 18 17 18" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="12" y1="4" x2="12" y2="20" stroke="#0F8B8D" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="7" r="1.5" fill="#0F8B8D" />
            <circle cx="12" cy="12" r="1.5" fill="#0F8B8D" />
            <circle cx="12" cy="17" r="1.5" fill="#0F8B8D" />
          </svg>
        );
      case 'retreat':
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lotus blossom for retreat */}
            <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#E89038" strokeWidth="1.8" fill="#FDF3E7" />
            <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#E89038" strokeWidth="1.8" />
            <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#E89038" strokeWidth="1.8" />
            <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#E89038" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <section 
      className="structured-programs-area" 
      style={{ 
        position: 'relative', 
        padding: '95px 0 90px', 
        backgroundColor: '#FAFAF7',
        overflow: 'hidden' 
      }}
    >
      {/* Top Right Corner Zen Stones & Towels Image Visual */}
      {content.cornerImage && (
        <div 
          className="hidden-xs"
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '680px', 
            height: '490px', 
            maxWidth: '50vw',
            zIndex: 1, 
            pointerEvents: 'none',
            opacity: 0.95
          }}
        >
          <img 
            src={content.cornerImage} 
            alt="Zen Spa Wellness" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              objectPosition: 'top right'
            }} 
          />
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1320px', width: '94%' }}>
        
        {/* Section Header */}
        <div className="row">
          <div className="col-md-12 text-center">
            {/* Eyebrow */}
            <div 
              style={{ 
                color: '#0F8B8D', 
                fontSize: '13px', 
                fontWeight: 700, 
                letterSpacing: '2.5px', 
                textTransform: 'uppercase', 
                marginBottom: '8px' 
              }}
            >
              {content.eyebrow}
            </div>

            {/* Central Butterfly / Leaf Line Ornament */}
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
                marginBottom: '16px',
                lineHeight: '1.25',
                whiteSpace: 'pre-line'
              }}
            >
              {content.title}
            </h2>

            {/* Subtitle */}
            <p 
              style={{ 
                color: '#555555', 
                fontSize: '15px', 
                lineHeight: '1.7', 
                maxWidth: '720px', 
                margin: '0 auto 60px' 
              }}
            >
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {content.programs.map((plan, index) => {
            const isHovered = hoveredCard === index;
            const isSignature = plan.isSignature;

            return (
              <div 
                key={plan.id} 
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12" 
                style={{ marginBottom: '30px', display: 'flex' }}
              >
                <div 
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '18px', 
                    border: isHovered ? (isSignature ? '1px solid #E89038' : '1px solid #0F8B8D') : '1px solid #ECEBE6',
                    boxShadow: isHovered ? (isSignature ? '0 16px 40px rgba(232, 144, 56, 0.18)' : '0 16px 40px rgba(15, 139, 141, 0.14)') : '0 8px 24px rgba(0,0,0,0.04)', 
                    overflow: 'hidden',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Top Image Box */}
                    <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                      <img 
                        src={plan.image} 
                        alt={plan.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.5s ease'
                        }} 
                      />

                      {/* Top Left Number Badge */}
                      <div 
                        style={{ 
                          position: 'absolute', 
                          top: '12px', 
                          left: '12px', 
                          background: '#0F8B8D', 
                          color: '#ffffff', 
                          borderRadius: '8px', 
                          padding: '3px 10px', 
                          fontWeight: 700, 
                          fontSize: '13px',
                          zIndex: 2,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}
                      >
                        {plan.number}
                      </div>

                      {/* Top Right Signature Ribbon (Card 4) */}
                      {isSignature && (
                        <div 
                          style={{ 
                            position: 'absolute', 
                            top: '12px', 
                            right: '12px', 
                            background: 'linear-gradient(135deg, #E89038 0%, #D47A22 100%)', 
                            color: '#ffffff', 
                            borderRadius: '8px', 
                            padding: '4px 10px', 
                            fontWeight: 700, 
                            fontSize: '9.5px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.5px',
                            zIndex: 2,
                            boxShadow: '0 3px 10px rgba(232, 144, 56, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>{plan.signatureBadge}</span>
                          <span>★</span>
                        </div>
                      )}
                    </div>

                    {/* Floating Circular Icon Badge */}
                    <div 
                      style={{ 
                        position: 'relative', 
                        margin: '-30px auto 0', 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%', 
                        background: '#ffffff', 
                        border: isSignature ? '2px solid #FBEADA' : '2px solid #E8F6F6', 
                        boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.12)' : '0 4px 14px rgba(0,0,0,0.06)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        zIndex: 3,
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.35s ease'
                      }}
                    >
                      {renderProgramIcon(plan.icon)}
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '16px 20px 0', textAlign: 'center' }}>
                      
                      {/* Program Title */}
                      <h3 
                        style={{ 
                          fontSize: '17px', 
                          fontWeight: 700, 
                          color: '#12305C', 
                          marginBottom: '8px',
                          minHeight: '44px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: '1.3'
                        }}
                      >
                        {plan.title}
                      </h3>

                      {/* Duration Tag */}
                      <div 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '6px', 
                          background: isSignature ? '#FDF3E7' : '#E8F6F6', 
                          color: isSignature ? '#D47A22' : '#0F8B8D', 
                          borderRadius: '20px', 
                          padding: '4px 14px', 
                          fontSize: '12px', 
                          fontWeight: 700, 
                          marginBottom: '14px' 
                        }}
                      >
                        <i className="fa fa-calendar-o" style={{ fontSize: '11px' }}></i>
                        <span>{plan.duration}</span>
                      </div>

                      {/* Description Paragraph */}
                      <p 
                        style={{ 
                          color: '#666666', 
                          fontSize: '13px', 
                          lineHeight: '1.6', 
                          marginBottom: '22px',
                          minHeight: '48px'
                        }}
                      >
                        {plan.desc}
                      </p>

                    </div>
                  </div>

                  {/* Card Bottom CTA Button */}
                  <div style={{ padding: '0 20px 24px' }}>
                    <Link 
                      to={plan.btnLink} 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        background: isSignature 
                          ? 'linear-gradient(135deg, #E89038 0%, #D47A22 100%)' 
                          : 'linear-gradient(135deg, #0F8B8D 0%, #007678 100%)', 
                        color: '#ffffff', 
                        borderRadius: '25px', 
                        padding: '11px 0', 
                        width: '100%', 
                        fontSize: '13px', 
                        fontWeight: 600, 
                        textDecoration: 'none',
                        boxShadow: isSignature 
                          ? '0 6px 16px rgba(232, 144, 56, 0.35)' 
                          : '0 6px 16px rgba(15, 139, 141, 0.30)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = isSignature 
                          ? '0 8px 22px rgba(232, 144, 56, 0.45)' 
                          : '0 8px 22px rgba(15, 139, 141, 0.40)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = isSignature 
                          ? '0 6px 16px rgba(232, 144, 56, 0.35)' 
                          : '0 6px 16px rgba(15, 139, 141, 0.30)';
                      }}
                    >
                      <span>{plan.btnText}</span>
                      <i className="fa fa-angle-right" style={{ fontSize: '14px', fontWeight: 'bold' }}></i>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Section Sub-Footer */}
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12 text-center">
            {/* Small decorative butterfly */}
            <div style={{ marginBottom: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#0F8B8D" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <circle cx="12" cy="14" r="1.5" fill="#0F8B8D" />
              </svg>
            </div>
            <p style={{ margin: 0, color: '#555555', fontSize: '14px', fontWeight: 500 }}>
              {content.footerTextLine1}
            </p>
            <p style={{ margin: '4px 0 0', color: '#12305C', fontSize: '14px', fontWeight: 700 }}>
              {content.footerTextLine2}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StructuredPrograms;
