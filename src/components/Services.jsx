import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-content">
        <h2 className="section-title">SERVICES</h2>
        <p className="section-subtitle">
          Empowering Your Business with Cutting-Edge Software Solutions
        </p>
        <p className="services-description">
        We provide innovative software solutions tailored to your needs, specializing in custom application development, 
        system integration, cloud services, and ongoing support to help businesses thrive in the digital age.
        </p>
        {/* <p className="services-mission">
          Our mission is to create innovative solutions tailored to your
          ministry's goals, enabling you to focus on what truly matters –
          serving your congregation and spreading your message.
        </p> */}
      </div>
    </section>
  );
};

export default Services;