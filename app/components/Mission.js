export default function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission__media">
            <video
              src="/video/ourmission.mp4"
              className="mission-media-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="mission__text">
            <h2 className="mission-heading">
              Our Mission<br />
              <span className="accent">&amp;</span> <span className="mission-vision">Vision</span>
            </h2>
            <p><strong>Our Mission</strong><br />Enable entrepreneurs and enterprises to set up and scale in Dubai with clear guidance, reliable execution, and compliant business infrastructure.</p>
            <p><strong>Our Vision</strong><br />Be the most trusted business setup ecosystem in the UAE—combining premium workspaces, streamlined licensing, and ongoing PRO services to empower long-term growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 