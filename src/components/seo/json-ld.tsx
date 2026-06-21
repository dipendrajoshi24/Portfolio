import { SITE_CONFIG } from "@/lib/constants";
import { educationData } from "@/data/achievements";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dipendra Joshi",
    alternateName: "DJ",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.links.email,
    jobTitle: "Full Stack Developer",
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.linkedin,
    ],
    alumniOf: educationData.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: edu.location.split(", ")[0],
        addressCountry: edu.location.split(", ")[1],
      },
    })),
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "Machine Learning",
      "Python",
      "React",
      "Node.js",
      "MongoDB",
      "C / C++",
      "JavaScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
