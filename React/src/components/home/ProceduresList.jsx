import React from 'react';
import { Link } from 'react-router-dom';

const procedures = [
  {
    id: 1,
    title: 'Hot Stone Massage',
    icon: 'flaticon-hands',
    image: '/images/procedures/1.png',
    link: '/massage-therapy',
    desc: 'Facials are the second most popular spa treatment.'
  },
  {
    id: 2,
    title: 'Facial Treatment',
    icon: 'flaticon-medical',
    image: '/images/procedures/2.png',
    link: '/facial-treatments',
    desc: 'Facials are the second most popular spa treatment.'
  },
  {
    id: 3,
    title: 'Pedicure & Menicure',
    icon: 'flaticon-people',
    image: '/images/procedures/3.png',
    link: '/pedicure-menicure',
    desc: 'Facials are the second most popular spa treatment.'
  },
  {
    id: 4,
    title: 'Salt & Oil Bath',
    icon: 'flaticon-relax',
    image: '/images/procedures/4.png',
    link: '/salt-oil-bath',
    desc: 'Facials are the second most popular spa treatment.'
  }
];

const ProceduresList = () => {
  return (
    <section className="procedures-area">
      <div className="arrow">
        <img src="/images/resources/arrow.png" alt="" />
      </div>
      <div className="iconbox-left-top">
        <span className="flaticon-light"></span>    
      </div>
      <div className="iconbox-left-bottom">
        <span className="flaticon-flower"></span>    
      </div>
      <div className="iconbox-right-top">
        <span className="flaticon-nature"></span>    
      </div>
      <div className="iconbox-right-bottom">
        <span className="flaticon-left"></span>    
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h1>Our Procedures</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          {procedures.map(item => (
            <div key={item.id} className="col-md-3 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="img-holder">
                  <img src={item.image} alt={item.title} />
                  <div className="overlay-style-one">
                    <div className="box">
                      <div className="content">
                        <div className="icon-holder">
                          <span className={item.icon}></span>    
                        </div>
                      </div>
                    </div>  
                  </div>    
                </div>
                <div className="text-holder text-center">
                  <div className="show-content">
                    <div className="iocn-holder">
                      <span className={item.icon}></span>      
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="hover-content">
                    <Link to={item.link}><h3>{item.title}</h3></Link>
                    <span className="border"></span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresList;
