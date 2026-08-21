import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const GallerySinglePage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Gallery Single" parent="Gallery" parentLink="/gallery-grid" activeTitle="Project Details" />

      <section className="single-project-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="single-project-content">
                <div className="img-holder" style={{ marginBottom: '30px' }}>
                  <img src="/images/projects/1.jpg" alt="Gallery Single" style={{ width: '100%', borderRadius: '4px' }} />
                </div>
                <div className="title" style={{ marginBottom: '20px' }}>
                  <h2>Luxury Bridal Spa Retreat &amp; Makeover Project</h2>
                  <span className="border" style={{ display: 'block', width: '50px', height: '2px', background: '#c59d5f', margin: '15px 0' }}></span>
                </div>
                <div className="text" style={{ color: '#666', lineHeight: '1.8' }}>
                  <p>This customized comprehensive bridal spa package was designed for a wedding party of eight. The treatment program began with full-body exfoliating salt scrubs and hydrotherapy essential oil soaks, followed by customized botanical glow facials and hot stone massages.</p>
                  <p>Our aesthetic team finished with HD photographic airbrush makeup styling and long-lasting gel manicures tailored to match the bridal party’s evening gowns.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="project-info-box" style={{ background: '#f9f8f6', padding: '30px', border: '1px solid #eee', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px' }}>Project Information</h3>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', color: '#555' }}>
                  <li><strong>Client:</strong> Victoria &amp; Alexander</li>
                  <li><strong>Category:</strong> Bridal &amp; Spa Retreat</li>
                  <li><strong>Date:</strong> August 14, 2026</li>
                  <li><strong>Specialists:</strong> Elena Gilbert, Freya Mikaelson</li>
                  <li><strong>Duration:</strong> 2-Day Package</li>
                </ul>
                <div style={{ marginTop: '25px' }}>
                  <Link className="thm-btn bgclr-1" to="/appointment" style={{ display: 'block', textAlign: 'center' }}>
                    Book Similar Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GallerySinglePage;
