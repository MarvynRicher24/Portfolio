import React, { useState } from 'react';
import './About.css';
import ParallaxSection from './ParallaxSection';
import skyImage from '../assets/sky.jpg';
import moi from '../assets/moi.jpg';
import cv from '../assets/CV.pdf';

const About = () => {
  const [photoZoom, setPhotoZoom] = useState(false);

  return (
    <ParallaxSection id="about" backgroundImage={skyImage} nextSectionId="skills">
      <h1>À propos de moi :</h1>
      <div className="about-container">
        <div className="about-left">
          <img
            src={moi}
            alt="Marvyn Richer"
            className={`about-photo${photoZoom ? ' zoomed' : ''}`}
            onClick={() => setPhotoZoom(true)}
            tabIndex={0}
            style={{ cursor: 'zoom-in' }}
          />
          <div className="about-description">
            <p>
              Ça c'est moi, je m'appelle Marvyn Richer, j’ai 25 ans et j’ai réalisé une reconversion en 2023 pour retourner dans mon domaine de prédilection, l’informatique.
              Passionné par l’innovation numérique, polyvalent, rigoureux et dynamique, avec une grande capacité d’adaptation, je suis toujours partant pour donner le meilleur de moi-même afin de réaliser les meilleurs projets.
            </p>
            <div className="about-cv-buttons">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="about-cv-btn"
              >
                Voir mon CV
              </a>
              <a
                href={cv}
                download="CV_Marvyn_Richer.pdf"
                className="about-cv-btn"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-card">
            <h2>Full Stack Développement</h2>
            <p>
              Pendant mon cursus, j'ai appris à développer des applications, des sites web, des logiciels.
              En plus de maîtriser certaines technologies et d'aimer en découvrir de nouvelles, je recherche toujours à améliorer mes compétences en développement.
            </p>
          </div>
          <div className="about-card">
            <h2>Management de projet</h2>
            <p>
              J'ai également acquis des compétences en gestion de projet, ce qui me permet de coordonner efficacement les équipes et de garantir la réussite des projets.
              Je suis capable de planifier, d'organiser et de superviser les différentes étapes d'un projet pour atteindre les objectifs fixés.
            </p>
          </div>
        </div>
      </div>
      {photoZoom && (
        <div className="photo-modal" onClick={() => setPhotoZoom(false)}>
          <img src={moi} alt="Marvyn Richer" className="photo-modal-img" />
        </div>
      )}
    </ParallaxSection>
  );
};

export default About;