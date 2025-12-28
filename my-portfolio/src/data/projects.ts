export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "mobile" | "desktop" | "web" | "database";
  technologies: string[];
  features: string[];
  images: string[];
  github?: string;
  demo?: string;
  team?: { name: string; role: string }[];
  supervisor?: string;
  highlights?: string[];
}

export const mainProjects: Project[] = [
  {
    id: "ntic-safe",
    title: "NTIC Safe",
    shortDescription: "Smart safety and rescue mobile application using IoT sensors and AI for emergency management",
    fullDescription: "NTIC Safe is an innovative mobile application designed for the National Technical Institute of Computer Science (NTIC) at Constantine 2 University. The app integrates IoT sensors, AI-powered chatbot, and real-time monitoring to ensure safety and efficient emergency response. It detects risks automatically, sends instant alerts, and provides dynamic evacuation plans.",
    category: "mobile",
    technologies: ["Flutter", "Django", "Python", "IoT Sensors", "AI/ML", "Firebase", "Google Maps API"],
    features: [
      "Automatic risk detection via IoT sensors",
      "Real-time emergency alerts and notifications",
      "AI-powered chatbot for emergency assistance",
      "Dynamic evacuation plans with interactive maps",
      "Multi-user roles: Admin, Technician, Rescuer, User",
      "Historical incident tracking and analytics",
      "Push notifications for critical alerts"
    ],
    images: ["/projects/ntic-safe-1.png", "/projects/ntic-safe-2.png"],
    team: [
      { name: "Larkem Ayoub", role: "Lead Developer" },
      { name: "Guergouri Anis", role: "Developer" },
      { name: "Imami Ilyes Abderraouf", role: "Developer" }
    ],
    supervisor: "Dr. Djenouhat Manel",
    highlights: [
      "Integration of 4+ IoT sensor types",
      "AI chatbot with 95%+ accuracy",
      "Real-time map visualization",
      "Business Model Canvas validated"
    ]
  },
  {
    id: "javafx-classifier",
    title: "Multi-threaded Image Classifier",
    shortDescription: "Desktop application for concurrent image classification using Java multithreading",
    fullDescription: "A sophisticated JavaFX desktop application that implements multi-threaded image classification. The project demonstrates advanced Java concurrency concepts including ExecutorService, ThreadPoolExecutor, and thread-safe resource management. It efficiently processes multiple images simultaneously, significantly improving classification performance.",
    category: "desktop",
    technologies: ["Java", "JavaFX", "Concurrency API", "ExecutorService", "ThreadPoolExecutor"],
    features: [
      "Multi-threaded image processing",
      "Thread-safe resource management",
      "Concurrent image classification",
      "Performance optimization",
      "User-friendly JavaFX interface",
      "Progress tracking for batch operations",
      "Configurable thread pool size"
    ],
    images: ["/projects/javafx-1.png", "/projects/javafx-2.png"],
    github: "https://github.com/AYOUB-lar",
    highlights: [
      "50%+ performance improvement with threading",
      "Clean separation of UI and processing",
      "Robust error handling for concurrent operations"
    ]
  },
  {
    id: "agricultural-platform",
    title: "Agricultural Expert Platform",
    shortDescription: "Database platform connecting beginner farmers with agricultural experts",
    fullDescription: "A comprehensive database-driven platform designed to create an ecosystem connecting beginner farmers with agricultural experts. The platform enables knowledge exchange, educational resource sharing, workshop organization, and direct product sales. Built with MySQL featuring 8 normalized tables, stored procedures, triggers, and role-based access control.",
    category: "database",
    technologies: ["MySQL", "SQL", "Stored Procedures", "Triggers", "Database Design"],
    features: [
      "8 normalized database tables",
      "3 user roles with different permissions",
      "Event management and registration",
      "Educational resources (videos, tutorials)",
      "Agricultural product marketplace",
      "Admin validation system",
      "Automated triggers for data integrity"
    ],
    images: ["/projects/agri-1.png"],
    highlights: [
      "Complete ER diagram implementation",
      "Role-based security (Admin, Expert, Farmer)",
      "Stored procedures for complex operations",
      "Transaction isolation for data consistency"
    ]
  },
  {
    id: "car-selling-website",
    title: "Car Selling Platform",
    shortDescription: "Modern frontend website for automotive marketplace",
    fullDescription: "A sleek and responsive frontend website for a car-selling platform. Built with HTML5 and CSS3, focusing on modern design principles, responsive layouts, and optimal user experience. The project demonstrates strong frontend development skills and attention to UI/UX details.",
    category: "web",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
    features: [
      "Responsive design for all devices",
      "Modern CSS layouts with Flexbox/Grid",
      "Interactive UI elements",
      "Clean and intuitive navigation",
      "Car listing showcase",
      "Contact and inquiry forms"
    ],
    images: ["/projects/car-1.png"],
    github: "https://github.com/AYOUB-lar/caw-labs",
    highlights: [
      "Mobile-first responsive design",
      "CSS animations and transitions",
      "Semantic HTML structure"
    ]
  },
  {
    id: "association-aid-manager",
    title: "Association Aid Manager",
    shortDescription: "Mobile app for charity organizations to manage and prioritize aid beneficiaries",
    fullDescription: "A comprehensive mobile application designed to help charity associations manage and prioritize aid beneficiaries. The app features an intelligent ranking system that considers multiple factors and conditions to fairly distribute aid. It supports Arabic interface and includes beneficiary categorization, detailed profiles, and scoring systems.",
    category: "mobile",
    technologies: ["Mobile Development", "Database", "Arabic UI"],
    features: [
      "Beneficiary ranking and prioritization",
      "Multiple category management (القائمة، القريب، البعيد، التوصيل)",
      "Detailed beneficiary profiles with scoring",
      "Arabic language interface",
      "Family composition tracking",
      "Aid distribution management"
    ],
    images: ["/projects/aid-1.png", "/projects/aid-2.png"],
    highlights: [
      "Fair algorithmic ranking system",
      "Complete beneficiary database",
      "RTL Arabic interface support"
    ]
  }
];

