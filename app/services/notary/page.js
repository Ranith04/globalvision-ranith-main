import '../../../styles/notary-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function NotaryPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section className="notary-hero" style={{
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
         <div className="notary-hero-content" style={{
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
              UAE Notary Services
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Professional document notarization, authentication, and legalization services in Dubai and across the UAE.
            We assist individuals and businesses with certifying legal documents for both local and international use, ensuring compliance with UAE and global standards. From power of attorney, commercial agreements, to personal certificates, our trusted services are fast, reliable, and recognized worldwide — making your cross-border transactions smooth and legally secure.
             </p>
          </div>
        </div>
      </section>
{/* Gateway Section */}
<section className="notary-gateway" style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div className="notary-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Certified Notary Services</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img className="notary-image" src="/images/Background-Border-Shadow-1.png" alt="Dubai Skyline" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      <div className="notary-section" style={{ background: '#fff', padding: '64px 0 0 0', textAlign: 'center' }}>
        <div style={{ marginBottom: 18, color: '#7b8a9c', fontWeight: 500, fontSize: 15, letterSpacing: 0.2 }}>Our Services</div>
        <h1 style={{ fontWeight: 700, fontSize: '2.4rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Complete Notary Solutions
        </h1>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          From simple document notarization to complex legal document drafting, we provide comprehensive notary services for all your needs.
        </p>
        <div className="notary-services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto 56px auto',
          justifyItems: 'center',
        }}>
          {/* Document Notarization Card */}
          <div className="notary-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="14" height="18" rx="3"/><path d="M9 8h8M9 12h8M9 16h5"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Document Notarization</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Official notarization of personal and business documents by certified UAE notaries.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Power of Attorney</li>
              <li>✔ Affidavits</li>
              <li>✔ Contracts</li>
              <li>✔ Academic certificates</li>
            </ul>
            <a href="#contact" className="notary-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              Learn More <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </a>
          </div>
          {/* Document Authentication Card */}
          <div className="notary-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2v20M2 13h20"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Document Authentication</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Complete authentication and legalization services for international document recognition.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Embassy legalization</li>
              <li>✔ Ministry attestation</li>
              <li>✔ Apostille services</li>
              <li>✔ Translation services</li>
            </ul>
            <a href="#contact" className="notary-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              Learn More <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </a>
          </div>
          {/* Legal Document Drafting Card */}
          <div className="notary-service-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Legal Document Drafting</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Professional drafting of legal documents compliant with UAE laws and regulations.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Agreements</li>
              <li>✔ MOUs</li>
              <li>✔ Wills</li>
              <li>✔ Property deeds</li>
            </ul>
            <a href="#contact" className="notary-btn" style={{ background: '#fff', color: '#222', border: '1.5px solid #e3f6f4', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              Learn More <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </a>
          </div>
        </div>
      </div>
      {/* We Handle All Types of Documents Section */}
      <section className="notary-documents" style={{ background: '#fff', padding: '64px 0 64px 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, maxWidth: 1600, margin: '0 auto 32px auto' }}>
        {/* Left Column */}
        <div style={{ flex: 1.2, minWidth: 0, maxWidth: 800, textAlign: 'left', padding: '0 32px' }}>
          <div style={{ background: '#19b893', color: '#fff', fontWeight: 700, fontSize: 15, borderRadius: 10, display: 'inline-block', padding: '6px 18px', marginBottom: 18 }}>
            Document Types
          </div>
          <h2 style={{ fontWeight: 800, fontSize: '2.4rem', color: '#181f25', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            We Handle All Types of Documents
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.18rem', marginBottom: 32, maxWidth: 600, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Whether personal certificates or business documents, we provide professional notarization and authentication services for all document types.
          </p>
          <div className="notary-documents-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: 32 }}>
            <ul style={{ color: '#19b893', fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none', fontWeight: 500 }}>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Birth Certificates</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Divorce Certificates</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Educational Documents</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Power of Attorney</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Commercial Documents</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Immigration Papers</li>
            </ul>
            <ul style={{ color: '#19b893', fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none', fontWeight: 500 }}>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Marriage Certificates</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Death Certificates</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Employment Contracts</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Affidavits</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Property Documents</li>
              <li style={{ marginBottom: 8 }}><span style={{ color: '#19b893', fontWeight: 700, marginRight: 8 }}>✔</span> Medical Certificates</li>
            </ul>
          </div>
          <a href="#contact" className="notary-btn" style={{ background: 'linear-gradient(90deg, #19b893 60%, #00796b 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '15px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 0, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 8px rgba(30,198,182,0.10)', textDecoration: 'none' }}>
            View All Services <span style={{ fontSize: 22, marginLeft: 2 }}>→</span>
          </a>
        </div>
        {/* Right Column: Image */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
          <img className="notary-image" src="/images/Notary Services Dubai.png" alt="Notary Document Signing" style={{ width: '100%', borderRadius: 22, objectFit: 'cover', maxHeight: 370, boxShadow: '0 2px 16px rgba(30,198,182,0.08)', marginTop: '100px' }} />
        </div>
      </section>
      {/* Simple 4-Step Process Section */}
      <section className="notary-section" style={{ background: '#fafbfc', padding: '56px 0 56px 0', textAlign: 'center' }}>
        <div className="notary-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 10, fontFamily: 'Playfair Display, serif' }}>
            Simple 4-Step Process
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 36, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Get your documents notarized quickly and efficiently with our streamlined process.
          </p>
          <div className="notary-process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            maxWidth: 1200,
            margin: '0 auto',
            justifyItems: 'center',
          }}>
            {/* Step 1 */}
            <div className="notary-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
              </div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>01</div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Document Review</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Submit your documents for initial review and requirements assessment.</div>
            </div>
            {/* Step 2 */}
            <div className="notary-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10"/><polyline points="14 8 14 14 17 17"/></svg>
              </div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>02</div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Appointment Booking</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Schedule an appointment with our certified notary professionals.</div>
            </div>
            {/* Step 3 */}
            <div className="notary-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M14 18v-6"/><circle cx="14" cy="10" r="2"/></svg>
              </div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>03</div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Notarization</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Complete the notarization process with proper verification.</div>
            </div>
            {/* Step 4 */}
            <div className="notary-process-step" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10"/><polyline points="10 14 13 17 18 11"/></svg>
              </div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>04</div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Document Delivery</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Receive your notarized documents with official certification.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Our Notary Services Section */}
      <section className="notary-section" style={{ background: '#fff', padding: '56px 0 56px 0', textAlign: 'center' }}>
        <div className="notary-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
            Why Choose Our Notary Services?
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Professional, reliable, and efficient notary services backed by years of experience in UAE legal requirements.
          </p>
          <div className="notary-features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            maxWidth: 1200,
            margin: '0 auto',
            justifyItems: 'center',
          }}>
            {/* Certified Notaries */}
            <div className="notary-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="10" r="4"/><path d="M21 21c0-4-4-6-8-6s-8 2-8 6"/></svg>
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Certified Notaries</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Licensed and experienced notary professionals</div>
            </div>
            {/* Quick Turnaround */}
            <div className="notary-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M13 7v6l4 2"/></svg>
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Quick Turnaround</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Fast processing with same-day services available</div>
            </div>
            {/* International Recognition */}
            <div className="notary-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><circle cx="13" cy="13" r="4"/><path d="M13 2v2M13 22v2M2 13h2M22 13h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 21.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>International Recognition</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Documents recognized worldwide</div>
            </div>
            {/* Secure Process */}
            <div className="notary-feature-card" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V7a8 8 0 0 0-16 0v5c0 6 8 10 8 10z"/></svg>
              </div>
              <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Secure Process</div>
              <div style={{ color: '#6b7683', fontSize: 15 }}>Confidential and secure document handling</div>
            </div>
          </div>
        </div>
      </section>
      {/* Need Professional Notary Services Section */}
      <section className="notary-section" style={{ background: '#fff', padding: '64px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Need Professional Notary Services?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 38, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get your documents notarized by certified professionals. We handle all types of personal and business documents with complete confidentiality.
        </p>
        <div className="notary-ready-features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 40px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div className="notary-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M13 7v6l4 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Same-day service available</span>
          </div>
          {/* Feature 2 */}
          <div className="notary-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Secure and confidential</span>
          </div>
          {/* Feature 3 */}
          <div className="notary-ready-feature" style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><circle cx="11" cy="11" r="4"/><path d="M11 1v2M11 21v2M1 11h2M21 11h2M3.93 3.93l1.41 1.41M16.66 16.66l1.41 1.41M3.93 18.07l1.41-1.41M16.66 7.34l1.41-1.41"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Internationally recognized</span>
          </div>
        </div>
      </section>
      {/* Trust Bar (bottom) */}
      <div className="notary-trust" style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for professional notary services in Dubai and across UAE.
      </div>
      <ContactLeadSection />
      {/* Footer Section */}
      <footer className="notary-footer" style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
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
            <div style={{ color: '#e5e7eb' }}>      info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="notary-footer-bottom" style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
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