import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const brand = siteContent.brand;
  const contact = siteContent.contact;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <>
      {/* Start footer area */}
      <footer className="footer-area">
        <div className="arrow" style={{ top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg 
            viewBox="0 0 1920 60" 
            preserveAspectRatio="none" 
            style={{ width: '100%', height: '55px', display: 'block' }}
          >
            <path d="M0,0 L1920,0 L1920,8 Q960,60 0,8 Z" fill="#ECDCCE" />
          </svg>
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
            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
            {/* End single footer widget */}

            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Useful Links</h3>
                  <span className="border"></span>
                </div>
                <ul className="usefull-links fl-lft">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about/meet-dr-vijay">Dr. Vijay</Link></li>
                  <li><Link to="/faq">FAQ’s</Link></li>
                  <li><Link to="/testimonials">Testimonials</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="usefull-links">
                  <li><Link to="/yoga-therapy">Yoga Therapy</Link></li>
                  <li><Link to="/naturopathy">Naturopathy</Link></li>
                  <li><Link to="/ayurveda">Ayurveda</Link></li>
                  <li><Link to="/acupuncture">Acupuncture</Link></li>
                  <li><Link to="/structured-wellness-programs">Programs</Link></li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-footer-widget pd-bottom50">
                <div className="title">
                  <h3>Latest Blog</h3>
                  <span className="border"></span>
                </div>
                <ul className="footer-latest-blog">
                  <li>
                    <div className="img-holder">
                      <img src="/images/footer/latest-blog-1.jpg" alt="Awesome Image" />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link to="/blog-single"><i className="fa fa-link" aria-hidden="true"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-holder">
                      <Link to="/blog-single"><h6>Therapeutic Yoga for Managing Workplace Stress</h6></Link>
                      <span>August 15, 2026</span>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img src="/images/footer/latest-blog-2.jpg" alt="Awesome Image" />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link to="/blog-single"><i className="fa fa-link" aria-hidden="true"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-holder">
                      <Link to="/blog-single"><h6>Clinical Detoxification &amp; Cellular Rejuvenation</h6></Link>
                      <span>July 28, 2026</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-footer-widget clearfix">
                <div className="title">
                  <h3>Subscribe Us</h3>
                  <span className="border"></span>
                </div>
                <div className="subscribe-form">
                  <p>Subscribe to our wellness newsletter to receive research articles, health tips, and clinic updates.</p>
                  {subscribed ? (
                    <p style={{ color: '#c59d5f', fontWeight: 'bold' }}>Thank you for subscribing!</p>
                  ) : (
                    <form onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address..."
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                      />
                      <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                  )}
                </div>
              </div>
              <div className="single-footer-widget clearfix">
                <div className="title">
                  <h3>Opening Hours</h3>
                </div>
                <ul className="working-hours">
                  <li>Mon-FriDay: <span>8.00 to 19.00</span></li>
                  <li>Saturday: <span>8.00 to 19.00</span></li>
                  <li>Sunday: <span className="closed">OPD Appt</span></li>
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
