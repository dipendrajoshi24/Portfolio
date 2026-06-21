import { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About | Dipendra Joshi",
  description: "Learn more about Dipendra Joshi — Full Stack Developer and BCA student.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
    </>
  );
}
