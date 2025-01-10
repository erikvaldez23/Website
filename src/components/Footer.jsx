import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          Adonai Innovations
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/adonai.innovations" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright and Domain */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Adonai Innovations. All rights reserved. | 
          <a href="https://www.adonaiinnovations.com" target="_blank" rel="noopener noreferrer">
            www.adonaiinnovations.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
