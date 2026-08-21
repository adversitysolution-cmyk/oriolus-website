import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import WelcomeArea from '../components/home/WelcomeArea';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import { aboutContent } from '../content/aboutContent';

const AboutPage = () => {
  const content = aboutContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />
      <WelcomeArea />
      
      {/* Start fact counter area */}
      <section className="fact-counter-area" style={{ background: '#131d33', padding: '60px 0', color: '#fff' }}>
        <div className="container">
          <div className="row text-center">
            {content.stats.map(stat => (
              <div key={stat.id} className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-fact-counter" style={{ padding: '20px' }}>
                  <span className={stat.icon} style={{ fontSize: '40px', color: '#c59d5f' }}></span>
                  <h1 style={{ fontSize: '42px', fontWeight: 700, margin: '10px 0', color: '#fff' }}>{stat.number}</h1>
                  <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End fact counter area */}

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
