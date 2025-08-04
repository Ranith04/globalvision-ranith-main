import React from 'react';
import '../../../styles/rak-mainland-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function RAKMainlandPage() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', padding: 0, background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)' }}>
       {/* Background Image under gradient */}
       <img
          src="/images/backgroundimg.png"
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
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
            Ras Al Khaimah Mainland<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Ras Al Khaimah, regulated by the RAK Department of Economic Development, is a growing business destination offering affordable setup costs and simplified regulations. Known for its investor-friendly policies, RAK provides full foreign ownership in various sectors, flexible licensing options, and minimal bureaucratic hurdles. Its strategic coastal location supports industries like manufacturing, trading, logistics, and maritime services. With easy access to other emirates and major transport links, RAK Mainland is ideal for startups, SMEs, and international businesses seeking a low-cost, high-potential base in the UAE. Government support, modern infrastructure, and a pro-business environment make RAK a smart choice for expansion.
              </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section style={{ background: '#f8f9fa', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>
            Overview
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 18 }}>
            RAK offers a strategic location and cost-effective solutions for business setup. Global Vision provides end-to-end support for your business journey in Ras Al Khaimah.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/RAK Mainland.avif" alt="RAK Mainland Office" style={{ width: 340, height: 180, objectFit: 'cover', borderRadius: 18, flex: '1 1 340px', minWidth: 260, maxWidth: 380, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: 0, marginRight: 12 }} />
            <div style={{ flex: '2 1 340px', minWidth: 260, maxWidth: 520 }}>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>About Global Vision</div>
              <div style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 18 }}>
                Premier consultancy specializing in UAE business setup with over 10 years of hands-on experience and 1000+ successful business launches.
              </div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '18px 32px', minWidth: 140, textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: 22, color: '#1ec6b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
                  1000+<div style={{ fontWeight: 400, fontSize: 15, color: '#222', marginTop: 4 }}>Successful Launches</div>
                </div>
                <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '18px 32px', minWidth: 140, textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: 22, color: '#1ec6b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
                  10+<div style={{ fontWeight: 400, fontSize: 15, color: '#222', marginTop: 4 }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why RAK Mainland is Perfect for Your Business Section */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>
            Why RAK Mainland is Perfect for Your Business
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Unlock unlimited potential with strategic advantages
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 36, flexWrap: 'wrap' }}>
            {/* Full Market Access */}
            <div style={{ flex: '1 1 220px', minWidth: 200, maxWidth: 300, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Full Market Access</div>
              <div style={{ color: '#444', fontSize: 15, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Trade across all UAE emirates without restrictions
              </div>
            </div>
            {/* 100% Foreign Ownership */}
            <div style={{ flex: '1 1 220px', minWidth: 200, maxWidth: 300, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>100% Foreign Ownership</div>
              <div style={{ color: '#444', fontSize: 15, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Complete control with Cabinet Resolution No. 56 (2020)
              </div>
            </div>
            {/* Cost Flexibility */}
            <div style={{ flex: '1 1 220px', minWidth: 200, maxWidth: 300, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Cost Flexibility</div>
              <div style={{ color: '#444', fontSize: 15, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Affordable setup and renewal costs
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Hassle-Free Process */}
            <div style={{ background: '#fafbfc', borderRadius: 14, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 260, maxWidth: 380, flex: '1 1 320px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Hassle-Free Process</div>
              <ul style={{ color: '#1ec6b6', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Quick company registration</li>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Minimal paperwork</li>
                <li><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Dedicated support</li>
              </ul>
            </div>
            {/* Strategic Location */}
            <div style={{ background: '#fafbfc', borderRadius: 14, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 260, maxWidth: 380, flex: '1 1 320px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
              <ul style={{ color: '#1ec6b6', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Proximity to Dubai and Sharjah</li>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Access to major ports</li>
                <li><span style={{ color: '#1ec6b6', marginRight: 6 }}>✓</span>Ideal for trading businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Steps to Setup Your Business in RAK Mainland Section */}
      <section style={{ background: '#f8f9fa', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>
            Steps to Setup Your Business in RAK Mainland
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
             
          </p>
          {/* Step 1: Business Structuring */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 12 }}>1</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Business Structuring</div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {/* Choose Activity */}
              <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '22px 24px', minWidth: 220, flex: '1 1 220px', background: '#fff' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Choose Activity</div>
                <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Select and verify business activity with RAK DED</div>
              </div>
              {/* Legal Structure */}
              <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '22px 24px', minWidth: 220, flex: '1 1 220px', background: '#fff' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Legal Structure</div>
                <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Choose between LLC, Sole Establishment, or Branch</div>
              </div>
              {/* Reserve Name */}
              <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 12, padding: '22px 24px', minWidth: 220, flex: '1 1 220px', background: '#fff' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Reserve Name</div>
                <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Secure your unique trade name</div>
              </div>
            </div>
          </div>
          {/* Step 2: Licensing & Formation */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 12 }}>2</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Licensing & Formation</div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {/* Initial Approval */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Initial Approval</div>
              </div>
              {/* MOA Drafting */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 4h12v16H6z" stroke="#1ec6b6" strokeWidth="2"/><path d="M9 8h6" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>MOA Drafting</div>
              </div>
              {/* Lease Agreement */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Lease Agreement</div>
              </div>
              {/* Trade License */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Trade License</div>
              </div>
            </div>
          </div>
          {/* Step 3: Post-Formation Setup */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 12 }}>3</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Post-Formation Setup</div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {/* Visa Processing */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#1ec6b6"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Visa Processing</div>
                <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 4 }}>Investor and employee visas, Emirates ID</div>
              </div>
              {/* Bank Account */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Bank Account</div>
                <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 4 }}>Corporate accounts with top UAE banks</div>
              </div>
              {/* Compliance */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '22px 24px', minWidth: 180, flex: '1 1 180px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Compliance</div>
                <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 4 }}>VAT registration, accounting, renewals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
      {/* Client Success Stories Section */}
      <section style={{ background: '#f6fafc', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>
            Client Success Stories
          </h2>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Testimonial 1 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 14, padding: '28px 24px', minWidth: 260, maxWidth: 340, flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img src="/images/na.png" alt="John Smith" style={{ width: 44, height: 44, borderRadius: '50%', marginRight: 12 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Ahmed Raza</div>
                  <div style={{ color: '#6b7a86', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Emiratech Solutions</div>
                </div>
              </div>
              <div style={{ color: '#f7b500', fontSize: 18, marginBottom: 8 }}>
                {'★★★★★'}
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontStyle: 'italic' }}>
                "Global Vision guided us through the setup process with total clarity. Their team made the paperwork and approvals feel effortless."
              </div>
            </div>
            {/* Testimonial 2 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 14, padding: '28px 24px', minWidth: 260, maxWidth: 340, flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img src="/images/ni.png" alt="Sarah Johnson" style={{ width: 44, height: 44, borderRadius: '50%', marginRight: 12 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Meera Nair</div>
                  <div style={{ color: '#6b7a86', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>IndoGlobal Exports</div>
                </div>
              </div>
              <div style={{ color: '#f7b500', fontSize: 18, marginBottom: 8 }}>
                {'★★★★★'}
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontStyle: 'italic' }}>
                "We got amazing support throughout our business registration. Everything was handled smoothly, and they kept us updated without needing to follow up."
              </div>
            </div>
            {/* Testimonial 3 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 14, padding: '28px 24px', minWidth: 260, maxWidth: 340, flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img src="/images/yusuf.png" alt="Jakob Wegner" style={{ width: 44, height: 44, borderRadius: '50%', marginRight: 12 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif' }}>Yusuf Al Mansoori</div>
                  <div style={{ color: '#6b7a86', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Al Noor Holdings</div>
                </div>
              </div>
              <div style={{ color: '#f7b500', fontSize: 18, marginBottom: 8 }}>
                {'★★★★★'}
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontStyle: 'italic' }}>
                "The team had deep knowledge of the procedures and legal aspects. They made sure we stayed compliant without any delays."
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section style={{ background: '#f6f8f9', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', color: '#176d6b' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* FAQ 1 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>How long does setup take?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>5–7 business days with complete documentation and our streamlined process.</div>
            </div>
            {/* FAQ 2 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Do I need a local sponsor?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>No local sponsor required for most activities, thanks to 100% foreign ownership laws.</div>
            </div>
            {/* FAQ 3 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>What taxes apply?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>9% corporate tax on profits above AED 375,000. No personal income tax.</div>
            </div>
            {/* FAQ 4 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>How many visas can I get?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Based on office space - typically one visa per 80 sq. ft. of office area.</div>
            </div>
            {/* FAQ 5 */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Can I operate outside RAK?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Yes, mainland licenses allow operation across all UAE emirates without restrictions.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Take the First Step Section */}
      <ContactLeadSection />
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for RAK mainland<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb' }}> info@globalvisionuae.com</div>
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
 