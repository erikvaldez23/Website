import React from 'react';
import './About.css';
import logo from '../assets/adonai-logo.png'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="section-title">WHO ARE WE?</h2>
        <p className="section-subtitle">
          Empowering churches with custom-built apps to connect, engage, and
          inspire their communities.
        </p>
        <p className="about-description">
          At [Your Company Name], we are passionate about leveraging technology
          to meet the unique needs of churches. From seamless communication
          tools to community management features, our apps are designed to help
          churches stay connected and grow their reach. Whether you're looking
          for an app to streamline operations or enhance member engagement, we
          are here to bring your vision to life.
        </p>
        <p className="about-mission">
          Our mission is to create innovative solutions tailored to your
          ministry's goals, enabling you to focus on what truly matters –
          serving your congregation and spreading your message.
        </p>
      </div>
      <div className="about-image">
        <img
          src={logo}
          alt="Connecting churches through technology"
        />
      </div>
    </section>
  );
};

export default About;