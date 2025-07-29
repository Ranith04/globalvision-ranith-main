'use client';
import Link from 'next/link';
import ContactLeadSection from '../components/ContactLeadSection';

const services = [
  { key: 'golden-visa', label: 'Golden Visa' },
  { key: 'local-sponsorship', label: 'Local Sponsorship' },
  { key: 'bank-account', label: 'Bank Account' },
  { key: 'notary', label: 'Notary' },
  { key: 'global-visa', label: 'Global Visa' },
  { key: 'trademark', label: 'Trademark' },
  { key: 'visa', label: 'Visa' },
  { key: 'certificate', label: 'Certificate' },
];

export default function ServicesPage() {
  return (
    <>
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1>Our Services</h1>
        <p>Select a service below to learn more.</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '32px auto', maxWidth: 400 }}>
          {services.map(service => (
            <li key={service.key} style={{ margin: '18px 0' }}>
              <Link href={`/services/${service.key}`} style={{
                display: 'block',
                padding: '16px 0',
                background: '#f7f7f7',
                borderRadius: 10,
                color: '#179e9e',
                fontWeight: 600,
                fontSize: '1.15rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(30,198,182,0.06)',
                transition: 'background 0.2s, color 0.2s',
              }}>
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ContactLeadSection />
    </>
  );
}
