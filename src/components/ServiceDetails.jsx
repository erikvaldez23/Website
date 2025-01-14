import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ServiceDetails.css'

const servicesData = {
  "software-engineering": {
    title: "Software Engineering",
    description:
      "We provide custom software solutions tailored to your needs, helping businesses achieve scalability and operational efficiency.",
    extraInfo: "Our solutions include web apps, mobile apps, and system integrations.",
  },
  "advisory-services": {
    title: "Advisory Services",
    description:
      "Our advisory services support clients through every stage of product development with expert guidance and insights.",
    extraInfo: "We specialize in market research, technology strategy, and implementation planning.",
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-details-section">
        <h1>Service Not Found</h1>
        <button
          className="service-details-back-button"
          onClick={() => navigate("/")}
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="service-details-section">
      <div className="service-details-container">
        <h1 className="service-details-title">{service.title}</h1>
        <p className="service-details-description">{service.description}</p>
        <div className="service-details-info">
          <h3>Additional Information</h3>
          <p>{service.extraInfo}</p>
        </div>
        <button
          className="service-details-back-button"
          onClick={() => navigate("/")}
        >
          Back to Services
        </button>
      </div>
    </section>
  );
};

export default ServiceDetails;
