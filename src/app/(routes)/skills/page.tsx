import { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills | Dipendra Joshi",
  description: "Languages, frameworks, and tools Dipendra Joshi works with — MERN stack, Python, machine learning, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Skills />
    </div>
  );
}
