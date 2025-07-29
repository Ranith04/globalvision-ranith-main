"use client";
import React, { useState } from 'react';

export default function ContactLeadSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'Failed to send. Try again.');
      }
    } catch (err) {
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <section id="contact" style={{ background: '#f8f9fa', padding: '80px 0 80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Take the First Step</h2>
        <p style={{ color: '#5b6478', fontSize: '1.08rem', marginBottom: 48 }}>Schedule your free consultation today</p>
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ flex: 2, minWidth: 320, maxWidth: 480, textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First Name" style={{ flex: 1, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
              <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Last Name" style={{ flex: 1, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
            </div>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
            <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} style={{ width: '100%', marginBottom: 18, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem', resize: 'vertical' }} />
            <button type="submit" style={{ width: '100%', background: '#1ec6b6', color: '#fff', border: 'none', borderRadius: 6, padding: '14px 0', fontSize: '1.08rem', fontWeight: 600, cursor: 'pointer' }}>Send Message</button>
            {/* Status Message - always visible after submit button */}
            {status && (
              <div style={{ marginTop: 12, color: status === 'Message sent!' ? 'green' : 'red', fontWeight: 600, textAlign: 'center' }}>{status}</div>
            )}
          </form>
          {/* Contact Info & Map */}
          <div style={{ flex: 2, minWidth: 320, maxWidth: 420, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: 12 }}>Contact Information</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18 }}>📍</span>
              <span>Office number 205, Ontario Tower, Business Bay, Dubai</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18 }}>📞</span>
              <span>+971 50 419 3507</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18 }}>✉️</span>
              <span>info@globalvisionuae.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18 }}>⏰</span>
              <span>Mon–Sat, 9:00 AM to 6:00 PM</span>
            </div>
            <img src="/images/dubai-m3.jpg" alt="Dubai Map" style={{ width: '100%', borderRadius: 8, marginTop: 8, objectFit: 'cover', height: 120 }} />
          </div>
        </div>
      </div>
    </section>
  );
} 