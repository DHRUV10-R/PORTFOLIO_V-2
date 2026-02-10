export interface Project {
    id: number;
    title: string;
    category: "Development" | "UI/UX";
    description: string;
    fullDescription: string;
    tags: string[];
    image?: string;
    features?: string[];
    tools?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Mindscribe (Blog Website)",
        category: "Development",
        description: "A feature-rich blog website with distinct User and Admin panels.",
        fullDescription: "Mindscribe is a comprehensive blog platform designed to facilitate seamless content creation and management. It features separate panels for users and administrators, ensuring secure and organized data handling. The system utilizes complex many-to-many relationships in MongoDB to efficiently manage read and write operations for blogs, comments, and user interactions.",
        tags: ["React.js", "Node.js", "MongoDB", "MERN Stack"],
        features: ["User and Admin Panels", "Many-to-many database relationships", "Secure Authentication", "Responsive Design"],
        tools: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
        id: 2,
        title: "ScholarNexus",
        category: "Development",
        description: "A comprehensive mobile application developed for students to manage daily tasks.",
        fullDescription: "ScholarNexus is a self-developed mobile application designed to assist students in their daily academic lives. It serves as a one-stop solution for managing schedules and staying updated.",
        tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
        features: ["Daily Reminders", "Interactive Quizzes", "Student News Updates", "Task Management"],
        tools: ["Flutter", "Dart", "Firebase"]
    },
    {
        id: 3,
        title: "Weather App",
        category: "Development",
        description: "A responsive weather forecasting application created during Bharat Intern internship.",
        fullDescription: "Developed during an internship at Bharat Intern, this application provides accurate weather forecasts. It demonstrates proficiency in API integration and creating responsive user interfaces.",
        tags: ["HTML/CSS", "JavaScript", "API Integration"],
        features: ["Real-time weather data", "Location-based forecast", "Responsive UI"],
        tools: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"]
    },
    {
        id: 4,
        title: "Avishkar Project",
        category: "Development",
        description: "Academic project showcased at the Avishkar competition during B.Sc.",
        fullDescription: "An innovative academic project presented at the prestigious Avishkar competition. This project highlights research capabilities and technical implementation of novel ideas.",
        tags: ["Research", "Innovation"],
        features: ["Research-driven approach", "Innovative solution", "Academic presentation"],
        tools: ["Research", "Presentation"]
    },
    {
        id: 5,
        title: "Machine Learning (WIP)",
        category: "Development",
        description: "Currently building a Machine Learning project focusing on predictive analysis.",
        fullDescription: "An ongoing deep dive into Machine Learning, focusing on building a model for predictive analysis. This project involves data preprocessing, model training, and evaluation.",
        tags: ["Python", "ML", "Data Science", "WIP"],
        features: ["Predictive Analysis", "Data Visualization", "Model Training"],
        tools: ["Python", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
        id: 6,
        title: "Figma Makethon Design",
        category: "UI/UX",
        description: "Innovative UI prototypes created during the Figma Makethon participation.",
        fullDescription: "A collection of innovative User Interface prototypes created during a competitive Figma Makethon. Demonstrates rapid prototyping skills and creative design thinking.",
        tags: ["Figma", "Prototyping", "UI Design"],
        features: ["High-fidelity prototypes", "User flow design", "Interactive elements"],
        tools: ["Figma", "Canva"]
    }
];
