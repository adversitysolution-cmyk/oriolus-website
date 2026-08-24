import React from 'react';
import { Link } from 'react-router-dom';

const GlobalConsultationCTA = () => {
  return (
    <section 
      className="global-consultation-cta"
      style={{
        position: 'relative',
        backgroundImage: `url('/images/wellness-cta-bg.png')`,
        backgroundColor: '#F7EFE9',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '115px 0 120px',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            
            {/* Top Golden Leaf Ornament with Flanking Hairlines */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '16px', 
                marginBottom: '22px' 
              }}
            >
              <span style={{ width: '48px', height: '1.5px', background: '#2E5F31', display: 'inline-block', opacity: 0.6 }}></span>
              {/* Green Leaf Glyph */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C9.5 7.5 5 8.5 2 8.5C2 13 5.5 15.5 9 15.5C10.2 15.5 11.2 15 12 14.5C12.8 15 13.8 15.5 15 15.5C18.5 15.5 22 13 22 8.5C19 8.5 14.5 7.5 12 3Z" stroke="#2E5F31" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <circle cx="12" cy="14.5" r="1.5" fill="#2E5F31" />
                <path d="M9 15.5C6.5 19 8 21.5 12 21.5C16 21.5 17.5 19 15 15.5" stroke="#2E5F31" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span style={{ width: '48px', height: '1.5px', background: '#2E5F31', display: 'inline-block', opacity: 0.6 }}></span>
            </div>

            {/* Main Headline */}
            <h2 
              style={{ 
                color: '#171B17', 
                fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif", 
                fontSize: '52px', 
                fontWeight: 600, 
                lineHeight: '1.24', 
                letterSpacing: '-0.3px',
                margin: '0 0 16px'
              }}
            >
              Begin Your<br />Personalised Wellness Journey
            </h2>

            {/* Accent Divider Bar */}
            <div 
              style={{ 
                width: '38px', 
                height: '2px', 
                background: '#2E5F31', 
                margin: '0 auto 22px',
                borderRadius: '1px'
              }}
            ></div>

            {/* Subtitle Paragraph */}
            <p 
              style={{ 
                color: '#3F4D41', 
                fontSize: '18px', 
                lineHeight: '1.7', 
                maxWidth: '680px', 
                margin: '0 auto 42px',
                fontWeight: 400
              }}
            >
              Discover a thoughtful and integrated approach to wellbeing through Yoga Therapy, Naturopathy, Ayurveda and Acupuncture.
            </p>

            {/* Pill CTA Button */}
            <div>
              <Link 
                to="/contact" 
                style={{ 
                  background: '#2E5F31', 
                  color: '#FFFFFF', 
                  borderRadius: '50px', 
                  padding: '16px 42px', 
                  fontSize: '16.5px', 
                  fontWeight: 600, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(46, 95, 49, 0.28)',
                  transition: 'all 0.35s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(46, 95, 49, 0.38)';
                  e.currentTarget.style.background = '#234C26';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(46, 95, 49, 0.28)';
                  e.currentTarget.style.background = '#2E5F31';
                }}
              >
                {/* Botanical Leaf Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C10 8 6 9 3 9C3 13 6 15 9 15C10 15 11 14.5 12 14C13 14.5 14 15 15 15C18 15 21 13 21 9C18 9 14 8 12 4Z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                  <path d="M9 15C7 18 8 20 12 20C16 20 17 18 15 15" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span>Book a Consultation</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalConsultationCTA;
