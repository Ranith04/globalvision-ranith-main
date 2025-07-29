import '../../../styles/certificate-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function CertificatePage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="certificate-hero" style={{
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
         <div className="certificate-hero-content" style={{
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
              UAE Certificate Attestation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Professional document attestation and legalization services for the UAE.
            We specialize in handling birth, marriage, educational, and commercial certificates with precision and efficiency. Whether for employment, residency, or business setup, our expert team ensures your documents are attested and legalized in full compliance with UAE and international requirements.
            </p>
          </div>
        </div>
      </section>
      {/* Gateway Section */}
      <section className="certificate-gateway" style={{  background: '#E0E3EA', padding: '60px 0' }}>
        <div className="certificate-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Certificate Attestation Services</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img className="certificate-image" src="/images/Background-Border-Shadow-4.png" alt="Dubai Skyline" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>


      
      <div className="certificate-section" style={{ background: '#fff', padding: '64px 0 0 0', textAlign: 'center' }}>
        <div style={{ marginBottom: 18, color: '#7b8a9c', fontWeight: 500, fontSize: 15, letterSpacing: 0.2 }}>Our Services</div>
        <h1 style={{ fontWeight: 700, fontSize: '2.4rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Complete Attestation Solutions
        </h1>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Professional document attestation services for all types of certificates. We ensure your documents are legally recognized in the UAE.
        </p>
        <div className="certificate-services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto 56px auto',
          justifyItems: 'center',
        }}>
          {/* Personal Documents Card */}
          <div className="certificate-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="14" height="18" rx="3"/><path d="M9 8h8M9 12h8M9 16h5"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Personal Documents</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Attestation of personal certificates including birth, marriage, divorce, and death certificates.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Birth Certificate</li>
              <li>✔ Marriage Certificate</li>
              <li>✔ Divorce Certificate</li>
              <li>✔ Death Certificate</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Cost:</b> <span style={{ color: '#222' }}>AED 150 - 300</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Timeline:</b> <span style={{ color: '#222' }}>3-5 days</span></div>
            <button className="certificate-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Get Quote <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Educational Documents Card */}
          <div className="certificate-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M13 7v6l4 2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Educational Documents</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Complete attestation services for academic certificates, degrees, and transcripts.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Degree Certificates</li>
              <li>✔ Transcripts</li>
              <li>✔ Diploma</li>
              <li>✔ School Certificates</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Cost:</b> <span style={{ color: '#222' }}>AED 200 - 400</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Timeline:</b> <span style={{ color: '#222' }}>5-7 days</span></div>
            <button className="certificate-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Get Quote <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Commercial Documents Card */}
          <div className="certificate-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Commercial Documents</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Business document attestation for trade licenses, MOAs, and commercial certificates.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Trade License</li>
              <li>✔ MOA</li>
              <li>✔ Commercial Invoices</li>
              <li>✔ Certificates of Origin</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Cost:</b> <span style={{ color: '#222' }}>AED 250 - 500</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Timeline:</b> <span style={{ color: '#222' }}>7-10 days</span></div>
            <button className="certificate-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Get Quote <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Complete Attestation Process Section */}
      <section className="certificate-section" style={{ background: '#fafbfc', padding: '56px 0 56px 0', textAlign: 'center' }}>
        <div className="certificate-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
            Complete Attestation Process
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Our systematic 4-step process ensures your documents are properly attested and legally recognized in the UAE.
          </p>
          <div className="certificate-process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            maxWidth: 1200,
            margin: '0 auto',
            justifyItems: 'center',
          }}>
            {/* Step 1 */}
            <div className="certificate-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#fff', fontWeight: 700, fontSize: 22 }}>
                01
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Document Verification</div>
              <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Initial verification of documents for completeness and authenticity.</div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 14, borderRadius: 10, padding: '6px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
                Origin Country
              </div>
            </div>
            {/* Step 2 */}
            <div className="certificate-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#fff', fontWeight: 700, fontSize: 22 }}>
                02
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Ministry Attestation</div>
              <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Attestation by relevant ministry in the country of origin.</div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 14, borderRadius: 10, padding: '6px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
                Home Country Ministry
              </div>
            </div>
            {/* Step 3 */}
            <div className="certificate-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#fff', fontWeight: 700, fontSize: 22 }}>
                03
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Embassy Legalization</div>
              <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Legalization by UAE Embassy/Consulate in the origin country.</div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 14, borderRadius: 10, padding: '6px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
                UAE Embassy
              </div>
            </div>
            {/* Step 4 */}
            <div className="certificate-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#fff', fontWeight: 700, fontSize: 22 }}>
                04
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>MOFA Attestation</div>
              <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Final attestation by UAE Ministry of Foreign Affairs.</div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 14, borderRadius: 10, padding: '6px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
                UAE MOFA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Do You Need Certificate Attestation Section */}
      <section className="certificate-documents" style={{ background: '#fff', padding: '64px 0 64px 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, maxWidth: 1400, margin: '0 auto' }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 540 }}>
          <div style={{ background: '#19b893', color: '#fff', fontWeight: 700, fontSize: 15, borderRadius: 10, display: 'inline-block', padding: '6px 18px', marginBottom: 18 }}>
            Why Attestation?
          </div>
          <h2 style={{ fontWeight: 800, fontSize: '2.1rem', color: '#181f25', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            When Do You Need Certificate Attestation?
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 32, maxWidth: 600, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Document attestation is mandatory for various purposes in the UAE. Ensure your documents are legally valid for official procedures.
          </p>
          <div className="certificate-documents-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {/* Employment */}
            <div style={{ background: '#f8fafb', borderRadius: 16, border: '1.5px solid #e8f1f7', padding: '18px 18px 14px 18px', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, color: '#19b893', fontSize: 16, marginBottom: 8 }}>● Employment</div>
              <ul style={{ color: '#4a5a6a', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                <li>Job applications</li>
                <li>Professional licensing</li>
                <li>Work permit</li>
                <li>Salary certificates</li>
              </ul>
            </div>
            {/* Education */}
            <div style={{ background: '#f8fafb', borderRadius: 16, border: '1.5px solid #e8f1f7', padding: '18px 18px 14px 18px', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, color: '#19b893', fontSize: 16, marginBottom: 8 }}>● Education</div>
              <ul style={{ color: '#4a5a6a', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                <li>University admission</li>
                <li>Academic verification</li>
                <li>Scholarship applications</li>
                <li>Student visa</li>
              </ul>
            </div>
            {/* Immigration */}
            <div style={{ background: '#f8fafb', borderRadius: 16, border: '1.5px solid #e8f1f7', padding: '18px 18px 14px 18px', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, color: '#19b893', fontSize: 16, marginBottom: 8 }}>● Immigration</div>
              <ul style={{ color: '#4a5a6a', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                <li>Family visa</li>
                <li>Residence permit</li>
                <li>Sponsorship</li>
                <li>Golden visa applications</li>
              </ul>
            </div>
            {/* Business */}
            <div style={{ background: '#f8fafb', borderRadius: 16, border: '1.5px solid #e8f1f7', padding: '18px 18px 14px 18px', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, color: '#19b893', fontSize: 16, marginBottom: 8 }}>● Business</div>
              <ul style={{ color: '#4a5a6a', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                <li>Company setup</li>
                <li>Commercial agreements</li>
                <li>Trade licensing</li>
                <li>Investment permits</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right Column: Image */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img className="certificate-image" src="/images/Certificate Attestation Dubai.png" alt="Certificate Attestation" style={{ width: '100%', borderRadius: 22, objectFit: 'cover', maxHeight: 320, boxShadow: '0 2px 16px rgba(30,198,182,0.08)', marginTop: '200px' }} />
        </div>
      </section>
       {/* Global Attestation Services Section */}
       <section className="certificate-section" style={{ background: '#fafbfc', padding: '64px 0 64px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Global Attestation Services
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          We provide attestation services for documents from over 100 countries worldwide, ensuring proper legalization for use in the UAE.
        </p>
        <div className="certificate-countries" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto 40px auto',
          justifyItems: 'center',
        }}>
          {['India','Pakistan','Philippines','Bangladesh','Sri Lanka','Nepal','Egypt','Jordan','Lebanon','Sudan','Nigeria','Ghana','UK','USA','Canada','Australia','Germany','France','South Africa','Kenya','Ethiopia','Morocco','Tunisia','Algeria'].map(country => (
            <div key={country} style={{ background: '#fff', borderRadius: 12, border: '1.5px solid #e8f1f7', padding: '16px 0', minWidth: 0, width: '100%', fontWeight: 500, color: '#222', fontSize: 16, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              {country}
            </div>
          ))}
        </div>
        <button className="certificate-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer', marginTop: 0, display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>
          View All Countries <span style={{ fontSize: 20, marginLeft: 2 }}>🌐</span>
        </button>
      </section>

      {/* Why Choose Our Attestation Services */}
      <section className="certificate-section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="certificate-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#333' }}>Why Choose Our Attestation Services?</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 48, maxWidth: 700, margin: '0 auto 48px auto' }}>
            Professional expertise, proven processes, and reliable service for all your document attestation needs.
          </p>
          
          <div className="certificate-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, marginTop: 32 }}>
            {/* Fast Processing */}
            <div className="certificate-feature-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
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
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Fast Processing</h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                  Quick turnaround times with express services available
                </p>
              </div>
            </div>

            {/* Secure Handling */}
            <div className="certificate-feature-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Secure Handling</h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                  Safe and secure handling of your valuable documents
                </p>
              </div>
            </div>

            {/* Expert Team */}
            <div className="certificate-feature-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Expert Team</h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                  Experienced professionals with deep knowledge of attestation procedures
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="certificate-feature-card" style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: '40px 32px', 
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
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,20.02 12,16.77 5.82,20.02 7,14.14 2,9.27 8.91,8.26" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: 16 }}>Success Rate</h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                  High success rate with proper documentation and follow-up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="certificate-section" style={{ background: '#fafbfc', padding: '56px 0 56px 0', textAlign: 'center' }}>
        <div className="certificate-container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Transparent Pricing
          </h2>
          <p style={{ color: '#7b8a9c', fontSize: '1.08rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Clear and competitive pricing for all attestation services
          </p>
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', border: '1.5px solid #f0f3f7', maxWidth: 700, margin: '0 auto', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 16 }}>
              <thead>
                <tr style={{ background: '#fff' }}>
                  <th style={{ textAlign: 'left', padding: '18px 24px', color: '#222', fontWeight: 700, borderBottom: '1.5px solid #f0f3f7' }}>Document Type</th>
                  <th style={{ textAlign: 'left', padding: '18px 24px', color: '#222', fontWeight: 700, borderBottom: '1.5px solid #f0f3f7' }}>Standard</th>
                  <th style={{ textAlign: 'left', padding: '18px 24px', color: '#222', fontWeight: 700, borderBottom: '1.5px solid #f0f3f7' }}>Express</th>
                  <th style={{ textAlign: 'left', padding: '18px 24px', color: '#222', fontWeight: 700, borderBottom: '1.5px solid #f0f3f7' }}>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '16px 24px', color: '#222', borderBottom: '1.5px solid #f0f3f7' }}>Birth Certificate</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 150</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 250</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>3-5 days</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '16px 24px', color: '#222', borderBottom: '1.5px solid #f0f3f7' }}>Marriage Certificate</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 150</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 250</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>3-5 days</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '16px 24px', color: '#222', borderBottom: '1.5px solid #f0f3f7' }}>Educational Documents</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 200</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>AED 350</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683', borderBottom: '1.5px solid #f0f3f7' }}>5-7 days</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '16px 24px', color: '#222' }}>Commercial Documents</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683' }}>AED 300</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683' }}>AED 500</td>
                  <td style={{ padding: '16px 24px', color: '#6b7683' }}>7-10 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Need Professional Notary Services Section */}
 <section className="certificate-section" style={{ background: '#fff', padding: '64px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Need Professional Notary Services?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 38, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get your documents notarized by certified professionals. We handle all types of personal and business documents with complete confidentiality.
        </p>
        <div className="certificate-ready-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 40px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M13 7v6l4 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Same-day service available</span>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Secure and confidential</span>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><circle cx="11" cy="11" r="4"/><path d="M11 1v2M11 21v2M1 11h2M21 11h2M3.93 3.93l1.41 1.41M16.66 16.66l1.41 1.41M3.93 18.07l1.41-1.41M16.66 7.34l1.41-1.41"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Internationally recognized</span>
          </div>
        </div>
      </section>
      {/* Trust Bar (bottom) */}
      <div className="certificate-trust" style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for professional notary services in Dubai and across UAE.
      </div>
      
      <ContactLeadSection />
      {/* Footer Section */}
      <footer className="certificate-footer" style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
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
        <div className="certificate-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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