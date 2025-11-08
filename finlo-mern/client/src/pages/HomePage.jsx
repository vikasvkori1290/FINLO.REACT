import React from 'react';
import { Link } from 'react-router-dom';
// You would create and import your Carousel3D component here
// import Carousel3D from '../components/Carousel3D';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to FINLO</h1>
        <p>Your AI-Powered Travel Companion</p>
        <div className="cta-buttons">
            <Link to="/plan" className="btn btn-primary">Plan Your Trip →</Link>
            <Link to="/explore" className="btn btn-secondary">Explore Places</Link>
        </div>
      </section>
      
      {/* 
        <section className="carousel-section">
          <Carousel3D />
        </section>
      */}
    </div>
  );
};

export default HomePage;
