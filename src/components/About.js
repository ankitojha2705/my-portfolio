// src/components/About.js
import React from 'react';
import './About.css';
import profilePic from '../assets/profilepic.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>Hi, I'm <span className="highlight">Ankit Ojha</span></h1>
              <h2>MS Computer Software Engineering @ SJSU / Software Engineer</h2>
              <p className="subtitle">Actively Looking for Summer 2025 Tech Internships</p>
              
              <div className="about-buttons">
                <a href="#contact" className="cta-button">
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cta-button outline"
                >
                  Download Resume 
                  <span role="img" aria-label="resume icon">📄</span>
                </a>
              </div>
            </div>
            
            <div className="about-hero-image">
              <img src={profilePic} alt="Ankit Ojha" className="profile-image" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p className="intro-text">
              I'm a passionate Software Engineer with expertise in building robust and scalable applications. 
              Currently pursuing my Master's in Computer Software Engineering at San Jose State University.
            </p>
            <div className="details">
              <p>
                With experience in full-stack development and a strong foundation in computer science principles, 
                I enjoy turning complex problems into simple, beautiful, and intuitive solutions.<br></br><br></br>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities.
              </p>
            </div>
            {/* <div className="skills-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PostgreSQL</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;