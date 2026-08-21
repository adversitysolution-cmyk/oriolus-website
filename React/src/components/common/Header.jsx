import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

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
                  <li><span className="flaticon-technology"></span>Phone: +91 98450 12345 / +91 80 2845 6789</li>
                  <li><span className="flaticon-note"></span>Email: info@oriolus.org</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="top-right clearfix">
                <ul className="location">
                  <li><span className="flaticon-location"></span>Campus: Bengaluru, Karnataka, India</li>
                </ul>
                <ul className="social-links">
                  <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://plus.google.com" target="_blank" rel="noreferrer"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="https://pinterest.com" target="_blank" rel="noreferrer"><i className="fa fa-pinterest-p"></i></a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
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
                  <img className="logo-image" src="/images/45944_Oriolus scientific yoga and naturopathy research center_LOGO_SK_-01.png" alt="Oriolus Scientific — Yoga &amp; Naturopathy Research Center" style={{ maxHeight: '65px', width: 'auto', objectFit: 'contain' }} />
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
                  {/* Start nav container nav left */}
                  <div className="nav-container nav-left">
                    <ul className="navigation clearfix">
                      <li className={isActive('/') ? 'current' : ''}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={`dropdown ${['/about', '/testimonials', '/faq', '/appointment'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/about">About Us</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('about', e)}></div>
                        <ul style={{ display: openDropdowns['about'] ? 'block' : '' }}>
                          <li><Link to="/about">About Oriolus Scientific</Link></li>
                          <li><Link to="/testimonials">Testimonials</Link></li>
                          <li><Link to="/faq">FAQ’s</Link></li>
                          <li><Link to="/appointment">Make an Appointment</Link></li>
                        </ul>
                      </li>
                      <li className={`dropdown ${['/procedures', '/massage-therapy', '/facial-treatments', '/pedicure-menicure', '/salt-oil-bath', '/perfect-makeup', '/hair-treatments'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/procedures">Procedures</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('procedures', e)}></div>
                        <ul style={{ display: openDropdowns['procedures'] ? 'block' : '' }}>
                          <li><Link to="/massage-therapy">Massage Therapy</Link></li>
                          <li><Link to="/facial-treatments">Facial Treatments</Link></li>
                          <li><Link to="/pedicure-menicure">Pedicure & Menicure</Link></li>
                          <li><Link to="/salt-oil-bath">Salt and Oil Bath</Link></li>
                          <li><Link to="/perfect-makeup">Perfect Makeup</Link></li>
                          <li><Link to="/hair-treatments">Hair Treatments</Link></li>
                        </ul>
                      </li>
                      <li className={isActive('/therapists') ? 'current' : ''}>
                        <Link to="/therapists">Therapists</Link>
                      </li>
                    </ul>
                  </div>
                  {/* End nav container nav left */}

                  {/* Start nav container nav right */}
                  <div className="nav-container nav-right">
                    <ul className="navigation clearfix">
                      <li className={`dropdown ${['/blog-default', '/blog-large', '/blog-single'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/blog-default">Blog</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('blog', e)}></div>
                        <ul style={{ display: openDropdowns['blog'] ? 'block' : '' }}>
                          <li><Link to="/blog-default">Blog Default</Link></li>
                          <li><Link to="/blog-large">Blog Large</Link></li>
                          <li><Link to="/blog-single">Blog Single Post</Link></li>
                        </ul>
                      </li>
                      <li className={`dropdown ${['/gallery-grid', '/gallery-without-grid', '/gallery-single'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/gallery-grid">Gallery</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('gallery', e)}></div>
                        <ul style={{ display: openDropdowns['gallery'] ? 'block' : '' }}>
                          <li><Link to="/gallery-grid">Gallery Grid View</Link></li>
                          <li><Link to="/gallery-without-grid">Gallery Without Grid</Link></li>
                          <li><Link to="/gallery-single">Gallery Single</Link></li>
                        </ul>
                      </li>
                      <li className={`dropdown ${['/shop', '/shop-single', '/shopping-cart', '/checkout', '/account'].some(p => isActive(p)) ? 'current' : ''}`}>
                        <Link to="/shop">Shop</Link>
                        <div className="dropdown-btn" onClick={(e) => toggleDropdown('shop', e)}></div>
                        <ul style={{ display: openDropdowns['shop'] ? 'block' : '' }}>
                          <li><Link to="/shop">Shop Products</Link></li>
                          <li><Link to="/shop-single">Products Single</Link></li>
                          <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                          <li><Link to="/checkout">Checkout</Link></li>
                          <li><Link to="/account">My Account</Link></li>
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
