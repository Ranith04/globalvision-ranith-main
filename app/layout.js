// app/layout.js or app/layout.jsx
import Script from 'next/script';
import '../styles/globals.css';
import WhatsappWidget from './components/WhatsappWidget'; // adjust if path is different

// Metadata for SEO and social media sharing
export const metadata = {
  title: 'Start Your Own Company in Dubai | Global Vision UAE',
  description: 'Empowering Your Business Journey in Dubai. Ready-to-move-in offices & complete business setup solutions in the heart of Dubai.',
  keywords: 'Dubai company setup, business setup Dubai, freezone company, mainland company, Dubai office, UAE business, company formation Dubai',
  authors: [{ name: 'Global Vision UAE' }],
  creator: 'Global Vision UAE',
  publisher: 'Global Vision UAE',
  metadataBase: new URL('https://globalvisionuae.com'),
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: 'Start Your Own Company in Dubai | Global Vision UAE',
    description: 'Empowering Your Business Journey in Dubai. Ready-to-move-in offices & complete business setup solutions in the heart of Dubai.',
    url: 'https://globalvisionuae.com',
    siteName: 'Global Vision UAE',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Global Vision UAE - Dubai Company Setup Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your Own Company in Dubai | Global Vision UAE',
    description: 'Empowering Your Business Journey in Dubai. Ready-to-move-in offices & complete business setup solutions in the heart of Dubai.',
    images: ['/logo.png'],
    creator: '@globalvisionuae',
    site: '@globalvisionuae',
  },
  
  // Favicon and icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="gDr4eCUUo-lP_JaLX9y9TNG4Xh5PExHz_18L1yLKPT0" />
        <link rel="canonical" href="https://globalvisionuae.com/" />
      </head>
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
