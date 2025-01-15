import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimatedText.css';
import logo from '../assets/adonai-logo-1.png';

const AnimatedText = () => {
  const staticSentencePart1 = "Need a ready-made product team";
  const staticSentencePart2 = "to help your company";
  const animationWords = ["transform?", "grow?", "innovate?", "thrive?"];
  const interval = 4000; // Change interval in milliseconds

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);
  const navigate = useNavigate();

  // Disable scrolling when Calendly modal is open
  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [showCalendly]);

  // Cycle through the animated words
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animationWords.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [animationWords, interval]);

  // Navigate to home and scroll to the projects section
  const handleViewAllCaseStudies = () => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation happens before scrolling
  };

  return (
    <div className="animation-container">
      <div className="animation-logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="animation-heading">
        {staticSentencePart1} <br />
        {staticSentencePart2} <br />
        <span className="animation-word">{animationWords[currentWordIndex]}</span>
      </h1>
      <div className="animation-buttons">
        <button
          className="primary-btn"
          onClick={() => setShowCalendly(true)} // Open Calendly modal
        >
          Schedule a Meeting
        </button>
        <button
          className="secondary-btn"
          onClick={handleViewAllCaseStudies} // Navigate and scroll
        >
          View All Featured Work
        </button>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <>
          <div
            className="calendly-overlay"
            onClick={() => setShowCalendly(false)}
          >
            <div
              className="calendly-iframe-container"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="close-calendly-button"
                onClick={() => setShowCalendly(false)}
              >
                &times; {/* "X" Icon */}
              </button>
              <iframe
                src="https://calendly.com/erikkvaldez/30min"
                title="Schedule a Meeting"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  borderRadius: "8px",
                }}
              ></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnimatedText;
