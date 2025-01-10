import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Adonai Innovations
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
        <li>
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="apps" 
            smooth={true} 
            duration={500} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Apps
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="support" 
            smooth={true} 
            duration={500} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </ScrollLink>
        </li>
      </ul>
      <button className="contact-button">
        <ScrollLink
          to="contact" // The ID of the contact section
          smooth={true}
          duration={500}
          onClick={() => setMobileMenuOpen(false)}
        >
          Get in Touch
        </ScrollLink>
      </button>
    </nav>
  );
};

export default Navbar;
