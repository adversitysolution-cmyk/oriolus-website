import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    form_name: '',
    form_email: '',
    form_phone: '',
    form_subject: '',
    form_message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        form_name: '',
        form_email: '',
        form_phone: '',
        form_subject: '',
        form_message: ''
      });
    }, 5000);
  };

  return (
    <MainLayout>
      <Breadcrumb title="Contact Us" activeTitle="Contact Us" />

      {/* Start contact form area */}
      <section className="contact-form-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title">
            <h1>Get Touch With Us</h1>
            <div className="border">
              <span className="flaticon-shape"></span>    
            </div>
            <p>Daily Spanz is an Elegant, good looking beauty spa website. With the help of shortcodes you can<br /> create a website.</p>  
          </div>

          <div className="row">
            {/* Quick Contact Card */}
            <div className="col-lg-4 col-md-5">
              <div className="quick-contact" style={{ background: '#f9f8f6', padding: '35px', border: '1px solid #eee', marginBottom: '30px' }}>
                <div className="title">
                  <h2>Quick Contact</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-location"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Address:</span> 121, Park Drive, Varick<br /> Str New York, NY 10012, USA</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-technology"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Phone:</span> (123) 0200 12345 &amp;<br />1800-45-678-9012</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-note"></span>
                    </div>
                    <div className="text-holder">
                      <h5><span>Email:</span> Mailus@dailySpanz.com</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-clock"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Mon-Satday: 9.00am to 18.00pm <br />Sunday: <span className="closes" style={{ color: '#c59d5f' }}>Closed</span></h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 col-md-7">
              <div className="contact-form" style={{ background: '#fff', border: '1px solid #eee', padding: '35px' }}>
                {submitted ? (
                  <div style={{ background: '#131d33', padding: '40px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
                    <span className="flaticon-shape" style={{ fontSize: '50px', color: '#c59d5f', display: 'block', marginBottom: '15px' }}></span>
                    <h2 style={{ color: '#c59d5f', marginBottom: '10px' }}>Message Dispatched!</h2>
                    <p style={{ fontSize: '16px', color: '#eee' }}>
                      Thank you, <strong>{formData.form_name}</strong>. Your inquiry has been received. Our wellness team will reply to <strong>{formData.form_email}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <input 
                          type="text" 
                          name="form_name" 
                          className="form-control"
                          placeholder="Your Name*" 
                          required 
                          value={formData.form_name}
                          onChange={(e) => setFormData({ ...formData, form_name: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <input 
                          type="email" 
                          name="form_email" 
                          className="form-control"
                          placeholder="Your Mail*" 
                          required 
                          value={formData.form_email}
                          onChange={(e) => setFormData({ ...formData, form_email: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <input 
                          type="text" 
                          name="form_phone" 
                          className="form-control"
                          placeholder="Phone" 
                          value={formData.form_phone}
                          onChange={(e) => setFormData({ ...formData, form_phone: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <input 
                          type="text" 
                          name="form_subject" 
                          className="form-control"
                          placeholder="Subject" 
                          value={formData.form_subject}
                          onChange={(e) => setFormData({ ...formData, form_subject: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12" style={{ marginBottom: '25px' }}>
                        <textarea 
                          name="form_message" 
                          className="form-control"
                          rows="6" 
                          placeholder="Your Message.." 
                          required 
                          value={formData.form_message}
                          onChange={(e) => setFormData({ ...formData, form_message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bgclr-1" type="submit" style={{ padding: '12px 35px' }}>
                          Send Message
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
          title="Daily Spanz Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7663243141527!2d-74.0080649239741!3d40.72317187139178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c44569305%3A0x6b77dfad206037b5!2sVarick%20St%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
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
