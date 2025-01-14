import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

// In Services.jsx
const services = [
  {
    id: "software-engineering", // This must match the key in servicesData
    title: "Software Engineering",
    description:
      "We provide custom software solutions tailored to your needs.",
  },
  {
    id: "advisory-services", // This must match the key in servicesData
    title: "Advisory Services",
    description: "Expert guidance to support your business growth.",
  },
  {
    id: "3d-modeling-services", // Match this key too
    title: "3D Modeling Services",
    description: "Precision modeling for a variety of industries.",
  },
  {
    id: "bpo-services", // Match this key too
    title: "BPO Services",
    description: "Streamlining business operations through outsourcing.",
  },
];


const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="services-intro">Innovative Solutions Tailored to Your Needs</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
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
