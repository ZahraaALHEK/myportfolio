
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '2rem' }}>My Projects</h2>
      <div style={gridStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
