import React, { useState } from 'react';
import './Projects.css';
import ParallaxSection from './ParallaxSection';
import road from '../assets/road.jpg';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { image: project1, title: 'Projet 1', link: 'https://github.com/projet1' },
    { image: project2, title: 'Projet 2', link: 'https://github.com/projet2' },
    { image: project3, title: 'Projet 3', link: 'https://github.com/projet3' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <ParallaxSection id="projects" backgroundImage={road} nextSectionId="contact">
      <h1>Projets :</h1>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev}>
          ‹
        </button>
        <div className="carousel-content">
          <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
            <p>{projects[currentIndex].title}</p>
          </a>
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          ›
        </button>
      </div>
      <a
        href="https://github.com/MarvynRicher24/"
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