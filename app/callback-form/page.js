import React from 'react';
import CallbackForm from '../components/CallbackForm';

export default function CallbackFormPage() {
  return (
    <section className="hero-section">
      <video
        className="hero-video-bg"
        src="/video/1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 2
      }} />
      <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            Request a Callback<br />
            <span className="hero-title-accent">Global Vision</span>
          </h1>
          <p className="hero-subtitle">
            Transform your business vision into reality with Dubai's leading business setup experts.
          </p>
        </div>
        <div className="exact-form-container">
          <div className="exact-form-card">
            <CallbackForm />
          </div>
        </div>
      </div>
    </section>
  );
} 