import React from 'react';
import './Contact.css';
import ParallaxSection from './ParallaxSection';
import cave from '../assets/cave.jpg';

const Contact = () => {
  return (
    <ParallaxSection id="contact" backgroundImage={cave}>
      <h1>Contactez-moi</h1>
      <p>Email : exemple@email.com</p>
      <p>
        LinkedIn :{' '}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          Mon profil
        </a>
      </p>
    </ParallaxSection>
  );
};

export default Contact;