import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import WelcomeArea from '../components/home/WelcomeArea';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

const AboutPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="About Us" activeTitle="About Us" />
      <WelcomeArea />
      
      {/* Start fact counter area */}
      <section className="fact-counter-area" style={{ background: '#131d33', padding: '60px 0', color: '#fff' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single-fact-counter" style={{ padding: '20px' }}>
                <span className="flaticon-laurel" style={{ fontSize: '40px', color: '#c59d5f' }}></span>
                <h1 style={{ fontSize: '42px', fontWeight: 700, margin: '10px 0', color: '#fff' }}>26</h1>
                <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single-fact-counter" style={{ padding: '20px' }}>
                <span className="flaticon-people" style={{ fontSize: '40px', color: '#c59d5f' }}></span>
                <h1 style={{ fontSize: '42px', fontWeight: 700, margin: '10px 0', color: '#fff' }}>1200+</h1>
                <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single-fact-counter" style={{ padding: '20px' }}>
                <span className="flaticon-hairdresser" style={{ fontSize: '40px', color: '#c59d5f' }}></span>
                <h1 style={{ fontSize: '42px', fontWeight: 700, margin: '10px 0', color: '#fff' }}>45+</h1>
                <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Therapists</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="single-fact-counter" style={{ padding: '20px' }}>
                <span className="flaticon-nature-1" style={{ fontSize: '40px', color: '#c59d5f' }}></span>
                <h1 style={{ fontSize: '42px', fontWeight: 700, margin: '10px 0', color: '#fff' }}>100%</h1>
                <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Natural &amp; Herbal</p>
              </div>
            </div>
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
            <div className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
              <img src="/images/brand/1.png" alt="Brand 1" style={{ maxWidth: '100%', opacity: 0.7 }} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
              <img src="/images/brand/2.png" alt="Brand 2" style={{ maxWidth: '100%', opacity: 0.7 }} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
              <img src="/images/brand/3.png" alt="Brand 3" style={{ maxWidth: '100%', opacity: 0.7 }} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
              <img src="/images/brand/4.png" alt="Brand 4" style={{ maxWidth: '100%', opacity: 0.7 }} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2" style={{ padding: '15px' }}>
              <img src="/images/brand/5.png" alt="Brand 5" style={{ maxWidth: '100%', opacity: 0.7 }} />
            </div>
          </div>
        </div>
      </section>
      {/* End brand area */}
    </MainLayout>
  );
};

export default AboutPage;
