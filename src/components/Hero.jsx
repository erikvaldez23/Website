import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.classList.add("hide-navbar"); // Add class to hide navbar
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
      document.body.classList.remove("hide-navbar"); // Remove class
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("hide-navbar");
    };
  }, [showCalendly]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the element to the top of the viewport
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          YOUR VISION, <br />
          OUR INNOVATION
        </h1>

        <p className="hero-description">
          Empowering businesses and individuals with innovative, user-focused
          applications that drive efficiency, creativity, and growth.
        </p>

        <div className="hero-buttons">
          <button className="hero-learn-more-button" onClick={scrollToAbout}>
            Learn More
          </button>
          <button
            className="schedule-meeting-button"
            onClick={() => setShowCalendly(true)}
          >
            Schedule a Meeting
          </button>
        </div>

        {showCalendly && (
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
                src="https://calendly.com/adonaiinnovations-support/30min"
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
        )}
      </div>
    </section>
  );
};

export default Hero;
