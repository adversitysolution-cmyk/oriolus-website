import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const SaltOilBathPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Salt & Oil Bath" parent="Procedures" parentLink="/procedures" activeTitle="Salt and Oil Bath" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/1.jpg" alt="Salt and Oil Bath" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Salt and Essential Oil Hydrotherapy Soak</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>Immerse yourself in a therapeutic mineral bath featuring pure Himalayan pink salts, Dead Sea minerals, and premium botanical essential oils like lavender, chamomile, and bergamot. The warm, mineral-infused waters draw out impurities, soothe sore muscles, and calm the active mind.</p>
                  <p>Our hydrotherapy suites provide private, tranquil environments with soft candlelight, calming acoustics, and personalized aromatherapy blends.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Therapy Benefits</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Cellular detoxification and mineral absorption</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Soothing relief for arthritis and joint stiffness</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Skin softening and natural hydration boost</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Deep nervous system relaxation and calm</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Session Packages</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>45 Mins Mineral Salt Soak:</strong> $50</li>
                        <li><strong>60 Mins Aromatherapy Bath &amp; Scrub:</strong> $80</li>
                        <li><strong>90 Mins Hydrotherapy + Massage:</strong> $125</li>
                        <li><strong>Couples Private Spa Retreat:</strong> $190</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Experience Deep Hydrotherapy Rejuvenation</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Reserve your private mineral bath suite for a peaceful, restorative escape.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Salt &amp; Oil Bath</Link>
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

export default SaltOilBathPage;
