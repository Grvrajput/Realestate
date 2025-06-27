import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Real Estate Logo" className="logo" />
        <h2>ESTATEPRO</h2>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ Menu
      </button>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
