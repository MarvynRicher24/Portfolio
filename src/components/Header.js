import React from 'react';
import './Header.css';

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
    </header>
  );
};

export default Header;