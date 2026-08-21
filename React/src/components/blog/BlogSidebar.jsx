import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebar = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="default-sidebar-box" style={{ marginBottom: '40px' }}>
        {/* Search */}
        <div className="single-sidebar-widget" style={{ marginBottom: '35px' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              style={{ width: '100%', padding: '12px 45px 12px 15px', border: '1px solid #ddd', borderRadius: '2px' }}
            />
            <button 
              type="submit" 
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', color: '#c59d5f' }}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {/* Categories */}
        <div className="single-sidebar-widget" style={{ marginBottom: '35px' }}>
          <div className="sec-title">
            <h3 style={{ fontSize: '18px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '15px' }}>Categories</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
            <li><Link to="/blog-default" style={{ color: '#666' }}>Body Massage (6)</Link></li>
            <li><Link to="/blog-default" style={{ color: '#666' }}>Facial Treatments (4)</Link></li>
            <li><Link to="/blog-default" style={{ color: '#666' }}>Hydrotherapy &amp; Baths (3)</Link></li>
            <li><Link to="/blog-default" style={{ color: '#666' }}>Nail Art &amp; Care (5)</Link></li>
            <li><Link to="/blog-default" style={{ color: '#666' }}>Wellness Lifestyle (8)</Link></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="single-sidebar-widget" style={{ marginBottom: '35px' }}>
          <div className="sec-title">
            <h3 style={{ fontSize: '18px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '15px' }}>Popular Posts</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <img src="/images/footer/latest-news-1.png" alt="Post 1" style={{ width: '70px', height: '60px', objectFit: 'cover' }} />
              <div>
                <Link to="/blog-single" style={{ color: '#262626', fontWeight: 600, fontSize: '13px', lineHeight: '1.4', display: 'block' }}>
                  Spas &amp; the psychology of well-being...
                </Link>
                <span style={{ fontSize: '12px', color: '#999' }}>August 24, 2017</span>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <img src="/images/footer/latest-news-2.png" alt="Post 2" style={{ width: '70px', height: '60px', objectFit: 'cover' }} />
              <div>
                <Link to="/blog-single" style={{ color: '#262626', fontWeight: 600, fontSize: '13px', lineHeight: '1.4', display: 'block' }}>
                  Two massages are better than one...
                </Link>
                <span style={{ fontSize: '12px', color: '#999' }}>February 05, 2017</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Tag Cloud */}
        <div className="single-sidebar-widget">
          <div className="sec-title">
            <h3 style={{ fontSize: '18px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '15px' }}>Popular Tags</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Spa', 'Massage', 'Organic', 'Beauty', 'Detox', 'Oils', 'Skin', 'Relax'].map(tag => (
              <Link 
                key={tag} 
                to="/blog-default" 
                style={{ padding: '5px 12px', background: '#f4f4f4', color: '#666', fontSize: '12px', borderRadius: '2px' }}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
