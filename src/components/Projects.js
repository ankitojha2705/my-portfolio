// src/components/Projects.js
import React from "react";
import projectsData from "../data/projectsData"; // Ensure the correct import path
import "./Projects.css";

function Projects() {
  return (
    <section className="featured-projects" id="projects">
      {/* Title & Subtitle */}
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Showcasing my technical expertise through real-world applications
      </p>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Left Side: Project Image */}
            <div className="project-media">
              
              <img src={project.image} 
              alt={project.alt} 
              className={`project-image ${project.id === 2  ? 'special-size' : ''}`}
              />
            
              <div className="buttons">
                <a href="#" className="btn btn-primary">View Demo</a>
                <a href="#" className="btn btn-outline">Source Code</a>
              </div>
            </div>

            {/* Right Side: Project Info */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-tech-stack">{project.techStack}</p>
              <ul>
                {project.descriptionPoints.map((point, index) => (
                  <li key={index}>➤ {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
