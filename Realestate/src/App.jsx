// src/App.jsx
import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import './index.css'; 
import Properties from './Components/Properties';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
       <Properties />
       <About />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
