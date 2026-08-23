import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const brand = siteContent.brand;
  const contact = siteContent.contact;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const toggleDropdown = (menuKey, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdowns(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const isActive = (path) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/index.html')) return true;
    return location.pathname === path || location.pathname === `${path}.html`;
  };

  return (
    <>
      {/* Start top bar area */}
      <section className="top-bar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <div className="top-left">
                <ul>
                  <li><span className="flaticon-technology"></span>Phone: {contact.phoneDisplay}</li>
                  <li><span className="flaticon-note"></span>Email: {contact.emailPrimary}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="top-right clearfix">
                <ul className="location">
                  <li><span className="flaticon-location"></span>Campus: {contact.address}</li>
                </ul>
                <ul className="social-links">
                  {siteContent.socialLinks.map((s, i) => (
                    <li key={i}><a href={s.url} target="_blank" rel="noreferrer" aria-label={s.platform}><i className={s.icon}></i></a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End top bar area */}

      {/* Start mainmenu area */}
      <section className={`mainmenu-area stricky ${isSticky ? 'stricky-fixed' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {/* Start logo */}
              <div className="logo">
                <Link to="/">
                  <img className="logo-image" src="/images/45944_Oriolus scientific yoga and naturopathy research center_LOGO_SK_-01.png" alt="Oriolus Scientific — Yoga &amp; Naturopathy Research Center" style={{ maxHeight: '75px', width: 'auto', objectFit: 'contain' }} />
                </Link>
              </div>
              {/* End logo */}

              {/* Start mainmenu */}
              <nav className="main-menu clearfix">
                <div className="navbar-header">
                  <button 
                    type="button" 
                    className="navbar-toggle" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                
                <div className={`navbar-collapse collapse clearfix ${mobileMenuOpen ? 'in' : ''}`} style={{ display: mobileMenuOpen ? 'block' : '' }}>
                  {/* Start nav container nav left: Home, About Us, Dr. Vijay */}
                  <div className="nav-container nav-left">
                    <ul className="navigation clearfix">
                      <li className={isActive('/') ? 'current' : ''}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={`dropdown ${['/about', '/about/meet-dr-vijay', '/dr-vijay', '/testimonials', '/faq', '/appointment'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/about">About Us</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('about', e)}></div>
                        <ul style={{ display: openDropdowns['about'] ? 'block' : '' }}>
                          <li><Link to="/about#who-we-are">About Oriolus Scientific</Link></li>
                          <li><Link to="/about#dr-vijay">Meet Dr. Vijay</Link></li>
                          <li><Link to="/about#our-story">Our Story</Link></li>
                          <li><Link to="/about#why-choose-us">Why Choose Oriolus</Link></li>
                          <li><Link to="/about#patient-experiences">Patient Experiences</Link></li>
                          <li><Link to="/about#affiliations">Our Affiliations</Link></li>
                        </ul>
                      </li>
                      <li className={isActive('/about/meet-dr-vijay') || isActive('/dr-vijay') || isActive('/therapists') ? 'current' : ''}>
                        <Link to="/about/meet-dr-vijay">Dr. Vijay</Link>
                      </li>
                    </ul>
                  </div>
                  {/* End nav container nav left */}

                  {/* Start nav container nav right: Procedures, Blog, Gallery, Shop, Contact Us */}
                  <div className="nav-container nav-right">
                    <ul className="navigation clearfix">
                      <li className={`dropdown procedures-mega-item ${['/procedures', '/yoga-therapy', '/naturopathy', '/ayurveda', '/acupuncture', '/structured-wellness-programs', '/wellness-programs', '/services/'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/procedures">Services</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('procedures', e)}></div>
                        
                        {/* 5-Column Mega Dropdown */}
                        <div 
                          className="procedures-mega-dropdown" 
                          style={{ display: openDropdowns['procedures'] ? 'block' : undefined }}
                        >
                          <div className="procedures-mega-columns">
                            
                            {/* Col 1: Yoga Therapy */}
                            <div className="procedures-mega-col">
                              <Link to="/yoga-therapy" className="procedures-mega-col-title">
                                Yoga Therapy
                              </Link>
                              <ul className="procedures-mega-list">
                                <li><Link to="/services/therapeutic-yoga">Therapeutic Yoga</Link></li>
                                <li><Link to="/services/stick-yoga">Stick Yoga / Danda Yoga</Link></li>
                                <li><Link to="/services/aerial-yoga">Aerial Yoga</Link></li>
                                <li><Link to="/services/pain-management-yoga">Pain Management Yoga</Link></li>
                              </ul>
                            </div>

                            {/* Col 2: Naturopathy */}
                            <div className="procedures-mega-col">
                              <Link to="/naturopathy" className="procedures-mega-col-title">
                                Naturopathy
                              </Link>
                              <ul className="procedures-mega-list">
                                <li><Link to="/services/colon-hydrotherapy">Colon Hydrotherapy</Link></li>
                                <li><Link to="/services/clinical-detoxification">Clinical Detoxification</Link></li>
                                <li><Link to="/services/diabetes-wellness-support">Diabetes Wellness</Link></li>
                                <li><Link to="/services/obesity-reduction">Obesity Reduction</Link></li>
                              </ul>
                            </div>

                            {/* Col 3: Ayurveda */}
                            <div className="procedures-mega-col">
                              <Link to="/ayurveda" className="procedures-mega-col-title">
                                Ayurveda
                              </Link>
                              <ul className="procedures-mega-list">
                                <li><Link to="/services/panchakarma">Classical Panchakarma</Link></li>
                                <li><Link to="/services/abhyanga">Abhyanga Massage</Link></li>
                                <li><Link to="/services/shirodhara">Shirodhara Stream</Link></li>
                                <li><Link to="/services/udwarthanam">Udwarthanam</Link></li>
                                <li><Link to="/services/swedana">Herbal Swedana</Link></li>
                              </ul>
                            </div>

                            {/* Col 4: Acupuncture */}
                            <div className="procedures-mega-col">
                              <Link to="/acupuncture" className="procedures-mega-col-title">
                                Acupuncture
                              </Link>
                              <ul className="procedures-mega-list">
                                <li><Link to="/services/acupuncture-pain-management">Pain Management</Link></li>
                                <li><Link to="/services/acupuncture-chronic-conditions">Chronic Conditions</Link></li>
                              </ul>
                            </div>

                            {/* Col 5: Structured Wellness Programs */}
                            <div className="procedures-mega-col">
                              <Link to="/structured-wellness-programs" className="procedures-mega-col-title">
                                Wellness Programs
                              </Link>
                              <ul className="procedures-mega-list">
                                <li><Link to="/services/obesity-reduction-detox">Obesity &amp; Detox</Link></li>
                                <li><Link to="/services/diabetes-wellness">Diabetes Program</Link></li>
                                <li><Link to="/services/spine-joint-pain">Spine &amp; Joint Pain</Link></li>
                                <li><Link to="/services/full-body-retreat">Full-Body Retreat</Link></li>
                              </ul>
                            </div>

                          </div>

                          {/* Footer Bar */}
                          <div className="procedures-mega-footer">
                            <Link to="/procedures" className="overview-link">
                              <span>View All Services &amp; Therapies</span>
                              <i className="fa fa-arrow-right"></i>
                            </Link>
                            <Link to="/appointment" className="book-link">
                              Book a Consultation &rarr;
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className={`dropdown ${['/blog-default', '/blog-large', '/blog-single'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/blog-default">Blog</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('blog', e)}></div>
                        <ul style={{ display: openDropdowns['blog'] ? 'block' : '' }}>
                          <li><Link to="/blog-default">Blog Default</Link></li>
                          <li><Link to="/blog-large">Blog Large</Link></li>
                          <li><Link to="/blog-single">Blog Single Post</Link></li>
                        </ul>
                      </li>
                      <li className={isActive('/contact') ? 'current' : ''}>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  {/* End nav container nav right */}
                </div>
              </nav>
              {/* End mainmenu */}

              {/* Start outer search box */}
              <div className="outer-search-box">
                <div className="seach-toggle" onClick={() => setSearchOpen(!searchOpen)}>
                  <i className="fa fa-search"></i>
                </div>
                <ul className="search-box" style={{ display: searchOpen ? 'block' : 'none' }}>
                  <li>
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                      <div className="form-group">
                        <input type="search" name="search" placeholder="Search Here" required />
                        <button type="submit"><i className="fa fa-search"></i></button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
              {/* End outer search box */}

              <div className="arrow">
                <img src="/images/resources/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End mainmenu area */}
    </>
  );
};

export default Header;
