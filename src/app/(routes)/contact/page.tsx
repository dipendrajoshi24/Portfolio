import { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | Dipendra Joshi",
  description: "Get in touch with Dipendra Joshi for full-stack development opportunities, collaborations, or questions.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Contact />
    </div>
  );
}
