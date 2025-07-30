import React from 'react';
import ContactLeadSection from '../../../components/ContactLeadSection';
import FAQList from '../../../components/FAQList';
import Navbar from '../../../components/Navbar';

// Import mobile responsive CSS
import '../../../../styles/meydan-responsive.css';

export default function MeydanFreezonePage() {
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
          background: 'url(/images/backgroundimg.png) center/cover no-repeat',
          opacity: 0.25,
          zIndex: 1
        }} />
         <div style={{
           position: 'relative',
           zIndex: 2,
           display: 'flex',
           justifyContent: 'flex-start',
           alignItems: 'center',
           width: '100%',
           maxWidth: 1200,
           margin: '0 auto',
           padding: '0 60px',
        }}>
           {/* Left-aligned: Heading and Description */}
           <div style={{ color: '#fff', textAlign: 'left', maxWidth: 900 }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 40 }}>
              Meydan Freezone<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Set up your business in the heart of Dubai’s most prestigious free zone, a visionary initiative by His Highness Sheikh Mohammed bin Rashid Al Maktoum. This premium location offers world-class infrastructure, seamless connectivity, and a dynamic environment tailored for innovation and enterprise. With its strategic position between key global markets, businesses gain access to international trade routes and networking opportunities. The free zone fosters growth through investor-friendly policies, 100% foreign ownership, zero corporate tax, and simplified company setup processes. It’s the perfect destination for startups, SMEs, and multinational corporations aiming for sustainable success in the UAE and beyond.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Meydan Free Zone Dubai Section */}
      <section style={{ background: '#f7fafd', padding: '64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, color: '#222' }}>
            Why Choose Meydan Free Zone Dubai?
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Dubai is full of life with Meydan Free Zone - the heart of Dubai, designed to meet<br />
            the best standards of international business forum.
          </p>
          <div
            className="meydan-features-row"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 28,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {/* Card 1 */}
            <div className="meydan-feature-card" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '20px 10px', flex: '0 0 25%', maxWidth: '25%', minWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 16 }}> <span role="img" aria-label="location">📈</span> </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#222' }}>Strategic Location</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Centrally located in Dubai with excellent connectivity to Dubai International Airport, making it ideal for work, play, shop, live, learn and grow.
              </div>
            </div>
            {/* Card 2 */}
            <div className="meydan-feature-card" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '20px 10px', flex: '0 0 25%', maxWidth: '25%', minWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 16 }}> <span role="img" aria-label="infrastructure">🛡️</span> </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#222' }}>Advanced Infrastructure</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                World-class amenities including luxurious hotels, business parks, residential villas, sports grounds, schools, hospitals, and shopping venues.
              </div>
            </div>
            {/* Card 3 */}
            <div className="meydan-feature-card" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '20px 10px', flex: '0 0 25%', maxWidth: '25%', minWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 16 }}> <span role="img" aria-label="ownership">💲</span> </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#222' }}>100% Foreign Ownership</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Liberal policies allowing 100% foreign ownership with no capital deposit requirements and flexi-desk options for smooth operations.
              </div>
            </div>
            {/* Card 4 */}
            <div className="meydan-feature-card" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '20px 10px', flex: '0 0 25%', maxWidth: '25%', minWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 16 }}> <span role="img" aria-label="services">🔓</span> </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#222' }}>Unique Services</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Innovative features like Meydan Pay virtual wallet, Meydan Plus online services, and Meydan Commerce e-commerce platform visibility.
              </div>
            </div>
          </div>
          {/* Responsive styles for stacking on small screens */}
          <style>{`
            @media (max-width: 900px) {
              .meydan-features-row {
                flex-wrap: wrap !important;
              }
              .meydan-feature-card {
                flex: 1 1 100% !important;
                max-width: 100% !important;
                margin-bottom: 18px;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Meydan Free Zone License Types Section */}
      <section style={{ background: '#fff', padding: '56px 0 64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Meydan <span style={{ fontStyle: 'italic' }}>Free Zone License Types</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            MFZ follows liberal policies and offers licenses to all business sectors apart from heavy industries. Choose from our comprehensive license options.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Consulting License */}
            <div style={{ flex: '1 1 40%', minWidth: 280, maxWidth: 420, border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '28px 22px', background: '#fafdff', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 14, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Consulting License</div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0 }}>
                <li>Auditing services</li>
                <li>Management consulting</li>
                <li>Business setup assistance</li>
                <li>Financial advisory</li>
                <li>Human resources consulting</li>
                <li>Professional expertise</li>
              </ul>
            </div>
            {/* Commercial License */}
            <div style={{ flex: '1 1 40%', minWidth: 280, maxWidth: 420, border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '28px 22px', background: '#fafdff', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 14, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Commercial License</div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0 }}>
                <li>Import/export operations</li>
                <li>Supply chain management</li>
                <li>Distribution services</li>
                <li>Trading activities</li>
                <li>Goods handling</li>
                <li>Commercial operations</li>
              </ul>
            </div>
            {/* Media License */}
            <div style={{ flex: '1 1 40%', minWidth: 280, maxWidth: 420, border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '28px 22px', background: '#fafdff', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 14, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Media License</div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0 }}>
                <li>Creative content production</li>
                <li>Media services</li>
                <li>Digital marketing</li>
                <li>Advertising services</li>
                <li>Publishing services</li>
                <li>Entertainment industry</li>
              </ul>
            </div>
            {/* Unique MFZ Features */}
            <div style={{ flex: '1 1 40%', minWidth: 280, maxWidth: 420, border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '28px 22px', background: '#fafdff', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 14, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Unique MFZ Features</div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0 }}>
                <li>Meydan Free Plus virtual wallet</li>
                <li>Meydan Plus online services</li>
                <li>Meydan Commerce e-commerce</li>
                <li>1500+ business license options</li>
                <li>Flexi-desk availability</li>
                <li>No mandatory capital deposit</li>
              </ul>
            </div>
          </div>
          {/* Responsive grid for mobile */}
          <style>{`
            @media (max-width: 900px) {
              .meydan-license-types-row {
                flex-direction: column !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Advantages of Meydan Free Zone Section */}
      <section style={{ background: '#f9fafb', padding: '40px 0 48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 8px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Advantages of <span style={{ fontStyle: 'italic' }}>Meydan Free Zone</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            A vision of MFZ to contribute to Dubai's success is supported by liberal policies of the government and an easy registration facility. Have a glance of advantages:
          </p>
          <div className="meydan-advantages-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* 1 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🗝️</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>100% Foreign Ownership</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete ownership permissions for international investors</div>
            </div>
            {/* 2 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>📍</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Prominent Location</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic positioning in the heart of Dubai</div>
            </div>
            {/* 3 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🛡️</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Advanced Infrastructure</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>World-class infrastructure and communication facilities</div>
            </div>
            {/* 4 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🪑</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Flexi-desk Availability</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Smooth functioning from anywhere with flexible workspace options</div>
            </div>
            {/* 5 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>💸</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Tax Relaxation</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Benefits in corporate and personal tax structures</div>
            </div>
            {/* 6 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🛡️</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Government Support</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Full support from government and regulatory authorities</div>
            </div>
            {/* 7 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>📄</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>1500+ Business Licenses</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Extensive range of business license options to choose from</div>
            </div>
            {/* 8 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🔁</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>No Repatriation Limits</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>No limitation on repatriation of capital gains</div>
            </div>
            {/* 9 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>💰</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>No Mandatory Capital</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Capital deposit is not mandatory for setup</div>
            </div>
            {/* 10 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>📈</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Growth-Oriented Zone</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Highly growth-oriented and safe business environment</div>
            </div>
            {/* 11 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>📝</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Easy License Process</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Simple procedures to obtain Meydan freezone licenses</div>
            </div>
            {/* 12 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🔎</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Transparent Formation</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Easy and transparent company formation process</div>
            </div>
            {/* 13 */}
            <div style={{ flex: '1 1 21%', minWidth: 220, maxWidth: 270, border: '1.2px solid #e0f7f4', borderRadius: 10, background: '#fafdff', padding: '14px 12px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, color: '#1ec6b6', marginBottom: 8 }}>🌐</span>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Vibrant Community</div>
              <div style={{ color: '#3a4a5a', fontSize: '0.98rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Dynamic market with vibrant business community</div>
            </div>
          </div>
          {/* Responsive grid for mobile */}
          <style>{`
            .meydan-advantages-row {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 22px;
              justify-content: center;
              align-items: stretch;
            }
            @media (max-width: 1200px) {
              .meydan-advantages-row {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 700px) {
              .meydan-advantages-row {
                grid-template-columns: 1fr;
              }
            }
            .meydan-advantages-row > div {
              min-width: 0;
              margin-bottom: 0;
            }
          `}</style>
        </div>
      </section>
      {/* Why MFZ is Unique for Business Setup Section */}
      <section style={{ background: '#fff', padding: '56px 0 64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 40 }}>
          {/* Left: Text Content */}
          <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 540 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 12, color: '#222' }}>
              Why MFZ is Unique for Business Setup
            </h2>
            <p style={{ color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              MFZ is outstanding in many perspectives but the most unique feature of the Meydan free zone is its innovative and extraordinary interface designed for the investors. It is technologically advanced and has facilities that make things easier for global investors.
            </p>
            <p style={{ color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              The dynamic environment for business setup in Meydan freezone is suitable for leading giants as well as start-ups, freelancers and SMEs.
            </p>
            {/* Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {/* Meydan Pay Benefits */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ color: '#1ec6b6', fontSize: 28, marginTop: 2, display: 'flex', alignItems: 'center' }}>
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#E0F7F4"/><path d="M7 12h10M7 12V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2M7 12v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 2 }}>Meydan Pay Benefits</div>
                  <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    Virtual wallet with IBAN for easy and quick payments, hassle-free transactions, and seamless invoice generation.
                  </div>
                </div>
              </div>
              {/* Meydan Plus */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ color: '#1ec6b6', fontSize: 28, marginTop: 2, display: 'flex', alignItems: 'center' }}>
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#E0F7F4"/><path d="M12 7v10M17 12H7" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 2 }}>Meydan Plus</div>
                  <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    Online services for corporate banking, dependent visa applications, and many more services available from anywhere.
                  </div>
                </div>
              </div>
              {/* Meydan Commerce */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ color: '#1ec6b6', fontSize: 28, marginTop: 2, display: 'flex', alignItems: 'center' }}>
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#E0F7F4"/><path d="M7 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6M7 17h10M7 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6M7 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 2 }}>Meydan Commerce</div>
                  <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    E-commerce platform visibility on reputed platforms like Amazon and Noon with business license customization.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 540, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 0' }}>
            <img src="/images/meydan-1.avif" alt="Meydan Free Zone Cityscape" style={{ width: '100%', maxWidth: 480, height: 500, objectFit: 'cover', borderRadius: 12, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', marginLeft: 60, marginTop: 50 }} />
          </div>
        </div>
      </section>
      {/* Only Three Steps Away from Your Business Section */}
      <section style={{ background: '#f2f8fc', padding: '56px 0 64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Only Few Steps Away from Your Business
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Meydan Free Zone offers an easy and transparent company formation process with innovative digital solutions for global investors.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {/* Step 1 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>01</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif', marginRight: 10 }}>Choose License Type</span>
                <span style={{ color: '#1ec6b6', fontSize: 15, fontWeight: 600, background: '#e0f7f4', borderRadius: 8, padding: '4px 12px', marginLeft: 8 }}></span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Select from Consulting, Commercial, or Media license based on your business activities and requirements.
              </div>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>02</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif' }}>Portal Registration</span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Access the Meydan customer portal at portal.meydanfz.ae and create your account for first-time visitors.
              </div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>03</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif' }}>License Application</span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Complete your business license application through the customer portal with all required documentation.
              </div>
            </div>
            {/* Step 4 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>04</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif' }}>Meydan Pay Setup</span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Customize your license by setting up IBAN with Meydan Pay virtual wallet for easy transactions.
              </div>
            </div>
            {/* Step 5 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>05</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif' }}>Additional Services</span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Opt for Meydan Plus for banking services, visa applications, and Meydan Commerce for e-commerce platform visibility.
              </div>
            </div>
            {/* Step 6 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 22px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>06</span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#0e3c5d', fontFamily: 'Playfair Display, serif' }}>Business Activation</span>
              </div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Receive your official license and start operating your business in Dubai's most prestigious free zone.
              </div>
            </div>
          </div>
          {/* Responsive grid for mobile */}
          <style>{`
            @media (max-width: 900px) {
              div[style*='grid-template-columns: repeat(3, 1fr)'] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Why Choose Global Vision Services Section */}
      <section style={{ background: 'linear-gradient(90deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '56px 0 64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#17323b' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#e0f7f4', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your trusted partner for seamless business setup in Meydan Free Zone with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
            {/* Customised Solutions */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 18px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
              <span style={{ color: '#1ec6b6', fontSize: 32, marginBottom: 14 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#E0F7F4"/><path d="M16 10v12M10 16h12" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 6, textAlign: 'center' }}>Customised Solutions</div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center' }}>
                Tailored business solutions designed specifically for your unique requirements and objectives.
              </div>
            </div>
            {/* Experienced Consultants */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 18px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
              <span style={{ color: '#1ec6b6', fontSize: 32, marginBottom: 14 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#E0F7F4"/><path d="M16 20c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 6, textAlign: 'center' }}>Experienced Consultants</div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center' }}>
                Expert consultants with deep local knowledge and years of experience in UAE business setup.
              </div>
            </div>
            {/* Hassle-Free Procedure */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 18px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
              <span style={{ color: '#1ec6b6', fontSize: 32, marginBottom: 14 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#E0F7F4"/><path d="M24 12l-8.5 8.5-4.5-4.5" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 6, textAlign: 'center' }}>Hassle-Free Procedure</div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center' }}>
                Streamlined process that eliminates complications and ensures smooth business registration.
              </div>
            </div>
            {/* Multiple Payment Options */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 18px', boxShadow: '0 2px 12px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
              <span style={{ color: '#1ec6b6', fontSize: 32, marginBottom: 14 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#E0F7F4"/><rect x="10" y="14" width="12" height="8" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M14 18h4" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 6, textAlign: 'center' }}>Multiple Payment Options</div>
              <div style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center' }}>
                Flexible payment methods to accommodate your preferences and financial requirements.
              </div>
            </div>
          </div>
          {/* Responsive grid for mobile */}
          <style>{`
            @media (max-width: 1100px) {
              div[style*='grid-template-columns: repeat(4, 1fr)'] {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 700px) {
              div[style*='grid-template-columns: repeat(4, 1fr)'] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* UAE Free Zone Locations Section */}
      <section style={{ background: '#f2f8fc', padding: '56px 0 64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, flexWrap: 'nowrap', paddingLeft: '40px' }}>
            {/* Left List - Moved more to the left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 180, marginRight: '30px', flexShrink: 0 }}>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>RAKEZ</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>SRTIP Free Zone</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>JAFZA</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>DMCC</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>Ajman Media City</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>IFZA DSO</div>
            </div>
            {/* Center Image - Moved more to the left */}
            <div style={{ minWidth: 350, maxWidth: 500, flex: '1 1 500px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px', flexShrink: 0 }}>
              <img src="/images/meydan-2.avif" alt="Meydan Free Zone Cityscape" style={{ width: '100%', maxWidth: 480, borderRadius: 16, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', objectFit: 'cover', aspectRatio: '1.3/1' }} />
            </div>
            {/* Right List - Positioned to the right side of the image */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 180, marginLeft: '20px', flexShrink: 0 }}>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>Sharjah Media City</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>DWTC</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>Fujairah Creative City</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>DIFC Free Zone</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>Sharjah Publishing City</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.12rem', color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}><span style={{ color: '#1ec6b6', fontSize: 20, marginRight: 14 }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#E0F7F4"/><path d="M10 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.5-4.5 7.5-4.5 7.5s-4.5-5-4.5-7.5A4.5 4.5 0 0 1 10 5.5zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/></svg></span>SAIF Zone</div>
            </div>
          </div>
          {/* Responsive styles for mobile */}
          <style>{`
            @media (max-width: 1100px) {
              div[style*='flex-direction: column'] {
                flex-direction: row !important;
              }
              div[style*='flex-wrap: wrap'] {
                flex-direction: column !important;
                align-items: center !important;
              }
            }
            @media (max-width: 900px) {
              div[style*='flex-wrap: wrap'] {
                flex-direction: column !important;
                align-items: center !important;
              }
              div[style*='min-width: 320px'] {
                min-width: 220px !important;
                max-width: 100% !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Documents Required for Meydan Free Zone Setup Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Documents Required for Meydan Free Zone Setup
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Ensure you have all necessary documentation ready for a smooth registration process in Meydan Free Zone Dubai.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 44 }}>
            {/* Personal Documents */}
            <div style={{ background: '#fcfeff', borderRadius: 22, padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 22 }}>
                  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="6" fill="#E0F7F4"/><path d="M6 9h10M6 13h6M6 17h10" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Personal Documents</span>
              </div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none', width: '100%' }}>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Valid passport copies of all shareholders</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Passport-size photographs</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>No Objection Certificate (if applicable)</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Educational certificates for professional activities</li>
              </ul>
            </div>
            {/* Business Documents */}
            <div style={{ background: '#fcfeff', borderRadius: 22, padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 22 }}>
                  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="6" fill="#E0F7F4"/><path d="M6 9h10M6 13h6M6 17h10" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Business Documents</span>
              </div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none', width: '100%' }}>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Business plan and activity description</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Company name reservation</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Memorandum of Association (MOA)</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Articles of Association if applicable</li>
              </ul>
            </div>
            {/* License Specific */}
            <div style={{ background: '#fcfeff', borderRadius: 22, padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 22 }}>
                  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="6" fill="#E0F7F4"/><path d="M11 6v10M16 11H6" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>License Specific</span>
              </div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none', width: '100%' }}>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Consulting: Professional qualifications</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Commercial: Trading activity details</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Media: Creative portfolio submission</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Sector-specific compliance documents</li>
              </ul>
            </div>
            {/* Digital Setup */}
            <div style={{ background: '#fcfeff', borderRadius: 22, padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 22 }}>
                  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="6" fill="#E0F7F4"/><path d="M6 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6M6 17h10M6 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6M6 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" stroke="#1ec6b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.08rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d' }}>Digital Setup</span>
              </div>
              <ul style={{ color: '#3a4a5a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none', width: '100%' }}>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Meydan customer portal registration</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>IBAN setup for Meydan Pay</li>
                <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>E-commerce platform requirements</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}><span style={{ color: '#1ec6b6', fontSize: 18, marginTop: 4 }}>●</span>Digital signature authorization</li>
              </ul>
            </div>
          </div>
          {/* Responsive grid for mobile */}
          <style>{`
            @media (max-width: 900px) {
              div[style*='grid-template-columns: repeat(2, 1fr)'] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section style={{ background: '#fafbfc', padding: '64px 0 80px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#222', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Get answers to common questions about business setup in Meydan Free Zone Dubai.
          </p>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <FAQList
              faqs={[
                {
                  question: 'Why is Meydan Free Zone unique for business setup?',
                  answer: 'Meydan offers 100% ownership, a premium Dubai address, and fast online licensing.'
                },
                {
                  question: 'What license types are available in Meydan?',
                  answer: 'Meydan offers commercial, consultancy, media, and e-commerce licenses.'
                },
                {
                  question: 'How does Meydan Pay work?',
                  answer: 'Meydan Pay is a digital banking solution that enables companies to open business accounts quickly.'
                },
                {
                  question: 'What is Meydan Commerce?',
                  answer: 'Meydan Commerce is a platform to support e-commerce businesses with tools and marketplace access.'
                },
                {
                  question: 'Is capital deposit mandatory?',
                  answer: 'No, Meydan Free Zone does not require a minimum capital deposit for company setup.'
                },
                {
                  question: 'What makes MFZ strategically located?',
                  answer: "It's just minutes from Downtown Dubai, Dubai International Airport, and major business hubs."
                },
                {
                  question: 'Can Global Vision help with Meydan setup?',
                  answer: 'Yes, Global Vision provides complete assistance with company registration, licensing, and compliance in Meydan.'
                }
              ]}
            />
          </div>
        </div>
      </section>
      {/* Take the First Step Section */}
      <ContactLeadSection />
      {/* Footer Section - Exact Match */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Meydan Free Zone<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Services</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Company Formation</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business License</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Bank Account Opening</div>
            <div style={{ color: '#e5e7eb' }}>Visa Services</div>
          </div>
          {/* Resources */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Resources</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Blog</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>FAQ</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Contact</div>
            <div style={{ color: '#e5e7eb' }}>Support</div>
          </div>
          {/* Contact Info */}
          <div style={{ flex: '1 1 200px', minWidth: 200, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Contact Info</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}> Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 419 3507</div>
            <div style={{ color: '#e5e7eb' }}>info@globalvisionuae.com</div>
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 