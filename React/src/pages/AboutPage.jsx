import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import WelcomeArea from '../components/home/WelcomeArea';
import AboutStory from '../components/about/AboutStory';
import ClinicalTrustStrip from '../components/home/ClinicalTrustStrip';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import { aboutContent } from '../content/aboutContent';

const AboutPage = () => {
  const content = aboutContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />
      <WelcomeArea />
      <AboutStory />
      <ClinicalTrustStrip />
      <WhyChooseUs />
      <Testimonials />

      {/* Start brand area */}
      <section className="brand-area" style={{ padding: '50px 0', background: '#f9f8f6' }}>
        <div className="container">
          <div className="row text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {content.brands.map(brand => (
              <div key={brand.id} className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
                <img src={brand.image} alt={brand.alt} style={{ maxWidth: '100%', opacity: 0.7 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End brand area */}
    </MainLayout>
  );
};

export default AboutPage;
