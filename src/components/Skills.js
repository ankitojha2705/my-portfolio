import React, { useState } from "react";
import skillsData from "../data/SkillsData";
import "./Skills.css";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All Skills");

  const filteredSkills =
    selectedCategory === "All Skills"
      ? Object.entries(skillsData)
      : [[selectedCategory, skillsData[selectedCategory]]];

  return (
    <section className="skills-section">
      {/* Title and Subtitle */}
      <h2 className="section-title">Technical Arsenal</h2>
      <p className="section-subtitle">Hover over skills to explore details</p>

      {/* Category Filter Buttons */}
      <div className="skill-filters">
        {["All Skills", "Languages", "Development", "Tools", "ML/AI"].map(
          (category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Skills Display */}
      <div className="skills-container">
        {filteredSkills.map(([category, skills]) => (
          <div className="skill-card" key={category}>
            <h3 className="skill-category">{category}</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="skill-bar">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="percentage">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
