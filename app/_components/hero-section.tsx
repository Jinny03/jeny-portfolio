import Image from "next/image";

import { ScrollReveal } from "./scroll-reveal";

type HeroSectionProps = {
  eyebrow: string;
  name: string;
  role: string;
};

export function HeroSection({ eyebrow, name, role }: HeroSectionProps) {
  return (
    <section
      className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center"
      id="home"
    >
      <ScrollReveal className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg backdrop-blur-xl">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
            {name}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium text-emerald-50/75">
            {role}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-300/15 px-6 font-semibold text-emerald-50 shadow-[0_16px_40px_rgba(16,185,129,0.22)] backdrop-blur-xl transition hover:bg-emerald-300/25"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 h-48 w-28 rounded-lg bg-emerald-300/20 backdrop-blur" />
          <div className="absolute -bottom-5 right-3 h-36 w-36 rounded-lg bg-lime-200/15 backdrop-blur" />
          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <Image
              alt="Portrait placeholder"
              className="aspect-[4/5] w-full rounded-md object-cover"
              height={900}
              priority
              src="/portrait-placeholder.png"
              width={720}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
