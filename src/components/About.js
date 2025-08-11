// src/components/About.js
import React from 'react';
import './About.css';
import profilePic from '../assets/profilepic.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Ankit Ojha, a passionate web developer with experience in
            building responsive, user-friendly websites. I enjoy creating beautiful
            interfaces and seamless experiences.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default About;
