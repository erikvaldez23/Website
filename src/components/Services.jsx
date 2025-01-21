import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiApple, SiAndroid, SiOpenai} from "react-icons/si";
import "./services.css";

const services = [
  {
    id: "ios-development",
    title: "iOS Development",
    description: "Creating high-performance iOS apps with AI-powered features for seamless user experiences.",
    icon: <SiApple />,
  },
  {
    id: "android-development",
    title: "Android Development",
    description: "Building scalable Android apps with smart AI integrations for enhanced functionality.",
    icon: <SiAndroid />,
  },
  {
    id: "chat-gpt",
    title: "Chat-GPT",
    description: "Integrating ChatGPT to deliver intelligent, conversational app experiences.",
    icon: <SiOpenai />,
  },
  {
    id: "open-ai",
    title: "OpenAI",
    description: "Enhancing apps with OpenAI-driven features for smarter interactions and automation.",
    icon: <SiOpenai />,
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
