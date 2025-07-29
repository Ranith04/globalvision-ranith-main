"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaBuilding, FaCertificate, FaChevronDown, FaChevronUp, FaCrown, FaGlobe, FaPassport, FaRegEdit, FaRegFileAlt, FaShieldAlt, FaUniversity } from 'react-icons/fa';

const businessSetupTabs = [
  {
    key: 'mainland',
    label: 'Mainland',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/dubai'; }} style={{ cursor: 'pointer' }}>Dubai Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/sharjah'; }} style={{ cursor: 'pointer' }}>Sharjah Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/abu-dhabi'; }} style={{ cursor: 'pointer' }}>Abu Dhabi Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/ajman'; }} style={{ cursor: 'pointer' }}>Ajman Mainland</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/rak'; }} style={{ cursor: 'pointer' }}>RAK Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/uaq'; }} style={{ cursor: 'pointer' }}>UAQ Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/fujairah'; }} style={{ cursor: 'pointer' }}>Fujairah Mainland</div>
        </div>
      </div>
    )
  },
  {
    key: 'freezone',
    label: 'Freezone',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols exact-freezone-cols">
        <div>
          <div className="dropdown-col-title exact-freezone-title">Dubai Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/meydan'; }} style={{ cursor: 'pointer' }}>MEYDAN</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/ifza'; }} style={{ cursor: 'pointer' }}>IFZA</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/dmcc'; }} style={{ cursor: 'pointer' }}>DMCC</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/difc'; }} style={{ cursor: 'pointer' }}>DIFC</div>
        </div>
        <div>
          <div className="dropdown-col-title exact-freezone-title">Sharjah Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/srtip'; }} style={{ cursor: 'pointer' }}>SRTIP</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/shams'; }} style={{ cursor: 'pointer' }}>SHAMS</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/spc'; }} style={{ cursor: 'pointer' }}>SPC</div>
        </div>
        <div>
          <div className="dropdown-col-title exact-freezone-title">Other Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/rak'; }} style={{ cursor: 'pointer' }}>Ras Al Khaimah Freezone</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/ajman'; }} style={{ cursor: 'pointer' }}>Ajaman Freezone</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/uaq'; }} style={{ cursor: 'pointer' }}>Umm Al Quwain Freezone</div>
        </div>
      </div>
    )
  },
  {
    key: 'offshore',
    label: 'Offshore',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/dubai'; }} style={{ cursor: 'pointer' }}>Dubai Offshore</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/rakicc'; }} style={{ cursor: 'pointer' }}>RAKICC</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/bvi'; }} style={{ cursor: 'pointer' }}>BVI</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/cayman'; }} style={{ cursor: 'pointer' }}>Cayman Islands</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/mauritius'; }} style={{ cursor: 'pointer' }}>Mauritius</div>
        </div>
      </div>
    )
  },
  {
    key: 'office',
    label: 'Office Assistance',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/virtual-offices'; }} style={{ cursor: 'pointer' }}>Virtual Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/shared-offices'; }} style={{ cursor: 'pointer' }}>Shared Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/flexi-offices'; }} style={{ cursor: 'pointer' }}>Flexi Offices</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/private-offices'; }} style={{ cursor: 'pointer' }}>Private Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/coworking-spaces'; }} style={{ cursor: 'pointer' }}>Coworking Spaces</div>
        </div>
      </div>
    )
  }
];

const servicesList = [
  { key: 'golden-visa', label: 'Golden visa services', icon: <FaCrown /> },
  { key: 'local-sponsorship', label: 'Local sponsorship', icon: <FaShieldAlt /> },
  { key: 'bank-account', label: 'Bank account opening assistance', icon: <FaUniversity /> },
  { key: 'notary', label: 'Notery services', icon: <FaRegEdit /> },
  { key: 'global-visa', label: 'Global visa assistance', icon: <FaGlobe /> },
  { key: 'trademark', label: 'Trade mark registrations', icon: <FaRegFileAlt /> },
  { key: 'visa', label: 'Visa services', icon: <FaPassport /> },
  { key: 'certificate', label: 'Certificate attestation', icon: <FaCertificate /> },
];

