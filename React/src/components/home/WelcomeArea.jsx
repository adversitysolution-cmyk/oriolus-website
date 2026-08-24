import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const WelcomeArea = () => {
  const content = homeContent.welcomeArea;
  const [isCallHovered, setIsCallHovered] = useState(false);

  return (
    <section className="welcome-area">
      <div className="container">
        <div className="sec-title">
          <h1>{content.title}</h1>
          <div className="border">
            <span className="flaticon-shape"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="text-holder">
              <h4>{content.leadText}</h4>
              <div className="inner-content">
                {/* Start single item */}
                <div className="single-item">
                  <h3>{content.mission.title}</h3>
                  <p>{content.mission.desc}</p>
                </div>
                {/* End single item */}
                {/* Start single item */}
                <div className="single-item border">
                  <h3>{content.vision.title}</h3>
                  <p>{content.vision.desc}</p>
                </div>
                {/* End single item */}
              </div>
              <div className="bottom" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '30px' }}>
                <div className="read-more-button">
                  <Link className="thm-btn bgclr-1" to={content.cta.btnLink}>
                    {content.cta.btnText}
                  </Link>
                </div>
                <div className="call-now-wrapper" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
                  {content.cta.adviceLabel && (
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#262626' }}>
                      {content.cta.adviceLabel}
                    </h3>
                  )}
                  <a 
                    className="thm-btn" 
                    href={content.cta.callPhone || 'tel:+919845012345'} 
                    onMouseEnter={() => setIsCallHovered(true)}
                    onMouseLeave={() => setIsCallHovered(false)}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '9px', 
                      background: isCallHovered ? '#12305C' : 'rgba(18, 48, 92, 0.40)', 
                      color: isCallHovered ? '#ffffff' : '#12305C', 
                      border: isCallHovered ? '1px solid #12305C' : '1px solid rgba(18, 48, 92, 0.30)',
                      borderRadius: '30px',
                      padding: '11px 24px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transform: isCallHovered ? 'translateY(-3px) scale(1.03)' : 'translateY(0) scale(1)',
                      boxShadow: isCallHovered ? '0 8px 22px rgba(18, 48, 92, 0.35)' : '0 2px 8px rgba(18, 48, 92, 0.10)',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(4px)',
                      cursor: 'pointer'
                    }}
                  >
                    <i 
                      className="fa fa-phone" 
                      style={{ 
                        fontSize: '14px', 
                        color: isCallHovered ? '#c59d5f' : '#12305C',
                        transform: isCallHovered ? 'rotate(15deg) scale(1.15)' : 'rotate(0deg) scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    ></i>
                    {content.cta.callBtnText || 'Call Now'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div 
              className="img-holder text-center" 
              style={{ 
                marginTop: '19px',
                padding: '36px 28px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #EFEFEA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '340px'
              }}
            >
              <img 
                src={content.image} 
                alt={content.imageAlt} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '260px', 
                  width: 'auto', 
                  height: 'auto', 
                  objectFit: 'contain',
                  display: 'inline-block' 
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
