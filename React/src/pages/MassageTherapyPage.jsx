import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const MassageTherapyPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Massage Therapy" parent="Procedures" parentLink="/procedures" activeTitle="Massage Therapy" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/1.jpg" alt="Massage Therapy" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Massage Therapy &amp; Body Relaxation</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>Massage therapy is more than just a luxurious treat; it is a proven holistic practice designed to alleviate chronic stress, restore muscular balance, and invigorate the nervous system. Our master therapists employ tailored techniques ranging from smooth Swedish strokes to deep therapeutic acupressure.</p>
                  <p>Heated basalt stones are systematically placed along vital energy meridians, melting away tension, enhancing circulation, and inducing a state of deep, restorative tranquil relaxation.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Key Health Benefits</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Deep muscular tension and pain relief</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Improved blood and lymphatic circulation</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Enhanced joint flexibility and range of motion</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Stress reduction and quality sleep support</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Session Packages</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>30 Mins Express Relief:</strong> $45</li>
                        <li><strong>60 Mins Full Body Swedish:</strong> $75</li>
                        <li><strong>90 Mins Hot Stone Ritual:</strong> $110</li>
                        <li><strong>120 Mins Deluxe Rejuvenation:</strong> $145</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Ready for a deeply relaxing experience?</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Book your personalized massage therapy session today with our certified specialists.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book This Therapy</Link>
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

export default MassageTherapyPage;
