const projectsData = [
    
    {
      id: 1,
      title: "NextMeal: Restaurant Discovery Platform",
      date: "Dec 2024",
      techStack: "React, NodeJS, Flask, Redis, Elasticsearch, FAISS",
      descriptionPoints: [
        "Developed a scalable platform with an AI assistant utilizing Retrieval-Augmented Generation (RAG) and FAISS to deliver personalized restaurant recommendations and seamless reservation services.",
        "Implemented a microservices architecture with asynchronous messaging queues, Redis caching, and Elasticsearch, improving system performance, scalability, and user experience by 30%."
      ],
      image: require("../assets/project2.png"), // or wherever your image is located
      alt: "NextMeal project "
    },
    {
      id: 2,
      title: "CodeQuery: Inspired by Stack Overflow",
      date: "Oct 2024",
      techStack: "React, Javascript, NodeJS, ExpressJS, MySQL",
      descriptionPoints: [
        "Developed CodeQuery, a full-stack web app inspired by Stack Overflow, with features for posting, voting, commenting, and marking answers using React, Node.js, and MySQL.",
        "Optimized MySQL schema for performance and scalability, enhanced UI/UX with responsive design, and implemented sorting, filtering, and user authentication via Express.js and RESTful APIs."
      ],
      image: require("../assets/QAlogo.webp"),
      alt: "CodeQuery project logo"
    },
    {
      id: 3,
      title: "Unsupervised Machine Learning for Customer Segmentation",
      date: "Sept 2024",
      techStack: "Python, PCA, K-Means, NLTK, spaCy",
      descriptionPoints: [
        "Developed a machine learning model to analyze customer data and identify distinct segments via transaction behavior.",
        "Implemented unsupervised learning models, including PCA & K-Means, to analyze & segment customer data.",
        "Identified distinct customer segments via transaction behavior, enabling effective targeted marketing campaigns."
      ],
      image: require("../assets/segmente.png"),
      alt: "CodeQuery project logo"
    }
  ];
  
  export default projectsData;


  
  