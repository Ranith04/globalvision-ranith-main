import React from 'react';
import '../../../styles/bvi-offshore-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function BVIPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bvi-hero-section">
        {/* Background Image */}
        <div className="bvi-hero-bg-image" />
        <div className="bvi-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="bvi-hero-content">
            <h1 className="bvi-hero-title">
              BVI Offshore<br />Company Formation
            </h1>
            <p className="bvi-hero-description">
              Establish your company in the British Virgin Islands (BVI) — a prestigious British Overseas Territory known for its robust legal system, international credibility, and investor-friendly environment. Enjoy complete tax exemption, confidentiality, and strong privacy protection, making it an ideal choice for international trading, asset holding, and wealth management. With flexible regulations and global recognition, BVI offers a trusted platform for secure and efficient offshore operations.
            </p>
          </div>
        </div>
      </section>

      {/* BVI Company Formation Section */}
      <section className="bvi-intro-section">
        <div className="bvi-intro-container">
          {/* Left: Title, subtitle, feature pills, buttons */}
          <div className="bvi-intro-content">
            <h2 className="bvi-intro-title">
              BVI Offshore<br /><span className="bvi-intro-highlight">Company Formation</span>
            </h2>
            <div className="bvi-intro-features">
              <span className="bvi-intro-feature">
                <span className="bvi-intro-feature-icon">👑</span> British Overseas Territory
              </span>
              <span className="bvi-intro-feature">
                <span className="bvi-intro-feature-icon">🌴</span> Caribbean Location
              </span>
            </div>
            <div className="bvi-intro-buttons">
              <a href="#" className="bvi-intro-btn-primary">Start BVI Setup</a>
              <a href="#" className="bvi-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="bvi-intro-image-wrapper">
            <img src="/images/BVI-1.avif" alt="BVI Offshore" className="bvi-intro-image" />
          </div>
        </div>
      </section>

      {/* About British Virgin Islands Section */}
      <section className="bvi-about-section">
        <div className="bvi-about-container">
          {/* Left: Text and feature pills */}
          <div className="bvi-about-content">
            <h2 className="bvi-about-title">About British Virgin Islands</h2>
            <p className="bvi-about-description">
              The British Virgin Islands are a British Overseas Territory in the Caribbean, part of the West Indies. As a British Overseas Territory, it maintains the British monarch as Head of State while governing itself independently.
            </p>
            <p className="bvi-about-description">
              The BVI Business Companies Act (No. 16 of 2004) governs company formation, simplifying the process with minimal reporting requirements and basic company structure needing just one shareholder and one Director.
            </p>
            <div className="bvi-about-features">
              <span className="bvi-about-feature">
                <span className="bvi-about-feature-icon">👑</span> British Overseas Territory
              </span>
              <span className="bvi-about-feature">
                <span className="bvi-about-feature-icon">🌴</span> Caribbean Location
              </span>
            </div>
          </div>
          {/* Right: Image */}
          <div className="bvi-about-image-wrapper">
            <img src="/images/BVI-2.avif" alt="British Virgin Islands" className="bvi-about-image" />
          </div>
        </div>
      </section>

      {/* Why Choose BVI Section */}
      <section className="bvi-why-section">
        <div className="bvi-why-container">
          <h2 className="bvi-why-title">
            Why Choose BVI for Your Offshore Company?
          </h2>
          <p className="bvi-why-subtitle">
            The British Virgin Islands offer unmatched advantages for international business with strong legal framework and complete tax exemption.
          </p>
          <div className="bvi-why-grid">
            {[
              'English is the official language for easy documentation',
              'Simplified company structure with minimal requirements',
              'No corporate or income tax for registered companies',
              'No capital gains taxes on profits',
              'Complete confidentiality – owner names not public',
              '100% foreign ownership permitted',
              'Companies can operate anywhere in the world',
              'British legal system provides stability and trust'
            ].map((benefit, i) => (
              <div key={i} className="bvi-why-item">
                <span className="bvi-why-item-icon">✔️</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process Section */}
      <section className="bvi-setup-section">
        <div className="bvi-setup-container">
          <h2 className="bvi-setup-title">
            How to Set Up Your BVI Company
          </h2>
          <p className="bvi-setup-subtitle">
            Our streamlined 5-step process makes BVI company formation simple and efficient
          </p>
          <div className="bvi-setup-grid">
            <div className="bvi-setup-step">
              <div className="bvi-setup-step-number">1</div>
              <div className="bvi-setup-step-title">Choose Unique Business Name</div>
              <div className="bvi-setup-step-description">Reserve your chosen name with Companies Registry under Registry of Corporate Affairs</div>
            </div>
            <div className="bvi-setup-step">
              <div className="bvi-setup-step-number">2</div>
              <div className="bvi-setup-step-title">Prepare Articles of Incorporation</div>
              <div className="bvi-setup-step-description">Document company purpose and articles (name, objectives, shareholding, directorship, timelines)</div>
            </div>
            <div className="bvi-setup-step">
              <div className="bvi-setup-step-number">3</div>
              <div className="bvi-setup-step-title">Appoint Local Registered Agent</div>
              <div className="bvi-setup-step-description">Agent handles all submissions including liaising with BVI Companies Registry</div>
            </div>
            <div className="bvi-setup-step">
              <div className="bvi-setup-step-number">4</div>
              <div className="bvi-setup-step-title">Open Corporate Bank Account</div>
              <div className="bvi-setup-step-description">Required before company registration – essential prerequisite for incorporation</div>
            </div>
            <div className="bvi-setup-step">
              <div className="bvi-setup-step-number">5</div>
              <div className="bvi-setup-step-title">Obtain Additional Approvals</div>
              <div className="bvi-setup-step-description">Receive all necessary approvals from BVI Companies for specific business activities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="bvi-legal-section">
        <div className="bvi-legal-container">
          {/* Left: Image */}
          <div className="bvi-legal-image-wrapper">
            <img src="/images/service3.png" alt="BVI Legal" className="bvi-legal-image" />
          </div>
          {/* Right: Text and features */}
          <div className="bvi-legal-content">
            <h2 className="bvi-legal-title">Strong Legal Framework</h2>
            <p className="bvi-legal-description">
              The BVI legal system closely resembles UK courts and is considered the best place to incorporate an offshore company. English Common Law provides a familiar and reliable legal foundation.
            </p>
            <div className="bvi-legal-features">
              <div className="bvi-legal-feature">
                <span className="bvi-legal-feature-icon">✔️</span> BVI Companies Act (2021 Revision)
                <span className="bvi-legal-feature-text">Governs company formation with simplified requirements</span>
              </div>
              <div className="bvi-legal-feature">
                <span className="bvi-legal-feature-icon">✔️</span> Minimal Requirements
                <span className="bvi-legal-feature-text">Just one shareholder and one Director needed</span>
              </div>
              <div className="bvi-legal-feature">
                <span className="bvi-legal-feature-icon">✔️</span> No Minimum Capital
                <span className="bvi-legal-feature-text">No minimum shareholding capital required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Services Section */}
      <section className="bvi-expert-section">
        <div className="bvi-expert-container">
          <h2 className="bvi-expert-title">
            Why Choose Our Expert Services?
          </h2>
          <p className="bvi-expert-subtitle">
            At A&A Associate LLC, we have years of experience helping set up companies in BVI. Our expert legal team and financial analysts ensure everything is in perfect order.
          </p>
          <div className="bvi-expert-grid">
            <div className="bvi-expert-card">
              <div className="bvi-expert-card-icon">👨‍⚖️</div>
              <div className="bvi-expert-card-title">Expert Legal Team</div>
              <div className="bvi-expert-card-description">Backed by exceptionally strong legal team with extensive BVI experience</div>
            </div>
            <div className="bvi-expert-card">
              <div className="bvi-expert-card-icon">🌐</div>
              <div className="bvi-expert-card-title">Global Experience</div>
              <div className="bvi-expert-card-description">Helped clients from 100+ countries with seamless company formation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bvi-cta-section">
        <div className="bvi-cta-container">
          <h2 className="bvi-cta-title">
            Ready to Incorporate in BVI?
          </h2>
          <p className="bvi-cta-description">
            Contact our BVI formation experts today for a free consultation
          </p>
          <div className="bvi-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="bvi-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#" className="bvi-cta-btn">Get Free Consultation</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="bvi-footer">
        <div className="bvi-footer-content">
          {/* Logo & Description */}
          <div className="bvi-footer-logo-section">
            <div className="bvi-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="bvi-footer-logo" />
            </div>
            <div className="bvi-footer-description">
              Your trusted partner for BVI offshore<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="bvi-footer-section">
            <div className="bvi-footer-section-title">Services</div>
            <div className="bvi-footer-section-item">Company Formation</div>
            <div className="bvi-footer-section-item">Business License</div>
            <div className="bvi-footer-section-item">Bank Account Opening</div>
            <div className="bvi-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="bvi-footer-section">
            <div className="bvi-footer-section-title">Resources</div>
            <div className="bvi-footer-section-item">Blog</div>
            <div className="bvi-footer-section-item">FAQ</div>
            <div className="bvi-footer-section-item">Contact</div>
            <div className="bvi-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="bvi-footer-contact">
            <div className="bvi-footer-section-title">Contact Info</div>
            <div className="bvi-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="bvi-footer-section-item">+971 50 419 3507</div>
            <div className="bvi-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="bvi-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="bvi-footer-links">
            <span className="bvi-footer-link">Privacy Policy</span>
            <span className="bvi-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 