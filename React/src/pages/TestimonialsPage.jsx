import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { testimonialsContent } from '../content/testimonialsContent';

const TestimonialsPage = () => {
  const content = testimonialsContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      {/* Start Testimonials Page Area */}
      <section className="testimonial-page pd-bottom80">
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <h1>Client Experiences &amp; Stories</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p>{content.header.subtitle}</p>
          </div>

          <div className="row">
            {content.testimonials.map(item => (
              <div key={item.id} className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-testimonial-item text-center">
                  <div className="img-holder" style={{ position: 'relative', zIndex: 2, marginBottom: '-40px' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        margin: '0 auto', 
                        border: '4px solid #fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                      }} 
                    />
                  </div>
                  <div className="text-holder" style={{ borderRadius: '4px' }}>
                    <div className="rating" style={{ color: '#2acb35', marginBottom: '12px' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fa fa-star" style={{ margin: '0 2px' }}></i>
                      ))}
                    </div>
                    <h3 style={{ fontSize: '17px', margin: '0 0 10px', color: '#222' }}>{item.title}</h3>
                    <p style={{ fontStyle: 'italic', color: '#666', lineHeight: '1.7', fontSize: '13.5px' }}>
                      "{item.quote}"
                    </p>
                    <span className="border" style={{ display: 'block', width: '35px', height: '1.5px', background: '#2acb35', margin: '15px auto 10px' }}></span>
                    <h4 style={{ color: '#222', fontSize: '15px', fontWeight: 600, margin: '5px 0 0' }}>{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Testimonials Page Area */}
    </MainLayout>
  );
};

export default TestimonialsPage;
