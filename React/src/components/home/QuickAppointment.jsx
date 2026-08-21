import React, { useState } from 'react';
import { homeContent } from '../../content/homeContent';
import { siteContent } from '../../content/siteContent';

const QuickAppointment = () => {
  const content = homeContent.quickAppointment;
  const contact = siteContent.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: content.serviceOptions[0] || 'Select Clinical Discipline',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: content.serviceOptions[0] || 'Select Clinical Discipline', message: '' });
    }, 4000);
  };

  return (
    <section className="appointment-area">
      <div className="icon-holder leap">
        <img src="/images/icon/appointment-bg.png" alt="Icon" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h1>{content.title}</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="appointment-box">
              <div className="experince text-center">
                <h3><span>{content.experienceBadge.sinceText}</span> {content.experienceBadge.subText}</h3>
                <div className="inner-content">
                  <span className="flaticon-laurel"></span>
                  <h1>{content.experienceBadge.years}</h1>
                  <h3>{content.experienceBadge.yearsLabel}</h3>
                </div>
                <p>{content.experienceBadge.description}</p>    
              </div> 
              <div className="form">
                {submitted ? (
                  <div style={{ background: '#131d33', padding: '30px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
                    <h3 style={{ color: '#c59d5f', marginBottom: '10px' }}>Appointment Request Received!</h3>
                    <p>Thank you, {formData.name}. Our OPD wellness coordinator will contact you shortly at {formData.email}.</p>
                  </div>
                ) : (
                  <form id="appointment-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-box">
                          <input 
                            type="text" 
                            name="form_name" 
                            placeholder="Your Name *" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-box">
                          <input 
                            type="email" 
                            name="form_email" 
                            placeholder="Your Email *" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box">
                          <select 
                            className="selectmenu" 
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', color: '#777', marginBottom: '20px', borderRadius: '0' }}
                          >
                            {content.serviceOptions.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box">
                          <textarea 
                            name="form_message" 
                            placeholder="Your Health Goals / Symptoms.."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bgclr-1" type="submit">Submit Request</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>   
          </div>
          
          <div className="col-md-3">
            <div className="quick-contact">
              <div className="title">
                <h2>Contact Details</h2>
              </div>
              <ul className="contact-info">
                <li>
                  <div className="icon-holder">
                    <span className="flaticon-location"></span>
                  </div>
                  <div className="text-holder">
                    <h5><span>Address:</span> {contact.address}</h5>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <span className="flaticon-technology"></span>
                  </div>
                  <div className="text-holder">
                    <h5><span>Phone:</span> {contact.phonePrimary}</h5>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <span className="flaticon-note"></span>
                  </div>
                  <div className="text-holder">
                    <h5><span>Email:</span> {contact.emailPrimary}</h5>
                  </div>
                </li>
                <li>
                  <div className="icon-holder">
                    <span className="flaticon-clock"></span>
                  </div>
                  <div className="text-holder">
                    <h5><span>Hours:</span> {contact.workingHours.weekdays}</h5>
                  </div>
                </li>
              </ul>
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAppointment;
