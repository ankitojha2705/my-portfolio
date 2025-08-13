// src/components/Hero.js
import React from 'react';
import './Hero.css'; // We'll define styles in Hero.css
import profileImage from '../assets/profilepic.jpg'; // Example path to your image

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I&apos;m Ankit!</h1>
          <h3>MS Computer Software Engineering Student @ SJSU / Software Engineer</h3>
          <p>Actively Looking for Summer 2025 Tech Internships</p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline"
            >
              Download Resume 
              <span role="img" aria-label="resume icon">📄</span>
            </a>
          </div>
          
          <div className="hero-socials">
            <a 
              href="https://github.com/ankitojha2705" 
              target="_blank" 
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/ankit-ojha27051999/" 
              target="_blank" 
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Add more socials if you want */}
          </div>
        </div>
        
        <div className="hero-image">
          <img src={profileImage} alt="Ankit pic" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
