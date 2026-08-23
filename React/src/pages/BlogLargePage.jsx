import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';

const blogPosts = [
  {
    id: 1,
    title: 'Therapeutic Yoga for Managing Workplace Stress & Chronic Tension',
    image: '/images/blog/blog-large-1.jpg',
    category: 'Yoga Therapy',
    date: 'April 21, 2026',
    author: 'Dr. Vijay',
    comments: '10 Comments',
    desc: 'Workplace tension manifests physically through stiff cervical spine and chronic musculoskeletal aches. Regular clinical breathwork and alignment asanas significantly downregulate cortisol levels and restore vital equilibrium.'
  },
  {
    id: 2,
    title: 'Understanding Whole-Body Metabolic Detoxification in Naturopathy',
    image: '/images/blog/blog-large-2.jpg',
    category: 'Naturopathy',
    date: 'February 05, 2026',
    author: 'OPD Clinical Team',
    comments: '24 Comments',
    desc: 'How hydrotherapy, living nutrition, and gentle eliminative protocols accelerate cellular rejuvenation and restore gut microbiome balance.'
  }
];

const BlogLargePage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Blog Large" activeTitle="Blog" />

      {/* Start Blog Large Area */}
      <section className="blog-large-area pd-top100 pd-bottom80">
        <div className="container">
          <div className="row">
            
            {/* Start Blog Post Content */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="blog-post">
                {blogPosts.map(post => (
                  <div key={post.id} className="single-blog-item">
                    <div className="img-holder">
                      <img src={post.image} alt={post.title} onError={(e) => { e.target.src = '/images/blog/latest-blog-1.jpg'; }} />
                      <div className="categories">
                        <a href="#cat" onClick={(e) => e.preventDefault()}>{post.category}</a>
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li><a href="#author" onClick={(e) => e.preventDefault()}><i className="fa fa-user" aria-hidden="true"></i>{post.author}</a></li>
                        <li><a href="#date" onClick={(e) => e.preventDefault()}><i className="fa fa-clock-o" aria-hidden="true"></i>{post.date}</a></li>
                        <li><a href="#comments" onClick={(e) => e.preventDefault()}><i className="fa fa-comments" aria-hidden="true"></i>{post.comments}</a></li>
                      </ul>
                      <Link to="/blog-single">
                        <h3 className="blog-title">{post.title}</h3>
                      </Link>
                      <div className="text">
                        <p>{post.desc}</p>
                      </div>
                      <div className="read-more-button">
                        <Link to="/blog-single">Read More <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Post Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <ul className="post-pagination text-center">
                      <li><a href="#prev" onClick={(e) => e.preventDefault()}><i className="fa fa-angle-left" aria-hidden="true"></i></a></li>
                      <li className="active"><a href="#1" onClick={(e) => e.preventDefault()}>1</a></li>
                      <li><a href="#2" onClick={(e) => e.preventDefault()}>2</a></li>
                      <li><a href="#next" onClick={(e) => e.preventDefault()}><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog Post Content */}

            {/* Start Sidebar */}
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper">
                <BlogSidebar />
              </div>
            </div>
            {/* End Sidebar */}

          </div>
        </div>
      </section>
      {/* End Blog Large Area */}
    </MainLayout>
  );
};

export default BlogLargePage;
