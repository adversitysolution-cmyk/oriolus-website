import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const procedureLinks = [
  { name: 'Massage Therapy', path: '/massage-therapy' },
  { name: 'Facial Treatments', path: '/facial-treatments' },
  { name: 'Pedicure & Menicure', path: '/pedicure-menicure' },
  { name: 'Salt and Oil Bath', path: '/salt-oil-bath' },
  { name: 'Perfect Makeup', path: '/perfect-makeup' },
  { name: 'Hair Treatments', path: '/hair-treatments' }
];

const ProcedureSidebar = () => {
  const location = useLocation();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pull-left">
      <div className="single-sidebar-box">
        <ul className="procedure-categories">
          {procedureLinks.map(link => {
            const active = location.pathname === link.path || location.pathname === `${link.path}.html`;
            return (
              <li key={link.path} className={active ? 'active' : ''}>
                <Link to={link.path}>
                  {link.name} <i className="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="single-sidebar-box">
        <div className="download-pdf text-center" style={{ background: '#131d33', padding: '30px 20px', color: '#fff', marginBottom: '30px' }}>
          <span className="flaticon-technology" style={{ fontSize: '40px', color: '#c59d5f' }}></span>
          <h3 style={{ color: '#fff', margin: '15px 0 10px', fontSize: '20px' }}>Spa Brochure</h3>
          <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '15px' }}>Download our complete treatment menu &amp; pricing catalog in PDF format.</p>
          <a className="thm-btn bgclr-1" href="#download" onClick={(e) => e.preventDefault()}>Download PDF</a>
        </div>
      </div>
      <div className="single-sidebar-box">
        <div className="quick-appointment-sidebar text-center" style={{ border: '2px solid #c59d5f', padding: '25px 20px', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Book A Session</h3>
          <p style={{ color: '#777', fontSize: '13px', marginBottom: '15px' }}>Call us directly or reserve your preferred date &amp; time online.</p>
          <h4 style={{ color: '#c59d5f', fontWeight: 700, marginBottom: '15px' }}>(123) 0200 12345</h4>
          <Link className="thm-btn bgclr-1" to="/appointment">Make Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default ProcedureSidebar;
