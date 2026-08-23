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

      {/* Start Procedures Area */}
      <section className="procedures-area pd-top100 pd-bottom100">
        <div className="container">
          <div className="row">

            {/* Start Procedures Grid (9 cols right) */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <div className="row">
                {content.items.map(item => (
                  <div key={item.id} className="col-md-6 col-sm-6 col-xs-12">
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
                          <Link to={item.link}>
                            <h3>{item.title}</h3>
                          </Link>
                          <span className="border"></span>
                          <p>{item.shortDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Procedures Grid */}

            {/* Start Sidebar (3 cols left) */}
            <ProcedureSidebar />
            {/* End Sidebar */}

          </div>
        </div>
      </section>
      {/* End Procedures Area */}
    </MainLayout>
  );
};

export default ProceduresPage;
