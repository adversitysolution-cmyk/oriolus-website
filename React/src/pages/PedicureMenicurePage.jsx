import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const PedicureMenicurePage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Pedicure & Menicure" parent="Procedures" parentLink="/procedures" activeTitle="Pedicure & Menicure" />

      <section className="single-procedure-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/slides/3.jpg" alt="Pedicure & Menicure" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                </div>
                <div className="title">
                  <h2>Pedicure, Manicure &amp; Nail Art Spa</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text">
                  <p>Pamper your hands and feet with our signature nail spa therapies. We practice hospital-grade sterilization and utilize nourishing organic soaks, jojoba cuticle oils, volcanic stone foot smoothing, and hydrating paraffin wax wraps.</p>
                  <p>Choose from an extensive spectrum of non-toxic, long-lasting lacquers, gel coatings, and custom artistic nail finishes applied by certified nail artists.</p>
                </div>

                <div className="benefits-area" style={{ margin: '40px 0' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Service Highlights</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Exfoliating organic sea salt scrub</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Warm botanical paraffin mask treatment</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Reflexology hand &amp; foot acupressure massage</li>
                        <li><i className="fa fa-check" style={{ color: '#c59d5f', marginRight: '10px' }}></i> Chip-resistant luxury gel and regular polishes</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Treatment Pricing</h3>
                      <ul style={{ lineHeight: '2', color: '#555' }}>
                        <li><strong>Classic Spa Manicure:</strong> $35</li>
                        <li><strong>Deluxe Foot Pedicure:</strong> $48</li>
                        <li><strong>Complete Mani-Pedi Combo:</strong> $75</li>
                        <li><strong>Gel Luxury Polish &amp; Art:</strong> $90</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="booking-cta" style={{ background: '#f9f8f6', padding: '30px', borderLeft: '4px solid #c59d5f', marginTop: '30px' }}>
                  <h3>Treat Your Hands &amp; Feet</h3>
                  <p style={{ margin: '10px 0 20px', color: '#666' }}>Relax in our ergonomic massage recliners while our nail artists take care of every detail.</p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Manicure &amp; Pedicure</Link>
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

export default PedicureMenicurePage;
