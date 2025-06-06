import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Domains from './components/Domains';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Domains />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;