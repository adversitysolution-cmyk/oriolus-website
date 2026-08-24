import React, { useState } from 'react';
import { homeContent } from '../../content/homeContent';

const Testimonials = () => {
  const content = homeContent.testimonials;
  const [isPaused, setIsPaused] = useState(false);
  const items = content.items || [];

  // Duplicate items for continuous seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <section 
      className="testimonial-area" 
      style={{ 
        backgroundImage: `url(${content.bgImage})`,
        padding: '95px 0 100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '45px' }}>
        <div className="row">
          <div className="col-md-12 text-center">
            {/* Eyebrow */}
            <div 
              style={{ 
                color: '#2ACB35', 
                fontSize: '13px', 
                fontWeight: 700, 
                letterSpacing: '2.5px', 
                textTransform: 'uppercase', 
                marginBottom: '8px' 
              }}
            >
              PATIENT EXPERIENCES
            </div>

            {/* Central Butterfly / Leaf Line Ornament */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '14px' }}>
              <span style={{ width: '38px', height: '1.5px', background: '#2ACB35', display: 'inline-block' }}></span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#2ACB35" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <circle cx="12" cy="14" r="1.5" fill="#2ACB35" />
                <path d="M9 15C7 18 8 20 12 20C16 20 17 18 15 15" stroke="#2ACB35" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span style={{ width: '38px', height: '1.5px', background: '#2ACB35', display: 'inline-block' }}></span>
            </div>

            {/* Main Title */}
            <h2 
              style={{ 
                color: '#12305C', 
                fontSize: '38px', 
                fontWeight: 700, 
                fontFamily: "'Playfair Display', Georgia, serif", 
                marginBottom: '14px',
                lineHeight: '1.25'
              }}
            >
              {content.title}
            </h2>

            <p style={{ color: '#555555', fontSize: '15px', maxWidth: '680px', margin: '0 auto' }}>
              Verified clinical outcomes and genuine healing journeys from patients treated under Dr. Vijay’s drugless care.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Single-Line Auto-Scroll Marquee Track */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          overflow: 'hidden',
          padding: '15px 0 25px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <style>
          {`
            @keyframes testimonialMarquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .testimonial-marquee-track {
              display: flex;
              gap: 24px;
              width: max-content;
              animation: testimonialMarquee 36s linear infinite;
            }
            .testimonial-marquee-track.is-paused {
              animation-play-state: paused !important;
            }
          `}
        </style>

        <div className={`testimonial-marquee-track ${isPaused ? 'is-paused' : ''}`}>
          {marqueeItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              style={{ 
                width: '380px', 
                minWidth: '380px',
                flex: '0 0 380px',
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '32px 28px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid #ECEBE6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                whiteSpace: 'normal',
                position: 'relative',
                transition: 'all 0.35s ease'
              }}
            >
              {/* Quote Mark Watermark */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '24px', 
                  fontSize: '48px', 
                  color: '#2ACB35', 
                  opacity: 0.15,
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </div>

              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '3px', color: '#F5A623', fontSize: '15px', marginBottom: '14px' }}>
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Story Title */}
                <h3 
                  style={{ 
                    fontSize: '17px', 
                    fontWeight: 700, 
                    color: '#12305C', 
                    marginBottom: '12px',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    lineHeight: '1.35'
                  }}
                >
                  {item.title}
                </h3>

                {/* Patient Quote */}
                <p 
                  style={{ 
                    color: '#555555', 
                    fontSize: '13.5px', 
                    lineHeight: '1.65', 
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Patient Footer Profile */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  borderTop: '1px solid #F0EFEA', 
                  paddingTop: '16px' 
                }}
              >
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    border: '2px solid #2ACB35', 
                    flexShrink: 0 
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '15px', fontWeight: 700, color: '#12305C' }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '11.5px', color: '#2ACB35', fontWeight: 600, display: 'block' }}>
                    {item.role || 'Verified Patient'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
