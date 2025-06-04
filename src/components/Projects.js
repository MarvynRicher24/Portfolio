import React, { useState, useRef } from 'react';
import './Projects.css';
import ParallaxSection from './ParallaxSection';
import road from '../assets/road.jpg';
import project from '../assets/project.jpg';
import keeppeek from '../assets/keeppeek.jpg';
import fastplaneco from '../assets/fastplaneco.jpg';


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    { image: project, title: 'Projet 1', link: 'https://github.com/MarvynRicher24/NewesOnline' },
    { image: fastplaneco, title: 'fastplaneco', link: 'https://fastplaneco.marvynricher.com' },
    { image: keeppeek, title: 'keeppeek', link: 'https://keeppeek.marvynricher.com' },
    { image: project, title: 'Projet 4', link: 'https://github.com/MarvynRicher24/Angular-Website-Project' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Gestion du swipe uniquement sur mobile
  let startX = null;
  let isTouching = false;

  const handleTouchStart = (e) => {
    if (window.innerWidth > 600) return;
    isTouching = true;
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isTouching || window.innerWidth > 600) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) handleNext();
      else handlePrev();
      isTouching = false;
    }
  };

  const handleTouchEnd = () => {
    isTouching = false;
    startX = null;
  };

  return (
    <ParallaxSection id="projects" backgroundImage={road} nextSectionId="contact">
      <h1>Mes projets :</h1>
      <div className="carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
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