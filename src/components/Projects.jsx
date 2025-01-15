import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import image1 from '../assets/red-cross.avif';
import image2 from '../assets/cross-2.avif';
import image3 from '../assets/mobile-cross.jpg';
import image4 from '../assets/cross-4.avif';

const projectData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A short and concise description of the project',
    image: image1,
    url: '/projects/1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A short and concise description of the project',
    image: image2,
    url: '/projects/2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A short and concise description of the project',
    image: image3,
    url: '/projects/3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A short and concise description of the project',
    image: image4,
    url: '/projects/4',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Work</h2>
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
                <Link to={project.url} className="projects-learn-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;