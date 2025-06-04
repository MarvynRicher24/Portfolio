import React, { useState } from 'react';
import './Contact.css';
import ParallaxSection from './ParallaxSection';
import cave from '../assets/cave.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marvynpro@hotmail.com');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Réinitialise le message après 2 secondes
  };

  return (
    <ParallaxSection id="contact" backgroundImage={cave}>
      <h1>Me Contacter</h1>
      <p className="contact-description">
        Vous souhaitez me contacter ou en savoir plus ? N'hésitez pas à utiliser les liens ci-dessous.
      </p>
      <div className="contact-links">
        <div className="email-container">
          <a href="mailto:marvynpro@hotmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            marvynpro@hotmail.com
          </a>
          <button className="copy-button" onClick={handleCopyEmail}>
            <FaCopy className="copy-icon" />
          </button>
        </div>
        {copySuccess && <p className="copy-success">Email copié !</p>}
        <a href="https://www.linkedin.com/in/marvyn-richer-787952298" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          Mon profil LinkedIn
        </a>
        <a href="https://github.com/MarvynRicher24/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          Mon GitHub
        </a>
      </div>
      <div className="contact-footer">
        <p>Merci de votre visite !</p>
      </div>
    </ParallaxSection>
  );
};

export default Contact;