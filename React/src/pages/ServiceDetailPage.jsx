import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';
import { servicesDetailData } from '../content/servicesDetailContent';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesDetailData[slug];

  if (!service) {
    return <Navigate to="/procedures" replace />;
  }

  return (
    <MainLayout>
      <Breadcrumb 
        title={service.title} 
        parent={service.category} 
        parentLink={service.parentLink} 
        activeTitle={service.title} 
      />

      {/* Start Single Procedure Area */}
      <section className="single-procedure-area pd-top100 pd-bottom80">
        <div className="container">
          <div className="row">
            
            {/* Start Content (9 cols right) */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="single-procedure-content">
                
                {/* Hero Feature Image */}
                <div className="img-holder" style={{ marginBottom: '35px', overflow: 'hidden', borderRadius: '6px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} 
                  />
                </div>

                {/* Title & Tagline */}
                <div className="title" style={{ marginBottom: '20px' }}>
                  <h2>{service.title}</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#2acb35', margin: '15px 0' }}></span>
                  <h4 style={{ color: '#2acb35', fontSize: '16px', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
                    {service.tagline}
                  </h4>
                </div>

                {/* Overview Text */}
                <div className="text" style={{ fontSize: '14.5px', lineHeight: '1.8', color: '#555' }}>
                  <p>{service.overview}</p>
                  <p>{service.subText}</p>
                </div>

                {/* Benefits & Session Packages */}
                <div className="benefits-area" style={{ margin: '40px 0', padding: '30px 25px', background: '#fcfcfc', border: '1px solid #f0f0f0' }}>
                  <div className="row">
                    
                    {/* Key Health Benefits */}
                    <div className="col-md-6 col-sm-12" style={{ marginBottom: '25px' }}>
                      <h3 style={{ fontSize: '19px', marginBottom: '18px', color: '#222' }}>Key Clinical Benefits</h3>
                      <ul style={{ lineHeight: '2.1', color: '#555', paddingLeft: 0, listStyle: 'none' }}>
                        {service.benefits.map((b, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <i className="fa fa-check" style={{ color: '#2acb35', marginRight: '10px', marginTop: '5px' }}></i>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Session Packages / Options */}
                    <div className="col-md-6 col-sm-12">
                      <h3 style={{ fontSize: '19px', marginBottom: '18px', color: '#222' }}>Session Packages</h3>
                      <ul style={{ lineHeight: '2.1', color: '#555', paddingLeft: 0, listStyle: 'none' }}>
                        {service.packages.map((pkg, idx) => (
                          <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e8e8e8', paddingBottom: '8px', marginBottom: '10px' }}>
                            <span style={{ fontWeight: 500 }}>{pkg.name}</span>
                            <strong style={{ color: '#2acb35' }}>{pkg.price}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Booking Callout CTA */}
                <div className="booking-cta" style={{ background: '#f2fff3', padding: '35px 30px', borderLeft: '4px solid #2acb35', marginTop: '30px' }}>
                  <h3 style={{ color: '#222', fontSize: '22px', margin: '0 0 8px' }}>Schedule Your {service.title} Session</h3>
                  <p style={{ margin: '0 0 20px', color: '#555', fontSize: '14px' }}>
                    Consult directly with Dr. Vijay and our specialized clinical team to experience evidence-based holistic healing.
                  </p>
                  <Link className="thm-btn bgclr-1" to="/appointment">Book Consultation</Link>
                </div>

              </div>
            </div>
            {/* End Content */}

            {/* Start Sidebar (3 cols left) */}
            <ProcedureSidebar />
            {/* End Sidebar */}

          </div>
        </div>
      </section>
      {/* End Single Procedure Area */}
    </MainLayout>
  );
};

export default ServiceDetailPage;
