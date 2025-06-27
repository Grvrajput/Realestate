// src/components/About.jsx
import React from 'react';
import './About.css';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>Why Choose EstatePro?</h2>
          <p>
            At EstatePro, we bring you the finest properties with unmatched customer service. Whether you're buying,
            selling, or renting, our experienced team ensures a smooth and stress-free experience.
          </p>
          <ul>
            <li>✔ Trusted by 1000+ happy clients</li>
            <li>✔ Expert negotiation & legal guidance</li>
            <li>✔ Verified property listings</li>
            <li>✔ 24/7 support & consultation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
