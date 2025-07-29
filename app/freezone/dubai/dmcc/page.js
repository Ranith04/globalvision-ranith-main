import React from 'react';
import { FaBuilding, FaCheckCircle, FaDollarSign, FaGlobe, FaMapMarkerAlt, FaShieldAlt, FaStar, FaUserCheck, FaUserFriends } from 'react-icons/fa';
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from '../../../components/Navbar';

export default function DMCCFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/dmcc-responsive.css" />
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
              Dubai Multi Commodities Centre<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Awarded the title of ‘Global Free Zone of the Year’, this thriving business hub features 79 state-of-the-art towers, including the iconic Almas Tower, which houses the renowned Dubai Diamond Exchange. Strategically located within a lively waterfront community, it combines premium office spaces with residential, retail, and leisure options. The zone offers unmatched infrastructure, global business connectivity, and a supportive regulatory environment, making it a preferred destination for multinational companies, startups, and entrepreneurs. Its dynamic ecosystem fosters innovation, collaboration, and growth—positioning it as one of the most sought-after free zones in Dubai for long-term business success.
            </p>
          </div>
        </div>
      </section>
      {/* DMCC Location & Overview Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 56px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            DMCC Location & Overview
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            DMCC Free Zone is situated next to Sheikh Zayed Road, between interchanges 5 and 6, featuring 79 towers with prestigious addresses in Dubai.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36, alignItems: 'center', justifyContent: 'center' }}>
            {/* Left: Text */}
            <div style={{ flex: 1, minWidth: 290, maxWidth: 520, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.08rem', lineHeight: 1.7 }}>
              <p style={{ marginBottom: 18 }}>
                The Dubai Multi Commodities Centre offers attractive residential and office towers with leisure hotels and retail outlets. The Almas Tower, situated on the island in the centre of the community, serves as the focal point housing the Dubai Diamond Exchange.
              </p>
              <p style={{ marginBottom: 0 }}>
                Property owners have the ability to own and develop towers on a freehold basis, making it one of the most recognized addresses in Dubai for businesses in diamond, gold, energy, and commodities industries.
              </p>
            </div>
            {/* Right: Image */}
            <div style={{ flex: 1, minWidth: 290, maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/DMCC -1.avif" alt="DMCC Location" style={{ width: '100%', maxWidth: 400, borderRadius: 14, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Key Advantages of DMCC Section */}
      <section style={{ background: '#fff', padding: '56px 0 56px 0', borderTop: '1px solid #e6ecf1', borderBottom: '8px solid #eaf4fb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Key Advantages of DMCC
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            DMCC offers exceptional benefits for international businesses with liberal policies and world-class infrastructure.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* 100% Foreign Ownership */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaShieldAlt />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>100% Foreign Ownership</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete foreign ownership allowed</div>
            </div>
            {/* 100% Tax Exemption */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaDollarSign />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>100% Tax Exemption</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete tax exemption benefits</div>
            </div>
            {/* 50 Years Tax Holiday */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaStar />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>50 Years Tax Holiday</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Extended tax holiday period</div>
            </div>
            {/* Full Repatriation */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaGlobe />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Full Repatriation</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete repatriation of capital & profits</div>
            </div>
            {/* Freehold Ownership */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaBuilding />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Freehold Ownership</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Extended leases and freehold ownership options</div>
            </div>
            {/* Strategic Location */}
            <div style={{ background: '#f7fafd', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}>
                <FaMapMarkerAlt />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Strategic Location</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Located on Sheikh Zayed Road between interchanges 5 and 6</div>
            </div>
          </div>
        </div>
      </section>
      {/* Forms of Business Setup in DMCC Section */}
      <section style={{ background: '#f2f8fc', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Forms of Business Setup in DMCC
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Choose the right business structure for your DMCC operations with 100% foreign ownership options.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 38, flexWrap: 'wrap' }}>
            {/* Branch of Foreign/UAE Company */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 28px', minWidth: 320, flex: 1, maxWidth: 420, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Branch of Foreign/UAE Company</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Extension of existing company operations</div>
            </div>
            {/* DMCC Limited Liability Company */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 28px', minWidth: 320, flex: 1, maxWidth: 420, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>DMCC Limited Liability Company</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Independent LLC with 100% foreign ownership</div>
            </div>
          </div>
          {/* Key Features Card */}
           
        </div>
      </section>
      {/* Why Choose Global Vision Services Section */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '56px 0 64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#17323b' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your trusted partner for seamless DMCC business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Customised Solutions */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 32, color: '#13c1b6', marginBottom: 18 }}><FaCheckCircle /></span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Customised Solutions</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Tailored business solutions for your specific needs</div>
            </div>
            {/* Experienced Consultants */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 32, color: '#13c1b6', marginBottom: 18 }}><FaUserFriends /></span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Experienced Consultants</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Expert consultants with deep local knowledge</div>
            </div>
            {/* Hassle-Free Procedure */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 32, color: '#13c1b6', marginBottom: 18 }}><FaUserCheck /></span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Hassle-Free Procedure</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Streamlined process for smooth registration</div>
            </div>
            {/* Multiple Payment Options */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 32, color: '#13c1b6', marginBottom: 18 }}><FaDollarSign /></span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Multiple Payment Options</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Flexible payment methods available</div>
            </div>
          </div>
        </div>
      </section>
      {/* UAE Free Zone Locations Section */}
      <section style={{ background: '#eaf4fb', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, justifyContent: 'center', alignItems: 'stretch', maxWidth: 1000, margin: '0 auto' }}>
            {/* 12 Free Zone Cards */}
            {[
              'RAKEZ', 'DMCC', 'DIFC Free Zone', 'Sharjah Media City',
              'SRTIP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC',
              'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City'
            ].map((zone, idx) => (
              <div key={zone} style={{ background: '#fff', borderRadius: 12, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#17323b', boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
                <span style={{ color: '#13c1b6', fontSize: 20, display: 'flex', alignItems: 'center' }}><FaMapMarkerAlt /></span>
                <span>{zone}</span>
              </div>
            ))}
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
              Your trusted partner for DMCC Free Zone<br/>company formation and business setup<br/>services.
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