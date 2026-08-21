import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ProcedureSidebar from '../components/procedures/ProcedureSidebar';
import { proceduresContent } from '../content/proceduresContent';

const ProceduresPage = () => {
  const content = proceduresContent;

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      <section className="procedures-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {/* Procedures Grid (8 cols) */}
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="row">
                {content.items.map(item => (
                  <div key={item.id} className="col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                    <div className="single-item" style={{ background: '#fff', border: '1px solid #eee', overflow: 'hidden' }}>
                      <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
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
                      <div className="text-holder text-center" style={{ padding: '25px 20px' }}>
                        <div className="show-content">
                          <div className="iocn-holder" style={{ marginBottom: '10px' }}>
                            <span className={item.icon} style={{ fontSize: '36px', color: '#c59d5f' }}></span>      
                          </div>
                          <h3 style={{ fontSize: '18px', margin: '0 0 10px', color: '#262626' }}>{item.title}</h3>
                        </div>
                        <div className="hover-content">
                          <Link to={item.link}>
                            <h3 style={{ fontSize: '18px', margin: '0 0 10px', color: '#262626' }}>{item.title}</h3>
                          </Link>
                          <span className="border" style={{ display: 'block', width: '30px', height: '2px', background: '#c59d5f', margin: '0 auto 12px' }}></span>
                          <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.6', marginBottom: '15px' }}>{item.shortDesc}</p>
                          <Link to={item.link} className="thm-btn bgclr-1" style={{ padding: '8px 20px', fontSize: '12px' }}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <ProcedureSidebar currentPath="/procedures" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProceduresPage;
