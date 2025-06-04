import React, { useState } from 'react';
import './About.css';
import ParallaxSection from './ParallaxSection';
import orbit from '../assets/orbit.jpg';
import moi from '../assets/moi.jpg';
import cv from '../assets/CV.pdf';

const About = () => {
  const [photoZoom, setPhotoZoom] = useState(false);

  return (
    <ParallaxSection id="about" backgroundImage={orbit} nextSectionId="domains">
      <h1>Qui suis-je ?</h1>
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