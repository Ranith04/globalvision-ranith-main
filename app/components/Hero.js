"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import 'react-phone-input-2/lib/style.css';
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const services = [
    'Company Formation',
    'Business Consulting',
    'PRO Services',
    'Accounting & Bookkeeping',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setForm((prev) => ({ ...prev, mobile: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/home-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Thank you! We will contact you soon.');
        setForm({ name: '', mobile: '', email: '', service: '' });
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video-bg"
        src="/video/dubai_background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Subtle dark overlay for better readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 2
      }} />
      <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            Start Your Own<br />
            Company in <span className="hero-title-accent">Dubai</span>
          </h1>
          <p className="hero-subtitle">
          Establish your company with confidence through Global Vision — your trusted partner for premium office solutions and complete business setup services in Dubai.
          </p>
          <a href="#contact" className="hero-cta-btn" style={{background: '#00c89d', display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            Start Now <span style={{fontSize: '1.2em', marginLeft: '4px'}}>&#8594;</span>
          </a>
        </div>
        <div className="exact-form-container">
          <div className="exact-form-card">
            <h2 className="exact-form-title">Request A Call</h2>
            <form className="exact-form" onSubmit={handleSubmit}>
              <div className="exact-form-group">
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field clean-form-field" style={{ marginBottom: 4 }}>
                <label className="clean-form-label">Mobile Number</label>
                <PhoneInput
                  country={'ae'}
                  value={form.mobile}
                  onChange={handlePhoneChange}
                  inputStyle={{ width: '100%', height: 40, border: '1.5px solid #fff', borderRadius: 999, background: 'transparent', color: '#fff', fontSize: '1rem', paddingLeft: 48, boxShadow: 'none' }}
                  dropdownStyle={{ zIndex: 9999 }}
                  enableSearch
                  placeholder="Mobile number"
                  required
                />
              </div>
              <div className="exact-form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="exact-form-group">
                <label>What Services Are You Looking?</label>
                <div className="exact-services-dropdown" style={{position: 'relative'}}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '8px 32px 8px 0',
                      border: 'none',
                      borderBottom: '1.5px solid #e0e0e0',
                      borderRadius: 0,
                      background: 'transparent',
                      color: '#fff',
                      fontSize: '1rem',
                      appearance: 'none',
                      outline: 'none',
                    }}
                  >
                    <option value="" disabled style={{ color: '#fff', opacity: 0.7 }}>Select a service</option>
                    {services.map((srv) => (
                      <option key={srv} value={srv} style={{ color: '#222' }}>{srv}</option>
                    ))}
                  </select>
                  <FaChevronDown size={10} style={{position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888'}} />
                </div>
              </div>
              <button type="submit" className="exact-callback-btn" disabled={loading}>{loading ? 'Sending...' : 'Request A Callback Now'}</button>
              {message && <div style={{marginTop: 10, color: message.startsWith('Thank') ? 'green' : 'red'}}>{message}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 