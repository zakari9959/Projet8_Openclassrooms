import React, { useState, useEffect } from 'react';
import fleche from '../../../public/assets/fleche--droite.svg';
import './Project.css';

const Project = ({ title, description, usedSkills, link, pictures }) => {
  const [images] = useState(pictures);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slide-left');

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSlideDirection('slide-left');
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSlideDirection('slide-right');
  };

  useEffect(() => {
    const carouselInterval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(carouselInterval);
  }, [images]);

  const currentImage = images[currentIndex];

  return (
    <li className="project">
      <div className="carousel">
        <img
          src={currentImage}
          alt=""
          className={`carousel__image ${slideDirection}`}
        />
        {images.length > 1 && (
          <div>
            <img
              src={fleche} //Gauche
              alt="Cliquer sur le bouton précédent"
              className="carousel__button carousel__button--left"
              onClick={goToPrevSlide}
            />
            <p className="carousel__count">
              {currentIndex + 1}/{images.length}
            </p>
            <img
              src={fleche}
              alt="Cliquer sur le bouton suivant"
              className="carousel__button carousel__button--right"
              onClick={goToNextSlide}
            />
          </div>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <h3>Technologies utilisées</h3>
        {usedSkills.map((usedSkill, index) => (
          <li key={index}>{usedSkill}</li>
        ))}
      </ul>
      <a href={link}>Repo GitHub</a>
    </li>
  );
};

export default Project;
