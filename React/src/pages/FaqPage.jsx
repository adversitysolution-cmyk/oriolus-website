import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const faqCategories = [
  { id: 'about-spanz', title: 'About Daily Spanz' },
  { id: 'massage-therapy', title: 'Body Massage Therapy' },
  { id: 'polish-skin', title: 'Polish Your Skin' },
  { id: 'manicure', title: 'Manicure / Pedicure' },
  { id: 'spa-pricing', title: 'Spa Pricing Plan' }
];

const faqData = {
  'about-spanz': [
    {
      q: 'When should I make my spa reservations?',
      a: 'We recommend scheduling your appointment at least 1 to 2 weeks in advance to ensure your preferred time slot and therapist, especially for weekend visits and group packages.'
    },
    {
      q: 'What if I have physical ailments, disabilities, or allergies?',
      a: 'Please notify our coordinator during booking and alert your therapist before treatment. We tailor oils, pressures, and positioning to ensure complete safety and comfort.'
    },
    {
      q: 'Can I choose to have a male or female therapist?',
      a: 'Yes, absolutely. You can specify your preference when booking online or over the phone, and we will accommodate your request based on therapist availability.'
    },
    {
      q: 'What is the spa arrival and etiquette protocol?',
      a: 'We recommend arriving 15 minutes prior to your scheduled session to change into robes, enjoy herbal tea, and complete your wellness consultation form.'
    }
  ],
  'massage-therapy': [
    {
      q: 'What should I wear during my massage session?',
      a: 'You may undress to your comfort level. You will be fully draped with clean sheets, and only the specific area being massaged will be uncovered at any time.'
    },
    {
      q: 'How do I know which massage therapy is right for me?',
      a: 'If you want pure relaxation, we recommend Swedish or Aromatherapy. If you suffer from chronic tension or athletic stiffness, Deep Tissue or Hot Stone is optimal.'
    },
    {
      q: 'Can I request more or less pressure during treatment?',
      a: 'Yes, open communication is encouraged. Please let your therapist know at any point if you would like the pressure increased or softened.'
    }
  ],
  'polish-skin': [
    {
      q: 'How often should I receive a facial treatment?',
      a: 'For optimal skin health and cellular renewal, a professional facial every 3 to 4 weeks is recommended to align with your skin’s natural regenerative cycle.'
    },
    {
      q: 'Are the skincare products organic and chemical-free?',
      a: 'Yes, we use certified organic botanical extracts, cold-pressed oils, and paraben-free formulations that are safe for sensitive and allergy-prone skin.'
    }
  ],
  'manicure': [
    {
      q: 'How long does a gel manicure typically last?',
      a: 'Our high-performance gel manicures typically remain chip-free and ultra-shiny for 2 to 3 weeks under normal everyday activities.'
    },
    {
      q: 'How do you sterilize your manicure and pedicure tools?',
      a: 'We use medical-grade autoclaves and hospital disinfectant solutions for all stainless steel instruments. All buffers and files are single-use or sanitized.'
    }
  ],
  'spa-pricing': [
    {
      q: 'Do you offer discounted packages or monthly memberships?',
      a: 'Yes, our Family ($49/mo), Premium ($79/mo), and Ultimate ($99/mo) packages offer substantial savings, complimentary add-ons, and priority bookings.'
    },
    {
      q: 'Can I purchase digital or physical gift cards?',
      a: 'Yes! Gift certificates are available for specific treatments or custom monetary values and can be ordered online or purchased at our reception desk.'
    }
  ]
};

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState('about-spanz');
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentFaqs = faqData[activeTab] || [];

  return (
    <MainLayout>
      <Breadcrumb title="FAQ’s" activeTitle="FAQ’s" />

      <section className="faq-content-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {/* Start tab sidebar */}
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <ul className="nav nav-tabs tab-menu" style={{ border: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {faqCategories.map(cat => (
                  <li key={cat.id} className={activeTab === cat.id ? 'active' : ''} style={{ margin: 0 }}>
                    <a 
                      href={`#${cat.id}`} 
                      onClick={(e) => { e.preventDefault(); setActiveTab(cat.id); setOpenAccordion(0); }}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        background: activeTab === cat.id ? '#c59d5f' : '#f4f4f4',
                        color: activeTab === cat.id ? '#fff' : '#333',
                        fontWeight: 600,
                        borderRadius: '0',
                        border: 'none',
                        transition: 'all 0.3s'
                      }}
                    >
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End tab sidebar */}

            {/* Start accordion content */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
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
