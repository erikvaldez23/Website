import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimatedText.css';
import logo from '../assets/adonai-logo-1.png';

const AnimatedText = () => {
  const staticSentencePart1 = "Looking for a dedicated team";
  const staticSentencePart2 = "to accelerate your company's";
  const animationWords = ["success?", "expansion?", "innovation?", "performance?"];
  const interval = 4000; // Change interval in milliseconds

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);
  const navigate = useNavigate();

  // Disable scrolling when Calendly modal is open
  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCalendly]);

  // Cycle through the animated words
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animationWords.length);
    }, interval);

    return () => clearInterval(timer);
  }, [animationWords, interval]);

  // Scroll-triggered animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('animate'); // Trigger animation
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const target = document.querySelector('.animation-container');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const handleViewAllCaseStudies = () => {
    navigate("/Website/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="animation-container">
      <div className="animation-logo animate-on-scroll">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="animation-heading animate-on-scroll">
        {staticSentencePart1} <br />
        {staticSentencePart2} <br />
        <span className="animation-word">{animationWords[currentWordIndex]}</span>
      </h1>
      <div className="animation-buttons animate-on-scroll">
        <button
          className="primary-btn"
          onClick={() => setShowCalendly(true)}
        >
          Schedule a Meeting
        </button>
        <button
          className="secondary-btn"
          onClick={handleViewAllCaseStudies}
        >
          View All Featured Work
        </button>
      </div>

      {showCalendly && (
        <>
          <div
            className="calendly-overlay"
            onClick={() => setShowCalendly(false)}
          >
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
