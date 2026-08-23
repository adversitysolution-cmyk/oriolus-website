import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { faqContent } from '../content/faqContent';

const FaqPage = () => {
  const content = faqContent;
  const [activeTab, setActiveTab] = useState(content.categories[0]?.id || 'about-oriolus');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const currentFaqs = content.faqData[activeTab] || [];

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      {/* Start Faq Content Area */}
      <section className="faq-content-area pd-top100 pd-bottom65">
        <div className="container">
          <div className="row">
            
            {/* Start Tab Navigation Menu */}
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <ul className="tab-menu nav nav-tabs clearfix">
                {content.categories.map(cat => (
                  <li key={cat.id} className={activeTab === cat.id ? 'active' : ''}>
                    <a
                      href={`#${cat.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(cat.id);
                        setOpenAccordion(0);
                      }}
                    >
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Tab Navigation Menu */}

            {/* Start Accordion Content */}
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="accordion-box">
                {currentFaqs.map((faq, index) => {
                  const isOpen = openAccordion === index;
                  return (
                    <div key={index} className="accordion">
                      <div 
                        className={`accord-btn ${isOpen ? 'active' : ''}`}
                        onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                      >
                        <h4>{faq.q}</h4>
                      </div>
                      <div className={`accord-content ${isOpen ? 'collapsed' : ''}`}>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* End Accordion Content */}

          </div>
        </div>
      </section>
      {/* End Faq Content Area */}

      {/* Start Faq Question Form Area */}
      <section className="faq-question-form-area">
        <div className="container">
          <div className="sec-title text-center">
            <h1>Have a Question? Ask Us</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="question-form">
                {formSubmitted ? (
                  <div className="alert alert-success text-center">
                    <h4>Thank You!</h4>
                    <p>Your question has been received. Our clinical wellness team will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="name" placeholder="Your Name *" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" placeholder="Your Email *" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea name="message" placeholder="Your Question or Concern *" required></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <button className="thm-btn bgclr-1" type="submit">Submit Question</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Question Form Area */}
    </MainLayout>
  );
};

export default FaqPage;
