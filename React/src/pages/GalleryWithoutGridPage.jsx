import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const galleryItems = [
  { id: 1, title: 'Therapeutic Yoga Asanas', category: 'Yoga Therapy', image: '/images/projects/1.jpg' },
  { id: 2, title: 'Clinical Naturopathy Detox', category: 'Naturopathy', image: '/images/projects/2.jpg' },
  { id: 3, title: 'Classical Ayurveda Abhyanga', category: 'Ayurveda', image: '/images/projects/3.jpg' },
  { id: 4, title: 'Acupuncture Meridian Therapy', category: 'Acupuncture', image: '/images/projects/4.jpg' },
  { id: 5, title: 'Herbal Swedana Therapy', category: 'Ayurveda', image: '/images/projects/5.jpg' },
  { id: 6, title: 'Authentic Shirodhara Flow', category: 'Ayurveda', image: '/images/projects/6.jpg' }
];

const GalleryWithoutGridPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Gallery Without Grid" activeTitle="Gallery" />

      {/* Start Project Without Grid Area */}
      <section className="project-withoutgrid-area pd-top100 pd-bottom80">
        <div className="container-fluid" style={{ padding: '0 30px' }}>
          <div className="row">
            {galleryItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12" style={{ padding: '15px' }}>
                <div className="single-project-item">
                  <div className="img-holder">
                    <img src={item.image} alt={item.title} />
                    <div className="overlay-style-one">
                      <div className="box">
                        <div className="content">
                          <Link to="/gallery-single">{item.title}</Link>
                          <span className="border"></span>
                          <p>{item.category}</p>
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
      {/* End Project Without Grid Area */}
    </MainLayout>
  );
};

export default GalleryWithoutGridPage;
