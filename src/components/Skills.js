import React from 'react';
import './Skills.css';
import ParallaxSection from './ParallaxSection';
import landscape from '../assets/landscape.jpg';

const Skills = () => {
  return (
    <ParallaxSection id="skills" backgroundImage={landscape} nextSectionId="projects">
      <h1>Mes compétences</h1>
      <div className="skills-buttons">
        <button>Front-End</button>
        <button>Back-End</button>
        <button>Base de données</button>
        <button>Méthodes</button>
      </div>
      <div className="skills-bars">
        <div>HTML/CSS <div className="bar" style={{ width: '100%' }}></div></div>
        <div>JavaScript/React <div className="bar" style={{ width: '60%' }}></div></div>
        <div>Angular/Vue.js <div className="bar" style={{ width: '20%' }}></div></div>
        <div>PHP/Laravel <div className="bar" style={{ width: '40%' }}></div></div>
      </div>
    </ParallaxSection>
  );
};

export default Skills;