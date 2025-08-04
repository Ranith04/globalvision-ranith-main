import React from 'react';
import '../../../styles/coworking-spaces-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function CoworkingSpacesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="coworking-hero-section">
        {/* Background Image */}
        <div className="coworking-hero-bg-image" />
        <div className="coworking-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="coworking-hero-content">
            <h1 className="coworking-hero-title">
              Coworking Space<br />
            </h1>
            <p className="coworking-hero-description">
              Premium coworking spaces in Dubai's vibrant financial district, offering an inspiring environment that promotes collaboration, innovation, and professional growth. Located on the iconic Sheikh Zayed Road, our state-of-the-art facilities include high-speed internet, modern meeting rooms, private cabins, and shared workspaces — all designed to support freelancers, startups, and established teams alike. Surround yourself with like-minded professionals, build valuable connections, and elevate your business presence in one of Dubai's most prestigious business locations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Top-Tier Coworking Section */}
      <section className="coworking-intro-section">
        <div className="coworking-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="coworking-intro-content">
            <h2 className="coworking-intro-title">
              Top-Tier Coworking<br /><span className="coworking-intro-highlight">Space in Dubai</span>
            </h2>
            <div className="coworking-intro-buttons">
              <a href="#contact" className="coworking-intro-btn-primary">Book Coworking Space</a>
              <a href="#contact" className="coworking-intro-btn-secondary">Get 40% Discount</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div className="coworking-intro-image-wrapper">
            <div className="coworking-intro-image-container">
              <div className="coworking-intro-image-accent" />
              <img src="/images/coworking-1.jpg" alt="Coworking Space" className="coworking-intro-image" />
            </div>
          </div>
        </div>
      </section>
      
      {/* What is a Coworking Space Section */}
      <section className="coworking-what-section">
        <div className="coworking-what-container">
          {/* Left: Text */}
          <div className="coworking-what-content">
            <h2 className="coworking-what-title">
              What is a Coworking Space in Dubai?
            </h2>
            <p className="coworking-what-description">
              A coworking space is a shared work environment for freelancers, entrepreneurs, startups, and remote workers. It offers flexible workstations, meeting rooms, and essential amenities, fostering collaboration and productivity. Our coworking spaces in Dubai are designed to support your work while fueling community, service and success.
            </p>
          </div>
          {/* Right: Image Card */}
          <div className="coworking-what-image-wrapper">
            <div className="coworking-what-image-container">
              <img src="/images/coworking2.jpg" alt="Coworking Space Dubai" className="coworking-what-image" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Coworking Spaces Section */}
      <section className="coworking-why-section">
        <div className="coworking-why-container">
          <h2 className="coworking-why-title">
            Why Coworking Spaces are Perfect for Your Business
          </h2>
          <p className="coworking-why-subtitle">
            Discover the compelling advantages of collaborative workspace solutions
          </p>
          <div className="coworking-why-grid">
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Boost Productivity</div>
              <div className="coworking-why-card-description">Physical and focused environment with fewer distractions</div>
            </div>
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Cost-Effectiveness</div>
              <div className="coworking-why-card-description">Affordable rates, no long-term lease or utility costs</div>
            </div>
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Flexibility</div>
              <div className="coworking-why-card-description">Flexible plans, easy upgrades, and scalable options</div>
            </div>
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Networking Opportunities</div>
              <div className="coworking-why-card-description">Meet other professionals and grow your network</div>
            </div>
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Professional Environment</div>
              <div className="coworking-why-card-description">Work in a professional setting with all amenities</div>
            </div>
            <div className="coworking-why-card">
              <div className="coworking-why-card-title">Prime Location</div>
              <div className="coworking-why-card-description">Located in the heart of Dubai, easy access to metro</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Coworking Space Section */}
      <section className="coworking-best-section">
        <div className="coworking-best-container">
          {/* Heading and Description */}
          <div className="coworking-best-header">
            <h2 className="coworking-best-title">
              Best Coworking Space in Dubai
            </h2>
            <p className="coworking-best-description">
              Spider Business Center is strategically located in Conrad Hotel – Business Tower Dubai on Sheikh Zayed Road, directly opposite World Trade Centre, providing unmatched accessibility and prestige.
            </p>
          </div>
          
          <div className="coworking-best-content">
            {/* Left Side - Features */}
            <div className="coworking-best-features">
              {/* Premium Amenities */}
              <div className="coworking-best-feature">
                <div className="coworking-best-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 20.02L12 17.77L5.82 20.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
                <div className="coworking-best-feature-content">
                  <h3 className="coworking-best-feature-title">
                    Premium Amenities
                  </h3>
                  <p className="coworking-best-feature-description">
                    High-speed internet, automated robotic parking, luxurious SPA and gym, call answering facilities, and dedicated relationship liaison.
                  </p>
                </div>
              </div>
              
              {/* Flexible Solutions */}
              <div className="coworking-best-feature">
                <div className="coworking-best-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="white"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="white"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="white"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="white"/>
                  </svg>
                </div>
                <div className="coworking-best-feature-content">
                  <h3 className="coworking-best-feature-title">
                    Flexible Solutions
                  </h3>
                  <p className="coworking-best-feature-description">
                    From coworking spaces to entire floors, we accommodate your evolving business needs with easy upgrade options.
                  </p>
                </div>
              </div>
              
              {/* Strategic Location */}
              <div className="coworking-best-feature">
                <div className="coworking-best-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17L12 23L3 10C3 6.13401 7.13401 2 12 2C16.866 2 21 6.13401 21 10Z" fill="white"/>
                    <circle cx="12" cy="10" r="3" fill="#1ec6b6"/>
                  </svg>
                </div>
                <div className="coworking-best-feature-content">
                  <h3 className="coworking-best-feature-title">
                    Strategic Location
                  </h3>
                  <p className="coworking-best-feature-description">
                    Quick access to World Trade Centre and Dubai's business district with proximity to metro station.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="coworking-best-image-wrapper">
              <div className="coworking-best-image-container">
                <img 
                  src="/images/coworking-3.jpg" 
                  alt="Best Coworking Space in Dubai" 
                  className="coworking-best-image"
                /> 
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="coworking-benefits-section">
        <div className="coworking-benefits-container">
          <h2 className="coworking-benefits-title">
            Benefits of Coworking Space at Spider Business Center
          </h2>
          <div className="coworking-benefits-grid">
            {['24/7 Access','Fully Furnished','High Speed Wi-Fi','Security & CCTV','Printing and Storage','No Down Payment or Deposit','Easy Access to Metro Station','Guest Lounge & Concierge','Flexible Payment Options','Secured Keyless Entry System','Meeting Room','Social Experience Room'].map((benefit, i) => (
              <div key={i} className="coworking-benefits-item">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Coworking Space */}
      <section className="coworking-affordable-section">
        <div className="coworking-affordable-container">
          <h2 className="coworking-affordable-title">
            Affordable Coworking Space
          </h2>
          
          <div className="coworking-affordable-card">
            <div className="coworking-affordable-features">
              {[
                'Dedicated Desk',
                'High Speed Internet', 
                'Dedicated Telephone Line',
                'Secretarial Services',
                'Meeting Rooms & P.O Box',
                'DEWA & 24/7 Access'
              ].map((feature, i) => (
                <div key={i} className="coworking-affordable-feature">
                  <div className="coworking-affordable-check-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="coworking-affordable-btn">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="coworking-additional-section">
        <div className="coworking-additional-container">
          <div className="coworking-additional-grid">
            <div className="coworking-additional-item">
              <div className="coworking-additional-icon">🏢</div>
              <div className="coworking-additional-title">Access to Amenities</div>
              <div className="coworking-additional-description">All-day access to meeting rooms, lounges, and more</div>
            </div>
            <div className="coworking-additional-item">
              <div className="coworking-additional-icon">🛎️</div>
              <div className="coworking-additional-title">Support Services</div>
              <div className="coworking-additional-description">On-site support and reception for your needs</div>
            </div>
            <div className="coworking-additional-item">
              <div className="coworking-additional-icon">⚖️</div>
              <div className="coworking-additional-title">Work-Life Balance</div>
              <div className="coworking-additional-description">Flexible hours and a vibrant community</div>
            </div>
            <div className="coworking-additional-item">
              <div className="coworking-additional-icon">💡</div>
              <div className="coworking-additional-title">Embrace Innovation</div>
              <div className="coworking-additional-description">Connect with creative minds and new ideas</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="coworking-faq-section">
        <div className="coworking-faq-container">
          <h2 className="coworking-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="coworking-faq-item">
            <div className="coworking-faq-question">What are the popular coworking spaces in Dubai?</div>
            <div className="coworking-faq-answer">Dubai offers a wide range of coworking spaces, including Spider Business Center, WeWork, Regus, and more. Each space offers unique amenities and flexible plans.</div>
          </div>
          <div className="coworking-faq-item">
            <div className="coworking-faq-question">How much does a coworking space cost in Dubai?</div>
            <div className="coworking-faq-answer">Our coworking spaces start from AED 1200 monthly with all services included, such as internet, 24/7 security, and reception services.</div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="coworking-cta-section">
        <div className="coworking-cta-container">
          <h2 className="coworking-cta-title">
            Join Our Coworking Community
          </h2>
          <p className="coworking-cta-description">
            Experience the future of work with Dubai's premier coworking spaces
          </p>
          <div className="coworking-cta-contact">
            <span>+971 50 419 3507</span>
            <span className="coworking-cta-separator">•</span>
            <span>info@globalvisionuae.com</span>
          </div>
          <a href="#contact" className="coworking-cta-btn">Get Free Quote</a>
        </div>
      </section>
      
      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer Section */}
      <footer className="coworking-footer">
        <div className="coworking-footer-content">
          {/* Logo & Description */}
          <div className="coworking-footer-logo-section">
            <div className="coworking-footer-logo">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" />
            </div>
            <div className="coworking-footer-description">
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="coworking-footer-section">
            <div className="coworking-footer-section-title">Services</div>
            <div className="coworking-footer-section-item">Company Formation</div>
            <div className="coworking-footer-section-item">Business License</div>
            <div className="coworking-footer-section-item">Bank Account Opening</div>
            <div className="coworking-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="coworking-footer-section">
            <div className="coworking-footer-section-title">Resources</div>
            <div className="coworking-footer-section-item">Blog</div>
            <div className="coworking-footer-section-item">FAQ</div>
            <div className="coworking-footer-section-item">Contact</div>
            <div className="coworking-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="coworking-footer-contact">
            <div className="coworking-footer-section-title">Contact Info</div>
            <div className="coworking-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="coworking-footer-section-item">+971 50 419 3507</div>
            <div className="coworking-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="coworking-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="coworking-footer-links">
            <span className="coworking-footer-link">Privacy Policy</span>
            <span className="coworking-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
} 