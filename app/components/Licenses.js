export default function Licenses() {
  const licenses = [
    {
      title: 'Dubai Business License Packages — From AED 4,888',
      price: '4,888',
      features: [
        'Business License',
        'Unlimited Shareholders',
        'Memorandum of Association (MoA)',
        'Bank Account Assistance',
        '5–10 Mix-and-Match Activities',
        'Commercial Registry and Lease Agreement',
      ],
    },
    {
      title: 'Freezone Company Setup in Dubai — From AED 10,800',
      price: '10,800',
      features: [
        'Business License',
        '10 Mix-and-Match Activities',
        'Establishment Card',
        'Residence Visa',
        'Emirates ID', 
        'Bank Account Assistance',
      ],
    },
    {
      title: 'Mainland Business Setup in Dubai — From AED 14,999',
      price: '14,999',
      features: [
        'Professional License',
        'Establishment Card',
        '100% Ownership',
        'Local Sponsor',
        'Residence Visa',
        'Emirates ID',
        'Bank Account Assistance',
      ],
    },
  ];
  return (
    <section className="licenses-section">
      <div className="licenses-container">
        {licenses.map((lic, idx) => (
          <div className="license-card" key={idx}>
            <h3 className="license-title">{lic.title}</h3>
            <div className="license-price-badge">
              <span className="license-currency">AED</span>
              <span className="license-price">{lic.price}</span>
            </div>
            <ul className="license-features">
              {lic.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="license-btn">View all</button>
          </div>
        ))}
      </div>
    </section>
  );
} 