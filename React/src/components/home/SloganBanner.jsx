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
              <p>Daily Spanz is an Elegant, good looking Beauty Spa Website. With the help of shortcodes you can create a</p>
              <p>website with Feature rich presentation.</p>
              <Link className="thm-btn bgclr-1" to="/appointment">Make an Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganBanner;
