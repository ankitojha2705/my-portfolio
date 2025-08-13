import React from "react";
import experienceData from "../data/ExperienceData";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      {/* Title and Subtitle */}
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">My journey through various tech roles</p>

      {/* Experience Timeline */}
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}>
            {/* Left: Job Details */}
            <div className="experience-details">
              <div className="company-logo">
                <img src={exp.companyLogo} alt={exp.company} />
              </div>
              <div className="job-info">
                <h3 className="job-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <ul className="job-description">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>▸ {point}</li>
                  ))}
                </ul>
                {/* Tech Stack Tags */}
                {/* <div className="tech-tags">
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Right: Date and Location */}
            <div className="experience-meta">
              <span className="date">{exp.duration}</span>
              <span className="location">{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
