import Image from 'next/image';
import React from 'react';
import { FaCheck, FaChevronDown } from 'react-icons/fa';

export default function MainlandCompany() {
  return (
    <>
      <section className="hero-section" style={{padding: '80px 0 64px 0'}}>
        <div className="hero-overlay" style={{background: 'linear-gradient(rgba(16, 100, 104, 0.9), rgba(16, 100, 104, 0.9))'}} />
        <div className="hero-content-wrapper" style={{maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="hero-content">
            <h1 className="hero-title">
              Dubai Mainland<br />
              Company Formation
            </h1>
            <p className="hero-subtitle">
              Your gateway to unlimited business opportunities in the UAE<br />
              with over a decade of expertise and 500+ successful launches
            </p>
            <ul className="benefits-list" style={{listStyle: 'none', padding: 0, margin: '20px 0 30px'}}>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <FaCheck style={{color: '#fff', marginRight: '10px'}} /> 100% Foreign Ownership
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <FaCheck style={{color: '#fff', marginRight: '10px'}} /> Access to Government Tenders
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <FaCheck style={{color: '#fff', marginRight: '10px'}} /> No Currency Restrictions
              </li>
            </ul>
            <a href="#contact" className="hero-cta-btn" style={{background: '#00c89d'}}>
              Start Your Company
            </a>
          </div>
          <div className="exact-form-container">
            <div className="exact-form-card">
              <h2 className="exact-form-title">Find Out How</h2>
              <form className="exact-form">
                <div className="exact-form-group">
                  <label>Name</label>
                  <input type="text" />
                </div>
                
                <div className="exact-form-group">
                  <label>Mobile Number</label>
                  <div className="exact-phone-input">
                    <div className="exact-flag">
                      <Image src="/images/uae-flag.png" width={20} height={12} alt="UAE flag" />
                      <FaChevronDown size={8} />
                    </div>
                    <input type="tel" />
                  </div>
                </div>
                
                <div className="exact-form-group">
                  <label>Email</label>
                  <input type="email" />
                </div>
                
                <div className="exact-form-group">
                  <div className="exact-services-dropdown">
                    <span>What Services Are You Looking?</span>
                    <FaChevronDown size={10} />
                  </div>
                </div>
                
                <button type="submit" className="exact-callback-btn">Request A Callback Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="overview-section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="main-container" style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 18 }}>Overview</h2>
          <p style={{ color: '#5b6478', fontSize: '1.15rem', marginBottom: 40 }}>
            Dubai stands as a beacon for international trade and innovation. Global Vision<br />
            provides end-to-end support for your business journey in Dubai's dynamic market.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 340 }}>
              <Image src="/images/about-img.jpg" alt="Dubai building" width={400} height={220} style={{ width: '100%', borderRadius: 18, boxShadow: '0 4px 24px rgba(30,198,182,0.10)', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '2 1 340px', minWidth: 260, textAlign: 'left', marginLeft: 32 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>About Global Vision</h3>
              <p style={{ color: '#5b6478', fontSize: '1.05rem', marginBottom: 28 }}>
                Premier consultancy specializing in UAE business setup with over 10 years of hands-on experience and 1000+ successful business launches.
              </p>
              <div style={{ display: 'flex', gap: 18 }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', border: '1.5px solid #b6e4e0', padding: '22px 0', textAlign: 'center' }}>
                  <span style={{ color: '#00b89c', fontWeight: 700, fontSize: '1.35rem' }}>1000<sup>+</sup></span><br />
                  <span style={{ color: '#5b6478', fontSize: '1rem' }}>Successful Launches</span>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', border: '1.5px solid #b6e4e0', padding: '22px 0', textAlign: 'center' }}>
                  <span style={{ color: '#00b89c', fontWeight: 700, fontSize: '1.35rem' }}>10<sup>+</sup></span><br />
                  <span style={{ color: '#5b6478', fontSize: '1rem' }}>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Dubai Mainland Section */}
      <section className="why-mainland-section" style={{ background: '#fff', padding: '80px 0 64px 0' }}>
        <div className="main-container" style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 10 }}>Why Dubai Mainland is Perfect for Your Business</h2>
          <p style={{ color: '#5b6478', fontSize: '1.15rem', marginBottom: 48 }}>
            Unlock unlimited potential with strategic advantages
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 40, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 32, color: '#00b89c', marginBottom: 12 }}>
                <i className="icon-globe"><svg width="32" height="32" fill="none" stroke="#00b89c" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg></i>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 8 }}>Full Market Access</h3>
              <p style={{ color: '#5b6478', fontSize: '1rem' }}>Trade across all UAE emirates without restrictions</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 32, color: '#00b89c', marginBottom: 12 }}>
                <i className="icon-user"><svg width="32" height="32" fill="none" stroke="#00b89c" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg></i>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 8 }}>100% Foreign Ownership</h3>
              <p style={{ color: '#5b6478', fontSize: '1rem' }}>Complete control with Cabinet Resolution No. 56 (2020)</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 32, color: '#00b89c', marginBottom: 12 }}>
                <i className="icon-briefcase"><svg width="32" height="32" fill="none" stroke="#00b89c" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3h-8v4h8V3z"/></svg></i>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 8 }}>Government Tenders</h3>
              <p style={{ color: '#5b6478', fontSize: '1rem' }}>Participate in high-value Dubai government contracts</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 300, background: '#fcfcfc', borderRadius: 12, border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 32px', textAlign: 'left' }}>
              <h4 style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 18 }}>Financial Freedom</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#00b89c', fontSize: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> No currency restrictions</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> Freedom to repatriate profits</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> 9% corporate tax on profits above AED 375,000</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 300, background: '#fcfcfc', borderRadius: 12, border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '28px 32px', textAlign: 'left' }}>
              <h4 style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 18 }}>Strategic Benefits</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#00b89c', fontSize: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> Unlimited visas (1 per 80 sq. ft.)</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> Global brand credibility</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#00b89c', marginRight: 10 }}>✔</span> Strategic geographic location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Steps to Setup Section */}
      <section className="setup-steps-section" style={{ background: '#f8fafc', padding: '80px 0 64px 0' }}>
        <div className="main-container" style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 10 }}>Steps to Setup Your Business in UAE Mainland</h2>
          <p style={{ color: '#5b6478', fontSize: '1.15rem', marginBottom: 48 }}>
            Streamlined process in 5-7 business days
          </p>
          {/* Step 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 40 }}>
            <div style={{ minWidth: 36, marginTop: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00b89c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>1</div>
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 18 }}>Business Structuring</h3>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 220, background: '#fff', border: '2px solid #00b89c', borderRadius: 10, padding: '22px 18px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Choose Activity</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>Select and verify business activity with DED</div>
                </div>
                <div style={{ flex: 1, minWidth: 220, background: '#fff', border: '2px solid #00b89c', borderRadius: 10, padding: '22px 18px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Legal Structure</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>Choose between LLC, Sole Establishment, or Branch</div>
                </div>
                <div style={{ flex: 1, minWidth: 220, background: '#fff', border: '2px solid #00b89c', borderRadius: 10, padding: '22px 18px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Reserve Name</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>Secure your unique trade name</div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 40 }}>
            <div style={{ minWidth: 36, marginTop: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00b89c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>2</div>
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 18 }}>Licensing & Formation</h3>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Initial Approval</div>
                </div>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>MOA Drafting</div>
                </div>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Ejari Lease</div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 40 }}>
            <div style={{ minWidth: 36, marginTop: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00b89c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>3</div>
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 18 }}>Final Steps</h3>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>License Issuance</div>
                </div>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Visa Processing</div>
                </div>
                <div style={{ flex: 1, minWidth: 160, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 10, padding: '22px 10px', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>Bank Account Opening</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Success Stories Section - Screenshot Match */}
      <section style={{ background: '#f8f9fa', padding: '80px 0 80px 0', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 48 }}>Client Success Stories</h2>
          <div className="testimonials-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: 32, flexWrap: 'nowrap' }}>
            {/* Testimonial 1 */}
            <div style={{ flex: '1 1 0', minWidth: 0, background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 28px', textAlign: 'left', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 14 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem' }}>John Smith</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>TechSolutions Inc.</div>
                </div>
              </div>
              <div style={{ color: '#ffc107', fontSize: 18, marginBottom: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>★★★★★</span>
              </div>
              <div style={{ color: '#222', fontSize: '1.02rem', fontStyle: 'italic' }}>
                "Global Vision accelerated our DED license and gave us the market presence we needed."
              </div>
            </div>
            {/* Testimonial 2 */}
            <div style={{ flex: '1 1 0', minWidth: 0, background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 28px', textAlign: 'left', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 14 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem' }}>Sarah Johnson</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>GlobalTrade Ltd.</div>
                </div>
              </div>
              <div style={{ color: '#ffc107', fontSize: 18, marginBottom: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>★★★★★</span>
              </div>
              <div style={{ color: '#222', fontSize: '1.02rem', fontStyle: 'italic' }}>
                "Visa support and guidance were critical—everything was smooth and fast."
              </div>
            </div>
            {/* Testimonial 3 */}
            <div style={{ flex: '1 1 0', minWidth: 0, background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 10, boxShadow: '0 2px 12px rgba(30,198,182,0.04)', padding: '32px 28px', textAlign: 'left', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Michael Chen" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 14 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem' }}>Michael Chen</div>
                  <div style={{ color: '#5b6478', fontSize: '0.98rem' }}>InnoHub</div>
                </div>
              </div>
              <div style={{ color: '#ffc107', fontSize: 18, marginBottom: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>★★★★★</span>
              </div>
              <div style={{ color: '#222', fontSize: '1.02rem', fontStyle: 'italic' }}>
                "We appreciated the legal insights that helped us meet tender requirements."
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 1000px) {
              .testimonials-row {
                flex-direction: column;
                gap: 24px;
                align-items: center;
              }
              .testimonials-row > div {
                max-width: 400px;
                width: 100%;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section style={{ background: '#fff', padding: '80px 0 80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 48, color: '#179e9e' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* FAQ 1 */}
            <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 10, background: '#fff', padding: '22px 28px', textAlign: 'left', fontSize: '1.08rem' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>How long does setup take?</div>
              <div>5–7 business days with complete documentation and our streamlined process.</div>
            </div>
            {/* FAQ 2 */}
            <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 10, background: '#fff', padding: '22px 28px', textAlign: 'left', fontSize: '1.08rem' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Do I need a local sponsor?</div>
              <div>No local sponsor required for most activities, thanks to 100% foreign ownership laws.</div>
            </div>
            {/* FAQ 3 */}
            <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 10, background: '#fff', padding: '22px 28px', textAlign: 'left', fontSize: '1.08rem' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>What taxes apply?</div>
              <div>9% corporate tax on profits above AED 375,000. No personal income tax.</div>
            </div>
            {/* FAQ 4 */}
            <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 10, background: '#fff', padding: '22px 28px', textAlign: 'left', fontSize: '1.08rem' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>How many visas can I get?</div>
              <div>Based on office space - typically one visa per 80 sq. ft. of office area.</div>
            </div>
            {/* FAQ 5 */}
            <div style={{ border: '1.5px solid #1ec6b6', borderRadius: 10, background: '#fff', padding: '22px 28px', textAlign: 'left', fontSize: '1.08rem' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Can I operate outside Dubai?</div>
              <div>Yes, mainland licenses allow operation across all UAE emirates without restrictions.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Take the First Step Contact Section */}
      <section style={{ background: '#f8f9fa', padding: '80px 0 80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Take the First Step</h2>
          <p style={{ color: '#5b6478', fontSize: '1.08rem', marginBottom: 48 }}>Schedule your free consultation today</p>
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Contact Form */}
            <form style={{ flex: 2, minWidth: 320, maxWidth: 480, textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <input type="text" placeholder="First Name" style={{ flex: 1, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
                <input type="text" placeholder="Last Name" style={{ flex: 1, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
              </div>
              <input type="email" placeholder="Email Address" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
              <input type="tel" placeholder="Phone Number" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
              <input type="text" placeholder="Subject" style={{ width: '100%', marginBottom: 12, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem' }} />
              <textarea placeholder="Your Message" rows={4} style={{ width: '100%', marginBottom: 18, padding: '12px 14px', borderRadius: 6, border: '1.5px solid #e0e0e0', fontSize: '1rem', resize: 'vertical' }} />
              <button type="submit" style={{ width: '100%', background: '#1ec6b6', color: '#fff', border: 'none', borderRadius: 6, padding: '14px 0', fontSize: '1.08rem', fontWeight: 600, cursor: 'pointer' }}>Send Message</button>
            </form>
            {/* Contact Info & Map */}
            <div style={{ flex: 2, minWidth: 320, maxWidth: 420, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: 12 }}>Contact Information</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ color: '#1ec6b6', fontSize: 18 }}>📍</span>
                <span>Office 101, Business Bay Tower, Dubai, UAE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ color: '#1ec6b6', fontSize: 18 }}>📞</span>
                <span>+971 4 123 4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ color: '#1ec6b6', fontSize: 18 }}>✉️</span>
                <span>dubai@globalvisionservices.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ color: '#1ec6b6', fontSize: 18 }}>⏰</span>
                <span>Mon–Fri, 9:00 AM to 6:00 PM</span>
              </div>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Dubai Map" style={{ width: '100%', borderRadius: 8, marginTop: 8, objectFit: 'cover', height: 120 }} />
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section - Exact Match */}
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business Bay Tower, Dubai, UAE</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 4 123 4567</div>
            <div style={{ color: '#e5e7eb' }}>dubai@globalvisionservices.com</div>
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