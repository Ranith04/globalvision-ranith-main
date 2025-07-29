import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import styles from './Modal.module.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

export default function Modal({ open, onClose, children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '971'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (open) {
      // Prevent scrolling when modal is open
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
      };
    } else {
      // Ensure modal-open class is removed when modal is closed
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    }
  }, [open, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const res = await fetch('/api/home-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          mobile: formData.phone, 
          service: 'Modal Contact Form - Call Request' 
        })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage('Thank you! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '971'
        });
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    }
    
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.modalContent}>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <div className={styles.leftCol}>
            <img src="/images/sky.png" alt="Skyscraper" className={styles.modalImage} />
          </div>
          <div className={styles.rightCol}>
            <div className={styles.headerSection}>
              <div className={styles.logoSection}>
                <h1 className={styles.brandTitle}>Global Vision</h1>
                <p className={styles.brandSubtitle}>BUSINESS HUB</p>
              </div>
              <h2 className={styles.contactHeading}>
                Drop your contact details, we will connect with you in a minute.
              </h2>
            </div>
            
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Name <span className={styles.required}>(required)</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Email <span className={styles.required}>(required)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    📞 Enter your number <span className={styles.freeCall}>(The call is free)</span>
                  </label>
                  <div className={styles.phoneInputContainer}>
                    <PhoneInput
                      country={'ae'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputStyle={{ 
                        width: '100%', 
                        height: 44, 
                        borderRadius: 8, 
                        border: '2px solid #e5e7eb', 
                        background: '#fff', 
                        color: '#374151', 
                        fontSize: '1rem', 
                        paddingLeft: 50,
                        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif"
                      }}
                      buttonStyle={{
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px 0 0 8px',
                        background: '#fff',
                        height: 44
                      }}
                      dropdownStyle={{ zIndex: 9999 }}
                      enableSearch
                      placeholder="+1"
                      required
                    />
                    <button type="submit" className={styles.callButton} disabled={loading}>
                      {loading ? 'Sending...' : 'Call me!'}
                    </button>
                    {message && (
                      <div className={styles.messageDisplay}>
                        {message}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
} 