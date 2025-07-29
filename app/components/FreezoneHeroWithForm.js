import React from 'react';
import CallbackForm from './CallbackForm';

export default function FreezoneHeroWithForm({
  title,
  description,
  ctaText = 'Start Now',
  ctaHref = '#callback-form',
  backgroundImage = '/images/hero-bg.jpg',
  children
}) {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)',
      position: 'relative',
      padding: 0
    }}>
      {/* Background cityscape overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${backgroundImage}) center/cover no-repeat`,
        opacity: 0.35,
        zIndex: 1
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 40px',
      }}>
        {/* Left: Heading and CTA */}
        <div style={{ flex: 1, color: '#fff', textAlign: 'left', maxWidth: 540 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.1, marginBottom: 18 }}>
            {title}
          </h1>
          <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.15rem', color: '#e0e6ea', marginBottom: 32, fontWeight: 400, maxWidth: 480 }}>
            {description}
          </p>
          <a href={ctaHref} style={{ background: '#1ec6b6', color: '#fff', padding: '14px 38px', borderRadius: 30, fontWeight: 700, fontSize: '1.15rem', textDecoration: 'none', display: 'inline-block', marginTop: 10, boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>
            {ctaText}
          </a>
          {children}
        </div>
        {/* Right: Callback Form */}
        <div style={{ minWidth: 340, maxWidth: 370, marginLeft: 40, alignSelf: 'flex-start' }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
} 