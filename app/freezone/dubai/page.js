import Link from 'next/link';
import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function DubaiFreezonePage() {
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
          background: 'url(/images/hero-bg.jpg) center/cover no-repeat',
          opacity: 0.25,
          zIndex: 1
        }} />
        <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 1200, margin: '0 auto', padding: '0 40px', minHeight: '100vh' }}>
          <div className="hero-content" style={{ flex: 1, color: '#fff', textAlign: 'center', maxWidth: 700 }}>
            <h1 className="hero-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Dubai Freezones
            </h1>
            <p className="hero-subtitle" style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.25rem', color: '#d1d5db', marginBottom: 36, fontWeight: 400 }}>
              Explore business opportunities in Dubai's leading freezones: MEYDAN, IFZA, DMCC, DIFC, and more.
            </p>
          </div>
        </div>
      </section>

      {/* UAE Free Zone Locations Section - Desktop Only */}
      <section style={{ 
        background: '#f2f8fc', 
        padding: '80px 0', 
        borderTop: '1px solid #e6ecf1',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', width: '100%' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 10, color: '#222' }}>
            UAE Free Zone Locations
          </h2>
          <p style={{ textAlign: 'center', color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 60, fontFamily: 'Montserrat, Arial, sans-serif', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Explore various free zone options across the UAE for your business setup requirements.
          </p>
          
          {/* Desktop Three Column Layout Container */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            minHeight: '70vh',
            gap: '50px'
          }}>
            {/* Left Column - Freezone Options Grid */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              width: '300px',
              flexShrink: 0
            }}>
              <Link href="/freezone/other/rak" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  RAKEZ
                </div>
              </Link>
              
              <Link href="/freezone/sharjah/srtip" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  SRTIP Free Zone
                </div>
              </Link>
              
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '16px 20px', 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                color: '#222', 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                boxShadow: '0 2px 12px rgba(30,198,182,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                    <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                  </svg>
                </span>
                JAFZA
              </div>
              
              <Link href="/freezone/dubai/dmcc" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  DMCC
                </div>
              </Link>
              
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '16px 20px', 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                color: '#222', 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                boxShadow: '0 2px 12px rgba(30,198,182,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                    <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                  </svg>
                </span>
                Ajman Media City
              </div>
              
              <Link href="/freezone/dubai/ifza" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  IFZA DSO
                </div>
              </Link>
            </div>

            {/* Center Column - Dubai Skyline Image */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              flex: 1,
              padding: '20px 0'
            }}>
              <img 
                src="/images/DubaiJumeirahSkyline.png" 
                alt="Dubai Skyline" 
                style={{ 
                  width: '100%', 
                  maxWidth: '600px', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 32px rgba(30,198,182,0.15)', 
                  objectFit: 'cover',
                  aspectRatio: '1.4/1'
                }} 
              />
            </div>

            {/* Right Column - More Freezone Options Grid */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              width: '300px',
              flexShrink: 0
            }}>
              <Link href="/freezone/sharjah/shams" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  Sharjah Media City
                </div>
              </Link>
              
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '16px 20px', 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                color: '#222', 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                boxShadow: '0 2px 12px rgba(30,198,182,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                    <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                  </svg>
                </span>
                DWTC
              </div>
              
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '16px 20px', 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                color: '#222', 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                boxShadow: '0 2px 12px rgba(30,198,182,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                    <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                  </svg>
                </span>
                Fujairah Creative City
              </div>
              
              <Link href="/freezone/dubai/difc" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 600, 
                  fontSize: '1.1rem', 
                  color: '#222', 
                  fontFamily: 'Montserrat, Arial, sans-serif', 
                  boxShadow: '0 2px 12px rgba(30,198,182,0.08)', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0'
                }}>
                  <span style={{ color: '#1ec6b6', fontSize: '18px', marginRight: '12px' }}>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="9" fill="#E0F7F4"/>
                      <path d="M9 5a4 4 0 0 1 4 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 0 1 4-4zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1ec6b6"/>
                    </svg>
                  </span>
                  DIFC Free Zone
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Desktop-only styles to ensure proper flexbox layout */}
        <style jsx>{`
          @media (min-width: 1200px) {
            div[style*="display: flex"][style*="flexDirection: row"] {
              display: flex !important;
              flex-direction: row !important;
              justify-content: space-between !important;
              align-items: center !important;
              width: 100% !important;
              min-height: 70vh !important;
              gap: 50px !important;
            }
            
            div[style*="display: flex"][style*="flexDirection: row"] > div:nth-child(1) {
              width: 300px !important;
              flex-shrink: 0 !important;
            }
            
            div[style*="display: flex"][style*="flexDirection: row"] > div:nth-child(2) {
              flex: 1 !important;
            }
            
            div[style*="display: flex"][style*="flexDirection: row"] > div:nth-child(3) {
              width: 300px !important;
              flex-shrink: 0 !important;
            }
          }
        `}</style>
      </section>

      <ContactLeadSection />
    </>
  );
} 