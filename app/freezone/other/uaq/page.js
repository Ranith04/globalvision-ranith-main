import React from "react";
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from "../../../components/Navbar";

export default function UaqFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/uaq-responsive.css" />
      <Navbar />
      {/* Hero Section */}
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
        {/* Overlay (cityscape image) */}
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
              Umm Al Quwain Free Zone<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Start your business in the Umm Al Quwain Free Zone (UAQ Free Zone), one of the fastest-growing commercial hubs in the MENA region. Known for its business-friendly environment, UAQ Free Zone offers affordable setup solutions tailored for corporates, SMEs, and micro-businesses. With low operational costs, minimal bureaucracy, and a variety of flexible licensing options, it enables smooth and efficient company formation. Its strategic location near major seaports and airports provides easy access to regional and global markets. Whether you’re launching a startup or expanding internationally, UAQ Free Zone serves as a strong platform for sustainable business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* About Umm Al Quwain Free Zone Section */}
      <section style={{ background: '#fff', padding: '72px 0 72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 12, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            About Umm Al Quwain Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 48, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            UAQ FTZ was established in 1987 but gained recognition following a restructuring in 2014, attracting companies from over 150 nationalities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '2 1 340px', minWidth: 280, maxWidth: 520, color: '#23272e', fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', padding: '0 0 0 12px' }}>
              <p style={{ marginBottom: 18 }}>
                The Umm Al Quwain Free Zone is strategically located close to highways connecting the Emirates and primary seaports of UAE such as Sharjah International Airport and Dubai International Airport. The strategic location attracts companies of all sizes from diverse backgrounds.
              </p>
              <p>
                UAQ FTZ has a transparent and advanced legal framework with a low cost of living, an open investment climate, and easy access to trading partners in Asia and Africa, making it the right place for investor-friendly entrepreneurs.
              </p>
            </div>
            <div style={{ flex: '1 1 340px', minWidth: 260, maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/SPC-1.avif" alt="SPC" style={{ width: '100%', maxWidth: 380, height: 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.07)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UAQ Free Zone? */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Why Choose UAQ Free Zone?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            UAQ Free Zone offers exceptional benefits with business-friendly policies and cost-effective solutions for entrepreneurs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>📍</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Located close to highways and seaports for seamless access</div>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>💸</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Cost-Effective Setup</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Competitive license costs compared to other UAE free zones</div>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🛡️</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>100% Foreign Ownership</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Full ownership for international investors</div>
              </div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🏷️</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Tax-Free Environment</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>No corporate or personal income tax</div>
              </div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🛂</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Access to Talent</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Easy recruitment process with government services</div>
              </div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🏢</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Modern Infrastructure</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Modern business and robust facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Licenses Available */}
      <section style={{ background: '#f6fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Types of Licenses Available
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            UAQ Free Zone offers various license types to suit different business needs and activities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏢</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Commercial License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Ideal for trading, services, consultancy, and logistics operations</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🛒</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>General Trading License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Popular choice permitting trading in a wide range of physical products</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>💻</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>E-commerce License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>For online businesses operating within the UAE online ecosystem</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>💼</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Service License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Ideal for consultants and professionals offering specialized services</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏭</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Industrial License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Required for manufacturing and processing business operations</div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>📝</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Freelance Permit</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>For professionals, solo-entrepreneurs, and remote business owners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Facilities for Business Setup */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Best Facilities for Business Setup
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            UAQ Free Zone is a thriving destination offering comprehensive facilities and benefits for entrepreneurs.
          </p>
          <div style={{ background: '#eaf3fc', borderRadius: 12, padding: '28px 32px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', maxWidth: 900, margin: '0 auto 40px auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Free from currency restrictions and import/export taxes</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Complete repatriation of profit and capital</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Investor-friendly process with excellent customer support</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Infrastructure designed for future business needs</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Comprehensive logistics support services</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Dual licensing for multiple business operations</li>
              </ul>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>No personal tax or corporate tax obligations</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>100% company ownership allowed</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>No physical presence required - remote business setup available</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Strategic location connecting global markets</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Highly-versatile business environment</li>
                <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Access to skilled and diverse talent pool</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/SPC-1.avif" alt="SPC" style={{ width: '100%', maxWidth: 480, height: 240, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ background: '#f6f8f9', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 36, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Get answers to common questions about UAQ Free Zone business setup and operations.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* FAQ 1 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>How can I set up a company in UAQ Free Zone?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Starting a company in UAQ Free Zone is straightforward. You'll need to choose your business activity, select a license, submit the required documents, and complete the registration process. Most setups can be done remotely, making it quick and hassle-free.</div>
            </div>
            {/* FAQ 2 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>What types of licenses are available in UAQ Free Zone?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>UAQ Free Zone offers several license types including Commercial License, General Trading License, E-commerce License, Service License, Industrial License, and Freelance Permit to suit different business needs.</div>
            </div>
            {/* FAQ 3 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Why choose Umm Al Quwain Free Zone for business setup?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>The free zone offers low setup costs, no corporate or personal tax, full profit repatriation, simplified procedures, and strategic location near major ports and airports, giving businesses access to regional and global markets.</div>
            </div>
            {/* FAQ 4 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>What is the cost of setting up a business in UAQ Free Zone?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>The cost depends on the type of license and facilities you choose. Basic packages for small businesses or freelancers, making it one of the most cost-effective options in the UAE.</div>
            </div>
            {/* FAQ 5 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Can I get a UAE residence visa with a UAQ Free Zone license?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Yes, business owners and employees can apply for UAE residence visas through the company setup in UAQ Free Zone. The number of visas depends on your license type and office space.</div>
            </div>
            {/* FAQ 6 */}
            <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '22px 28px' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Do I need a physical office in Umm Al Quwain to start a business?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Not necessarily. UAQ Free Zone offers flexible workspace solutions including virtual offices, shared desks, and co-working spaces, which are perfect for remote businesses and freelancers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Global Vision Services? */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#fff' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#e6f2ef', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Your trusted partner for seamless UAQ Free Zone business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🛠️</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Customized Solutions</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Tailored business solutions for your specific needs</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>👨‍💼</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Experienced Consultants</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Expert consultants with deep local knowledge</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>📝</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Hassle-Free Procedure</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Streamlined process for smooth registration</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>$</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Multiple Payment Options</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Flexible payment methods available</div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Free Zone Locations */}
      <section style={{ background: '#f6fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {['RAKEZ', 'DMCC', 'DIFC Free Zone', 'Sharjah Media City', 'SRTP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC', 'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City', 'UAQ Free Zone'].map((zone, idx) => (
              <div key={zone} style={{
                background: '#fff',
                borderRadius: 30,
                padding: '14px 32px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                color: '#19c39c',
                boxShadow: '0 2px 8px rgba(30,198,182,0.04)',
                border: '1.5px solid #e5e7eb',
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>
                <span style={{ fontSize: 18, color: '#19c39c', marginRight: 4 }}>📍</span>
                {zone}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for UAE free zone<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}> +971 50 419 3507</div>
            <div style={{ color: '#e5e7eb' }}>info@globalvisionuae.com</div>
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

export function DebugUAQ() { return <div style={{color:'red',fontWeight:700,fontSize:32}}>tanny</div>; } 