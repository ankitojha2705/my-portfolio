// src/data/ExperienceData.js
const experienceData = [
    {
      id: 1,
      title: "Software Engineering Analyst",
      company: "Accenture",
      companyLogo: require("../assets/accenture.png"), // Update with actual logo path
      location: "Noida, India",
      duration: "Nov 2022 - Jul 2024",
      description: [
        "Contributed as a junior developer on OCI C driver for PostgreSQL, achieving improved Oracle compatibility through reverse engineering.",
        "Optimized & enhanced ODBC C driver for PostgreSQL databases with Oracle compatibility, resulting in performance gain in query executions.",
        "Resolved 20+ critical issues in the Python driver for Apache AGE project as an open-source contributor.",
      ],
      techStack: ["PostgreSQL", "C", "Python", "Oracle"],
    },
    {
      id: 2,
      title: "Associate Software Engineer",
      company: "Accenture",
      companyLogo: require("../assets/accenture.png"), // Update with actual logo path
      location: "Noida, India",
      duration: "Aug 2021 - Nov 2022",
      description: [
        "Engineered an attendance tracking system using YOLOv7 with TensorFlow and Keras, reducing manual tracking by 15%.",
        "Analyzed the face recognition attendance system using Python, NumPy, and Pandas, boosting efficiency by 30%.",
      ],
      techStack: ["YOLOv7", "TensorFlow", "Keras", "Python"],
    },
  ];
  
  export default experienceData;
  