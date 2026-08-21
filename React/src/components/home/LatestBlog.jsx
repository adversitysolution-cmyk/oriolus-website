import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';

const LatestBlog = () => {
  const content = homeContent.latestBlog;

  return (
    <section className="latest-blog-area sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 top">
            <div className="sec-title pull-left">
              <h1>{content.title}</h1>
              <div className="border">
                <span className="flaticon-shape"></span>    
              </div>
            </div>
            <div className="readmore-blog pull-right">
              <Link className="thm-btn bgclr-1" to={content.btnLink}>{content.btnText}</Link>
            </div>
          </div>
        </div>
        <div className="row">
          {content.posts.map(post => (
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
                    <li><Link to={post.link || '/blog-single'}>{post.date}</Link></li>
                    <li><Link to={post.link || '/blog-single'}>{post.comments}</Link></li>
                  </ul>
                  <Link to={post.link || '/blog-single'}>
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
