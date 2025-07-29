import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function OtherFreezonesPage() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', padding: 0, background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'url(/images/hero-bg.jpg) center/cover no-repeat',
          opacity: 0.25,
          zIndex: 1
        }} />
        <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 1200, margin: '0 auto', padding: '0 40px', minHeight: '100vh' }}>
          <div className="hero-content" style={{ flex: 1, color: '#fff', textAlign: 'center', maxWidth: 700 }}>
            <h1 className="hero-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Other Freezones
            </h1>
            <p className="hero-subtitle" style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.25rem', color: '#d1d5db', marginBottom: 36, fontWeight: 400 }}>
              Explore business opportunities in Ras Al Khaimah, Ajman, and Umm Al Quwain Freezones.
            </p>
          </div>
        </div>
      </section>
      <ContactLeadSection />
    </>
  );
} 