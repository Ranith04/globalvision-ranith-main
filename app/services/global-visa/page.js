import { FaMapMarkedAlt } from 'react-icons/fa';
import '../../../styles/global-visa-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function GlobalVisaPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="global-visa-hero" style={{
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
         <div className="global-visa-hero-content" style={{
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
                UAE Global Visa
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Your gateway to worldwide travel starts here.We offer expert visa assistance for over 100 countries, providing end-to-end support for UAE residents and international travelers. Whether you're traveling for business, tourism, or study, our personalized approach ensures fast, accurate processing and peace of mind throughout your journey.
             </p>
          </div>
        </div>
      </section>
      {/* Gateway Section */}
      <section className="global-visa-gateway" style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div className="global-visa-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Global Visa Assistance</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img className="global-visa-image" src="/images/Background-Border-Shadow-2.png" alt="Passport and Visa Ticket" style={{ borderRadius: 16, width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Comprehensive Visa Solutions */}
      <section className="global-visa-section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="global-visa-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: '1rem', color: '#666', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Our Services</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#333' }}>Comprehensive Visa Solutions</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 48, maxWidth: 700, margin: '0 auto 48px auto' }}>
            From tourist visas to business travel, we provide expert assistance for all types of international visa applications.
          </p>
          
          <div className="global-visa-solutions" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginTop: 32 }}>
            {/* Tourist Visas */}
            <div className="global-visa-solution-card" style={{ 
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="white"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" fill="none" stroke="#1ec6b6" strokeWidth="2"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="#1ec6b6" strokeWidth="2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Tourist Visas</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Worldwide tourist visa assistance for leisure and business travel from UAE.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['Europe (Schengen)', 'USA', 'Canada', 'Australia', 'UK', 'Asia Pacific'].map((item, i) => (
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
              
              <a href="#contact" className="global-visa-btn" style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0,
                textDecoration: 'none'
              }}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Family Visit Visas */}
            <div className="global-visa-solution-card" style={{ 
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Family Visit Visas</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Help family members visit you in UAE or assist with your visits abroad.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['Family reunion visas', 'Spouse visas', 'Parent visas', 'Children visas'].map((item, i) => (
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
              
              <a href="#contact" className="global-visa-btn" style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0,
                textDecoration: 'none'
              }}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Business Visas */}
            <div className="global-visa-solution-card" style={{ 
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Business Visas</h3>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
                Business visa support for international travel and trade opportunities.
              </p>
              
              <div style={{ marginBottom: 32, flex: 1 }}>
                {['Trade missions', 'Conference visas', 'Investment visas', 'Meeting visas'].map((item, i) => (
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
              
              <a href="#contact" className="global-visa-btn" style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#333', 
                fontSize: '1rem', 
                fontWeight: 500, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0,
                textDecoration: 'none'
              }}>
                Apply Now 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Visa Assistance for 100+ Countries */}
      <section className="global-visa-section" style={{ background: '#fff', padding: '70px 0 90px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Visa Assistance for 100+ Countries
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 56, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          We provide comprehensive visa assistance for destinations across all continents, helping you travel the world with confidence.
        </p>
        <div className="global-visa-countries-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          maxWidth: 1400,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Card 1: Europe */}
          <div className="global-visa-country-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Europe</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; Germany</li>
              <li style={{ marginBottom: 4 }}>&#9679; France</li>
              <li style={{ marginBottom: 4 }}>&#9679; Italy</li>
              <li style={{ marginBottom: 4 }}>&#9679; Spain</li>
              <li style={{ marginBottom: 4 }}>&#9679; Netherlands</li>
              <li>&#9679; Switzerland</li>
            </ul>
          </div>
          {/* Card 2: Americas */}
          <div className="global-visa-country-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Americas</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; USA</li>
              <li style={{ marginBottom: 4 }}>&#9679; Canada</li>
              <li style={{ marginBottom: 4 }}>&#9679; Brazil</li>
              <li style={{ marginBottom: 4 }}>&#9679; Argentina</li>
              <li style={{ marginBottom: 4 }}>&#9679; Mexico</li>
              <li>&#9679; Chile</li>
            </ul>
          </div>
          {/* Card 3: Asia Pacific */}
          <div className="global-visa-country-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Asia Pacific</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; Australia</li>
              <li style={{ marginBottom: 4 }}>&#9679; Japan</li>
              <li style={{ marginBottom: 4 }}>&#9679; Singapore</li>
              <li style={{ marginBottom: 4 }}>&#9679; South Korea</li>
              <li style={{ marginBottom: 4 }}>&#9679; New Zealand</li>
              <li>&#9679; Malaysia</li>
            </ul>
          </div>
          {/* Card 4: Others */}
          <div className="global-visa-country-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Others</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; UK</li>
              <li style={{ marginBottom: 4 }}>&#9679; Russia</li>
              <li style={{ marginBottom: 4 }}>&#9679; South Africa</li>
              <li style={{ marginBottom: 4 }}>&#9679; Turkey</li>
              <li style={{ marginBottom: 4 }}>&#9679; Egypt</li>
              <li>&#9679; Morocco</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Section 5: Easy 5-Step Visa Process */}
      <section className="global-visa-process" style={{ background: '#fafbfc', padding: '64px 0 0 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48, maxWidth: 1200, margin: '0 auto' }}>
        {/* Left: Steps */}
        <div style={{ flex: '1 1 520px', minWidth: 320, maxWidth: 600, padding: '0 48px' }}>
          <div style={{ color: '#1ec6b6', fontWeight: 600, fontSize: 15, marginBottom: 10 }}>Simple Process</div>
          <h2 style={{ fontWeight: 700, fontSize: '2.1rem', color: '#222', marginBottom: 16 }}>Easy 5-Step Visa Process</h2>
          <p style={{ color: '#6b7683', fontSize: '1.08rem', marginBottom: 32 }}>
            Our streamlined process makes visa applications simple and stress-free, with expert guidance at every step.
          </p>
          <div className="global-visa-steps" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {/* Step 1 */}
            <div className="global-visa-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="global-visa-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>01</span>
              <div>
                <div className="global-visa-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Consultation & Assessment</div>
                <div className="global-visa-step-desc" style={{ color: '#6b7683', fontSize: 15 }}>Free consultation to assess your visa requirements and eligibility.</div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="global-visa-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="global-visa-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>02</span>
              <div>
                <div className="global-visa-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Document Preparation</div>
                <div className="global-visa-step-desc" style={{ color: '#6b7683', fontSize: 15 }}>Comprehensive checklist and assistance with document preparation.</div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="global-visa-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="global-visa-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>03</span>
              <div>
                <div className="global-visa-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Application Submission</div>
                <div className="global-visa-step-desc" style={{ color: '#6b7683', fontSize: 15 }}>Professional submission of your visa application to the relevant embassy.</div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="global-visa-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="global-visa-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>04</span>
              <div>
                <div className="global-visa-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Application Tracking</div>
                <div className="global-visa-step-desc" style={{ color: '#6b7683', fontSize: 15 }}>Regular updates on your application status and processing timeline.</div>
              </div>
            </div>
            {/* Step 5 */}
            <div className="global-visa-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span className="global-visa-step-number" style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>05</span>
              <div>
                <div className="global-visa-step-title" style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Visa Collection</div>
                <div className="global-visa-step-desc" style={{ color: '#6b7683', fontSize: 15 }}>Secure collection and delivery of your approved visa documents.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 540, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px' }}>
          {/* Replace src with your uploaded image */}
          <img className="global-visa-image" src="/images/Global Visa Assistance (1).png" alt="Passport and Map" style={{ width: '100%', maxWidth: 470, height: 400, objectFit: 'cover', borderRadius: 20, boxShadow: '0 2px 18px rgba(30,198,182,0.13)' }} />
        </div>
      </section>
      
      {/* Section 6: Success Stories from Around the World */}
      <section className="global-visa-section" style={{ background: '#fff', padding: '80px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>
          Success Stories from Around the World
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Helping travelers achieve their visa goals with professional expertise
        </p>
        <div className="global-visa-testimonials" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto 64px auto',
          justifyItems: 'center',
        }}>
          {/* Testimonial 1 */}
          <div className="global-visa-testimonial-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>Ahmad Hassan</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Schengen Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Smooth processing for my European business tour. The team handled everything professionally."
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="global-visa-testimonial-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>Priya Sharma</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Australia Tourist Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Excellent guidance throughout the process. Got my visa approved in 10 days!"
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="global-visa-testimonial-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>John Mitchell</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Canada Business Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Professional service for my trade mission. Highly recommend their expertise."
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Ready to Travel the World? */}
      <section className="global-visa-section" style={{ background: '#fafbfc', padding: '64px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 18, fontFamily: 'Playfair Display, serif' }}>
          Ready to Travel the World?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get expert visa assistance for your next international journey. Our team is ready to help you navigate visa requirements for any destination.
        </p>
        <div className="global-visa-ready-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 48px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div className="global-visa-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>100+ countries covered</span>
          </div>
          {/* Feature 2 */}
          <div className="global-visa-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>95% approval rate</span>
          </div>
          {/* Feature 3 */}
          <div className="global-visa-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/><circle cx="11" cy="16" r="1.5"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Expert consultation team</span>
          </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="global-visa-trust" style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for global visa assistance. Making international travel accessible for everyone.
      </div>
      
        <ContactLeadSection />
        {/* Footer Section */}
      <footer className="global-visa-footer" style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
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
        <div className="global-visa-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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