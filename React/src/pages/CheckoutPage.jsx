import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [placed, setPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: 'United States (US)',
    address: '',
    city: '',
    state: '',
    postcode: '',
    shipToDifferent: false,
    orderNotes: ''
  });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlaced(true);
  };

  return (
    <MainLayout>
      <Breadcrumb title="Order Checkout" parent="Shop" parentLink="/shop" activeTitle="Checkout" />

      <section className="checkout-area" style={{ padding: '80px 0' }}>
        <div className="container">
          {placed ? (
            <div style={{ background: '#131d33', padding: '60px 40px', color: '#fff', textAlign: 'center', borderRadius: '4px' }}>
              <span className="flaticon-shape" style={{ fontSize: '60px', color: '#c59d5f', display: 'block', marginBottom: '20px' }}></span>
              <h1 style={{ color: '#c59d5f', marginBottom: '15px' }}>Thank You For Your Order!</h1>
              <p style={{ fontSize: '18px', color: '#ddd', maxWidth: '600px', margin: '0 auto 25px' }}>
                Your order <strong>#DS-89241</strong> has been successfully placed. We have emailed your order summary and invoice to <strong>{formData.email || 'your email'}</strong>.
              </p>
              <Link className="thm-btn bgclr-1" to="/shop">Continue Shopping</Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="row">
                {/* Billing Details */}
                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                  <div className="billing-details" style={{ background: '#fff', border: '1px solid #eee', padding: '35px', marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '22px', borderBottom: '2px solid #c59d5f', paddingBottom: '12px', marginBottom: '25px' }}>
                      Billing Details
                    </h3>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>First Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Company Name (Optional)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{ height: '45px' }}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Email Address *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Phone *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Country *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        style={{ height: '45px' }}
                      />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Street Address *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        placeholder="House number and street name"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        style={{ height: '45px' }}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Town / City *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '5px' }}>Postcode / ZIP *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          required 
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          style={{ height: '45px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary & Payment */}
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                  <div className="order-summary" style={{ background: '#f9f8f6', padding: '35px', border: '1px solid #eee' }}>
                    <h3 style={{ fontSize: '22px', borderBottom: '2px solid #c59d5f', paddingBottom: '12px', marginBottom: '20px' }}>
                      Your Order
                    </h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #eee', fontWeight: 700 }}>
                      <span>Product</span>
                      <span>Total</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee', color: '#666' }}>
                      <span>Jumping Rope &times; 1</span>
                      <span>$34.99</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee', color: '#666' }}>
                      <span>Running Shoe &times; 1</span>
                      <span>$44.99</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                      <span>Shipping</span>
                      <span style={{ color: '#4caf50', fontWeight: 600 }}>Free Shipping</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '2px solid #c59d5f', fontSize: '20px', fontWeight: 700, color: '#c59d5f' }}>
                      <span>Order Total</span>
                      <span>$79.98</span>
                    </div>

                    {/* Payment Gateways */}
                    <div className="payment-gateways" style={{ margin: '25px 0' }}>
                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === 'bank'}
                            onChange={() => setPaymentMethod('bank')}
                          />
                          <strong>Direct Bank Transfer</strong>
                        </label>
                        {paymentMethod === 'bank' && (
                          <p style={{ fontSize: '13px', color: '#777', margin: '8px 0 0 25px' }}>
                            Make your payment directly into our bank account. Please use your Order ID as the reference.
                          </p>
                        )}
                      </div>

                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === 'paypal'}
                            onChange={() => setPaymentMethod('paypal')}
                          />
                          <strong>PayPal / Credit Card</strong>
                        </label>
                        {paymentMethod === 'paypal' && (
                          <p style={{ fontSize: '13px', color: '#777', margin: '8px 0 0 25px' }}>
                            Pay securely via PayPal, Visa, MasterCard, or American Express.
                          </p>
                        )}
                      </div>
                    </div>

                    <button type="submit" className="thm-btn bgclr-1" style={{ width: '100%', padding: '15px', fontSize: '16px' }}>
                      Place Order Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default CheckoutPage;
