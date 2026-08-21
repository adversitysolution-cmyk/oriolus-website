import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import { contactContent } from '../content/contactContent';

const ContactPage = () => {
  const content = contactContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <MainLayout>
      <Breadcrumb title={content.header.title} activeTitle={content.header.activeTitle} />

      {/* Start contact form area */}
      <section className="contact-form-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title">
            <h1>{content.leadMessage.title}</h1>
            <div className="border">
              <span className="flaticon-shape"></span>    
            </div>
            <p>{content.leadMessage.desc}</p>  
          </div>

          <div className="row">
            {/* Quick Contact Card */}
            <div className="col-lg-4 col-md-5">
              <div className="quick-contact" style={{ background: '#f9f8f6', padding: '35px', border: '1px solid #eee', marginBottom: '30px' }}>
                <div className="title">
                  <h2>{content.quickContact.title}</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-location"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Address:</span> {content.quickContact.address}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-technology"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Phone:</span> {content.quickContact.phone}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-note"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Email:</span> {content.quickContact.email}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-clock"></span>
                    </div>
                    <div className="text-holder">
                      <h5>
                        {content.quickContact.workingHours.map((wh, idx) => (
                          <span key={idx} style={{ display: 'block' }}>{wh.day}: {wh.hours}</span>
                        ))}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 col-md-7">
              <div className="contact-form" style={{ background: '#fff', padding: '35px', border: '1px solid #eee' }}>
                {submitted ? (
                  <div style={{ background: '#131d33', padding: '40px 20px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
                    <i className="fa fa-check-circle" style={{ fontSize: '48px', color: '#c59d5f', marginBottom: '15px' }}></i>
                    <h3 style={{ color: '#c59d5f', marginBottom: '10px' }}>Message Sent Successfully!</h3>
                    <p style={{ color: '#ccc', margin: 0 }}>Thank you for reaching out to Oriolus Scientific. Our medical team will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="default-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-box" style={{ marginBottom: '20px' }}>
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name *" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', outline: 'none' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-box" style={{ marginBottom: '20px' }}>
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', outline: 'none' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-box" style={{ marginBottom: '20px' }}>
                          <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone Number" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', outline: 'none' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-box" style={{ marginBottom: '20px' }}>
                          <input 
                            type="text" 
                            name="subject" 
                            placeholder="Subject / Consultation Topic" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', outline: 'none' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box" style={{ marginBottom: '25px' }}>
                          <textarea 
                            name="message" 
                            placeholder="Write your health inquiry, condition history, or message here.. *" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows="5"
                            required 
                            style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', outline: 'none', resize: 'vertical' }}
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          className="thm-btn bgclr-1" 
                          disabled={loading}
                          style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                        >
                          {loading ? 'Sending Message...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End contact form area */}

      {/* Start Google Map Area */}
      <section className="home-google-map" style={{ width: '100%', height: '400px' }}>
        <iframe 
          title={content.map.title}
          src={content.map.embedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* End Google Map Area */}
    </MainLayout>
  );
};

export default ContactPage;
