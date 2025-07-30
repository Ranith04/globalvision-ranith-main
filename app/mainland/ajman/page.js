import React from 'react';
import '../../../styles/ajman-mainland-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

const ajmanFlag = '/images/uae-flag.png';
const bgImage = '/images/hero-bg.jpg';

export default function AjmanMainlandPage() {
  return (
    <>
      <Navbar />
      <section className="ajman-hero-section">
       {/* Background Image under gradient */}
       <img
          src="/images/backgroundimg.png"
          alt="Background"
          className="ajman-hero-bg-image"
        />
        {/* Overlay (optional cityscape image) */}
        <div className="ajman-hero-overlay" />
         <div className="ajman-hero-content-wrapper">
           {/* Left-aligned: Heading and Description */}
           <div className="ajman-hero-content">
            <h1 className="ajman-hero-title">
            Ajman Mainland<br />Company Formation
            </h1>
            <p className="ajman-hero-description">
            Ajman Mainland, regulated by the Ajman Department of Economic Development (Ajman DED), offers a cost-effective and strategically positioned business environment within the UAE. Known for its simplified company formation process and competitive licensing fees, Ajman is an attractive option for startups, SMEs, and international investors. Businesses enjoy full access to UAE markets, flexible ownership structures in many sectors, and proximity to major ports and highways. With supportive government policies, growing infrastructure, and a focus on commercial and industrial development, Ajman Mainland provides the ideal platform for scalable growth, operational efficiency, and long-term success in a thriving economic ecosystem.
             </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="ajman-overview-section">
        <div className="ajman-overview-container">
          <h2 className="ajman-overview-title">
            Overview
          </h2>
          <p className="ajman-overview-subtitle">
            Ajman offers a strategic location and cost-effective solutions for business setup. Global Vision provides end-to-end support for your business journey in Ajman.
          </p>
          <div className="ajman-overview-content">
            <img src="/images/Ajman Mainland.avif" alt="Ajman Mainland Office" className="ajman-overview-image" />
            <div className="ajman-overview-text">
              <div className="ajman-overview-text-title">About Global Vision</div>
              <div className="ajman-overview-text-description">
                Premier consultancy specializing in UAE business setup with over 10 years of hands-on experience and 1000+ successful business launches.
              </div>
              <div className="ajman-overview-stats">
                <div className="ajman-overview-stat">
                  1000+<div className="ajman-overview-stat-label">Successful Launches</div>
                </div>
                <div className="ajman-overview-stat">
                  10+<div className="ajman-overview-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Ajman Mainland is Perfect for Your Business Section */}
      <section className="ajman-why-section">
        <div className="ajman-why-container">
          <h2 className="ajman-why-title">
            Why Ajman Mainland is Perfect for Your Business
          </h2>
          <p className="ajman-why-subtitle">
            Unlock unlimited potential with strategic advantages
          </p>
          <div className="ajman-why-features">
            {/* Full Market Access */}
            <div className="ajman-why-feature">
              <div className="ajman-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="ajman-why-feature-title">Full Market Access</div>
              <div className="ajman-why-feature-description">
                Trade across all UAE emirates without restrictions
              </div>
            </div>
            {/* 100% Foreign Ownership */}
            <div className="ajman-why-feature">
              <div className="ajman-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <div className="ajman-why-feature-title">100% Foreign Ownership</div>
              <div className="ajman-why-feature-description">
                Complete control with Cabinet Resolution No. 56 (2020)
              </div>
            </div>
            {/* Cost Flexibility */}
            <div className="ajman-why-feature">
              <div className="ajman-why-feature-icon">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="ajman-why-feature-title">Cost Flexibility</div>
              <div className="ajman-why-feature-description">
                Affordable setup and renewal costs
              </div>
            </div>
          </div>
          <div className="ajman-why-cards">
            {/* Hassle-Free Process */}
            <div className="ajman-why-card">
              <div className="ajman-why-card-title">Hassle-Free Process</div>
              <ul className="ajman-why-card-list">
                <li><span className="ajman-why-check">✓</span>Quick company registration</li>
                <li><span className="ajman-why-check">✓</span>Minimal paperwork</li>
                <li><span className="ajman-why-check">✓</span>Dedicated support</li>
              </ul>
            </div>
            {/* Strategic Location */}
            <div className="ajman-why-card">
              <div className="ajman-why-card-title">Strategic Location</div>
              <ul className="ajman-why-card-list">
                <li><span className="ajman-why-check">✓</span>Proximity to Dubai and Sharjah</li>
                <li><span className="ajman-why-check">✓</span>Access to major ports</li>
                <li><span className="ajman-why-check">✓</span>Ideal for trading businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps to Setup Your Business in Ajman Mainland Section */}
      <section className="ajman-steps-section">
        <div className="ajman-steps-container">
          <h2 className="ajman-steps-title">
            Steps to Setup Your Business in Ajman Mainland
          </h2>
          <p className="ajman-steps-subtitle">
             
          </p>
          {/* Step 1: Business Structuring */}
          <div className="ajman-step">
            <div className="ajman-step-header">
              <div className="ajman-step-number">1</div>
              <div className="ajman-step-title">Business Structuring</div>
            </div>
            <div className="ajman-step-content">
              {/* Choose Activity */}
              <div className="ajman-step-card">
                <div className="ajman-step-card-title">Choose Activity</div>
                <div className="ajman-step-card-description">Select and verify business activity with Ajman DED</div>
              </div>
              {/* Legal Structure */}
              <div className="ajman-step-card">
                <div className="ajman-step-card-title">Legal Structure</div>
                <div className="ajman-step-card-description">Choose between LLC, Sole Establishment, or Branch</div>
              </div>
              {/* Reserve Name */}
              <div className="ajman-step-card">
                <div className="ajman-step-card-title">Reserve Name</div>
                <div className="ajman-step-card-description">Secure your unique trade name</div>
              </div>
            </div>
          </div>
          {/* Step 2: Licensing & Formation */}
          <div className="ajman-step">
            <div className="ajman-step-header">
              <div className="ajman-step-number">2</div>
              <div className="ajman-step-title">Licensing & Formation</div>
            </div>
            <div className="ajman-step-icons">
              {/* Initial Approval */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </div>
                <div className="ajman-step-icon-title">Initial Approval</div>
              </div>
              {/* MOA Drafting */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 4h12v16H6z" stroke="#1ec6b6" strokeWidth="2"/><path d="M9 8h6" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="ajman-step-icon-title">MOA Drafting</div>
              </div>
              {/* Lease Agreement */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="ajman-step-icon-title">Lease Agreement</div>
              </div>
              {/* Trade License */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="ajman-step-icon-title">Trade License</div>
              </div>
            </div>
          </div>
          {/* Step 3: Post-Formation Setup */}
          <div className="ajman-step">
            <div className="ajman-step-header">
              <div className="ajman-step-number">3</div>
              <div className="ajman-step-title">Post-Formation Setup</div>
            </div>
            <div className="ajman-step-icons">
              {/* Visa Processing */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#1ec6b6"/></svg>
                </div>
                <div className="ajman-step-icon-title">Visa Processing</div>
                <div className="ajman-step-icon-description">Investor and employee visas, Emirates ID</div>
              </div>
              {/* Bank Account */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="ajman-step-icon-title">Bank Account</div>
                <div className="ajman-step-icon-description">Corporate accounts with top UAE banks</div>
              </div>
              {/* Compliance */}
              <div className="ajman-step-icon-card">
                <div className="ajman-step-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/><path d="M8 12h8" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="ajman-step-icon-title">Compliance</div>
                <div className="ajman-step-icon-description">VAT registration, accounting, renewals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
      {/* Client Success Stories Section */}
      <section className="ajman-testimonials-section">
        <div className="ajman-testimonials-container">
          <h2 className="ajman-testimonials-title">
            Client Success Stories
          </h2>
          <div className="ajman-testimonials-grid">
            {/* Testimonial 1 */}
            <div className="ajman-testimonial-card">
              <div className="ajman-testimonial-header">
                <img src="/images/john.png" alt="John Smith" className="ajman-testimonial-avatar" />
                <div>
                  <div className="ajman-testimonial-name">John Smith</div>
                  <div className="ajman-testimonial-company">TechSolutions Inc.</div>
                </div>
              </div>
              <div className="ajman-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="ajman-testimonial-quote">
                "Global Vision accelerated our Ajman license and gave us the market presence we needed."
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="ajman-testimonial-card">
              <div className="ajman-testimonial-header">
                <img src="/images/sarah.png" alt="Sarah Johnson" className="ajman-testimonial-avatar" />
                <div>
                  <div className="ajman-testimonial-name">Sarah Johnson</div>
                  <div className="ajman-testimonial-company">GlobalTrade Ltd.</div>
                </div>
              </div>
              <div className="ajman-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="ajman-testimonial-quote">
                "Visa support and guidance were critical—everything was smooth and fast."
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="ajman-testimonial-card">
              <div className="ajman-testimonial-header">
                <img src="/images/jakob.png" alt="Jakob Wegner" className="ajman-testimonial-avatar" />
                <div>
                  <div className="ajman-testimonial-name">Jakob Wegner</div>
                  <div className="ajman-testimonial-company">InnoHub</div>
                </div>
              </div>
              <div className="ajman-testimonial-rating">
                {'★★★★★'}
              </div>
              <div className="ajman-testimonial-quote">
                "We appreciated the legal insights that helped us meet Ajman requirements."
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Frequently Asked Questions Section */}
      <section className="ajman-faq-section">
        <div className="ajman-faq-container">
          <h2 className="ajman-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="ajman-faq-list">
            {/* FAQ 1 */}
            <div className="ajman-faq-item">
              <div className="ajman-faq-question">How long does setup take?</div>
              <div className="ajman-faq-answer">5–7 business days with complete documentation and our streamlined process.</div>
            </div>
            {/* FAQ 2 */}
            <div className="ajman-faq-item">
              <div className="ajman-faq-question">Do I need a local sponsor?</div>
              <div className="ajman-faq-answer">No local sponsor required for most activities, thanks to 100% foreign ownership laws.</div>
            </div>
            {/* FAQ 3 */}
            <div className="ajman-faq-item">
              <div className="ajman-faq-question">What taxes apply?</div>
              <div className="ajman-faq-answer">9% corporate tax on profits above AED 375,000. No personal income tax.</div>
            </div>
            {/* FAQ 4 */}
            <div className="ajman-faq-item">
              <div className="ajman-faq-question">How many visas can I get?</div>
              <div className="ajman-faq-answer">Based on office space - typically one visa per 80 sq. ft. of office area.</div>
            </div>
            {/* FAQ 5 */}
            <div className="ajman-faq-item">
              <div className="ajman-faq-question">Can I operate outside Ajman?</div>
              <div className="ajman-faq-answer">Yes, mainland licenses allow operation across all UAE emirates without restrictions.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer Section */}
      <footer className="ajman-footer">
        <div className="ajman-footer-content">
          {/* Logo & Description */}
          <div className="ajman-footer-logo-section">
            <div className="ajman-footer-logo">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" />
            </div>
            <div className="ajman-footer-description">
              Your trusted partner for Ajman mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="ajman-footer-section">
            <div className="ajman-footer-section-title">Services</div>
            <div className="ajman-footer-section-item">Company Formation</div>
            <div className="ajman-footer-section-item">Business License</div>
            <div className="ajman-footer-section-item">Bank Account Opening</div>
            <div className="ajman-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="ajman-footer-section">
            <div className="ajman-footer-section-title">Resources</div>
            <div className="ajman-footer-section-item">Blog</div>
            <div className="ajman-footer-section-item">FAQ</div>
            <div className="ajman-footer-section-item">Contact</div>
            <div className="ajman-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="ajman-footer-contact">
            <div className="ajman-footer-section-title">Contact Info</div>
            <div className="ajman-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="ajman-footer-section-item"> +971 50 419 3507</div>
            <div className="ajman-footer-section-item"> info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="ajman-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="ajman-footer-links">
            <span className="ajman-footer-link">Privacy Policy</span>
            <span className="ajman-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 