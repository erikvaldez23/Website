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
    title: "Adonai AI",
    description: [
      "This project leverages artificial intelligence to assist pastors, ministry leaders, and Christian believers in crafting sermons, Bible studies, and personalized devotional plans. The AI model is designed to analyze Biblical texts, theological resources, and user input to generate structured and relevant content tailored to individual needs.", 
      "The goal is to provide a modern tool that empowers users in their faith journey, enhances their understanding of Scripture, and streamlines the preparation process for church services and Bible studies.",
    ],
    image: image1,
    image2: image1,
    strategy: "The vision behind this project is to create an innovative, AI-powered platform that enhances the process of sermon and devotional preparation. The platform targets pastors and clergy who wish to streamline their preparation workflows, small group leaders and Bible study organizers who need structured lesson plans, and Christians seeking personalized devotionals to grow spiritually. Core features include AI-driven sermon generation based on Bible passages, themes, or topics; contextual analysis with cross-references to theological resources; and a library of suggested prayer points, key takeaways, and discussion prompts. The platform is designed to save time for leaders, foster deeper spiritual growth, and make Biblical tools more accessible through modern technology.",
    design: "The product design emphasizes simplicity and usability. The interface features a clean, intuitive design, offering users a streamlined way to input Bible passages, select sermon formats, and organize their materials. Users can access tools such as a scripture input field, a thematic generator for selecting or customizing sermon topics, and a dashboard to save and manage drafts. Collaboration features allow team members to provide feedback, while integration with commentaries and theological resources supports deeper research. The design prioritizes accessibility with adaptive layouts for desktop and mobile, a dark mode for extended use, and compatibility with screen readers to ensure inclusivity. A minimalist aesthetic featuring warm tones and Christian-inspired visuals provides a welcoming and reflective experience. Built using React.js for the frontend and Node.js for the backend, the platform integrates AI tools like OpenAI’s GPT to deliver dynamic and accurate content, supported by a robust database for storing user data and drafts.",
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
    image: image1,
    image2: image1,
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
    image: image1,
    image2: image1,
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
      {/* {project.testimonial && (
        <div className="testimonial-section">
          <div className="testimonial-content">
            <p className="testimonial-quote">"{project.testimonial.quote}"</p>
            <div className="testimonial-author">
              <p className="author-name">{project.testimonial.author}</p>
              <p className="author-title">{project.testimonial.position}</p>
            </div>
          </div>
        </div>
      )} */}
      <AnimatedText />
      <Contact />
    </div>
  );
};

export default ProjectDetails;
