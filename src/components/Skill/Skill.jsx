import React from 'react';
import '../Skill/Skill.css';

const Skill = ({ name, description, symbolUrl }) => {
  return (
    <li className="skill">
      <h2>{name}</h2>
      <img
        src={process.env.PUBLIC_URL + symbolUrl}
        alt="symbole de la compétences"
      ></img>
      <ul className="skill__description">
        {description.map((desc, index) => (
          <li key={index} className="skill__description__desc">
            {desc}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Skill;
