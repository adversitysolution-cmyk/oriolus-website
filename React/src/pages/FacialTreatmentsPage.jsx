import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const FacialTreatmentsPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Facial Treatments" parent="Procedures" parentLink="/procedures" activeTitle="Facial Treatments" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/2.jpg" alt="Facial Treatments" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Facial Treatments &amp; Botanical Skin Rejuvenation</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>Our bespoke facial treatments combine gentle natural botanicals with state-of-the-art dermatological care. Every session begins with a comprehensive skin analysis to formulate custom serums and organic masks designed to purify pores, hydrate dermis layers, and smooth fine lines.</p>
                  <p>Experience the transformative touch of gentle steam exfoliation, lymphatic facial contour massage, and collagen-boosting peptide infusions that leave your skin luminous, youthful, and glowing.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Treatment Benefits</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Deep pore detoxification &amp; blackhead removal</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Intense hydration and barrier restoration</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Enhanced elasticity &amp; reduction of fine lines</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Even skin tone and radiant complexion</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Pricing &amp; Options</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>Classic European Glow:</strong> $55</li>
                        <li><strong>Anti-Aging Collagen Facial:</strong> $85</li>
                        <li><strong>Hydra-Infusion Botanical:</strong> $115</li>
                        <li><strong>Gold Leaf Rejuvenation:</strong> $160</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Renew Your Skin's Radiance</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Schedule your skin assessment and personalized facial session with our master aestheticians.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Facial Treatment</Link>
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

export default FacialTreatmentsPage;
