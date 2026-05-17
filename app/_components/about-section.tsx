import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type AboutSectionProps = {
  paragraphs: readonly string[];
  title: string;
};

export function AboutSection({ paragraphs, title }: AboutSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center border-y border-white/10"
      id="about"
    >
      <ScrollReveal className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-24 sm:px-8 md:grid-cols-[0.7fr_1fr]">
        <SectionTitle eyebrow="About Me" title={title} />
        <div className="grid gap-4 rounded-lg border border-white/15 bg-white/10 p-6 text-lg leading-8 text-emerald-50/75 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
