import Script from 'next/script'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Inject Botpress Scripts */}
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
  )
} 