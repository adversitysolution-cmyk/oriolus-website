import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeArea = () => {
  return (
    <section className="welcome-area">
      <div className="container">
        <div className="sec-title">
          <h1>Welcome to Oriolus Scientific</h1>
          <div className="border">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="text-holder">
              <h4>Oriolus Scientific is a premier Yoga &amp; Naturopathy Research Center. A division of Funicle Health Care and Wellness Pvt. Ltd., dedicated to personalized, drugless clinical healing.</h4>
              <div className="inner-content">
                {/* Start single item */}
                <div className="single-item">
                  <h3>Our Mission</h3>
                  <p>To provide scientifically validated, drugless, holistic healthcare that addresses root causes and restores natural physiological balance.</p>
                </div>
                {/* End single item */}
                {/* Start single item */}
                <div className="single-item border">
                  <h3>Our Vision</h3>
                  <p>To be globally recognized as a center of clinical excellence in Yoga, Naturopathy, Ayurveda, and Acupuncture research.</p>
                </div>
                {/* End single item */}
              </div>
              <div className="bottom">
                <div className="read-more-button">
                  <Link className="thm-btn bgclr-1" to="/about">Read More</Link>
                </div>
                <div className="title">
                  <h2>Need advice? <span>+91 98450 12345</span></h2>
                </div>
              </div>
            </div>   
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="img-holder">
              <img src="/images/resources/welcome.jpg" alt="Welcome to Oriolus Scientific" />    
            </div>   
          </div>     
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