// Mobile submenu data
const mobileMenuData = {
  businessSetup: {
    mainland: [
      { label: 'Dubai Mainland', href: '/mainland/dubai' },
      { label: 'Sharjah Mainland', href: '/mainland/sharjah' },
      { label: 'Abu Dhabi Mainland', href: '/mainland/abu-dhabi' },
      { label: 'Ajman Mainland', href: '/mainland/ajman' },
      { label: 'RAK Mainland', href: '/mainland/rak' },
      { label: 'UAQ Mainland', href: '/mainland/uaq' },
      { label: 'Fujairah Mainland', href: '/mainland/fujairah' }
    ],
    freezone: {
      'Dubai Freezones': [
        { label: 'MEYDAN', href: '/freezone/dubai/meydan' },
        { label: 'IFZA', href: '/freezone/dubai/ifza' },
        { label: 'DMCC', href: '/freezone/dubai/dmcc' },
        { label: 'DIFC', href: '/freezone/dubai/difc' }
      ],
      'Sharjah Freezones': [
        { label: 'SRTIP', href: '/freezone/sharjah/srtip' },
        { label: 'SHAMS', href: '/freezone/sharjah/shams' },
        { label: 'SPC', href: '/freezone/sharjah/spc' }
      ],
      'Other Freezones': [
        { label: 'Ras Al Khaimah Freezone', href: '/freezone/other/rak' },
        { label: 'Ajaman Freezone', href: '/freezone/other/ajman' },
        { label: 'Umm Al Quwain Freezone', href: '/freezone/other/uaq' }
      ]
    },
    offshore: [
      { label: 'Dubai Offshore', href: '/offshore/dubai' },
      { label: 'RAKICC', href: '/offshore/rakicc' },
      { label: 'BVI', href: '/offshore/bvi' },
      { label: 'Cayman Islands', href: '/offshore/cayman' },
      { label: 'Mauritius', href: '/offshore/mauritius' }
    ],
    office: [
      { label: 'Virtual Offices', href: '/office-assistance/virtual-offices' },
      { label: 'Shared Offices', href: '/office-assistance/shared-offices' },
      { label: 'Flexi Offices', href: '/office-assistance/flexi-offices' },
      { label: 'Private Offices', href: '/office-assistance/private-offices' },
      { label: 'Coworking Spaces', href: '/office-assistance/coworking-spaces' }
    ]
  },
  services: servicesList.map(service => ({
    label: service.label,
    href: `/services/${service.key}`,
    icon: service.icon
  }))
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mainland');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile submenu states
  const [mobileBusinessSetupOpen, setMobileBusinessSetupOpen] = useState(false);
  const [mobileMainlandOpen, setMobileMainlandOpen] = useState(false);
  const [mobileFreezoneOpen, setMobileFreezoneOpen] = useState(false);
  const [mobileOffshoreOpen, setMobileOffshoreOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  // Determine which nav item is active
  const isHome = pathname === '/';
  const isBusinessSetup = pathname.startsWith('/mainland') || pathname.startsWith('/freezone') || pathname.startsWith('/offshore') || pathname.startsWith('/office-assistance');
  const isServices = pathname.startsWith('/services');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Reset all submenu states when closing mobile menu
    if (mobileMenuOpen) {
      setMobileBusinessSetupOpen(false);
      setMobileMainlandOpen(false);
      setMobileFreezoneOpen(false);
      setMobileOffshoreOpen(false);
      setMobileOfficeOpen(false);
      setMobileServicesOpen(false);
    }
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileBusinessSetupOpen(false);
    setMobileMainlandOpen(false);
    setMobileFreezoneOpen(false);
    setMobileOffshoreOpen(false);
    setMobileOfficeOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <Image 
          src="/images/logo.jpg" 
          alt="Global Vision Logo" 
          width={180} 
          height={60} 
          priority
          className="logo-img"
        />
      </a>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`navbar__hamburger ${mobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul className={`navbar__links ${mobileMenuOpen ? 'open' : ''}`} onClick={(e) => {
        // Close menu when clicking on overlay (::before element area)
        if (e.target === e.currentTarget) {
          setMobileMenuOpen(false);
        }
      }}>
        <li><Link href="/" className={isHome ? "active" : ""} onClick={handleMobileLinkClick}>Home</Link></li>
        
        {/* Desktop Business Setup Dropdown */}
        <li className="navbar__dropdown-wrapper desktop-only">
          <div
            style={{display: 'inline-block', position: 'relative'}}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/mainland" className={"navbar__dropdown" + (isBusinessSetup ? " active" : "")} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }}>Business Setup <span className="navbar__arrow">▼</span></Link>
            {dropdownOpen && (
              <div className="business-dropdown exact-business-dropdown-bg" style={{position: 'absolute', left: '50%', top: '100%', transform: 'translateX(-50%)', zIndex: 1000}}>
                <div className="business-dropdown-tabs exact-dropdown-tabs">
                  {businessSetupTabs.map(tab => (
                    <button
                      key={tab.key}
                      className={`business-dropdown-tab exact-dropdown-tab${activeTab === tab.key ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab.key)}
                      type="button"
                    >
                      {tab.icon} <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
                <div className="business-dropdown-content exact-dropdown-content">
                  {businessSetupTabs.find(tab => tab.key === activeTab)?.content}
                </div>
              </div>
            )}
          </div>
        </li>

        {/* Mobile Business Setup Collapsible */}
        <li className="mobile-submenu-item mobile-only">
          <button 
            className={`mobile-submenu-toggle ${isBusinessSetup ? 'active' : ''}`}
            onClick={() => setMobileBusinessSetupOpen(!mobileBusinessSetupOpen)}
          >
            Business Setup 
            {mobileBusinessSetupOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <div className={`mobile-submenu ${mobileBusinessSetupOpen ? 'open' : ''}`}>
            {/* Mainland */}
            <div className="mobile-submenu-section">
              <button 
                className="mobile-submenu-section-toggle"
                onClick={() => setMobileMainlandOpen(!mobileMainlandOpen)}
              >
                Mainland 
                {mobileMainlandOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`mobile-submenu-section-content ${mobileMainlandOpen ? 'open' : ''}`}>
                {mobileMenuData.businessSetup.mainland.map((item, index) => (
                  <Link key={index} href={item.href} onClick={handleMobileLinkClick}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Freezone */}
            <div className="mobile-submenu-section">
              <button 
                className="mobile-submenu-section-toggle"
                onClick={() => setMobileFreezoneOpen(!mobileFreezoneOpen)}
              >
                Freezone 
                {mobileFreezoneOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`mobile-submenu-section-content ${mobileFreezoneOpen ? 'open' : ''}`}>
                {Object.entries(mobileMenuData.businessSetup.freezone).map(([category, items]) => (
                  <div key={category} className="mobile-submenu-category">
                    <div className="mobile-submenu-category-title">{category}</div>
                    {items.map((item, index) => (
                      <Link key={index} href={item.href} onClick={handleMobileLinkClick}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Offshore */}
            <div className="mobile-submenu-section">
              <button 
                className="mobile-submenu-section-toggle"
                onClick={() => setMobileOffshoreOpen(!mobileOffshoreOpen)}
              >
                Offshore 
                {mobileOffshoreOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`mobile-submenu-section-content ${mobileOffshoreOpen ? 'open' : ''}`}>
                {mobileMenuData.businessSetup.offshore.map((item, index) => (
                  <Link key={index} href={item.href} onClick={handleMobileLinkClick}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Office Assistance - Now inside Business Setup */}
            <div className="mobile-submenu-section">
              <button 
                className="mobile-submenu-section-toggle"
                onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
              >
                Office Assistance 
                {mobileOfficeOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`mobile-submenu-section-content ${mobileOfficeOpen ? 'open' : ''}`}>
                {mobileMenuData.businessSetup.office.map((item, index) => (
                  <Link key={index} href={item.href} onClick={handleMobileLinkClick}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>



        {/* Desktop Services Dropdown */}
        <li className="navbar__dropdown-wrapper desktop-only" style={{ position: 'relative' }}>
          <div
            style={{ display: 'inline-block' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link href="/services" className={"navbar__dropdown" + (isServices ? " active" : "")} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }}>Services <span className="navbar__arrow">▼</span></Link>
            {servicesDropdownOpen && (
              <div
                className="business-dropdown exact-business-dropdown-bg"
                style={{
                  position: 'absolute',
                  left: '40%',
                  top: '100%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                  minWidth: 'min(950px, 95vw)',
                  maxWidth: '95vw',
                  padding: 0,
                  borderRadius: 12,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)'
                }}
              >
                <div className="business-dropdown-content exact-dropdown-content" style={{ padding: '24px 32px' }}>
                  <div className="dropdown-content-grid exact-dropdown-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 48px' }}>
                    <div>
                      {servicesList.slice(0, 4).map((service, idx) => (
                        <div
                          key={idx}
                          onClick={() => router.push(`/services/${service.key}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '1.18em',
                            padding: '0',
                            cursor: 'pointer',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{ fontSize: '1.22em', minWidth: 22, color: '#fff' }}>{service.icon}</span>
                          {service.label}
                        </div>
                      ))}
                    </div>
                    <div>
                      {servicesList.slice(4).map((service, idx) => (
                        <div
                          key={idx + 4}
                          onClick={() => router.push(`/services/${service.key}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '1.18em',
                            padding: '0',
                            cursor: 'pointer',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{ fontSize: '1.22em', minWidth: 22, color: '#fff' }}>{service.icon}</span>
                          {service.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>

        {/* Mobile Services Collapsible */}
        <li className="mobile-submenu-item mobile-only">
          <button 
            className={`mobile-submenu-toggle ${isServices ? 'active' : ''}`}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services 
            {mobileServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <div className={`mobile-submenu ${mobileServicesOpen ? 'open' : ''}`}>
            {mobileMenuData.services.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMobileLinkClick} className="mobile-service-link">
                <span className="mobile-service-icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </li>

      </ul>
      <a href="#contact" className="navbar__contact-btn outlined" onClick={() => setMobileMenuOpen(false)}>Contact us</a>
    </nav>
  );
} 