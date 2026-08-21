import React from 'react';
import { Link } from 'react-router-dom';

const latestPosts = [
  {
    id: 1,
    title: 'Massage thereaphy for managing work place stress',
    image: '/images/blog/latest-blog-1.jpg',
    category: 'Massage',
    date: 'April 21, 2017',
    comments: '10 Comments',
    desc: 'pleasure and praising pain was born I will give you a complete account of the system, and expound actual teachings great.'
  },
  {
    id: 2,
    title: 'When massage may not be a good idea fro you',
    image: '/images/blog/latest-blog-2.jpg',
    category: 'Wellness',
    date: 'February 05, 2017',
    comments: '24 Comments',
    desc: 'pleasure and praising pain was born I will give you a complete account of the system, and expound actual teachings great.'
  },
  {
    id: 3,
    title: 'New theraphy center opened at california',
    image: '/images/blog/latest-blog-3.jpg',
    category: 'Massage',
    date: 'January 14, 2017',
    comments: '18 Comments',
    desc: 'pleasure and praising pain was born I will give you a complete account of the system, and expound actual teachings great.'
  }
];

const LatestBlog = () => {
  return (
    <section className="latest-blog-area sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 top">
            <div className="sec-title pull-left">
              <h1>Latest From Blog</h1>
              <div className="border">
                <span className="flaticon-shape"></span>    
              </div>
            </div>
            <div className="readmore-blog pull-right">
              <Link className="thm-btn bgclr-1" to="/blog-default">Read More</Link>
            </div>
          </div>
        </div>
        <div className="row">
          {latestPosts.map(post => (
            <div key={post.id} className="col-md-4">
              <div className="single-blog-item">
                <div className="img-holder">
                  <img src={post.image} alt={post.title} />
                  <div className="overlay-style-one"></div>
                  <div className="categories">
                    <Link to="/blog-default">{post.category}</Link>
                  </div> 
                </div>
                <div className="text-holder">
                  <ul className="meta-info">
                    <li><Link to="/blog-single">{post.date}</Link></li>
                    <li><Link to="/blog-single">{post.comments}</Link></li>
                  </ul>
                  <Link to="/blog-single">
                    <h3 className="blog-title">{post.title}</h3>
                  </Link>
                  <div className="text">
                    <p>{post.desc}</p>
                  </div>
                </div>    
              </div>    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
