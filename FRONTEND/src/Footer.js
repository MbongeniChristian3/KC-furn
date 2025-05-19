// src/Footer.js
import React from 'react';
import './Footer.css'; // Optional styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} KC Furniture. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link>
        </p>
        <p>Made with ❤️ by Mbongeni</p>
      </div>
    </footer>
  );
};

export default Footer;