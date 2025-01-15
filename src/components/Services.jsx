import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./services.css";

const services = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Building tailored software solutions to meet specific business needs.",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: " Designing and developing mobile applications for Android, iOS, and cross-platform solutions.",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Creating modern, responsive, and scalable web applications.",
  },
  {
    id: "bpo-services",
    title: "BPO Services",
    description: "Streamlining business operations through outsourcing.",
  },
];

const Services = () => {
  // Scroll-triggered animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // Add the animation class
          }
        });
      },
      { threshold: 0.5 } // Trigger when 20% of the section is visible
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="services-intro">
          Innovative Solutions Tailored to Your Needs
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card animate-on-scroll" key={service.id}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={`/services/${service.id}`} className="service-button">
              <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
