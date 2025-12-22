
import React from 'react';
import Button from '../components/Button';

const Home = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '4rem 2rem',
    textAlign: 'center',
  };

  const nameStyle = {
    fontSize: '3rem',
    color: 'var(--primary-color)',
    marginBottom: '0.5rem',
  };

  const roleStyle = {
    fontSize: '1.5rem',
    color: '#666',
    marginBottom: '2rem',
  };

  const buttonContainer = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const wrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '8rem', // Space for wave at top
  };

  const waveStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: -1,
    transform: 'rotate(180deg)',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={nameStyle}>Zahraa ELHEK</h1>
        <h2 style={roleStyle}>Backend / Full-Stack Developer</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          Specialized in building scalable APIs and robust backend systems. 
          Passionate about clean code and efficient architecture.
        </p>
        
        <div style={buttonContainer}>
          <Button href="/projects">View Projects</Button>
          <Button href="https://github.com/ZahraaALHEK" variant="outline">GitHub Profile</Button>
        </div>
        
        <div style={{ marginTop: '4rem' }}>
          <h3>Tech Stack</h3>
          <p>React • Node.js • Express • MongoDB • SQL</p>
        </div>
      </div>
      
      {/* Wave SVG */}
      <svg style={waveStyle} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--accent-color)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Home;
