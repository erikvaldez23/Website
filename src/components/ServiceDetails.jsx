import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Contact from "./Contact";
import "./ServiceDetails.css";

const servicesData = {
  "ios-development": {
    title: "iOS Development",
    description:
      "Bring your vision to life with cutting-edge iOS applications tailored to your business goals, delivering exceptional performance and user experiences.",
    features: [
      {
        title: "Custom iOS Applications",
        description: "Tailor-made apps designed to meet unique business needs.",
      },
      {
        title: "Native Swift and Objective-C Solutions",
        description: "Robust, high-performance apps leveraging native tools.",
      },
      {
        title: "Seamless API Integration",
        description: "Smooth connectivity with third-party services and APIs.",
      },
      {
        title: "Comprehensive Deployment & Support",
        description: "End-to-end App Store management and ongoing assistance.",
      },
    ],
  },
  "android-development": {
    title: "Android Development",
    description:
      "Leverage expert Android development to deliver engaging mobile experiences that captivate users and drive business growth.",
    features: [
      {
        title: "Native Android Development",
        description:
          "Optimized apps built using Kotlin and Java for peak performance.",
      },
      {
        title: "Cross-Platform Solutions",
        description:
          "Unified development for consistent experiences across platforms.",
      },
      {
        title: "User-Friendly Interfaces",
        description: "Intuitive designs that enhance usability and engagement.",
      },
      {
        title: "App Store Deployment Support",
        description:
          "Comprehensive guidance for a smooth app launch on Google Play.",
      },
    ],
  },
  "open-ai": {
    title: "OpenAI Solutions",
    description:
      "Delivering fast, secure, and scalable web solutions, from dynamic websites to advanced AI-powered applications tailored to your business needs.",
    features: [
      {
        title: "Responsive Design",
        description:
          "Optimized layouts for seamless user experiences on all devices.",
      },
      {
        title: "Backend and Frontend Development",
        description:
          "Integrated solutions for robust and scalable web platforms.",
      },
      {
        title: "SEO-Friendly Architecture",
        description:
          "Built-in optimization to improve search engine visibility.",
      },
      {
        title: "E-Commerce Integration",
        description:
          "Streamlined solutions for secure and scalable online stores.",
      },
    ],
  },
  "chat-gpt": {
    title: "Chat-GPT Integration",
    description:
      "Revolutionize user experiences with intelligent, conversational AI solutions powered by ChatGPT. Enhance automation, productivity, and customer engagement with seamless integration.",
    features: [
      {
        title: "AI-Powered Conversational Interfaces",
        description:
          "Create dynamic chatbots and virtual assistants for real-time, human-like interactions.",
      },
      {
        title: "Customizable Responses",
        description:
          "Tailor AI responses to align with your brand’s tone, style, and use cases.",
      },
      {
        title: "Integration with Existing Workflows",
        description:
          "Embed ChatGPT into CRMs, e-commerce platforms, or customer service systems effortlessly.",
      },
      {
        title: "Advanced Natural Language Processing",
        description:
          "Leverage state-of-the-art NLP to understand complex queries and provide accurate responses.",
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
        <div className="service-description">
          <p>{service.description}</p>
          <hr className="section-divider" />
        </div>

        {/* 2x2 Grid of Features */}
        <div className="service-features">
          {service.features.map((feature, index) => (
            <motion.div
              className="feature-container"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatedText />
      <Contact />
    </div>
  );
};

export default ServiceDetails;
