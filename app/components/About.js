
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <span className="about-label">Who we are</span>
            <h2 className="about-title">Business Setup & Visa Services—Empowering Your Journey in Dubai</h2>
            <p className="about-desc">
            We provide ready-to-move offices and end-to-end business setup in Dubai. From company formation (freezone or mainland) to bank account assistance, visa services, and PRO support, our team helps you launch fast and stay compliant.
            </p>
            <ul className="about-list">
              <li><span className="about-dot" />Flexible office solutions: virtual, private, shared
              </li>
              <li><span className="about-dot" />Dedicated legal, admin, visa & PRO support
              </li>
              <li><span className="about-dot" />1000+ clients supported across the UAE</li>
            </ul>
          </div>
          <div className="about-right">
            <div className="about-media-wrapper">
              <video 
                src="/video/2.mp4" 
                className="about-media-video" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="about-badge">
                <span className="about-badge-title">Transforming</span><br />
                <span className="about-badge-sub">Ideas into Enterprises</span><br />
                <span className="about-badge-year">Since 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 