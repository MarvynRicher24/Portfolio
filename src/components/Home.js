import React from 'react';
import './Home.css';
import ParallaxSection from './ParallaxSection';
import spaceImage from '../assets/space.jpg'; // Chemin corrigé

const Home = () => {
  return (
    <ParallaxSection id="home" backgroundImage={spaceImage} nextSectionId="about">
      <h1 className="welcomeTitle">Bienvenue sur mon portfolio en ligne</h1>
      <p>
        Je m'appelle Marvyn Richer, et je suis un développeur Full Stack à la
        recherche d'une alternance pour son master Développeur Full Stack
        commençant en septembre 2025.
      </p>
    </ParallaxSection>
  );
};

export default Home;