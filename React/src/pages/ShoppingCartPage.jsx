import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const initialCart = [
  { id: 1, title: 'Jumping Rope', price: 34.99, quantity: 1, image: '/images/shop/1.jpg' },
  { id: 2, title: 'Running Shoe', price: 44.99, quantity: 1, image: '/images/shop/2.jpg' }
];

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'SPANZZ20') {
      setDiscount(0.2);
      setCouponMsg('Coupon SPANZZ20 applied: 20% discount granted!');
    } else {
      setCouponMsg('Invalid coupon code. Try code SPANZZ20.');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const total = Math.max(0, subtotal - discountAmount);

  return (
    <MainLayout>
      <Breadcrumb title="Shopping Cart" activeTitle="Cart" />

      <section className="cart-area" style={{ padding: '80px 0' }}>
        <div className="container">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <span className="flaticon-shape" style={{ fontSize: '60px', color: '#c59d5f', display: 'block', marginBottom: '20px' }}></span>
              <h2 style={{ marginBottom: '15px' }}>Your Shopping Cart is Empty</h2>
              <p style={{ color: '#777', marginBottom: '30px' }}>Explore our beauty spa store and find items you love.</p>
              <Link className="thm-btn bgclr-1" to="/shop">Return to Shop</Link>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12">
                {/* Cart Table */}
                <div className="table-responsive">
                  <table className="table" style={{ width: '100%', border: '1px solid #eee', background: '#fff' }}>
                    <thead style={{ background: '#131d33', color: '#fff' }}>
                      <tr>
                        <th style={{ padding: '15px' }}>Remove</th>
                        <th style={{ padding: '15px' }}>Product Image</th>
                        <th style={{ padding: '15px' }}>Product Name</th>
                        <th style={{ padding: '15px' }}>Unit Price</th>
                        <th style={{ padding: '15px' }}>Quantity</th>
                        <th style={{ padding: '15px' }}>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #eee', verticalAlign: 'middle' }}>
                          <td style={{ padding: '15px', textAlign: 'center' }}>
                            <button 
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                              style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', fontSize: '18px' }}
                            >
                              &times;
                            </button>
                          </td>
                          <td style={{ padding: '15px' }}>
                            <img src={item.image} alt={item.title} style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                          </td>
                          <td style={{ padding: '15px', fontWeight: 600, color: '#262626' }}>
                            {item.title}
                          </td>
                          <td style={{ padding: '15px', color: '#c59d5f', fontWeight: 600 }}>
                            ${item.price.toFixed(2)}
                          </td>
                          <td style={{ padding: '15px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ddd' }}>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                style={{ padding: '5px 12px', background: '#f4f4f4', border: 'none', cursor: 'pointer' }}
                              >-</button>
                              <span style={{ padding: '5px 15px', fontWeight: 600 }}>{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                style={{ padding: '5px 12px', background: '#f4f4f4', border: 'none', cursor: 'pointer' }}
                              >+</button>
                            </div>
                          </td>
                          <td style={{ padding: '15px', fontWeight: 700, color: '#131d33' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon & Totals Section */}
                <div className="row" style={{ marginTop: '40px' }}>
                  <div className="col-md-6" style={{ marginBottom: '30px' }}>
                    <form onSubmit={applyCoupon} style={{ display: 'flex', gap: '10px' }}>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Coupon code (e.g. SPANZZ20)" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        style={{ height: '48px', maxWidth: '300px' }}
                      />
                      <button type="submit" className="thm-btn bgclr-1" style={{ padding: '0 25px' }}>
                        Apply Coupon
                      </button>
                    </form>
                    {couponMsg && (
                      <p style={{ marginTop: '10px', color: discount > 0 ? '#4caf50' : '#ff4d4f', fontWeight: 600 }}>
                        {couponMsg}
                      </p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <div className="cart-totals" style={{ background: '#f9f8f6', padding: '30px', border: '1px solid #eee' }}>
                      <h3 style={{ fontSize: '20px', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', marginBottom: '20px' }}>Cart Totals</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <span>Subtotal:</span>
                        <strong style={{ color: '#262626' }}>${subtotal.toFixed(2)}</strong>
                      </div>
                      {discount > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#4caf50' }}>
                          <span>Discount (20%):</span>
                          <strong>-${discountAmount.toFixed(2)}</strong>
                        </div>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <span>Shipping:</span>
                        <strong style={{ color: '#4caf50' }}>Free Standard Shipping</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 700, borderTop: '1px solid #ddd', paddingTop: '15px', color: '#c59d5f' }}>
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      <div style={{ marginTop: '25px' }}>
                        <Link className="thm-btn bgclr-1" to="/checkout" style={{ display: 'block', textAlign: 'center', padding: '14px' }}>
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ShoppingCartPage;
