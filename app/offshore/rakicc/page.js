import React from 'react';
import '../../../styles/rakicc-offshore-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function RAKICCOffshorePage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="rakicc-hero-section">
        {/* Background Image */}
        <div className="rakicc-hero-bg-image" />
        <div className="rakicc-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="rakicc-hero-content">
            <h1 className="rakicc-hero-title">
              RAK ICC Offshore<br />Company Formation
            </h1>
            <p className="rakicc-hero-description">
              Ras Al Khaimah International Corporate Centre (RAK ICC) is your gateway to seamless international business operations, offering a secure and reputable jurisdiction for global entrepreneurs and investors. With flexible regulations, tax-free benefits, and a strong legal framework aligned with international standards, RAK ICC is ideal for asset protection, wealth management, international holding structures, and business expansion — all while ensuring confidentiality and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* RAKICC Company Formation Section */}
      <section className="rakicc-intro-section">
        <div className="rakicc-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="rakicc-intro-content">
            <h2 className="rakicc-intro-title">
              RAK ICC<br /><span className="rakicc-intro-highlight">Offshore Formation</span>
            </h2>
            <div className="rakicc-intro-buttons">
              <a href="#" className="rakicc-intro-btn-primary">Start Formation</a>
              <a href="#" className="rakicc-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card - thick accent, shadow, slight rotation */}
          <div className="rakicc-intro-image-wrapper">
            <div className="rakicc-intro-image-container">
              {/* Green accent bar */}
              <div className="rakicc-intro-accent-bar" />
              {/* Image with border, shadow, and slight rotation */}
              <img src="/images/RAKICC-1.avif" alt="RAK ICC Cityscape" className="rakicc-intro-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="rakicc-features-section">
        <div className="rakicc-features-container">
          <h2 className="rakicc-features-title">
            Salient Features of RAK ICC
          </h2>
          <p className="rakicc-features-subtitle">
            RAK ICC operates similar to offshore company concept with unique regulations for international companies incorporation.
          </p>
          <div className="rakicc-features-content">
            {/* Features Checklist */}
            <ul className="rakicc-features-list">
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Limited liability status with 'Limited' or 'Incorporated' suffix
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Minimum one shareholder, no maximum limit
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Minimum one director required
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Corporate directors and shareholders allowed
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>No minimum capital requirement
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Different classes of shares permitted
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>No personal or corporate income tax
              </li>
              <li className="rakicc-features-item">
                <span className="rakicc-features-item-icon">✔️</span>Foreign names and characters allowed
              </li>
            </ul>
            {/* Image Card */}
            <div className="rakicc-features-image-wrapper">
              <div className="rakicc-features-image-container">
                <img src="/images/RAKICC-2.avif" alt="RAK ICC Features" className="rakicc-features-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Activities Section */}
      <section className="rakicc-activities-section">
        <div className="rakicc-activities-container">
          <h2 className="rakicc-activities-title">
            Business Activities Overview
          </h2>
          <div className="rakicc-activities-grid">
            {/* Permitted Activities Card */}
            <div className="rakicc-activities-card">
              <div className="rakicc-activities-card-title rakicc-activities-card-title-permitted">Permitted Activities</div>
              <ul className="rakicc-activities-list rakicc-activities-list-permitted">
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✔️</span>International trading operations
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✔️</span>Acting as a holding company
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✔️</span>Holding investments in UAE or foreign countries
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✔️</span>Property holding in foreign countries
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✔️</span>Certain properties in UAE
                </li>
              </ul>
            </div>
            {/* Prohibited Activities Card */}
            <div className="rakicc-activities-card">
              <div className="rakicc-activities-card-title rakicc-activities-card-title-prohibited">Prohibited Activities</div>
              <ul className="rakicc-activities-list rakicc-activities-list-prohibited">
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✖️</span>Business with persons in the Zone
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✖️</span>Banking business operations
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✖️</span>Insurance or re-insurance business
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✖️</span>Insurance brokers or agents
                </li>
                <li className="rakicc-activities-item">
                  <span className="rakicc-activities-item-icon">✖️</span>Activities prohibited by authorities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="rakicc-process-section">
        <div className="rakicc-process-container">
          {/* Left: Checklist */}
          <div className="rakicc-process-content">
            <h2 className="rakicc-process-title">
              Streamlined Registration Process
            </h2>
            <ul className="rakicc-process-list">
              <li className="rakicc-process-item">
                <span className="rakicc-process-item-icon" style={{ color: '#10b981' }}>☑️</span>
                <div className="rakicc-process-item-content">
                  <span className="rakicc-process-item-title">No Physical Presence Required</span><br />
                  <span className="rakicc-process-item-description">Directors and shareholders don't need to be physically present before authorities, but must sign documents before registered agents.</span>
                </div>
              </li>
              <li className="rakicc-process-item">
                <span className="rakicc-process-item-icon" style={{ color: '#38bdf8' }}>🌐</span>
                <div className="rakicc-process-item-content">
                  <span className="rakicc-process-item-title">International Trade Allowed</span><br />
                  <span className="rakicc-process-item-description">Companies can engage in international trading with flexible regulatory framework.</span>
                </div>
              </li>
              <li className="rakicc-process-item">
                <span className="rakicc-process-item-icon" style={{ color: '#10b981' }}>🏦</span>
                <div className="rakicc-process-item-content">
                  <span className="rakicc-process-item-title">UAE Banking & Meetings</span><br />
                  <span className="rakicc-process-item-description">Maintain bank accounts in UAE and conduct shareholder meetings within the country.</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Image Card */}
          <div className="rakicc-process-image-wrapper">
            <div className="rakicc-process-image-container">
              <img src="/images/RAKEZ-1.avif" alt="RAKEZ Cityscape" className="rakicc-process-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Important Considerations Section */}
      <section className="rakicc-considerations-section">
        <div className="rakicc-considerations-container">
          <div className="rakicc-considerations-card">
            <div className="rakicc-considerations-title">Important Considerations</div>
            <ul className="rakicc-considerations-list">
              <li className="rakicc-considerations-item rakicc-considerations-item-warning">
                No UAE Residence Visas
                <span className="rakicc-considerations-item-description">: International companies are not entitled to any residence visa in the UAE.</span>
              </li>
              <li className="rakicc-considerations-item rakicc-considerations-item-info">
                Annual Maintenance
                <span className="rakicc-considerations-item-description">: Accounts should be maintained annually, though annual audit submission is not mandatory.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rakicc-cta-section">
        <div className="rakicc-cta-container">
          <h2 className="rakicc-cta-title">
            Start Your RAK ICC Company Today
          </h2>
          <p className="rakicc-cta-description">
            Get expert assistance with your RAK ICC offshore company formation
          </p>
          <div className="rakicc-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="rakicc-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#" className="rakicc-cta-btn">Get Free Consultation</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="rakicc-footer">
        <div className="rakicc-footer-content">
          {/* Logo & Description */}
          <div className="rakicc-footer-logo-section">
            <div className="rakicc-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="rakicc-footer-logo" />
            </div>
            <div className="rakicc-footer-description">
              Your trusted partner for RAK ICC company formation and business setup services.
            </div>
          </div>
          {/* Services */}
          <div className="rakicc-footer-section">
            <div className="rakicc-footer-section-title">Services</div>
            <div className="rakicc-footer-section-item">Company Formation</div>
            <div className="rakicc-footer-section-item">Business License</div>
            <div className="rakicc-footer-section-item">Bank Account Opening</div>
            <div className="rakicc-footer-section-item">Nominee Services</div>
          </div>
          {/* Resources */}
          <div className="rakicc-footer-section">
            <div className="rakicc-footer-section-title">Resources</div>
            <div className="rakicc-footer-section-item">Blog</div>
            <div className="rakicc-footer-section-item">FAQ</div>
            <div className="rakicc-footer-section-item">Contact</div>
            <div className="rakicc-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="rakicc-footer-contact">
            <div className="rakicc-footer-section-title">Contact Info</div>
            <div className="rakicc-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="rakicc-footer-section-item">+971 50 419 3507</div>
            <div className="rakicc-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="rakicc-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="rakicc-footer-links">
            <span className="rakicc-footer-link">Privacy Policy</span>
            <span className="rakicc-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 