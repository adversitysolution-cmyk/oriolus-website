import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const allTestimonials = [
  {
    id: 1,
    image: '/images/testimonial/1.png',
    title: 'Oriolus Scientific is outstanding!',
    quote: 'Great clinical experience and a wonderful transformation for our wellness. Dr. Vijay and the team provided thorough naturopathic care.',
    name: 'Findlay Davis',
    rating: 5
  },
  {
    id: 2,
    image: '/images/testimonial/2.png',
    title: 'Always gentle and renewed.',
    quote: 'I was greeted at the reception desk with a big smile and friendly welcome. First impressions are important! The botanical therapies took years off my fatigue.',
    name: 'Linforde Iris',
    rating: 5
  },
  {
    id: 3,
    image: '/images/testimonial/3.png',
    title: 'Comfortable and immaculate',
    quote: 'Oriolus Scientific is fantastic. From entering the center, the calming atmosphere and authentic therapies immediately restore peace of mind.',
    name: 'Marsh Harnel',
    rating: 5
  },
  {
    id: 4,
    image: '/images/testimonial/1.png',
    title: 'The Best Therapeutic Massage Ever',
    quote: 'The clinical hydrotherapy and mud treatment completely unlocked my chronic back stiffness. The medical team has remarkable technique.',
    name: 'Sophia Bennett',
    rating: 5
  },
  {
    id: 5,
    image: '/images/testimonial/2.png',
    title: 'Restorative Wellness Perfection',
    quote: 'We booked the residential wellness retreat for our family. The team was punctual, exceptionally professional, and made us feel renewed!',
    name: 'Chloe Lancaster',
    rating: 5
  },
  {
    id: 6,
    image: '/images/testimonial/3.png',
    title: 'Pure Serenity and Peace',
    quote: 'The hydrotherapy salt soak was the most relaxing 60 minutes of my month. Highly recommend Oriolus Scientific to anyone needing genuine stress relief.',
    name: 'Marcus Vance',
    rating: 5
  }
];

const TestimonialsPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Testimonials" activeTitle="Testimonials" />

      <section className="testimonial-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h1>Client Experiences &amp; Stories</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p style={{ maxWidth: '700px', margin: '15px auto 50px', color: '#777' }}>
              Read genuine reviews from guests who have experienced our bespoke spa treatments, therapeutic massages, and aesthetic transformations.
            </p>
          </div>

          <div className="row">
            {allTestimonials.map(item => (
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
