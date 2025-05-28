import React, { useState } from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ id, backgroundImage, children, nextSectionId }) => {
  const [showArrow] = useState(true);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section id={id} className="parallax" style={sectionStyle}>
      <div className="content">{children}</div>
      {showArrow && nextSectionId && (
        <div className="down-arrow" onClick={scrollToNextSection}>
          ↓
        </div>
      )}
    </section>
  );
};

export default ParallaxSection;