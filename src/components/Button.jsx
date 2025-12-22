
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, href, variant = 'primary', className = '' }) => {
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s, transform 0.2s',
    border: 'none',
    cursor: 'pointer',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary-color)',
      color: '#fff', 
    },
    secondary: {
      backgroundColor: 'var(--secondary-color)',
      color: '#333',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '2px solid var(--primary-color)',
      color: 'var(--primary-color)',
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  if (href) {
    return (
      <a href={href} style={style} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
};

export default Button;
