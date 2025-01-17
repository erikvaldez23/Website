import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedText from './AnimatedText'
import Contact from './Contact'
import "./ServiceDetails.css";

const servicesData = {
  "ios-development": {
    title: "iOS Development",
    description:
      "We provide custom software solutions tailored to your needs, helping businesses achieve scalability and operational efficiency.",
    features: [
      {
        title: "Custom web applications",
        description: "Description of feature 1 explaining its benefits and use cases.",
      },
      {
        title: "Mobile app development",
        description: "Description of feature 2 detailing how it solves key challenges.",
      },
      {
        title: "System integration",
        description: "Description of feature 2 detailing how it solves key challenges.",
      },
      {
        title: "Enhanced scalability",
        description: "Description of feature 2 detailing how it solves key challenges.",
      },
    ],
  },
  "android-development": {
    title: "Android Development",
    description:
      "Our mobile app development services deliver seamless user experiences on iOS and Android, helping businesses engage their audience and achieve their goals.",
    features: [
      {
        title: "Native iOS and Android development",
        description: "Description of feature A with specific use cases.",
      },
      {
        title: "Cross-platform solutions",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "User-friendly interfaces",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "App store deployment support",
        description: "Description of feature B and its relevance.",
      },
    ],
  },
  "open-ai": {
    title: "OpenAI",
    description:
      "From responsive websites to complex web applications, we build fast, secure, and user-friendly solutions tailored to your business needs.",
    features: [
      {
        title: "Responsive design",
        description: "Description of feature A with specific use cases.",
      },
      {
        title: "Backend and frontend development",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "SEO-friendly architecture",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "E-commerce integration",
        description: "Description of feature B and its relevance.",
      },
    ],
  },
  "chat-gpt": {
    title: "Chat-GPT",
    description:
      "We help businesses leverage the power of the cloud for collaboration, scalability, and data security.",
    features: [
      {
        title: "Cloud migration and hosting",
        description: "Description of feature A with specific use cases.",
      },
      {
        title: "Multi-cloud and hybrid setups",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "Enhanced data security",
        description: "Description of feature B and its relevance.",
      },
      {
        title: "Cost-effective solutions",
        description: "Description of feature B and its relevance.",
      },
    ],
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
      {/* Hero Section */}
      <div className="service-hero-section" id="hero">
        <h1 className="service-hero-title">{service.title}</h1>
      </div>

      {/* Content Section */}
      <div className="service-details-content">
        {/* Service Description */}
        <div className="service-description">
          <p>{service.description}</p>
          <hr className="section-divider" />
        </div>

        {/* Features Section */}
        <div className="service-features">
          {service.features.map((feature, index) => (
            <div className="feature-container" key={index}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatedText />
      <Contact />
    </div>
  );
};

export default ServiceDetails;
