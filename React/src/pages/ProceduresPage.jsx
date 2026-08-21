import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';

const allProcedures = [
  {
    id: 1,
    title: 'Hot Stone Massage',
    icon: 'flaticon-hands',
    image: '/images/procedures/1.png',
    link: '/massage-therapy',
    desc: 'Thermal basalt stones combined with therapeutic essential oils relieve muscle tension.'
  },
  {
    id: 2,
    title: 'Facial Treatment',
    icon: 'flaticon-medical',
    image: '/images/procedures/2.png',
    link: '/facial-treatments',
    desc: 'Deep cleansing and herbal hydration revitalizing tired skin and enhancing natural glow.'
  },
  {
    id: 3,
    title: 'Pedicure & Menicure',
    icon: 'flaticon-people',
    image: '/images/procedures/3.png',
    link: '/pedicure-menicure',
    desc: 'Complete nail shaping, cuticle therapy, softening scrubs, and premium polish.'
  },
  {
    id: 4,
    title: 'Salt & Oil Bath',
    icon: 'flaticon-relax',
    image: '/images/procedures/4.png',
    link: '/salt-oil-bath',
    desc: 'Mineral dead sea salt hydrotherapy soak with lavender and eucalyptus aromatics.'
  },
  {
    id: 5,
    title: 'Perfect Makeup',
    icon: 'flaticon-flower',
    image: '/images/procedures/5.png',
    link: '/perfect-makeup',
    desc: 'Expert bridal, gala, and evening cosmetic styling tailored to your skin tone.'
  },
  {
    id: 6,
    title: 'Hair Treatments',
    icon: 'flaticon-hairdresser',
    image: '/images/procedures/6.png',
    link: '/hair-treatments',
    desc: 'Keratin smoothing, deep botanical scalp therapy, and personalized organic styling.'
  }
];

const ProceduresPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Procedures" activeTitle="Procedures" />
      
      <section id="procedures-page-area" className="procedures-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="inner-content">
                <div className="row">
                  {allProcedures.map(item => (
                    <div key={item.id} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
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
            </div>

            <ProcedureSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProceduresPage;
