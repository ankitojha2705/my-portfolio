import React from "react";
import educationData from "../data/EducationData";
import "./Education.css";

function Education() {
  return (
    <section className="education-section">
      {/* Title and Subtitle */}
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Academic Background</p>

      {/* Education Cards */}
      <div className="education-container">
        {educationData.map((edu) => (
          <div className="education-card" key={edu.id}>
            {/* Left: Logo */}
            <div className="education-logo">
              <img src={edu.logo} alt={edu.university} />
            </div>

            {/* Right: Details */}
            <div className="education-info">
              <h3 className="university-name">{edu.university}</h3>
              <p className="degree">{edu.degree}</p>
              {edu.gpa && <p className="gpa">{edu.gpa}</p>}

              {/* Coursework */}
              <h4>Key Coursework</h4>
              <ul className="coursework-list">
                {edu.coursework.map((course, index) => (
                  <li key={index}>• {course}</li>
                ))}
              </ul>
            </div>

            {/* Graduation Date */}
            <div className="graduation-date">{edu.graduationDate}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
