import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollAfterRouting = (sectionId) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderNavLink = (sectionId, label) => {
    return location.pathname === '/' ? (
      <ScrollLink 
        to={sectionId} 
        smooth={true} 
        duration={500} 
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
      </ScrollLink>
    ) : (
      <RouterLink 
        to="/" 
        onClick={() => {
          scrollAfterRouting(sectionId);
          setMobileMenuOpen(false);
        }}
      >
        {label}
      </RouterLink>
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Use RouterLink for clickable logo */}
        <RouterLink to="/" onClick={() => setMobileMenuOpen(false)}>
          Adonai Innovations
        </RouterLink>
      </div>

      <div
        className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li>{renderNavLink('about', 'About')}</li>
        <li>{renderNavLink('services', 'Services')}</li>
        <li>{renderNavLink('projects', 'Portfolio')}</li>
        <li>{renderNavLink('expertise', 'Expertise')}</li>
        {/* <li>{renderNavLink('apps', 'Apps')}</li> */}
        {/* <li>{renderNavLink('support', 'Support')}</li> */}
      </ul>
      <button className="contact-button">
        {renderNavLink('contact', 'Get in Touch')}
      </button>
    </nav>
  );
};

export default Navbar;
