import { FaRegHandshake, FaUserFriends, FaUserTie } from 'react-icons/fa';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function LocalSponsorshipPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="local-sponsorship-hero" style={{
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
         <div className="local-sponsorship-hero-content" style={{
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
                UAE Local Sponsorship
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Navigate UAE’s sponsorship requirements with ease and confidence. We offer end-to-end support for all types of sponsorship services, including family reunification, domestic worker visas, and employee sponsorship for businesses. Our team handles the entire process — from eligibility assessment and document preparation to application submission and government approvals. With our expert guidance, you can ensure full compliance with UAE regulations while saving time and avoiding delays, allowing you to focus on what matters most — your family and business.
            </p>
          </div>
        </div>
      </section>
      {/* Gateway Section */}
      <section className="local-sponsorship-section" style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div className="local-sponsorship-gateway local-sponsorship-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{  fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Global Scholarship Services</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img src="/images/UAE Sponsorship Process.png" alt="Dubai Skyline" className="local-sponsorship-image" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      

      {/* Section 3: Complete Sponsorship Solutions */}
      <section className="local-sponsorship-section" style={{ background: '#f8fafc', padding: '90px 0 110px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.4rem', color: '#1976a5', marginBottom: 16, fontFamily: 'Playfair Display, serif' }}>
          Complete Sponsorship Solutions
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.18rem', marginBottom: 56, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          End-to-end support for all your sponsorship needs in the UAE.
        </p>
        <div className="local-sponsorship-solutions" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 48,
          maxWidth: 1300,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Card 1: Family Sponsorship */}
          <div className="local-sponsorship-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.10)', padding: '54px 38px', textAlign: 'center', minWidth: 0, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 54, color: '#1ec6b6', marginBottom: 28 }}>
              <FaUserFriends />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1976a5', marginBottom: 16 }}>Family Sponsorship</div>
            <ul style={{ textAlign: 'left', color: '#4a5a6a', fontSize: 17, margin: '0 0 28px 0', padding: 0, listStyle: 'disc inside' }}>
              <li>Sponsor spouse, children, parents</li>
              <li>Fast-track visa processing</li>
              <li>Document attestation support</li>
              <li>Renewal & cancellation assistance</li>
            </ul>
            <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, textDecoration: 'underline', fontSize: 17 }}>Learn More</a>
          </div>
          {/* Card 2: Employee Sponsorship */}
          <div className="local-sponsorship-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.10)', padding: '54px 38px', textAlign: 'center', minWidth: 0, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 54, color: '#1ec6b6', marginBottom: 28 }}>
              <FaUserTie />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1976a5', marginBottom: 16 }}>Employee Sponsorship</div>
            <ul style={{ textAlign: 'left', color: '#4a5a6a', fontSize: 17, margin: '0 0 28px 0', padding: 0, listStyle: 'disc inside' }}>
              <li>Work permit & visa processing</li>
              <li>Labour contract management</li>
              <li>Medical & Emirates ID support</li>
              <li>PRO & government liaison</li>
            </ul>
            <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, textDecoration: 'underline', fontSize: 17 }}>Learn More</a>
          </div>
          {/* Card 3: Investment Sponsorship */}
          <div className="local-sponsorship-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.10)', padding: '54px 38px', textAlign: 'center', minWidth: 0, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 54, color: '#1ec6b6', marginBottom: 28 }}>
              <FaRegHandshake />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1976a5', marginBottom: 16 }}>Investment Sponsorship</div>
            <ul style={{ textAlign: 'left', color: '#4a5a6a', fontSize: 17, margin: '0 0 28px 0', padding: 0, listStyle: 'disc inside' }}>
              <li>Investor & partner visa support</li>
              <li>Company formation guidance</li>
              <li>Legal & compliance assistance</li>
              <li>Renewal & exit services</li>
            </ul>
            <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, textDecoration: 'underline', fontSize: 17 }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Section 4: Streamlined Sponsorship Process */}
      <section className="local-sponsorship-process local-sponsorship-section" style={{ background: '#fff', padding: '64px 0 0 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48, maxWidth: 1200, margin: '0 auto' }}>
        {/* Left: Steps */}
        <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 540, padding: '0 24px' }}>
          <div style={{ color: '#1ec6b6', fontWeight: 600, fontSize: 15, marginBottom: 10 }}>Simple Process</div>
          <h2 style={{ fontWeight: 700, fontSize: '1.6rem', color: '#222', marginBottom: 16 }}>Streamlined Sponsorship Process</h2>
          <p style={{ color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 32 }}>
            Our proven 4-step process ensures smooth and efficient sponsorship applications with minimal hassle for you.
          </p>
          <div className="local-sponsorship-steps" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {/* Step 1 */}
            <div className="local-sponsorship-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="local-sponsorship-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>01</span>
              <div>
                <div className="local-sponsorship-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Document Preparation</div>
                <div className="local-sponsorship-step-desc" style={{ color: '#4a5a6a', fontSize: 15 }}>We help gather and prepare all required documents according to UAE regulations.</div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="local-sponsorship-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="local-sponsorship-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>02</span>
              <div>
                <div className="local-sponsorship-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Application Submission</div>
                <div className="local-sponsorship-step-desc" style={{ color: '#4a5a6a', fontSize: 15 }}>Submit applications to relevant authorities with proper documentation.</div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="local-sponsorship-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="local-sponsorship-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>03</span>
              <div>
                <div className="local-sponsorship-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Processing & Follow-up</div>
                <div className="local-sponsorship-step-desc" style={{ color: '#4a5a6a', fontSize: 15 }}>Track application progress and handle any additional requirements.</div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="local-sponsorship-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="local-sponsorship-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>04</span>
              <div>
                <div className="local-sponsorship-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Approval & Completion</div>
                <div className="local-sponsorship-step-desc" style={{ color: '#4a5a6a', fontSize: 15 }}>Receive approvals and complete final procedures for sponsorship.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div style={{ flex: '1 1 340px', minWidth: 260, maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
          {/* Replace src with your uploaded image */}
          <img src="/images/UAE Sponsorship Process.png" alt="Sponsorship Process" className="local-sponsorship-image" style={{ width: '100%', maxWidth: 480, height: 280, objectFit: 'cover', borderRadius: 14, boxShadow: '0 2px 12px rgba(30,198,182,0.10)' }} />
        </div>
      </section>

      {/* Section 5: Why Choose Our Sponsorship Services? */}
      <section className="local-sponsorship-section" style={{ background: '#f8fafc', padding: '64px 0 80px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 10, fontFamily: 'Playfair Display, serif' }}>
          Why Choose Our Sponsorship Services?
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          We combine local expertise with international standards to deliver exceptional sponsorship solutions.
        </p>
        <div className="local-sponsorship-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
          maxWidth: 900,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>No local sponsor requirement for certain categories</span>
          </div>
          {/* Feature 2 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>Streamlined government processing</span>
          </div>
          {/* Feature 3 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>Expert documentation handling</span>
          </div>
          {/* Feature 4 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>Compliance with UAE immigration laws</span>
          </div>
          {/* Feature 5 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>24/7 support throughout the process</span>
          </div>
          {/* Feature 6 */}
          <div className="local-sponsorship-feature" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>✔</span>
            <span style={{ color: '#4a5a6a', fontSize: 15 }}>Multiple Emirates coverage</span>
          </div>
        </div>
      </section>

      {/* Section 6: Ready to Start Your Sponsorship Process? */}
      <section className="local-sponsorship-section" style={{ background: '#fff', padding: '60px 0 32px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 18, fontFamily: 'Playfair Display, serif' }}>
          Ready to Start Your Sponsorship Process?
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get expert guidance on UAE sponsorship requirements. Our team is ready to help you navigate the process smoothly.
        </p>
        <div className="local-sponsorship-ready-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 800,
          margin: '0 auto 24px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div className="local-sponsorship-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 26, display: 'flex', alignItems: 'center' }}>
              <svg width="26" height="26" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="12"/><path d="M13 7v6l4 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Processing time: 2-4 weeks</span>
          </div>
          {/* Feature 2 */}
          <div className="local-sponsorship-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 26, display: 'flex', alignItems: 'center' }}>
              <svg width="26" height="26" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="16" height="16" rx="2"/><path d="M9 9h8v8H9z"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Complete documentation support</span>
          </div>
          {/* Feature 3 */}
          <div className="local-sponsorship-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 26, display: 'flex', alignItems: 'center' }}>
              <svg width="26" height="26" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,3 16,10 24,10 17,15 19,22 13,18 7,22 9,15 2,10 10,10"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>98% success rate</span>
          </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="local-sponsorship-trust" style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for UAE sponsorship services. Making family reunification and business hiring simple.
      </div>

      <ContactLeadSection />
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div className="local-sponsorship-footer" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
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
        <div className="local-sponsorship-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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