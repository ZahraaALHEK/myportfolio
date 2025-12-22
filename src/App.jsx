
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import GitHub from './pages/GitHub';
import Contact from './pages/Contact';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const sectionStyle = {
    padding: '4rem 0',
    borderBottom: '1px solid #eee'
  };

  // Add alternating backgrounds or specific styles if needed
  
  return (
    <div style={appStyle}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <section id="home" style={{ ...sectionStyle, padding: 0, borderBottom: 'none' }}>
          <Home />
        </section>
        
        <section id="about" style={sectionStyle}>
          <About />
        </section>
        
        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>
        
        <section id="skills" style={sectionStyle}>
          <Skills />
        </section>
        
        <section id="github" style={sectionStyle}>
          <GitHub />
        </section>
        
        <section id="contact" style={sectionStyle}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
