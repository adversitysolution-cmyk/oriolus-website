import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import ShopSidebar from '../components/shop/ShopSidebar';

const shopProducts = [
  { id: 1, title: 'Jumping Rope', price: 34.99, image: '/images/shop/1.jpg', rating: 5, category: 'Spa Accessories' },
  { id: 2, title: 'Running Shoe', price: 44.99, image: '/images/shop/2.jpg', rating: 5, category: 'Spa Accessories' },
  { id: 3, title: 'Botanical Body Scrub', price: 29.99, image: '/images/shop/3.jpg', rating: 5, category: 'Body Scrubs' },
  { id: 4, title: 'Organic Lavender Oil', price: 19.99, image: '/images/shop/4.jpg', rating: 5, category: 'Essential Oils' },
  { id: 5, title: 'Aromatherapy Diffuser', price: 49.99, image: '/images/shop/5.jpg', rating: 5, category: 'Spa Accessories' },
  { id: 6, title: 'Facial Cleansing Gel', price: 24.99, image: '/images/shop/6.jpg', rating: 5, category: 'Facial Care' },
  { id: 7, title: 'Dead Sea Bath Salts', price: 18.99, image: '/images/shop/7.jpg', rating: 5, category: 'Bath Salts' },
  { id: 8, title: 'Botanical Hair Serum', price: 32.99, image: '/images/shop/8.jpg', rating: 5, category: 'Facial Care' },
  { id: 9, title: 'Nail Polish Care Kit', price: 27.99, image: '/images/shop/9.jpg', rating: 5, category: 'Spa Accessories' }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortOrder, setSortOrder] = useState('default');

  let displayedProducts = selectedCategory === 'All Products'
    ? shopProducts
    : shopProducts.filter(p => p.category === selectedCategory);

  if (sortOrder === 'price-low') {
    displayedProducts = [...displayedProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    displayedProducts = [...displayedProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <MainLayout>
      <Breadcrumb title="Our Products" activeTitle="Shop" />

      <section className="shop-area" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="shop-content">
                {/* Sorting Top Bar */}
                <div className="showing-result-shorting clearfix" style={{ marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
                  <div className="showing pull-left" style={{ paddingTop: '8px' }}>
                    <p style={{ margin: 0, color: '#777' }}>Showing {displayedProducts.length} of {shopProducts.length} results</p>
                  </div>
                  <div className="shorting pull-right">
                    <select 
                      className="form-control"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      style={{ height: '40px', width: '200px' }}
                    >
                      <option value="default">Default Sorting</option>
                      <option value="price-low">Sort by Price: Low to High</option>
                      <option value="price-high">Sort by Price: High to Low</option>
                    </select>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="row">
                  {displayedProducts.map(p => (
                    <div key={p.id} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '35px' }}>
                      <div className="single-product-item" style={{ border: '1px solid #eee', background: '#fff', textAlign: 'center' }}>
                        <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                          <img src={p.image} alt={p.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                          <div 
                            className="overlay-style-one"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'rgba(19, 29, 51, 0.75)',
                              opacity: 0,
                              transition: 'all 0.3s',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
                          >
                            <Link className="thm-btn bgclr-1" to="/shopping-cart" style={{ padding: '8px 18px', fontSize: '13px' }}>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                        <div className="title-holder" style={{ padding: '20px 15px' }}>
                          <Link to="/shop-single">
                            <h5 style={{ fontSize: '16px', margin: '0 0 8px', color: '#262626' }}>{p.title}</h5>
                          </Link>
                          <div className="review-box" style={{ color: '#c59d5f', fontSize: '12px', marginBottom: '8px' }}>
                            {[...Array(p.rating)].map((_, i) => (
                              <i key={i} className="fa fa-star" style={{ margin: '0 1px' }}></i>
                            ))}
                          </div>
                          <div className="product-value">
                            <h4 style={{ color: '#c59d5f', margin: 0, fontWeight: 700 }}>${p.price.toFixed(2)}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ShopSidebar 
              onCategorySelect={(cat) => setSelectedCategory(cat)} 
              activeCategory={selectedCategory} 
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ShopPage;
