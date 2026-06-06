"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        className="scroll-mt-16"
        id="projects"
      >
        <ScrollReveal className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionTitle eyebrow="My Projects" title="Selected Work" />
          <div className="mt-10 grid gap-5 md:grid-cols-3 auto-rows-fr">
            {projects.map((project) => (
              <article
                className="glass-card group relative cursor-pointer rounded-2xl p-5"
                key={project.title}
                onClick={() => setSelected(project)}
              >
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#86b15d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mb-5 overflow-hidden rounded-xl border border-[#076653]/30 bg-[#010A06]/40">
                  <Image
                    alt={project.image.alt}
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                    height={600}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={project.image.src}
                    width={960}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#010A06]/0 transition-all duration-300 group-hover:bg-[#010A06]/50">
                    <span className="flex items-center gap-2 rounded-full border border-[#86b15d]/40 bg-[#010A06]/70 px-4 py-2 text-sm font-semibold text-[#86b15d] opacity-0 scale-90 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-[#86b15d]">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-emerald-50/60">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full border border-[#86b15d]/15 bg-[#86b15d]/6 px-3 py-1 text-xs font-semibold tracking-wide text-[#86b15d]/70 uppercase transition-colors group-hover:border-[#86b15d]/30 group-hover:text-[#86b15d]"
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

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-[#010A06]/88 backdrop-blur-sm" />

          <div
            className="relative z-10 flex w-full max-w-xl flex-col"
            style={{ maxHeight: "calc(100vh - 2rem)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title row — always visible, never scrolls away */}
            <div className="mb-3 flex flex-shrink-0 items-center justify-between px-1">
              <p className="text-sm font-semibold tracking-widest text-[#86b15d]/70 uppercase">
                {selected.title}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200 hover:border-[#86b15d]/40 hover:text-[#86b15d]"
                aria-label="Close"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image — constrained, scrollable only if portrait image is very tall */}
            <div className="min-h-0 flex-1 overflow-y-auto rounded-xl border border-[#86b15d]/15 shadow-[0_24px_60px_rgba(1,10,6,0.7)]">
              <Image
                src={selected.image.src}
                alt={selected.image.alt}
                width={800}
                height={1000}
                className="w-full object-contain"
                priority
              />
            </div>

            {/* Hint — always visible, never scrolls away */}
            <p className="mt-3 flex-shrink-0 text-center text-xs text-emerald-50/20">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}