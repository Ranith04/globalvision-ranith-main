import Image from 'next/image';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function BankAccountPage() {
  return (
    <div style={{ background: '#f7f7f7' }}>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="bank-account-hero" style={{
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
         <div className="bank-account-hero-content" style={{
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
              UAE Bank Account Opening
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Navigate the UAE’s strict banking regulations confidently with our expert assistance. We help you open personal and corporate bank accounts with top UAE banks, ensuring full compliance with local laws. From documentation to final approvals, our end-to-end support ensures a smooth, secure, and hassle-free process, allowing you to establish financial credibility and operate with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Open Bank Account Section */}
      <section className="bank-account-section" style={{  background: '#E0E3EA', padding: '48px 0' }}>
        <div className="bank-account-gateway bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 24px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{  fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Open Bank Account Online in UAE</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <Image src="/images/bankacount-1.jpg" alt="Bank Account UAE" width={500} height={300} className="bank-account-image" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Why UAE Banking Requires Expert Help */}
      <section className="bank-account-section" style={{ background: '#fff', padding: '32px 0 0 0' }}>
        <div className="bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Why UAE Banking Requires Expert Help</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32, maxWidth: 900 }}>
            UAE banks enforce exceptionally high compliance standards to meet international anti-money laundering regulations. Our expertise ensures your application success.
          </p>
          <div className="bank-account-features" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { icon: '🔒', label: 'Secure Banking', desc: 'International compliance with highest security standards.' },
              { icon: '🌍', label: 'Global Access', desc: 'Access to international banking networks and services.' },
              { icon: '💱', label: 'Multiple Currencies', desc: 'Support for various currencies including USD, EUR, GBP.' },
              { icon: '🧑‍💼', label: 'Expert Assistance', desc: 'Complete documentation and application support.' },
            ].map((item, i) => (
              <div key={i} className="bank-account-feature-card" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Available */}
      <section className="bank-account-section" style={{ background: '#fff', padding: '0 0 48px 0' }}>
        <div className="bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Account Types Available</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Choose between personal or corporate banking solutions tailored to your needs.</p>
          <div className="bank-account-types" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {/* Personal Account */}
            <div className="bank-account-type" style={{ flex: 1, minWidth: 320, background: '#f7f7f7', borderRadius: 14, padding: 24, boxShadow: '0 2px 8px rgba(30,198,182,0.06)', border: '1.5px solid #e0e0e0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>👤</span>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Personal Account</span>
              </div>
              <div style={{ marginBottom: 10, fontWeight: 600 }}>Requirements:</div>
              <ul style={{ color: '#222', fontSize: '1rem', marginBottom: 10, paddingLeft: 20 }}>
                <li>Valid passport & UAE residency visa</li>
                 
                <li>Proof of address</li>
                <li>UAE mobile number</li>
              </ul>
              <div style={{ marginBottom: 10, fontWeight: 600 }}>Benefits:</div>
              <ul style={{ color: '#222', fontSize: '1rem', marginBottom: 16, paddingLeft: 20 }}>
                <li>UAE & global ATM withdrawals</li>
                <li>Online & mobile banking</li>
                <li>Multi-currency support</li>
              </ul>
              <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, display: 'inline-block', textDecoration: 'underline', fontSize: '0.98rem' }}>Apply for Personal Account →</a>
            </div>
            {/* Corporate Account */}
            <div className="bank-account-type" style={{ flex: 1, minWidth: 320, background: '#f7f7f7', borderRadius: 14, padding: 24, boxShadow: '0 2px 8px rgba(30,198,182,0.06)', border: '1.5px solid #e0e0e0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>🏢</span>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Corporate Account</span>
              </div>
              <div style={{ marginBottom: 10, fontWeight: 600 }}>Requirements:</div>
              <ul style={{ color: '#222', fontSize: '1rem', marginBottom: 10, paddingLeft: 20 }}>
                <li>UAE trade license</li>
                <li>Shareholder documents</li>
                <li>Proof of address</li>
                <li>UAE mobile number</li>
              </ul>
              <div style={{ marginBottom: 10, fontWeight: 600 }}>Benefits:</div>
              <ul style={{ color: '#222', fontSize: '1rem', marginBottom: 16, paddingLeft: 20 }}>
                <li>Business debit/credit cards</li>
                <li>Online & mobile banking</li>
                <li>Multi-currency support</li>
              </ul>
              <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, display: 'inline-block', textDecoration: 'underline', fontSize: '0.98rem' }}>Apply for Corporate Account →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section className="bank-account-section" style={{ background: '#fff', padding: '0 0 48px 0' }}>
        <div className="bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18, textAlign: 'center' }}>Partner Banks</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 24, textAlign: 'center' }}>We work with all major local and international banks in the UAE:</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, marginBottom: 16 }}>
            {/* First row */}
                          <div className="bank-account-banks-row" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/nbd.png" alt="Emirates NBD" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/fab.webp" alt="First Abu Dhabi Bank" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/Commercial_Bank_of_Dubai_logo.svg.png" alt="Commercial Bank of Dubai" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/mashreq.webp" alt="Mashreq Bank" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
              </div>
            {/* Second row */}
                          <div className="bank-account-banks-row" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/dubai-islamic-bank-seeklogo.png" alt="Dubai Islamic Bank" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/hsbc.webp" alt="HSBC" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/fab.webp" alt="ADCB" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50, filter: 'grayscale(1) brightness(1.2)' }} />
                </div>
                <div className="bank-account-bank-card" style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', boxShadow: '0 1px 4px rgba(30,198,182,0.04)', border: '1px solid #f0f0f0', minWidth: 180, minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/albaraka.webp" alt="alBaraka Bank" width={160} height={50} style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                </div>
              </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginBottom: 12, textAlign: 'center' }}>Plus many other local and international banks.</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#" className="bank-account-btn" style={{ background: '#1ec6b6', color: '#fff', padding: '10px 28px', borderRadius: 30, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>View All Banking Partners</a>
          </div>
        </div>
      </section>

      {/* Our Banking Process */}
      <section className="bank-account-section" style={{ background: '#fff', padding: '0 0 48px 0' }}>
        <div className="bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Our Banking Process</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Streamlined approach to bank account opening</p>
          <div className="bank-account-process" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
            {[
              { step: '01', label: 'Document Review', desc: 'Review your application and required documents.' },
              { step: '02', label: 'Bank Selection', desc: 'Help you select the right bank for your needs.' },
              { step: '03', label: 'Application Submission', desc: 'Complete application submission and compliance checks.' },
              { step: '04', label: 'Account Activation', desc: 'Handle banking setup and online/mobile access.' },
            ].map((item, i) => (
              <div key={i} className="bank-account-process-step" style={{ flex: 1, minWidth: 180, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontWeight: 700, fontSize: '2rem', color: '#1ec6b6', marginBottom: 8 }}>{item.step}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Opening a Bank Account? */}
      <section className="bank-account-section" style={{ background: '#fff', padding: '0 0 48px 0' }}>
        <div className="bank-account-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Need Help Opening a Bank Account?</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Our banking experts have successfully helped thousands of clients open accounts with UAE's top banks. Get personalized assistance for your banking needs.</p>
          <div className="bank-account-ready" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              '100% Success Rate',
              'All Major Banks',
              'Complete Support',
            ].map((item, i) => (
              <div key={i} className="bank-account-ready-item" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', fontWeight: 600, fontSize: '1.1rem' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div className="bank-account-footer" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 24px' }}>
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
        <div className="bank-account-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 24px 18px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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