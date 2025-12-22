
import React from 'react';


const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'var(--bg-color)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    textDecoration: 'none',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={logoStyle}>MyPortfolio</a>
      <div style={linkContainerStyle}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
