import React, { useState } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Accueil', id: 'home' },
  { label: 'À propos', id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Projets', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={() => handleScroll('home')}>Marvyn Richer</div>
      <nav className="header-nav">
        <button onClick={() => handleScroll('home')} className="nav-link">Accueil</button>
        <button onClick={() => handleScroll('about')} className="nav-link">À propos</button>
        <button onClick={() => handleScroll('skills')} className="nav-link">Compétences</button>
        <button onClick={() => handleScroll('projects')} className="nav-link">Projets</button>
        <button onClick={() => handleScroll('contact')} className="nav-link">Contact</button>
      </nav>
      <button
        className={`burger-menu${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`mobile-nav${menuOpen ? ' show' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className="nav-link"
            onClick={() => handleScroll(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;