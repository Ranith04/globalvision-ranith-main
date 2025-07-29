import { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const name = `${firstName} ${lastName}`.trim();
    try {
      const res = await fetch('/api/home-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, mobile: phone, service: message })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thank you! We will contact you soon.');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <footer className="contact" id="contact">
      <div className="contact__cta">
        <h2>Be Your Own <span className="accent">Boss</span></h2>
        <p>Get in touch with us to begin your business journey in Dubai</p>
      </div>
      <div className="contact__form-info">
        <div className="contact__info">
          <h3 className="contact__info-title">Start your own<br/>company</h3>
          <p className="contact__info-desc">Ready to establish your business in Dubai? Our expert team is here to guide you through every step of the process, from initial consultation to final setup.</p>
          <ul className="contact__info-list">
            <li><FaMapMarkerAlt className="contact__icon" />Office number 205, Ontario Tower, Business Bay, Dubai</li>
            <li><FaPhoneAlt className="contact__icon" />Phone: +9714 579 3444</li>
            <li><FaMobileAlt className="contact__icon" />Mobile: +971 50 419 3507</li>
            <li><FaEnvelope className="contact__icon" />Email: info@globalvisionuae.com</li>
          </ul>
          <div className="contact__socials">
            <a href="https://www.instagram.com/globalvision.ae?igsh=Z2gwb21pZmw0dDlt" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/GlobalvisionUAE" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/globalvisionbu1?s=11&t=V_7RUTpPuh3l4MpE4Ue4Gg" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: '-0.125em'}}>
                <path d="M1199.61 0H944.726L600.001 494.118L255.274 0H0L489.118 700.588L0 1227H255.274L600.001 732.882L944.726 1227H1199.61L710.49 526.412L1199.61 0Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/global-vision-business-hub/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </div>
            <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
            <textarea placeholder="Tell us about your project..." value={message} onChange={e => setMessage(e.target.value)} required></textarea>
            <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Get Started Today'}</button>
            {status && <div style={{ marginTop: 16, color: '#fff', textAlign: 'center' }}>{status}</div>}
          </form>
        </div>
      </div>
    </footer>
  );
} 