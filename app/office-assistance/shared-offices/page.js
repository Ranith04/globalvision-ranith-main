import React from 'react';
import '../../../styles/shared-offices-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function SharedOfficesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="shared-hero-section">
        {/* Background Image */}
        <div className="shared-hero-bg-image" />
        <div className="shared-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="shared-hero-content">
            <h1 className="shared-hero-title">
              Shared Office Space<br />
            </h1>
            <p className="shared-hero-description">
              Professional shared office spaces in Dubai's prime location, offering dedicated services, high-speed Wi-Fi, a prestigious business address, and modern facilities for seamless business operations. Perfect for startups, freelancers, and growing businesses seeking flexibility and professionalism. Work in a collaborative environment designed to boost productivity and brand credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Office Space Section */}
      <section className="shared-intro-section">
        <div className="shared-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="shared-intro-content">
            <h2 className="shared-intro-title">
              Shared Office Space <span className="shared-intro-highlight">Dubai Sheikh Zayed Road</span>
            </h2>
            <div className="shared-intro-buttons">
              <a href="#contact" className="shared-intro-btn-primary">Book Office Space</a>
              <a href="#contact" className="shared-intro-btn-secondary">Get Free Quote</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div className="shared-intro-image-wrapper">
            <img src="/images/shared-1.jpg" alt="Shared Office" className="shared-intro-image" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="shared-why-section">
        <div className="shared-why-container">
          <h3 className="shared-why-title">Why Choose Shared Office Space Dubai?</h3>
          <p className="shared-why-subtitle">Discover the advantages of collaborative workspace solutions:</p>
          <div className="shared-why-grid">
            {[
              { title: 'Cost-effective', desc: 'Share expenses for rent, utilities, and maintenance with other businesses.' },
              { title: 'Networking Opportunities', desc: 'Connect with diverse professionals and potential business partners.' },
              { title: 'Ready Infrastructure', desc: 'Fully furnished with essential amenities and modern business tools.' },
              { title: 'Professional Environment', desc: 'Conducive workspace for meetings, presentations, and daily operations.' },
              { title: 'Flexibility', desc: 'Short-term or long-term agreements based on your business needs.' },
              { title: 'Prime Location', desc: "Strategic location on Sheikh Zayed Road opposite World Trade Center." },
            ].map((item, i) => (
              <div key={i} className="shared-why-card">
                <h4 className="shared-why-card-title">{item.title}</h4>
                <p className="shared-why-card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features & Amenities Section */}
      <section className="shared-features-section">
        <div className="shared-features-container">
          <h3 className="shared-features-title">Premium Features & Amenities</h3>
          <p className="shared-features-subtitle">Everything you need for a productive workspace experience</p>
          <div className="shared-features-grid">
            {[
              'Sea View / SZR View', 'Fully Furnished', 'High Speed Wi-Fi', 'Dedicated Service Staff',
              'Robotic Car Parking', 'Modern Interiors', 'Customize Your Space', 'F&B Services',
              'Proximity to Metro Station', 'Guest Lounge & Concierge', 'Printing and Storage', 'No DEWA or Utilities Bill',
              'Ejari Approved', 'Flexible Payment Options', 'Secured Keyless Entry', 'Meeting / Conference Room',
            ].map((item, i) => (
              <div key={i} className="shared-features-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Office Features Section */}
      <section className="shared-comprehensive-section">
        <div className="shared-comprehensive-container">
          <h3 className="shared-comprehensive-title">Comprehensive Office Features</h3>
          <div className="shared-comprehensive-grid">
            {[
              { icon: '🔄', label: 'Flexible Workspace', desc: 'Choose from open work areas, dedicated desks, or private offices.' },
              { icon: '🏢', label: 'Meeting Rooms', desc: 'Well-equipped conference rooms with AV equipment and video conferencing.' },
              { icon: '📶', label: 'High-Speed Internet', desc: 'Reliable and fast Wi-Fi/Ethernet for seamless workflow.' },
              { icon: '🛋️', label: 'Common Areas', desc: 'Lounges, kitchens, and breakout areas for networking and relaxation.' },
            ].map((item, i) => (
              <div key={i} className="shared-comprehensive-item">
                <div className="shared-comprehensive-icon">{item.icon}</div>
                <div className="shared-comprehensive-label">{item.label}</div>
                <div className="shared-comprehensive-description">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spider Business Center Section */}
      <section className="shared-spider-section">
        <div className="shared-spider-container">
          <div className="shared-spider-content">
            <h3 className="shared-spider-title">Why Spider Business Center?</h3>
            <div className="shared-spider-feature">
              <span className="shared-spider-feature-title">13+ Years Experience</span><br />
              Industry expertise in delivering top-notch shared office solutions.
            </div>
            <div className="shared-spider-feature">
              <span className="shared-spider-feature-title">Highly Secure Workspaces</span><br />
              Advanced security with gated access, 24/7 security, and CCTV monitoring.
            </div>
            <div className="shared-spider-feature">
              <span className="shared-spider-feature-title">Prime Location</span><br />
              Strategic location on Sheikh Zayed Road opposite World Trade Center.
            </div>
          </div>
          <div className="shared-spider-image-wrapper">
            <img src="/images/shared-2.jpg" alt="Shared Office" className="shared-spider-image" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="shared-faq-section">
        <div className="shared-faq-container">
          <h3 className="shared-faq-title">Frequently Asked Questions</h3>
          <div className="shared-faq-grid">
            {[
              {
                q: 'What is shared office space in Dubai?',
                a: 'Shared office spaces give you access to flexible workspace solutions where businesses rent fully equipped office space on temporary or short-term basis with various amenities.'
              },
              {
                q: 'Can 2 companies share an office in Dubai?',
                a: 'Yes, multiple companies can share an office space in Dubai, making it cost-effective and providing networking opportunities.'
              },
              {
                q: 'What amenities are included in shared office spaces?',
                a: 'Shared offices include meeting rooms, high-speed internet, printing facilities, F&B services, reception services, security, and common areas.'
              },
            ].map((item, i) => (
              <div key={i} className="shared-faq-item">
                <div className="shared-faq-question">{item.q}</div>
                <div className="shared-faq-answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shared-cta-section">
        <div className="shared-cta-container">
          <h3 className="shared-cta-title">Get Your Shared Office Today</h3>
          <p className="shared-cta-description">Professional shared office solutions in Dubai's prime business district</p>
          <div className="shared-cta-contact">
            <span className="shared-cta-contact-item">+971 50 419 3507</span>
            <span className="shared-cta-contact-item">info@globalvisionuae.com</span>
          </div>
          <a href="#contact" className="shared-cta-btn">Request Free Quote</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer */}
      <footer className="shared-footer">
        <div className="shared-footer-content">
          <div className="shared-footer-section">
            <img src="/images/footerlogo.png" alt="Global Vision" className="shared-footer-logo" />
            <div className="shared-footer-section-item">Global Vision for Businessmen Services LLC</div>
            <div className="shared-footer-section-item">All rights reserved.</div>
          </div>
          <div className="shared-footer-section">
            <div className="shared-footer-section-title">Services</div>
            <div className="shared-footer-section-item">Company Formation</div>
            <div className="shared-footer-section-item">Office Solutions</div>
            <div className="shared-footer-section-item">Bank Account Opening</div>
            <div className="shared-footer-section-item">Visa Services</div>
          </div>
          <div className="shared-footer-section">
            <div className="shared-footer-section-title">Contact Us</div>
            <div className="shared-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="shared-footer-section-item">+971 50 419 3507</div>
            <div className="shared-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="shared-footer-bottom">
          Privacy Policy | Terms of Service
        </div>
      </footer>
    </>
  );
} 