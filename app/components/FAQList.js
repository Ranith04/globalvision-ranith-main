"use client";
import React from "react";

export default function FAQList({ faqs = [] }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'none', padding: 0 }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i !== faqs.length - 1 ? '1px solid #e5e7eb' : 'none', padding: '0 0' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            onMouseEnter={() => setOpen(i)}
            onMouseLeave={() => setOpen(null)}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: 16,
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: 500,
              color: '#222',
              padding: '22px 18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'background 0.2s',
            }}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
          >
            {faq.question}
            <span style={{ fontSize: 18, color: '#6b7a86', marginLeft: 8, transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'none' }}>▼</span>
          </button>
          <div
            id={`faq-answer-${i}`}
            style={{
              maxHeight: open === i ? 200 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
              padding: open === i ? '0 18px 18px 18px' : '0 18px',
              color: '#444',
              fontSize: 15,
              fontFamily: 'Inter, Arial, sans-serif',
              opacity: open === i ? 1 : 0,
              pointerEvents: open === i ? 'auto' : 'none',
            }}
            aria-hidden={open !== i}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
} 