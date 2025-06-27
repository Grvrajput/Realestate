// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>EstatePro</h3>
          <p>Your trusted real estate partner</p>
        </div>
        <div className="footer-info">
          <p>📍 123 Real Estate Street, New Delhi, India</p>
          <p>📞 +918938973952   </p>
          <p>✉️ gk847862@gmail.com</p>
        </div>
        <div className="footer-socials">
          <a href="#" title="Facebook">🌐</a>
          <a href="#" title="Instagram">📸</a>
          <a href="#" title="LinkedIn">💼</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 EstatePro. All rights reserved.<br/>
         This is created by Gaurav Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
