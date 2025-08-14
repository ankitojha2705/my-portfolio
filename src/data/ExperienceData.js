// src/data/ExperienceData.js
const experienceData = [
    {
      id: 1,
      title: "Software Engineer II",
      company: "Cisco Systems",
      companyLogo: require("../assets/cisco.png"), // Update with actual logo path
      location: "San Jose, CA, USA",
      duration: "May 2025 - Aug 2025",
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
        "Developed and maintained an enterprise-level Full-Stack Web application for 700K+ employees, utilizing React, Angular, Node.js, ExpressJS, and MySQL database with responsive design patterns and robust security features.",
        `Optimized response times by 30%, migrated legacy systems to modern frameworks (reducing technical debt by 40%),
        and improved overall maintainability through comprehensive code refactoring and documentation.`,
        `Designed RESTful APIs, implemented CI/CD pipelines with Jenkins and Docker, cutting release cycles by 50%,
        and collaborated on microservices architecture for enhanced scalability, performance, and reliability.,`
      ],
      // techStack: ["PostgreSQL", "C", "Python", "Oracle"],`
    },
    {
      id: 3,
      title: "Associate Software Engineer",
      company: "Accenture",
      companyLogo: require("../assets/accenture.png"), // Update with actual logo path
      location: "Noida, India",
      duration: "Aug 2021 - Nov 2022",
      description: [
        "Developed high-performance web applications using Angular, React, and Node.js, improving user experience & query efficiency by 30%. Implemented responsive design patterns and optimized DB queries to enhance platform reliability.",
        "Enhanced code quality with unit/integration tests achieved 90% coverage and code reviews, decreasing production bugs by 30%. Implemented automated testing protocols and assisted developers in maintaining coding standards.",
      ],
      // techStack: ["YOLOv7", "TensorFlow", "Keras", "Python"],
    },
  ];
  
  export default experienceData;
  