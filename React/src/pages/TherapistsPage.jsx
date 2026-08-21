import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const therapists = [
  {
    id: 1,
    name: 'Elena Gilbert',
    role: 'Senior Massage Specialist',
    image: '/images/team/1.jpg',
    bio: 'Over 10 years of mastery in Swedish, Thai, and thermal stone therapies.'
  },
  {
    id: 2,
    name: 'Katherina Pierce',
    role: 'Master Aesthetician',
    image: '/images/team/2.jpg',
    bio: 'Specialist in botanical anti-aging facials and clinical skin rejuvenation.'
  },
  {
    id: 3,
    name: 'Caroline Forbes',
    role: 'Nail Art & Pedicure Expert',
    image: '/images/team/3.jpg',
    bio: 'Passionate nail artist delivering flawless gel manicures and spa pedicures.'
  },
  {
    id: 4,
    name: 'Bonnie Bennett',
    role: 'Hydrotherapy Specialist',
    image: '/images/team/4.jpg',
    bio: 'Expert in essential oil blending and rejuvenating mineral hydrotherapy baths.'
  },
  {
    id: 5,
    name: 'Stefan Salvatore',
    role: 'Deep Tissue Therapist',
    image: '/images/team/1.jpg',
    bio: 'Certified sports and rehabilitation massage specialist relieving acute muscle stress.'
  },
  {
    id: 6,
    name: 'Damon Salvatore',
    role: 'Holistic Wellness Consultant',
    image: '/images/team/2.jpg',
    bio: 'Holistic wellness advisor combining dietary therapy with calming bodywork.'
  },
  {
    id: 7,
    name: 'Rebekah Mikaelson',
    role: 'Senior Hair Stylist',
    image: '/images/team/3.jpg',
    bio: 'Master colorist specializing in organic balayage and intensive hair spa treatments.'
  },
  {
    id: 8,
    name: 'Freya Mikaelson',
    role: 'Luxury Makeup Artist',
    image: '/images/team/4.jpg',
    bio: 'Celebrated makeup artist for bridal elegance, high-fashion editorials, and galas.'
  }
];

const TherapistsPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Our Therapists" activeTitle="Therapists" />

      <section className="therapists-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h1>Meet Our Master Specialists</h1>
            <div className="border mar0auto">
              <span className="flaticon-shape"></span>    
            </div>
            <p style={{ maxWidth: '700px', margin: '15px auto 50px', color: '#777' }}>
              Our licensed, highly trained wellness practitioners and aesthetic artists are dedicated to delivering an unmatched standard of personalized care.
            </p>
          </div>

          <div className="row">
            {therapists.map(t => (
              <div key={t.id} className="col-md-3 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <div className="single-team-member text-center" style={{ background: '#fff', border: '1px solid #eee', paddingBottom: '25px', transition: 'all 0.3s' }}>
                  <div className="img-holder" style={{ overflow: 'hidden', marginBottom: '20px' }}>
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="text-holder" style={{ padding: '0 15px' }}>
                    <h3 style={{ fontSize: '18px', margin: '0 0 5px', color: '#262626' }}>{t.name}</h3>
                    <span style={{ color: '#c59d5f', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>{t.role}</span>
                    <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.6', marginBottom: '15px' }}>{t.bio}</p>
                    <ul className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: 0, listStyle: 'none' }}>
                      <li><a href="#fb" onClick={(e) => e.preventDefault()} style={{ color: '#777' }}><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#tw" onClick={(e) => e.preventDefault()} style={{ color: '#777' }}><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#in" onClick={(e) => e.preventDefault()} style={{ color: '#777' }}><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TherapistsPage;
