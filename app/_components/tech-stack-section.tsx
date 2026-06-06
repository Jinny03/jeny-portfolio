import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type TechStackSectionProps = {
  technologies: readonly string[];
};

export function TechStackSection({ technologies }: TechStackSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center"
      id="tech-stack"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle eyebrow="Tech Stack" title="Tools I Use" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              className="glass-card group relative flex min-h-20 cursor-default items-center gap-4 rounded-2xl px-5 py-4 font-semibold text-emerald-50"
              key={tech}
            >
              {/* Top shimmer on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#86b15d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Left accent glow */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#86b15d]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <TechIcon label={tech} />
              <span className="transition-colors duration-300 group-hover:text-[#86b15d]">{tech}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function TechIcon({ label }: { label: string }) {
  const baseClass =
    "flex size-11 shrink-0 items-center justify-center rounded-full border border-[#076653]/40 bg-[#076653]/20 text-sm font-bold text-emerald-200 shadow-[inset_0_1px_0_rgba(227,239,38,0.1)] transition-all duration-300 group-hover:border-[#86b15d]/30 group-hover:bg-[#86b15d]/8 group-hover:text-[#86b15d] group-hover:shadow-[0_0_12px_rgba(227,239,38,0.12),inset_0_1px_0_rgba(227,239,38,0.2)]";

  if (label === "React") {
    return (
      <span aria-hidden="true" className={baseClass}>
        <svg className="size-7" fill="none" viewBox="0 0 32 32">
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.8" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.8" transform="rotate(120 16 16)" />
          <circle cx="16" cy="16" fill="currentColor" r="2.6" />
        </svg>
      </span>
    );
  }

  if (label === "Tailwind CSS") {
    return (
      <span aria-hidden="true" className={baseClass}>
        <svg className="size-7" fill="none" viewBox="0 0 32 32">
          <path
            d="M7 17c2.4-5.2 5.6-7.8 9.5-7.8 2.4 0 4.2 1 5.5 3 1 1.5 2.1 2.2 3.4 2.2 1.4 0 2.6-.8 3.6-2.4-2.4 5.2-5.6 7.8-9.5 7.8-2.4 0-4.2-1-5.5-3-1-1.5-2.1-2.2-3.4-2.2-1.4 0-2.6.8-3.6 2.4Zm-4 7c2.4-5.2 5.6-7.8 9.5-7.8 2.4 0 4.2 1 5.5 3 1 1.5 2.1 2.2 3.4 2.2 1.4 0 2.6-.8 3.6-2.4-2.4 5.2-5.6 7.8-9.5 7.8-2.4 0-4.2-1-5.5-3-1-1.5-2.1-2.2-3.4-2.2-1.4 0-2.6.8-3.6 2.4Z"
            fill="currentColor"
          />
        </svg>
      </span>
    );
  }

  if (label === "Figma") {
    return (
      <span aria-hidden="true" className={baseClass}>
        <svg className="size-7" fill="currentColor" viewBox="0 0 32 32">
          <circle cx="12" cy="8" r="5" />
          <circle cx="20" cy="8" r="5" opacity="0.7" />
          <circle cx="12" cy="16" r="5" opacity="0.85" />
          <circle cx="20" cy="16" r="5" opacity="0.55" />
          <circle cx="12" cy="24" r="5" opacity="0.7" />
        </svg>
      </span>
    );
  }

  const iconLabels: Record<string, string> = {
    CSS: "#",
    HTML: "<>",
    JavaScript: "JS",
    "Next.js": "N",
    TypeScript: "TS",
  };

  return (
    <span aria-hidden="true" className={baseClass}>
      {iconLabels[label] ?? label.slice(0, 2)}
    </span>
  );
}