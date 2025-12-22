
import React from 'react';
import PropTypes from 'prop-types';

const SkillCategory = ({ title, skills }) => {
  const containerStyle = {
    marginBottom: '2rem',
  };

  const titleStyle = {
    borderBottom: '2px solid var(--accent-color)',
    display: 'inline-block',
    marginBottom: '1rem',
    paddingBottom: '0.25rem',
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const itemStyle = {
    backgroundColor: '#fff',
    border: '1px solid var(--secondary-color)',
    padding: '10px 15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={listStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={itemStyle}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCategory;
