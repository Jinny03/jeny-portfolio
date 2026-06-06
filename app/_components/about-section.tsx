import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type AboutSectionProps = {
  paragraphs: readonly string[];
  title: string;
};

export function AboutSection({ paragraphs, title }: AboutSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center"
      id="about"
    >
      <ScrollReveal className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-24 sm:px-8 md:grid-cols-[0.7fr_1fr]">
        <SectionTitle eyebrow="About Me" title={title} />
        <div className="glass-card group relative cursor-default rounded-2xl p-8 text-lg leading-8 text-emerald-50/75">
          {/* Top shimmer — always visible, brightens on hover */}
          <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#86b15d]/25 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
          {/* Side accent */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#86b15d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="grid gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="transition-colors duration-300 group-hover:text-emerald-50/90">{paragraph}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}