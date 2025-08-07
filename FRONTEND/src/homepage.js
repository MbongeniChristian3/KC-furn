// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import furnitureHeroImage from './assets/furniture-hero.png'

// Import images for New Categories
import outdoorCategory from './assets/outdoor-category.png'; // UNCOMMENTED
import modularcouchCategory from './assets/modular-couch-category.png';     // UNCOMMENTED
import decorCategory from './assets/decor-category.png';     // UNCOMMENTED

// Import images for Top Picks
import modernSofa from './assets/modern-sofa.png';         // UNCOMMENTED
import luxuryBed from './assets/luxury-bed.png';           // UNCOMMENTED
import executiveDesk from './assets/executive-desk.png';   // UNCOMMENTED


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <p>Discover stylish comfort for every room</p>
        <img src={furnitureHeroImage} alt="Stylish furniture collection" className="hero-image" />
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>

      <div className="section">
        <h2>New Categories</h2>
        <div className="grid">
          <div className="card">
            <img src={outdoorCategory} alt="Outdoor furniture" /> {/* ADDED IMAGE TAG */}
            Outdoor
          </div>
          <div className="card">
            <img src={modularcouchCategory} alt="Modular Couch" /> {/* ADDED IMAGE TAG */}
            Modular Couch
          </div>
          <div className="card">
            <img src={decorCategory} alt="Decor items" /> {/* ADDED IMAGE TAG */}
            Decor
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Top Picks</h2>
        <div className="grid">
          <div className="card">
            <img src={modernSofa} alt="Modern Sofa" /> {/* ADDED IMAGE TAG */}
            Modern Sofa
          </div>
          <div className="card">
            <img src={luxuryBed} alt="Luxury Bed" /> {/* ADDED IMAGE TAG */}
            Luxury Bed
          </div>
          <div className="card">
            <img src={executiveDesk} alt="Executive Desk" /> {/* ADDED IMAGE TAG */}
            Executive Desk
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;