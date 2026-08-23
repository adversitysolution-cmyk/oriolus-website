import React, { useState } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';
import { servicesDetailData } from '../content/servicesDetailContent';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Determine key from URL path or params
  let serviceKey = slug;
  if (!serviceKey) {
    const path = location.pathname.toLowerCase();
    for (const [key, item] of Object.entries(servicesDetailData)) {
      if (path.includes(key) || (item.aliasUrl && path.includes(item.aliasUrl))) {
        serviceKey = key;
        break;
      }
    }
  }

  const service = servicesDetailData[serviceKey];
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return <Navigate to="/procedures" replace />;
  }

  return (
    <MainLayout>
      <Breadcrumb 
        title={service.title} 
        parent={service.category} 
        parentLink={service.parentLink} 
        activeTitle={service.title} 
      />

      {/* Start Main Therapy Area */}
      <section className="single-procedure-area pd-top100 pd-bottom80">
        <div className="container">
          <div className="row">
            
            {/* Start Content Column (9 cols right) */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                
                {/* 1. HERO BANNER & HEADER */}
                <div className="service-hero-header" style={{ marginBottom: '35px' }}>
                  {service.eyebrow && (
                    <span 
                      style={{ 
                        display: 'inline-block',
                        padding: '5px 14px',
                        background: '#e8f5e9',
                        color: '#2acb35',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderRadius: '20px',
                        marginBottom: '12px'
                      }}
                    >
                      {service.eyebrow}
                    </span>
                  )}
                  <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#222', margin: '0 0 10px' }}>
                    {service.title}
                  </h1>
                  <h3 style={{ fontSize: '18px', fontWeight: 400, color: '#2acb35', margin: '0 0 15px', fontFamily: "'Poppins', sans-serif" }}>
                    {service.tagline}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', margin: '0 0 25px' }}>
                    {service.heroDescription}
                  </p>

                  {/* Hero Dual CTA */}
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                    <Link className="thm-btn bgclr-1" to="/appointment" style={{ padding: '12px 28px', fontSize: '14px' }}>
                      Book a Consultation
                    </Link>
                    <Link className="thm-btn" to={service.parentLink} style={{ background: '#f4f4f4', color: '#333', padding: '12px 28px', fontSize: '14px', border: '1px solid #ddd' }}>
                      Explore {service.category}
                    </Link>
                  </div>

                  {/* Feature Image */}
                  <div className="img-holder" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} 
                    />
                  </div>
                </div>

                {/* 2. OVERVIEW */}
                <div className="service-overview" style={{ marginBottom: '45px' }}>
                  <div className="sec-title" style={{ paddingBottom: '15px' }}>
                    <h2 style={{ fontSize: '24px', color: '#222' }}>{service.overviewTitle || `What Is ${service.title}?`}</h2>
                    <div className="border" style={{ margin: '12px 0 20px' }}>
                      <span className="flaticon-shape"></span>
                    </div>
                  </div>
                  <div className="text" style={{ fontSize: '15px', lineHeight: '1.85', color: '#555' }}>
                    {service.overview.map((para, idx) => (
                      <p key={idx} style={{ marginBottom: '14px' }}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* 3. KEY BENEFITS */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="service-benefits" style={{ marginBottom: '45px', background: '#fafafa', border: '1px solid #eee', borderRadius: '8px', padding: '35px 30px' }}>
                    <h2 style={{ fontSize: '22px', color: '#222', marginBottom: '20px' }}>
                      How {service.title} May Support You
                    </h2>
                    <div className="row">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="col-md-6 col-sm-12" style={{ marginBottom: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ 
                              display: 'inline-flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              width: '24px', 
                              height: '24px', 
                              background: '#e8f5e9', 
                              color: '#2acb35', 
                              borderRadius: '50%', 
                              fontSize: '12px',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}>
                              <i className="fa fa-check"></i>
                            </span>
                            <span style={{ fontSize: '14.5px', color: '#444', lineHeight: '1.6' }}>{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. WHO MAY BENEFIT */}
                {service.whoMayBenefit && service.whoMayBenefit.length > 0 && (
                  <div className="service-who-benefit" style={{ marginBottom: '45px' }}>
                    <h2 style={{ fontSize: '22px', color: '#222', marginBottom: '15px' }}>
                      Who May Benefit?
                    </h2>
                    <p style={{ color: '#666', marginBottom: '20px', fontSize: '14.5px' }}>
                      This therapy may be especially suitable for:
                    </p>
                    <div className="row">
                      {service.whoMayBenefit.map((item, idx) => (
                        <div key={idx} className="col-md-6 col-sm-12" style={{ marginBottom: '12px' }}>
                          <div style={{ 
                            background: '#fff', 
                            border: '1px solid #eef2eb', 
                            borderLeft: '3px solid #2acb35', 
                            padding: '14px 18px', 
                            borderRadius: '4px',
                            fontSize: '14px',
                            color: '#444'
                          }}>
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. WHAT TO EXPECT */}
                {service.whatToExpect && service.whatToExpect.length > 0 && (
                  <div className="service-experience" style={{ marginBottom: '45px' }}>
                    <h2 style={{ fontSize: '22px', color: '#222', marginBottom: '15px' }}>
                      Your {service.title} Experience
                    </h2>
                    <p style={{ color: '#666', marginBottom: '25px', fontSize: '14.5px' }}>
                      Every session is adapted rather than predetermined. Depending on your needs, a session may include:
                    </p>
                    <div className="row">
                      {service.whatToExpect.map((exp, idx) => (
                        <div key={idx} className="col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                          <div style={{ 
                            background: '#fff', 
                            border: '1px solid #eee', 
                            borderRadius: '8px', 
                            padding: '22px 20px', 
                            height: '100%',
                            boxShadow: '0 3px 10px rgba(0,0,0,0.02)'
                          }}>
                            <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>
                              {exp.title}
                            </h4>
                            <p style={{ fontSize: '13.5px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                              {exp.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. 3-STEP JOURNEY */}
                {service.threeStepJourney && service.threeStepJourney.length > 0 && (
                  <div className="service-journey" style={{ marginBottom: '45px' }}>
                    <h2 style={{ fontSize: '22px', color: '#222', marginBottom: '25px' }}>
                      Your 3-Step Journey
                    </h2>
                    <div className="row">
                      {service.threeStepJourney.map((step, idx) => (
                        <div key={idx} className="col-md-4 col-sm-12" style={{ marginBottom: '20px' }}>
                          <div style={{ 
                            background: '#f9f8f6', 
                            border: '1px solid #ede8e0', 
                            borderRadius: '8px', 
                            padding: '25px 20px', 
                            textAlign: 'center',
                            height: '100%'
                          }}>
                            <div style={{ 
                              display: 'inline-block',
                              width: '45px',
                              height: '45px',
                              lineHeight: '45px',
                              background: '#2acb35',
                              color: '#fff',
                              borderRadius: '50%',
                              fontSize: '16px',
                              fontWeight: 700,
                              marginBottom: '15px'
                            }}>
                              {step.step}
                            </div>
                            <h3 style={{ fontSize: '17px', color: '#222', marginBottom: '10px' }}>
                              {step.title}
                            </h3>
                            <p style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. IMPORTANT CONSIDERATIONS */}
                {service.importantConsiderations && (
                  <div style={{ 
                    background: '#fffdf5', 
                    border: '1px solid #f6e6b8', 
                    borderLeft: '4px solid #c59d5f', 
                    borderRadius: '6px', 
                    padding: '22px 25px', 
                    marginBottom: '45px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px'
                  }}>
                    <i className="fa fa-info-circle" style={{ color: '#c59d5f', fontSize: '22px', marginTop: '3px' }}></i>
                    <div>
                      <h4 style={{ margin: '0 0 6px', fontSize: '15px', color: '#7a5a1e', fontWeight: 600 }}>
                        Important Considerations &amp; Safety Guidance
                      </h4>
                      <p style={{ margin: 0, fontSize: '13.5px', color: '#6c5324', lineHeight: '1.7' }}>
                        {service.importantConsiderations}
                      </p>
                    </div>
                  </div>
                )}

                {/* 8. FREQUENTLY ASKED QUESTIONS */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="service-faqs" style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '22px', color: '#222', marginBottom: '20px' }}>
                      Frequently Asked Questions
                    </h2>
                    <div className="accordion-box">
                      {service.faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                          <div key={idx} className="accordion" style={{ marginBottom: '10px' }}>
                            <div 
                              className={`accord-btn ${isOpen ? 'active' : ''}`}
                              onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                              style={{ cursor: 'pointer', padding: '16px 20px', background: isOpen ? '#f2fff3' : '#f9f9f9' }}
                            >
                              <h4 style={{ margin: 0, fontSize: '15px', color: isOpen ? '#2acb35' : '#222' }}>{faq.q}</h4>
                            </div>
                            <div className={`accord-content ${isOpen ? 'collapsed' : ''}`} style={{ display: isOpen ? 'block' : 'none', padding: '18px 20px', background: '#fff', border: '1px solid #eee' }}>
                              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: '#666' }}>{faq.a}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 9. RELATED THERAPIES STRIP */}
                {service.relatedLinks && service.relatedLinks.length > 0 && (
                  <div style={{ marginBottom: '45px', padding: '25px', background: '#f8faf7', borderRadius: '8px', border: '1px solid #e2e8df' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#333', marginBottom: '14px' }}>
                      Related Therapies &amp; Complementary Practices:
                    </h4>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {service.relatedLinks.map((rel, idx) => (
                        <Link 
                          key={idx}
                          to={rel.link} 
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 16px',
                            background: '#fff',
                            border: '1px solid #cbd8c8',
                            borderRadius: '20px',
                            fontSize: '13px',
                            color: '#2a5a30',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                          }}
                        >
                          <span>{rel.title}</span>
                          <i className="fa fa-arrow-right" style={{ fontSize: '10px' }}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 10. GLOBAL CONSULTATION CALLOUT BOX */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #131d33 0%, #1c2b48 100%)', 
                  borderRadius: '10px', 
                  padding: '40px 35px', 
                  color: '#fff', 
                  marginBottom: '35px',
                  boxShadow: '0 10px 30px rgba(19,29,51,0.15)'
                }}>
                  <span style={{ color: '#2acb35', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Your Wellness Is Personal
                  </span>
                  <h2 style={{ color: '#fff', fontSize: '24px', margin: '8px 0 14px' }}>
                    Not Sure Whether This Therapy Is Right for You?
                  </h2>
                  <p style={{ color: '#c5d0e0', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '25px', maxWidth: '650px' }}>
                    You don't need to decide on a therapy before visiting Oriolus Scientific. Begin with a conversation about your goals, lifestyle, mobility and wellness concerns. Our team can help you understand the available options and identify an appropriate starting point.
                  </p>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <Link className="thm-btn bgclr-1" to="/appointment" style={{ padding: '12px 28px', fontSize: '14px' }}>
                      Book a Consultation
                    </Link>
                    <Link className="thm-btn" to="/procedures" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '12px 28px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.25)' }}>
                      Explore All Therapies
                    </Link>
                  </div>
                </div>

                {/* 11. UNIVERSAL MEDICAL / WELLNESS NOTE */}
                <div style={{ 
                  padding: '18px 22px', 
                  background: '#fcfcfc', 
                  border: '1px solid #ececec', 
                  borderRadius: '6px', 
                  fontSize: '12.5px', 
                  color: '#777', 
                  lineHeight: '1.7' 
                }}>
                  <strong>Wellness Information:</strong> Information on this website is intended for general wellness and educational purposes. Individual responses to therapies vary. Oriolus Scientific therapies are not a substitute for emergency care, medical diagnosis or prescribed treatment. If you have an existing medical condition, take medication, are pregnant, recently underwent surgery or have significant health concerns, please consult an appropriate healthcare professional before beginning a new therapy.
                </div>

              </div>
            </div>
            {/* End Content Column */}

            {/* Start Sidebar (3 cols left) */}
            <ProcedureSidebar />
            {/* End Sidebar */}

          </div>
        </div>
      </section>
      {/* End Main Therapy Area */}
    </MainLayout>
  );
};

export default ServiceDetailPage;
