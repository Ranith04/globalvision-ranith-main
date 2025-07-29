
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <span className="about-label">Who we are</span>
            <h2 className="about-title">Empowering Your Business Journey in Dubai</h2>
            <p className="about-desc">
            At Global Vision, we provide ready-to-move-in offices and complete business setup solutions in the heart of Dubai. Whether you're a startup, freelancer, or a global firm, our premium locations and end-to-end services ensure you launch with impact.
            </p>
            <ul className="about-list">
              <li><span className="about-dot" />Flexible office solutions: virtual, private, shared
              </li>
              <li><span className="about-dot" />Dedicated team for legal, admin, and visa services
              </li>
              <li><span className="about-dot" />1000+ satisfied clients across UAE</li>
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