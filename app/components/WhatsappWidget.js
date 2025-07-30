// components/WhatsappWidget.js
import React from 'react';

const WhatsappWidget = () => {
  return (
    <a
      href="https://wa.me/971504193507"
      target="_blank"
      rel="noopener noreferrer"
              style={{
          position: 'fixed',
          bottom: '95px',
          right: '25px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 9999,
        textAlign: 'center',
        fontSize: '24px',
        textDecoration: 'none',
      }}
    >
      💬
    </a>
  );
};

export default WhatsappWidget; 