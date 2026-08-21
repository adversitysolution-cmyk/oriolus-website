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
    <section
      className="rev_slider_wrapper"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '620px',
        backgroundColor: '#12305C'
      }}
    >
      {/* Background Image with Smooth Cross-fade */}
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

      {/* Premium Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(18, 48, 92, 0.90) 0%, rgba(12, 34, 66, 0.88) 50%, rgba(23, 179, 163, 0.55) 100%)',
          zIndex: 2
        }}
      />

      {/* Content Container - shifted upwards */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '0px'
        }}
      >
        <div className="row" style={{ width: '100%', margin: 0 }}>
          <div className="col-md-12 text-left" style={{ padding: 0 }}>
            {/* Unified Left-Aligned Content Box for all slides */}
            <div
              className="tp-caption"
              style={{
                color: '#fff',
                maxWidth: '850px',
                margin: '-130px 0 0 0',
                padding: '0 15px'
              }}
            >
              {/* Eyebrow Subtitle */}
              <div
                style={{
                  color: '#F0985A',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  marginBottom: '14px',
                  fontWeight: 700,
                  display: 'inline-block'
                }}
              >
                {slide.subtitle}
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: '44px',
                  lineHeight: '54px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '16px',
                  whiteSpace: 'pre-line',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                {slide.title}
              </h1>

              {/* Supporting Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#F3EFE8',
                  maxWidth: '650px',
                  margin: '0 0 28px 0',
                  lineHeight: '28px'
                }}
              >
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'inline-flex',
                  gap: '15px',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap'
                }}
              >
                <Link
                  to={slide.btnLink1}
                  className="thm-btn bgclr-1"
                  style={{
                    padding: '14px 32px',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '4px',
                    boxShadow: '0 4px 15px rgba(23, 179, 163, 0.3)'
                  }}
                >
                  {slide.btnText1}
                </Link>
                <Link
                  to={slide.btnLink2}
                  className="thm-btn"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '2px solid #FFFFFF',
                    color: '#FFFFFF',
                    padding: '12px 30px',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '4px',
                    backdropFilter: 'blur(5px)'
                  }}
                >
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
          left: '25px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          background: 'rgba(18, 48, 92, 0.65)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transition: 'all 0.3s',
          backdropFilter: 'blur(4px)'
        }}
      >
        <i className="fa fa-angle-left"></i>
      </button>
      <button
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '25px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          background: 'rgba(18, 48, 92, 0.65)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transition: 'all 0.3s',
          backdropFilter: 'blur(4px)'
        }}
      >
        <i className="fa fa-angle-right"></i>
      </button>

      {/* Dots Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          gap: '10px',
          padding: '6px 14px',
          background: 'rgba(12, 34, 66, 0.4)',
          borderRadius: '20px',
          backdropFilter: 'blur(5px)'
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentSlide === idx ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: currentSlide === idx ? '#F0985A' : 'rgba(255,255,255,0.5)',
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
