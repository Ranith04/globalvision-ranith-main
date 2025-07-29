import Image from 'next/image';

const services = [
  { img: '/images/Container.png', title: 'Want to start a company?', link: '#' },
  { img: '/images/Container2.png', title: 'Already have a company?', link: '#' },
  { img: '/images/Container3.png', title: "Can\'t be our partner?", link: '#' },
  { img: '/images/Overlay.png', title: 'Need a business loan?', link: '#' }
];

export default function Services() {
  return (
    <section className="services-section services-section-teal">
      <div className="services-container">
        <h2 className="services-heading">Business Setup<br />Services</h2>
        <p className="services-subheading">Comprehensive solutions for establishing and growing your business in Dubai's thriving economy</p>
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