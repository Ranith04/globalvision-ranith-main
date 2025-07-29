"use client";
import React, { useState } from 'react';
import ContactLeadSection from '../components/ContactLeadSection';
import Navbar from '../components/Navbar';



const offshoreTabs = [
  { label: 'Dubai Offshore', key: 'dubai' },
  { label: 'RAKICC', key: 'rakicc' },
  { label: 'BVI', key: 'bvi' },
  { label: 'Cayman Islands', key: 'cayman' },
  { label: 'Mauritius', key: 'mauritius' },
];

export default function OffshorePage() {
  const [activeTab, setActiveTab] = useState('dubai');

  return (
    <>
      <Navbar />
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '48px 0 0 0', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid #e5e7eb', marginBottom: 32 }}>
            {offshoreTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab.key ? '3px solid #fff' : '3px solid transparent',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 18,
                  padding: '18px 0',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'border-bottom 0.2s',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: 18, minHeight: 400, padding: 40, boxShadow: '0 2px 12px rgba(30,198,182,0.07)' }}>
            {activeTab === 'dubai' && (
              <div>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#19c39c', fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>Dubai Offshore</h2>
                <p>Placeholder content for Dubai Offshore. Replace with actual content.</p>
              </div>
            )}
            {activeTab === 'rakicc' && (
              <div>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#19c39c', fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>RAKICC</h2>
                <p>Placeholder content for RAKICC. Replace with actual content.</p>
              </div>
            )}
            {activeTab === 'bvi' && (
              <div>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#19c39c', fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>BVI</h2>
                <p>Placeholder content for BVI. Replace with actual content.</p>
              </div>
            )}
            {activeTab === 'cayman' && (
              <div>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#19c39c', fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>Cayman Islands</h2>
                <p>Placeholder content for Cayman Islands. Replace with actual content.</p>
              </div>
            )}
            {activeTab === 'mauritius' && (
              <div>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#19c39c', fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>Mauritius</h2>
                <p>Placeholder content for Mauritius. Replace with actual content.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <ContactLeadSection />
    </>
  );
} 