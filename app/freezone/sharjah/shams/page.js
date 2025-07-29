import React from 'react';
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from '../../../components/Navbar';

const benefits = [
  { title: 'Up to 0% VAT', desc: 'Companies with low/no taxable liability' },
  { title: 'No Initial Deposits', desc: 'No upfront capital required for company setup' },
  { title: 'No User Limitations', desc: 'No cap on number of company owners' },
  { title: 'Corporate Directors', desc: 'Ability to appoint corporate directors' },
  { title: 'Limited Liability', desc: 'Companies with limited liability' },
  { title: 'Swift Registration', desc: 'Quick registration and setup process' },
  { title: 'Complete Ownership', desc: 'Full company ownership for all nationalities' },
  { title: 'Tax Free', desc: 'No personal or corporate tax' },
];

const facilities = [
  { title: 'Shared Desk', desc: 'Co-working environment for creative professionals' },
  { title: 'Dedicated Office', desc: 'Private office space for your business' },
  { title: 'Dedicated Desk', desc: 'Personal desk in a shared office' },
  { title: 'Shared Office Space', desc: 'Collaborative space to support teamwork' },
];

const structuring = [
  { title: 'SHAMS LLC', desc: 'With up to 50 shareholders' },
  { title: 'Branch of Foreign Company', desc: 'Part of a parent foreign company' },
  { title: 'Local Company Branch', desc: 'Part of a locally incorporated company' },
];

const featuresLLC = [
  'Can be incorporated with one or more shareholders',
  'Shareholders can be individuals or corporates',
  'Capital requirement and approval for public share classes',
  'Can open multiple bank accounts for FZ activity',
  'Required to have one authorized manager',
];

const featuresBranch = [
  'No minimum capital required',
  'Activities must match parent FZ activity',
  'No additional audit requirements',
  'Required to have one authorized manager',
];

const otherZones = [
  'RAKEZ', 'DMCC', 'DPC Free Zone', 'Sharjah Media City',
  'SRTIP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC',
  'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City',
];

const whyChoose = [
  { title: 'Customized Solutions', desc: 'Tailored business setup solutions for your specific needs.' },
  { title: 'Experienced Consultants', desc: 'Expert guidance throughout the process.' },
  { title: 'Hassle-Free Procedure', desc: 'Streamlined registration and documentation.' },
  { title: 'Multiple Payment Options', desc: 'Flexible payment methods available.' },
];

