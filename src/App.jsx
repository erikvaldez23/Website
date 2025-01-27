import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Apps from './components/Apps';
import AppDetails from './components/AppDetails';
import Contact from './components/Contact';
import Support from './components/Support';
import FrameworkCarousel from './components/FrameworkCarousel';
import Policy from './components/Policy';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/expertise" element={<FrameworkCarousel />} />
            <Route path="/privacy-policy" element={<Policy/>} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
};

export default App;
