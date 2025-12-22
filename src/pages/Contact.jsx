

const Contact = () => {
 
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  };

  const linkStyle = {
    display: 'block',
    fontSize: '1.2rem',
    margin: '1rem 0',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    textDecoration: 'none'
  }


  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '2rem' }}>Get In Touch</h2>
      <p>I am currently open to new opportunities. Feel free to reach out!</p>
      
      <div style={{ marginTop: '2rem' }}>
        <a href="mailto:zahraahek628@gmail.com" style={linkStyle}>
          zahraahek628@gmail.com
        </a>
       

        <a href="https://www.linkedin.com/in/zahraa-hek-720bb12a2" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn Profile
        </a>
        <a href="https://github.com/ZahraaALHEK" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Contact;
