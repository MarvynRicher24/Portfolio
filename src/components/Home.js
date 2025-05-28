import React from 'react';
import './Home.css';
import ParallaxSection from './ParallaxSection';
import spaceImage from '../assets/space.jpg'; // Chemin corrigé

const Home = () => {
  return (
    <ParallaxSection id="home" backgroundImage={spaceImage} nextSectionId="about">
      <h1 className="welcomeTitle">Bienvenue sur mon portfolio en ligne</h1>
    </ParallaxSection>
  );
};

export default Home;