import React from 'react';
import './Projects.css';
import ParallaxSection from './ParallaxSection';
import road from '../assets/road.jpg';

const Projects = () => {
  return (
    <ParallaxSection id="projects" backgroundImage={road} nextSectionId="contact">
      <h1>Voici mes différents projets :</h1>
      <div className="carousel">
        <div className="project">Projet 1</div>
        <div className="project">Projet 2</div>
        <div className="project">Projet 3</div>
      </div>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        Voir mon GitHub
      </a>
    </ParallaxSection>
  );
};

export default Projects;