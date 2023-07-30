import React from 'react';
import skills from '../../data/skillsData.json';
import './SkillsList.css';

const Skill = ({ name, description, symbolUrl }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={symbolUrl} alt="symbole de la compétences"></img>
      <h3>{description}</h3>
    </li>
  );
};

const SkillsList = () => {
  return (
    <section id="skills">
      <ul>
        {skills.map((skill, index, symbolUrl) => (
          <Skill
            key={index}
            name={skill.name}
            description={skill.description}
            symbolUrl={skill.symbolUrl}
          />
        ))}
      </ul>
    </section>
  );
};
export default SkillsList;
