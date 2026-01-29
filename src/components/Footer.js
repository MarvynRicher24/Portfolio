import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©2026 Marvyn Richer</p>

        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;