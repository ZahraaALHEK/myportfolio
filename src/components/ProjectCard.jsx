
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'transform 0.2s',
  };

  const titleStyle = {
    color: 'var(--primary-color)',
    marginBottom: '0.5rem',
  };

  const skillTagStyle = {
    background: '#f0f0f0',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    marginRight: '8px',
    display: 'inline-block',
    marginBottom: '8px'
  };

  return (
    <div style={cardStyle}>
      {project.images && project.images.length > 0 && (
        <img 
          src={project.images[0]} 
          alt={project.name} 
          style={{ width: '100%', borderRadius: '4px', height: '200px', objectFit: 'cover' }} 
        />
      )}
      <div>
        <h3 style={titleStyle}>{project.name}</h3>
        {project.description && (
          <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
            {project.description}
          </p>
        )}
        <div>
          {project.skills.map((skill, index) => (
            <span key={index} style={skillTagStyle}>{skill}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <Button href={project.link} variant="outline">View Project</Button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
