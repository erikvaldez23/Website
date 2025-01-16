import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaMobileAlt, FaCloud, FaLaptopCode } from "react-icons/fa";
import "./services.css";

const services = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Building tailored software solutions to meet specific business needs.",
    icon: <FaCode />,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Designing and developing mobile applications for Android, iOS, and cross-platform solutions.",
    icon: <FaMobileAlt />,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Creating modern, responsive, and scalable web applications.",
    icon: <FaLaptopCode />,
  },
  {
    id: "cloud-integration",
    title: "Cloud Integration",
    description: "Streamlining business operations through cloud-based solutions.",
    icon: <FaCloud />,
  },
];

const Services = () => {
  // Scroll-triggered animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      {/* Section Header */}
      <div className="services-header">
        <h2 className="service-section-title">Services</h2>
        <p className="services-intro">Innovative Solutions Tailored to Your Needs</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card animate-on-scroll" key={service.id} style={{ animationDelay: `${index * 0.2}s` }}>
          <div className="service-card-content">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
          <Link to={`/services/${service.id}`} className="service-button">
            Learn More <span>→</span>
          </Link>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Services;
