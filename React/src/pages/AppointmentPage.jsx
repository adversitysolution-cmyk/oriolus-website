import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const AppointmentPage = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Therapeutic Yoga & Bodywork',
    date: '',
    time: 'Morning (09:00 - 12:00)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainLayout>
      <Breadcrumb title="Make An Appointment" activeTitle="Appointment" />

      {/* Start Appointment Page Area */}
      <section className="appointment-page-area pd-top100 pd-bottom80">
        <div className="container">
          <div className="sec-title text-center">
            <h1>Make An Appointment</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p>Schedule your personalized clinical wellness consultation with our expert practitioners</p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="appointment-box">
                {submitted ? (
                  <div className="alert alert-success text-center" style={{ padding: '40px 20px' }}>
                    <span className="flaticon-shape" style={{ fontSize: '40px', color: '#00B5A6', display: 'block', marginBottom: '15px' }}></span>
                    <h2>Appointment Request Received!</h2>
                    <p style={{ fontSize: '15px', marginTop: '10px' }}>
                      Thank you, <strong>{booking.name}</strong>. We have received your booking for <strong>{booking.service}</strong> on <strong>{booking.date || 'your requested date'}</strong>. Our clinical OPD team will contact you to confirm.
                    </p>
                    <button className="thm-btn bgclr-1" style={{ marginTop: '20px' }} onClick={() => setSubmitted(false)}>
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <div className="form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-box">
                            <input 
                              type="text" 
                              name="name" 
                              placeholder="Your Name *" 
                              value={booking.name}
                              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                              required 
                            />
                            <div className="icon-box">
                              <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-box">
                            <input 
                              type="email" 
                              name="email" 
                              placeholder="Your Email *" 
                              value={booking.email}
                              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                              required 
                            />
                            <div className="icon-box">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-box">
                            <input 
                              type="tel" 
                              name="phone" 
                              placeholder="Your Phone *" 
                              value={booking.phone}
                              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                              required 
                            />
                            <div className="icon-box">
                              <i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-box">
                            <select 
                              className="form-control"
                              value={booking.service}
                              onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                              style={{ height: '50px', border: '1px solid #f0f0f0', borderRadius: 0 }}
                            >
                              <option value="Therapeutic Yoga & Bodywork">Therapeutic Yoga & Bodywork</option>
                              <option value="Clinical Naturopathy & Hydrotherapy">Clinical Naturopathy & Hydrotherapy</option>
                              <option value="Classical Ayurveda & Abhyanga">Classical Ayurveda & Abhyanga</option>
                              <option value="Acupuncture & Pain Care">Acupuncture & Pain Care</option>
                              <option value="Obesity Reduction & Detox Retreat">Obesity Reduction & Detox Retreat</option>
                              <option value="Diabetes Wellness Program">Diabetes Wellness Program</option>
                              <option value="Spine & Joint Care Program">Spine & Joint Care Program</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-box">
                            <input 
                              type="date" 
                              name="date" 
                              value={booking.date}
                              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                              style={{ height: '50px', border: '1px solid #f0f0f0', width: '100%', padding: '0 15px' }}
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-box">
                            <select 
                              className="form-control"
                              value={booking.time}
                              onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                              style={{ height: '50px', border: '1px solid #f0f0f0', borderRadius: 0 }}
                            >
                              <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                              <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 - 15:00)</option>
                              <option value="Evening (15:00 - 18:00)">Evening (15:00 - 18:00)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-box">
                            <textarea 
                              name="message" 
                              placeholder="Health Goals or Clinical Concerns *"
                              value={booking.message}
                              onChange={(e) => setBooking({ ...booking, message: e.target.value })}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 text-center">
                          <button className="thm-btn bgclr-1" type="submit">Submit Appointment</button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment Page Area */}

      {/* Start Offer Box Area */}
      <section className="offer-box-area">
        <div className="container">
          <div className="offer-box">
            <div className="inner-content clearfix" style={{ backgroundImage: "url(/images/resources/offer-bg.jpg)" }}>
              <div className="left pull-left">
                <h2>Looking for Comprehensive Residential Healing Programs?</h2>
              </div>
              <div className="right pull-right">
                <Link to="/contact" className="thm-btn bgclr-1">Contact OPD Desk</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Offer Box Area */}
    </MainLayout>
  );
};

export default AppointmentPage;
