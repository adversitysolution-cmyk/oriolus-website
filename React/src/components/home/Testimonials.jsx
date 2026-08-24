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
        position: 'relative',
        backgroundColor: '#FAFBF8',
        paddingTop: '85px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Appointment Section Decorative Palm Leaf Watermark */}
      <div 
        className="icon-holder leap hidden-xs"
        style={{ 
          position: 'absolute', 
          bottom: '-30px', 
          right: '-40px', 
          zIndex: 1,
          opacity: 0.08,
          pointerEvents: 'none'
        }}
      >
        <img src="/images/icon/appointment-bg.png" alt="Botanical Leaf" style={{ width: '420px', height: 'auto' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title">
              <h1>Successful Stories</h1>
              <div className="border">
                <span className="flaticon-shape"></span>    
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Single-Line Auto-Scroll Track */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          overflow: 'hidden',
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: '10px',
          zIndex: 2
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
              gap: 30px;
              width: max-content;
              animation: testimonialMarquee 34s linear infinite;
            }
            .testimonial-marquee-track.is-paused {
              animation-play-state: paused !important;
            }
            .testimonial-marquee-item {
              width: 370px;
              min-width: 370px;
              flex: 0 0 370px;
              position: relative;
            }
          `}
        </style>

        <div className={`testimonial-marquee-track ${isPaused ? 'is-paused' : ''}`}>
          {marqueeItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="testimonial-marquee-item">
              <div className="single-testimonial-item text-center" style={{ position: 'relative', height: '100%' }}>
                <div 
                  className="text-holder" 
                  style={{ 
                    minHeight: '220px', 
                    paddingTop: '32px', 
                    paddingBottom: '24px', 
                    paddingLeft: '24px', 
                    paddingRight: '24px', 
                    borderRadius: '12px', 
                    boxShadow: '0 8px 24px rgba(0,0,0,0.04)', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between' 
                  }}
                >
                  <div>
                    <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#555555' }}>{item.quote}</p>
                  </div>
                  <div>
                    <span className="border"></span>
                    <div className="name">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
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
