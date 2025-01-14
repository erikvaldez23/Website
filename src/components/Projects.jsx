import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import image1 from '../assets/red-cross.avif';
import image2 from '../assets/cross-2.avif';
import image3 from '../assets/cross-3.jpg';
import image4 from '../assets/cross-4.avif';

const projectData = [
  {
    id: 1,
    title: 'Mizzen + Main',
    description: 'A fully custom headless commerce site for a growing men’s fashion brand.',
    image: image1,
    url: '/projects/1',
    featured: true, // Set this project as a featured card
  },
  {
    id: 2,
    title: 'Virtual Care Now',
    description: 'A modern health app to connect patients with doctors.',
    image: image2,
    url: '/projects/2',
  },
  {
    id: 3,
    title: 'Highway Logistics',
    description: 'A logistics app for tracking delivery lanes and schedules.',
    image: image3,
    url: '/projects/3',
  },
  {
    id: 4,
    title: 'BPO Services',
    description: 'Streamlining business operations through outsourcing.',
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
            <div
              className={`project-card ${project.featured ? 'featured-card' : ''}`}
              key={project.id}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-text">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <p className="project-description">{project.description}</p>
                  )}
                  <Link to={project.url} className="learn-more-button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
