import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';

const BlogSinglePage = () => {
  const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  return (
    <MainLayout>
      <Breadcrumb title="Blog Single Post" activeTitle="Blog Single" />

      {/* Start Blog Single Area */}
      <section className="blog-single-area pd-top100 pd-bottom80">
        <div className="container">
          <div className="row">
            
            {/* Start Blog Post Content (9 cols) */}
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="blog-post">
                <div className="single-blog-item">
                  <div className="img-holder">
                    <img src="/images/blog/blog-large-1.jpg" alt="Blog Post" onError={(e) => { e.target.src = '/images/blog/latest-blog-1.jpg'; }} />
                  </div>
                  <div className="text-holder">
                    <ul className="meta-info">
                      <li><a href="#author" onClick={(e) => e.preventDefault()}><i className="fa fa-user" aria-hidden="true"></i>Dr. Vijay</a></li>
                      <li><a href="#date" onClick={(e) => e.preventDefault()}><i className="fa fa-clock-o" aria-hidden="true"></i>April 21, 2026</a></li>
                      <li><a href="#comments" onClick={(e) => e.preventDefault()}><i className="fa fa-comments" aria-hidden="true"></i>2 Comments</a></li>
                    </ul>
                    <h3 className="blog-title">Therapeutic Yoga for Managing Workplace Stress &amp; Chronic Tension</h3>
                    <div className="text">
                      <p>
                        In our fast-paced contemporary environment, prolonged seated hours and unrelenting cognitive demands trigger continuous sympathetic nervous activation. This chronic fight-or-flight state leads to muscular spasm, reduced vital lung capacity, and metabolic dysregulation.
                      </p>
                      <p>
                        Therapeutic Yoga at Oriolus Scientific is designed as an individualized clinical intervention. Rather than treating yoga merely as exercise, our practitioners combine anatomical alignment, targeted myofascial release, and conscious pranayama to stimulate the vagus nerve and induce deep parasympathetic recovery.
                      </p>
                      <blockquote>
                        <p>“True healing begins when we understand the individual before prescribing any therapy. The objective is to restore harmony between movement, physiology, and daily lifestyle.”</p>
                        <h4>- Dr. Vijay, Lead Practitioner</h4>
                      </blockquote>
                      <p>
                        Clinical outcomes demonstrate marked reduction in tension headaches, normalized blood pressure, and restored joint mobility within structured multi-week protocols.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="author-box">
                  <div className="img-holder">
                    <img src="/images/team/1.jpg" alt="Author" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }} />
                  </div>
                  <div className="text-holder">
                    <h3>Dr. Vijay</h3>
                    <p>Lead Practitioner at Oriolus Scientific Yoga &amp; Naturopathy Research Center with over 26+ years of clinical excellence in whole-person drugless healing.</p>
                  </div>
                </div>

                {/* Comment Box */}
                <div className="comment-box">
                  <div className="sec-title">
                    <h2>2 Comments</h2>
                  </div>
                  <div className="single-comment-box">
                    <div className="img-holder">
                      <img src="/images/testimonial/1.png" alt="Commenter" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    </div>
                    <div className="text-holder">
                      <div className="top clearfix">
                        <div className="date pull-left">
                          <h5>Sanjay Mehta – May 2, 2026</h5>
                        </div>
                      </div>
                      <p>The personalized alignment techniques completely resolved my chronic lumbar stiffness. Highly recommend this holistic approach!</p>
                    </div>
                  </div>
                </div>

                {/* Add Comment Form */}
                <div className="add-comment-box">
                  <div className="sec-title">
                    <h2>Leave a Comment</h2>
                  </div>
                  {commentSubmitted ? (
                    <div className="alert alert-success">Thank you! Your comment has been submitted for review.</div>
                  ) : (
                    <form id="add-comment-form" onSubmit={(e) => { e.preventDefault(); setCommentSubmitted(true); }}>
                      <div className="row">
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            placeholder="Your Name *" 
                            value={commentForm.name} 
                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} 
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="email" 
                            placeholder="Your Email *" 
                            value={commentForm.email} 
                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })} 
                            required 
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <textarea 
                            placeholder="Your Comment *" 
                            value={commentForm.message} 
                            onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })} 
                            required
                          ></textarea>
                        </div>
                      </div>
                      <button className="thm-btn bgclr-1" type="submit">Post Comment</button>
                    </form>
                  )}
                </div>

              </div>
            </div>
            {/* End Blog Post Content */}

            {/* Start Sidebar (3 cols) */}
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar-wrapper">
                <BlogSidebar />
              </div>
            </div>
            {/* End Sidebar */}

          </div>
        </div>
      </section>
      {/* End Blog Single Area */}
    </MainLayout>
  );
};

export default BlogSinglePage;
