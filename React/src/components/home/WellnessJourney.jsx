import React from 'react';
import { Leaf } from 'lucide-react';

const WellnessJourney = () => {
  return (
    <section
      className="wellness-journey-area"
      style={{
        position: 'relative',
        padding: '95px 0 90px',
        backgroundColor: '#FBFBF7'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1240px' }}>

        {/* ==========================================================================
            1. SECTION HEADER
            ========================================================================== */}
        <div className="row">
          <div className="col-md-12 text-center" style={{ marginBottom: '55px' }}>
            {/* Eyebrow */}
            <div
              style={{
                color: '#2E5F31',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              YOUR WELLNESS JOURNEY
            </div>

            {/* Central Leaf Icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', color: '#2E5F31' }}>
              <Leaf size={18} strokeWidth={1.8} />
            </div>

            {/* Main Title */}
            <h2
              style={{
                color: '#171B17',
                fontSize: '40px',
                fontWeight: 700,
                fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                marginBottom: '12px',
                lineHeight: '1.2'
              }}
            >
              A Personalised Approach
            </h2>

            {/* Subtitle */}
            <p
              style={{
                color: '#555E55',
                fontSize: '15px',
                lineHeight: '1.6',
                maxWidth: '680px',
                margin: '0 auto'
              }}
            >
              Thoughtful care. Personalised for you. Guided every step of the way.
            </p>
          </div>
        </div>

        {/* ==========================================================================
            2. MAIN 2-COLUMN LAYOUT (LEFT: IMAGE | RIGHT: 3 STEPS)
            ========================================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1.25fr)',
            gap: '50px',
            alignItems: 'center'
          }}
          className="wellness-journey-grid"
        >
          {/* Left Column - Image Card Frame */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#FFFFFF',
              height: '100%',
              minHeight: '440px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
              padding: '16px'
            }}
          >
            <img 
              src="/images/your-wellness-journey.png" 
              alt="Your Wellness Journey - Personalised Approach" 
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '520px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Right Column - 3 Step Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* -------------------- STEP 01 -------------------- */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '26px' }}>
              {/* Number Bubble & Line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#E5ECE1',
                    color: '#2E5F31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  01
                </div>
                {/* Connecting Line with Center Dot */}
                <div style={{ width: '1.5px', height: '48px', background: '#D6DFD2', position: 'relative', margin: '6px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#6C8B64' }} />
                </div>
              </div>

              {/* Text Block */}
              <div style={{ flex: 1, paddingTop: '6px' }}>
                <h3
                  style={{
                    margin: '0 0 4px',
                    fontSize: '21px',
                    fontWeight: 700,
                    color: '#171B17',
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  Consultation &amp; Assessment
                </h3>
                <div style={{ width: '28px', height: '2px', background: '#6C8B64', marginBottom: '8px' }}></div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: '#555E55' }}>
                  We begin by understanding your health history, lifestyle, mobility, concerns and personal wellness goals.
                </p>
              </div>
            </div>

            {/* -------------------- STEP 02 -------------------- */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '26px' }}>
              {/* Number Bubble & Line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#E5ECE1',
                    color: '#2E5F31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  02
                </div>
                {/* Connecting Line with Center Dot */}
                <div style={{ width: '1.5px', height: '48px', background: '#D6DFD2', position: 'relative', margin: '6px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#6C8B64' }} />
                </div>
              </div>

              {/* Text Block */}
              <div style={{ flex: 1, paddingTop: '6px' }}>
                <h3
                  style={{
                    margin: '0 0 4px',
                    fontSize: '21px',
                    fontWeight: 700,
                    color: '#171B17',
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  Personalised Wellness Plan
                </h3>
                <div style={{ width: '28px', height: '2px', background: '#6C8B64', marginBottom: '8px' }}></div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: '#555E55' }}>
                  Suitable Yoga, Naturopathy, Ayurveda or Acupuncture therapies are selected around your individual needs.
                </p>
              </div>
            </div>

            {/* -------------------- STEP 03 -------------------- */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '26px' }}>
              {/* Number Bubble */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#E5ECE1',
                    color: '#2E5F31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  03
                </div>
              </div>

              {/* Text Block */}
              <div style={{ flex: 1, paddingTop: '6px' }}>
                <h3
                  style={{
                    margin: '0 0 4px',
                    fontSize: '21px',
                    fontWeight: 700,
                    color: '#171B17',
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  Progress &amp; Guidance
                </h3>
                <div style={{ width: '28px', height: '2px', background: '#6C8B64', marginBottom: '8px' }}></div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: '#555E55' }}>
                  Your wellness journey is reviewed over time with practical guidance to support sustainable everyday wellbeing.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================================================
            3. BOTTOM FULL-WIDTH BANNER CARD
            ========================================================================== */}
        <div
          style={{
            marginTop: '55px',
            background: '#EDF2EA',
            borderRadius: '16px',
            border: '1px solid #DFE7DC',
            padding: '24px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Circular Dark Green Leaf Icon */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#2E5F31',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0
            }}
          >
            <Leaf size={22} strokeWidth={2} />
          </div>

          {/* Vertical Hairline Divider */}
          <div style={{ width: '1px', height: '42px', background: '#CFDCD0', flexShrink: 0 }}></div>

          {/* Text Info */}
          <div>
            <h4
              style={{
                margin: '0 0 4px',
                fontSize: '19px',
                color: '#2E5F31',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600
              }}
            >
              A journey designed around you.
            </h4>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#5C6E5C' }}>
              Because meaningful wellness begins with understanding.
            </p>
          </div>

          {/* Subtle Botanical Watermark on Far Right */}
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              bottom: '-25px',
              opacity: 0.12,
              pointerEvents: 'none'
            }}
          >
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 110C50 70 120 40 170 10" stroke="#2E5F31" strokeWidth="2.5" />
              <path d="M70 75C85 45 115 35 140 30C125 55 95 65 70 75Z" stroke="#2E5F31" strokeWidth="2" />
              <path d="M110 50C125 25 155 15 175 12C160 35 130 45 110 50Z" stroke="#2E5F31" strokeWidth="2" />
              <path d="M40 95C55 75 80 65 100 62C85 82 60 90 40 95Z" stroke="#2E5F31" strokeWidth="2" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessJourney;
