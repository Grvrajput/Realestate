// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Make sure path is correct

const HeroSection = () => {
  return (
    <section className="hero-section" id='home'>
      <div className="hero-content">
        <h1>Find Your Perfect Property</h1>
        <p>Luxury Homes • Commercial Spaces • Rentals</p>
        <button className="hero-button">Explore Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
