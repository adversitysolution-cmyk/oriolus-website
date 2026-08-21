import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const PerfectMakeupPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Perfect Makeup" parent="Procedures" parentLink="/procedures" activeTitle="Perfect Makeup" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/2.jpg" alt="Perfect Makeup" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Professional Makeup Artistry &amp; Cosmetic Styling</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>From subtle daytime radiance to high-glamour evening looks and breathtaking bridal artistry, our professional makeup artists specialize in enhancing your innate beauty. We use exclusively prestige, hypoallergenic, long-wear cosmetic brands suited for all skin tones and textures.</p>
                  <p>Every makeup session includes customized skin preparation, precision contouring, customized eyelash application, and setting sprays designed to keep you flawless throughout your special occasion.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Artistry Services</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> HD Airbrush and traditional foundation application</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Customized faux mink lash enhancement</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Photographic lighting makeup adaptation</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Waterproof 16-hour endurance formulas</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Package Rates</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>Daytime Natural Glow:</strong> $60</li>
                        <li><strong>Red Carpet Evening Glamour:</strong> $95</li>
                        <li><strong>Bridal Trial &amp; Wedding Day:</strong> $175</li>
                        <li><strong>Editorial &amp; Photoshoot Makeup:</strong> $220</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Look Flawless on Your Special Day</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Consult with our master makeup artists to design your bespoke look.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Makeup Consultation</Link>
                </div>
              </div>
            </div>

            <ProcedureSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PerfectMakeupPage;
