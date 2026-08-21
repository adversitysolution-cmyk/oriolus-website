import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { testimonialsContent } from '../content/testimonialsContent';

const TestimonialsPage = () => {
  const content = testimonialsContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      <section className="testimonial-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h1>Client Experiences &amp; Stories</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p style={{ maxWidth: '700px', margin: '15px auto 50px', color: '#777' }}>
              {content.header.subtitle}
            </p>
          </div>

          <div className="row">
            {content.testimonials.map(item => (
              <div key={item.id} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <div className="single-testimonial-item text-center" style={{ background: '#fff', padding: '35px 25px', border: '1px solid #eee', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                  <div className="img-holder" style={{ marginBottom: '20px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto' }} />
                  </div>
                  <div className="rating" style={{ color: '#c59d5f', marginBottom: '15px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star" style={{ margin: '0 2px' }}></i>
                    ))}
                  </div>
                  <div className="text-holder">
                    <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#262626' }}>{item.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7', fontSize: '14px' }}>"{item.quote}"</p>
                    <span className="border" style={{ display: 'block', width: '40px', height: '2px', background: '#c59d5f', margin: '20px auto 15px' }}></span>
                    <div className="name">
                      <h4 style={{ fontSize: '16px', color: '#c59d5f', fontWeight: 600 }}>{item.name}</h4>
                    </div>
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

export default TestimonialsPage;
