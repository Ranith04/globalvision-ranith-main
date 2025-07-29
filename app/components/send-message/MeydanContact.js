import { useState } from 'react';

export default function MeydanContact() {
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
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required style={{ flex: 1 }} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required style={{ flex: 1 }} />
      </div>
      <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
      <textarea placeholder="Tell us about your project..." value={message} onChange={e => setMessage(e.target.value)} required style={{ minHeight: 80 }}></textarea>
      <button type="submit" disabled={loading} style={{ background: '#00c89d', color: '#fff', padding: '12px 0', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>{loading ? 'Sending...' : 'Send Message'}</button>
      {status && <div style={{ marginTop: 16, color: '#00c89d', textAlign: 'center' }}>{status}</div>}
    </form>
  );
} 