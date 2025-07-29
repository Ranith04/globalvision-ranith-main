import React from 'react';
import '../../../styles/abu-dhabi-mainland-responsive.css';
import ContactLeadSection from '../../components/ContactLeadSection';
import FAQList from '../../components/FAQList';
import Navbar from '../../components/Navbar';

export default function AbuDhabiMainlandPage() {
  return (
    <>
      <Navbar />
      <section className="abu-dhabi-hero-section">
       {/* Background Image under gradient */}
       <img
          src="/images/backgroundimg.png"
          alt="Background"
          className="abu-dhabi-hero-bg-image"
        />
        {/* Overlay (optional cityscape image) */}
        <div className="abu-dhabi-hero-overlay" />
        <div className="abu-dhabi-hero-content-wrapper">
           {/* Left-aligned: Heading and Description */}
           <div className="abu-dhabi-hero-content">
            <h1 className="abu-dhabi-hero-title">
            Abu Dhabi Mainland<br />Company Formation
            </h1>
            <p className="abu-dhabi-hero-description">
            Abu Dhabi Mainland, regulated by the Abu Dhabi Department of Economic Development (ADDED), is a premier business hub offering companies unrestricted access to local and international markets. With its robust infrastructure, investor-friendly regulations, and flexible licensing options, it caters to startups, SMEs, and global enterprises alike. The region provides a stable economic environment, competitive operational costs, and access to a skilled workforce, making it ideal for businesses across sectors such as technology, finance, healthcare, and logistics. Its strategic location and supportive ecosystem position Abu Dhabi Mainland as a top destination for sustainable business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Invest Section */}
      <section className="abu-dhabi-why-invest-section">
        <div className="abu-dhabi-why-invest-container">
          <h2 className="abu-dhabi-why-invest-title">
            Why Invest in Abu Dhabi Mainland?
          </h2>
          <div className="abu-dhabi-why-invest-row">
            {/* Card 1 */}
            <div className="abu-dhabi-why-invest-card">
              <div className="abu-dhabi-why-invest-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-.91z" fill="#1ec6b6"/></svg>
              </div>
              <h3 className="abu-dhabi-why-invest-card-title">Strategic Location</h3>
              <p className="abu-dhabi-why-invest-card-description">
                Abu Dhabi offers strategic location, stable environment, world-class infrastructure, skilled workforce, and global market access.
              </p>
            </div>
            {/* Card 2 */}
            <div className="abu-dhabi-why-invest-card">
              <div className="abu-dhabi-why-invest-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="abu-dhabi-why-invest-card-title">Strong Economy</h3>
              <p className="abu-dhabi-why-invest-card-description">
                Absolutely the best place to set up a company with a strong economy and supportive government policies.
              </p>
            </div>
            {/* Card 3 */}
            <div className="abu-dhabi-why-invest-card">
              <div className="abu-dhabi-why-invest-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><text x="6" y="22" fontSize="20" fontWeight="bold" fill="#1ec6b6">$</text></svg>
              </div>
              <h3 className="abu-dhabi-why-invest-card-title">Business Friendly</h3>
              <p className="abu-dhabi-why-invest-card-description">
                100% foreign ownership allowed with competitive setup costs and streamlined processes across mainland and free zones.
              </p>
            </div>
            {/* Card 4 */}
            <div className="abu-dhabi-why-invest-card">
              <div className="abu-dhabi-why-invest-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="abu-dhabi-why-invest-card-title">Tax Benefits</h3>
              <p className="abu-dhabi-why-invest-card-description">
                Attractive tax structure with corporate tax exemptions in free zones and competitive rates in mainland operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Types of Business Entities Section */}
      <section className="abu-dhabi-entities-section">
        <div className="abu-dhabi-entities-container">
          <h2 className="abu-dhabi-entities-title">
            What are the Types of Business Entities in Abu Dhabi?
          </h2>
          <p className="abu-dhabi-entities-subtitle">
            Choose the right business structure that aligns with your goals and operational requirements in Abu Dhabi.
          </p>
          <div className="abu-dhabi-entities-grid">
            {/* Mainland Region */}
            <div className="abu-dhabi-entities-card">
              <h3 className="abu-dhabi-entities-card-title">Mainland Region</h3>
              <p className="abu-dhabi-entities-card-description">Covers expenses related to setting up a business in the heart of Abu Dhabi mainland. Includes trade license fees, office space costs, and government charges.</p>
              <ul className="abu-dhabi-entities-card-list">
                <li>Tailored trade license</li>
                <li>Office setup assistance</li>
                <li>Government fee handling</li>
                <li>Full UAE market access</li>
              </ul>
            </div>
            {/* Free Zones */}
            <div className="abu-dhabi-entities-card">
              <h3 className="abu-dhabi-entities-card-title">Free Zones</h3>
              <p className="abu-dhabi-entities-card-description">Details on setting up in free zones like ADGM (Abu Dhabi Global Market) and Masdar City. Information includes license fees, visa costs, and 100% ownership incentive.</p>
              <ul className="abu-dhabi-entities-card-list">
                <li>100% foreign ownership</li>
                <li>Tax exemptions</li>
                <li>ADGM & Masdar City options</li>
                <li>Limited trading outside zone</li>
              </ul>
            </div>
            {/* Offshore Setup */}
            <div className="abu-dhabi-entities-card">
              <h3 className="abu-dhabi-entities-card-title">Offshore Setup</h3>
              <p className="abu-dhabi-entities-card-description">Guidance on registering offshore companies in Abu Dhabi. Advises on registration fees, legal requirements, and benefits for international operations.</p>
              <ul className="abu-dhabi-entities-card-list">
                <li>International operations</li>
                <li>Competitive rates</li>
                <li>Legal compliance</li>
                <li>Global business structure</li>
              </ul>
            </div>
            {/* Mainland vs Free Zone */}
            <div className="abu-dhabi-entities-card">
              <h3 className="abu-dhabi-entities-card-title">Mainland vs Free Zone</h3>
              <p className="abu-dhabi-entities-card-description">Mainland offers full UAE market access; free zones provide 100% ownership but have trading limitations outside the zone.</p>
              <ul className="abu-dhabi-entities-card-list">
                <li>Market access comparison</li>
                <li>Ownership structures</li>
                <li>Trading restrictions</li>
                <li>Tax implications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process of Business Setup Section */}
      <section className="abu-dhabi-process-section">
        <div className="abu-dhabi-process-container">
          <h2 className="abu-dhabi-process-title">
            Process of Business Setup in Abu Dhabi Mainland
          </h2>
          <p className="abu-dhabi-process-subtitle">
            Our streamlined 6-step process includes selecting activity, legal structure, trade name, initial approvals, MOA drafting, document notarization, and licensing.
          </p>
          <div className="abu-dhabi-process-step-row">
            {/* Step 1 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">01</span>
                <span className="abu-dhabi-process-step-title">Business Activity</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Define your core operations and select appropriate business activities for Abu Dhabi mainland registration.
              </div>
            </div>
            {/* Step 2 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">02</span>
                <span className="abu-dhabi-process-step-title">Legal Structure</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Choose the right legal structure - LLC, sole establishment, or partnership based on your business needs.
              </div>
            </div>
            {/* Step 3 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">03</span>
                <span className="abu-dhabi-process-step-title">Trade Name</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Reserve a compliant and unique company name with Abu Dhabi Department of Economic Development (ADDED).
              </div>
            </div>
          </div>
          <div className="abu-dhabi-process-step-row">
            {/* Step 4 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">04</span>
                <span className="abu-dhabi-process-step-title">Initial Approvals</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Obtain preliminary clearance and documentation requirements from relevant authorities.
              </div>
            </div>
            {/* Step 5 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">05</span>
                <span className="abu-dhabi-process-step-title">MOA & Documentation</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Prepare and notarize Memorandum of Association, Articles of Association, and submit required documents.
              </div>
            </div>
            {/* Step 6 */}
            <div className="abu-dhabi-process-step-card">
              <div className="abu-dhabi-process-step-header">
                <span className="abu-dhabi-process-step-number">06</span>
                <span className="abu-dhabi-process-step-title">License Issuance</span>
              </div>
              <div className="abu-dhabi-process-step-description">
                Pay government fees, complete registration process, and receive your official Abu Dhabi trade license.
              </div>
            </div>
          </div>
        </div>
      </section>
       
      {/* Documents Required Section */}
      <section className="abu-dhabi-documents-section">
        <div className="abu-dhabi-documents-container">
          <h2 className="abu-dhabi-documents-title">
            Documents Required for Company Registration in Abu Dhabi
          </h2>
          <p className="abu-dhabi-documents-subtitle">
            Ensure you have all necessary documentation ready for a smooth and efficient registration process in Abu Dhabi.
          </p>
          <div className="abu-dhabi-documents-grid">
            {/* Personal Documents */}
            <div className="abu-dhabi-documents-card">
              <div className="abu-dhabi-documents-card-header">
                <span className="abu-dhabi-documents-card-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span className="abu-dhabi-documents-card-title">Personal Documents</span>
              </div>
              <ul className="abu-dhabi-documents-card-list">
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Valid passport copies of all shareholders</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Passport-size photographs</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>No Objection Certificate (if applicable)</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Educational certificates for professional licenses</li>
              </ul>
            </div>
            {/* Business Documents */}
            <div className="abu-dhabi-documents-card">
              <div className="abu-dhabi-documents-card-header">
                <span className="abu-dhabi-documents-card-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span className="abu-dhabi-documents-card-title">Business Documents</span>
              </div>
              <ul className="abu-dhabi-documents-card-list">
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Memorandum of Association</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Articles of Association</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Office lease agreement</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Business plan and activity description</li>
              </ul>
            </div>
            {/* Corporate Documents */}
            <div className="abu-dhabi-documents-card">
              <div className="abu-dhabi-documents-card-header">
                <span className="abu-dhabi-documents-card-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span className="abu-dhabi-documents-card-title">Corporate Documents</span>
              </div>
              <ul className="abu-dhabi-documents-card-list">
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Board resolution for company formation</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Power of attorney</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Shareholder agreements</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Company incorporation certificate</li>
              </ul>
            </div>
            {/* Additional Requirements */}
            <div className="abu-dhabi-documents-card">
              <div className="abu-dhabi-documents-card-header">
                <span className="abu-dhabi-documents-card-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span className="abu-dhabi-documents-card-title">Additional Requirements</span>
              </div>
              <ul className="abu-dhabi-documents-card-list">
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Trade name reservation certificate</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Initial approval from ADDED</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Special approvals for regulated activities</li>
                <li><span className="abu-dhabi-documents-check">&#10003;</span>Bank reference letters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="abu-dhabi-faq-section">
        <div className="abu-dhabi-faq-container">
          <h2 className="abu-dhabi-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="abu-dhabi-faq-subtitle">
            Get answers to common questions about business setup in Abu Dhabi Mainland and Free Zones.
          </p>
          <FAQList
            faqs={[
              {
                question: 'Is Abu Dhabi a good place to set up a company?',
                answer: 'Yes, Abu Dhabi is a stable and growing market with strong government support for businesses.'
              },
              {
                question: 'What is the cost of setup?',
                answer: 'Setting up a company in Abu Dhabi Mainland typically starts from AED 15,000 to AED 25,000.'
              },
              {
                question: 'How do I start a small business in Abu Dhabi?',
                answer: 'Choose your activity, reserve a trade name, get initial approval, lease office space, and apply for a trade license.'
              },
              {
                question: "What's the difference between Mainland vs Free Zone?",
                answer: 'Mainland companies can operate across the UAE, while Free Zone companies are limited to their zone or international trade.'
              },
              {
                question: 'What are the steps for forming a mainland company?',
                answer: 'Submit your business activity, get approvals, draft MOA, lease office, and apply for the license.'
              },
              {
                question: 'Are there tax benefits for free zones?',
                answer: 'Yes, Free Zones in the UAE offer 0% corporate tax and full repatriation of profits.'
              },
              {
                question: 'Can Global Vision help with licensing?',
                answer: 'Yes, Global Vision handles all legal and documentation work for smooth company registration in Abu Dhabi.'
              }
            ]}
          />
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactLeadSection />
      
      {/* Footer Section */}
      <footer className="abu-dhabi-footer">
        <div className="abu-dhabi-footer-content">
          {/* Logo & Description */}
          <div className="abu-dhabi-footer-logo-section">
            <div className="abu-dhabi-footer-logo">
              <img src="/images/footerlogo.png" alt="Global Vision Logo" />
            </div>
            <div className="abu-dhabi-footer-description">
              Your trusted partner for Abu Dhabi mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div className="abu-dhabi-footer-section">
            <div className="abu-dhabi-footer-section-title">Services</div>
            <div className="abu-dhabi-footer-section-item">Company Formation</div>
            <div className="abu-dhabi-footer-section-item">Business License</div>
            <div className="abu-dhabi-footer-section-item">Bank Account Opening</div>
            <div className="abu-dhabi-footer-section-item">Visa Services</div>
          </div>
          {/* Resources */}
          <div className="abu-dhabi-footer-section">
            <div className="abu-dhabi-footer-section-title">Resources</div>
            <div className="abu-dhabi-footer-section-item">Blog</div>
            <div className="abu-dhabi-footer-section-item">FAQ</div>
            <div className="abu-dhabi-footer-section-item">Contact</div>
            <div className="abu-dhabi-footer-section-item">Support</div>
          </div>
          {/* Contact Info */}
          <div className="abu-dhabi-footer-contact">
            <div className="abu-dhabi-footer-section-title">Contact Info</div>
            <div className="abu-dhabi-footer-section-item">Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div className="abu-dhabi-footer-section-item">+971 50 419 3507</div>
            <div className="abu-dhabi-footer-section-item">info@globalvisionuae.com</div>
          </div>
        </div>
        <div className="abu-dhabi-footer-bottom">
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div className="abu-dhabi-footer-links">
            <span className="abu-dhabi-footer-link">Privacy Policy</span>
            <span className="abu-dhabi-footer-link">Terms of Service</span>
          </div>
        </div>
      </footer>
      
    </>
  );
} 