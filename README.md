# Global Vision

Global Vision is a modern, responsive business setup and architectural services platform built with Next.js and React. It provides comprehensive information and lead capture for business formation, licensing, visas, and office solutions in the UAE and beyond.

## Features

- Pixel-perfect, modern design
- Fully responsive layout for all devices
- Modular, reusable React components
- Business setup flows: Mainland, Freezone, Offshore, Office Assistance
- Services: Golden Visa, Bank Account, Notary, Trademark, Certificate Attestation, and more
- Callback and contact forms with phone validation
- Animated UI with AOS
- API endpoints for lead/contact capture
- Easy to customize and extend

## Tech Stack

- Next.js (React framework)
- React & React DOM
- react-icons
- react-phone-input-2
- AOS (Animate On Scroll)
- Nodemailer (for backend email/contact API)

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Run the development server:
   ```
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `app/`
  - `components/` - All main UI components (Navbar, Hero, CallbackForm, Services, etc.)
  - `mainland/` - Mainland company setup pages (Dubai, Sharjah, Abu Dhabi, etc.)
  - `freezone/` - Freezone company setup pages (Dubai, Sharjah, Other Emirates)
  - `offshore/` - Offshore company setup pages (Dubai, RAKICC, BVI, Cayman, Mauritius)
  - `office-assistance/` - Office solutions (virtual, shared, flexi, private, coworking)
  - `services/` - Service detail pages (visa, golden visa, notary, bank account, etc.)
  - `callback-form/` - Callback form page
  - `api/` - API endpoints for contact and callback forms
- `public/images/` - All image assets (logos, backgrounds, service images, etc.)
- `public/video/` - Video assets for hero/backgrounds
- `styles/globals.css` - Global and component styles

## API Endpoints

- `/api/home-contact` - Handles home/contact/callback form submissions
- `/api/contact-lead` - Handles lead/contact form submissions

## Customization

- Update content and images in the `app/` and `public/images/` folders
- Adjust styles in `styles/globals.css`
- Add or modify services and business setup flows by editing or adding pages/components

## License

MIT 