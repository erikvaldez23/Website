import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeroOutOfView, setHeroOutOfView] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const renderNavLink = (sectionId, label) => {
    return location.pathname === "/" ? (
      <ScrollLink
        to={sectionId}
        smooth
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
            document
              .getElementById(sectionId)
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      >
        {label}
      </RouterLink>
    );
  };

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) {
      setHeroOutOfView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${isHeroOutOfView ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo">
            {location.pathname === "/" ? (
              <span onClick={handleLogoClick}>Adonai Innovations</span>
            ) : (
              <RouterLink to="/" onClick={handleLogoClick}>
                Adonai Innovations
              </RouterLink>
            )}
          </div>

          <div
            className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}
          style={{
            maxHeight: isMobileMenuOpen ? "100vh" : "0",
            overflow: isMobileMenuOpen ? "auto" : "hidden",
          }}
        >
          <ul className="mobile-nav-links">
            <li>{renderNavLink("about", "About")}</li>
            <li>{renderNavLink("expertise", "Expertise")}</li>
            <li>{renderNavLink("services", "Services")}</li>
            <li>{renderNavLink("projects", "Portfolio")}</li>
          </ul>
          <button className="mobile-contact-button">
            {renderNavLink("contact", "Get in Touch")}
          </button>
          <button
            className="mobile-schedule-button"
            onClick={() => setShowCalendly(true)}
          >
            Schedule a Meeting
          </button>
          <div className="social-media-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a> */}
          </div>
        </div>
      </nav>

      {showCalendly && (
        <div className="calendly-overlay" onClick={() => setShowCalendly(false)}>
          <div
            className="calendly-iframe-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-calendly-button"
              onClick={() => setShowCalendly(false)}
            >
              &times;
            </button>
            <iframe
              src="https://calendly.com/adonaiinnovations-support/30min"
              title="Schedule a Meeting"
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "8px" }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
