"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });
const Select = dynamic(() => import('react-select'), { ssr: false });

export default function CallbackForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('971');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const serviceOptions = [
    { value: '', label: 'Select a service', isDisabled: true },
    { value: 'business-setup', label: 'Business Setup' },
    { value: 'company-formation', label: 'Company Formation' },
    { value: 'license', label: 'License' },
    { value: 'visa', label: 'Visa Services' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/home-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile: phone, email, service })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Thank you! We will contact you soon.');
        setName('');
        setPhone('971');
        setEmail('');
        setService('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="callback-form-container">
      <h2 className="callback-title">Request A Call</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field clean-form-field" style={{ marginBottom: 4 }}>
          <label className="clean-form-label">Name</label>
          <input type="text" className="form-input clean-form-input" value={name} onChange={e => setName(e.target.value)} required placeholder="Name" />
        </div>
        <div className="form-field clean-form-field" style={{ marginBottom: 4 }}>
          <label className="clean-form-label">Mobile Number</label>
          <PhoneInput
            country={'ae'}
            value={phone}
            onChange={setPhone}
            inputStyle={{ width: '100%', height: 36, borderRadius: 12, border: '1.5px solid #e0e0e0', background: '#fff', color: '#222', fontSize: '1rem', paddingLeft: 36 }}
            dropdownStyle={{ zIndex: 9999 }}
            enableSearch
            placeholder="Mobile number"
            required
          />
        </div>
        <div className="form-field clean-form-field" style={{ marginBottom: 4 }}>
          <label className="clean-form-label">Email</label>
          <input type="email" className="form-input clean-form-input" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" />
        </div>
        <div className="form-field clean-form-field" style={{ marginBottom: 16 }}>
          <label className="clean-form-label">What Services Are You Looking?</label>
          <div className="dropdown-wrapper">
            <Select
              instanceId="callback-service-select"
              classNamePrefix="services-select"
              options={serviceOptions}
              value={serviceOptions.find(opt => opt.value === service) || serviceOptions[0]}
              onChange={opt => setService(opt.value)}
              isSearchable={false}
              menuPlacement="top"
              menuPortalTarget={typeof window !== 'undefined' ? document.body : undefined}
              styles={{
                control: (base) => ({
                  ...base,
                  background: '#fff',
                  border: '1.5px solid #e0e0e0',
                  borderRadius: 12,
                  color: '#222',
                  minHeight: 36,
                  boxShadow: 'none',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#222',
                }),
                menu: (base) => ({
                  ...base,
                  background: '#fff',
                  color: '#222',
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(30,198,182,0.08)',
                  marginTop: 2,
                  maxHeight: 220,
                  zIndex: 9999,
                }),
                menuPortal: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
                option: (base, state) => ({
                  ...base,
                  background: state.isFocused ? 'rgba(30,198,182,0.08)' : '#fff',
                  color: '#222',
                  cursor: 'pointer',
                  borderBottom: state.isSelected ? '1px solid #1ec6b6' : 'none',
                  textDecoration: state.isFocused ? 'underline' : 'none',
                }),
                placeholder: (base) => ({
                  ...base,
                  color: '#888',
                  opacity: 1,
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  color: '#1ec6b6',
                }),
                indicatorSeparator: () => ({ display: 'none' }),
                input: (base) => ({
                  ...base,
                  color: '#222',
                }),
              }}
              placeholder="Select a service"
              required
            />
          </div>
        </div>
        <button className="submit-button clean-form-btn" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Request A Callback Now'}
        </button>
        {message && <div style={{ marginTop: 16, color: '#1ec6b6', textAlign: 'center', fontWeight: 600 }}>{message}</div>}
      </form>
    </div>
  );
} 