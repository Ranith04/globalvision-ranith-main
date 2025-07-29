import React from 'react';
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from '../../../components/Navbar';

const advantages = [
  { title: 'Community of Innovators', desc: 'Access to academic, research, and government networks.' },
  { title: '100% Foreign Ownership', desc: 'Full business ownership for international investors.' },
  { title: 'Large Activity Scope', desc: 'Wide range of permitted business activities.' },
  { title: 'No Minimum Capital', desc: 'No minimum capital requirement for company setup.' },
  { title: 'Special Incentives', desc: 'Exclusive incentives for research and tech businesses.' },
  { title: 'State-of-the-art Infrastructure', desc: 'Modern laboratories and meeting spaces.' },
  { title: 'Swift Registration', desc: 'Quick registration and process.' },
  { title: 'Economical Setup', desc: 'Affordable setup and license costs.' },
];

const amenities = [
  'Co-working Space',
  'SME Office',
  'Ecosystem Office',
  'Innovation Office',
  'Innovation Hub',
  'Hi-tech Office',
  'Bio-Office for Women',
  'Open Innovation Lab',
];

const activities = [
  'Environmental Technology', 'Water Management Technology', 'Transport & Logistics',
  'Aerospace Maintenance', 'Automotive Manufacturing', 'Design & Engineering Solutions',
  'Medical Devices & Wellness', 'Hospital Automation Solutions', 'IT/Internet Solutions',
  'Data R&D & Analytics', 'Artificial Intelligence', 'Drones', 'Internet of Things',
];

const structures = [
  'FZC (Free Zone Company)',
  'FZE (Free Zone Establishment)',
  'Branch (Local or Foreign Company)',
];

const steps = [
  { title: 'Pick a Business Activity', desc: 'Select the activity that matches your business.' },
  { title: 'Get a Trade Name', desc: 'Choose and register your company name.' },
  { title: 'Apply for Trade License', desc: 'Submit documents and application.' },
  { title: 'Apply for Visas', desc: 'Apply for residency visas for owners and staff.' },
  { title: 'Open a Bank Account', desc: 'Open a UAE business bank account.' },
];

const whyChoose = [
  { title: 'Customized Solutions', desc: 'Tailored business setup solutions for your needs.' },
  { title: 'Experienced Consultants', desc: 'Expert guidance throughout the process.' },
  { title: 'Hassle-Free Procedure', desc: 'Streamlined registration and documentation.' },
  { title: 'Multiple Payment Options', desc: 'Flexible payment methods available.' },
];

const otherZones = [
  'RAKEZ', 'DMCC', 'DPC Free Zone', 'Sharjah Media City',
  'SRTIP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC',
  'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City',
];

