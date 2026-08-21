import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';

const largePosts = [
  {
    id: 1,
    title: 'Massage thereaphy for managing work place stress',
    image: '/images/slides/1.jpg',
    category: 'Massage',
    date: 'April 21, 2017',
    author: 'Elena Gilbert',
    comments: '10 Comments',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 2,
    title: 'When massage may not be a good idea for you',
    image: '/images/slides/2.jpg',
    category: 'Wellness',
    date: 'February 05, 2017',
    author: 'Katherina Pierce',
    comments: '24 Comments',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  }
];

const BlogLargePage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Blog Large View" activeTitle="Blog Large" />

      <section className="blog-large-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              {largePosts.map(post => (
                <div key={post.id} className="single-blog-large-item" style={{ marginBottom: '50px', background: '#fff', border: '1px solid #eee' }}>
                  <div className="img-holder">
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                  </div>
                  <div className="text-holder" style={{ padding: '35px 30px' }}>
                    <ul className="meta-info" style={{ display: 'flex', gap: '20px', padding: 0, listStyle: 'none', fontSize: '13px', color: '#999', marginBottom: '15px' }}>
                      <li><i className="fa fa-user" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.author}</li>
                      <li><i className="fa fa-calendar" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.date}</li>
                      <li><i className="fa fa-folder" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.category}</li>
                      <li><i className="fa fa-comments" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {post.comments}</li>
                    </ul>
                    <Link to="/blog-single">
                      <h2 style={{ fontSize: '24px', margin: '0 0 15px', color: '#262626' }}>{post.title}</h2>
                    </Link>
                    <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px', marginBottom: '25px' }}>{post.desc}</p>
                    <Link className="thm-btn bgclr-1" to="/blog-single">Continue Reading</Link>
                  </div>
                </div>
              ))}
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogLargePage;
