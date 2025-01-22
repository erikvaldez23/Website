import React from "react";
import { useParams } from "react-router-dom";
import Contact from "./Contact";
import AnimatedText from "./AnimatedText";
import { FaReact } from "react-icons/fa";
import {
  SiShopify,
  SiSanity,
  SiAlgolia,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { SiFirebase, SiSwift, SiKotlin, SiAndroid } from "react-icons/si";
import "./ProjectDetails.css";
import laptop from "../assets/laptop.png";
import laptop2 from "../assets/laptop-2.jpeg";
import image1 from "../assets/mockup-1.png";
import before_after from "../assets/before-after.png";

const projectData = [
  {
    id: 1,
    title: "With Jesus",
    description: [
      "With Jesus is a native mobile app that showcases a walk-along journey through Jesus’s life before crucifixion. This was an end-to-end process for our client with development, design, and product managemnet involvement.",
      "The clients mission is to connect people with Jesus’s experience to enhance their relationship with him, and in doing so affirm and strenghten experiences which build healthy relationships among all people of the world.",
    ],
    image: image1,
    image2: before_after,
    strategy:
      "Example product strategy for Project 1.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.",
    design:
      "The client had a website which provided some guardrails and inspiration for the visual theme of the project. Multiple iterations were supplied for feedback from the client and we landed on a simplistic design that draws inspiration from the desert in and around the time and place of the events documented in Jesus’s life.",
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Author",
      position: "CEO, Example Corp",
    },
    services: [
      "Discovery",
      "Strategy",
      "Product management",
      "iOS  Development",
      "Android Development",
      "UI/UX Design",
      "CI/CD Pipeline",
      "Notifications",
    ],
    tools: [
      "Figma",
      "Firebase",
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a placeholder project description for Project 2.",
    image: laptop,
    image2: laptop2,
    strategy: "Example product strategy for Project 2.",
    design: "Example product design details for Project 2.",
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Jane Doe",
      position: "CTO, Example Corp",
    },
    services: [
      "Discovery",
      "Strategy",
      "Market analysis",
      "Front-end engineering",
      "UI/UX Design",
      "Product management",
      "Delivery management",
    ],
    tools: ["React", "Shopify", "Sanity", "Algolia", "Next.js", "Figma"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a placeholder project description for Project 3.",
    image: laptop,
    image2: laptop2,
    strategy: "Example product strategy for Project 3.",
    design: "Example product design details for Project 3.",
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Alice Smith",
      position: "Designer, Example Studio",
    },
    services: [
      "Discovery",
      "Strategy",
      "Market analysis",
      "Front-end engineering",
      "UI/UX Design",
      "Product management",
      "Delivery management",
    ],
    tools: ["React", "Shopify", "Sanity", "Algolia", "Next.js", "Figma"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a placeholder project description for Project 4.",
    image: laptop,
    image2: laptop2,
    strategy: "Example product strategy for Project 4.",
    design: "Example product design details for Project 4.",
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Bob Johnson",
      position: "Product Manager, Example LLC",
    },
    services: [
      "Discovery",
      "Strategy",
      "Market analysis",
      "Front-end engineering",
      "UI/UX Design",
      "Product management",
      "Delivery management",
    ],
    tools: ["React", "Shopify", "Sanity", "Algolia", "Next.js", "Figma"],
  },
];

// Helper function for dynamic tool icons
const getToolIcon = (tool) => {
  switch (tool) {
    case "React":
      return <FaReact size={50} color="#61DAFB" />;
    case "Shopify":
      return <SiShopify size={50} color="#95BF47" />;
    case "Sanity":
      return <SiSanity size={50} color="#F03E2F" />;
    case "Algolia":
      return <SiAlgolia size={50} color="#5468FF" />;
    case "Figma":
      return <SiFigma size={50} color="#F24E1E" />;
    case "Next.js":
      return <SiNextdotjs size={50} color="#000000" />;
    case "Firebase":
      return <SiFirebase size={50} color="#FFCA28" />;
    case "Swift":
      return <SiSwift size={50} color="#FA7343" />;
    case "SwiftUI":
      return <SiSwift size={50} color="#FA7343" />;
    case "Kotlin":
      return <SiKotlin size={50} color="#0095D5" />;
    case "Jetpack Compose":
      return <SiAndroid size={50} color="#3DDC84" />;
    default:
      return null; // Return null if no icon is available
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find(
    (project) => project.id === parseInt(id, 10)
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <div className="project-hero-section" id="hero">
        <h1 className="project-hero-title">{project.title}</h1>
      </div>

      {/* Overview Section */}
      <div className="project-overview-section">
        <img
          src={project.image}
          alt={project.title}
          className="project-overview-image"
        />
        <div className="project-overview-description">
          {projectData[0].description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Dynamic Services and Tools Section */}
      <div className="project-services-tools">
        {project.services && (
          <div className="project-services-section">
            <h3>Services</h3>
            <ul className="project-services-list">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tools && (
          <div className="tools-section">
            <h3>Tools</h3>
            <div className="tools-grid">
              {project.tools.map((tool, index) => (
                <div className="tool-item" key={index}>
                  {getToolIcon(tool)}
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* New Middle Image Section */}
      {project.image2 && (
        <div className="project-overview-section">
          <img
            src={project.image2}
            alt="Additional visual for the project"
            className="project-other-images"
          />
        </div>
      )}

      {/* Product Strategy Section
      {project.strategy && (
        <div className="product-strategy-section">
          <div className="product-strategy-container">
            <h2 className="product-strategy-title">Product Strategy</h2>
            <p className="product-strategy-description">{project.strategy}</p>
          </div>
        </div>
      )} */}

      {/* {project.image2 && (
        <div className='project-overview-section'>
          <img
            src={project.image2}
            alt="Additional visual for the project"
            className="project-overview-image"
          />
        </div>
      )} */}

      {/* Product Design Section */}
      {project.design && (
        <div className="product-design-section">
          <div className="product-design-container">
            <h2 className="product-design-title">Product Design</h2>
            <p className="product-design-description">{project.design}</p>
          </div>
        </div>
      )}

       {/* {project.image2 && (
        <div className="project-overview-section">
          <img
            src={project.image2}
            alt="Additional visual for the project"
            className="project-other-images"
          />
        </div>
      )} */}

      {/* Testimonial Section */}
      {project.testimonial && (
        <div className="testimonial-section">
          <div className="testimonial-content">
            <p className="testimonial-quote">"{project.testimonial.quote}"</p>
            <div className="testimonial-author">
              <p className="author-name">{project.testimonial.author}</p>
              <p className="author-title">{project.testimonial.position}</p>
            </div>
          </div>
        </div>
      )}
      <AnimatedText />
      <Contact />
    </div>
  );
};

export default ProjectDetails;
