import { AboutSection } from "./_components/about-section";
import { CertificatesSection } from "./_components/certificates-section";
import { ContactSection } from "./_components/contact-section";
import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { TechStackSection } from "./_components/tech-stack-section";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const profile = {
  name: "Jeny Mie",
  role: "Frontend Developer & UI Designer",
};

const aboutParagraphs = [
  "I create simple, responsive, and polished websites for personal brands and small businesses.",
  "I enjoy clean layouts, soft colors, and user-friendly interfaces.",
];

const projects = [
  {
    title: "Beauty Shop",
    description: "Responsive store page with product cards and checkout UI.",
    image: {
      alt: "Beauty Shop project preview",
      src: "/project-beauty-shop.png",
    },
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Task Planner",
    description: "Daily planner with clean lists, filters, and progress states.",
    image: {
      alt: "Task Planner project preview",
      src: "/project-task-planner.png",
    },
    stack: ["React", "CSS", "Firebase"],
  },
  {
    title: "Travel Journal",
    description: "Photo-focused blog layout for trips, notes, and highlights.",
    image: {
      alt: "Travel Journal project preview",
      src: "/project-travel-journal.png",
    },
    stack: ["HTML", "JavaScript", "API"],
  },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Figma",
];

const certificates = [
  { title: "Frontend Development - Example Academy", year: "2026" },
  { title: "Responsive Web Design - Example Institute", year: "2026" },
  { title: "UI/UX Design Basics - Example School", year: "2026" },
];

const contacts = [
  { label: "Email", value: "jeny@example.com" },
  { label: "Phone", value: "+63 900 000 0000" },
  { label: "Location", value: "Manila, Philippines" },
];

const contactLinks = [
  { label: "Email Me", href: "mailto:jeny@example.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  { label: "GitHub", href: "https://github.com", external: true },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_32rem),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_34rem),linear-gradient(135deg,#03110c_0%,#07160f_42%,#000000_100%)] text-[#f4fff8]">
      <SiteHeader brand="Jeny" navItems={navItems} />
      <HeroSection
        eyebrow="Portfolio"
        name={profile.name}
        role={profile.role}
      />
      <AboutSection
        paragraphs={aboutParagraphs}
        title="Hello, I am Jeny."
      />
      <ProjectsSection projects={projects} />
      <TechStackSection technologies={techStack} />
      <CertificatesSection certificates={certificates} />
      <ContactSection contacts={contacts} links={contactLinks} />
      <SiteFooter brand="Jeny Mie" links={navItems} />
    </main>
  );
}
