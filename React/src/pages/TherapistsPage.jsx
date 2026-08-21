import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { therapistsContent } from '../content/therapistsContent';

const TherapistsPage = () => {
  const content = therapistsContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      <section className="therapists-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h1>Meet Our Master Specialists</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p style={{ maxWidth: '700px', margin: '15px auto 50px', color: '#777' }}>
              {content.header.subtitle}
            </p>
          </div>

          <div className="row">
            {content.faculty.map(t => (
              <div key={t.id} className="col-md-3 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <div className="single-team-member text-center" style={{ background: '#fff', border: '1px solid #eee', paddingBottom: '25px', transition: 'all 0.3s' }}>
                  <div className="img-holder" style={{ overflow: 'hidden', marginBottom: '20px' }}>
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="text-holder" style={{ padding: '0 15px' }}>
                    <h3 style={{ fontSize: '18px', margin: '0 0 5px', color: '#262626' }}>{t.name}</h3>
                    <span style={{ color: '#c59d5f', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>{t.role}</span>
                    <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.6', marginBottom: '15px' }}>{t.bio}</p>
                    <ul className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: 0, listStyle: 'none' }}>
                      <li><a href="#fb" onClick={(e) => e.preventDefault()} style={{ color: '#777' }} aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#tw" onClick={(e) => e.preventDefault()} style={{ color: '#777' }} aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#in" onClick={(e) => e.preventDefault()} style={{ color: '#777' }} aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TherapistsPage;
