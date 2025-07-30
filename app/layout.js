// app/layout.js or app/layout.jsx
import Script from 'next/script';
import '../styles/globals.css';
import WhatsappWidget from './components/WhatsappWidget'; // adjust if path is different

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsappWidget />  {/* This adds the WhatsApp button on every page */}

        {/* Botpress Scripts */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.1/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/06/26/10/20250626101939-0Z5M7YJU.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
