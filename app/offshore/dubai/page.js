import React from 'react';
import '../../../styles/dubai-offshore-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function DubaiOffshorePage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="dubai-offshore-hero-section">
        {/* Background Image */}
        <div className="dubai-offshore-hero-bg-image" />
        <div className="dubai-offshore-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="dubai-offshore-hero-content">
            <h1 className="dubai-offshore-hero-title">
              Dubai Offshore<br />Company Formation
            </h1>
            <p className="dubai-offshore-hero-description">
              Establish your offshore company in Dubai and enjoy the advantages of complete privacy, tax efficiency, and global business reach. Ideal for international trading, holding assets, intellectual property management, and wealth protection, Dubai's offshore framework offers a secure, flexible, and reputable jurisdiction. With simplified regulations, no local office requirements, and strong banking support, it's the perfect choice for entrepreneurs and investors seeking confidentiality and international growth.
            </p>
          </div>
        </div>
      </section>

      {/* Dubai Offshore Company Formation Section */}
      <section className="dubai-offshore-intro-section">
        <div className="dubai-offshore-intro-container">
          {/* Left: Title, subtitle, buttons */}
          <div className="dubai-offshore-intro-content">
            <h2 className="dubai-offshore-intro-title">
              Dubai Offshore<br /><span className="dubai-offshore-intro-highlight">Company Formation</span>
            </h2>
            <div className="dubai-offshore-intro-buttons">
              <a href="#" className="dubai-offshore-intro-btn-primary">Start Your Setup</a>
              <a href="#" className="dubai-offshore-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="dubai-offshore-intro-image-wrapper">
            <img src="/images/dubai-offshore.avif" alt="Dubai Offshore" className="dubai-offshore-intro-image" />
          </div>
        </div>
      </section>

      {/* Why Choose Dubai Offshore Section */}
      <section className="dubai-offshore-why-section">
        <div className="dubai-offshore-why-container">
          <h2 className="dubai-offshore-why-title">
            Why Choose Dubai Offshore?
          </h2>
          <p className="dubai-offshore-why-subtitle">
            Dubai offshore companies offer unparalleled advantages for international business operations, asset protection, and tax optimization.
          </p>
          <div className="dubai-offshore-why-grid">
            {[
              { icon: '💸', title: 'Tax Neutrality', description: 'Legally benefit from zero tax structure' },
              { icon: '🔒', title: 'Privacy Protection', description: 'Shareholder details not required for public record' },
              { icon: '📝', title: 'Minimal Compliance', description: 'Easing routine for annual reporting and tax obligations' },
              { icon: '🏦', title: 'Easy Banking', description: 'Simple corporate bank account setup in UAE' },
              { icon: '🌍', title: 'Global Operations', description: 'Full repatriation of funds and multi-currency facilities' },
              { icon: '🏢', title: 'Complete Ownership', description: '100% ownership in full business activities' },
              { icon: '🤝', title: 'Confidentiality', description: 'Maintain complete confidentiality in business dealings' },
              { icon: '🚫', title: 'No Trade Barriers', description: 'No foreign exchange controls or trade restrictions' }
            ].map((item, i) => (
              <div key={i} className="dubai-offshore-why-card">
                <div className="dubai-offshore-why-card-icon">{item.icon}</div>
                <div className="dubai-offshore-why-card-title">{item.title}</div>
                <div className="dubai-offshore-why-card-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Solutions Section */}
      <section className="dubai-offshore-strategic-section">
        <div className="dubai-offshore-strategic-container">
          {/* Left: Image */}
          <div className="dubai-offshore-strategic-image-wrapper">
            <img src="/images/dubai-offshore-2.avif" alt="Dubai Offshore" className="dubai-offshore-strategic-image" />
          </div>
          {/* Right: Text */}
          <div className="dubai-offshore-strategic-content">
            <h2 className="dubai-offshore-strategic-title">
              Strategic Offshore Solutions for<br />Global Business
            </h2>
            <p className="dubai-offshore-strategic-description">
              An offshore company formation in Dubai is a legal business established to operate outside its registered jurisdiction. These companies offer unique advantages for international trading, asset protection, and tax optimization.<br /><br />With UAE's stable legal system, sophisticated infrastructure, and access to international markets, Dubai offshore companies provide the perfect gateway for global business growth.
            </p>
            <a href="#" className="dubai-offshore-strategic-btn">Learn More About Benefits</a>
          </div>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="dubai-offshore-jurisdictions-section">
        <div className="dubai-offshore-jurisdictions-container">
          <h2 className="dubai-offshore-jurisdictions-title">
            Top Offshore Jurisdictions in UAE
          </h2>
          <p className="dubai-offshore-jurisdictions-subtitle">
            Choose from the most established offshore centers
          </p>
          <div className="dubai-offshore-jurisdictions-grid">
            <div className="dubai-offshore-jurisdictions-card">
              <div className="dubai-offshore-jurisdictions-card-title">RAK International Corporate Centre (RAK ICC)</div>
              <div className="dubai-offshore-jurisdictions-card-description">
                The cheapest and fastest way to set up an offshore company in the UAE, with incorporation often completed in just a few days.
              </div>
              <ul className="dubai-offshore-jurisdictions-list">
                <li className="dubai-offshore-jurisdictions-item">✓ 100% foreign ownership permitted</li>
                <li className="dubai-offshore-jurisdictions-item">✓ Tax-free jurisdiction</li>
                <li className="dubai-offshore-jurisdictions-item">✓ <a href="#" className="dubai-offshore-jurisdictions-link">Over 14,000 companies registered</a></li>
              </ul>
            </div>
            <div className="dubai-offshore-jurisdictions-card">
              <div className="dubai-offshore-jurisdictions-card-title">Jebel Ali Free Zone Authority (JAFZA)</div>
              <div className="dubai-offshore-jurisdictions-card-description">
                UAE's only offshore vehicles permitted to own property in Dubai, offering unique advantages for real estate investment.
              </div>
              <ul className="dubai-offshore-jurisdictions-list">
                <li className="dubai-offshore-jurisdictions-item">✓ <a href="#" className="dubai-offshore-jurisdictions-link">Property ownership rights in Dubai</a></li>
                <li className="dubai-offshore-jurisdictions-item">✓ Multi-currency banking accounts</li>
                <li className="dubai-offshore-jurisdictions-item">✓ <a href="#" className="dubai-offshore-jurisdictions-link">International business operations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="dubai-offshore-services-section">
        <div className="dubai-offshore-services-container">
          <h2 className="dubai-offshore-services-title">
            Our Comprehensive Services
          </h2>
          <p className="dubai-offshore-services-subtitle">
            End-to-end solutions for your offshore business setup
          </p>
          <div className="dubai-offshore-services-grid">
            {[
              { icon: '🏢', title: 'Offshore Company Setup' },
              { icon: '💼', title: 'Investor Visa' },
              { icon: '👥', title: 'Work Visa for Teams' },
              { icon: '🏠', title: 'Residence Permits' },
              { icon: '📄', title: 'Licensing & Documentation' },
              { icon: '🧾', title: 'Labour Cards' },
              { icon: '🛂', title: 'Immigration Cards' },
              { icon: '✅', title: 'Government Approvals' },
              { icon: '🔄', title: 'License Renewal' }
            ].map((service, i) => (
              <div key={i} className="dubai-offshore-services-item">
                <div className="dubai-offshore-services-item-icon">{service.icon}</div>
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dubai-offshore-faq-section">
        <div className="dubai-offshore-faq-container">
          <h2 className="dubai-offshore-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="dubai-offshore-faq-list">
            <div className="dubai-offshore-faq-item">
              <div className="dubai-offshore-faq-question">Why set up an offshore company in the UAE?</div>
              <div className="dubai-offshore-faq-answer">An offshore company in the UAE offers the advantage of maintaining a virtual office while benefiting from the UAE market, requiring very low capital and operating in tax-free jurisdictions.</div>
            </div>
            <div className="dubai-offshore-faq-item">
              <div className="dubai-offshore-faq-question">How can I start an offshore company in Dubai?</div>
              <div className="dubai-offshore-faq-answer">The process involves choosing your jurisdiction, selecting a company name, preparing incorporation documents, appointing a registered agent, and completing the registration process. We handle everything for you.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dubai-offshore-cta-section">
        <div className="dubai-offshore-cta-container">
          <h2 className="dubai-offshore-cta-title">
            Ready to Start Your Offshore Company?
          </h2>
          <p className="dubai-offshore-cta-description">
            Get expert guidance and start your Dubai offshore company formation today
          </p>
          <div className="dubai-offshore-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="dubai-offshore-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#" className="dubai-offshore-cta-btn">Get Free Consultation</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="dubai-offshore-footer">
        <div className="dubai-offshore-footer-content">
          {/* Logo & Description */}
          <div className="dubai-offshore-footer-logo-section">
            <div className="dubai-offshore-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="dubai-offshore-footer-logo" />
            </div>
            <div className="dubai-offshore-footer-description">
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="dubai-offshore-footer-section">
            <div className="dubai-offshore-footer-section-title">Services</div>
            <div className="dubai-offshore-footer-section-item">Company Formation</div>
            <div className="dubai-offshore-footer-section-item">Business License</div>
            <div className="dubai-offshore-footer-section-item">Bank Account Opening</div>
            <div className="dubai-offshore-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="dubai-offshore-footer-section">
            <div className="dubai-offshore-footer-section-title">Resources</div>
            <div className="dubai-offshore-footer-section-item">Blog</div>
            <div className="dubai-offshore-footer-section-item">FAQ</div>
            <div className="dubai-offshore-footer-section-item">Contact</div>
            <div className="dubai-offshore-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="dubai-offshore-footer-contact">
            <div className="dubai-offshore-footer-section-title">Contact Info</div>
            <div className="dubai-offshore-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="dubai-offshore-footer-section-item">+971 50 419 3507</div>
            <div className="dubai-offshore-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="dubai-offshore-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="dubai-offshore-footer-links">
            <span className="dubai-offshore-footer-link">Privacy Policy</span>
            <span className="dubai-offshore-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 