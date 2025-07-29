import React from 'react';
import { FaBuilding, FaCheckCircle, FaDollarSign, FaGlobe, FaMapMarkerAlt, FaShieldAlt, FaStar, FaUserCheck, FaUserFriends } from 'react-icons/fa';
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from '../../../components/Navbar';

export default function DIFCFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/difc-responsive.css" />
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
              Dubai International Financial Centre<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            A leading hub for financial institutions, this thriving district is home to over 6,000 companies spanning sectors such as finance, wealth management, trading, insurance, retail, and dining. With a business-friendly environment, premium office spaces, and a vibrant mix of corporate and lifestyle offerings, it provides the perfect setting for both business growth and high-quality living.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits of Business Setup in DIFC Free Zone Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 56px 0', borderTop: '1px solid #e6ecf1', borderBottom: '8px solid #eaf4fb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Benefits of Business Setup in DIFC Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            DIFC offers exceptional advantages for international businesses with modern infrastructure and regulatory framework.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* 0% Corporate Tax */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaDollarSign /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>0% Corporate Tax</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete tax exemption for businesses</div>
            </div>
            {/* Full Repatriation */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaGlobe /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Full Repatriation</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete repatriation of capital and profits</div>
            </div>
            {/* 100% Foreign Ownership */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaShieldAlt /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>100% Foreign Ownership</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete foreign ownership allowed</div>
            </div>
            {/* No Minimum Capital */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaStar /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>No Minimum Capital</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>No minimum share capital for special purpose companies</div>
            </div>
            {/* Common Law System */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaUserCheck /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Common Law System</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>Independent regulatory framework</div>
            </div>
            {/* Modern Infrastructure */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 22px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 28, color: '#13c1b6', marginBottom: 12 }}><FaBuilding /></span>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}><b>Modern Infrastructure</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>State-of-the-art facilities and transparent operations</div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Facilities at DIFC Free Zone Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 56px 0', borderBottom: '8px solid #eaf4fb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Business Facilities at DIFC Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            State-of-the-art working spaces and infrastructure tailored for innovation and growth.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch', maxWidth: 1000, margin: '0 auto' }}>
            {/* Business Centers */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}><b>Business Centers</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Serviced offices with full support</div>
            </div>
            {/* Coworking Spaces */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}><b>Coworking Spaces</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Flexi desks, dedicated desks, private offices</div>
            </div>
            {/* Commercial Offices */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}><b>Commercial Offices</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Traditional office spaces</div>
            </div>
            {/* Retail Spaces */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}><b>Retail Spaces</b></div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Commercial retail locations</div>
            </div>
          </div>
        </div>
      </section>
      {/* Legal Structure Options in DIFC Free Zone Section */}
      <section style={{ background: '#eaf4fb', padding: '40px 0 40px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Legal Structure Options in DIFC Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Choose from various legal structures to suit your business needs and objectives.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, justifyContent: 'center', alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }}>
            {[
              'General Partnership',
              'Limited Liability Partnership (LLP)',
              'Limited Partnership (LP)',
              'Limited Liability Company (LLC)',
              'Branch of a Foreign Company',
              'Company Limited by Shares (LTD)',
              'Representative Office of a Foreign Company'
            ].map((structure, idx) => (
              <div key={structure} style={{ background: '#fff', borderRadius: 12, padding: '28px 18px', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#17323b', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', marginBottom: idx > 3 ? 0 : undefined }}>
                {structure}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Steps for DIFC Company Registration Section */}
      <section style={{ background: '#fff', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Steps for DIFC Company Registration
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Simple and streamlined process for setting up your business in DIFC Free Zone.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch', maxWidth: 1000, margin: '0 auto' }}>
            {/* Step 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 18, padding: '32px 18px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ display: 'inline-block', background: '#13c1b6', color: '#fff', borderRadius: '50%', width: 40, height: 40, textAlign: 'center', lineHeight: '40px', fontWeight: 700, fontSize: 18, marginBottom: 14 }}>01</span>
              <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Get Initial Approval</span>
              <span style={{ color: '#4a5a6a', fontSize: '1rem' }}>Get approval from DFSA for financial companies or DIFC Authority for others</span>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 18, padding: '32px 18px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ display: 'inline-block', background: '#13c1b6', color: '#fff', borderRadius: '50%', width: 40, height: 40, textAlign: 'center', lineHeight: '40px', fontWeight: 700, fontSize: 18, marginBottom: 14 }}>02</span>
              <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Register the Business</span>
              <span style={{ color: '#4a5a6a', fontSize: '1rem' }}>Apply for trade name, business license, and secure office space</span>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 18, padding: '32px 18px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 120, boxShadow: '0 2px 12px rgba(30,198,182,0.04)' }}>
              <span style={{ display: 'inline-block', background: '#13c1b6', color: '#fff', borderRadius: '50%', width: 40, height: 40, textAlign: 'center', lineHeight: '40px', fontWeight: 700, fontSize: 18, marginBottom: 14 }}>03</span>
              <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#17323b', marginBottom: 8 }}>Open a Bank Account</span>
              <span style={{ color: '#4a5a6a', fontSize: '1rem' }}>Open corporate bank account with banking institutions</span>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Global Vision Services Section */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '56px 0 64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#17323b' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your trusted partner for seamless DIFC business setup with comprehensive support and expertise.
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
      {/* Other UAE Free Zones Section */}
      <section style={{ background: '#eaf4fb', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 8, color: '#222' }}>
            Other UAE Free Zones
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
              Your trusted partner for DIFC Free Zone<br/>company formation and business setup<br/>services.
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