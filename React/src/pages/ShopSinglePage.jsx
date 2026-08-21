import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const ShopSinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3500);
  };

  return (
    <MainLayout>
      <Breadcrumb title="Product Details" parent="Shop" parentLink="/shop" activeTitle="Jumping Rope" />

      <section className="single-shop-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {/* Product Image */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="single-product-image" style={{ border: '1px solid #eee', padding: '15px', textAlign: 'center' }}>
                <img src="/images/shop/1.jpg" alt="Jumping Rope" style={{ width: '100%', maxWidth: '450px', height: 'auto' }} />
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="single-product-details" style={{ paddingLeft: '20px' }}>
                <h2 style={{ fontSize: '28px', color: '#262626', marginBottom: '10px' }}>Jumping Rope</h2>
                
                <div className="review-box" style={{ color: '#c59d5f', marginBottom: '15px' }}>
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                  <span style={{ color: '#777', marginLeft: '10px', fontSize: '13px' }}>(3 Customer Reviews)</span>
                </div>

                <div className="price" style={{ fontSize: '26px', color: '#c59d5f', fontWeight: 700, marginBottom: '20px' }}>
                  $34.99
                </div>

                <div className="description" style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px' }}>
                  <p>Our premium high-speed jumping rope features ergonomic anti-slip memory foam handles and tangle-free steel wire with ball bearing rotation. Perfect for cardiovascular warm-ups, interval training, and full-body conditioning.</p>
                </div>

                <div style={{ marginBottom: '15px', color: '#555' }}>
                  <strong>Availability:</strong> <span style={{ color: '#4caf50', fontWeight: 600 }}>In Stock</span> (24 units available)
                </div>

                <div style={{ marginBottom: '25px', color: '#555' }}>
                  <strong>SKU:</strong> SPANZ-JMP-001 | <strong>Category:</strong> Spa Accessories
                </div>

                {addedToCart && (
                  <div style={{ background: '#131d33', color: '#c59d5f', padding: '12px 20px', borderRadius: '4px', marginBottom: '20px' }}>
                    ✓ Added {quantity} item(s) to your cart! <Link to="/shopping-cart" style={{ color: '#fff', textDecoration: 'underline', marginLeft: '10px' }}>View Cart</Link>
                  </div>
                )}

                <div className="add-to-cart-box" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd' }}>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{ padding: '10px 15px', background: '#f4f4f4', border: 'none', cursor: 'pointer' }}
                    >-</button>
                    <span style={{ padding: '10px 20px', fontWeight: 600 }}>{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      style={{ padding: '10px 15px', background: '#f4f4f4', border: 'none', cursor: 'pointer' }}
                    >+</button>
                  </div>
                  <button className="thm-btn bgclr-1" onClick={handleAddToCart} style={{ padding: '12px 30px' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-md-12">
              <ul className="nav nav-tabs" style={{ borderBottom: '2px solid #c59d5f', display: 'flex', gap: '5px' }}>
                <li className={activeTab === 'desc' ? 'active' : ''}>
                  <button 
                    onClick={() => setActiveTab('desc')}
                    style={{
                      padding: '12px 25px',
                      background: activeTab === 'desc' ? '#c59d5f' : '#f4f4f4',
                      color: activeTab === 'desc' ? '#fff' : '#333',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Description
                  </button>
                </li>
                <li className={activeTab === 'reviews' ? 'active' : ''}>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    style={{
                      padding: '12px 25px',
                      background: activeTab === 'reviews' ? '#c59d5f' : '#f4f4f4',
                      color: activeTab === 'reviews' ? '#fff' : '#333',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Reviews (3)
                  </button>
                </li>
              </ul>

              <div className="tab-content" style={{ padding: '30px', background: '#fafafa', border: '1px solid #eee', borderTop: 'none' }}>
                {activeTab === 'desc' ? (
                  <div style={{ color: '#666', lineHeight: '1.8' }}>
                    <h4>Product Specifications:</h4>
                    <ul>
                      <li>Cable Length: 3.0 meters (Fully adjustable to any height)</li>
                      <li>Handle Material: Ergonomic anti-slip silicone memory foam</li>
                      <li>Bearing System: 360-degree smooth ball bearing rotation</li>
                      <li>Weight: 280 grams (Optimal balance for speed and endurance)</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h4 style={{ marginBottom: '20px' }}>Customer Reviews for Jumping Rope</h4>
                    <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                      <strong style={{ color: '#262626' }}>David Miller</strong> - <span style={{ color: '#999', fontSize: '12px' }}>March 12, 2026</span>
                      <p style={{ color: '#666', margin: '5px 0 0' }}>Outstanding rope quality! Does not kink or tangle during high intensity intervals.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ShopSinglePage;
