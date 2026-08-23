import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Footer = () => {
  const brand = siteContent.brand;
  const contact = siteContent.contact;

  return (
    <>
      {/* Start footer area */}
      <footer className="footer-area">
        <div className="arrow">
          <img src="/images/resources/arrow.png" alt="" />
        </div>
        <div className="footer-image-box">
          <img src="/images/footer/footer-image.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-logo text-center">
                <Link to="/">
                  <img 
                    src={brand.logo} 
                    alt={brand.logoAlt} 
                    style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain' }} 
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Start single footer widget: Quick Contact */}
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Quick Contact</h3>
                  <span className="border"></span>
                </div>
                <div className="our-info">
                  <p>{brand.fullName}. {brand.division}, dedicated to evidence-based drugless healing and natural wellness.</p>
                </div>
                <ul className="footer-contact-info">
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-location"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Address: {contact.address}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-technology"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Phone: {contact.phonePrimary}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-note"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Email: {contact.emailPrimary}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget: Useful Links */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Useful Links</h3>
                  <span className="border"></span>
                </div>
                <ul className="usefull-links">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about/meet-dr-vijay">Meet Dr. Vijay</Link></li>
                  <li><Link to="/faq">Patient FAQs</Link></li>
                  <li><Link to="/testimonials">Testimonials</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/appointment">Book Appointment</Link></li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget: Clinical Services */}
            <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Clinical Services</h3>
                  <span className="border"></span>
                </div>
                <ul className="usefull-links">
                  <li><Link to="/services/therapeutic-yoga">Therapeutic Yoga</Link></li>
                  <li><Link to="/services/colon-hydrotherapy">Clinical Naturopathy</Link></li>
                  <li><Link to="/services/panchakarma">Classical Panchakarma</Link></li>
                  <li><Link to="/services/acupuncture-pain-management">Medical Acupuncture</Link></li>
                  <li><Link to="/services/obesity-reduction-detox">Detox &amp; Weight Management</Link></li>
                  <li><Link to="/structured-wellness-programs">Structured Wellness Programs</Link></li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

          </div>
        </div>
      </footer>
      {/* End footer area */}

      {/* Start footer bottom area */}
      <section className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom">
                <div className="copyright-text pull-left">
                  <p>
                    &copy; {new Date().getFullYear()} <Link to="/">{brand.name}</Link> &mdash; {brand.tagline}. All Rights Reserved.
                  </p>
                </div>
                <div className="footer-social-links pull-right">
                  <ul className="social-links">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End footer bottom area */}
    </>
  );
};

export default Footer;
