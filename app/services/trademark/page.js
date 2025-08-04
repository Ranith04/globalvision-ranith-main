import Image from 'next/image';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function TrademarkPage() {
  return (
    <div style={{ background: '#f7f7f7' }}>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="trademark-hero" style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)',
        position: 'relative',
        padding: '80px 0 0 0'
      }}>
        {/* Background cityscape overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/images/backgroundimg.png) center/cover no-repeat',
          opacity: 0.18,
          zIndex: 1
        }} />
         <div className="trademark-hero-content" style={{
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
              UAE Trademark Registration
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Protect your brand with official trademark registration through the UAE Ministry of Economy. We provide expert guidance from trademark search to final certification, ensuring your intellectual property is legally secured and recognized across the UAE — giving your business the protection and credibility it deserves.
            </p>
          </div>
        </div>
      </section>      

      {/* Protect Your Brand Section */}
      <section className="trademark-gateway" style={{  background: '#E0E3EA', padding: '60px 0' }}>
        <div className="trademark-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Protect Your Brand in Dubai & UAE</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px'}}>
            <Image className="trademark-image" src="/images/trade-1.jpg" alt="Dubai Brand" width={500} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Why Register Your Trademark in UAE? */}
      <section className="trademark-section" style={{ background: '#fff', padding: '40px 0 0 0' }}>
        <div className="trademark-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Why Register Your Trademark in UAE?</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32, maxWidth: 900 }}>
            A trademark is your brand's unique identifier - text, image, logo, or combination thereof. In the UAE, trademark registration provides legal protection and exclusive rights for 10 years, helping establish your brand identity and prevent unauthorized use.
          </p>
          <div className="trademark-features" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { icon: '🔒', label: 'Brand Protection', desc: 'Legal protection for your brand identity throughout the UAE.' },
              { icon: '📅', label: '10-Year Validity', desc: 'Trademark registration valid for 10 years, renewable.' },
              { icon: '🌍', label: 'UAE-Wide Coverage', desc: 'Protection across all 7 emirates of the United Arab Emirates.' },
              { icon: '⚖️', label: 'Legal Rights', desc: 'Exclusive legal rights to use your trademark commercially.' },
            ].map((item, i) => (
              <div key={i} className="trademark-feature-card" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trademark Registration Process */}
      <section className="trademark-section" style={{ background: '#f5f5f5', padding: '60px 0' }}>
        <div className="trademark-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#333' }}>Trademark Registration Process</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 48, maxWidth: 700, margin: '0 auto 48px auto' }}>
            Our comprehensive process ensures your trademark is properly registered and protected
          </p>
          
                      <div className="trademark-process" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
              {/* Step 1 - Trademark Search */}
              <div className="trademark-process-step" style={{ flex: 1, minWidth: 200, textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: 80, 
                height: 80, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px auto',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                01
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', marginBottom: 12 }}>Trademark Search</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                Comprehensive search to ensure your trademark is available and unique
              </p>
              {/* Arrow */}
              <div style={{ 
                position: 'absolute', 
                top: 35, 
                right: -12, 
                fontSize: '1.5rem', 
                color: '#1ec6b6'
              }}>
                →
              </div>
            </div>

                          {/* Step 2 - Application Filing */}
              <div className="trademark-process-step" style={{ flex: 1, minWidth: 200, textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: 80, 
                height: 80, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px auto',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                02
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', marginBottom: 12 }}>Application Filing</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                Prepare and submit complete application with Ministry of Economy
              </p>
              {/* Arrow */}
              <div style={{ 
                position: 'absolute', 
                top: 35, 
                right: -12, 
                fontSize: '1.5rem', 
                color: '#1ec6b6'
              }}>
                →
              </div>
            </div>

                          {/* Step 3 - Initial Approval */}
              <div className="trademark-process-step" style={{ flex: 1, minWidth: 200, textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: 80, 
                height: 80, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px auto',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                03
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', marginBottom: 12 }}>Initial Approval</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                Ministry reviews application and grants initial approval
              </p>
              {/* Arrow */}
              <div style={{ 
                position: 'absolute', 
                top: 35, 
                right: -12, 
                fontSize: '1.5rem', 
                color: '#1ec6b6'
              }}>
                →
              </div>
            </div>

                          {/* Step 4 - Publication */}
              <div className="trademark-process-step" style={{ flex: 1, minWidth: 200, textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: 80, 
                height: 80, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px auto',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                04
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', marginBottom: 12 }}>Publication</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                Trademark published in local newspapers for objections
              </p>
              {/* Arrow */}
              <div style={{ 
                position: 'absolute', 
                top: 35, 
                right: -12, 
                fontSize: '1.5rem', 
                color: '#1ec6b6'
              }}>
                →
              </div>
            </div>

                          {/* Step 5 - Final Registration */}
              <div className="trademark-process-step" style={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
              <div style={{ 
                width: 80, 
                height: 80, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px auto',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                05
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', marginBottom: 12 }}>Final Registration</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                Receive official trademark registration certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Trademark Services? */}
      <section className="trademark-section" style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div className="trademark-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1, minWidth: 320 }}>
            <Image className="trademark-image" src="/images/trade-2.jpg" alt="Dubai City" width={500} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Why Choose Our Trademark Services?</h2>
            <ul style={{ color: '#222', fontSize: '1.1rem', marginBottom: 24, paddingLeft: 20 }}>
              <li><b>Expert Search & Analysis:</b> Comprehensive trademark search to avoid conflicts and ensure registrability</li>
              <li><b>Complete Documentation:</b> Professional preparation of all required documents and applications</li>
              <li><b>Legal Expertise:</b> 15+ years of UAE intellectual property law and regulations</li>
              <li><b>Cultural Understanding:</b> Local expertise to ensure your trademark works effectively in UAE market</li>
            </ul>
            <a href="#contact" className="trademark-btn" style={{ background: '#1ec6b6', color: '#fff', padding: '12px 32px', borderRadius: 30, fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>Start Your Registration</a>
          </div>
        </div>
      </section>

      {/* Ready to Protect Your Brand? */}
      <section className="trademark-section" style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div className="trademark-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Ready to Protect Your Brand?</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Don't let someone else claim your brand. Our trademark experts will guide you through the entire registration process, from search to final certificate.</p>
          <div className="trademark-ready-features" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              'Free Trademark Search',
              'Complete Package',
              'High Success Rate',
            ].map((item, i) => (
              <div key={i} className="trademark-ready-feature" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', fontWeight: 600, fontSize: '1.1rem' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />
      {/* Footer Section */}
      <footer className="trademark-footer" style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
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
        <div className="trademark-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
} 