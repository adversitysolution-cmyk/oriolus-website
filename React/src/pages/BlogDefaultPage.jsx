import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';

const blogPosts = [
  {
    id: 1,
    title: 'Massage thereaphy for managing work place stress',
    image: '/images/blog/latest-blog-1.jpg',
    category: 'Massage',
    date: 'April 21, 2017',
    author: 'Admin',
    comments: '10 Comments',
    desc: 'Workplace tension manifests physically through stiff shoulders and chronic neck ache. Regular targeted bodywork significantly alleviates cortisol levels and restores focus.'
  },
  {
    id: 2,
    title: 'When massage may not be a good idea for you',
    image: '/images/blog/latest-blog-2.jpg',
    category: 'Wellness',
    date: 'February 05, 2017',
    author: 'Elena Gilbert',
    comments: '24 Comments',
    desc: 'Understanding contraindications is essential for client wellness. Learn when acute inflammation, fractures, or fever require postponing deep tissue therapy.'
  },
  {
    id: 3,
    title: 'New theraphy center opened at california',
    image: '/images/blog/latest-blog-3.jpg',
    category: 'Massage',
    date: 'January 14, 2017',
    author: 'Stefan Salvatore',
    comments: '18 Comments',
    desc: 'We are thrilled to announce the opening of our premier oceanfront wellness retreat in California featuring private hydrotherapy suites and botanical cabanas.'
  }
];

const BlogDefaultPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Blog Default" activeTitle="Blog" />

      <section className="blog-page-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="row">
                {blogPosts.map(post => (
                  <div key={post.id} className="col-md-6 col-sm-12" style={{ marginBottom: '40px' }}>
                    <div className="single-blog-item" style={{ border: '1px solid #eee', background: '#fff' }}>
                      <div className="img-holder" style={{ position: 'relative' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                        <div className="categories" style={{ position: 'absolute', bottom: '15px', left: '15px' }}>
                          <span style={{ background: '#c59d5f', color: '#fff', padding: '4px 12px', fontSize: '12px', fontWeight: 600 }}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-holder" style={{ padding: '25px 20px' }}>
                        <ul className="meta-info" style={{ display: 'flex', gap: '15px', padding: 0, listStyle: 'none', fontSize: '12px', color: '#999', marginBottom: '10px' }}>
                          <li><i className="fa fa-calendar" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.date}</li>
                          <li><i className="fa fa-comments" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.comments}</li>
                        </ul>
                        <Link to="/blog-single">
                          <h3 style={{ fontSize: '18px', margin: '0 0 12px', color: '#262626', lineHeight: '1.4' }}>{post.title}</h3>
                        </Link>
                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{post.desc}</p>
                        <Link className="thm-btn bgclr-1" to="/blog-single" style={{ padding: '8px 20px', fontSize: '12px' }}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper" style={{ marginTop: '20px', textAlign: 'center' }}>
                <ul className="page-pagination" style={{ display: 'inline-flex', gap: '8px', padding: 0, listStyle: 'none' }}>
                  <li style={{ padding: '10px 18px', background: '#c59d5f', color: '#fff', fontWeight: 700 }}>1</li>
                  <li style={{ padding: '10px 18px', background: '#f4f4f4', color: '#333', cursor: 'pointer' }}>2</li>
                  <li style={{ padding: '10px 18px', background: '#f4f4f4', color: '#333', cursor: 'pointer' }}>
                    <i className="fa fa-angle-right"></i>
                  </li>
                </ul>
              </div>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogDefaultPage;
