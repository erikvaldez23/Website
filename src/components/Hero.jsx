import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [showCalendly, setShowCalendly] = useState(false);

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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
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
          <>
            {/* Overlay for clicking outside the iframe */}
            <div
              className="calendly-overlay"
              onClick={() => setShowCalendly(false)} // Close on clicking overlay
            >
              {/* Iframe container */}
              <div
                className="calendly-iframe-container"
                onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking inside
              >
                {/* Close button */}
                <button
                  className="close-calendly-button"
                  onClick={() => setShowCalendly(false)}
                >
                  &times; {/* "X" Icon */}
                </button>

                {/* Embed the Calendly iframe */}
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
    </section>
  );
};

export default Hero;
