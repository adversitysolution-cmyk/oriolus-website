import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const SloganBanner = () => {
  const content = homeContent.sloganBanner;

  return (
    <section className="slogan-area" style={{ backgroundImage: `url(${content.bgImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content text-center">
              <h1>{content.title}</h1>
              <p>{content.line1}</p>
              <p>{content.line2}</p>
              <Link className="thm-btn bgclr-1" to={content.btnLink}>{content.btnText}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganBanner;
