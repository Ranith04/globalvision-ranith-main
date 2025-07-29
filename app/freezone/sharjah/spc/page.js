"use client";
import React from 'react';
import { FaBolt, FaCheckCircle, FaClock, FaClone, FaDollarSign, FaListAlt, FaMapMarkerAlt, FaMoneyBillWave, FaPercent, FaRegHandshake, FaUniversity, FaUserShield, FaUserTie } from 'react-icons/fa';
import ContactLeadSection from '../../../components/ContactLeadSection';
import Navbar from '../../../components/Navbar';

// Freezone image previews (replace with your actual image paths)
const freezoneImages = {
  'RAKEZ': '/images/RAKEZ-1.avif',
  'DMCC': '/images/DMCC -1.avif',
  'DIFC Free Zone': '/images/dubai-m1.jpg',
  'Sharjah Media City': '/images/sharjah-m1.jpg',
  'SRTIP Free Zone': '/images/SRTIP-1.avif',
  'Ajman Media City': '/images/UAQ-1.avif',
  'Sharjah Publishing City': '/images/SPC-1.avif',
  'DWTC': '/images/service1.png',
  'JAFZA': '/images/service2.png',
  'IFZA DSO': '/images/IFZA-1.avif',
  'SAIF Zone': '/images/service3.png',
  'Fujairah Creative City': '/images/flexi-1.jpg',
};

