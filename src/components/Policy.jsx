import React from 'react';
import AnimatedText from './AnimatedText';
import Contact from './Contact';
import './Policy.css';

const Policy = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="policy-hero-section" id="hero">
        <h1 className="policy-hero-title">Terms & Conditions</h1>
      </div>

      {/* Policy Content */}
      <div className="policy-container">
        {/* Introduction */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Introduction</h2>
          <p>
            Welcome to Adonai Innovations! We are committed to delivering high-quality software development solutions
            while ensuring transparency, privacy, and accountability in our operations. This policy outlines the terms
            and conditions for using our services, as well as your rights and responsibilities.
          </p>
        </section>

        {/* Contact Information */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Contact Information</h2>
          <p>
            For any inquiries, you can reach us at:
          </p>
          <p>
            <a href="mailto:support@adonaiinnovations.com" className="policy-link">support@adonaiinnovations.com</a>
          </p>
        </section>

        {/* Service Delivery Policy */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Service Delivery Policy</h2>
          <p>
            We strive to deliver all projects within agreed timelines. Delays caused by unforeseen circumstances will be
            communicated promptly. Delivery milestones are outlined in project contracts.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting the privacy of your personally identifiable information and promoting trust and confidence on the Internet.
          </p>
          <p>
            This Privacy Protection Policy (the "Policy") is applied to all of the websites owned by us and describes the methods that we use for the collection,
            storage and use of personally identifiable information about the users of our websites.
          </p>
          <p>
            As used herein, "personally identifiable information" means any non-public information that would enable us or
            a third party to identify or contact users of our websites (sometimes referred to in this Policy as "you") by
            electronic or other means.
          </p>
        </section>

        {/* Terms of Service */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Terms of Service</h2>
          <p>
            By using our services, you agree to abide by our terms, including proper use of software and respect for
            intellectual property rights.
          </p>
        </section>

        {/* Modification of Policy */}
        <section className="policy-section">
          <h2 className="policy-subtitle">Modification of Policy</h2>
          <p>
            We reserve the right to update this policy at any time. Changes will be effective immediately upon posting
            on our website.
          </p>
        </section>
      </div>

      {/* Animated Text and Contact */}
      <AnimatedText />
      <Contact />
    </div>
  );
};

export default Policy;
