// src/components/Services.jsx
import React from 'react';
import './Services.css';
import buyImg from '../assets/buy.png';
import sellImg from '../assets/sell.png';
import rentImg from '../assets/rent.png';
import manageImg from '../assets/management.png';

const Services = () => {
  const services = [
    { title: 'Buy a Home', img: buyImg, desc: 'Find the perfect property to call your own.' },
    { title: 'Sell a Home', img: sellImg, desc: 'Get the best value for your property.' },
    { title: 'Rent a Home', img: rentImg, desc: 'Browse premium rentals across the city.' },
    { title: 'Property Management', img: manageImg, desc: 'Let us manage your assets professionally.' }
  ];

  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
