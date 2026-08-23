import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const galleryItems = [
  { id: 1, title: 'Therapeutic Yoga Asanas', category: 'yoga', categoryName: 'Yoga Therapy', image: '/images/projects/1.jpg' },
  { id: 2, title: 'Clinical Naturopathy Detox', category: 'naturopathy', categoryName: 'Naturopathy', image: '/images/projects/2.jpg' },
  { id: 3, title: 'Classical Ayurveda Abhyanga', category: 'ayurveda', categoryName: 'Ayurveda', image: '/images/projects/3.jpg' },
  { id: 4, title: 'Acupuncture Meridian Therapy', category: 'acupuncture', categoryName: 'Acupuncture', image: '/images/projects/4.jpg' },
  { id: 5, title: 'Herbal Swedana Therapy', category: 'ayurveda', categoryName: 'Ayurveda', image: '/images/projects/5.jpg' },
  { id: 6, title: 'Authentic Shirodhara Flow', category: 'ayurveda', categoryName: 'Ayurveda', image: '/images/projects/6.jpg' },
  { id: 7, title: 'Hydrothermal Water Therapy', category: 'naturopathy', categoryName: 'Naturopathy', image: '/images/projects/7.jpg' },
  { id: 8, title: 'Spinal Alignment Work', category: 'yoga', categoryName: 'Yoga Therapy', image: '/images/projects/8.jpg' },
  { id: 9, title: 'Herbal Mud Therapy Pack', category: 'naturopathy', categoryName: 'Naturopathy', image: '/images/projects/9.jpg' }
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Yoga Therapy', value: 'yoga' },
  { label: 'Naturopathy', value: 'naturopathy' },
  { label: 'Ayurveda', value: 'ayurveda' },
  { label: 'Acupuncture', value: 'acupuncture' }
];

const GalleryGridPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <MainLayout>
      <Breadcrumb title="Gallery Grid View" activeTitle="Gallery" />

      {/* Start Main Project Area */}
      <section className="main-project-area pd-top100 pd-bottom80">
        <div className="container">
          
          {/* Post Filter */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="post-filter list-inline text-center" style={{ marginBottom: '50px' }}>
                {categories.map(cat => (
                  <li 
                    key={cat.value}
                    className={`filter ${activeFilter === cat.value ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.value)}
                    style={{ cursor: 'pointer', margin: '0 8px' }}
                  >
                    <span>{cat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Items Grid */}
          <div className="row">
            {filteredItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="single-project-item">
                  <div className="img-holder">
                    <img src={item.image} alt={item.title} />
                    <div className="overlay-style-one">
                      <div className="box">
                        <div className="content">
                          <Link to="/gallery-single">{item.title}</Link>
                          <span className="border"></span>
                          <p>{item.categoryName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* End Main Project Area */}
    </MainLayout>
  );
};

export default GalleryGridPage;
