import React, { useState } from 'react';
import { homeContent } from '../../content/homeContent';

const ClinicalTrustStrip = () => {
  const content = homeContent.clinicalTrustStrip;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const renderPillarIcon = (iconName) => {
    switch (iconName) {
      case 'medical':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V19" stroke="#17B3A3" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 8V14M9 11H15" stroke="#F0985A" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 19H22" stroke="#17B3A3" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'heritage':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#17B3A3" strokeWidth="1.8" />
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#F0985A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="8" r="2.5" fill="#F0985A" />
          </svg>
        );
      case 'drugless':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 15 4 9C4 5 7 2 12 2C17 2 20 5 20 9C20 15 12 21 12 21Z" stroke="#17B3A3" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 7V13M9 10L15 10" stroke="#F0985A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'disciplines':
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#17B3A3" strokeWidth="1.8" />
            <path d="M12 3V21M3 12H21" stroke="#17B3A3" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="3.5" fill="#F0985A" />
          </svg>
        );
    }
  };

  return (
    <section 
      className="clinical-trust-strip-area" 
      style={{ 
        backgroundColor: '#12305C',
        backgroundImage: 'linear-gradient(135deg, #12305C 0%, #0D2342 100%)',
        borderTop: '1px solid #1E467E',
        borderBottom: '1px solid #1E467E',
        padding: '38px 0',
        position: 'relative',
        zIndex: 3
      }}
    >
      <div className="container">
        <div className="row">
          {content.pillars.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={item.id} 
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ marginBottom: '15px', marginTop: '15px' }}
              >
                <div 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 18px',
                    background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: isHovered ? '1px solid rgba(23, 179, 163, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.25)' : 'none',
                    height: '100%'
                  }}
                >
                  {/* Icon Badge Container */}
                  <div 
                    style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '12px', 
                      background: 'rgba(23, 179, 163, 0.12)', 
                      border: '1px solid rgba(23, 179, 163, 0.3)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {renderPillarIcon(item.icon)}
                  </div>

                  {/* Text Content */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                      <span 
                        style={{ 
                          color: '#F0985A', 
                          fontSize: '11px', 
                          fontWeight: 800, 
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          background: 'rgba(240, 152, 90, 0.15)',
                          padding: '2px 7px',
                          borderRadius: '4px'
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 
                      style={{ 
                        color: '#FFFFFF', 
                        fontSize: '15px', 
                        fontWeight: 700, 
                        margin: '0 0 5px 0',
                        fontFamily: "'Poppins', sans-serif"
                      }}
                    >
                      {item.title}
                    </h4>

                    <p 
                      style={{ 
                        color: '#B5C8DF', 
                        fontSize: '12px', 
                        lineHeight: '1.45', 
                        margin: 0 
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTrustStrip;
