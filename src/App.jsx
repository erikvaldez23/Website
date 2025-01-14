import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // Import the new Home component
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Apps from './components/Apps';
import AppDetails from './components/AppDetails';
import Contact from './components/Contact';
import Support from './components/Support';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use Home for landing page */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
