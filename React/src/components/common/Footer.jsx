import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Footer = () => {
  const brand = siteContent.brand;
  const contact = siteContent.contact;

  return (
    <>
      {/* Start footer area */}
      <footer className="footer-area" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
            {/* 1. Quick Contact */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Quick Contact</h3>
                  <span className="border"></span>
                </div>
                <div className="our-info">
                  <p>{brand.fullName}. {brand.division}, dedicated to personalized, drugless clinical healing.</p>
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

            {/* 2. Useful Links */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Useful Links</h3>
                  <span className="border"></span>
                </div>
                <ul className="usefull-links fl-lft">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about/meet-dr-vijay">Dr. Vijay</Link></li>
                  <li><Link to="/procedures">Services</Link></li>
                  <li><Link to="/blog-default">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <ul className="usefull-links">
                  <li><Link to="/yoga-therapy">Yoga Therapy</Link></li>
                  <li><Link to="/naturopathy">Naturopathy</Link></li>
                  <li><Link to="/ayurveda">Ayurveda</Link></li>
                  <li><Link to="/acupuncture">Acupuncture</Link></li>
                  <li><Link to="/structured-wellness-programs">Programs</Link></li>
                  <li><Link to="/faq">FAQ’s</Link></li>
                </ul>
              </div>
            </div>

            {/* 3. Opening Hours */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="single-footer-widget clearfix pd-bottom50">
                <div className="title">
                  <h3>Opening Hours</h3>
                  <span className="border"></span>
                </div>
                <div className="our-info" style={{ marginBottom: '20px' }}>
                  <p>Our research and clinical outpatient department is open for consultations and therapeutic sessions:</p>
                </div>
                <ul className="working-hours">
                  <li>Mon-FriDay: <span>8.00 to 19.00</span></li>
                  <li>Saturday: <span>8.00 to 19.00</span></li>
                  <li>Sunday: <span className="closed">OPD Appt</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
      {/* End footer area */}

      {/* Start footer bottom area */}
      <section className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright-text">
                <p>{siteContent.copyright.text}</p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer-social-links">
                {siteContent.socialLinks.map((s, i) => (
                  <li key={i}><a href={s.url} target="_blank" rel="noreferrer" aria-label={s.platform}><i className={s.icon}></i></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End footer bottom area */}
    </>
  );
};

export default Footer;
