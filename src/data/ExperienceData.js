// src/data/ExperienceData.js
const experienceData = [
    {
      id: 1,
      title: "Software Engineer II",
      company: "Cisco Systems",
      companyLogo: require("../assets/cisco.png"), // Update with actual logo path
      location: "San Jose, CA, USA",
      duration: "May 2025 - August 2025",
      description: [
        "Developed a Python framework to validate payloads across 1500+ REST API endpoints in FMC, improving documentation quality via a weekly pipeline that flags invalid examples, generates reports, and alerts the team.",
        "Fixed critical pagination issues in high-traffic API endpoints by developing a customised sorting annotation. Ensured consistent data retrieval across multiple requests, significantly improving end-user experience in FMC REST API.",
      ],
      // techStack: ["Python", "REST API"],
    },
    {
      id: 2,
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
      // techStack: ["PostgreSQL", "C", "Python", "Oracle"],
    },
    {
      id: 3,
      title: "Associate Software Engineer",
      company: "Accenture",
      companyLogo: require("../assets/accenture.png"), // Update with actual logo path
      location: "Noida, India",
      duration: "Aug 2021 - Nov 2022",
      description: [
        "Engineered an attendance tracking system using YOLOv7 with TensorFlow and Keras, reducing manual tracking by 15%.",
        "Analyzed the face recognition attendance system using Python, NumPy, and Pandas, boosting efficiency by 30%.",
      ],
      // techStack: ["YOLOv7", "TensorFlow", "Keras", "Python"],
    },
  ];
  
  export default experienceData;
  