function FreezoneLocationsSection() {
  const zones = [
    'RAKEZ', 'DMCC', 'DIFC Free Zone', 'Sharjah Media City',
    'SRTIP Free Zone', 'Ajman Media City', 'Sharjah Publishing City', 'DWTC',
    'JAFZA', 'IFZA DSO', 'SAIF Zone', 'Fujairah Creative City'
  ];
  return (
    <section style={{ background: '#eaf6fb', padding: '80px 0 60px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#222' }}>
          Freezone Locations
        </h2>
        <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Explore various free zone options across the UAE for your business setup requirements.
        </p>
        <div
          className="freezone-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '36px 32px',
            maxWidth: 950,
            margin: '0 auto',
            justifyItems: 'center',
          }}
        >
          {zones.map((zone) => (
            <div
              key={zone}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontWeight: 500,
                fontSize: 16,
                color: '#0cb8b6',
                boxShadow: '0 2px 8px rgba(30,198,182,0.07)',
                width: '100%',
                minWidth: 0,
                justifyContent: 'flex-start',
                border: 'none',
                position: 'relative',
                outline: 'none',
                cursor: 'default',
                transition: 'box-shadow 0.2s, transform 0.2s',
                maxWidth: 320,
              }}
            >
              <FaMapMarkerAlt color="#0cb8b6" size={22} />
              <span style={{ color: '#222', fontWeight: 500 }}>{zone}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .freezone-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .freezone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default function SPCFreezonePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/spc-responsive.css" />
      <Navbar />
      <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', padding: 0, background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'url(/images/backgroundimg.png) center/cover no-repeat',
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
              Sharjah Publishing City<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            The world’s first free zone dedicated exclusively to the global print and publishing industry, this innovative hub provides a one-stop ecosystem for authors, content creators, and publishers. From writing and designing to printing, publishing, and distribution — everything is possible under one roof. Located in Sharjah, it offers advanced infrastructure, flexible licensing options, and a simplified setup process, making it an ideal choice for self-publishers, media companies, and creative entrepreneurs. The zone supports growth in both regional and international markets by fostering a professional, resource-rich environment tailored specifically to the evolving needs of the print and publishing community.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 0 0 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 36 }}>
          {/* Left: Text */}
          <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 600 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.7rem', marginBottom: 12, color: '#222' }}>
              SPC Location & Overview
            </h2>
            <div style={{ color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Located on Sheikh Mohammed Bin Zayed Road in Sharjah, the SPC is less than 10 minutes from Sharjah International Airport and 15 minutes from Dubai International Airport.<br /><br />
              Set up in 2017 by His Highness Sheikh Dr. Sultan bin Muhammad Al-Qasimi, this free zone offers co-working spaces, retail outlets, commercial offices, and storage facilities.<br /><br />
              The SPC provides everything needed for the publishing industry – from writing and designing to printing, publishing, and distribution – all in one dedicated location.
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
            <img src="/images/SPC-1.avif" alt="Sharjah Publishing City" style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 260 }} />
          </div>
        </div>
      </section>
      <section style={{ background: '#f8fafc', padding: '48px 0 32px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#222' }}>
            Advantages of Sharjah Publishing City
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            SPC offers exceptional benefits for publishing and print businesses with world-class facilities and strategic location.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaMoneyBillWave size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Zero Startup Capital<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Establish publishing business with zero startup capital</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaUserShield size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              100% Foreign Ownership<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Complete foreign ownership allowed</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaPercent size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Zero Taxes<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Zero corporate and income taxes</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaClock size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Open 24/7<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Catering to the needs of publishing industry round the clock</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaBolt size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Quick License<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Business licenses granted in ten days</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaListAlt size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              1,500+ Activities<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>More than 1,500 designated commercial activities allowed</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaClone size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Dual License<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Can have both Mainland and Free Zone licenses</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '28px 16px 20px 16px', textAlign: 'center', color: '#0e3c5d', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <FaUniversity size={28} color="#1ec6b6" style={{ marginBottom: 10 }} />
              Easy Banking<br /><span style={{ color: '#4a5a6a', fontWeight: 400, fontSize: 15 }}>Easy opening of corporate bank account</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f2f8fc', padding: '64px 0 0 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 8, fontFamily: 'Playfair Display, serif', color: '#222' }}>
            Why Choose Sharjah Publishing City Free Zone?
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Operated by Sharjah Book Authority with access to the largest book fair in the Middle East.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 36 }}>
            {/* Key Features */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 300, maxWidth: 420, flex: '1 1 340px' }}>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Key Features</div>
              <ul style={{ color: '#4a5a6a', fontSize: '1.02rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                <li>World's first free zone dedicated exclusively to print and publishing industry</li>
                <li>Located less than 10 minutes from Sharjah International Airport</li>
                <li>15 minutes away from Dubai International Airport</li>
                <li>30 minutes from Dubai's business district</li>
                <li>Operated by Sharjah Book Authority</li>
                <li>Access to Sharjah International Book Fair – largest in Middle East</li>
              </ul>
            </div>
            {/* Sharjah Advantages */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 300, maxWidth: 420, flex: '1 1 340px' }}>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Sharjah Advantages</div>
              <ul style={{ color: '#4a5a6a', fontSize: '1.02rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                <li>Third largest emirate in UAE</li>
                <li>Home to 40% of industrial activity in the country</li>
                <li>Served by three ports: Port Khalid, Port KhorFakkan, Hamriyah Free Zone Port</li>
                <li>Well-connected through Sharjah International Airport</li>
                <li>Strategic location advantages for publishing businesses</li>
              </ul>
            </div>
          </div>
          {/* Book Fair Highlight */}
          <div style={{ background: '#fef6ed', borderRadius: 12, padding: '24px 32px', maxWidth: 900, margin: '0 auto', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.08rem', color: '#222', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
            <span style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem' }}>Sharjah International Book Fair</span><br />
            The largest event of its kind in the Middle East, drawing <span style={{ fontWeight: 700 }}>2.23 million visitors annually</span> with <span style={{ fontWeight: 700 }}>1,674 publishers from 77 nations</span> displaying <span style={{ fontWeight: 700 }}>1.6 million titles</span> and featuring <span style={{ fontWeight: 700 }}>80,000 new titles each year</span>. Publishers Conference held alongside for rights buying and selling.
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 0 40px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 16, fontFamily: 'Playfair Display, serif', color: '#222' }}>
            Global Presence at SPC
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Companies from around the world operate at SPC, creating a truly international publishing ecosystem.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'center', marginBottom: 16 }}>
            {[
              'Saudi Arabia', 'Kuwait', 'Egypt', 'Iraq', 'Jordan', 'Syria',
              'Lebanon', 'Palestine', 'India', 'Pakistan', 'Sri Lanka', 'Ghana',
              'Malaysia', 'Turkey', 'The Philippines', 'Albania', 'Ireland', 'Sweden',
              'New Zealand', 'Tanzania', 'Singapore', 'United Kingdom'
            ].map((country, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 8, padding: '12px 22px', fontSize: 15, color: '#0e3c5d', fontWeight: 500, margin: '6px 8px', minWidth: 120, textAlign: 'center', boxShadow: '0 1px 4px rgba(30,198,182,0.03)' }}>{country}</div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#f8fafc', padding: '80px 0 40px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 16, fontFamily: 'Playfair Display, serif', color: '#222' }}>
            Documents Required for Company Setup
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ensure you have the following documents ready for a smooth registration process.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 16 }}>
            {/* For All Applicants */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 300, maxWidth: 420, flex: '1 1 340px' }}>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>For All Applicants</div>
              <ul style={{ color: '#4a5a6a', fontSize: '1.02rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Copy of passport</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Copy of residence visa (if already in UAE)</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Copy of educational certificates [for Managers]</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Two passport-sized photographs</span></li>
              </ul>
            </div>
            {/* For Existing Companies */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '28px 32px', minWidth: 300, maxWidth: 420, flex: '1 1 340px' }}>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>For Existing Companies</div>
              <ul style={{ color: '#4a5a6a', fontSize: '1.02rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Certificate of Incorporation</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Memorandum of Association</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Board Resolution for SPC setup</span></li>
                <li style={{ color: '#1ec6b6', fontWeight: 600 }}>&#9679; <span style={{ color: '#4a5a6a', fontWeight: 400 }}>Incumbency Certificate / Certificate of Good Standing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(90deg, #0cb8b6 0%, #1976a5 100%)',
        padding: '90px 0 60px 0',
        color: '#fff',
        marginTop: 0
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 18, fontFamily: 'Playfair Display, serif', color: '#222' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#e0f7fa', fontSize: '1.08rem', marginBottom: 48, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Your trusted partner for seamless SPC business setup with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', color: '#0cb8b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>
                <FaCheckCircle color="#0cb8b6" />
              </span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#222', marginBottom: 6 }}>Customised Solutions</div>
              <div style={{ color: '#4a5a6a', fontSize: 15 }}>Tailored business solutions for your specific needs</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', color: '#0cb8b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>
                <FaUserTie color="#0cb8b6" />
              </span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#222', marginBottom: 6 }}>Experienced Consultants</div>
              <div style={{ color: '#4a5a6a', fontSize: 15 }}>Expert consultants with deep local knowledge</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', color: '#0cb8b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>
                <FaRegHandshake color="#0cb8b6" />
              </span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#222', marginBottom: 6 }}>Hassle-Free Procedure</div>
              <div style={{ color: '#4a5a6a', fontSize: 15 }}>Streamlined process for smooth registration</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, padding: '32px 18px', textAlign: 'center', color: '#0cb8b6', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>
                <FaDollarSign color="#0cb8b6" />
              </span>
              <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#222', marginBottom: 6 }}>Multiple Payment Options</div>
              <div style={{ color: '#4a5a6a', fontSize: 15 }}>Flexible payment methods available</div>
            </div>
          </div>
        </div>
      </section>

      <FreezoneLocationsSection />
      
      <ContactLeadSection />
       {/* Footer Section - Exact Match */}
       <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Abu Dhabi mainland<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Office number 205, Ontario Tower, Business Bay, Dubai</div>
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