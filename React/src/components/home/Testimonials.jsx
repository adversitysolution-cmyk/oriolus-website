import React, { useState } from 'react';
import { homeContent } from '../../content/homeContent';

const Testimonials = () => {
  const content = homeContent.testimonials;
  const [isPaused, setIsPaused] = useState(false);
  const items = content.items || [];

  // Duplicate items for continuous seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <section className="testimonial-area" style={{ backgroundImage: `url(${content.bgImage})`, overflow: 'hidden' }}>
      <div className="container">
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

      {/* Infinite Single-Line Auto-Scroll Track with Exact Original Card Design */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          overflow: 'hidden',
          paddingTop: '60px',
          paddingBottom: '20px',
          marginTop: '10px'
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
                <div className="img-holder">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="text-holder" style={{ minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.65' }}>{item.quote}</p>
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
