import Image from 'next/image';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function GoldenVisaPage() {
  return (
    <div style={{ background: '#f7f7f7' }}>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="golden-visa-hero" style={{
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
         <div className="golden-visa-hero-content" style={{
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
              UAE Golden Visa
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Secure your future in the UAE with our expert Golden Visa services. We offer complete guidance and support for individuals looking to obtain long-term residency through the UAE Golden Visa program. Whether you qualify with a monthly salary of AED 30,000, or through investment opportunities, real estate ownership, entrepreneurship, or specialized talent, our team ensures a smooth, hassle-free application process.
            </p>
          </div>
        </div>
      </section>

      {/* Gateway Section */}
      <section className="golden-visa-section" style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div className="golden-visa-gateway golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Your Gateway to Long-Term Residency</h2>
          </div>
          <div style={{  flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <Image src="/images/golden-1.jpg" alt="Dubai Skyline" width={500} height={300} className="golden-visa-image" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
      

      {/* What is UAE Golden Visa */}
      <section className="golden-visa-section" style={{ background: '#fff', padding: '40px 0 0 0' }}>
        <div className="golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>What is UAE Golden Visa?</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32, maxWidth: 900 }}>
            Introduced in 2019, the Golden Visa is a long-term residency program designed to attract top talent, investors, and entrepreneurs to contribute to UAE's economic development. It offers unprecedented flexibility and opportunities for qualified individuals.
          </p>
          <div className="golden-visa-features" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { icon: '🕒', label: 'Long-Term Residency', desc: '5-10 year renewable visa with no need to return every 6 months.' },
              { icon: '👨‍👩‍👧‍👦', label: 'Sponsor Family Members', desc: 'Sponsor spouse, children, and parents with the same benefits.' },
              { icon: '💼', label: 'Business Opportunities', desc: 'Access to UAE\'s thriving business ecosystem and free zones.' },
              { icon: '🚫', label: 'No Local Sponsor', desc: 'Live and work independently without requiring a local sponsor.' },
            ].map((item, i) => (
              <div key={i} className="golden-visa-feature-card" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa Categories */}
      <section className="golden-visa-section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#333' }}>Golden Visa Categories</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px auto' }}>
            Multiple pathways to obtain your Golden Visa based on your qualifications and investments
          </p>
          
          <div className="golden-visa-categories" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginTop: 32 }}>
            {/* Company Investor */}
            <div className="golden-visa-category-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 24px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'center',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1ec6b6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px auto' 
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21V19C3 17.3431 4.34315 16 6 16H10C11.6569 16 13 17.3431 13 19V21H3Z" fill="white"/>
                    <path d="M16 21V19C16 17.3431 17.3431 16 19 16H19C20.6569 16 22 17.3431 22 19V21H16Z" fill="white"/>
                    <path d="M3 9V3H21V9H3Z" fill="white"/>
                    <path d="M7 12V9H17V12H7Z" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Company Investor</h3>
              </div>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}>
                Learn More 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Property Investor */}
            <div className="golden-visa-category-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 24px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'center',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1ec6b6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px auto' 
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21V19C3 17.3431 4.34315 16 6 16H10C11.6569 16 13 17.3431 13 19V21H3Z" fill="white"/>
                    <path d="M16 21V19C16 17.3431 17.3431 16 19 16H19C20.6569 16 22 17.3431 22 19V21H16Z" fill="white"/>
                    <path d="M3 9V3H21V9H3Z" fill="white"/>
                    <path d="M7 12V9H17V12H7Z" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Property Investor</h3>
              </div>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}>
                Learn More 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Senior Manager */}
            <div className="golden-visa-category-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 24px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'center',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1ec6b6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px auto' 
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="white"/>
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Senior Manager</h3>
              </div>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}>
                Learn More 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* University Graduate */}
            <div className="golden-visa-category-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 24px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'center',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1ec6b6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px auto' 
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 7L12 11L22 7L12 3Z" fill="white"/>
                    <path d="M2 17L12 21L22 17" fill="white"/>
                    <path d="M2 12L12 16L22 12" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>University Graduate</h3>
              </div>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}>
                Learn More 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Application Process */}
      <section className="golden-visa-section" style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div className="golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Simple Application Process</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Our expert consultants guide you through every step.</p>
          <div className="golden-visa-process" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
            {[
              { step: '01', label: 'Prepare Documents', desc: 'We help gather all required paperwork and ensure compliance with GDRFA requirements.' },
              { step: '02', label: 'Submit Application', desc: 'Complete application submission with transparent fee breakdown and timeline.' },
              { step: '03', label: 'Receive Your Visa', desc: 'Get your approved Golden Visa within 1-3 weeks processing time.' },
            ].map((item, i) => (
              <div key={i} className="golden-visa-process-step" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontWeight: 700, fontSize: '2rem', color: '#1ec6b6', marginBottom: 8 }}>{item.step}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="golden-visa-section" style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div className="golden-visa-benefits golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Benefits of Golden Visa</h2>
            <ul style={{ color: '#222', fontSize: '1.1rem', marginBottom: 24, paddingLeft: 20 }}>
              <li>No need to return every 6 months to maintain visa status</li>
              <li>Sponsor multiple family members including parents</li>
              <li>Access to exclusive discounts on government services</li>
              <li>Multiple business opportunities in free zones and mainland</li>
              <li>Path to long-term stability in the UAE</li>
            </ul>
            <a href="#" className="golden-visa-btn" style={{ background: '#1ec6b6', color: '#fff', padding: '12px 32px', borderRadius: 30, fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>Apply Now</a>
          </div>
          <div style={{ flex: 1, minWidth: 320 }}>
            <Image src="/images/go;den-2.jpg" alt="Dubai Night" width={500} height={300} className="golden-visa-image" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="golden-visa-section" style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div className="golden-visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Ready to Start Your Golden Visa Journey?</h2>
          <div className="golden-visa-ready" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              'Expert Guidance',
              'Transparent Pricing',
              'Fast Processing',
            ].map((item, i) => (
              <div key={i} className="golden-visa-ready-item" style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', fontWeight: 600, fontSize: '1.1rem' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div className="golden-visa-footer" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
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
        <div className="golden-visa-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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