import React from 'react';
import skills from '../../data/skillsData.json';
import './SkillsList.css';
import Skill from '../Skill/Skill';

const SkillsList = () => {
  return (
    <section id="skills">
      <ul className="skills__list">
        {skills.map((skill, index) => (
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
