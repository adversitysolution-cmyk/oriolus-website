import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/images/slides/1.jpg',
    subtitle: 'Yoga & Naturopathy Research Center',
    title: 'Where Ancient Science Meets\nModern Medical Wellness',
    desc: 'Oriolus Scientific brings together Therapeutic Yoga, Naturopathy, Ayurveda and Acupuncture through personalised wellness protocols designed around each individual.',
    btnText1: 'Explore Therapies',
    btnLink1: '/procedures',
    btnText2: 'Book Consultation',
    btnLink2: '/appointment',
    alignment: 'left'
  },
  {
    id: 2,
    image: '/images/slides/2.jpg',
    subtitle: 'A Division of Funicle Health Care and Wellness Pvt. Ltd.',
    title: 'Evidence-Based Drugless\nClinical Healing Protocols',
    desc: 'Transformative natural medicine therapies for diabetes remission, metabolic detox, and pain management under expert physician supervision.',
    btnText1: 'About Center',
    btnLink1: '/about',
    btnText2: 'Contact OPD',
    btnLink2: '/contact',
    alignment: 'center'
  },
  {
    id: 3,
    image: '/images/slides/3.jpg',
    subtitle: 'Oriolus Scientific Clinical Sanctuary',
    title: 'Restoring Natural\nPhysiological Equilibrium',
    desc: 'Experience 26+ years of clinical mastery in authentic Yogic Sciences and Naturopathic therapies at our serene Bengaluru campus.',
    btnText1: 'Our Procedures',
    btnLink1: '/procedures',
    btnText2: 'Make Appointment',
    btnLink2: '/appointment',
    alignment: 'right'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'all 1s ease-in-out'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <div 
            className={`slide-content-box ${slide.alignment === 'center' ? 'middle-slide text-center' : slide.alignment === 'right' ? 'lastslide text-right' : 'mar-lft'}`}
            style={{ 
              width: '100%', 
              paddingTop: '80px', 
              paddingBottom: '80px',
              animation: 'fadeIn 1s ease-in-out'
            }}
          >
            <h2 style={{ color: '#c59d5f', fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>
              {slide.subtitle}
            </h2>
            <h1 style={{ color: '#ffffff', fontSize: '48px', lineHeight: '1.2', fontWeight: 700, marginBottom: '20px', whiteSpace: 'pre-line' }}>
              {slide.title}
            </h1>
            <p style={{ color: '#e0e0e0', fontSize: '16px', maxWidth: '600px', margin: slide.alignment === 'center' ? '0 auto 30px' : slide.alignment === 'right' ? '0 0 30px auto' : '0 0 30px' }}>
              {slide.desc}
            </p>
            <div className="button" style={{ display: 'flex', gap: '15px', justifyContent: slide.alignment === 'center' ? 'center' : slide.alignment === 'right' ? 'flex-end' : 'flex-start' }}>
              <Link className="thm-btn bgclr-1" to={slide.btnLink1}>
                {slide.btnText1}
              </Link>
              <Link className="thm-btn bgclr-1 contact" to={slide.btnLink2} style={{ backgroundColor: 'transparent', border: '2px solid #fff' }}>
                {slide.btnText2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 10 }}>
        {slides.map((s, index) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? '#c59d5f' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button 
        onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: '#fff',
          border: 'none',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fa fa-angle-left" style={{ fontSize: '20px' }}></i>
      </button>
      <button 
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: '#fff',
          border: 'none',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fa fa-angle-right" style={{ fontSize: '20px' }}></i>
      </button>
    </section>
  );
};

export default HeroSlider;
