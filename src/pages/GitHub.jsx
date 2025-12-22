
import React from 'react';
import Button from '../components/Button';

const GitHub = () => {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const cardStyle = {
    backgroundColor: 'var(--accent-color)',
    color: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const focusItems = [
    { title: 'Validation', description: 'Ensuring data integrity at every step.' },
    { title: 'Clean Architecture', description: 'Separation of concerns.' },
    { title: 'Error Handling', description: 'Graceful failures and logging.' },
    { title: 'Security', description: 'Implementing best practices.' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '2rem' }}>Code & Contribution</h2>
      
      <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
        I believe in open source and transparent coding practices. 
        Check out my code to see how I structure my projects and handle edge cases.
      </p>

      <Button href="https://github.com/ZahraaALHEK">Visit My GitHub</Button>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>What I Focus On</h3>
        <div style={cardContainerStyle}>
          {focusItems.map((item, index) => (
            <div key={index} style={cardStyle}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHub;
