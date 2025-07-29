import React from 'react';
import '../../../styles/dubai-mainland-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

const uaeFlag = '/images/uae-flag.png';
const bgImage = '/images/hero-bg.jpg';

export default function DubaiMainlandPage() {
  return (
    <>
      <Navbar />
      <section className="dubai-hero-section">
        {/* Background Image under gradient */}
        <img
          src="/images/backgroundimg.png"
          alt="Background"
          className="dubai-hero-bg-image"
        />
        {/* Overlay (optional cityscape image) */}
        <div className="dubai-hero-overlay" />
        <div className="dubai-hero-content-wrapper">
           {/* Left-aligned: Heading and Description */}
           <div className="dubai-hero-content">
            <h1 className="dubai-hero-title">
            Dubai Mainland<br />Company Formation
            </h1>
            <p className="dubai-hero-description">
            Dubai Mainland, regulated by the Department of Economic Development (DED), is one of the most sought-after business jurisdictions in the UAE, offering companies the freedom to operate anywhere in Dubai and across the country. It provides access to a broad range of business activities, a diverse client base, and allows 100% foreign ownership in many sectors. With world-class infrastructure, no trade restrictions, and a business-friendly environment, Dubai Mainland is an ideal choice for startups, SMEs, and global investors aiming to establish a strong, scalable presence in the region.
             </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="dubai-overview-section">
        <div className="dubai-overview-container">
          <h2 className="dubai-overview-title">
            Overview
          </h2>
          <p className="dubai-overview-subtitle">
            Dubai stands as a beacon for international trade and innovation. Global Vision provides end-to-end support for your business journey in Dubai's dynamic market.
          </p>
          <div className="dubai-overview-content">
            <img src="/images/dubai-m1.jpg" alt="Dubai Office" className="dubai-overview-image" />
            <div className="dubai-overview-text">
              <div className="dubai-overview-text-title">About Global Vision</div>
              <div className="dubai-overview-text-description">
                Premier consultancy specializing in UAE business setup with over 10 years of hands-on experience and 1000+ successful business launches.
              </div>
              <div className="dubai-overview-stats">
                <div className="dubai-overview-stat">
                  1000+<div className="dubai-overview-stat-label">Successful Launches</div>
                </div>
                <div className="dubai-overview-stat">
                  10+<div className="dubai-overview-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Dubai Mainland is Perfect for Your Business Section */}
      <section className="dubai-why-section">
        <div className="dubai-why-container">
          <h2 className="dubai-why-title">
            Why Dubai Mainland is Perfect for Your Business
          </h2>
          <p className="dubai-why-subtitle">
            Unlock unlimited potential with strategic advantages
          </p>
          <div className="dubai-why-features">
            {/* Full Market Access */}
            <div className="dubai-why-feature">
              <div className="dubai-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="dubai-why-feature-title">Full Market Access</div>
              <div className="dubai-why-feature-description">
                Trade across all UAE emirates without restrictions
              </div>
            </div>
            {/* 100% Foreign Ownership */}
            <div className="dubai-why-feature">
              <div className="dubai-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <div className="dubai-why-feature-title">100% Foreign Ownership</div>
              <div className="dubai-why-feature-description">
                Complete control with Cabinet Resolution No. 56 (2020)
              </div>
            </div>
            {/* Government Tenders */}
            <div className="dubai-why-feature">
              <div className="dubai-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="dubai-why-feature-title">Government Tenders</div>
              <div className="dubai-why-feature-description">
                Participate in high-value Dubai government contracts
              </div>
            </div>
          </div>
          <div className="dubai-why-cards">
            {/* Financial Freedom */}
            <div className="dubai-why-card">
              <div className="dubai-why-card-title">Financial Freedom</div>
              <ul className="dubai-why-card-list">
                <li><span className="dubai-why-check">✓</span>No currency restrictions</li>
                <li><span className="dubai-why-check">✓</span>Freedom to repatriate profits</li>
                <li><span className="dubai-why-check">✓</span>9% corporate tax on profits above AED 375,000</li>
              </ul>
            </div>
            {/* Strategic Benefits */}
            <div className="dubai-why-card">
              <div className="dubai-why-card-title">Strategic Benefits</div>
              <ul className="dubai-why-card-list">
                <li><span className="dubai-why-check">✓</span>Unlimited visas (1 per 80 sq. ft.)</li>
                <li><span className="dubai-why-check">✓</span>Global brand credibility</li>
                <li><span className="dubai-why-check">✓</span>Strategic geographic location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps to Setup Your Business in UAE Mainland Section */}
      <section className="dubai-steps-section">
        <div className="dubai-steps-container">
          <h2 className="dubai-steps-title">
            Steps to Setup Your Business in UAE Mainland
          </h2>
          <p className="dubai-steps-subtitle">
             
          </p>
          {/* Step 1: Business Structuring */}
          <div className="dubai-step">
            <div className="dubai-step-header">
              <div className="dubai-step-number">1</div>
              <div className="dubai-step-title">Business Structuring</div>
            </div>
            <div className="dubai-step-content">
              {/* Choose Activity */}
              <div className="dubai-step-card">
                <div className="dubai-step-card-title">Choose Activity</div>
                <div className="dubai-step-card-description">Select and verify business activity with DED</div>
              </div>
              {/* Legal Structure */}
              <div className="dubai-step-card">
                <div className="dubai-step-card-title">Legal Structure</div>
                <div className="dubai-step-card-description">Choose between LLC, Sole Establishment, or Branch</div>
              </div>
              {/* Reserve Name */}
              <div className="dubai-step-card">
                <div className="dubai-step-card-title">Reserve Name</div>
                <div className="dubai-step-card-description">Secure your unique trade name</div>
              </div>
            </div>
          </div>
          {/* Step 2: Licensing & Formation */}
          <div className="dubai-step">
            <div className="dubai-step-header">
              <div className="dubai-step-number">2</div>
              <div className="dubai-step-title">Licensing & Formation</div>
            </div>
            <div className="dubai-step-icons">
              {/* Initial Approval */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </div>
                <div className="dubai-step-icon-title">Initial Approval</div>
              </div>
              {/* MOA Drafting */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 4h12v16H6z" stroke="#1ec6b6" strokeWidth="2"/><path d="M9 8h6" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="dubai-step-icon-title">MOA Drafting</div>
              </div>
              {/* Ejari Lease */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="dubai-step-icon-title">Ejari Lease</div>
              </div>
              {/* Trade License */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="dubai-step-icon-title">Trade License</div>
              </div>
            </div>
          </div>
          {/* Step 3: Post-Formation Setup */}
          <div className="dubai-step">
            <div className="dubai-step-header">
              <div className="dubai-step-number">3</div>
              <div className="dubai-step-title">Post-Formation Setup</div>
            </div>
            <div className="dubai-step-icons">
              {/* Visa Processing */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#1ec6b6"/></svg>
                </div>
                <div className="dubai-step-icon-title">Visa Processing</div>
                <div className="dubai-step-icon-description">Investor and employee visas, Emirates ID</div>
              </div>
              {/* Bank Account */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="dubai-step-icon-title">Bank Account</div>
                <div className="dubai-step-icon-description">Corporate accounts with top UAE banks</div>
              </div>
              {/* Compliance */}
              <div className="dubai-step-icon-card">
                <div className="dubai-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="dubai-step-icon-title">Compliance</div>
                <div className="dubai-step-icon-description">VAT registration, accounting, renewals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="dubai-testimonials-section">
        <div className="dubai-testimonials-container">
          <h2 className="dubai-testimonials-title">
            Client Success Stories
          </h2>
          <div className="dubai-testimonials-grid">
            {/* Testimonial 1 */}
            <div className="dubai-testimonial-card">
              <div className="dubai-testimonial-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" className="dubai-testimonial-avatar" />
                <div>
                  <div className="dubai-testimonial-name">John Smith</div>
                  <div className="dubai-testimonial-company">TechSolutions Inc.</div>
                </div>
              </div>
              <div className="dubai-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="dubai-testimonial-quote">
                "Global Vision accelerated our DED license and gave us the market presence we needed."
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="dubai-testimonial-card">
              <div className="dubai-testimonial-header">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="dubai-testimonial-avatar" />
                <div>
                  <div className="dubai-testimonial-name">Sarah Johnson</div>
                  <div className="dubai-testimonial-company">GlobalTrade Ltd.</div>
                </div>
              </div>
              <div className="dubai-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="dubai-testimonial-quote">
                "Visa support and guidance were critical—everything was smooth and fast."
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="dubai-testimonial-card">
              <div className="dubai-testimonial-header">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" className="dubai-testimonial-avatar" />
                <div>
                  <div className="dubai-testimonial-name">Michael Chen</div>
                  <div className="dubai-testimonial-company">InnoHub</div>
                </div>
              </div>
              <div className="dubai-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="dubai-testimonial-quote">
                "We appreciated the legal insights that helped us meet tender requirements."
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Frequently Asked Questions Section */}
      <section className="dubai-faq-section">
        <div className="dubai-faq-container">
          <h2 className="dubai-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="dubai-faq-list">
            {/* FAQ 1 */}
            <div className="dubai-faq-item">
              <div className="dubai-faq-question">How long does setup take?</div>
              <div className="dubai-faq-answer">5–7 business days with complete documentation and our streamlined process.</div>
            </div>
            {/* FAQ 2 */}
            <div className="dubai-faq-item">
              <div className="dubai-faq-question">Do I need a local sponsor?</div>
              <div className="dubai-faq-answer">No local sponsor required for most activities, thanks to 100% foreign ownership laws.</div>
            </div>
            {/* FAQ 3 */}
            <div className="dubai-faq-item">
              <div className="dubai-faq-question">What taxes apply?</div>
              <div className="dubai-faq-answer">9% corporate tax on profits above AED 375,000. No personal income tax.</div>
            </div>
            {/* FAQ 4 */}
            <div className="dubai-faq-item">
              <div className="dubai-faq-question">How many visas can I get?</div>
              <div className="dubai-faq-answer">Based on office space - typically one visa per 80 sq. ft. of office area.</div>
            </div>
            {/* FAQ 5 */}
            <div className="dubai-faq-item">
              <div className="dubai-faq-question">Can I operate outside Dubai?</div>
              <div className="dubai-faq-answer">Yes, mainland licenses allow operation across all UAE emirates without restrictions.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer Section */}
      <footer className="dubai-footer">
        <div className="dubai-footer-content">
          {/* Logo & Description */}
          <div className="dubai-footer-logo-section">
            <div className="dubai-footer-logo">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" />
            </div>
            <div className="dubai-footer-description">
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="dubai-footer-section">
            <div className="dubai-footer-section-title">Services</div>
            <div className="dubai-footer-section-item">Company Formation</div>
            <div className="dubai-footer-section-item">Business License</div>
            <div className="dubai-footer-section-item">Bank Account Opening</div>
            <div className="dubai-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="dubai-footer-section">
            <div className="dubai-footer-section-title">Resources</div>
            <div className="dubai-footer-section-item">Blog</div>
            <div className="dubai-footer-section-item">FAQ</div>
            <div className="dubai-footer-section-item">Contact</div>
            <div className="dubai-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="dubai-footer-contact">
            <div className="dubai-footer-section-title">Contact Info</div>
            <div className="dubai-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="dubai-footer-section-item">+971 50 419 3507</div>
            <div className="dubai-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="dubai-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="dubai-footer-links">
            <span className="dubai-footer-link">Privacy Policy</span>
            <span className="dubai-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 