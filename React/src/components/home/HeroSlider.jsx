import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const HeroSlider = () => {
  const slides = homeContent.heroSlider.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="rev_slider_wrapper" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', backgroundColor: '#1a1a1a' }}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.8s ease-in-out',
          zIndex: 1
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.45)',
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3, height: '600px', display: 'flex', alignItems: 'center' }}>
        <div className="row" style={{ width: '100%' }}>
          <div 
            className={`col-md-12 ${
              slide.alignment === 'center' ? 'text-center' : 
              slide.alignment === 'right' ? 'text-right' : 'text-left'
            }`}
          >
            <div className="tp-caption" style={{ color: '#fff', padding: '0 15px' }}>
              <div 
                style={{ 
                  color: '#c59d5f', 
                  fontSize: '16px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px',
                  marginBottom: '15px',
                  fontWeight: 600,
                  animation: 'fadeInDown 0.8s'
                }}
              >
                {slide.subtitle}
              </div>
              <h1 
                style={{ 
                  fontSize: '48px', 
                  lineHeight: '58px', 
                  fontWeight: 700, 
                  color: '#fff',
                  marginBottom: '20px',
                  whiteSpace: 'pre-line',
                  animation: 'fadeInUp 0.8s'
                }}
              >
                {slide.title}
              </h1>
              <p 
                style={{ 
                  fontSize: '16px', 
                  color: '#e0e0e0', 
                  maxWidth: '600px', 
                  margin: slide.alignment === 'center' ? '0 auto 30px' : slide.alignment === 'right' ? '0 0 30px auto' : '0 0 30px',
                  lineHeight: '26px',
                  animation: 'fadeInUp 1s'
                }}
              >
                {slide.desc}
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: slide.alignment === 'center' ? 'center' : slide.alignment === 'right' ? 'flex-end' : 'flex-start', flexWrap: 'wrap' }}>
                <Link to={slide.btnLink1} className="thm-btn bgclr-1">
                  {slide.btnText1}
                </Link>
                <Link to={slide.btnLink2} className="thm-btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>
                  {slide.btnText2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          background: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transition: 'background 0.3s'
        }}
      >
        <i className="fa fa-angle-left"></i>
      </button>
      <button 
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          background: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transition: 'background 0.3s'
        }}
      >
        <i className="fa fa-angle-right"></i>
      </button>

      {/* Dots Indicator */}
      <div style={{ position: 'absolute', bottom: '25px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, display: 'flex', gap: '8px' }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentSlide === idx ? '25px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: currentSlide === idx ? '#c59d5f' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
