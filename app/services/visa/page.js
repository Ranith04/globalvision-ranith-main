'use client';
import '../../../styles/visa-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function VisaPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="visa-hero" style={{
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
         <div className="visa-hero-content" style={{
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
              UAE Visa Services
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Your trusted partner for all visa requirements.
             From UAE entry visas to global travel documents, we manage the entire process with expertise, accuracy, and personalized care. Whether you're applying for tourist, business, residency, or work visas, our dedicated team ensures smooth processing and full compliance — giving you confidence every step of the way.
             </p>
          </div>
        </div>
      </section>

      {/* Gateway Section */}
      <section className="visa-gateway" style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div className="visa-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Complete Visa Service</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img className="visa-image" src="/images/passport.png" alt="Dubai Skyline" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Professional Visa Solutions */}
      <section className="visa-section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: '1rem', color: '#666', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Our Services</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#333' }}>Professional Visa Solutions</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 48, maxWidth: 700, margin: '0 auto 48px auto' }}>
            We provide comprehensive visa services for UAE entry and international travel, ensuring smooth and hassle-free processing for all your travel needs.
          </p>
          
          <div className="visa-solutions" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginTop: 32 }}>
            {/* Business Visa */}
            <div className="visa-solution-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'left',
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                width: 60, 
                height: 60, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 24 
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21V19C3 17.3431 4.34315 16 6 16H10C11.6569 16 13 17.3431 13 19V21H3Z" fill="white"/>
                  <path d="M16 21V19C16 17.3431 17.3431 16 19 16H19C20.6569 16 22 17.3431 22 19V21H16Z" fill="white"/>
                  <path d="M3 9V3H21V9H3Z" fill="white"/>
                  <path d="M7 12V9H17V12H7Z" fill="white"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Business Visa</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Comprehensive business visa services for entrepreneurs and corporate professionals.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['Investor visa', 'Employment visa', 'Mission visa', 'Conference visa'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ 
                      width: 20, 
                      height: 20, 
                      borderRadius: '50%', 
                      background: '#1ec6b6', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: 12,
                      flexShrink: 0
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#666' }}>{item}</span>
                  </div>
                ))}
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
                gap: 8,
                padding: 0
              }} onClick={() => window.location.href = '#contact'}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Family Visa */}
            <div className="visa-solution-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'left',
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                width: 60, 
                height: 60, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 24 
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="white"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="white"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Family Visa</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Reunite with your loved ones through our family visa and sponsorship services.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['Spouse visa', 'Children visa', 'Parents visa', 'Dependent visa'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ 
                      width: 20, 
                      height: 20, 
                      borderRadius: '50%', 
                      background: '#1ec6b6', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: 12,
                      flexShrink: 0
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#666' }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="visa-btn" style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0
              }} onClick={() => window.location.href = '#contact'}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Student Visa */}
            <div className="visa-solution-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              textAlign: 'left',
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                width: 60, 
                height: 60, 
                background: '#1ec6b6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 24 
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L2 7L12 11L22 7L12 3Z" fill="white"/>
                  <path d="M2 17L12 21L22 17" fill="white"/>
                  <path d="M2 12L12 16L22 12" fill="white"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Student Visa</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Educational visa support for students pursuing studies in top universities worldwide.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['University admission', 'Student permit', 'Research visa', 'Exchange programs'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ 
                      width: 20, 
                      height: 20, 
                      borderRadius: '50%', 
                      background: '#1ec6b6', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: 12,
                      flexShrink: 0
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#666' }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="visa-btn" style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0
              }} onClick={() => window.location.href = '#contact'}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Types of UAE Visas */}
      <section className="visa-section" style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div className="visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div className="visa-types-section" style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            {/* Left Side - Content */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{ 
                  background: '#1ec6b6', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: 500 
                }}>
                  UAE Entry Visas
                </span>
              </div>
              
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 20, color: '#333', lineHeight: 1.2 }}>
                All Types of UAE Visas
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 40, lineHeight: 1.6 }}>
                Whether you're visiting for tourism, business, or planning to work in the UAE, we provide comprehensive visa services for all categories.
              </p>
              
              {/* Visa Types List */}
              <div className="visa-types-list" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ 
                  background: 'white', 
                  padding: '24px', 
                  borderRadius: '12px', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e5e7eb'
                }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 0 }}>Tourist Visa</h3>
                </div>
                
                <div style={{ 
                  background: 'white', 
                  padding: '24px', 
                  borderRadius: '12px', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e5e7eb'
                }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 0 }}>Transit Visa</h3>
                </div>
                
                <div style={{ 
                  background: 'white', 
                  padding: '24px', 
                  borderRadius: '12px', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e5e7eb'
                }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 0 }}>Employment Visa</h3>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div style={{ flex: 1, minWidth: 400, marginTop: 140 }}>
              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <img 
                  className="visa-image"
                  src="/images/UAE Visa Services.png" 
                  alt="UAE Visa Documents" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Visa Application Process Section */}
      <section className="visa-section" style={{ background: '#fafbfc', padding: '56px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Simple Visa Application Process
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Our streamlined process makes visa applications quick and stress-free, with expert support at every step.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Step 1 */}
          <div className="visa-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>01</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Document Assessment</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Review requirements and assess your documents for completeness.</div>
          </div>
          {/* Step 2 */}
          <div className="visa-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>02</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Application Preparation</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Complete visa application forms with accurate information.</div>
          </div>
          {/* Step 3 */}
          <div className="visa-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>03</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Submission & Tracking</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Submit application and track progress with regular updates.</div>
          </div>
          {/* Step 4 */}
          <div className="visa-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>04</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Visa Collection</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Secure collection of your approved visa documents.</div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Visa Services Section */}
      <section className="visa-section" style={{ background: '#fff', padding: '56px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Why Choose Our Visa Services?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Professional expertise, proven track record, and personalized service for all your visa requirements.
        </p>
        <div className="visa-features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Expert Team */}
          <div className="visa-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="10" r="4"/><path d="M21 21c0-4-4-6-8-6s-8 2-8 6"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Expert Team</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Experienced visa consultants with deep knowledge of immigration laws</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              10+ Years Experience
            </div>
          </div>
          {/* Fast Processing */}
          <div className="visa-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M13 7v6l4 2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Fast Processing</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Quick turnaround times with expedited services available</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              95% On-Time Delivery
            </div>
          </div>
          {/* High Success Rate */}
          <div className="visa-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M9 13l2 2 4-4"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>High Success Rate</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Proven track record with excellent visa approval rates</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              98% Approval Rate
            </div>
          </div>
          {/* 24/7 Support */}
          <div className="visa-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 16.09 8.26 22 9.27 17 14.14 18.18 21.02 13 17.77 7.82 21.02 9 14.14 4 9.27 9.91 8.26 13 2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>24/7 Support</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Round-the-clock customer support for all your queries</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              24/7 Availability
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="visa-section" style={{ background: '#fafbfc', padding: '56px 0 64px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Common questions about our visa services
        </p>
        <div className="visa-faq" style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* FAQ 1 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>What documents do I need for a UAE tourist visa?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Passport (valid 6+ months), passport photos, confirmed hotel booking, return flight ticket, and bank statements.
            </div>
          </div>
          {/* FAQ 2 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>How long does visa processing take?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Processing times vary: Tourist visas 2-5 days, Business visas 5-10 days, Family visas 2-3 weeks.
            </div>
          </div>
          {/* FAQ 3 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>Can I extend my UAE visa?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Yes, tourist visas can be extended for 30 days. Visit and business visas have different extension rules.
            </div>
          </div>
          {/* FAQ 4 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>Do you provide visa insurance?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Yes, we offer comprehensive travel insurance packages that meet UAE visa requirements.
            </div>
          </div>
        </div>
      </section>

      {/* Need Professional Visa Assistance Section */}
      <section className="visa-section" style={{ background: '#fff', padding: '64px 0 64px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Need Professional Visa Assistance?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 24, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get expert help with your visa application. Our team provides personalized service to ensure your visa process is smooth and successful.
        </p>
        <div className="visa-ready-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 32px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M13 7v6l4 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Fast processing times</span>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Secure document handling</span>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/><circle cx="11" cy="16" r="1.5"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Expert consultation team</span>
          </div>
        </div>
      </section>
      {/* Trust Bar (bottom) */}
      <div className="visa-trust" style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for professional visa services. Making travel dreams reality with expert guidance.
      </div>

      <ContactLeadSection />
      {/* Footer Section */}
      <footer className="visa-footer" style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
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
        <div className="visa-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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