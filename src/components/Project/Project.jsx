import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = ({ title, description, usedSkills, link, link2, pictures }) => {
  const [imagesIndex] = useState(pictures);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slide-left');
  const [carouselIntervalTime] = useState(5000);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesIndex.length);
    setSlideDirection('slide-left');
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesIndex.length) % imagesIndex.length
    );
    setSlideDirection('slide-right');
  };

  useEffect(() => {
    const carouselInterval = setInterval(goToNextSlide, carouselIntervalTime);
    return () => clearInterval(carouselInterval);
  }, [currentIndex, carouselIntervalTime]);

  const currentImageIndex = imagesIndex[currentIndex];

  return (
    <li className="project">
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + currentImageIndex}
          alt="Capture d'écran du projet dans un carousel"
          className={`carousel__image ${slideDirection}`}
        />
        {imagesIndex.length > 1 && (
          <div>
            <img
              src={process.env.PUBLIC_URL + '/docs/assets/fleche--droite.svg'} //Gauche
              alt="Cliquer sur le bouton précédent"
              className="carousel__button carousel__button--left"
              onClick={() => {
                goToPrevSlide();
              }}
            />
            <p className="carousel__count">
              {currentIndex + 1}/{imagesIndex.length}
            </p>
            <img
              src={process.env.PUBLIC_URL + '/docs/assets/fleche--droite.svg'}
              alt="Cliquer sur le bouton suivant"
              className="carousel__button carousel__button--right"
              onClick={() => {
                goToNextSlide();
              }}
            />
          </div>
        )}
      </div>
      <div className="project__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project__text--flex">
          <div className="usedskills--flex">
            <h3>Technologies utilisées</h3>
            <ul className="usedskills">
              {usedSkills.map((usedSkill, index) => (
                <li key={index}>{usedSkill}</li>
              ))}
            </ul>
          </div>
          <div className="liengit--flex">
            <a href={link} className="liengit">
              Lien vers le répo Github
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
