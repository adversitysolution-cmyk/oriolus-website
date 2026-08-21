import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeArea = () => {
  return (
    <section className="welcome-area">
      <div className="container">
        <div className="sec-title">
          <h1>Welcome to Daily Spanz</h1>
          <div className="border">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="text-holder">
              <h4>Daily Spanz is an Elegant, good looking beauty spa website. With the help of shortcodes you can create a website.</h4>
              <div className="inner-content">
                {/* Start single item */}
                <div className="single-item">
                  <h3>Our Mission</h3>
                  <p>Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give.</p>
                </div>
                {/* End single item */}
                {/* Start single item */}
                <div className="single-item border">
                  <h3>Our Vision</h3>
                  <p>Pleasure work praising pain ut was born and will give you can complete design account sed the system.</p>
                </div>
                {/* End single item */}
              </div>
              <div className="bottom">
                <div className="read-more-button">
                  <Link className="thm-btn bgclr-1" to="/about">Read More</Link>
                </div>
                <div className="title">
                  <h2>Need advice? <span>+321 456 7890</span></h2>
                </div>
              </div>
            </div>   
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="img-holder">
              <img src="/images/resources/welcome.jpg" alt="Welcome to Daily Spanz" />    
            </div>   
          </div>     
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
