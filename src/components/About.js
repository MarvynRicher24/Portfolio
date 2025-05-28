import React from 'react';
import './About.css';
import ParallaxSection from './ParallaxSection';
import skyImage from '../assets/sky.jpg'; // Chemin corrigé

const About = () => {
  return (
    <ParallaxSection id="about" backgroundImage={skyImage} nextSectionId="skills">
      <h1>À propos de moi :</h1>
      <p>Développeur Full Stack : lorem ipsum dolor sit amet.</p>
      <div className="about-details">
        <div>Full Stack Développement</div>
        <div>Management de projet</div>
      </div>
    </ParallaxSection>
  );
};

export default About;