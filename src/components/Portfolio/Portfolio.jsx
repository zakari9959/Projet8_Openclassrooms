import React from 'react';
import Project from '../Project/Project';
import projectsData from '../../data/projectsData.json';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <main id="portfolio">
      <h2>Projets réalisés</h2>
      <ul className="projectlist">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            usedSkills={project.usedSkills}
            link={project.link}
            pictures={project.pictures}
          />
        ))}
      </ul>
    </main>
  );
};

export default Portfolio;
