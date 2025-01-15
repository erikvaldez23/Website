import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ServiceDetails.css'

const servicesData = {
  "custom-software-development": {
    title: "Custom Software Development",
    description:
      "We provide custom software solutions tailored to your needs, helping businesses achieve scalability and operational efficiency.",
    extraInfo: "Our solutions include web apps, mobile apps, and system integrations.",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Our advisory services support clients through every stage of product development with expert guidance and insights.",
    extraInfo: "We specialize in market research, technology strategy, and implementation planning.",
  },
  "web-development": {
    title: "Web Development",
    description:
      "Our advisory services support clients through every stage of product development with expert guidance and insights.",
    extraInfo: "We specialize in market research, technology strategy, and implementation planning.",
  },
  "bpo-services": {
    title: "BPO Services",
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
    <div className="service-details-page">
      <div className="service-hero-section">
        <h1 className="service-hero-title">{service?.title || "Service Details"}</h1>
      </div>
      <div className="service-details-content">
        <p className="service-details-description">{service?.description}</p>
        <div className="service-details-info">
          <h3>Additional Information</h3>
          <p>{service?.extraInfo}</p>
        </div>
        <button
          className="service-details-back-button"
          onClick={() => navigate("/")}
        >
          Back to Services
        </button>
      </div>
    </div>
  );
  
  
};

export default ServiceDetails;
