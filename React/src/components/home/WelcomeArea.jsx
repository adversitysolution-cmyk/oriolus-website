import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const WelcomeArea = () => {
  const content = homeContent.welcomeArea;

  return (
    <section className="welcome-area">
      <div className="container">
        <div className="sec-title">
          <h1>{content.title}</h1>
          <div className="border">
            <span className="flaticon-shape"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="text-holder">
              <h4>{content.leadText}</h4>
              <div className="inner-content">
                {/* Start single item */}
                <div className="single-item">
                  <h3>{content.mission.title}</h3>
                  <p>{content.mission.desc}</p>
                </div>
                {/* End single item */}
                {/* Start single item */}
                <div className="single-item border">
                  <h3>{content.vision.title}</h3>
                  <p>{content.vision.desc}</p>
                </div>
                {/* End single item */}
              </div>
              <div className="bottom">
                <div className="read-more-button">
                  <Link className="thm-btn bgclr-1" to={content.cta.btnLink}>
                    {content.cta.btnText}
                  </Link>
                </div>
                <div className="title">
                  <h2>{content.cta.adviceLabel} <span>{content.cta.advicePhone}</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="img-holder" style={{ marginTop: '19px' }}>
              <img src={content.image} alt={content.imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
