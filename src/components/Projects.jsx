import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import image1 from '../assets/cross-4.avif';
import image2 from '../assets/cross-4.avif';
import image3 from '../assets/cross-4.avif';
import image4 from '../assets/cross-4.avif';

const projectData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for project 1',
    image: image1,
    url: '/projects/1', // URL or slug for the project
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for project 2',
    image: image2,
    url: '/projects/2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for project 3',
    image: image3,
    url: '/projects/3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for project 4',
    image: image4,
    url: '/projects/4',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">OUR PROJECTS</h2>
      <p className="section-subtitle">
        Explore the diverse range of projects we have successfully delivered for
        our clients.
      </p>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link to={project.url} className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
