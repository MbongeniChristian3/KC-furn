// src/Footer.js
import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} KC Furniture. All rights reserved.</p>
        <p>Made with ❤️ by Mbongeni</p>
      </div>
    </footer>
  );
};

export default Footer;
