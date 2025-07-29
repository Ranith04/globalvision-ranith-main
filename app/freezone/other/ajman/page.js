import React from "react";
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from "../../../components/Navbar";

export default function AjmanFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/ajman-responsive.css" />
      <Navbar />
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)',
        position: 'relative',
        padding: 0
      }}>
        {/* Background cityscape overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/images/backgroundimg.png) center/cover no-repeat',
          opacity: 0.35,
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
              Ajman Media City<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Established in 2018, this is the UAE’s newest free zone dedicated to media and creative industries. Designed to attract global content creators, broadcasters, digital media companies, and creative professionals, it provides a vibrant and flexible ecosystem. With state-of-the-art facilities, simplified licensing procedures, and a collaborative community, it supports innovation and growth in media-related sectors. Its strategic location and modern infrastructure make it an ideal base for startups and established firms looking to expand their presence in the region and beyond. This zone stands as a dynamic hub for fostering creativity, global partnerships, and industry excellence in the media landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: AMC Location & Overview */}
      <section style={{ background: '#f7fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            AMC Location & Overview
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Strategically located just 30 minutes from Dubai International Airport, AMC is positioned to become a major contributor to Ajman's growing economy.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '2 1 340px', minWidth: 260, maxWidth: 520, color: '#23272e', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              <p>
                Established through Emiri Decree No.8 of 2015 by His Highness Sheikh Humaid bin Rashid Al Nuaimi III, Ajman Media City aims to be a place where media outlets can thrive, surrounded by creativity and the best talent the world has to offer.
              </p>
              <p style={{ marginTop: 16 }}>
                Despite being the smallest emirate by land area, Ajman is the fourth largest by population and clocks an impressive GDP of more than $4.23 billion annually, with the storage and communications industry growing at 5.1% per year.
              </p>
            </div>
            <img src="/images/AMC-1.avif" alt="Ajman City" style={{ width: 380, height: 210, objectFit: 'cover', borderRadius: 18, flex: '1 1 340px', minWidth: 260, maxWidth: 420, boxShadow: '0 2px 12px rgba(30,198,182,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Section 3: Key Advantages of AMC Free Zone */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Key Advantages of AMC Free Zone
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            AMC offers exceptional benefits for media companies with simplified processes and competitive advantages.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>100% Foreign Ownership</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete foreign ownership allowed without local sponsor</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Zero Tax Regime</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>No corporate or personal income taxes</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>100% Profit Repatriation</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete repatriation of capital and profits</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>24-Hour License</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Business license issued within 24 hours</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Multiple Activities</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Multiple business activities under one license</div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', minWidth: 240, maxWidth: 320, flex: '1 1 280px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
              <div style={{ color: '#222', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>30 minutes from Dubai International Airport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Permitted Business Activities in AMC */}
      <section style={{ background: '#f7fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Permitted Business Activities in AMC
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            AMC caters to various media-related sectors with comprehensive business activity options.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>📰</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>New Media</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Digital Media, Web Production, Photography, News Portals</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🎵</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Music Industry</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Sound Recording, Audio Production, Copyright Management</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🎬</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Film Production</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Audio/Visual Production, Movie Promotion, Studio Management</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>💼</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Consultancy Services</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Business, Human Resources, Legal Consultancy</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>📚</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Publishing</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Books, Periodicals, Journals, Magazines, Newspapers</div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🎤</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Event Management</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Sports Management, International Conferences, Trade Expo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Business Structure Options in AMC */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Business Structure Options in AMC
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Choose the right business structure for your media company operations in AMC.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 32 }}>
            {/* Card 1 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 20px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Free Zone Establishment (FZE)</div>
              <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Single shareholder company structure</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 20px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Free Zone Company (FZC)</div>
              <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Multiple shareholders company structure</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 20px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Branch of Foreign Company</div>
              <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Extension of existing foreign company</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#f7fafd', borderRadius: 14, padding: '24px 20px', minWidth: 220, maxWidth: 260, flex: '1 1 220px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Branch of UAE Company</div>
              <div style={{ color: '#444', fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif' }}>Extension of existing UAE company</div>
            </div>
          </div>
          {/* Key Benefits Box */}
          <div style={{ background: '#f7fafd', borderRadius: 14, padding: '28px 32px', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', maxWidth: 900, margin: '0 auto', marginTop: 0 }}>
            <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>Key Benefits of AMC Business Setup</div>
            <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Easy and simple online company registration process</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> 100% foreign ownership with full profit repatriation</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Business license issued within 24 hours</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Strategic location near Dubai International Airport</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Physical presence not required for company incorporation</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> No corporate or personal income taxes</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Multiple business activities under one license</li>
              <li style={{ color: '#23272e', marginBottom: 6 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span> Growing media and communications sector in UAE</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Business Setup Process in AMC */}
      <section style={{ background: '#f7fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Business Setup Process in AMC
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Simple and efficient online procedure for establishing your media business in AMC Free Zone.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Step 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>1</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Choose Business Activity</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Select from media-related activities including media, music, film, and consultancy.</div>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>2</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Submit Application</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete online application with required documents and business details.</div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 24px', minWidth: 220, maxWidth: 320, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#19c39c', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>3</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Receive License</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Get your business license issued within 24 hours of application approval.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Choose Global Vision Services? */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#fff' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#e6f2ef', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Your trusted partner for seamless AMC business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🛠️</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Customized Solutions</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Tailored business solutions for your specific needs.</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>👨‍💼</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Experienced Consultants</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Expert consultants with deep local knowledge.</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>⚡</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Hassle-Free Procedure</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Streamlined process for smooth registration.</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 18, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>💳</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Multiple Payment Options</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Flexible payment methods available.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: UAE Free Zone Locations */}
      <section style={{ background: '#f7fafd', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {['RAKEZ', 'DMCC', 'DIFC Free Zone', 'Sharjah Media City', 'SHRTIP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC', 'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City'].map((zone, idx) => (
              <div key={zone} style={{
                background: '#fff',
                borderRadius: 30,
                padding: '12px 28px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                color: '#19c39c',
                boxShadow: '0 2px 8px rgba(30,198,182,0.04)',
                border: '1.5px solid #e5e7eb',
                marginBottom: 8,
                display: 'inline-block',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>{zone}</div>
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

export function DebugAjman() { return <div style={{color:'red',fontWeight:700,fontSize:32}}>tanny</div>; } 