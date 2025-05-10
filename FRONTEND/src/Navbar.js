import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="nav-logo">🪑 KC FURN</div>
        </div>

        <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/products?category=living-room">Living Room</Link></li>
          <li><Link to="/products?category=dining">Dining</Link></li>
          <li><Link to="/products?category=bedroom">Bedroom</Link></li>
          <li><Link to="/products?category=office">Office</Link></li>
          <li><Link to="/products?category=outdoor-couches">Outdoor Couches</Link></li>
          <li><Link to="/products?category=home-decor">Home Decor</Link></li>
          <li><Link to="/products?category=new-collection">NEW COLLECTION</Link></li>
        </ul>

        </div>

        <div className="navbar-right">
          <div className="nav-icons">
            <span title="Wishlist">🤍</span>
            <span title="Cart">🛒</span>
            <span title="Account">👤</span>
            <span title="Search">🔍</span>
          </div>
        </div>
      </nav>

      {/* Centered Search Bar Below Navbar */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="main-search-input"
          placeholder="Search"
        />
        <button className="main-search-button">🔍</button>
      </div>
    </>
  );
};

export default Navbar;
