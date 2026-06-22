
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "complaint-box",
    title: "University Complaint Desk System",
    description: "Full-stack MERN complaint platform with a real-time admin dashboard.",
    longDescription: "A full-stack MERN complaint management platform where users can submit complaints and admins can track, manage, and resolve them through a real-time dashboard. Includes authentication and live status updates so users always know where their complaint stands.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User authentication and role-based access for admins",
      "Real-time dashboard to track and manage complaints",
      "Status updates from submission through resolution",
    ],
    image: "",
    githubUrl: "https://github.com/dipendrajoshi24",
    category: "web"
  },
  {
    id: "stress-prediction",
    title: "Stress level Predction With Personalized Feedback",
    description: "ML-powered web app that predicts stress levels from user data.",
    longDescription: "A machine learning powered web application that predicts a user's stress level from their input data. Built with Python, Pandas, and NumPy for data processing and scikit-learn for the predictive models, with interactive visualizations to make the results easy to interpret.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "scikit-learn"],
    features: [
      "Predicts stress levels using trained ML models",
      "Interactive data visualizations of results",
      "Data preprocessing pipeline with Pandas and NumPy",
    ],
    image: "",
    githubUrl: "https://github.com/dipendrajoshi24",
    category: "ai"
  },
  {
    id: "attendance-manager",
    title: "Attendance System Using Face Recognition",
    description: "Desktop attendance app for teachers with PDF report generation.",
    longDescription: "A desktop application built with Python and Tkinter that lets teachers add students, mark attendance, manage records, and generate PDF reports. All data is persisted locally with SQLite.",
    technologies: ["Python", "Tkinter", "SQLite"],
    features: [
      "Add and manage student records",
      "Mark and track daily attendance",
      "Generate PDF attendance reports",
    ],
    image: "",
    githubUrl: "https://github.com/dipendrajoshi24",
    category: "web"
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking",
    description: "Console-based C application for booking and managing movie tickets.",
    longDescription: "A console-based movie ticket booking system written in C, featuring user authentication, seat selection, booking and cancellation, file handling for persistence, and a complete admin management panel.",
    technologies: ["C", "File I/O", "Data Structures"],
    features: [
      "User authentication and seat selection",
      "Booking and cancellation flows",
      "Admin panel for managing shows and bookings",
      "Persistent storage via file handling",
    ],
    image: "",
    githubUrl: "https://github.com/dipendrajoshi24",
    category: "web"
  },
];
