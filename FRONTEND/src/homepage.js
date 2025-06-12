// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import furnitureHeroImage from './assets/furniture-hero.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <p>Discover stylish comfort for every room</p>
        {/* 2. Add the image tag here */}
        <img src={furnitureHeroImage} alt="Stylish furniture collection" className="hero-image" />
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>

      <div className="section">
        <h2>New Categories</h2>
        <div className="grid">
          <div className="card">Outdoor</div>
          <div className="card">Kids</div>
          <div className="card">Decor</div>
        </div>
      </div>

      <div className="section">
        <h2>Top Picks</h2>
        <div className="grid">
          <div className="card">Modern Sofa</div>
          <div className="card">Luxury Bed</div>
          <div className="card">Executive Desk</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;