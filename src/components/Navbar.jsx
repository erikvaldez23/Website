import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeroOutOfView, setHeroOutOfView] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      setMobileMenuOpen(false);
    }
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
          setMobileMenuOpen(false);
          setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      >
        {label}
      </RouterLink>
    );
  };

  useEffect(() => {
    // Function to handle the IntersectionObserver logic
    const setupObserver = () => {
      const heroSection = document.getElementById('hero'); // Get the hero section by ID
      if (!heroSection) {
        setHeroOutOfView(true); // If there's no hero (sub-URL), make navbar solid
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          setHeroOutOfView(!entry.isIntersecting); // Update state based on hero visibility
        },
        {
          root: null, // Observe relative to the viewport
          threshold: 0, // Trigger as soon as any part of the hero section exits the viewport
        }
      );

      observer.observe(heroSection);

      return () => {
        observer.disconnect(); // Cleanup observer on unmount or route change
      };
    };

    setupObserver(); // Run on component mount and route change
  }, [location.pathname]); // Re-run the effect when the route changes

  return (
    <nav className={`navbar ${isHeroOutOfView ? 'scrolled' : ''}`}>
      <div className="logo">
        {location.pathname === '/' ? (
          <span onClick={scrollToTop}>Adonai Innovations</span>
        ) : (
          <RouterLink to="/" onClick={handleLogoClick}>
            Adonai Innovations
          </RouterLink>
        )}
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
        <li>{renderNavLink('expertise', 'Expertise')}</li>
        <li>{renderNavLink('services', 'Services')}</li>
        <li>{renderNavLink('projects', 'Portfolio')}</li>

        {isMobileMenuOpen && <li>{renderNavLink('contact', 'Contact')}</li>}
      </ul>
      <button className="contact-button">
        {renderNavLink('contact', 'Get in Touch')}
      </button>
    </nav>
  );
};

export default Navbar;
