import React from 'react';
import '../../../styles/virtual-offices-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function VirtualOfficesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="virtual-hero-section">
        {/* Background Image */}
        <div className="virtual-hero-bg-image" />
        <div className="virtual-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="virtual-hero-content">
            <h1 className="virtual-hero-title">
              Virtual Office<br />
            </h1>
            <p className="virtual-hero-description">
              Establish a strong company presence with a virtual office in Dubai, offering a prestigious business address, access to professional support services, and flexible workspace solutions. Ideal for startups, remote teams, and international businesses looking to build credibility and operate efficiently without the cost of a physical office. Enjoy features like mail handling, call answering, meeting room access, and full compliance with UAE regulations — all designed to support your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Offices Section */}
      <section className="virtual-intro-section">
        <div className="virtual-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="virtual-intro-content">
            <h2 className="virtual-intro-title">
              Virtual Offices<br /><span className="virtual-intro-highlight">Dubai Sheikh Zayed Road</span>
            </h2>
            <div className="virtual-intro-buttons">
              <a href="#contact" className="virtual-intro-btn-primary">Book Virtual Office</a>
              <a href="#contact" className="virtual-intro-btn-secondary">Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div className="virtual-intro-image-wrapper">
            <div className="virtual-intro-image-container">
              <div className="virtual-intro-image-accent" />
              <img src="/images/virtual-1.avif" alt="SZR Cityscape" className="virtual-intro-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Virtual Office Section */}
      <section className="virtual-why-section">
        <div className="virtual-why-container">
          <h2 className="virtual-why-title">
            Why Choose Virtual Office in Dubai?
          </h2>
          <p className="virtual-why-subtitle">
            Experience the benefits of a professional business presence without the overhead costs
          </p>
          <div className="virtual-why-grid">
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Prestigious Business Address</div>
              <div className="virtual-why-card-description">Professional Dubai address on Sheikh Zayed Road for credibility</div>
            </div>
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Mail Handling</div>
              <div className="virtual-why-card-description">Includes mail receiving, forwarding, and management services</div>
            </div>
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Phone Answering Service</div>
              <div className="virtual-why-card-description">Professional call handling with dedicated phone lines</div>
            </div>
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Meeting Room Access</div>
              <div className="virtual-why-card-description">8 hours monthly access to fully equipped meeting rooms</div>
            </div>
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Enhanced Privacy</div>
              <div className="virtual-why-card-description">Protect personal information while running your business address</div>
            </div>
            <div className="virtual-why-card">
              <div className="virtual-why-card-title">Global Accessibility</div>
              <div className="virtual-why-card-description">Access worldwide talent pool and international markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Virtual Office Services Section */}
      <section className="virtual-services-section">
        <div className="virtual-services-container">
          {/* Left: Services List */}
          <ul className="virtual-services-list">
            <li className="virtual-services-item">✔️ Professional Address</li>
            <li className="virtual-services-item">✔️ Mail Handling</li>
            <li className="virtual-services-item">✔️ Shared Desk 8 Hours/Month</li>
            <li className="virtual-services-item">✔️ Dedicated Phone Line</li>
            <li className="virtual-services-item">✔️ Copy Printing Service</li>
            <li className="virtual-services-item">✔️ Meeting Room 8 Hours/Month</li>
            <li className="virtual-services-item">✔️ Receptionist Services</li>
          </ul>
          {/* Right: Image Card */}
          <div className="virtual-services-image-wrapper">
            <div className="virtual-services-image-container">
              <img 
                src="/images/virtual-2.avif" 
                alt="Virtual Office Services" 
                className="virtual-services-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10 Key Advantages Section */}
      <section className="virtual-advantages-section">
        <div className="virtual-advantages-container">
          <h2 className="virtual-advantages-title">
            10 Key Advantages of Virtual Offices
          </h2>
          <p className="virtual-advantages-subtitle">
            Discover how virtual offices can transform your business operations
          </p>
          <div className="virtual-advantages-grid">
            {['No Daily Commute','Enhanced Productivity','More Flexibility','Access to Worldwide Talent Pool','Less Maintenance','Increased Privacy','Cost-Effective','Expandability','Employee Satisfaction','Prestige'].map((adv, i) => (
              <div key={i} className="virtual-advantages-item">
                <div className="virtual-advantages-number">{i+1}</div>
                {adv}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Facilities & Features Section */}
      <section className="virtual-facilities-section">
        <div className="virtual-facilities-container">
          <h2 className="virtual-facilities-title">
            Premium Facilities & Features
          </h2>
          <div className="virtual-facilities-grid">
            <div className="virtual-facilities-item">
              <div className="virtual-facilities-icon">🌊</div>
              <div className="virtual-facilities-label">Sea View / SZR View</div>
              <div className="virtual-facilities-description">Prestigious location with stunning views</div>
            </div>
            <div className="virtual-facilities-item">
              <div className="virtual-facilities-icon">📶</div>
              <div className="virtual-facilities-label">High Speed Wi-Fi</div>
              <div className="virtual-facilities-description">Fastest internet connectivity</div>
            </div>
            <div className="virtual-facilities-item">
              <div className="virtual-facilities-icon">🔒</div>
              <div className="virtual-facilities-label">24/7 Security</div>
              <div className="virtual-facilities-description">CCTV monitoring and secure access</div>
            </div>
            <div className="virtual-facilities-item">
              <div className="virtual-facilities-icon">🤖</div>
              <div className="virtual-facilities-label">Robotic Parking</div>
              <div className="virtual-facilities-description">Automated parking solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="virtual-faq-section">
        <div className="virtual-faq-container">
          <h2 className="virtual-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="virtual-faq-item">
            <div className="virtual-faq-question">What is a virtual office and how does it work?</div>
            <div className="virtual-faq-answer">A virtual office provides businesses with a professional address and essential services without physical space, offering flexibility and cost-effectiveness.</div>
          </div>
          <div className="virtual-faq-item">
            <div className="virtual-faq-question">How much does a virtual office cost?</div>
            <div className="virtual-faq-answer">Virtual office costs vary based on services included. Contact us for customized pricing that fits your business needs.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="virtual-cta-section">
        <div className="virtual-cta-container">
          <h2 className="virtual-cta-title">
            Ready to Get Started?
          </h2>
          <p className="virtual-cta-description">
            Book your virtual office in Dubai today and establish your business presence
          </p>
          <div className="virtual-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="virtual-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#contact" className="virtual-cta-btn">Get Free Quote</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer Section */}
      <footer className="virtual-footer">
        <div className="virtual-footer-content">
          {/* Logo & Description */}
          <div className="virtual-footer-logo-section">
            <div className="virtual-footer-logo-container">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" className="virtual-footer-logo" />
            </div>
            <div className="virtual-footer-description">
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="virtual-footer-section">
            <div className="virtual-footer-section-title">Services</div>
            <div className="virtual-footer-section-item">Company Formation</div>
            <div className="virtual-footer-section-item">Business License</div>
            <div className="virtual-footer-section-item">Bank Account Opening</div>
            <div className="virtual-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="virtual-footer-section">
            <div className="virtual-footer-section-title">Resources</div>
            <div className="virtual-footer-section-item">Blog</div>
            <div className="virtual-footer-section-item">FAQ</div>
            <div className="virtual-footer-section-item">Contact</div>
            <div className="virtual-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="virtual-footer-contact">
            <div className="virtual-footer-section-title">Contact Info</div>
            <div className="virtual-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="virtual-footer-section-item">+971 50 419 3507</div>
            <div className="virtual-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="virtual-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="virtual-footer-links">
            <span className="virtual-footer-link">Privacy Policy</span>
            <span className="virtual-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 