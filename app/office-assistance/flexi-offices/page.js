import React from 'react';
import '../../../styles/flexi-offices-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function FlexiOfficesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="flexi-hero-section">
        {/* Background Image */}
        <div className="flexi-hero-bg-image" />
        <div className="flexi-hero-content-wrapper">
          {/* Left-aligned: Heading and Description */}
          <div className="flexi-hero-content">
            <h1 className="flexi-hero-title">
              Flexi Desk<br />
            </h1>
            <p className="flexi-hero-description">
              Flexible workspace solutions for UAE business registration, offering smart office setups in Dubai with desk, chair, high-speed internet, and essential business services like mail handling, receptionist support, and meeting room access. Perfect for startups, freelancers, and SMEs looking for a cost-effective and professional launchpad in the UAE.
            </p>
          </div>
        </div>
      </section>
      
      {/* Flexi Desk Section */}
      <section className="flexi-intro-section">
        <div className="flexi-intro-container">
          {/* Left: Heading, features, buttons */}
          <div className="flexi-intro-content">
            <h2 className="flexi-intro-title">
              Flexi Desk<br /><span className="flexi-intro-highlight">Dubai Smart Office</span>
            </h2>
            <div className="flexi-intro-buttons">
              <a href="#contact" className="flexi-intro-btn-primary">Book Flexi Desk</a>
              <a href="#contact" className="flexi-intro-btn-secondary">Learn More</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div className="flexi-intro-image-wrapper">
            <div className="flexi-intro-image-container">
              <div className="flexi-intro-image-accent" />
              <img src="/images/flexi-1.jpg" alt="Flexi Desk" className="flexi-intro-image" />
            </div>
          </div>
        </div>
      </section>
      
      {/* What is a Flexi Desk Section */}
      <section className="flexi-what-section">
        <div className="flexi-what-container">
          {/* Left: Text */}
          <div className="flexi-what-content">
            <h2 className="flexi-what-title">
              What is a Flexi Desk in Dubai?
            </h2>
            <p className="flexi-what-description">
              A Flexi desk, commonly known as a shared office in the UAE, is a top choice for professionals or companies upon registration. It includes a desk and chair setup, providing companies with a registered business address, access to facilities, and essential business services.<br /><br />
              Built for maximum efficiency, a Flexi Desk is the most affordable way to meet the UAE's "real desk" facility. This smart solution provides prime business benefits – it's an open, shared, and flexible workspace.<br /><br />
              Every UAE-registered business needs at least one of these desks to meet regulatory requirements and maintain a physical presence.
            </p>
          </div>
          {/* Right: Image Card */}
          <div className="flexi-what-image-wrapper">
            <div className="flexi-what-image-container">
              <img src="/images/flexi-2.jpg" alt="Flexi Desk Dubai" className="flexi-what-image" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits of Flexi Desk Section */}
      <section className="flexi-benefits-section">
        <div className="flexi-benefits-container">
          <h2 className="flexi-benefits-title">
            Benefits of Flexi Desk in Dubai
          </h2>
          <p className="flexi-benefits-subtitle">
            Discover why flexi desks are ideal for startups and businesses in the UAE
          </p>
          <div className="flexi-benefits-grid">
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Ready Workspace</div>
              <div className="flexi-benefits-card-description">Fully equipped desk, chair, PO box, phone number, and internet access</div>
            </div>
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Flexible Usage</div>
              <div className="flexi-benefits-card-description">Use as a personal workstation and secure it after work hours for privacy</div>
            </div>
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Additional Facilities</div>
              <div className="flexi-benefits-card-description">Access to video conferencing facilities and meeting rooms</div>
            </div>
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Cost-Effective</div>
              <div className="flexi-benefits-card-description">Highly affordable alternative to traditional office space rentals</div>
            </div>
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Time Saving</div>
              <div className="flexi-benefits-card-description">Eliminates compliance formalities and saves time for entrepreneurs</div>
            </div>
            <div className="flexi-benefits-card">
              <div className="flexi-benefits-card-title">Business Compliance</div>
              <div className="flexi-benefits-card-description">Meets UAE business registration requirement for physical presence</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Maximizing Your Flexi Desk Space Section */}
      <section className="flexi-maximizing-section">
        <div className="flexi-maximizing-container">
          <h2 className="flexi-maximizing-title">
            Maximizing Your Flexi Desk Space
          </h2>
          <p className="flexi-maximizing-subtitle">
            Your flexi desk can be a dynamic hub for work, networking, and growth
          </p>
          <div className="flexi-maximizing-grid">
            {['Smart Setup','Focused Work','Networking','Business Address','Flexibility'].map((item, i) => (
              <div key={i} className="flexi-maximizing-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Considerations Section */}
      <section className="flexi-considerations-section">
        <div className="flexi-considerations-container">
          <h2 className="flexi-considerations-title">
            Key Considerations for Flexible Office Spaces
          </h2>
          <div className="flexi-considerations-grid">
            {['Location','Cost-Effectiveness','Flexibility','Amenities','Workspace Design','Community & Networking','Privacy Options','Scalability','Tech Infrastructure','Support Services','Lease Terms','Security','Accessibility','Brand Image'].map((item, i) => (
              <div key={i} className="flexi-considerations-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Advantages of Flexible Workspace Section */}
      <section className="flexi-advantages-section">
        <div className="flexi-advantages-container">
          <h2 className="flexi-advantages-title">
            Advantages of Flexible Workspace
          </h2>
          <div className="flexi-advantages-grid">
            <div className="flexi-advantages-card">
              Increased Productivity
              <div className="flexi-advantages-card-description">Select workspace that aligns with specific task requirements</div>
            </div>
            <div className="flexi-advantages-card">
              Enhanced Adaptability
              <div className="flexi-advantages-card-description">Seamless adjustment to changing workspace needs</div>
            </div>
            <div className="flexi-advantages-card">
              Cost Efficiency
              <div className="flexi-advantages-card-description">Optimize resources based on evolving business requirements</div>
            </div>
            <div className="flexi-advantages-card">
              Employee Satisfaction
              <div className="flexi-advantages-card-description">Higher retention rates through adaptability and freedom</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Flexi Desk vs Virtual Office Section */}
      <section className="flexi-comparison-section">
        <div className="flexi-comparison-container">
          <h2 className="flexi-comparison-title">
            Flexi Desk vs Virtual Office
          </h2>
          <div className="flexi-comparison-grid">
            <div className="flexi-comparison-card">
              <div className="flexi-comparison-card-title">Flexi Desk</div>
              <ul className="flexi-comparison-card-list">
                <li>Physical workspace available</li>
                <li>Actual desk and chair setup</li>
                <li>Can work from the location</li>
                <li>Meeting rooms access</li>
              </ul>
            </div>
            <div className="flexi-comparison-card">
              <div className="flexi-comparison-card-title">Virtual Office</div>
              <ul className="flexi-comparison-card-list">
                <li>Registered address only</li>
                <li>No physical desk access</li>
                <li>Cannot operate onsite</li>
                <li>Limited virtual services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ready to Start Your Business? CTA Section */}
      <section className="flexi-cta-section">
        <div className="flexi-cta-container">
          <div className="flexi-cta-title">
            Ready to Start Your Business?
          </div>
          <div className="flexi-cta-description">
            Get your flexi desk in Dubai and meet UAE business registration requirements
          </div>
          <div className="flexi-cta-contact">
            +971 50 419 3507 &nbsp; | &nbsp;  info@globalvisionuae.com
          </div>
          <a href="#contact" className="flexi-cta-btn">Contact Expert Consultants</a>
        </div>
      </section>
      
      {/* Take the First Step Section */}
      <ContactLeadSection />
      
      {/* Footer */}
      <footer className="flexi-footer">
        <div className="flexi-footer-content">
          <div className="flexi-footer-logo-section">
            <img src="/images/logo.jpg" alt="Global Vision Logo" className="flexi-footer-logo" />
            <div className="flexi-footer-description">
              Your ideal partner for tailored business solutions and innovative office spaces in the UAE.
            </div>
          </div>
          <div className="flexi-footer-section">
            <div className="flexi-footer-section-title">Services</div>
            <div className="flexi-footer-section-item">Company Formation</div>
            <div className="flexi-footer-section-item">Business Consulting</div>
            <div className="flexi-footer-section-item">Office Assistance</div>
            <div className="flexi-footer-section-item">Visa Services</div>
          </div>
          <div className="flexi-footer-section">
            <div className="flexi-footer-section-title">Resources</div>
            <div className="flexi-footer-section-item">Blog</div>
            <div className="flexi-footer-section-item">FAQs</div>
            <div className="flexi-footer-section-item">Guides</div>
          </div>
          <div className="flexi-footer-contact">
            <div className="flexi-footer-section-title">Contact Info</div>
            <div className="flexi-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="flexi-footer-section-item">+971 50 419 3507</div>
            <div className="flexi-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="flexi-footer-bottom">
          © 2024 Global Vision Services. All rights reserved. &nbsp; &nbsp; <a href="#contact" className="flexi-footer-links">Privacy Policy</a> &nbsp; | &nbsp; <a href="#contact" className="flexi-footer-links">Terms of Service</a>
        </div>
      </footer>
    </>
  );
}