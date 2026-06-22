
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  icon: string;
}

// No achievements listed yet — add yours here when ready.
export const achievementsData: Achievement[] = [];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  logo?: string;
}

export const educationData: Education[] = [
  {
    id: "gehu",
    institution: "Graphic Era Hill University",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2024 - 2027",
    location: "Dehradun, India",
  }
];
