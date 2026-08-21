import React from 'react';
import { Link } from 'react-router-dom';

const ShopSidebar = ({ onCategorySelect, activeCategory }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="single-sidebar-box" style={{ marginBottom: '35px' }}>
        <div className="sec-title">
          <h3 style={{ fontSize: '18px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '15px' }}>Product Categories</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
          {['All Products', 'Essential Oils', 'Body Scrubs', 'Facial Care', 'Bath Salts', 'Spa Accessories'].map(cat => (
            <li key={cat}>
              <a 
                href="#filter" 
                onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect(cat); }}
                style={{ color: activeCategory === cat ? '#c59d5f' : '#666', fontWeight: activeCategory === cat ? 700 : 400 }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="single-sidebar-box" style={{ marginBottom: '35px' }}>
        <div className="sec-title">
          <h3 style={{ fontSize: '18px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '15px' }}>Top Rated Products</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <img src="/images/shop/1.jpg" alt="Jumping Rope" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
            <div>
              <Link to="/shop-single" style={{ color: '#262626', fontWeight: 600, fontSize: '13px', display: 'block' }}>Jumping Rope</Link>
              <div style={{ color: '#c59d5f', fontSize: '11px', margin: '3px 0' }}>
                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
              </div>
              <span style={{ fontWeight: 700, color: '#131d33', fontSize: '13px' }}>$34.99</span>
            </div>
          </li>
          <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <img src="/images/shop/2.jpg" alt="Running Shoe" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
            <div>
              <Link to="/shop-single" style={{ color: '#262626', fontWeight: 600, fontSize: '13px', display: 'block' }}>Running Shoe</Link>
              <div style={{ color: '#c59d5f', fontSize: '11px', margin: '3px 0' }}>
                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
              </div>
              <span style={{ fontWeight: 700, color: '#131d33', fontSize: '13px' }}>$44.99</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="single-sidebar-box">
        <div style={{ background: '#131d33', color: '#fff', padding: '30px 20px', textAlign: 'center', borderRadius: '4px' }}>
          <span className="flaticon-shape" style={{ fontSize: '40px', color: '#c59d5f', display: 'block', marginBottom: '15px' }}></span>
          <h4 style={{ color: '#c59d5f', marginBottom: '10px' }}>20% Spa Member Discount</h4>
          <p style={{ fontSize: '13px', color: '#ccc', marginBottom: '15px' }}>Use coupon code <strong>SPANZZ20</strong> during checkout to save 20% on all orders!</p>
          <Link className="thm-btn bgclr-1" to="/shop" style={{ padding: '8px 15px', fontSize: '12px' }}>Explore Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
