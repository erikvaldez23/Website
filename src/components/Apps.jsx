import React from 'react';
import { Link } from 'react-router-dom'
import './Apps.css';
import image1 from '../assets/cross-4.avif'
import image2 from '../assets/cross-4.avif'
import image3 from '../assets/cross-4.avif'
import image4 from '../assets/cross-4.avif'

const appsData = [
  {
    id: 1,
    name: 'App One',
    description: 'A short description of App One, showcasing its main features and benefits.',
    image:image1,
    link: '/app-one',
  },
  {
    id: 2,
    name: 'App Two',
    description: 'A brief overview of App Two, highlighting what makes it unique and useful.',
    image: image2,
    link: '/app-two',
  },
  {
    id: 3,
    name: 'App Three',
    description: 'App Three’s description, explaining its purpose and how it stands out.',
    image: image3,
    link: '/app-three',
  },
  {
    id: 4,
    name: 'App Four',
    description: 'App Fours’s description, explaining its purpose and how it stands out.',
    image: image4,
    link: '/app-four',
  },
];

const Apps = () => {
  return (
    <section className="apps-section">
      <h2 className="section-title">OUR APPS</h2>
      <div className="apps-grid">
        {appsData.map((app) => (
          <div className="app-card" key={app.id}>
            <img src={app.image} alt={app.name} className="app-image" />
            <div className="app-details">
              <h3 className="app-name">{app.name}</h3>
              <p className="app-description">{app.description}</p>
              <Link to={`/apps/${app.id}`} className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Apps;
