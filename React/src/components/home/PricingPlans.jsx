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
              <div className="single-price-box" style={{ overflow: 'visible', position: 'relative' }}>
                <div className="table-header" style={{ position: 'relative', overflow: 'visible', paddingBottom: '20px' }}>
                  <div className="package">
                    <h1>{plan.price}<b>{plan.period}</b></h1>
                  </div>
                  <div className="pack-name" style={{ position: 'absolute', bottom: '-26px', left: '50%', transform: 'translateX(-50%)', width: '85%', maxWidth: '260px', minHeight: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, lineHeight: '1.3' }}>{plan.name}</h3>
                  </div>
                </div>
                <div className="price-list">
                  <ul style={{ paddingTop: '48px' }}>
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
