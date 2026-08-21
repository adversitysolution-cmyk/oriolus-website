import React from 'react';
import { Link } from 'react-router-dom';

const SloganBanner = () => {
  return (
    <section className="slogan-area" style={{ backgroundImage: 'url(/images/resources/slogan-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content text-center">
              <h1>Treat Yourself for Rejuvenating Your Body &amp; Soul</h1>
              <p>Oriolus Scientific brings together classical natural medicine and modern clinical excellence for lifelong wellness.</p>
              <p>Where Ancient Science Meets Modern Medical Wellness.</p>
              <Link className="thm-btn bgclr-1" to="/appointment">Make an Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganBanner;
