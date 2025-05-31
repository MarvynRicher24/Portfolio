import React from 'react';
import './Home.css';
import ParallaxSection from './ParallaxSection';
import spaceImage from '../assets/space.jpg'; // Chemin corrigé

const Home = () => {
  return (
    <ParallaxSection id="home" backgroundImage={spaceImage} nextSectionId="about">
      <div className="homeContainer">
        <h1 className="welcomeTitle">Bienvenue sur mon CV/Portfolio</h1>
        <div className="homeDescription">
          <h2 className="homeSubtitle">Marvyn Richer</h2>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Home;