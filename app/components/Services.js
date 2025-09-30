import Image from 'next/image';

const services = [
  { img: '/images/Container.png', title: 'Start a Company in Dubai', link: '#contact' },
  { img: '/images/Container2.png', title: 'Already Have a Company? Expand or Relocate to Dubai', link: '#contact' },
  { img: '/images/Container3.png', title: 'Partner With Global Vision UAE', link: '#contact' },
  { img: '/images/Overlay.png', title: 'Business Loan & Banking Assistance', link: '#contact' }
];

export default function Services() {
  return (
    <section className="services-section services-section-teal">
      <div className="services-container">
        <h2 className="services-heading">Business Setup & Company Formation Services in Dubai</h2>
        <p className="services-subheading">Comprehensive company formation across freezone and mainland, with licensing, visa, bank account assistance, and ongoing PRO services.</p>
        <div className="services-cards-row">
          {services.map((service, idx) => (
            <div className="services-card-modern" key={idx}>
              <div className="services-card-img-wrapper">
                <Image src={service.img} alt={service.title} width={320} height={180} className="services-card-img" style={{ margin: '0 auto', display: 'block' }} />
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">{service.title}</h3>
                <a href={service.link} className="services-card-link">Learn More <span className="services-card-arrow">→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 