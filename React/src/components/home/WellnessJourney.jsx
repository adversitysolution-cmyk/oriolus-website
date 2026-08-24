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
          {/* Left Column - Empty Image Slot Frame */}
          <div 
            style={{ 
              borderRadius: '20px', 
              overflow: 'hidden', 
              border: '2px dashed #D6DFD2',
              background: '#F4F7F2',
              height: '100%',
              minHeight: '440px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
            }}
          >
            {/* Empty Slot Placeholder Indicator */}
            <div style={{ textAlign: 'center', color: '#A0B29E', padding: '20px' }}>
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: '#E5ECE1', 
                  margin: '0 auto 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E5F31'
                }}
              >
                <Leaf size={28} strokeWidth={1.8} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'block' }}>
                Image Slot
              </span>
            </div>
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

      </div>
    </section>
  );
};

export default WellnessJourney;
