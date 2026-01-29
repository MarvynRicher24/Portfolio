import React, { useState } from 'react';
import './Skills.css';
import ParallaxSection from './ParallaxSection';
import landscape from '../assets/landscape.jpg';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('front-end');

  const skillsData = {
    'front-end': ['HTML5/CSS3', 'JavaScript', 'React', 'Angular', 'Vue.js'],
    'back-end': ['PHP (Laravel)', 'Nodejs', 'Java', 'Python'],
    'database': ['SQL (PostgreSQL, MySQL)', 'Administration de bases de données', 'UML/Merise'],
    'methods': ['Docker (Containerisation)', 'Git (versionning)', 'Méthodes Agile (SCRUM, Kanban)'  ],
  };

  return (
    <ParallaxSection id="skills" backgroundImage={landscape} nextSectionId="projects">
      <h1>Mes compétences</h1>
      <div className="skills-buttons">
        <button
          className={activeCategory === 'front-end' ? 'active' : ''}
          onClick={() => setActiveCategory('front-end')}
        >
          FRONT-END
        </button>
        <button
          className={activeCategory === 'back-end' ? 'active' : ''}
          onClick={() => setActiveCategory('back-end')}
        >
          BACK-END
        </button>
        <button
          className={activeCategory === 'database' ? 'active' : ''}
          onClick={() => setActiveCategory('database')}
        >
          DONNÉES & SYSTÈMES
        </button>
        <button
          className={activeCategory === 'methods' ? 'active' : ''}
          onClick={() => setActiveCategory('methods')}
        >
          OUTILS & WORKFLOW
        </button>
      </div>
      <div className="skills-bubbles">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="tech-bubble">
            {skill}
          </div>
        ))}
      </div>
    </ParallaxSection>
  );
};

export default Skills;