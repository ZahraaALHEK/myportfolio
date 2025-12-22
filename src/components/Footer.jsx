
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--secondary-color)',
    color: '#333',
    padding: '2rem',
    textAlign: 'center',
    marginTop: 'auto', // Push to bottom if content is short
  };

  return (
    <footer style={footerStyle}>
      <p>&copy;Zahraa ELHEK {new Date().getFullYear()} MyPortfolio. Built with React.</p>
    </footer>
  );
};

export default Footer;
