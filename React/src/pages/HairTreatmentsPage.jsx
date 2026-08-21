import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const HairTreatmentsPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Hair Treatments" parent="Procedures" parentLink="/procedures" activeTitle="Hair Treatments" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/3.jpg" alt="Hair Treatments" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Hair Spa, Scalp Therapy &amp; Organic Styling</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>Transform damaged, stressed, or lackluster hair with our intensive botanical hair spa treatments. We combine organic moroccan argan oil, keratin protein infusions, and invigorating scalp acupressure to stimulate follicle growth, restore moisture balance, and deliver brilliant shine.</p>
                  <p>Our senior hair stylists offer ammonia-free organic hair color, precision cutting, blowouts, and advanced smoothing therapies.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Therapy Highlights</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Deep follicle stimulation and scalp detox</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Keratin and botanical amino acid restoration</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Ammonia-free vibrant organic hair colors</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Frizz control and silk thermal blow dry</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Service Pricing</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>Deep Botanical Hair Spa:</strong> $50</li>
                        <li><strong>Keratin Smooth Infusion:</strong> $110</li>
                        <li><strong>Organic Balayage &amp; Color:</strong> $140</li>
                        <li><strong>Scalp Detox + Blowout:</strong> $75</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Give Your Hair the Ultimate Care</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Schedule your luxury hair treatment and styling session today.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Hair Treatment</Link>
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

export default HairTreatmentsPage;
