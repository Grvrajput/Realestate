// src/components/Properties.jsx
import React from 'react';
import './Properties.css';
import prop1 from '../assets/property1.png';
import prop2 from '../assets/property2.png';
import prop3 from '../assets/property3.png';
import prop4 from '../assets/property4.png';

const Properties = () => {
  const properties = [
    { id: 1, title: 'Modern Villa', price: '₹2.5 Cr', location: 'Bangalore', img: prop1 },
    { id: 2, title: 'City Apartment', price: '₹1.2 Cr', location: 'Mumbai', img: prop2 },
    { id: 3, title: 'Suburban House', price: '₹95 Lakh', location: 'Pune', img: prop3 },
    { id: 4, title: 'Luxury High-rise', price: '₹3.8 Cr', location: 'Gurgaon', img: prop4 }
  ];

  return (
    <section className="properties-section" id="properties">
      <h2>Featured Properties</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.img} alt={property.title} />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
