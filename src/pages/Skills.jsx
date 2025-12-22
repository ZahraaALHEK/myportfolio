
import React from 'react';
import skills from '../data/skills';
import SkillCategory from '../components/SkillCategory';

const Skills = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '2rem' }}>Technical Skills</h2>
      <div>
        {skills.map((category, index) => (
          <SkillCategory 
            key={index} 
            title={category.category} 
            skills={category.items} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
