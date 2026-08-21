import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const masonryItems = [
  { id: 1, title: 'Deep Tissue Relaxation', image: '/images/projects/1.jpg', height: '340px' },
  { id: 2, title: 'Organic Skin Polish', image: '/images/projects/2.jpg', height: '260px' },
  { id: 3, title: 'Signature Pedicure', image: '/images/projects/3.jpg', height: '380px' },
  { id: 4, title: 'Lavender Essential Bath', image: '/images/projects/4.jpg', height: '290px' },
  { id: 5, title: 'Bridal Glamour Styling', image: '/images/projects/5.jpg', height: '350px' },
  { id: 6, title: 'Scalp Acupressure', image: '/images/projects/6.jpg', height: '280px' }
];

const GalleryWithoutGridPage = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <MainLayout>
      <Breadcrumb title="Gallery Without Grid" activeTitle="Gallery Masonry" />

      <section className="gallery-masonry-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {masonryItems.map(item => (
              <div key={item.id} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: item.height, objectFit: 'cover', display: 'block' }} />
                  <div 
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
                    <button 
                      onClick={() => setLightboxImage(item.image)}
                      style={{
                        background: '#c59d5f',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '2px',
                        cursor: 'pointer'
                      }}
                    >
                      Enlarge View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <img src={lightboxImage} alt="Enlarged" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '4px' }} />
        </div>
      )}
    </MainLayout>
  );
};

export default GalleryWithoutGridPage;
