import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const AppointmentPage = () => {
  const [booking, setBooking] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Massage Therapy',
    therapist: 'Any Available Specialist',
    date: '',
    time: 'Morning (09:00 - 12:00)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBooking({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Massage Therapy',
        therapist: 'Any Available Specialist',
        date: '',
        time: 'Morning (09:00 - 12:00)',
        message: ''
      });
    }, 5000);
  };

  return (
    <MainLayout>
      <Breadcrumb title="Make An Appointment" activeTitle="Appointment" />

      <section className="appointment-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="appointment-form-box" style={{ background: '#fff', border: '1px solid #eee', padding: '40px', borderRadius: '4px' }}>
                <div className="title" style={{ marginBottom: '30px' }}>
                  <h2 style={{ fontSize: '26px' }}>Reserve Your Spa Experience</h2>
                  <p style={{ color: '#777', marginTop: '8px' }}>Fill out the details below to schedule your personalized session with our expert wellness team.</p>
                </div>

                {submitted ? (
                  <div style={{ background: '#131d33', padding: '40px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
                    <span className="flaticon-shape" style={{ fontSize: '50px', color: '#c59d5f', display: 'block', marginBottom: '20px' }}></span>
                    <h2 style={{ color: '#c59d5f', marginBottom: '15px' }}>Appointment Confirmed!</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                      Thank you, <strong>{booking.firstName} {booking.lastName}</strong>.<br />
                      We have reserved your session for <strong>{booking.service}</strong> on <strong>{booking.date || 'your selected date'} ({booking.time})</strong>.<br />
                      A confirmation email has been dispatched to <strong>{booking.email}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>First Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          placeholder="Your First Name"
                          value={booking.firstName}
                          onChange={(e) => setBooking({ ...booking, firstName: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          placeholder="Your Last Name"
                          value={booking.lastName}
                          onChange={(e) => setBooking({ ...booking, lastName: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Email Address *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          required 
                          placeholder="your.email@example.com"
                          value={booking.email}
                          onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Phone Number *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          required 
                          placeholder="(123) 456-7890"
                          value={booking.phone}
                          onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Select Procedure *</label>
                        <select 
                          className="form-control"
                          value={booking.service}
                          onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                          style={{ height: '48px' }}
                        >
                          <option value="Massage Therapy">Massage Therapy</option>
                          <option value="Facial Treatments">Facial Treatments</option>
                          <option value="Pedicure & Menicure">Pedicure &amp; Menicure</option>
                          <option value="Salt and Oil Bath">Salt and Oil Bath</option>
                          <option value="Perfect Makeup">Perfect Makeup</option>
                          <option value="Hair Treatments">Hair Treatments</option>
                        </select>
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Preferred Therapist</label>
                        <select 
                          className="form-control"
                          value={booking.therapist}
                          onChange={(e) => setBooking({ ...booking, therapist: e.target.value })}
                          style={{ height: '48px' }}
                        >
                          <option value="Any Available Specialist">Any Available Specialist</option>
                          <option value="Elena Gilbert">Elena Gilbert (Massage)</option>
                          <option value="Katherina Pierce">Katherina Pierce (Facials)</option>
                          <option value="Caroline Forbes">Caroline Forbes (Nail Art)</option>
                          <option value="Bonnie Bennett">Bonnie Bennett (Hydrotherapy)</option>
                          <option value="Stefan Salvatore">Stefan Salvatore (Deep Tissue)</option>
                          <option value="Freya Mikaelson">Freya Mikaelson (Makeup)</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Preferred Date *</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          required 
                          value={booking.date}
                          onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                          style={{ height: '48px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Preferred Time Slot *</label>
                        <select 
                          className="form-control"
                          value={booking.time}
                          onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                          style={{ height: '48px' }}
                        >
                          <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                          <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 - 15:00)</option>
                          <option value="Evening (15:00 - 18:00)">Evening (15:00 - 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12" style={{ marginBottom: '25px' }}>
                        <label style={{ fontWeight: 600, color: '#333', marginBottom: '8px', display: 'block' }}>Special Requests / Health Notes</label>
                        <textarea 
                          className="form-control" 
                          rows="4" 
                          placeholder="Please specify any allergies, pressure preferences, or special accommodations needed..."
                          value={booking.message}
                          onChange={(e) => setBooking({ ...booking, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="thm-btn bgclr-1" style={{ width: '100%', padding: '15px', fontSize: '16px' }}>
                      Confirm Appointment Booking
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="quick-contact" style={{ background: '#f9f8f6', padding: '30px', border: '1px solid #eee', marginBottom: '30px' }}>
                <div className="title">
                  <h2>Direct Inquiries</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <div className="icon-holder"><span className="flaticon-location"></span></div>
                    <div className="text-holder"><h5><span>Address:</span> 121, Park Drive, New York, NY 10012</h5></div>
                  </li>
                  <li>
                    <div className="icon-holder"><span className="flaticon-technology"></span></div>
                    <div className="text-holder"><h5><span>Phone:</span> (123) 0200 12345</h5></div>
                  </li>
                  <li>
                    <div className="icon-holder"><span className="flaticon-note"></span></div>
                    <div className="text-holder"><h5><span>Email:</span> Mailus@dailySpanz.com</h5></div>
                  </li>
                  <li>
                    <div className="icon-holder"><span className="flaticon-clock"></span></div>
                    <div className="text-holder"><h5><span>Hours:</span> Mon - Sat: 9am - 6pm</h5></div>
                  </li>
                </ul>
              </div>

              <div className="cancellation-policy" style={{ background: '#131d33', padding: '25px', color: '#fff', borderRadius: '4px' }}>
                <h4 style={{ color: '#c59d5f', marginBottom: '10px' }}>Cancellation Policy</h4>
                <p style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.6' }}>
                  Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment to avoid a cancellation fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AppointmentPage;
