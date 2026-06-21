import { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects | Dipendra Joshi",
  description: "Full-stack web apps, a machine learning project, and systems programming work built by Dipendra Joshi using the MERN stack, Python, and C.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Projects />
    </div>
  );
}
