import React, { useState } from 'react';
import Modal from './Modal';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <button 
        onClick={() => setOpen(true)} 
        style={{ 
          padding: '0.75rem 2rem', 
          fontSize: '1rem', 
          borderRadius: '8px', 
          background: 'linear-gradient(135deg, #1ca3a3 0%, #0f766e 100%)', 
          color: '#fff', 
          border: 'none', 
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0f766e 0%, #065f46 100%)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #1ca3a3 0%, #0f766e 100%)';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        Open Contact Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
} 