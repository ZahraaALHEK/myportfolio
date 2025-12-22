
import React from 'react';
import experiences from '../data/experiences';

const About = () => {
  const containerStyle = {
    maxWidth: '1200px', // Increased width for row layout
    margin: '0 auto',
    padding: '2rem',
  };

  const headerStyle = {
    marginBottom: '2rem',
    borderBottom: '2px solid var(--primary-color)',
    display: 'inline-block',
    color: 'var(--primary-color)'
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
    justifyContent: 'space-between',
    alignItems: 'stretch', // Ensure equal height
    flexWrap: 'wrap', // Responsive wrapping
  };

  const cardBaseStyle = {
    flex: 1,
    minWidth: '280px', // Prevent too narrow columns on small screens
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>About Me</h2>
      
      <div style={flexContainerStyle}>
        
        {/* Card 1: Primary Color */}
        <section style={{ ...cardBaseStyle, backgroundColor: 'var(--primary-color)' }}>
          <h3>Background</h3>
          <p style={{ marginTop: '1rem' }}>
            I am a dedicated developer with a strong focus on backend technologies and system architecture.
            My journey started with building small tools and evolved into architecting scalable solutions.
          </p>
        </section>

        {/* Card 2: Secondary Color */}
        <section style={{ ...cardBaseStyle, backgroundColor: 'var(--secondary-color)', color: 'var(--accent-color)' }}>
          <h3>What I Solve</h3>
          <p style={{ marginTop: '1rem' }}>
            I love tackling complex data problems, optimizing database queries, and ensuring API reliability.
            Turning messy data into structured APIs is my specialty.
          </p>
        </section>

        {/* Card 3: Accent Color */}
        <section style={{ ...cardBaseStyle, backgroundColor: 'var(--accent-color)' }}>
          <h3>Mindset</h3>
          <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
            <li>Write clean, maintainable code</li>
            <li>Scalability first</li>
            <li>Thorough validation and error handling</li>
          </ul>
        </section>

      </div>

      {/* Education Section */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', color: 'var(--primary-color)' }}>Education</h2>
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '2rem auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Master 1 (M1) in Computer Science</h3>
            <p style={{ color: '#666', fontStyle: 'italic' }}>Lebanese University</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Bachelor's Degree in Computer Science</h3>
            <p style={{ color: '#666', fontStyle: 'italic' }}>Lebanese University</p>
          </div>
        </div>
      </div>

      {/* Professional Experiences Section */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', color: 'var(--primary-color)' }}>Professional Experiences</h2>
        <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
          {experiences.map((exp) => (
            <div key={exp.id} style={{ 
              backgroundColor: '#f9f9f9', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              marginBottom: '1.5rem',
              borderLeft: '4px solid var(--accent-color)'
            }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{exp.name}</h3>
              <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{exp.companyName}</p>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{exp.date}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.skills.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: 'var(--secondary-color)',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.85rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
