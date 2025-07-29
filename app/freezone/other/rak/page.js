import React from "react";
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from "../../../components/Navbar";

export default function RakFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/rak-responsive.css" />
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
              Ras AI Khaimah Economic Zone<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Spanning over 33 million square meters, this is one of the largest and most diversified economic zones in the region. It hosts more than 13,000 companies from over 100 countries, covering 50+ business sectors. With advanced infrastructure, excellent connectivity to global markets, and business-friendly regulations, this zone is a key driver of industrial development and international trade. It offers scalable solutions for manufacturers, traders, and service providers, making it a preferred destination for businesses aiming to expand across the UAE and beyond. Its strategic location and investor-centric ecosystem ensure long-term success and sustainable growth for companies of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* RAK Location & Overview Section */}
      <section style={{ background: '#f7fafd', padding: '72px 0 72px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 12, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            RAKEZ Location & Overview
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 48, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Established through the vision of His Highness Sheikh Saud bin Saqr Al Qasimi, RAKEZ consolidates specialized zones with world-class economic solutions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '2 1 340px', minWidth: 280, maxWidth: 520, color: '#23272e', fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', padding: '0 0 0 12px' }}>
              <p style={{ marginBottom: 18 }}>
                RAKEZ was established by consolidating RAK Investment Authority (RAKIA) and Ras Al Khaimah Free Trade Zone (RAK FTZ), creating one of the most comprehensive economic zones in the region.
              </p>
              <p>
                With strong connectivity to major logistical hubs and strategic location, RAKEZ connects investors to growing markets across Middle East, Asia, North Africa, and Europe regions.
              </p>
            </div>
            <div style={{ flex: '1 1 340px', minWidth: 260, maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/DubaiJumeirahSkyline.png" alt="RAK City" style={{ width: '100%', maxWidth: 380, height: 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.07)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features of RAKEZ Free Zone */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Key Features of RAKEZ Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            RAKEZ offers comprehensive business solutions with cost-effective packages and world-class facilities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🛡️</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>100% Foreign Ownership</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete control over your business operations</div>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>💸</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Zero Tax Regime</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Exemption from corporate and personal income tax</div>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🔗</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Trade Facilitation</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete import/export support and efficient processes</div>
              </div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>📍</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Easy access to Middle East, Asia, North Africa, and Europe</div>
              </div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>💰</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>Cost-Effective</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete operational costs and flexible setup packages</div>
              </div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ color: '#19c39c', fontSize: 22, marginTop: 2 }}>🛠️</span>
              <div>
                <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 16, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>One-Stop Solution</div>
                <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>All services available under one roof</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAKEZ Specialized Zones */}
      <section style={{ background: '#f6fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            RAKEZ Specialized Zones
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            RAKEZ is divided into specialized zones catering to various sectors including trading, manufacturing, and academic services.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏢</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>RAKEZ Business Zone</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Ideal for trading, services, consultancy, and logistics operations</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏭</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Al Hamra Industrial Zone</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Suitable for both light and heavy industry</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏭</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Al Ghail Industrial Zone</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Best value for large-scale industrial manufacturing enterprises</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏭</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Al Hulaila Industrial Zone</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Home to manufacturers of steel, automotive, and household manufacturing</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', minWidth: 220, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🎓</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>RAKEZ Academic Zone</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Dedicated to schools, universities, institutes, and academic consultancy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Structure Options in RAKEZ */}
      <section style={{ background: '#f6fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Business Structure Options in RAKEZ
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Choose the right business structure for your RAKEZ operations with flexible ownership options.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 32 }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 10, padding: '22px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              Branch of Foreign/UAE Company
              <div style={{ color: '#444', fontWeight: 400, fontSize: 15, marginTop: 8 }}> </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 10, padding: '22px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              Free Zone Establishment (FZE)
              <div style={{ color: '#444', fontWeight: 400, fontSize: 15, marginTop: 8 }}> </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 10, padding: '22px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              Free Zone LLC (FZ-LLC)
              <div style={{ color: '#444', fontWeight: 400, fontSize: 15, marginTop: 8 }}></div>
            </div>
          </div>
          {/* Key Benefits Box */}
          <div style={{ background: '#eaf3fc', borderRadius: 12, padding: '28px 32px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', maxWidth: 900, margin: '0 auto', marginTop: 0 }}>
            <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Key Benefits of RAKEZ Business Setup</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <ul style={{ color: '#23272e', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>100% foreign ownership with full profit repatriation</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Complete exemption from import and export duties</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Ability to build on-site staff accommodation</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Strong connectivity to major logistical hubs</li>
              </ul>
              <ul style={{ color: '#23272e', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Zero corporate and personal income taxes</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Quick and efficient business setup processes</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Wide range of business and industrial facilities</li>
                <li style={{ marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Customer portal with self-service options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Setup Process in RAKEZ */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Business Setup Process in RAKEZ
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Simple and efficient procedures for establishing your business in RAKEZ Free Zone.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Step 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>1</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Choose Business Activity</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Select the right business license and facility aligned with your industry needs</div>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>2</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Submit Application</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Provide required documents including passport copies, business plan, and certificates</div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>3</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Receive License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Obtain your business license to legally operate within RAKEZ</div>
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
            Your trusted partner for seamless RAKEZ business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🛠️</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Customised Solutions</div>
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
            {['RAKEZ', 'DMCC', 'DIFC Free Zone', 'Sharjah Media City', 'SRTP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC', 'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City'].map((zone, idx) => (
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

export function DebugRAK() { return <div style={{color:'red',fontWeight:700,fontSize:32}}>tanny</div>; } 