import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects'
import AnimatedText from './AnimatedText'
import Apps from './Apps';
import Contact from './Contact';
import Support from './Support';
import FrameworkCarousel from './FrameworkCarousel';

const Home = () => {
  return (
    <div className="home">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="expertise">
        <FrameworkCarousel />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <section id="apps">
        <Apps />
      </section> */}
       <section id="animated">
        <AnimatedText />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section id="support">
        <Support />
      </section> */}
    </div>
  );
};

export default Home;
