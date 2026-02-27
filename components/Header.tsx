'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: string) => {
    setActiveLink(page);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo" onClick={() => handleNavClick('home')}>
          <img src="/Aven-SVG.svg" alt="Aven Logo" width="100" height="auto" />
        </Link>

        <nav>
          <ul
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
            id="navMenu"
            aria-hidden={!isMenuOpen}
            role="menu"
          >
            <li>
              <Link
                href="/"
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About Firm
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className={`nav-link ${activeLink === 'industries' ? 'active' : ''}`}
                onClick={() => handleNavClick('industries')}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/appointment"
                className={`nav-link ${activeLink === 'appointment' ? 'active' : ''}`}
                onClick={() => handleNavClick('appointment')}
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='header-menu'>

          <Link href="/appointment">
            <button className="btn-beam header-cta" aria-label="Book Consultation">
              Book Consultation
            </button>
          </Link>
          <div className="header-actions">
            <div className="mobile-toggle">
              <button
                aria-controls="navMenu"
                aria-expanded={isMenuOpen}
                onClick={toggleMobileMenu}
                className="mobile-toggle-btn"
                type="button"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
                <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
