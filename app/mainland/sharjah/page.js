import ContactLeadSection from '../../components/ContactLeadSection';
import FAQList from '../../components/FAQList';
import Navbar from '../../components/Navbar';

export default function SharjahMainlandPage() {
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
        {/* Overlay (optional cityscape image) */}
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
            Sharjah Mainland<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Sharjah Mainland is a key business jurisdiction in the UAE regulated by the Sharjah Economic Development Department (SEDD). It offers companies the flexibility to operate across the UAE without geographical restrictions, making it ideal for businesses targeting both local and international markets. With affordable setup costs, access to a wide range of business activities, and strategic proximity to major ports and airports, Sharjah Mainland is a preferred choice for startups, SMEs, and global enterprises looking for a cost-effective yet powerful business base in the UAE.
             </p>
          </div>
        </div>
      </section>
      {/* Why Invest Section */}
      <section style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 40 }}>
            Why Invest in Sharjah Mainland?
          </h2>
          <div className="why-invest-row" style={{ display: 'flex', flexWrap: 'nowrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                {/* Economic Stability: Bar Chart Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" fill="#1ec6b6"/><rect x="10" y="8" width="4" height="12" fill="#1ec6b6"/><rect x="17" y="4" width="4" height="16" fill="#1ec6b6"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Economic Stability</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Sharjah offers a stable and growing economy with excellent infrastructure and business-friendly policies.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                {/* Strategic Infrastructure: Network/Globe Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M2 12h20M12 2c2.5 3.5 2.5 14.5 0 20M12 2c-2.5 3.5-2.5 14.5 0 20" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Strategic Infrastructure</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Access to world-class ports, airports, and logistics networks connecting you to global markets.
              </p>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                {/* Business Friendly: Handshake Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M2 17l5-5 5 5 5-5 5 5" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="2" fill="#1ec6b6"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Business Friendly</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                100% foreign ownership allowed with competitive setup costs and streamlined processes.
              </p>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                {/* Tax Benefits: Shield/Check Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#1ec6b6" strokeWidth="2"/><path d="M9 14l2 2 4-4" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Tax Benefits</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Attractive tax structure with 9% corporate tax only on profits above AED 375,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section style={{ background: 'linear-gradient(135deg, #19e2c0 0%, #0b6a7c 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#173c4f', textAlign: 'center', marginBottom: 8 }}>
            Documents Required for Company Registration in Sharjah
          </h2>
          <p style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center', marginBottom: 40 }}>
            Ensure you have all necessary documentation ready for a smooth and efficient registration process.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 800, margin: '0 auto' }}>
            {/* Personal Documents */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px 20px 18px 20px', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', minHeight: 160 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm3 2v2h6V6H9zm0 4v2h6v-2H9zm0 4v2h4v-2H9z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Personal Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Valid passport copies of all shareholders</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Passport-size photographs</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>No Objection Certificate (if applicable)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Educational certificates for professional licenses</li>
              </ul>
            </div>
            {/* Business Documents */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px 20px 18px 20px', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', minHeight: 160 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Business Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Memorandum of Association</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Office lease agreement</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Business plan and activity description</li>
              </ul>
            </div>
            {/* Corporate Documents */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px 20px 18px 20px', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', minHeight: 160 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Corporate Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Board resolution for company formation</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Power of attorney (if applicable)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Shareholder agreements</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Company incorporation certificate</li>
              </ul>
            </div>
            {/* Additional Requirements */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px 20px 18px 20px', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', display: 'flex', flexDirection: 'column', minHeight: 160 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Additional Requirements</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Trade name reservation certificate</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Initial approval</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>•</span>Special approvals for regulated activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section style={{ background: '#fafbfc', padding: '60px 0 80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#222', textAlign: 'center', marginBottom: 8 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#6b7a86', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center', marginBottom: 36 }}>
            Get answers to common questions about business setup in Sharjah Mainland.
          </p>
          {/* FAQList component for accordion */}
          <FAQList
            faqs={[
              {
                question: 'What is the timeline for business setup in Sharjah?',
                answer: 'The timeline varies depending on the business activity and documentation, but typically ranges from 1 to 3 weeks.'
              },
              {
                question: 'Is local sponsorship required?',
                answer: 'For certain business activities, a local sponsor or service agent may be required as per Sharjah regulations.'
              },
              {
                question: 'Can I expand my business after setup?',
                answer: 'Yes, you can add activities, open branches, or upgrade your license as your business grows.'
              },
              {
                question: 'What are the tax implications?',
                answer: 'Sharjah Mainland businesses are subject to UAE corporate tax laws. VAT registration may also be required.'
              },
              {
                question: 'How many visas can I get?',
                answer: 'The number of visas depends on your office size, business activity, and license type.'
              },
              {
                question: 'What are the ongoing compliance requirements?',
                answer: 'Annual license renewal, maintaining proper accounting records, and adhering to regulatory requirements are necessary.'
              }
            ]}
          />
        </div>
      </section>
      {/* Take the First Step Contact Section */}
      <ContactLeadSection></ContactLeadSection>
       {/* Footer Section - Exact Match */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Sharjah mainland<br/>company formation and business setup<br/>services.
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