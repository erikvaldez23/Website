import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Apps from './components/Apps';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Support from './components/Support';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="app">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="apps">
          <Apps />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="support">
          <Support />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
