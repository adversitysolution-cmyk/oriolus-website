import React from 'react';
import { homeContent } from '../../content/homeContent';

const WhyChooseUs = () => {
  const content = homeContent.whyChooseUs;
  const topRow = content.items.slice(0, 3);
  const bottomRow = content.items.slice(3, 6);

  return (
    <div className="choosing-area">
      <div className="container">
        <div className="sec-title text-center">
          <h1>{content.title}</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              {topRow.map(item => (
                <li key={item.id} className="single-item bdr-btm">
                  <div className="iocn-holder">
                    <div className="inner-border">
                      <span className={item.icon}></span>
                    </div>    
                  </div>
                  <div className="text-holder">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>    
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {bottomRow.map(item => (
                <li key={item.id} className="single-item">
                  <div className="iocn-holder">
                    <div className="inner-border">
                      <span className={item.icon}></span>
                    </div>    
                  </div>
                  <div className="text-holder">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default WhyChooseUs;
