import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { therapistsContent } from '../content/therapistsContent';

const TherapistsPage = () => {
  const content = therapistsContent;

  const getTeamIcon = (role) => {
    if (role.toLowerCase().includes('yoga')) return 'flaticon-lotus-flower';
    if (role.toLowerCase().includes('massage')) return 'flaticon-stones-and-leaf-massage-spa-symbol';
    if (role.toLowerCase().includes('naturopathy')) return 'flaticon-flower';
    if (role.toLowerCase().includes('ayurveda')) return 'flaticon-herbal-spa-treatment-leaves';
    if (role.toLowerCase().includes('acupuncture')) return 'flaticon-spa-essential-oils-and-candle-for-aromatherapy';
    return 'flaticon-lotus-flower';
  };

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      {/* Start Experts Area */}
      <section className="experts-area pd-top100 pd-bottom60">
        <div className="container">
          <div className="sec-title text-center">
            <h1>Meet Our Therapists</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p>{content.header.subtitle}</p>
          </div>

          <div className="row">
            {content.faculty.map(t => (
              <div key={t.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="single-team-member">
                  <div className="inner-content">
                    <div className="img-holder">
                      <img src={t.image} alt={t.name} />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <ul>
                              <li>
                                <a href="#fb" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                                  <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#tw" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                                  <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#in" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>  
                    </div>
                    <div className="icon-holder">
                      <div className="inner">
                        <span className={getTeamIcon(t.role)}></span>    
                      </div>    
                    </div>
                  </div>
                  <div className="text-holder text-center">
                    <h3>{t.name}</h3>
                    <h4>{t.role}</h4>
                    <span className="border"></span>
                    <p>
                      <span className="flaticon-technology"></span> +91 98450 12345
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Experts Area */}
    </MainLayout>
  );
};

export default TherapistsPage;
