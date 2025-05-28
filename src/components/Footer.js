import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©2025 Marvyn Richer</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Retour en haut
        </button>
      </div>
    </footer>
  );
};

export default Footer;