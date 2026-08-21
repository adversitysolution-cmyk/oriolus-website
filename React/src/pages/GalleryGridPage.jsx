import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const galleryItems = [
  { id: 1, title: 'Hot Stone Therapy', category: 'massage', image: '/images/projects/1.jpg' },
  { id: 2, title: 'Botanical Facial Cleanse', category: 'facial', image: '/images/projects/2.jpg' },
  { id: 3, title: 'Luxury Spa Manicure', category: 'pedicure', image: '/images/projects/3.jpg' },
  { id: 4, title: 'Mineral Salt Hydrotherapy', category: 'relaxation', image: '/images/projects/4.jpg' },
  { id: 5, title: 'Bridal Beauty Artistry', category: 'makeup', image: '/images/projects/5.jpg' },
  { id: 6, title: 'Holistic Scalp Therapy', category: 'massage', image: '/images/projects/6.jpg' },
  { id: 7, title: 'Organic Herbal Wrap', category: 'relaxation', image: '/images/projects/7.jpg' },
  { id: 8, title: 'Anti-Aging Collagen Infusion', category: 'facial', image: '/images/projects/8.jpg' },
  { id: 9, title: 'Custom Nail Art Design', category: 'pedicure', image: '/images/projects/9.jpg' }
];

const categories = [
  { label: 'All Works', value: 'all' },
  { label: 'Massage', value: 'massage' },
  { label: 'Facial', value: 'facial' },
  { label: 'Pedicure & Nails', value: 'pedicure' },
  { label: 'Relaxation', value: 'relaxation' },
  { label: 'Makeup', value: 'makeup' }
];

const GalleryGridPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <MainLayout>
      <Breadcrumb title="Gallery Grid View" activeTitle="Gallery" />

      <section className="gallery-area" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Filter Navigation */}
          <div className="row">
            <div className="col-md-12 text-center" style={{ marginBottom: '40px' }}>
              <ul className="post-filter list-inline" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {categories.map(cat => (
                  <li 
                    key={cat.value}
                    onClick={() => setActiveFilter(cat.value)}
                    style={{
                      cursor: 'pointer',
                      padding: '8px 20px',
                      background: activeFilter === cat.value ? '#c59d5f' : '#f4f4f4',
                      color: activeFilter === cat.value ? '#fff' : '#333',
                      fontWeight: 600,
                      borderRadius: '2px',
                      transition: 'all 0.3s'
                    }}
                  >
                    <span>{cat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery Items Grid */}
          <div className="row">
            {filteredItems.map(item => (
              <div key={item.id} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                <div className="single-project-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                  <div className="img-holder">
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                    <div 
                      className="overlay-style-one"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(19, 29, 51, 0.85)',
                        opacity: 0,
                        transition: 'all 0.4s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
                    >
                      <h4 style={{ color: '#fff', marginBottom: '15px' }}>{item.title}</h4>
                      <div style={{ display: 'flex', gap: '15px' }}>
                        <button 
                          onClick={() => setLightboxImage(item.image)}
                          aria-label="Preview full image"
                          style={{
                            background: '#c59d5f',
                            color: '#fff',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer'
                          }}
                        >
                          <i className="fa fa-search-plus"></i>
                        </button>
                        <Link 
                          to="/gallery-single"
                          style={{
                            background: '#fff',
                            color: '#131d33',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%'
                          }}
                        >
                          <i className="fa fa-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.9)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <img src={lightboxImage} alt="Enlarged preview" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '4px', boxShadow: '0 0 30px rgba(0,0,0,0.8)' }} />
          <button 
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '30px',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
        </div>
      )}
    </MainLayout>
  );
};

export default GalleryGridPage;
