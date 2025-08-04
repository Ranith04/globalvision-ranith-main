import React from 'react';
import '../../../styles/cayman-offshore-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function CaymanIslandsPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="cayman-hero-section">
        {/* Background Image */}
        <div className="cayman-hero-bg-image" />
        <div className="cayman-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="cayman-hero-content">
            <h1 className="cayman-hero-title">
              Cayman Islands Offshore<br />Company Formation
            </h1>
            <p className="cayman-hero-description">
              Establish your company in the prestigious Cayman Islands, a self-governing British Overseas Territory renowned for its mature legal system, political stability, and strong global reputation. Ideal for offshore structuring, asset protection, and investment funds, the Cayman Islands offer tax neutrality, confidentiality, and a well-regulated business environment trusted by international investors.
            </p>
          </div>
        </div>
      </section>

      {/* Cayman Company Formation Section */}
      <section className="cayman-intro-section">
        <div className="cayman-intro-container">
          {/* Left: Title, subtitle, feature pills, buttons */}
          <div className="cayman-intro-content">
            <h2 className="cayman-intro-title">
              Cayman Islands<br /><span className="cayman-intro-highlight">Company Formation</span>
            </h2>
            <div className="cayman-intro-features">
              <span className="cayman-intro-feature">
                <span className="cayman-intro-feature-icon">👑</span> British Territory
              </span>
              <span className="cayman-intro-feature">
                <span className="cayman-intro-feature-icon">🌎</span> West Indies
              </span>
              <span className="cayman-intro-feature">
                <span className="cayman-intro-feature-icon">👥</span> 68,076 Population
              </span>
            </div>
            <div className="cayman-intro-buttons">
              <a href="#contact" className="cayman-intro-btn-primary">Start Formation</a>
              <a href="#contact" className="cayman-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="cayman-intro-image-wrapper">
            <img src="/images/cayman-1.avif" alt="Cayman Islands" className="cayman-intro-image" />
          </div>
        </div>
      </section>

      {/* About Cayman Islands Section */}
      <section className="cayman-about-section">
        <div className="cayman-about-container">
          <h2 className="cayman-about-title">
            About the Cayman Islands
          </h2>
          <p className="cayman-about-subtitle">
            The Cayman Islands are a self-governing British Overseas Territory in the West Indies, with George Town as its capital and most populated city with 40,200 residents.
          </p>
          <div className="cayman-about-grid">
            <div className="cayman-about-card">
              <div className="cayman-about-card-icon">👑</div>
              <div className="cayman-about-card-title">British Territory Status</div>
              <div className="cayman-about-card-description">Citizens are British citizens with UK handling Foreign Relations and Defence</div>
            </div>
            <div className="cayman-about-card">
              <div className="cayman-about-card-icon">⚖️</div>
              <div className="cayman-about-card-title">Mature Legal System</div>
              <div className="cayman-about-card-description">Legal system closely resembles UK courts - considered best for offshore incorporation</div>
            </div>
            <div className="cayman-about-card">
              <div className="cayman-about-card-icon">📍</div>
              <div className="cayman-about-card-title">Strategic Location</div>
              <div className="cayman-about-card-description">Located in West Indies with George Town as the business and financial center</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cayman Section */}
      <section className="cayman-why-section">
        <div className="cayman-why-container">
          <h2 className="cayman-why-title">
            Why Choose Cayman Islands?
          </h2>
          <p className="cayman-why-subtitle">
            The Cayman Islands offer exceptional advantages for offshore company formation with their sophisticated legal framework and business-friendly environment.
          </p>
          <div className="cayman-why-grid">
            {[
              'English is the official language',
              'Legal system based on English Common Law',
              'Very mature and reliable legal system',
              'No minimum shareholding capital required',
              'Only need registered office and registered agent',
              'Minimum one shareholder and one Director',
              'Companies can operate outside Cayman Islands',
              'Simple annual return filing - no audit required'
            ].map((benefit, i) => (
              <div key={i} className="cayman-why-item">
                <span className="cayman-why-item-icon">✔️</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process Section */}
      <section className="cayman-setup-section">
        <div className="cayman-setup-container">
          <h2 className="cayman-setup-title">
            How to Set Up Your Cayman Islands Company
          </h2>
          <p className="cayman-setup-subtitle">
            Our expert team guides you through each step of the Cayman Islands company formation process
          </p>
          <div className="cayman-setup-grid">
            <div className="cayman-setup-step">
              <div className="cayman-setup-step-title">Choose Company Type</div>
              <div className="cayman-setup-step-description">Most popular is Exempt Company. You can also register as Limited Duration or Segregated Portfolio.</div>
            </div>
            <div className="cayman-setup-step">
              <div className="cayman-setup-step-title">Select Company Name</div>
              <div className="cayman-setup-step-description">Choose a unique name in English or Chinese through the Companies Registry.</div>
            </div>
            <div className="cayman-setup-step">
              <div className="cayman-setup-step-title">Prepare Articles of Association</div>
              <div className="cayman-setup-step-description">Decide on Directors and share allocation during preparation.</div>
            </div>
            <div className="cayman-setup-step">
              <div className="cayman-setup-step-title">Register Your Company</div>
              <div className="cayman-setup-step-description">Complete registration with supporting documents and opening brokerage/bank account.</div>
            </div>
            <div className="cayman-setup-step">
              <div className="cayman-setup-step-title">Secure Additional Approvals</div>
              <div className="cayman-setup-step-description">Access special licenses and services from Cayman Islands Monetary Authority.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="cayman-legal-section">
        <div className="cayman-legal-container">
          {/* Left: Text and features */}
          <div className="cayman-legal-content">
            <h2 className="cayman-legal-title">Cayman Islands Companies Act (2021 Revision)</h2>
            <p className="cayman-legal-description">
              The Companies Act governs company formation and allows foreigners to register companies with minimal requirements. For Legally Limited Companies, there's no minimum shareholding capital requirement.
            </p>
            <div className="cayman-legal-features">
              <div className="cayman-legal-feature">
                <span className="cayman-legal-feature-icon">✔️</span> Exempted Company
                <span className="cayman-legal-feature-text">No capital required, simple tax-free structure</span>
              </div>
              <div className="cayman-legal-feature">
                <span className="cayman-legal-feature-icon">✔️</span> Simple Compliance
                <span className="cayman-legal-feature-text">Only one annual return is needed for filing</span>
              </div>
              <div className="cayman-legal-feature">
                <span className="cayman-legal-feature-icon">✔️</span> Global Operations
                <span className="cayman-legal-feature-text">Companies can carry out business outside Cayman Islands</span>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="cayman-legal-image-wrapper">
            <img src="/images/cayman-2.avif" alt="Cayman Legal" className="cayman-legal-image" />
          </div>
        </div>
      </section>

      {/* Formation Services Section */}
      <section className="cayman-services-section">
        <div className="cayman-services-container">
          <h2 className="cayman-services-title">
            Comprehensive Formation Services
          </h2>
          <p className="cayman-services-subtitle">
            We handle every aspect of your Cayman Islands company formation
          </p>
          <div className="cayman-services-grid">
            <div className="cayman-services-card">
              <div className="cayman-services-card-title">What We Handle</div>
              <ul className="cayman-services-list">
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Company name search and reservation
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Articles of Association preparation
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Company registration process
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Banking assistance
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Regulatory approvals
                </li>
              </ul>
            </div>
            <div className="cayman-services-card cayman-services-card-alt">
              <div className="cayman-services-card-title">Optional Services</div>
              <ul className="cayman-services-list">
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Shelf company purchase available
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Legal structure consultation
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Ongoing compliance support
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Nominee services if required
                </li>
                <li className="cayman-services-item">
                  <span className="cayman-services-item-icon">✔️</span>Financial services licensing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cayman-cta-section">
        <div className="cayman-cta-container">
          <h2 className="cayman-cta-title">
            Start Your Cayman Islands Company Today
          </h2>
          <p className="cayman-cta-description">
            Our experienced team is ready to help you establish your Cayman Islands company
          </p>
          <div className="cayman-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="cayman-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#contact" className="cayman-cta-btn">Get Free Consultation</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="cayman-footer">
        <div className="cayman-footer-content">
          {/* Logo & Description */}
          <div className="cayman-footer-logo-section">
            <div className="cayman-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="cayman-footer-logo" />
            </div>
            <div className="cayman-footer-description">
              Your trusted partner for Cayman Islands<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="cayman-footer-section">
            <div className="cayman-footer-section-title">Services</div>
            <div className="cayman-footer-section-item">Company Formation</div>
            <div className="cayman-footer-section-item">Business License</div>
            <div className="cayman-footer-section-item">Bank Account Opening</div>
            <div className="cayman-footer-section-item">Nominee Services</div>
          </div>
          {/* Resources */}
          <div className="cayman-footer-section">
            <div className="cayman-footer-section-title">Resources</div>
            <div className="cayman-footer-section-item">Blog</div>
            <div className="cayman-footer-section-item">FAQ</div>
            <div className="cayman-footer-section-item">Contact</div>
            <div className="cayman-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="cayman-footer-contact">
            <div className="cayman-footer-section-title">Contact Info</div>
            <div className="cayman-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="cayman-footer-section-item">+971 50 419 3507</div>
            <div className="cayman-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="cayman-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="cayman-footer-links">
            <span className="cayman-footer-link">Privacy Policy</span>
            <span className="cayman-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 