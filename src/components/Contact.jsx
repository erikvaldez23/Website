import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_ebq8fws', // EmailJS Service ID
        'template_9pzmsve', // EmailJS Template ID
        templateParams,
        'IJjDD9FPCyRdlPMm0' // EmailJS User ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('animate'); // Trigger animation
            });
          }
        });
      },
      { threshold: 0.4 } 
    );

    const target = document.querySelector('.contact-section');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Form */}
        <div className="contact-form-container animate-on-scroll">
          <h2 className="section-title animate-on-scroll">Get In Touch</h2>
          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
            <div className="form-group animate-on-scroll">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group animate-on-scroll">
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group animate-on-scroll">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button animate-on-scroll">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
