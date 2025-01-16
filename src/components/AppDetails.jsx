import React from 'react';
import { useParams } from 'react-router-dom';
import './AppDetails.css'
import image1 from '../assets/cross-4.avif';
import image2 from '../assets/cross-4.avif';
import image3 from '../assets/cross-4.avif';
import image4 from '../assets/cross-4.avif';

// Array containing all app details
const appsData = [
  {
    id: 1,
    name: 'App One',
    description: 'Description of App One',
    image: image1,
    details: 'Further details for App One',
  },
  {
    id: 2,
    name: 'App Two',
    description: 'Description of App Two',
    image: image2,
    details: 'Further details for App Two',
  },
  {
    id: 3,
    name: 'App Three',
    description: 'Description of App Three',
    image: image3,
    details: 'Further details for App Three',
  },
  {
    id: 4,
    name: 'App Four',
    description: 'Description of App Four',
    image: image4,
    details: 'Further details for App Four',
  },
];

const AppDetails = () => {
  const { id } = useParams(); // Get the app ID from the URL
  const app = appsData.find((app) => app.id === parseInt(id, 10)); // Find the app based on the ID

  if (!app) {
    return <h2>App not found</h2>; // Show an error message if the app is not found
  }

  return (
    <div className="app-details-page" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{app.name}</h2>
      <img 
        src={app.image} 
        alt={app.name} 
        className='app-details-image'
      />
      <p>{app.description}</p>
      <p>{app.details}</p>
      <a href="/Website/" style={{ textDecoration: 'none', color: '#007bff' }}>
        Back to Home
      </a>
    </div>
  );
};

export default AppDetails;