export interface Lab {
  id: string;
  number: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export const labs: Lab[] = [
  {
    id: "lab1-html",
    number: 1,
    title: "HTML & CSS Fundamentals",
    description: "Building responsive web pages with HTML5 and CSS3 basics, including the Palestine Card project",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/AYOUB-lar/caw-labs"
  },
  {
    id: "lab2-css",
    number: 2,
    title: "Advanced CSS Styling",
    description: "Advanced CSS techniques including Flexbox, Grid, animations, and modern layout patterns",
    technologies: ["CSS3", "Flexbox", "Grid"],
    github: "https://github.com/AYOUB-lar/caw-labs"
  },
  {
    id: "lab4-jest",
    number: 4,
    title: "Unit Testing with Jest",
    description: "Implementing comprehensive unit tests using Jest framework for JavaScript applications",
    technologies: ["Jest", "JavaScript", "Testing"],
    github: "https://github.com/AYOUB-lar/caw-labs"
  },
  {
    id: "lab5-react",
    number: 5,
    title: "ReactJS Components",
    description: "Building reusable React components with props, state management, and hooks",
    technologies: ["React", "JavaScript", "JSX"],
    github: "https://github.com/AYOUB-lar/caw-labs"
  },
  {
    id: "lab7-kanban",
    number: 7,
    title: "Kanban Board",
    description: "Full Kanban board implementation similar to Trello with drag-and-drop functionality",
    technologies: ["React", "Vite", "Drag & Drop"],
    github: "https://github.com/AYOUB-lar/caw-labs"
  }
];

export const skills = {
  frontend: [
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 }
  ],
  backend: [
    { name: "Django", level: 85 },
    { name: "Python", level: 90 },
    { name: "Node.js", level: 70 }
  ],
  mobile: [
    { name: "Flutter", level: 85 },
    { name: "React Native", level: 70 }
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "Firebase", level: 80 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 65 },
    { name: "Figma", level: 75 },
    { name: "Photoshop", level: 80 }
  ],
  other: [
    { name: "Java/JavaFX", level: 80 },
    { name: "C++", level: 75 },
    { name: "IoT", level: 70 },
    { name: "AI/ML Basics", level: 65 }
  ]
};

export const personalInfo = {
  name: "Ayoub Larkem",
  title: "Full Stack Developer",
  email: "ayoub.larkem@univ-constantine2.dz",
  github: "https://github.com/AYOUB-lar",
  linkedin: "",
  location: "Mila, Algeria",
  university: "University Constantine 2 - Abdelhamid Mehri",
  degree: "Master STIC (2022-2025)",
  department: "NTIC - Software Engineering",
  activities: [
    "President of Razi Scientific Association",
    "Scout Leader",
    "Photography Enthusiast",
    "Sports & Fitness"
  ],
  summary: "Passionate software engineering student with expertise in full-stack development, mobile applications, and database systems. Experienced in building innovative solutions using modern technologies including Flutter, Django, React, and MySQL. Strong background in IoT integration and AI-powered applications."
};
