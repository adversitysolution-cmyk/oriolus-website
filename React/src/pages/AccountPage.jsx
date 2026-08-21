import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/common/Breadcrumb';

const AccountPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '', remember: false });
  const [registerData, setRegisterData] = useState({ email: '', password: '' });
  const [authMsg, setAuthMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthMsg(`Welcome back, ${loginData.username}! You are now logged in.`);
    setTimeout(() => setAuthMsg(''), 4000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setAuthMsg(`Account successfully created for ${registerData.email}!`);
    setTimeout(() => setAuthMsg(''), 4000);
  };

  return (
    <MainLayout>
      <Breadcrumb title="My Account" activeTitle="Account" />

      <section className="account-area" style={{ padding: '80px 0' }}>
        <div className="container">
          {authMsg && (
            <div style={{ background: '#131d33', color: '#c59d5f', padding: '18px 25px', marginBottom: '35px', textAlign: 'center', borderRadius: '4px', fontWeight: 600, fontSize: '16px' }}>
              ✓ {authMsg}
            </div>
          )}

          <div className="row">
            {/* Login Box */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ marginBottom: '30px' }}>
              <div className="login-box" style={{ background: '#fff', border: '1px solid #eee', padding: '40px' }}>
                <h3 style={{ fontSize: '24px', borderBottom: '2px solid #c59d5f', paddingBottom: '12px', marginBottom: '25px' }}>
                  Login to Your Account
                </h3>
                <form onSubmit={handleLogin}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>Username or email address *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={loginData.username}
                      onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                      style={{ height: '48px' }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>Password *</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      required 
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      style={{ height: '48px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                      <input 
                        type="checkbox" 
                        checked={loginData.remember}
                        onChange={(e) => setLoginData({ ...loginData, remember: e.target.checked })}
                      />
                      <span>Remember me</span>
                    </label>
                    <a href="#lost" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your registered email.'); }} style={{ color: '#c59d5f', fontSize: '13px' }}>
                      Lost your password?
                    </a>
                  </div>
                  <button type="submit" className="thm-btn bgclr-1" style={{ width: '100%', padding: '12px' }}>
                    Log In
                  </button>
                </form>
              </div>
            </div>

            {/* Register Box */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="register-box" style={{ background: '#fff', border: '1px solid #eee', padding: '40px' }}>
                <h3 style={{ fontSize: '24px', borderBottom: '2px solid #c59d5f', paddingBottom: '12px', marginBottom: '25px' }}>
                  Register New Account
                </h3>
                <form onSubmit={handleRegister}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>Email address *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      required 
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      style={{ height: '48px' }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>Password *</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      required 
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      style={{ height: '48px' }}
                    />
                  </div>
                  <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.6', marginBottom: '25px' }}>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                  <button type="submit" className="thm-btn bgclr-1" style={{ width: '100%', padding: '12px' }}>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AccountPage;
