import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import image1 from '../assets/cross-4.avif';
import image2 from '../assets/cross-4.avif';
import image3 from '../assets/cross-4.avif';
import image4 from '../assets/cross-4.avif';

const projectData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Detailed description for project 1',
    image: image1,
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Detailed description for project 2',
    image: image2,
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Detailed description for project 3',
    image: image3,
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Detailed description for project 4',
    image: image4,
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details-page">
      <h2>{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="project-details-image"
      />
      <p>{project.description}</p>
      <a href="/" className="back-button">
        Back to Home 
      </a>
    </div>
  );
};

export default ProjectDetails;
