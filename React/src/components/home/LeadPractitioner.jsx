import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const LeadPractitioner = () => {
  const content = homeContent.leadPractitioner;
  const [hoveredFocus, setHoveredFocus] = useState(null);

  // Custom SVG Icons for Focus Areas
  const renderFocusIcon = (iconName) => {
    switch (iconName) {
      case 'lotus':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C10 9 10 15 12 18C14 15 14 9 12 4Z" stroke="#0F8B8D" strokeWidth="1.6" fill="#E8F6F6" />
            <path d="M12 18C9 16 6 12 5 9C8 10 11 14 12 18Z" stroke="#0F8B8D" strokeWidth="1.6" />
            <path d="M12 18C15 16 18 12 19 9C16 10 13 14 12 18Z" stroke="#0F8B8D" strokeWidth="1.6" />
            <path d="M5 19C9 20.5 15 20.5 19 19" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'leaf':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19C6 19 7 13 13 8C19 3 20 4 20 4C20 4 21 5 16 11C11 17 6 19 6 19Z" stroke="#0F8B8D" strokeWidth="1.6" strokeLinejoin="round" fill="#E8F6F6" />
            <path d="M6 19L11 14" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13 8L15 11" stroke="#0F8B8D" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 'spine':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spine & Body Alignment */}
            <path d="M7 6C7 6 9 9 9 12C9 15 7 18 7 18" stroke="#0F8B8D" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 6C17 6 15 9 15 12C15 15 17 18 17 18" stroke="#0F8B8D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="4" x2="12" y2="20" stroke="#0F8B8D" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="7" r="1.5" fill="#0F8B8D" />
            <circle cx="12" cy="12" r="1.5" fill="#0F8B8D" />
            <circle cx="12" cy="17" r="1.5" fill="#0F8B8D" />
          </svg>
        );
      case 'yoga':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2.2" stroke="#0F8B8D" strokeWidth="1.6" fill="#E8F6F6" />
            <path d="M12 9V15" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8 13L10 12L12 11L14 12L16 13" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 17C8 14 10 14 12 15C14 14 16 14 17 17" stroke="#0F8B8D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  return (
    <section 
      className="lead-practitioner-area" 
      style={{ 
        position: 'relative', 
        padding: '90px 0 95px', 
        backgroundColor: '#FFFFFF',
        overflow: 'hidden' 
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Left Column - Picture Card Container */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
            <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto' }}>
              
              {/* Outer Dashed Contour Border */}
              <div 
                style={{ 
                  border: '2px dashed #0F8B8D', 
                  borderRadius: '36px', 
                  padding: '16px',
                  background: 'rgba(15, 139, 141, 0.02)',
                  position: 'relative'
                }}
              >
                {/* Inside Image Frame */}
                <div 
                  style={{ 
                    width: '100%', 
                    minHeight: '440px', 
                    borderRadius: '26px', 
                    overflow: 'hidden', 
                    position: 'relative',
                    background: '#EAE6DF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.08)'
                  }}
                >
                  {/* Image with fallback styled placeholder SVG */}
                  <img 
                    src={content.image || '/images/team/1.jpg'} 
                    alt={content.imageAlt}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      display: 'block',
                      minHeight: '440px'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.style.background = '#EAE6DF';
                    }}
                  />

                  {/* Fallback Placeholder graphic inside frame */}
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
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#12305C" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="2" fill="#12305C" />
                      <path d="M21 15L16 10L5 21" stroke="#12305C" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative Dot Matrix in Bottom Left */}
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-25px', 
                  left: '-25px', 
                  width: '60px', 
                  height: '60px', 
                  backgroundImage: 'radial-gradient(#0F8B8D 2px, transparent 2px)', 
                  backgroundSize: '12px 12px',
                  opacity: 0.6,
                  zIndex: 1
                }}
              />
            </div>
          </div>

          {/* Right Column - Content & Profile */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: '40px' }}>
            <div className="practitioner-content" style={{ paddingLeft: '20px' }}>
              
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

              {/* Butterfly / Leaf Line Ornament */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ width: '32px', height: '1.5px', background: '#0F8B8D', display: 'inline-block' }}></span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#0F8B8D" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                  <circle cx="12" cy="14" r="1.5" fill="#0F8B8D" />
                  <path d="M9 15C7 18 8 20 12 20C16 20 17 18 15 15" stroke="#0F8B8D" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span style={{ width: '32px', height: '1.5px', background: '#0F8B8D', display: 'inline-block' }}></span>
              </div>

              {/* Main Headline */}
              <h2 
                style={{ 
                  color: '#12305C', 
                  fontSize: '36px', 
                  fontWeight: 700, 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  marginBottom: '26px',
                  lineHeight: '1.25',
                  whiteSpace: 'pre-line'
                }}
              >
                {content.title}
              </h2>

              {/* Practitioner Header (Avatar + Name + Role) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <div 
                  style={{ 
                    width: '54px', 
                    height: '54px', 
                    borderRadius: '50%', 
                    background: '#12305C', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(18, 48, 92, 0.25)'
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="7" r="4" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M4 20C4 16.5 7.5 14 12 14C16.5 14 20 16.5 20 20" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Lotus glyph at base */}
                    <path d="M9 19C10.5 18 13.5 18 15 19" stroke="#0F8B8D" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 3px', fontSize: '22px', fontWeight: 700, color: '#12305C', fontFamily: "'Poppins', sans-serif" }}>
                    {content.doctorName}
                  </h3>
                  <div style={{ color: '#0F8B8D', fontSize: '13px', fontWeight: 600 }}>
                    {content.doctorRole}
                  </div>
                </div>
              </div>

              {/* Bio Paragraph */}
              <p style={{ color: '#555555', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px' }}>
                {content.bio}
              </p>

              {/* Areas of Focus */}
              <div style={{ marginBottom: '24px' }}>
                <div 
                  style={{ 
                    color: '#0F8B8D', 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    letterSpacing: '1.5px', 
                    textTransform: 'uppercase', 
                    marginBottom: '12px' 
                  }}
                >
                  {content.areasOfFocusTitle}
                </div>
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '8px',
                    width: '100%'
                  }}
                >
                  {content.focusAreas.map(item => {
                    const isItemHovered = hoveredFocus === item.id;
                    return (
                      <div 
                        key={item.id}
                        onMouseEnter={() => setHoveredFocus(item.id)}
                        onMouseLeave={() => setHoveredFocus(null)}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          gap: '6px', 
                          background: '#FFFFFF', 
                          border: isItemHovered ? '1px solid #0F8B8D' : '1px solid #EBEAE5', 
                          borderRadius: '10px', 
                          padding: '9px 6px', 
                          boxShadow: isItemHovered ? '0 6px 16px rgba(15, 139, 141, 0.15)' : '0 2px 8px rgba(0,0,0,0.03)',
                          transform: isItemHovered ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.25s ease',
                          cursor: 'default',
                          textAlign: 'center',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {renderFocusIcon(item.icon)}
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#12305C' }}>
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quote Card */}
              <div 
                style={{ 
                  background: '#FAF8F5', 
                  borderLeft: '3px solid #E8A87C', 
                  borderRadius: '8px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '14px',
                  marginBottom: '25px'
                }}
              >
                <span style={{ color: '#E8A87C', fontSize: '32px', lineHeight: '1', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                  “
                </span>
                <p style={{ margin: 0, color: '#444444', fontSize: '13.5px', fontStyle: 'italic', lineHeight: '1.6' }}>
                  {content.quote}
                </p>
              </div>

              {/* 3 Checkpoints */}
              {content.threeCheckpoints && (
                <div style={{ marginBottom: '28px' }}>
                  {content.threeCheckpoints.map((cp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%', 
                        background: '#e8f5e9', 
                        color: '#2acb35', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '11px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <i className="fa fa-check"></i>
                      </span>
                      <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.5' }}>
                        <strong style={{ color: '#222' }}>{cp.title}:</strong> {cp.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <Link 
                  to={content.btn1Link}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    background: 'linear-gradient(135deg, #0F8B8D 0%, #007678 100%)', 
                    color: '#ffffff', 
                    borderRadius: '30px', 
                    padding: '12px 26px', 
                    fontSize: '13.5px', 
                    fontWeight: 600, 
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(15, 139, 141, 0.30)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 139, 141, 0.40)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(15, 139, 141, 0.30)';
                  }}
                >
                  <i className="fa fa-user" style={{ fontSize: '13px' }}></i>
                  <span>{content.btn1Text}</span>
                  <i className="fa fa-angle-right" style={{ fontSize: '15px', fontWeight: 'bold' }}></i>
                </Link>

                <Link 
                  to={content.btn2Link}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    background: '#FFFFFF', 
                    color: '#0F8B8D', 
                    border: '1.5px solid #0F8B8D',
                    borderRadius: '30px', 
                    padding: '11px 24px', 
                    fontSize: '13.5px', 
                    fontWeight: 600, 
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0F8B8D';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0F8B8D';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fa fa-calendar" style={{ fontSize: '13px' }}></i>
                  <span>{content.btn2Text}</span>
                  <i className="fa fa-angle-right" style={{ fontSize: '15px', fontWeight: 'bold' }}></i>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadPractitioner;
