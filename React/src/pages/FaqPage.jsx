import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { faqContent } from '../content/faqContent';

const FaqPage = () => {
  const content = faqContent;
  const [activeTab, setActiveTab] = useState(content.categories[0]?.id || 'about-oriolus');
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentFaqs = content.faqData[activeTab] || [];

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      <section className="faq-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h1>Answers to Common Inquiries</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p style={{ maxWidth: '700px', margin: '15px auto 50px', color: '#777' }}>
              {content.header.subtitle}
            </p>
          </div>

          <div className="row">
            {/* Start tab navigation */}
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="faq-sidebar" style={{ background: '#f9f8f6', padding: '30px 20px', border: '1px solid #eee', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px', color: '#262626', fontWeight: 600, paddingBottom: '10px', borderBottom: '2px solid #c59d5f' }}>
                  Topics &amp; Questions
                </h3>
                <ul className="faq-tabs" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {content.categories.map(cat => (
                    <li key={cat.id} style={{ marginBottom: '8px' }}>
                      <button
                        onClick={() => {
                          setActiveTab(cat.id);
                          setOpenAccordion(0);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px 16px',
                          border: 'none',
                          borderRadius: '4px',
                          background: activeTab === cat.id ? '#131d33' : '#fff',
                          color: activeTab === cat.id ? '#c59d5f' : '#555',
                          fontWeight: activeTab === cat.id ? 600 : 400,
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 0.3s',
                          boxShadow: activeTab === cat.id ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
                        }}
                      >
                        <span>{cat.title}</span>
                        <i className={`fa fa-chevron-right`} style={{ fontSize: '12px', opacity: activeTab === cat.id ? 1 : 0.4 }}></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End tab navigation */}

            {/* Start accordion content */}
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="tab-content">
                <div className="accordion-box">
                  {currentFaqs.map((faq, index) => {
                    const isOpen = openAccordion === index;
                    return (
                      <div key={index} className="accordion accordion-block" style={{ marginBottom: '15px', border: '1px solid #eee' }}>
                        <div 
                          className={`accord-btn ${isOpen ? 'active' : ''}`}
                          onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                          style={{
                            padding: '18px 25px',
                            background: isOpen ? '#131d33' : '#fff',
                            color: isOpen ? '#c59d5f' : '#262626',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s'
                          }}
                        >
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: isOpen ? '#c59d5f' : '#262626' }}>
                            {faq.q}
                          </h4>
                          <i className={`fa ${isOpen ? 'fa-minus' : 'fa-plus'}`} style={{ color: isOpen ? '#c59d5f' : '#999' }}></i>
                        </div>
                        {isOpen && (
                          <div className="accord-content" style={{ padding: '20px 25px', background: '#fafafa', borderTop: '1px solid #eee' }}>
                            <p style={{ margin: 0, color: '#666', lineHeight: '1.8' }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* End accordion content */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FaqPage;
