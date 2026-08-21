import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    image: '/images/testimonial/1.png',
    title: 'Daily Spanz is outstanding!',
    quote: 'Great experience and a wonderful addition to our vacation. I get massages on a regular basis & it was my husbands first.',
    name: 'Findlay Davis'
  },
  {
    id: 2,
    image: '/images/testimonial/2.png',
    title: 'Always a gentle and renewed.',
    quote: 'I was greeted at the reception desk with a big smile and friendly welcome. First impressions are important! Well done!',
    name: 'Linforde Iris'
  },
  {
    id: 3,
    image: '/images/testimonial/3.png',
    title: 'Comfortable and clean',
    quote: 'Daily Spanz is fantastic. From entering into the Spa, the low lighting, the welcoming aroma, you already feel relaxed.',
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