export default function SHAMSFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/shams-responsive.css" />
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
              Sharjah Media City<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Launched in 2017, this dynamic creative zone in Sharjah was designed to support and grow media, design, and content-focused businesses across the region. Located in the UAE’s cultural capital, it offers a collaborative ecosystem that nurtures creativity and innovation. With modern infrastructure, cost-effective licensing packages, and a supportive regulatory framework, it is ideal for freelancers, startups, and creative professionals looking to establish and expand their presence. The zone also encourages cross-disciplinary collaboration and provides access to networking opportunities, workshops, and industry events — making it a go-to destination for those in the creative economy to thrive.
            </p>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section style={{ background: '#f7f9fa', padding: '64px 0' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 56, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: 44
        }}>
          {/* Left: Text */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: 18, color: '#232b38' }}>Shape the Future with SHAMS</h2>
            <p style={{ fontSize: '1.05rem', color: '#3a4656', marginBottom: 18 }}>
              Established by His Highness Dr. Sheikh Sultan bin Muhammad Al Qasimi in January 2017, SHAMS is a dynamic free zone that supports the creative community in the region.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#3a4656' }}>
              The SHAMS community provides a vibrant ecosystem with great innovation where global pioneers and ambitious entrepreneurs gather. Just 5 minutes from Sharjah airport and 25 minutes from Dubai airport.<br />
              Experience business launching, location comfort and motivating entrepreneurship talent.
            </p>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/images/SHAMS-1.avif" alt="SHAMS" style={{ width: 340, height: 200, objectFit: 'cover', borderRadius: 14, boxShadow: '0 4px 24px rgba(0,0,0,0.13)' }} />
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.45rem', fontWeight: 700, marginBottom: 24, color: '#232b38' }}>
            Benefits of Company Setup in SHAMS
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.05rem' }}>
            SHAMS offers exceptional benefits for creative media businesses with world-class facilities and strategic location.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: '#f7f9fa', borderRadius: 12, padding: 24, textAlign: 'left', fontWeight: 500, fontSize: '1.05rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e6ecf1' }}>
                <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 6 }}>{b.title}</div>
                <div style={{ color: '#3a4656', fontSize: '0.98rem' }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section style={{ background: '#f4f8fc', padding: '56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: '#232b38' }}>
            Facilities in Sharjah Media City (SHAMS)
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 32, fontSize: '1.01rem' }}>
            Four facility options designed to serve creative professionals and media businesses effectively.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 18 }}>
            {facilities.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 20, textAlign: 'center', fontWeight: 500, fontSize: '1.05rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e6ecf1' }}>
                <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 6 }}>{f.title}</div>
                <div style={{ color: '#3a4656', fontSize: '0.98rem' }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid #e6ecf1', borderRadius: 8, padding: '16px 24px', color: '#3a4656', fontSize: '1.01rem', textAlign: 'center', margin: '0 auto', maxWidth: 900, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>Shared workplace facilitates co-working environment in SHAMS.</b> It is a great option for start-ups where they interact with other like-minded people. Shared workspace fosters collaboration!
          </div>
        </div>
      </section>
      {/* Structuring Section */}
      <section style={{ background: '#fff', padding: '56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: '#232b38' }}>
            Structuring of Business Operations
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 32, fontSize: '1.01rem' }}>
            Business operations in SHAMS can be structured in the following ways for optimal flexibility.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 18 }}>
            {structuring.map((s, i) => (
              <div key={i} style={{ background: '#f7f9fa', borderRadius: 12, padding: 20, textAlign: 'center', fontWeight: 500, fontSize: '1.05rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e6ecf1' }}>
                <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 6 }}>{s.title}</div>
                <div style={{ color: '#3a4656', fontSize: '0.98rem' }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 24, marginBottom: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ background: '#fff', border: '1px solid #e6ecf1', borderRadius: 8, padding: '16px 24px', color: '#3a4656', fontSize: '1.01rem', minWidth: 260, maxWidth: 400, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <b>Features of SHAMS LLC</b>
              <ul style={{ margin: '10px 0 0 0', padding: '0 0 0 18px', color: '#3a4656', fontSize: '0.98rem' }}>
                {featuresLLC.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e6ecf1', borderRadius: 8, padding: '16px 24px', color: '#3a4656', fontSize: '1.01rem', minWidth: 260, maxWidth: 400, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <b>Features of Branch Office</b>
              <ul style={{ margin: '10px 0 0 0', padding: '0 0 0 18px', color: '#3a4656', fontSize: '0.98rem' }}>
                {featuresBranch.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
          <div style={{ background: '#f4f8fc', border: '1px solid #e6ecf1', borderRadius: 8, padding: '14px 24px', color: '#0e3c5d', fontSize: '1.01rem', textAlign: 'center', margin: '0 auto', maxWidth: 900, fontWeight: 600 }}>
            Minimum share capital is required for all business entities in SHAMS, but it's optional. The capital can be utilized for operational purposes once the license is issued.
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section style={{ background: '#fff7ed', padding: '64px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.45rem', fontWeight: 700, marginBottom: 24, color: '#232b38' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 36, fontSize: '1.05rem' }}>
            Your trusted partner for seamless SHAMS business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, justifyContent: 'center', alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }}>
            {whyChoose.map((w, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, minWidth: 180, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e6ecf1', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, color: '#0e3c5d' }}>{w.title}</div>
                <div style={{ color: '#3a4656', fontSize: '1.01rem' }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Freezone Locations Section */}
      <section style={{ background: '#f7f9fa', padding: '56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: '#232b38' }}>
            Freezone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#3a4656', marginBottom: 32, fontSize: '1.01rem' }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, justifyItems: 'center' }}>
            {otherZones.map((zone, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: 16, textAlign: 'center', fontWeight: 500, fontSize: '1rem', minWidth: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e6ecf1' }}>{zone}</div>
            ))}
          </div>
        </div>
      </section>
      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer */}
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