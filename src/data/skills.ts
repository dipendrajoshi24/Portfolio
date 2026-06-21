
export interface Skill {
  name: string;
  icon: string; // react-icons/si export name
  color: string; // brand hex color
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages I write and think in.",
    skills: [
      { name: "C", icon: "SiC", color: "#A8B9CC" },
      { name: "C++", icon: "SiCplusplus", color: "#00599C" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "Java", icon: "SiOpenjdk", color: "#E76F00" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    ]
  },
  {
    title: "Frontend",
    description: "Building clean, responsive, pixel-perfect interfaces.",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss", color: "#1572B6" },
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    description: "APIs, servers, and data that hold everything together.",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#5FA04E" },
      { name: "Express.js", icon: "SiExpress", color: "#000000" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    ]
  },
  {
    title: "Data & ML",
    description: "Turning raw data into models and insight.",
    skills: [
      { name: "Pandas", icon: "SiPandas", color: "#150458" },
      { name: "NumPy", icon: "SiNumpy", color: "#013243" },
      { name: "scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
    ]
  },
  {
    title: "Tools",
    description: "Day-to-day developer tooling and workflow.",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#181717" },
      { name: "Jupyter", icon: "SiJupyter", color: "#F37626" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
    ]
  }
];
