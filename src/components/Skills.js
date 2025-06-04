import React, { useState } from 'react';
import './Skills.css';
import ParallaxSection from './ParallaxSection';
import landscape from '../assets/landscape.jpg';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('front-end');

  const skillsData = {
    'front-end': [
      { name: 'HTML / CSS', level: '85%' },
      { name: 'JavaScript / React', level: '60%' },
      { name: 'Angular / Vue.js', level: '25%' },
    ],
    'back-end': [
      { name: 'PHP / Laravel', level: '50%' },
      { name: 'Nodejs', level: '30%' },
      { name: 'C# / Java', level: '50%' },
    ],
    'database': [
      { name: 'SQL / PostgreSQL', level: '65%' },
      { name: 'Python / R', level: '20%' },
    ],
    'methods': [
      { name: 'Scrum / Kanban', level: '75%' },
    ],
  };

  return (
    <ParallaxSection id="skills" backgroundImage={landscape} nextSectionId="projects">
      <h1>Mes compétences</h1>
      <div className="skills-buttons">
        <button
          className={activeCategory === 'front-end' ? 'active' : ''}
          onClick={() => setActiveCategory('front-end')}
        >
          Front-End
        </button>
        <button
          className={activeCategory === 'back-end' ? 'active' : ''}
          onClick={() => setActiveCategory('back-end')}
        >
          Back-End
        </button>
        <button
          className={activeCategory === 'database' ? 'active' : ''}
          onClick={() => setActiveCategory('database')}
        >
          Base de données
        </button>
        <button
          className={activeCategory === 'methods' ? 'active' : ''}
          onClick={() => setActiveCategory('methods')}
        >
          Méthodes
        </button>
      </div>
      <div className="skills-bars">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="bar-container">
              <div className="bar" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </ParallaxSection>
  );
};

export default Skills;