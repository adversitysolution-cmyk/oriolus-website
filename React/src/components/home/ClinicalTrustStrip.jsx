import React, { useState } from 'react';
import { homeContent } from '../../content/homeContent';

const ClinicalTrustStrip = () => {
  const content = homeContent.clinicalTrustStrip;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Custom SVG Icons matching the reference design
  const renderPillarIcon = (iconName) => {
    switch (iconName) {
      case 'mortar':
        return (
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pestle */}
            <path d="M30 10L23 20" stroke="#1E4D2B" strokeWidth="3.5" strokeLinecap="round" />
            {/* Herb leaf */}
            <path d="M19 14C19 14 17 9 22 8C27 7 26 12 26 12" stroke="#1E4D2B" strokeWidth="2.5" strokeLinecap="round" fill="#CBE5CB" />
            <path d="M19 14C19 14 14 12 16 17C18 22 22 17 22 17" stroke="#1E4D2B" strokeWidth="2.5" strokeLinecap="round" fill="#CBE5CB" />
            {/* Mortar Bowl */}
            <path d="M10 20H38C38 20 37 32 24 32C11 32 10 20 10 20Z" stroke="#1E4D2B" strokeWidth="3" strokeLinejoin="round" fill="#1E4D2B" />
            {/* Base Foot */}
            <path d="M17 32H31V35H17V32Z" fill="#1E4D2B" />
          </svg>
        );
      case 'scroll':
        return (
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Scroll Body */}
            <rect x="15" y="9" width="18" height="30" rx="3" stroke="#1E4D2B" strokeWidth="2.8" fill="#F4FAF4" />
            {/* Top Roll */}
            <ellipse cx="24" cy="9" rx="9" ry="3" stroke="#1E4D2B" strokeWidth="2.5" fill="#E2F0E2" />
            {/* Bottom Roll */}
            <ellipse cx="24" cy="39" rx="9" ry="3" stroke="#1E4D2B" strokeWidth="2.5" fill="#E2F0E2" />
            {/* Text lines */}
            <line x1="19" y1="17" x2="29" y2="17" stroke="#1E4D2B" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="23" x2="29" y2="23" stroke="#1E4D2B" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="29" x2="25" y2="29" stroke="#1E4D2B" strokeWidth="2" strokeLinecap="round" />
            {/* Sprouting leaf on right */}
            <path d="M33 27C37 25 39 29 37 33C33 34 32 30 33 27Z" fill="#1E4D2B" stroke="#1E4D2B" strokeWidth="1.5" />
          </svg>
        );
      case 'temple':
        return (
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Triangular Pediment Roof */}
            <path d="M10 16L24 8L38 16H10Z" fill="#1E4D2B" stroke="#1E4D2B" strokeWidth="2" strokeLinejoin="round" />
            {/* Architrave Bar */}
            <rect x="12" y="17" width="24" height="2.5" fill="#1E4D2B" />
            {/* 3 Columns */}
            <rect x="15" y="21" width="3.5" height="13" rx="1" fill="#1E4D2B" />
            <rect x="22.25" y="21" width="3.5" height="13" rx="1" fill="#1E4D2B" />
            <rect x="29.5" y="21" width="3.5" height="13" rx="1" fill="#1E4D2B" />
            {/* Plinth Base Steps */}
            <rect x="12" y="35" width="24" height="2.5" fill="#1E4D2B" />
            <rect x="9" y="38.5" width="30" height="2.5" fill="#1E4D2B" />
          </svg>
        );
      case 'waterleaf':
      default:
        return (
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Water Drop Contour */}
            <path d="M24 8C24 8 13 20 13 28C13 34.0751 17.9249 39 24 39C30.0751 39 35 34.0751 35 28C35 20 24 8 24 8Z" stroke="#1E4D2B" strokeWidth="3" strokeLinejoin="round" fill="none" />
            {/* Left Leaf inside */}
            <path d="M24 32C19 32 17 28 18 25C21 24 24 28 24 32Z" fill="#1E4D2B" />
            {/* Right Leaf inside */}
            <path d="M24 32C29 32 31 28 30 25C27 24 24 28 24 32Z" fill="#1E4D2B" />
            <path d="M24 23V34" stroke="#1E4D2B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <section 
      className="clinical-trust-strip-area" 
      style={{ 
        padding: '50px 0 65px', 
        backgroundColor: '#FAFAF7',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(30, 77, 43, 0.03) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 50%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Luxury Plaque Card Container */}
        <div 
          style={{ 
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFCF9 100%)', 
            border: '1.8px solid #C5A880', 
            borderRadius: '32px', 
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.07), 0 4px 18px rgba(197, 168, 128, 0.18)', 
            padding: '48px 30px 42px',
            position: 'relative',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div className="row" style={{ margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
            {content.pillars.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isLast = index === content.pillars.length - 1;

              return (
                <div 
                  key={item.id} 
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    textAlign: 'center', 
                    padding: '10px 24px',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  {/* Vertical Gold Divider Line (Hidden on last item & small screens) */}
                  {!isLast && (
                    <div 
                      className="hidden-xs hidden-sm"
                      style={{ 
                        position: 'absolute', 
                        right: 0, 
                        top: '15%', 
                        bottom: '15%', 
                        width: '1px', 
                        background: 'linear-gradient(to bottom, transparent, rgba(197, 168, 128, 0.45) 25%, rgba(197, 168, 128, 0.45) 75%, transparent)',
                        pointerEvents: 'none'
                      }}
                    />
                  )}

                  {/* Circular Badge with Laurel Wreath & Gold Star */}
                  <div style={{ position: 'relative', width: '130px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* SVG Laurel Wreath Leaves */}
                    <svg 
                      width="130" 
                      height="95" 
                      viewBox="0 0 130 95" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
                    >
                      {/* Left Laurel Branch */}
                      <g fill="#245934" opacity={isHovered ? 1 : 0.85} style={{ transition: 'opacity 0.3s ease' }}>
                        <path d="M22 68C17 62 14 53 14 43C14 36 17 28 22 22C21 26 21 31 22 36C18 36 14 41 15 47C16 53 20 57 22 68Z" />
                        <path d="M12 40C8 38 7 32 9 28C11 25 15 27 16 30C16 34 14 38 12 40Z" />
                        <path d="M17 26C14 23 15 17 19 15C22 13 25 17 24 20C22 24 19 26 17 26Z" />
                        <path d="M26 16C24 12 28 8 32 8C35 8 36 13 34 16C31 18 28 18 26 16Z" />
                        <path d="M11 55C7 54 5 48 8 44C11 41 15 44 15 47C15 51 13 54 11 55Z" />
                        <path d="M15 67C12 67 10 62 12 58C15 55 18 57 19 60C19 64 17 67 15 67Z" />
                        <path d="M24 78C20 78 18 73 21 69C24 66 28 68 28 71C28 75 26 78 24 78Z" />
                        <path d="M37 86C33 86 31 82 34 78C37 75 41 76 42 79C42 83 39 86 37 86Z" />
                      </g>

                      {/* Right Laurel Branch */}
                      <g fill="#245934" opacity={isHovered ? 1 : 0.85} style={{ transition: 'opacity 0.3s ease' }}>
                        <path d="M108 68C113 62 116 53 116 43C116 36 113 28 108 22C109 26 109 31 108 36C112 36 116 41 115 47C114 53 110 57 108 68Z" />
                        <path d="M118 40C122 38 123 32 121 28C119 25 115 27 114 30C114 34 116 38 118 40Z" />
                        <path d="M113 26C116 23 115 17 111 15C108 13 105 17 106 20C108 24 111 26 113 26Z" />
                        <path d="M104 16C106 12 102 8 98 8C95 8 94 13 96 16C99 18 102 18 104 16Z" />
                        <path d="M119 55C123 54 125 48 122 44C119 41 115 44 115 47C115 51 117 54 119 55Z" />
                        <path d="M115 67C118 67 120 62 118 58C115 55 112 57 111 60C111 64 113 67 115 67Z" />
                        <path d="M106 78C110 78 112 73 109 69C106 66 102 68 102 71C102 75 104 78 106 78Z" />
                        <path d="M93 86C97 86 99 82 96 78C93 75 89 76 88 79C88 83 91 86 93 86Z" />
                      </g>

                      {/* Laurel Connecting Bottom Arch */}
                      <path d="M48 90C58 93 72 93 82 90" stroke="#245934" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>

                    {/* Central Sage Green Circular Badge */}
                    <div 
                      style={{ 
                        width: '82px', 
                        height: '82px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #E6F3E6 0%, #D4EBD4 100%)', 
                        border: '1.6px solid #C5A880', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(36, 89, 52, 0.12)',
                        position: 'relative',
                        zIndex: 2,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {renderPillarIcon(item.icon)}
                    </div>

                    {/* Small Gold Star at the bottom center of the wreath */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        bottom: '-6px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        color: '#C5A880', 
                        fontSize: '13px', 
                        zIndex: 3,
                        textShadow: '0 1px 2px rgba(0,0,0,0.15)'
                      }}
                    >
                      ★
                    </div>
                  </div>

                  {/* Main Badge Headline */}
                  <h3 
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontSize: '26px', 
                      fontWeight: 700, 
                      color: '#0E3B20', 
                      margin: '6px 0 2px',
                      lineHeight: '1.2'
                    }}
                  >
                    {item.badge}
                  </h3>

                  {/* Subtitle Line */}
                  <h4 
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontSize: '14.5px', 
                      fontWeight: 600, 
                      color: '#1A3324', 
                      margin: '0 0 10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {item.subtitle}
                  </h4>

                  {/* Gold Dot Divider Ornament */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '4px auto 12px' }}>
                    <span style={{ width: '22px', height: '1px', background: '#C5A880', display: 'inline-block' }}></span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C5A880', display: 'inline-block' }}></span>
                    <span style={{ width: '22px', height: '1px', background: '#C5A880', display: 'inline-block' }}></span>
                  </div>

                  {/* Description Paragraph */}
                  <p 
                    style={{ 
                      color: '#4A5568', 
                      fontSize: '13px', 
                      lineHeight: '1.6', 
                      margin: 0,
                      fontFamily: "'Open Sans', sans-serif"
                    }}
                  >
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicalTrustStrip;
