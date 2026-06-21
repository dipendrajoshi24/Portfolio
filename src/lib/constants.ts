// App constants

export const SITE_CONFIG = {
  name: "Dipendra Joshi",
  description: "Full-Stack Developer | MERN Stack | Python & ML Enthusiast",
  url: "https://dipendrajoshi.vercel.app",
  ogImage: "/images/profile/dipendra.jpg",
  links: {
    email: "dipendrajoshi062@gmail.com",
    github: "https://github.com/dipendrajoshi24",
    linkedin: "https://www.linkedin.com/in/dipendrajoshi77",
    phone: ""
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};