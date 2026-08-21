import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
                  <img src="/images/45944_Oriolus scientific yoga and naturopathy research center_LOGO_SK_-01.png" alt="Oriolus Scientific — Yoga &amp; Naturopathy Research Center" style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain' }} />
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
                  <p>Oriolus Scientific Yoga &amp; Naturopathy Research Center. A division of Funicle Health Care and Wellness Pvt. Ltd., dedicated to personalized, drugless clinical healing.</p>
                </div>
                <ul className="footer-contact-info">
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-location"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Address: Oriolus Scientific Campus,<br />Bengaluru, Karnataka, India</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-technology"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Phone: +91 98450 12345</h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon-holder">
                      <span className="flaticon-note"></span>
                    </div>
                    <div className="text-holder">
                      <h5>Email: info@oriolus.org</h5>
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
                  <h3>Usefull Links</h3>
                  <span className="border"></span>
                </div>
                <ul className="usefull-links fl-lft">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/procedures">Procedures</Link></li>
                  <li><Link to="/blog-default">News &amp; Tips</Link></li>
                  <li><Link to="/therapists">Threrapists</Link></li>
                  <li><Link to="/shop">Our Shop</Link></li>
                  <li><Link to="/testimonials">Stories</Link></li>
                  <li><Link to="/faq">FAQ’s</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <ul className="usefull-links">
                  <li><Link to="/#pricing">Pricing Plans</Link></li>
                  <li><Link to="/about">Healthy Foods</Link></li>
                  <li><Link to="/shop">Get Offers</Link></li>
                  <li><Link to="/appointment">Appointment</Link></li>
                  <li><Link to="/about">Certificates</Link></li>
                  <li><Link to="/therapists">Qualifications</Link></li>
                  <li><Link to="/about">Private Policy</Link></li>
                </ul>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-footer-widget mar-bottom">
                <div className="title">
                  <h3>Popular Post</h3>
                </div>
                <ul className="latest-post">
                  <li className="single-post">
                    <div className="img-holder">
                      <img src="/images/footer/latest-news-1.png" alt="Awesome Image" />
                    </div>
                    <div className="text-holder">
                      <Link className="post-title" to="/blog-single">Spas &amp; the psychology of<br />well-being...</Link>
                      <div className="post-info">
                        <span>August 24, 2017</span>
                      </div>
                    </div>
                  </li>
                  <li className="single-post">
                    <div className="img-holder">
                      <img src="/images/footer/latest-news-2.png" alt="Awesome Image" />
                    </div>
                    <div className="text-holder">
                      <Link className="post-title" to="/blog-single">Two massages are better<br />than one...</Link>
                      <div className="post-info">
                        <span>February 05, 2017</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="more-news">
                  <Link to="/blog-default">More News <i className="fa fa-caret-right" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
            {/* End single footer widget */}

            {/* Start single footer widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-footer-widget clearfix">
                <div className="title">
                  <h3>Subscribe Us</h3>
                </div>
                <div className="newsletter-box">
                  <p>Subscribe to our newsletter!</p>
                  {subscribed ? (
                    <div style={{ color: '#c59d5f', padding: '10px 0', fontWeight: 'bold' }}>
                      Thank you for subscribing!
                    </div>
                  ) : (
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                      <input 
                        placeholder="Email Address" 
                        type="email" 
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required 
                      />
                      <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                      <div className="envelope">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              <div className="single-footer-widget clearfix">
                <div className="title">
                  <h3>Opening Hours</h3>
                </div>
                <ul className="working-hours">
                  <li>Mon-FriDay: <span>9.00 to 18.00</span></li>
                  <li>Saturday: <span>9.00 to 18.00</span></li>
                  <li>Sunday: <span className="closed">Closed</span></li>
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
                <p>Copyrights © 2026 All Rights Reserved, Powered by <a href="/">Oriolus Scientific — Funicle Health Care and Wellness Pvt. Ltd.</a></p> 
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer-social-links">
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://plus.google.com" target="_blank" rel="noreferrer"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
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
