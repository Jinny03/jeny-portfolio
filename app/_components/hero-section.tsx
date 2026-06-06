import { ScrollReveal } from "./scroll-reveal";
import Image from "next/image";

type HeroSectionProps = {
  eyebrow: string;
  name: string;
  role: string;
  resumeUrl: string;
};

export function HeroSection({ eyebrow, name, role, resumeUrl }: HeroSectionProps) {
  return (
    <section
      className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center"
      id="home"
    >
      <ScrollReveal className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.65fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#86b15d]/20 bg-[#86b15d]/8 px-4 py-2 text-sm font-medium tracking-widest text-[#86b15d]/80 uppercase backdrop-blur-xl">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
            {name}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium text-emerald-50/60">
            {role}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href="#contact">
              Contact Me
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#86b15d]/20 bg-transparent px-5 font-semibold text-emerald-50/70 backdrop-blur transition-all duration-200 hover:border-[#86b15d]/40 hover:text-[#86b15d] hover:-translate-y-0.5"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Compact glass portrait card */}
        <div className="relative mx-auto w-full max-w-[340px] xl:max-w-[380px]">
          {/* Decorative blobs */}
          <div className="absolute -left-4 top-4 h-28 w-16 rounded-2xl bg-[#076653]/25 backdrop-blur" />
          <div className="absolute -bottom-4 right-1 h-20 w-20 rounded-2xl bg-[#86b15d]/6 backdrop-blur" />

          {/* Glass frame */}
          <div className="glass-card relative overflow-hidden rounded-2xl p-4">
            {/* Shimmer top edge */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#86b15d]/30 to-transparent" />

            {/* Portrait */}
            <div className="flex flex-col items-center justify-center gap-5 rounded-xl border border-[#076653]/30 bg-[#0C342C]/60 py-10 px-8">
              {/* Avatar circle */}
              <div className="relative size-40 xl:size-48 overflow-hidden rounded-full border-2 border-[#86b15d]/35">
                <Image
                  src="/portrait.png"
                  alt="Portrait"
                  fill
                  sizes="192px"
                  quality={100}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full border border-[#86b15d]/15" />
                <div className="absolute -inset-1 rounded-full border border-[#86b15d]/10 animate-pulse" />
              </div>

              {/* Job title inside card */}
              <div className="text-center">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#86b15d]/60 uppercase">
                  UI Designer
                </p>
                <p className="mt-1 text-xs tracking-widest text-emerald-50/30 uppercase">
                  Digital Illustrator & Graphic Designer
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="h-px w-16 rounded-full bg-gradient-to-r from-transparent via-[#86b15d]/30 to-transparent" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}