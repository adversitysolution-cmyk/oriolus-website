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
    }, 800);
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

      {/* Start Contact Form Area */}
      <section className="contact-form-area pd-top100 pd-bottom100">
        <div className="contact-form-img">
          <img src="/images/resources/contact-form-img.jpg" alt="Contact Us" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="container">
          <div className="sec-title">
            <h1>{content.leadMessage.title}</h1>
            <div className="border">
              <span className="flaticon-shape"></span>    
            </div>
            <p>{content.leadMessage.desc}</p>  
          </div>

          <div className="row">
            
            {/* Quick Contact Box */}
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="quick-contact">
                <div className="title">
                  <h2>{content.quickContact.title}</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-location"></span>
                    </div>
                    <div className="text-holder">
                      <h5>{content.quickContact.addressLabel}:</h5>
                      <p>{content.quickContact.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-technology"></span>
                    </div>
                    <div className="text-holder">
                      <h5>{content.quickContact.phoneLabel}:</h5>
                      <p>{content.quickContact.phone}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-note"></span>
                    </div>
                    <div className="text-holder">
                      <h5>{content.quickContact.emailLabel}:</h5>
                      <p>{content.quickContact.email}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-clock"></span>
                    </div>
                    <div className="text-holder">
                      <h5>{content.quickContact.hoursLabel}:</h5>
                      <p>{content.quickContact.hoursWeekdays}</p>
                      <p><span className="closes">{content.quickContact.hoursSunday}</span></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Box */}
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="contact-form">
                {submitted ? (
                  <div className="alert alert-success text-center" style={{ padding: '40px 20px', background: '#f2fff3', border: '1px solid #00B5A6' }}>
                    <span className="flaticon-shape" style={{ fontSize: '40px', color: '#00B5A6', display: 'block', marginBottom: '15px' }}></span>
                    <h2>Message Successfully Sent!</h2>
                    <p style={{ fontSize: '15px', marginTop: '10px' }}>
                      Thank you for contacting Oriolus Scientific. Our patient care team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2>Leave Us A Message</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          placeholder="Your Message or Health Inquiry *"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bgclr-1" type="submit" disabled={loading}>
                          {loading ? 'Sending...' : 'Send Message'}
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
      {/* End Contact Form Area */}

      {/* Start Contact Map Area */}
      <section className="contact-map-area">
        <div className="container-fluid" style={{ padding: 0 }}>
          <iframe
            title="Oriolus Scientific Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124419.64166258079!2d77.5140801861788!3d12.969963870630602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* End Contact Map Area */}
    </MainLayout>
  );
};

export default ContactPage;
