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
            <p>At Global Vision, our mission is to serve as a catalyst for sustainable business growth by delivering integrated workspace solutions and strategic advisory services tailored to the evolving needs of modern enterprises. We are committed to enabling entrepreneurs and organizations to navigate Dubai's dynamic business landscape with confidence, efficiency, and regulatory clarity.</p>
            <p>Our vision is to establish a benchmark for excellence in business infrastructure by creating a future-ready ecosystem that fosters innovation, accelerates opportunity, and supports long-term enterprise value.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 