export default function SRTIPFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/srtip-responsive.css" />
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
              Sharjah Research Technology and Innovation Park <br />Free Zone
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Located in University City, Sharjah, this innovative business hub serves as a catalyst for entrepreneurs and startups in key sectors such as research and development, technology, healthcare, and sustainability. Strategically positioned within an academic and knowledge-rich environment, it fosters collaboration between businesses, universities, and research institutions. The hub offers modern infrastructure, affordable setup options, and access to a network of like-minded professionals and industry experts. With strong government backing and a focus on driving future-ready solutions, it empowers businesses to thrive in a competitive global landscape while contributing to the UAE’s vision of a diversified, knowledge-based economy.
             </p>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section style={{ background: '#f7f9fa', padding: '72px 0' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 56, background: '#fff', borderRadius: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.07)', padding: 48
        }}>
          {/* Left: Text */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 24, color: '#232b38', letterSpacing: '-0.5px' }}>SRTIP Free Zone Overview</h2>
            <p style={{ fontSize: '1.13rem', color: '#3a4656', marginBottom: 18, fontWeight: 500 }}>
              The SRTIP Free Zone provides entrepreneurs and investors access to state-of-the-art infrastructure, including laboratories, modern meeting spaces, and R&D facilities.
            </p>
            <p style={{ fontSize: '1.13rem', color: '#3a4656', fontWeight: 500 }}>
              Meet and collaborate with academics, government workers, and innovators in the technology, healthcare, and sustainability sectors with opportunities for funding and specialized support.
            </p>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/images/SRTIP-1.avif" alt="SRTIP" style={{ width: 420, height: 270, objectFit: 'cover', borderRadius: 18, boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }} />
          </div>
        </div>
      </section>
      {/* Advantages Section */}
      <section style={{ background: '#f4f8fc', padding: '72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 40, color: '#232b38', letterSpacing: '-0.5px' }}>
            Advantages of Business Setup in SRTIP
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {advantages.map((adv, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, color: '#0e3c5d', textAlign: 'center' }}>{adv.title}</div>
                <div style={{ color: '#3a4656', fontSize: '1.01rem', textAlign: 'center' }}>{adv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 40, color: '#232b38', letterSpacing: '-0.5px' }}>
            The Amenities at SRTIP Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.09rem', fontWeight: 500 }}>
            Comprehensive facilities available for business owners interested in conducting innovative business activities.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
            {amenities.map((am, i) => (
              <div key={i} style={{ background: '#f7f9fa', borderRadius: 14, padding: 24, textAlign: 'center', fontWeight: 600, fontSize: '1.07rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>{am}</div>
            ))}
          </div>
        </div>
      </section>
      {/* Activities Section */}
      <section style={{ background: '#f4f8fc', padding: '72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 40, color: '#232b38', letterSpacing: '-0.5px' }}>
            List of Business Activities in SRTIP Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.09rem', fontWeight: 500 }}>
            Multiple business activities related to technology, healthcare, and academia are permitted in SRTIP.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {activities.map((act, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 20, textAlign: 'center', fontSize: '1.05rem', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>{act}</div>
            ))}
          </div>
        </div>
      </section>
      {/* Structure Options Section */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', padding: '0 16px' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: 32, color: '#232b38', letterSpacing: '-0.5px' }}>
            Business Structure Options
          </h2>
          <p style={{ color: '#3a4656', marginBottom: 36, fontSize: '1.09rem', fontWeight: 500 }}>
            SRTIP allows the following legal structures for entrepreneurs and investors.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {structures.map((s, i) => (
              <div key={i} style={{ background: '#f7f9fa', borderRadius: 14, padding: '24px 44px', fontWeight: 700, fontSize: '1.13rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: 12 }}>{s}</div>
            ))}
          </div>
        </div>
      </section>
      {/* Steps Section */}
      <section style={{ background: '#f4f8fc', padding: '72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 40, color: '#232b38', letterSpacing: '-0.5px' }}>
            Steps for Business Setup in SRTIP Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.09rem', fontWeight: 500 }}>
            Simple and streamlined process for setting up your innovative business in SRTIP Free Zone.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 200, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', marginBottom: 16 }}>
                <div style={{ fontWeight: 800, fontSize: '2rem', color: '#00c89d', marginBottom: 10 }}>{`0${i + 1}`}</div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 8 }}>{step.title}</div>
                <div style={{ color: '#3a4656', fontSize: '1.01rem' }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Section - Improved Padding */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '100px 0 100px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, marginBottom: 32, color: '#fff', letterSpacing: '-0.5px', paddingTop: 8 }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#e0f7fa', marginBottom: 56, fontSize: '1.18rem', fontWeight: 400, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your trusted partner for seamless SRTIP business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, justifyContent: 'center', alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }}>
            {whyChoose.map((w, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '40px 32px', minWidth: 220, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 12, color: '#0e3c5d' }}>{w.title}</div>
                <div style={{ color: '#3a4656', fontSize: '1.08rem' }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Other UAE Free Zones Section */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 40, color: '#232b38', letterSpacing: '-0.5px' }}>
            Other UAE Free Zones
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.09rem', fontWeight: 500 }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, justifyItems: 'center' }}>
            {otherZones.map((zone, i) => (
              <div key={i} style={{ background: '#f7f9fa', borderRadius: 12, padding: 20, textAlign: 'center', fontWeight: 700, fontSize: '1.05rem', minWidth: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>{zone}</div>
            ))}
          </div>
        </div>
      </section>
      <ContactLeadSection />
      {/* Footer - Pixel-perfect to screenshot */}
      <footer style={{ background: '#0e3c5d', color: '#fff', padding: '48px 0 0 0', fontSize: '1rem', marginTop: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 160, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#e0f7fa', fontSize: '1.05rem', marginBottom: 8 }}>
              We help you set up and grow your business in the UAE with ease and confidence.
            </div>
          </div>
          {/* Services */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Services</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Freezone Company Setup</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Mainland Company Setup</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Offshore Company Setup</div>
            <div style={{ color: '#b2c7d9', fontSize: '0.98rem' }}>Business Sponsorship</div>
          </div>
          {/* Other */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Other</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>About Us</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Blog</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Careers</div>
            <div style={{ color: '#b2c7d9', fontSize: '0.98rem' }}>FAQ</div>
          </div>
          {/* Contact Info */}
          <div style={{ flex: '1 1 200px', minWidth: 200, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Contact Info</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}>Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div style={{ color: '#b2c7d9', marginBottom: 6, fontSize: '0.98rem' }}> +971 50 419 3507</div>
            <div style={{ color: '#b2c7d9', fontSize: '0.98rem' }}>info@globalvisionuae.com</div>
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #1a4563', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', color: '#b2c7d9', fontSize: '0.98rem' }}>
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24, marginLeft: 24 }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
      
    </>
  );
} 