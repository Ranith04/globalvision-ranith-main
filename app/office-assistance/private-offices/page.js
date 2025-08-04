import React from 'react';
import '../../../styles/private-offices-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function PrivateOfficesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="private-hero-section">
        {/* Background Image */}
        <div className="private-hero-bg-image" />
        <div className="private-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="private-hero-content">
            <h1 className="private-hero-title">
              Private Office <br />
            </h1>
            <p className="private-hero-description">
              Experience the ultimate private office on Dubai's prestigious Sheikh Zayed Road — where luxury, convenience, and productivity converge in a high-end business environment. Enjoy fully furnished offices, modern interiors, dedicated reception services, and panoramic city views, all in one of the most iconic business addresses in the UAE.
              Ideal for executives, entrepreneurs, and companies seeking a premium presence in the heart of Dubai's commercial district.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="private-offer-section">
        <div className="private-offer-container">
          <div className="private-offer-content">
            <h2 className="private-offer-title">Private Office <span className="private-offer-highlight">for Rent in Dubai</span></h2>
            <div className="private-offer-buttons">
              <a href="#contact" className="private-offer-btn-primary">Book Private Office</a>
              <a href="#contact" className="private-offer-btn-secondary">Schedule Tour</a>
            </div>
          </div>
          <div className="private-offer-image-wrapper">
            <img src="/images/privateoffice1.png" alt="Private Office" className="private-offer-image" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="private-benefits-section">
        <div className="private-benefits-container">
          <h3 className="private-benefits-title">Benefits of Private Office for Rent</h3>
          <div className="private-benefits-grid">
            {[
              { title: 'Enhanced Productivity', desc: 'Quiet and focused environment for improved concentration and efficiency.' },
              { title: 'Customizable Branding', desc: "Personalize spaces according to your company's brand and culture." },
              { title: 'Privacy & Security', desc: 'Private workspace for confidential meetings and secure data handling.' },
              { title: 'Professional Image', desc: 'Prestigious Dubai location enhances your business reputation.' },
              { title: 'Flexibility & Scalability', desc: 'Adapt space as your business grows with flexible terms.' },
              { title: 'Prime Location', desc: "Strategic location with access to Dubai's commercial hubs and metros." },
            ].map((item, i) => (
              <div key={i} className="private-benefits-card">
                <h4 className="private-benefits-card-title">{item.title}</h4>
                <p className="private-benefits-card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="private-offer-features-section">
        <div className="private-offer-features-container">
          <h3 className="private-offer-features-title">What We Offer with Private Office Rental</h3>
          <div className="private-offer-features-grid">
            {[
              'Sea View / SZR View', 'Fully Furnished', 'High-Speed WiFi', 'Dedicated Service Staff',
              'Robotic Car Parking', 'Modern Interiors', 'Customize Your Space', 'F&B Services',
              'Proximity to Metro Station', 'Guest Lounge & Concierge', 'Printing and Storage', 'No DEWA or Utilities Bill',
              'Ejari Approved', 'Flexible Payment Options', 'Secured Keyless Entry', 'Meeting Room/Conference Room',
            ].map((item, i) => (
              <div key={i} className="private-offer-features-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="private-experience-section">
        <div className="private-experience-container">
          <div className="private-experience-content">
            <h3 className="private-experience-title">13 Years of Industry Experience</h3>
            <p className="private-experience-description">
              At Global Vision Business Centers, we have consistently delivered high-standard office solutions for over a decade. Our expertise ensures you receive the best workspace, amenities, and support for your business to thrive in Dubai's dynamic market.
            </p>
          </div>
          <div className="private-experience-image-wrapper">
            <img src="/images/privateoffice2.png" alt="Experience" className="private-experience-image" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="private-why-section">
        <div className="private-why-container">
          <h3 className="private-why-title">Why Choose Private Office Space in Dubai?</h3>
          <div className="private-why-grid">
            {[
              { title: 'Professional Image', desc: 'Prestigious address that signifies commitment to high standards.' },
              { title: 'Flexibility', desc: 'Short-term or long-term solutions based on your needs.' },
              { title: 'Fully Furnished', desc: 'Turnkey solution allowing immediate business operations.' },
              { title: 'Support Services', desc: 'Administrative assistance, IT support, and meeting room access.' },
              { title: 'Networking Opportunities', desc: 'Reliable connectivity for seamless business hub.' },
              { title: 'Security & Privacy', desc: 'Dedicated for handling information and resources.' },
            ].map((item, i) => (
              <div key={i} className="private-why-card">
                <h4 className="private-why-card-title">{item.title}</h4>
                <p className="private-why-card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Services Section */}
      <section className="private-amenities-section">
        <div className="private-amenities-container">
          <h3 className="private-amenities-title">Luxury Amenities & Services</h3>
          <div className="private-amenities-grid">
            {[
              { icon: '🌊', label: 'Sea Views' },
              { icon: '📶', label: 'High-Speed Internet' },
              { icon: '🤖', label: 'Robotic Parking' },
              { icon: '🍽️', label: 'F&B Services' },
            ].map((item, i) => (
              <div key={i} className="private-amenities-item">
                <div className="private-amenities-icon">{item.icon}</div>
                <div className="private-amenities-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="private-faq-section">
        <div className="private-faq-container">
          <h3 className="private-faq-title">Frequently Asked Questions</h3>
          <div className="private-faq-list">
            {[
              {
                q: 'What is a Private Office?',
                a: 'A private office is a lockable workspace designed for exclusive use, providing complete privacy and amenities for an individual or dedicated team.'
              },
              {
                q: 'What are the advantages of a private office?',
                a: 'Enhanced privacy, productivity, customization options, privacy, professional image, flexibility, and support services.'
              },
              {
                q: 'Can I find truly unlimited office rent in Dubai?',
                a: 'Yes, our offerings include flexible terms, multiple locations, amenities, and support for all business sizes.'
              },
            ].map((item, i) => (
              <div key={i} className="private-faq-item">
                <div className="private-faq-question">{item.q}</div>
                <div className="private-faq-answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="private-cta-section">
        <div className="private-cta-container">
          <h3 className="private-cta-title">Secure Your Private Office Today</h3>
          <p className="private-cta-description">Elevate your business with premium private office solutions in Dubai!</p>
          <div className="private-cta-contact">
            <span>+971 50 419 3507</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#contact" className="private-cta-btn">Contact Us Today</a>
        </div>
      </section>

      {/* Take the First Step Section */}
      <ContactLeadSection />

      {/* Footer */}
      <footer className="private-footer">
        <div className="private-footer-content">
          <div className="private-footer-logo-section">
            <img src="/images/footerlogo.png" alt="Global Vision" className="private-footer-logo" />
            <div>Global Vision for Businessmen Services LLC</div>
            <div>All rights reserved.</div>
          </div>
          <div className="private-footer-section">
            <div className="private-footer-section-title">Services</div>
            <div>Company Formation</div>
            <div>Office Solutions</div>
            <div>Bank Account Opening</div>
            <div>Visa Services</div>
          </div>
          <div className="private-footer-contact">
            <div className="private-footer-section-title">Contact Us</div>
            <div>Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div>+971 50 419 3507</div>
            <div>info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="private-footer-bottom">
          Privacy Policy | Terms of Service
        </div>
      </footer>
    </>
  );
} 