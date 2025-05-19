import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import wj from '../assets/mockup1.png';
import wj2 from '../assets/before-after.png';
import commonLife from '../assets/common-life.png';

const projectData = [
  {
    id: 1,
    title: 'Spend a Year With Jesus',
    description: 'Walk-along journey through Jesus’s life before crucifixion.',
    image: wj,
    url: '/projects/1',
    tags: 'Product Design | Software Development | UX/UI'
  },
  {
    id: 2,
    title: 'Common Life',
    description: 'Artificial Intelligence Bible Companion App',
    image: commonLife,
    url: '/projects/2',
    tags: 'Product Design | Software Development | UX/UI'
  },
  // {
  //   id: 3,
  //   title: 'Tint Tek Plus Website & AI Chatbot',
  //   description: '',
  //   image: wj,
  //   url: '/projects/3',
  // },
  // {
  //   id: 4,
  //   title: 'Made 2 Move Website',
  //   description: '',
  //   image: wj,
  //   url: '/projects/4',
  // },
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Trigger animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const cards = document.querySelectorAll('.animate-on-scroll');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
<section className="projects-section">
  <div className="container">
    <div className="projects-container">
      <h2 className="projects-section-title">Featured Work</h2>
      <p className="projects-section-subtitle">
        A collection of projects showcasing creativity, innovation, and problem-solving skills.
      </p>
      <div
  className={`projects-grid ${projectData.length === 1 ? "single" : ""}`}
>
  {projectData.map((project) => (
    <div className="project-card" key={project.id}>
      <Link to={project.url} className="project-link">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-hover-overlay">
          <p className="learn-more-text">Learn More</p>
        </div>
      </Link>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">{project.tags}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</section>
  );
};

export default Projects;
