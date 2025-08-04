export default function Licenses() {
  const licenses = [
    {
      title: 'Business License',
      price: '4,888',
      features: [
        'Business License',
        'Unlimited Share Holders',
        'MOA',
        'Bank Account Assistance',
        '5-10 Mix And Match Activities',
        'Commercial Registry And',
        'Lease Agreement',
         
      ],
    },
    {
      title: 'Freezone License',
      price: '10,800',
      features: [
        'Business License',
        '10 Mix And Match Activities',
        'Establishment Card',
        'Residence Visa',
        'Emirates ID', 
        'Bank Account Assistance',
         
      ],
    },
    {
      title: 'Dubai Mainland License',
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