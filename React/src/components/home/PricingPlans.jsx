import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const PricingPlans = () => {
  const content = homeContent.pricingPlans;

  return (
    <section id="pricing" className="pricing-plan-area" style={{ backgroundImage: `url(${content.bgImage})` }}>
      <div className="container">
        <div className="sec-title text-center">
          <h1>{content.title}</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          {content.plans.map(plan => (
            <div key={plan.id} className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
              <div className="single-price-box">
                <div className="table-header">
                  <div className="package">
                    <h1>{plan.price}<b>{plan.period}</b></h1>
                  </div>
                </div>
                <div className="price-list">
                  <div className="pack-name">
                    <h3>{plan.name}</h3>
                  </div>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="table-footer">
                  <Link className="thm-btn" to={plan.link}>{plan.btnText || 'ENROLL NOW'}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>    
    </section>
  );
};

export default PricingPlans;
