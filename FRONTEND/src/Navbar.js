import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  /** Run when user clicks the 🔍 or presses Enter */
  const handleSearch = () => {
    const q = term.trim();
    if (q) {
      navigate(`/products?search=${encodeURIComponent(q)}`);
      setTerm('');                // optional: clear the box
    }
  };

  /** Run when user presses a key in the input */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="nav-logo">  KC FURN</div>
      </div>

      {/* Search bar */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="main-search-input"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="main-search-button"
          onClick={handleSearch}
          aria-label="Search"
        >
          🔍
        </button>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/products?category=living-room">Living Room</Link></li>
          <li><Link to="/products?category=dining">Dining</Link></li>
          <li><Link to="/products?category=bedroom">Bedroom</Link></li>
          <li><Link to="/products?category=office">Office</Link></li>
          <li><Link to="/products?category=outdoor-couches">Outdoor Couches</Link></li>
          <li><Link to="/products?category=home-decor">Home Decor</Link></li>
          <li><Link to="/products?category=new-collection">NEW COLLECTION</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="nav-icons">
          <span title="Wishlist">🤍</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;