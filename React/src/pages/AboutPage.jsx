import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import WelcomeArea from '../components/home/WelcomeArea';
import LeadPractitioner from '../components/home/LeadPractitioner';
import AboutStory from '../components/about/AboutStory';
import ClinicalTrustStrip from '../components/home/ClinicalTrustStrip';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import { aboutContent } from '../content/aboutContent';

const AboutPage = () => {
  const content = aboutContent;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />
      
      {/* 1. Who We Are & Our Purpose */}
      <div id="who-we-are">
        <WelcomeArea />
      </div>

      {/* 2. Meet Dr. Vijay (Lead Practitioner) */}
      <div id="dr-vijay">
        <LeadPractitioner />
      </div>

      {/* 3. Our Story (The Oriolus Wellness Journey) */}
      <div id="our-story">
        <AboutStory />
      </div>

      {/* Trust & Stats Counter */}
      <div id="trust-glance">
        <ClinicalTrustStrip />
      </div>

      {/* 4. Why Choose Oriolus (Our Approach & Differentiators) */}
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      {/* 5. Patient Experiences (Testimonials & Wellness Stories) */}
      <div id="patient-experiences">
        <Testimonials />
      </div>

      {/* 6. Our Affiliations (Institutional & Brand Associations) */}
      <div id="affiliations">
        <section className="brand-area" style={{ padding: '60px 0', background: '#f9f8f6', borderTop: '1px solid #eee' }}>
          <div className="container">
            <div className="sec-title text-center" style={{ paddingBottom: '25px' }}>
              <span style={{ color: '#00B5A6', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Our Wellness Disciplines &amp; Associations
              </span>
              <h2 style={{ fontSize: '26px', color: '#222', margin: '6px 0 10px' }}>Institutional &amp; Brand Associations</h2>
              <div className="border center" style={{ margin: '10px auto' }}>
                <span className="flaticon-shape"></span>
              </div>
            </div>
            <div className="row text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {content.brands.map(brand => (
                <div key={brand.id} className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
                  <img src={brand.image} alt={brand.alt} style={{ maxWidth: '100%', opacity: 0.75, transition: 'opacity 0.3s' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
