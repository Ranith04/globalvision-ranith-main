'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import About from './components/About';
import CallbackForm from './components/CallbackForm';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Licenses from './components/Licenses';
import Mission from './components/Mission';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import TrackRecord from './components/TrackRecord';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: 'ease-in-out',
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
          <img src="/images/logo.jpg" alt="Global Vision Logo" style={{ height: 38, marginBottom: 8 }} />
          <div style={{ fontWeight: 500, fontSize: '1.08rem', color: '#222', marginBottom: 0 }}>
            <span style={{ color: '#009688', fontWeight: 700 }}>Drop your contact details</span> , we will connect with you in a minute.
          </div>
          <div style={{ width: '100%', margin: '0' }}>
            <CallbackForm />
          </div>
          <div style={{ display: 'flex', gap: 18, marginTop: 18, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <a href="#" aria-label="Instagram" style={{ color: '#009688', fontSize: 28 }}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" style={{ color: '#009688', fontSize: 28 }}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="X" style={{ color: '#009688', fontSize: 28 }}><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="YouTube" style={{ color: '#009688', fontSize: 28 }}><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </Modal>
      <Navbar />
      <div data-aos="fade-up"><Hero /></div>
      <div data-aos="fade-up" data-aos-delay="100"><About /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Mission /></div>
      <div data-aos="fade-up" data-aos-delay="300"><Stats /></div>
      <div data-aos="fade-up" data-aos-delay="400"><Services /></div>
      <div data-aos="fade-up" data-aos-delay="500"><Licenses /></div>
      <div data-aos="fade-up" data-aos-delay="600"><TrackRecord /></div>
      <div data-aos="fade-up" data-aos-delay="700"><Testimonial /></div>
      <div data-aos="fade-up" data-aos-delay="800"><Contact /></div>
    </>
  );
} 