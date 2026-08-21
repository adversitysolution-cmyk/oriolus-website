import React, { useState } from 'react';

const QuickAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select Service',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'Select Service', message: '' });
    }, 4000);
  };

  return (
    <section className="appointment-area">
      <div className="icon-holder leap">
        <img src="/images/icon/appointment-bg.png" alt="Icon" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h1>Make an appointment</h1>
          <div className="border mar0auto">
            <span className="flaticon-shape"></span>    
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="appointment-box">
              <div className="experince text-center">
                <h3><span>Since 1991,</span> we provide best<br />service for our clients.</h3>
                <div className="inner-content">
                  <span className="flaticon-laurel"></span>
                  <h1>26</h1>
                  <h3>Years of experince</h3>
                </div>
                <p>Must explain to you how all this mistaken denouncing pleasure &amp; praising </p>    
              </div> 
              <div className="form">
                {submitted ? (
                  <div style={{ background: '#131d33', padding: '30px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
                    <h3 style={{ color: '#c59d5f', marginBottom: '10px' }}>Appointment Request Received!</h3>
                    <p>Thank you, {formData.name}. Our wellness coordinator will contact you shortly at {formData.email}.</p>
                  </div>
                ) : (
                  <form id="appointment-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-box">
                          <input 
                            type="text" 
                            name="form_name" 
                            placeholder="Your Name" 
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
                            placeholder="Your Email" 
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
                            className="selectmenu form-control"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            style={{ height: '48px', marginBottom: '20px' }}
                          >
                            <option value="Select Service">Select Service</option>
                            <option value="Massage Therapy">Massage Therapy</option>
                            <option value="Facial Treatments">Facial Treatments</option>
                            <option value="Pedicure & Menicure">Pedicure &amp; Menicure</option>
                            <option value="Salt and Oil Bath">Salt and Oil Bath</option>
                            <option value="Perfect Makeup">Perfect Makeup</option>
                            <option value="Hair Treatments">Hair Treatments</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea 
                          name="form_message" 
                          placeholder="Your Message.." 
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bgclr-1" type="submit">submit</button>   
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
                    <h5><span>Weekdays:</span> 9.00am to 18.00pm</h5>
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
