import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, parent = 'Home', parentLink = '/', activeTitle }) => {
  return (
    <>
      {/* Start breadcrumb area */}
      <section className="breadcrumb-area" style={{ backgroundImage: 'url(/images/resources/breadcrumb-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb area */}

      {/* Start breadcrumb bottom area */}
      <section className="breadcrumb-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-bottom">
                <div className="left pull-left">
                  <ul>
                    <li><Link to={parentLink}>{parent}</Link></li>
                    <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                    <li className="active">{activeTitle || title}</li>
                  </ul>
                </div>
                <div className="right pull-right">
                  <a href="#share" onClick={(e) => e.preventDefault()}>
                    <span><i className="fa fa-share-alt" aria-hidden="true"></i>Share</span> 
                  </a>   
                </div>    
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb bottom area */}
    </>
  );
};

export default Breadcrumb;
