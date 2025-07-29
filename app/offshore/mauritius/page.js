import React from 'react';
import '../../../styles/mauritius-offshore-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function MauritiusPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="mauritius-hero-section">
        {/* Background Image */}
        <div className="mauritius-hero-bg-image" />
        <div className="mauritius-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="mauritius-hero-content">
            <h1 className="mauritius-hero-title">
              Mauritius Offshore<br />Company Formation
            </h1>
            <p className="mauritius-hero-description">
              Mauritius Offshore is your gateway to seamless international business operations, offering a secure and reputable jurisdiction for global entrepreneurs and investors. With flexible regulations, tax-free benefits, and a strong legal framework aligned with international standards, Mauritius Offshore is ideal for asset protection, wealth management, international holding structures, and business expansion — all while ensuring confidentiality and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Mauritius Company Formation Section */}
      <section className="mauritius-intro-section">
        <div className="mauritius-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="mauritius-intro-content">
            <h2 className="mauritius-intro-title">
              Mauritius Offshore<br /><span className="mauritius-intro-highlight">Company Formation</span>
            </h2>
            <div className="mauritius-intro-features">
              <div className="mauritius-intro-feature">
                <span className="mauritius-intro-feature-icon">📍</span>Indian Ocean
              </div>
              <div className="mauritius-intro-feature">
                <span className="mauritius-intro-feature-icon">🏝️</span>Island Paradise
              </div>
              <div className="mauritius-intro-feature">
                <span className="mauritius-intro-feature-icon"></span> 
              </div>
            </div>
            <div className="mauritius-intro-buttons">
              <a href="#" className="mauritius-intro-btn-primary">Start Formation</a>
              <a href="#" className="mauritius-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card - thick accent, shadow, slight rotation */}
          <div className="mauritius-intro-image-wrapper">
            <div className="mauritius-intro-image-container">
              {/* Green accent bar */}
              <div className="mauritius-intro-accent-bar" />
              {/* Image with border, shadow, and slight rotation */}
              <img src="/images/mauritius-1.avif" alt="Mauritius Cityscape" className="mauritius-intro-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Mauritius Section */}
      <section className="mauritius-why-section">
        <div className="mauritius-why-container">
          <h2 className="mauritius-why-title">
            Why Mauritius for Offshore Business?
          </h2>
          <p className="mauritius-why-subtitle">
            In recent years, Mauritius has gained a solid reputation as a secure and reliable investment destination with several exciting features including stable governance, ethics, economic transparency, and political freedom.
          </p>
          <div className="mauritius-why-grid">
            {[
              { icon: '🛡️', title: 'Stable Governance', description: 'Established reputation for secure and reliable investment destination' },
              { icon: '📈', title: 'Economic Transparency', description: 'Strong economic transparency and political freedom' },
              { icon: '📍', title: 'Strategic Location', description: 'Island in Indian Ocean, southeast coast of African continent' },
              { icon: '🖥️', title: 'Leading Platform', description: 'Established as leading platform for global investors' },
              { icon: '🌴', title: 'Natural Beauty', description: 'Beautiful flora, fauna and exciting natural attractions' },
              { icon: '👥', title: 'Global Investors', description: 'Platform for investors around the globe with plenty of offers' }
            ].map((item, i) => (
              <div key={i} className="mauritius-why-card">
                <div className="mauritius-why-card-icon">
                  <span role="img" aria-label="icon">{item.icon}</span>
                </div>
                <div className="mauritius-why-card-title">{item.title}</div>
                <div className="mauritius-why-card-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="mauritius-facts-section">
        <div className="mauritius-facts-container">
          <h2 className="mauritius-facts-title">
            Key Facts on Mauritius Business Setup
          </h2>
          <p className="mauritius-facts-subtitle">
            Important information about company formation and business operations in Mauritius
          </p>
          <div className="mauritius-facts-grid">
            {[
              'Category two global business company replaced by authorized company',
              'Considered non-resident for taxation if management is outside country',
              'Business activities conducted outside Mauritius',
              'Controlled by majority shareholders who are not Mauritius citizens',
              'Company formation with proper documents',
              'Migration of companies permitted in and out of country'
            ].map((fact, i) => (
              <div key={i} className="mauritius-facts-item">
                <span className="mauritius-facts-item-icon">✔️</span>
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework Section */}
      <section className="mauritius-regulatory-section">
        <div className="mauritius-regulatory-container">
          {/* Left: Text and cards */}
          <div className="mauritius-regulatory-content">
            <h2 className="mauritius-regulatory-title">
              Regulatory Framework
            </h2>
            <p className="mauritius-regulatory-description">
              Mauritius has a well-established regulatory framework governing offshore company formation
            </p>
            <div className="mauritius-regulatory-cards">
              <div className="mauritius-regulatory-card">
                Financial Services Commission
                <div className="mauritius-regulatory-card-description">Primary regulatory body overseeing financial services</div>
              </div>
              <div className="mauritius-regulatory-card">
                Registrar of Companies
                <div className="mauritius-regulatory-card-description">Handles company registration and compliance matters</div>
              </div>
            </div>
            <div className="mauritius-regulatory-legislation-title">Key Legislation</div>
            <ul className="mauritius-regulatory-list">
              <li className="mauritius-regulatory-item">
                <span className="mauritius-regulatory-item-icon">✔️</span>The Companies Act, 2001
              </li>
              <li className="mauritius-regulatory-item">
                <span className="mauritius-regulatory-item-icon">✔️</span>Financial Services Act, 2007
              </li>
            </ul>
          </div>
          {/* Right: Image Card */}
          <div className="mauritius-regulatory-image-wrapper">
            <div className="mauritius-regulatory-image-container">
              <img src="/images/mauritius-2.avif" alt="Mauritius Regulatory" className="mauritius-regulatory-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure Section */}
      <section className="mauritius-structure-section">
        <div className="mauritius-structure-container">
          <h2 className="mauritius-structure-title">
            Company Structure Information
          </h2>
          <p className="mauritius-structure-subtitle">
            Understanding the structure and requirements for Mauritius offshore companies
          </p>
          <div className="mauritius-structure-grid">
            <div className="mauritius-structure-card">
              <div className="mauritius-structure-card-title">Company Requirements</div>
              <ul className="mauritius-structure-list">
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon" style={{ color: '#0891b2', fontSize: 18 }}>■</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">Company Name</div>
                    <div className="mauritius-structure-item-description">can end with 'Ltd', 'Limited', 'Corp', 'S.A.', or 'Inc'</div>
                  </div>
                </li>
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon" style={{ color: '#0891b2', fontSize: 18 }}>⇄</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">Migration Permitted</div>
                    <div className="mauritius-structure-item-description">Companies can migrate in and out of country</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mauritius-structure-card mauritius-structure-card-alt">
              <div className="mauritius-structure-card-title">Key Benefits</div>
              <ul className="mauritius-structure-list">
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon">✔️</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">No shelf companies – all fresh incorporations</div>
                  </div>
                </li>
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon">✔️</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">Flexible tax planning opportunities</div>
                  </div>
                </li>
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon">✔️</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">Access to extensive treaty network</div>
                  </div>
                </li>
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon">✔️</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">Established financial services sector</div>
                  </div>
                </li>
                <li className="mauritius-structure-item">
                  <span className="mauritius-structure-item-icon">✔️</span>
                  <div className="mauritius-structure-item-content">
                    <div className="mauritius-structure-item-title">English-speaking business environment</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mauritius-support-section">
        <div className="mauritius-support-container">
          <h2 className="mauritius-support-title">
            How Global Vision Support Offshore Business Setup in Mauritius
          </h2>
          <p className="mauritius-support-subtitle">
            With years of experience setting up companies offshore, we provide comprehensive support for your Mauritius company formation needs.
          </p>
          <div className="mauritius-support-grid">
            <div className="mauritius-support-card">
              <div className="mauritius-support-card-title">Expert Legal Team</div>
              <div className="mauritius-support-card-description">Company formation experts work closely with our legal team to ensure everything is in perfect order</div>
            </div>
            <div className="mauritius-support-card">
              <div className="mauritius-support-card-title">Global Experience</div>
              <div className="mauritius-support-card-description">We have helped clients from 100+ countries worldwide with offshore company formation</div>
            </div>
          </div>
          {/* Callout Card */}
          <div className="mauritius-support-callout">
            Need Help with Mauritius Offshore Company Formation?<br />
            <span className="mauritius-support-callout-subtitle">If you need help incorporating an offshore company in Mauritius, get in touch. We can be counted on to deliver the right kind of assistance for your unique needs.</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mauritius-cta-section">
        <div className="mauritius-cta-container">
          <h2 className="mauritius-cta-title">
            Ready to Incorporate in Mauritius?
          </h2>
          <p className="mauritius-cta-description">
            Contact our Mauritius formation experts today for comprehensive offshore solutions
          </p>
          <div className="mauritius-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="mauritius-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#" className="mauritius-cta-btn">Get Free Consultation</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="mauritius-footer">
        <div className="mauritius-footer-content">
          {/* Logo & Description */}
          <div className="mauritius-footer-logo-section">
            <div className="mauritius-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="mauritius-footer-logo" />
            </div>
            <div className="mauritius-footer-description">
              Your trusted partner for Mauritius company formation and business setup services.
            </div>
          </div>
          {/* Services */}
          <div className="mauritius-footer-section">
            <div className="mauritius-footer-section-title">Services</div>
            <div className="mauritius-footer-section-item">Company Formation</div>
            <div className="mauritius-footer-section-item">Business License</div>
            <div className="mauritius-footer-section-item">Bank Account Opening</div>
            <div className="mauritius-footer-section-item">Nominee Services</div>
          </div>
          {/* Resources */}
          <div className="mauritius-footer-section">
            <div className="mauritius-footer-section-title">Resources</div>
            <div className="mauritius-footer-section-item">Blog</div>
            <div className="mauritius-footer-section-item">FAQ</div>
            <div className="mauritius-footer-section-item">Contact</div>
            <div className="mauritius-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="mauritius-footer-contact">
            <div className="mauritius-footer-section-title">Contact Info</div>
            <div className="mauritius-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="mauritius-footer-section-item">+971 50 419 3507</div>
            <div className="mauritius-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="mauritius-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="mauritius-footer-links">
            <span className="mauritius-footer-link">Privacy Policy</span>
            <span className="mauritius-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 