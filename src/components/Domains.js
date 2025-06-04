import React, { useState } from 'react';
import './Domains.css';
import ParallaxSection from './ParallaxSection';
import skyImage from '../assets/sky.jpg';
import moi from '../assets/moi.jpg';

const Domains = () => {
  const [photoZoom, setPhotoZoom] = useState(false);

  return (
    <ParallaxSection id="domains" backgroundImage={skyImage} nextSectionId="skills">
      <h1>Mes domaines :</h1>
      <div className="about-domain">
        <div className="about-right">
          <div className="about-dev">
            <h2>Full Stack Développement</h2>
            <p>
              Pendant mon cursus, j'ai appris à développer des applications, des sites web, des logiciels.
              En plus de maîtriser certaines technologies et d'aimer en découvrir de nouvelles, je recherche toujours à améliorer mes compétences en développement.
            </p>
          </div>
          <div className="about-project">
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

export default Domains;