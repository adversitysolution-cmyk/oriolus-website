import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';

const BlogSinglePage = () => {
  const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Rebecca Turner',
      date: 'April 22, 2017 at 2:15 pm',
      avatar: '/images/testimonial/1.png',
      text: 'This article was tremendously insightful! I suffered from chronic shoulder strain and introducing hot stone therapy once a month made an incredible difference.'
    },
    {
      id: 2,
      author: 'Marcus Vance',
      date: 'April 23, 2017 at 10:40 am',
      avatar: '/images/testimonial/2.png',
      text: 'Great breakdown of contraindications. It is vital that clients speak up about recent injuries before receiving vigorous sports therapy.'
    }
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentForm.name && commentForm.message) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: commentForm.name,
          date: 'Just now',
          avatar: '/images/testimonial/3.png',
          text: commentForm.message
        }
      ]);
      setSubmitted(true);
      setCommentForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <MainLayout>
      <Breadcrumb title="Blog Single Post" parent="Blog" parentLink="/blog-default" activeTitle="Article" />

      <section className="blog-single-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="single-blog-details" style={{ background: '#fff', border: '1px solid #eee', padding: '30px' }}>
                <div className="img-holder" style={{ marginBottom: '25px' }}>
                  <img src="/images/slides/1.jpg" alt="Blog Featured" style={{ width: '100%', borderRadius: '4px' }} />
                </div>
                <ul className="meta-info" style={{ display: 'flex', gap: '20px', padding: 0, listStyle: 'none', fontSize: '13px', color: '#999', marginBottom: '15px' }}>
                  <li><i className="fa fa-user" style={{ marginRight: '5px', color: '#c59d5f' }}></i> Admin</li>
                  <li><i className="fa fa-calendar" style={{ marginRight: '5px', color: '#c59d5f' }}></i> April 21, 2017</li>
                  <li><i className="fa fa-folder" style={{ marginRight: '5px', color: '#c59d5f' }}></i> Massage</li>
                  <li><i className="fa fa-comments" style={{ marginRight: '5px', color: '#c59d5f' }}></i> {comments.length} Comments</li>
                </ul>

                <h1 style={{ fontSize: '28px', color: '#262626', marginBottom: '20px' }}>
                  Massage Therapy For Managing Workplace Stress &amp; Fatigue
                </h1>

                <div className="post-content" style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
                  <p>In modern corporate environments, prolonged desk work, screen glare, and high-pressure deliverables trigger sustained activation of the sympathetic nervous system. The physiological toll includes elevated cortisol, chronic cervical muscle contraction, tension headaches, and impaired immune function.</p>
                  
                  <blockquote style={{ borderLeft: '4px solid #c59d5f', background: '#f9f8f6', padding: '20px 25px', margin: '25px 0', fontStyle: 'italic', color: '#333' }}>
                    "Regular therapeutic bodywork is not an indulgence—it is an essential neurological reset button that restores focus and vital physical stamina."
                  </blockquote>

                  <p>Studies show that just 45 minutes of moderate Swedish massage decreases heart rate, lowers blood pressure, and stimulates serotonin and dopamine production. Adding thermal basalt stones deepens relaxation without requiring traumatic muscular force.</p>
                </div>

                {/* Author Bio */}
                <div className="author-box" style={{ background: '#f9f8f6', padding: '25px', display: 'flex', gap: '20px', alignItems: 'center', margin: '40px 0', border: '1px solid #eee' }}>
                  <img src="/images/team/1.jpg" alt="Author" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ margin: '0 0 5px', color: '#262626' }}>Elena Gilbert</h4>
                    <span style={{ color: '#c59d5f', fontSize: '12px', fontWeight: 600 }}>Senior Wellness Practitioner</span>
                    <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#777' }}>Elena is a certified holistic therapist with over 10 years of clinical experience specializing in tension management and restorative bodywork.</p>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="comments-area" style={{ marginTop: '40px' }}>
                  <h3 style={{ fontSize: '22px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '25px' }}>
                    Discussion ({comments.length})
                  </h3>
                  <div className="comments-list">
                    {comments.map(c => (
                      <div key={c.id} style={{ display: 'flex', gap: '20px', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                        <img src={c.avatar} alt={c.author} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                        <div>
                          <h4 style={{ margin: '0 0 5px', fontSize: '16px' }}>{c.author}</h4>
                          <span style={{ color: '#999', fontSize: '12px', display: 'block', marginBottom: '8px' }}>{c.date}</span>
                          <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{c.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Form */}
                  <div className="leave-comment-form" style={{ marginTop: '40px' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Leave a Comment</h3>
                    {submitted && (
                      <div style={{ background: '#131d33', color: '#c59d5f', padding: '15px', marginBottom: '20px', borderRadius: '4px' }}>
                        Your comment has been posted successfully!
                      </div>
                    )}
                    <form onSubmit={handleCommentSubmit}>
                      <div className="row">
                        <div className="col-md-6" style={{ marginBottom: '15px' }}>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name *" 
                            required 
                            value={commentForm.name}
                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                            style={{ height: '45px' }}
                          />
                        </div>
                        <div className="col-md-6" style={{ marginBottom: '15px' }}>
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Your Email *" 
                            required 
                            value={commentForm.email}
                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                            style={{ height: '45px' }}
                          />
                        </div>
                      </div>
                      <div style={{ marginBottom: '20px' }}>
                        <textarea 
                          className="form-control" 
                          rows="5" 
                          placeholder="Your Comment..." 
                          required 
                          value={commentForm.message}
                          onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        ></textarea>
                      </div>
                      <button type="submit" className="thm-btn bgclr-1">Post Comment</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogSinglePage;
