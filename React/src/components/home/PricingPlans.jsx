import React from 'react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    id: 1,
    name: 'Family Pack',
    price: '$49',
    period: '/Mo',
    features: [
      'Nail Cutting and styling',
      'Spa Therapy with manicure',
      'Foot massage',
      'Hair Coloring & Styling'
    ]
  },
  {
    id: 2,
    name: 'Premium Pack',
    price: '$79',
    period: '/Mo',
    features: [
      'Spa Therapy with manicure',
      'Foot massage',
      'Hair Coloring & Styling',
      'Body Hand and Foot massage'
    ]
  },
  {
    id: 3,
    name: 'Ultimate Pack',
    price: '$99',
    period: '/Mo',
    features: [
      'Nail Cutting and styling',
      'Spa Therapy with manicure',
      'Foot massage',
      'Hair Coloring & Styling'
    ]
  }
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="pricing-plan-area" style={{ backgroundImage: 'url(/images/resources/pricing-bg.jpg)' }}>
      <div className="container">
        <div className="sec-title text-center">
          <h1>Our Pricing Plan</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          {pricingPlans.map(plan => (
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
                  <Link className="thm-btn" to="/shop">BUY NOW</Link>
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
