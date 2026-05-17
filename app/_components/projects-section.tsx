import Image from "next/image";

import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

type Project = {
  description: string;
  image: {
    alt: string;
    src: string;
  };
  stack: readonly string[];
  title: string;
};

type ProjectsSectionProps = {
  projects: readonly Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center"
      id="projects"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle eyebrow="My Projects" title="Selected Work" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              key={project.title}
            >
              <div className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-black/20">
                <Image
                  alt={project.image.alt}
                  className="aspect-[16/10] w-full object-cover"
                  height={600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={project.image.src}
                  width={960}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 min-h-20 leading-7 text-emerald-50/70">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
