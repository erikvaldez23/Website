import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import wj from '../assets/mockup1.png';
import wj2 from '../assets/before-after.png';

const projectData = [
  {
    id: 1,
    title: 'With Jesus',
    description: 'Walk-along journey through Jesus’s life before crucifixion.',
    image: wj,
    url: '/projects/1',
  },
  // {
  //   id: 2,
  //   title: 'Project 2',
  //   description: 'A short and concise description of the project',
  //   image: image1,
  //   url: '/projects/2',
  // },
  // {
  //   id: 3,
  //   title: 'Project 3',
  //   description: 'A short and concise description of the project',
  //   image: image5,
  //   url: '/projects/3',
  // },
  // {
  //   id: 4,
  //   title: 'Project 4',
  //   description: 'A short and concise description of the project',
  //   image: image2,
  //   url: '/projects/4',
  // },
];

const Projects = () => {
  // Scroll-triggered animation logic
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
        <div className="project-tags">
          <span>Product Design</span> | <span>Software Development</span> | <span>UX/UI</span>
        </div>
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
