import React from 'react';
import aboutData from '../../data/aboutData.json';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <h2>A Propos</h2>
      <p>
        <strong>Localisation:</strong> {aboutData.location}
      </p>
      <p>
        <strong>Âge:</strong> {aboutData.age}ans
      </p>
      <p>
        <strong>Langues:</strong> {aboutData.langage}
      </p>
      <p>
        <strong>Disponibilité:</strong> {aboutData.availablity}
      </p>
      <p>
        <strong>Permis B</strong>
      </p>
    </section>
  );
};

export default About;