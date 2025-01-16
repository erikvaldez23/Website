import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading hidden">
          <h2 className="section-title">What We Do</h2>
          <p className="about-overview">
            We bring together strategy, design, and engineering to develop products end to end.
          </p>
        </div>
        <div className="about-content">
          <div className="about-column hidden">
            <h3 className="column-title">Strategy</h3>
            <ul className="column-list">
              <li>Product marketing</li>
              <li>Product management</li>
              <li>User research</li>
              <li>Product definition and validation</li>
              <li>Design sprints</li>
              <li>Data & analytics</li>
            </ul>
          </div>
          <div className="about-column hidden">
            <h3 className="column-title">Design</h3>
            <ul className="column-list">
              <li>UX design</li>
              <li>UX writing</li>
              <li>User testing</li>
              <li>Product design</li>
              <li>Design systems</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div className="about-column hidden">
            <h3 className="column-title">Engineering</h3>
            <ul className="column-list">
              <li>Frontend development</li>
              <li>Backend development</li>
              <li>Mobile development</li>
              <li>API development</li>
              <li>CI/CD</li>
              <li>No-code development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
