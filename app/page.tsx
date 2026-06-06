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
  name: "Jeny Mie Aguilo",
  role: "Designing intuitive interfaces and creating visual experiences through illustration and graphic design.",
};

const aboutParagraphs = [
  "I am a designer with a passion for UI design, digital illustration, and graphic design.",
  "I enjoy creating user-friendly and visually appealing designs that bring ideas to life.",
];

const projects = [
  {
    title: "WriteCite (Quote Manager)",
    description: "WriteCite is a mobile application that allows users to create, customize, and manage their favorite or personal quotes.",
    image: {
      alt: "WriteCite mobile app preview",
      src: "/project-writecite.png",
    },
    stack: ["React", "JavaScript", "Firebase"],
  },
  {
    title: "Band Poster Design",
    description: "A digital fan art poster created for a music band.",
    image: {
      alt: "Band Poster digital fan art preview",
      src: "/project-band-poster.png",
    },
    stack: ["Canva"],
  },
  {
    title: "BayadBox Prototype",
    description: "A prototype created for capstone project purposes.",
    image: {
      alt: "BayadBox Prototype design preview",
      src: "/project-bayadbox.png",
    },
    stack: ["IbisPaintX"],
  },
];

const techStack = [
  "JavaScript",
  "React",
  "IbisPaintX",
  "Figma",
  "Canva",
];

const certificates = [
  {
    title: "PHP with MySQL: Build 8 PHP and MySQL Projects",
    year: "2024",
    href: "https://drive.google.com/file/d/1oLCkI2blPnNLjE4Yx-Gj3GOLT2g5FADH/view?usp=sharing",
    image: {
      src: "/cert-php-mysql.png",
      alt: "PHP with MySQL Certificate preview",
    },
  },
  {
    title: "Responsive Web Design - Example Institute",
    year: "2026",
    href: "https://your-certificate-link.com",
    image: {
      src: "/cert-webdesign.png",
      alt: "Responsive Web Design Certificate preview",
    },
  },
  {
    title: "UI/UX Design Basics - Example School",
    year: "2026",
    href: "https://your-certificate-link.com",
    image: {
      src: "/cert-uiux.png",
      alt: "UI/UX Design Certificate preview",
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#e8fff4]">
      <SiteHeader brand="Jeny" navItems={navItems} />
      <HeroSection
        eyebrow="Portfolio"
        name={profile.name}
        role={profile.role}
        resumeUrl="https://drive.google.com/file/d/1kMPZg425ULxa3KD2XmxBeRSElIel2ddJ/view?usp=sharing"
      />
      <AboutSection
        paragraphs={aboutParagraphs}
        title="Hello, I am Jeny."
      />
      <ProjectsSection projects={projects} />
      <TechStackSection technologies={techStack} />
      <CertificatesSection certificates={certificates} />
      <ContactSection email="aguilojeny@gmail.com" />
      <SiteFooter
        brand="Jeny Mie"
        githubUrl="https://github.com/Jinny03"
        facebookUrl="https://web.facebook.com/jin.aguilo/"
        linkedinUrl="https://www.linkedin.com/in/jeny-mie-aguilo-923111406"
      />
    </main>
  );
}