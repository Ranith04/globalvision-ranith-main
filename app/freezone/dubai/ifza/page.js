import React from 'react';
import { FaBalanceScale, FaBriefcase, FaCertificate, FaChartLine, FaCheckCircle, FaCog, FaCreditCard, FaExchangeAlt, FaFileAlt, FaLaptop, FaLaptopCode, FaLayerGroup, FaMapMarkerAlt, FaMoneyBillWave, FaPassport, FaRegBuilding, FaRegCheckCircle, FaRocket, FaUser, FaUserCheck, FaUserFriends, FaUsers } from 'react-icons/fa';
import ContactLeadSection from '../../../components/ContactLeadSection';
import FAQList from '../../../components/FAQList';
import Navbar from '../../../components/Navbar';

// Import mobile responsive CSS
import '../../../../styles/ifza-responsive.css';

export default function IFZAFreezonePage() {
  return (
    <>
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
               International Free Zone Authority  <br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Set up your business in IFZA Dubai, a fast-growing free zone located just 20 minutes from Dubai International Airport and Downtown Dubai. Known for its business-friendly environment and streamlined setup process, IFZA offers flexible license packages, cost-effective solutions, and 100% foreign ownership. It's an innovation-focused ecosystem ideal for global entrepreneurs, SMEs, and startups seeking a strategic gateway to the Middle East, Africa, and beyond. With modern infrastructure, strong regulatory support, and access to a global business network, IFZA empowers investors to launch, operate, and scale their ventures seamlessly in one of Dubai’s most dynamic commercial hubs.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose IFZA Dubai Section */}
      <section style={{ background: '#f7fafd', padding: '64px 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, color: '#222' }}>
            Why Choose IFZA Dubai?
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            IFZA Dubai provides the best location for your business in an innovation-focused ecosystem, designed to ensure international investors find a place they can call home.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, justifyContent: 'center', alignItems: 'stretch', marginBottom: 36 }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '38px 26px 32px 26px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 270 }}>
              <span style={{ fontSize: 32, color: '#1ec6b6', marginBottom: 22 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#E0F7F4"/><path d="M16 8v16" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><path d="M8 16h16" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 16, marginTop: 2 }}>Strategic Dubai Location</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.7 }}>
                Located just 20 minutes from Dubai International Airport and Downtown Dubai, providing world-class access to global markets with two-thirds of the world's population accessible within 8 hours.
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '38px 26px 32px 26px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 270 }}>
              <span style={{ fontSize: 32, color: '#1ec6b6', marginBottom: 22 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#E0F7F4"/><path d="M10 22V10a2 2 0 0 1 2-2h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><path d="M22 10v12a2 2 0 0 1-2 2h-8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 16, marginTop: 2 }}>World-Class Rankings</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.7 }}>
                UAE ranked 1st regionally in World Bank's Doing Business 2020 Report, 1st in Global Competitiveness, and Dubai is the 7th safest city globally with 2nd rank in Smart City Index.
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '38px 26px 32px 26px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 270 }}>
              <span style={{ fontSize: 32, color: '#1ec6b6', marginBottom: 22 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#E0F7F4"/><text x="8" y="24" fontSize="18" fontWeight="bold" fill="#1ec6b6">$</text></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 16, marginTop: 2 }}>Thriving Economy</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.7 }}>
                Dubai's GDP of $107.1 billion grows at 6.1% annually. Less than 1% comes from oil, with major contributors being trade, tourism, real estate, aviation, and financial services.
              </div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', padding: '38px 26px 32px 26px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 270 }}>
              <span style={{ fontSize: 32, color: '#1ec6b6', marginBottom: 22 }}>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#E0F7F4"/><path d="M16 8v16M8 16h16" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', fontFamily: 'Playfair Display, serif', color: '#0e3c5d', marginBottom: 16, marginTop: 2 }}>Global Financial Hub</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.7 }}>
                Dubai ranks in Top 50 Global Financial Cities, has the world's second-highest number of five-star hotels, and hosts the world's tallest building, Burj Khalifa.
              </div>
            </div>
          </div>
          {/* Expatriate Stat Bar */}
          <div style={{ background: '#eaf4fb', borderRadius: 10, padding: '22px 28px 10px 28px', margin: '0 auto 0 auto', maxWidth: 1000, textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, color: '#17323b', fontSize: '1.08rem', marginBottom: 6 }}>
              88% of UAE's population consists of expatriates <span style={{ fontWeight: 400, color: '#4a5a6a' }}>- you'll be in very good company in a diverse, international environment.</span>
            </div>
            <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0 }}>
              Dubai is home to 3.4 million residents and offers excellent public transport including metro, tram, buses, cabs, and ferries.
            </div>
          </div>
        </div>
      </section>
      {/* IFZA License Types Section */}
      <section style={{ background: '#fff', padding: '64px 0 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            IFZA License Types
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            IFZA Dubai gives you unique flexibility to combine business activities from Professional, Commercial and Industrial Licenses under one License.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, justifyContent: 'center', alignItems: 'stretch', marginBottom: 36 }}>
            {/* Professional License */}
            <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', padding: '32px 28px 28px 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 270 }}>
              <span style={{ fontSize: 36, color: '#13c1b6', marginBottom: 18, alignSelf: 'center' }}>
                {/* Briefcase Icon */}
                <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="10" fill="#E0F7F4"/><path d="M12 15V13.5A3.5 3.5 0 0 1 15.5 10h5A3.5 3.5 0 0 1 24 13.5V15" stroke="#13c1b6" strokeWidth="2"/><rect x="10" y="15" width="16" height="9" rx="2" stroke="#13c1b6" strokeWidth="2"/><path d="M18 19v2" stroke="#13c1b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', color: '#222', marginBottom: 10 }}>Professional License</div>
              <div style={{ color: '#5b6478', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 14 }}>
                Perfect for consultancy services and professional activities. Ideal for service providers, consultants, and professional firms.
              </div>
              <ul style={{ color: '#13c1b6', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, listStyle: 'disc' }}>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Consultancy Services</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Professional Activities</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Service-Based Business</li>
                <li style={{ color: '#13c1b6' }}>Expert Advisory</li>
              </ul>
            </div>
            {/* Commercial License */}
            <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', padding: '32px 28px 28px 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 270 }}>
              <span style={{ fontSize: 36, color: '#13c1b6', marginBottom: 18, alignSelf: 'center' }}>
                {/* Cart Icon */}
                <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="10" fill="#E0F7F4"/><path d="M12 14h16l-2 8H14l-2-8z" stroke="#13c1b6" strokeWidth="2"/><circle cx="15" cy="25" r="1.5" stroke="#13c1b6" strokeWidth="2"/><circle cx="23" cy="25" r="1.5" stroke="#13c1b6" strokeWidth="2"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', color: '#222', marginBottom: 10 }}>Commercial License</div>
              <div style={{ color: '#5b6478', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 14 }}>
                For import/export activities, trading, sale, storage, and distribution of items. Includes General Trading License options.
              </div>
              <ul style={{ color: '#13c1b6', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, listStyle: 'disc' }}>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Import/Export Activities</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Trading Operations</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Storage & Distribution</li>
                <li style={{ color: '#13c1b6' }}>General Trading</li>
              </ul>
            </div>
            {/* Industrial License */}
            <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', padding: '32px 28px 28px 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 270 }}>
              <span style={{ fontSize: 36, color: '#13c1b6', marginBottom: 18, alignSelf: 'center' }}>
                {/* Factory Icon */}
                <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="10" fill="#E0F7F4"/><path d="M10 24v-6l4 3v-3l4 3v-3l4 3v-7a2 2 0 0 1 2-2h2v12H10z" stroke="#13c1b6" strokeWidth="2"/><rect x="13" y="26" width="2" height="2" rx="1" fill="#13c1b6"/><rect x="17" y="26" width="2" height="2" rx="1" fill="#13c1b6"/><rect x="21" y="26" width="2" height="2" rx="1" fill="#13c1b6"/></svg>
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', color: '#222', marginBottom: 10 }}>Industrial License</div>
              <div style={{ color: '#5b6478', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 14 }}>
                For manufacturing and industrial activities. IFZA offers the unique flexibility to combine activities from different license categories under one license.
              </div>
              <ul style={{ color: '#13c1b6', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 18, margin: 0, listStyle: 'disc' }}>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Manufacturing</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Industrial Activities</li>
                <li style={{ color: '#13c1b6', marginBottom: 4 }}>Production Facilities</li>
                <li style={{ color: '#13c1b6' }}>Combined Activities</li>
              </ul>
            </div>
          </div>
          {/* License Categories Box */}
          <div style={{ background: '#eaf4fb', borderRadius: 10, padding: '32px 24px 18px 24px', margin: '0 auto 0 auto', maxWidth: 1100, textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, color: '#17323b', fontSize: '1.13rem', marginBottom: 18 }}>
              Available License Categories at IFZA Dubai
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 18 }}>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>Consultancy License</div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>Service License</div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>Holding License</div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>Trading License</div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>General Trading License</div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '12px 0', fontWeight: 600, color: '#0e3c5d', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem' }}>Industrial License</div>
            </div>
            <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0, textAlign: 'left' }}>
              <span style={{ fontWeight: 700, color: '#222' }}>Branch Office Setup:</span> You can also register a branch of your company if it has been incorporated outside the UAE, with the condition that business activities correspond with the parent company.
            </div>
          </div>
        </div>
      </section>
      {/* Benefits of Company Formation in IFZA Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 0 0', borderTop: '1px solid #e6ecf1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Benefits of Company Formation in IFZA
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Get started on your IFZA free zone company setup and establish your business presence in the UAE through a quick and hassle-free process.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, justifyContent: 'center', alignItems: 'stretch', marginBottom: 36 }}>
            {/* Benefit Cards with Icons */}
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaMapMarkerAlt size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Accessible Strategic Location</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>World-class access to global markets from Dubai</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaBriefcase size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Commercial Services Access</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>All the zone business formation tools and administrative services</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaCertificate size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Business License Awarded</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Guaranteed business license processing</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaLayerGroup size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Multiple Activities License</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Commercial, Professional, and Industrial activities under one license</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaExchangeAlt size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Competitive General Trading</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Competitive General Trading License</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaBalanceScale size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Transparent Pricing</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Transparent and competitive pricing structure</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaRocket size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Fast Setup Process</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Fast and efficient company incorporation process</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaUserCheck size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>No Physical Presence Required</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Business owner presence not required during the process</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaMoneyBillWave size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>No Paid-Up Capital</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>No need of paid-up share capital requirement</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaRegCheckCircle size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>No NOC Required</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>No necessary to submit NOC from current sponsor</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaPassport size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Multiple Visa Packages</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Various visa packages available for your needs</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '24px 16px 18px 16px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FaChartLine size={24} color="#13c1b6" style={{ marginBottom: 6 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Quick ROI</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Cost-effective setup ensuring quick returns on investment</div>
            </div>
          </div>
          {/* Partnership News */}
          <div style={{ background: '#eaf4fb', borderRadius: 10, padding: '22px 28px 10px 28px', margin: '0 auto 0 auto', maxWidth: 1000, textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, color: '#17323b', fontSize: '1.08rem', marginBottom: 6 }}>
              Latest Partnership News
            </div>
            <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0 }}>
              IFZA has partnered with Dubai Silicon Oasis Authority, which oversees the Dubai Silicon Oasis technology free zone. Under the terms of the agreement, IFZA companies can function out of the Dubai Silicon Oasis, providing greater collaboration with technology companies in the UAE.
            </div>
          </div>
        </div>
      </section>
      {/* What Makes IFZA Unique for Business Setup Section */}
      <section style={{ background: '#f7fafd', padding: '56px 0 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            What Makes IFZA Unique for Business Setup?
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            IFZA is outstanding in many perspectives, with its most unique feature being the innovative and extraordinary interface designed for investors.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, justifyContent: 'center', alignItems: 'stretch', marginBottom: 44 }}>
            <div style={{ background: '#f7fafd', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '28px 18px 22px 18px', textAlign: 'center', minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <FaLaptopCode size={28} color="#13c1b6" style={{ marginBottom: 8 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Advanced Technology Interface</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>IFZA features an innovative and extraordinary interface designed specifically for investors, making business setup technologically advanced and user-friendly.</div>
            </div>
            <div style={{ background: '#f7fafd', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '28px 18px 22px 18px', textAlign: 'center', minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <FaRegBuilding size={28} color="#13c1b6" style={{ marginBottom: 8 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Flexible Office Solutions</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Choose from flexi-desks (up to 10 hours monthly) to fully serviced offices with dedicated parking and address at Dubai Digital Park with natural lighting.</div>
            </div>
            <div style={{ background: '#f7fafd', borderRadius: 12, border: '1px solid #e6ecf1', boxShadow: '0 2px 12px rgba(30,198,182,0.03)', padding: '28px 18px 22px 18px', textAlign: 'center', minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <FaUsers size={28} color="#13c1b6" style={{ marginBottom: 8 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', marginBottom: 2, fontSize: '1.08rem' }}>Suitable for All Business Sizes</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Dynamic environment perfect for leading giants, start-ups, freelancers, and SMEs; facilities that make things easier for global investors.</div>
            </div>
          </div>
          {/* Office Space at IFZA Dubai */}
          <div style={{ background: 'linear-gradient(90deg, #eaf4fb 60%, #fff 100%)', borderRadius: 16, padding: '32px 32px 32px 32px', display: 'flex', alignItems: 'center', gap: 36, boxShadow: '0 2px 12px rgba(30,198,182,0.06)', marginBottom: 56, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, color: '#17323b', fontSize: '1.18rem', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>
                Office Space at IFZA Dubai
              </div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Located at Dubai Digital Park, IFZA buildings are designed to allow natural light to stream in, creating a nurturing and supportive work environment for your business operations.<br /><br />
                From flexible desks to fully personalized office spaces with dedicated parking and address, IFZA offers workspace options that grow with your business needs.
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.10)', padding: 0, overflow: 'hidden', width: 320, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/IFZA-1.avif" alt="IFZA Dubai Office" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick & Hassle-Free IFZA Setup Process Section */}
      <section style={{ background: '#eaf4fb', padding: '56px 0 0 0', marginTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            Quick & Hassle-Free IFZA Setup Process
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Choose the right jurisdiction and operate your business swiftly. Company formation in IFZA is quick and cost-effective for ensuring quick returns on investment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, justifyContent: 'center', alignItems: 'stretch', marginBottom: 36 }}>
            {/* Step 1 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>01</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>Choose Your License Type</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Select from Professional, Commercial, or Industrial license options best suited for your activities. IFZA allows combining multiple business activities under one license.</div>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>02</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>Select Office Space</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Choose from flexi desk options to 10 hours monthly or fully serviced offices with natural lighting and modern facilities.</div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>03</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>Submit Application</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Complete your business license application and submit documents. Physical presence of business owner is not required during the process.</div>
            </div>
            {/* Step 4 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>04</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>License Processing</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Fast and efficient company incorporation assistance. All procedures are streamlined and competitive pricing structure.</div>
            </div>
            {/* Step 5 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>05</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>Visa Packages</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Various visa packages available for your needs. No paid-up share capital required.</div>
            </div>
            {/* Step 6 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 18px 22px 18px', textAlign: 'left', minHeight: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#13c1b6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>06</div>
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem', marginBottom: 2 }}>Business Activation</div>
              <div style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>Receive your official license and start your business activities. IFZA offers modern facilities from storage to office space.</div>
            </div>
          </div>
          {/* Starting Price Box */}
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(30,198,182,0.08)', padding: '24px 32px 18px 32px', margin: '0 auto', maxWidth: 600, textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, color: '#17323b', fontSize: '1.13rem', marginBottom: 6, fontFamily: 'Playfair Display, serif' }}>
              Starting from AED 12,900
            </div>
            <div style={{ color: '#4a5a6a', fontSize: '1rem', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0 }}>
              Transparent and competitive pricing with fast, efficient incorporation procedures. Get your business up and running quickly with IFZA's streamlined process.
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Global Vision Services Section */}
      <section style={{ background: 'linear-gradient(90deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.2rem', marginBottom: 10, color: '#fff' }}>
            Why Choose Global Vision Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#d6f5f2', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your trusted partner for seamless business setup in Meydan Free Zone with comprehensive support and expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(30,198,182,0.08)', padding: '38px 22px 32px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 220 }}>
              <FaCog size={36} color="#13c1b6" style={{ marginBottom: 18 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 10 }}>Customised Solutions</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Tailored business solutions designed specifically for your unique requirements and objectives.</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(30,198,182,0.08)', padding: '38px 22px 32px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 220 }}>
              <FaUserFriends size={36} color="#13c1b6" style={{ marginBottom: 18 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 10 }}>Experienced Consultants</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Expert consultants with deep local knowledge and years of experience in UAE business setup.</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(30,198,182,0.08)', padding: '38px 22px 32px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 220 }}>
              <FaCheckCircle size={36} color="#13c1b6" style={{ marginBottom: 18 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 10 }}>Hassle-Free Procedure</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Streamlined process that eliminates complications and ensures smooth business registration.</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(30,198,182,0.08)', padding: '38px 22px 32px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 220 }}>
              <FaCreditCard size={36} color="#13c1b6" style={{ marginBottom: 18 }} />
              <div style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.13rem', marginBottom: 10 }}>Multiple Payment Options</div>
              <div style={{ color: '#4a5a6a', fontSize: '1rem' }}>Flexible payment methods to accommodate your preferences and financial requirements.</div>
            </div>
          </div>
        </div>
      </section>
      {/* UAE Free Zone Locations Section */}
      <section style={{ background: '#eaf4fb', padding: '64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, color: '#222' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Row 1 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>RAKEZ</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>DMCC</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>DIFC Free Zone</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>Sharjah Media City</span>
            </div>
            {/* Row 2 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>SRTIP Free Zone</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>Ajman Media City</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>Sharjah Publishing City</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>DWTC</span>
            </div>
            {/* Row 3 */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>JAFZA</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>IFZA DSO</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>SAIF Zone</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '22px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt size={22} color="#13c1b6" /> <span style={{ fontWeight: 600, color: '#0e3c5d', fontSize: '1.08rem' }}>Fujairah Creative City</span>
            </div>
          </div>
        </div>
      </section>
      {/* Documents Required for Meydan Free Zone Setup Section */}
      <section style={{ background: '#fdfaf6', padding: '64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, color: '#222' }}>
            Documents Required for Meydan Free Zone Setup
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Ensure you have all necessary documentation ready for a smooth registration process in Meydan Free Zone Dubai.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Card 1: Personal Documents */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 24px', textAlign: 'left', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <FaUser size={22} color="#13c1b6" />
                <span style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem' }}>Personal Documents</span>
              </div>
              <ul style={{ color: '#4a5a6a', fontSize: '1rem', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Valid passport copies of all shareholders</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Passport-size photographs</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>No Objection Certificate (if applicable)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Educational certificates for professional activities</li>
              </ul>
            </div>
            {/* Card 2: Business Documents */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 24px', textAlign: 'left', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <FaBriefcase size={22} color="#13c1b6" />
                <span style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem' }}>Business Documents</span>
              </div>
              <ul style={{ color: '#4a5a6a', fontSize: '1rem', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Business plan and activity description</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Company name reservation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Memorandum of Association (MOA)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Articles of Association if applicable</li>
              </ul>
            </div>
            {/* Card 3: License Specific */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 24px', textAlign: 'left', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <FaFileAlt size={22} color="#13c1b6" />
                <span style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem' }}>License Specific</span>
              </div>
              <ul style={{ color: '#4a5a6a', fontSize: '1rem', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Consulting: Professional qualifications</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Commercial: Trading activity details</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Media: Creative portfolio submission</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Sector-specific compliance documents</li>
              </ul>
            </div>
            {/* Card 4: Digital Setup */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 24px', textAlign: 'left', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <FaLaptop size={22} color="#13c1b6" />
                <span style={{ fontWeight: 700, color: '#0e3c5d', fontSize: '1.08rem' }}>Digital Setup</span>
              </div>
              <ul style={{ color: '#4a5a6a', fontSize: '1rem', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Meydan customer portal registration</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>IBAN setup for Meydan Pay</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>E-commerce platform requirements</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#13c1b6', fontSize: 18 }}>•</span>Digital signature authorization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section style={{ background: '#f7fafd', padding: '64px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, color: '#222' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.08rem', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Get answers to common questions about business setup in Meydan Free Zone Dubai.
          </p>
          <div style={{ background: 'transparent', borderRadius: 12, boxShadow: 'none', padding: 0 }}>
            <FAQList
              faqs={[
                {
                  question: 'Why choose IFZA for business setup?',
                  answer: 'IFZA offers low-cost setup, 100% foreign ownership, and a prime Dubai location.'
                },
                {
                  question: 'What types of businesses can operate in IFZA?',
                  answer: 'Consultancy, commercial, service, and industrial businesses are all supported in IFZA.'
                },
                {
                  question: 'How long does it take to register a company in IFZA?',
                  answer: 'Company registration in IFZA usually takes 2–5 working days.'
                },
                {
                  question: 'Is office space mandatory in IFZA?',
                  answer: 'No, IFZA offers flexi-desk options so physical office space is not mandatory.'
                },
                {
                  question: 'Can I sponsor employees under an IFZA license?',
                  answer: 'Yes, depending on the license package, you can sponsor multiple employees.'
                },
                {
                  question: 'Are there any annual renewal fees?',
                  answer: 'Yes, businesses must renew their license annually, with costs depending on the package.'
                },
                {
                  question: 'Can Global Vision assist with IFZA business setup?',
                  answer: 'Yes, Global Vision provides complete support for documentation, licensing, and setup in IFZA.'
                }
              ]}
            />
          </div>
        </div>
      </section>
      {/* Take the First Step Section */}
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
              Your trusted partner for Meydan Free Zone<br/>company formation and business setup<br/>services.
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