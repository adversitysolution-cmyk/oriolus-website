import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    image: '/images/testimonial/1.png',
    title: 'Oriolus Scientific is outstanding!',
    quote: 'Great clinical experience and a wonderful transformation for our wellness. Dr. Vijay and the team provided thorough naturopathic care.',
    name: 'Findlay Davis'
  },
  {
    id: 2,
    image: '/images/testimonial/2.png',
    title: 'Always gentle and restorative.',
    quote: 'I was greeted at the clinical reception with warmth and professionalism. The Yoga Therapy and Hydrotherapy protocols brought immediate relief.',
    name: 'Linforde Iris'
  },
  {
    id: 3,
    image: '/images/testimonial/3.png',
    title: 'Serene and transformative campus',
    quote: 'Oriolus Scientific is fantastic. From entering the center, the calming atmosphere and authentic therapies immediately restore peace of mind.',
    name: 'Marsh Harnel'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-area" style={{ backgroundImage: 'url(/images/testimonial/testimonial-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title pull-left">
              <h1>Successful Stories</h1>
              <div className="border">
                <span className="flaticon-shape"></span>    
              </div>
            </div>
            <div className="more-button pull-right">
              <Link to="/testimonials">More Stories</Link>
            </div>
          </div>
        </div>
        <div className="row mar-top">
          {testimonials.map(item => (
            <div key={item.id} className="col-md-4">
              <div className="single-testimonial-item text-center">
                <div className="img-holder">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="text-holder">
                  <h3>{item.title}</h3>
                  <p>{item.quote}</p>
                  <span className="border"></span>
                  <div className="name">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
