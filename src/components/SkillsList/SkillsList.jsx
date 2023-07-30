import React from 'react';
import skills from '../../data/skillsData.json';

const Skill = ({ name, description }) => {
  return (
    <li>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </li>
  );
};

const SkillsList = () => {
  return (
    <section id="skills">
      <ul>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default SkillsList;
