import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const Testimonials = () => {
  const content = homeContent.testimonials;

  return (
    <section className="testimonial-area" style={{ backgroundImage: `url(${content.bgImage})` }}>
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
          {content.items.map(item => (
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
