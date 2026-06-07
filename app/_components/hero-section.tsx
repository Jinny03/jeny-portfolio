import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

type HeroSectionProps = {
  eyebrow: string;
  name: string;
  role: string;
  resumeUrl: string;
};

export function HeroSection({ eyebrow, name, role, resumeUrl }: HeroSectionProps) {
  const marqueeItems = ["UI Design", "Digital Illustration", "Graphic Design", "Branding", "Typography", "Visual Art", "Logo"];

  return (
    <section className="relative flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center overflow-hidden" id="home">

      {/* Thorned bramble SVG - top right decorative */}
      <svg className="paper-tear absolute -right-8 top-0 w-72 h-72 opacity-[0.055]" viewBox="0 0 300 300" fill="none">
        <path d="M280,10 C260,30 240,20 220,45 C200,70 215,90 195,110 C175,130 150,120 130,145 C110,170 120,195 100,215 C80,235 55,230 35,255 C15,280 20,295 20,295"
          stroke="rgba(232,245,216,1)" strokeWidth="1.2" fill="none" />
        <path d="M220,45 C220,45 240,65 250,55 C260,45 255,30 245,25" stroke="rgba(232,245,216,1)" strokeWidth="0.8" fill="none" />
        <path d="M195,110 C195,110 215,125 225,118 C235,111 232,98 222,93" stroke="rgba(232,245,216,1)" strokeWidth="0.8" fill="none" />
        <path d="M130,145 C130,145 108,162 115,174 C122,186 138,183 145,172" stroke="rgba(232,245,216,1)" strokeWidth="0.8" fill="none" />
        <path d="M100,215 C100,215 78,225 82,238 C86,251 102,250 108,240" stroke="rgba(232,245,216,1)" strokeWidth="0.8" fill="none" />
        <circle cx="250" cy="55" r="2.5" fill="rgba(232,245,216,0.6)" />
        <circle cx="225" cy="118" r="2.5" fill="rgba(232,245,216,0.6)" />
        <circle cx="108" cy="174" r="2.5" fill="rgba(232,245,216,0.6)" />
        <circle cx="82" cy="238" r="2.5" fill="rgba(232,245,216,0.6)" />
      </svg>

      {/* Crumpled paper texture corner - bottom left */}
      <svg className="paper-tear absolute -left-4 bottom-16 w-56 h-56 opacity-[0.04]" viewBox="0 0 240 240" fill="none">
        <path d="M10,230 L30,180 L15,160 L45,130 L25,100 L60,75 L40,45 L80,20 L110,50 L95,80 L130,70 L120,100 L150,95 L140,125 L170,120 L155,150 L185,148 L175,178 L200,180 L185,210 L210,215 L195,235 Z"
          fill="rgba(232,245,216,1)" opacity="0.5" />
        <path d="M10,230 L30,180 L15,160 L45,130 L25,100 L60,75 L40,45 L80,20" stroke="rgba(122,173,82,0.3)" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Floating abstract shapes */}
      <div className="animate-float absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-[#7aad52]/30" style={{ animationDelay: "0s" }} />
      <div className="animate-float absolute left-[15%] top-[60%] h-2 w-2 rounded-full bg-[#7aad52]/20" style={{ animationDelay: "1.5s" }} />
      <div className="animate-float-reverse absolute right-[12%] top-[35%] h-4 w-4 rounded-full border border-[#7aad52]/20" style={{ animationDelay: "0.8s" }} />
      <div className="animate-drift absolute right-[20%] bottom-[25%] h-1.5 w-16 bg-[#7aad52]/15 rotate-45" style={{ animationDelay: "2s" }} />
      <div className="animate-float absolute left-[40%] top-[10%] h-px w-20 bg-gradient-to-r from-transparent via-[#7aad52]/25 to-transparent" style={{ animationDelay: "0.4s" }} />

      <div className="relative z-10 w-full">
        <ScrollReveal className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.6fr]">

          {/* Left: text */}
          <div>
            <p className="mono-label mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7aad52]/40" />
              {eyebrow}
            </p>

            <h1
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: "1.04" }}
              className="text-6xl font-black text-[#dff0c8] sm:text-7xl xl:text-8xl"
            >
              {name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "block text-[#7aad52]" : "block"}>{word}</span>
              ))}
            </h1>

            <p className="mt-6 max-w-md text-base font-light leading-7 text-[#dff0c8]/55">
              {role}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                View Projects
              </a>

              <a className="btn-secondary" href="#contact">
                Contact Me
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#7aad52]/18 bg-transparent px-5 font-semibold text-[#dff0c8]/50 transition-all duration-200 hover:border-[#7aad52]/40 hover:text-[#7aad52] hover:-translate-y-0.5 text-sm"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                Resume
              </a>
            </div>

            {/* Small stats row */}
            <div className="mt-10 flex gap-8 border-t border-[#064d3a]/20 pt-8">
              {[["3+", "Years learning"], ["5+", "Projects built"], ["∞", "Creative ideas"]].map(([num, label]) => (
                <div key={label}>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                    className="text-2xl font-bold text-[#7aad52]"
                  >
                    {num}
                  </p>
                  <p className="mt-0.5 text-xs text-[#dff0c8]/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait glass card */}
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="absolute -left-5 top-5 h-24 w-14 rounded-2xl bg-[#064d3a]/20 backdrop-blur animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-5 right-0 h-18 w-18 rounded-2xl bg-[#7aad52]/6 backdrop-blur animate-float-reverse" style={{ animationDelay: "0.5s" }} />

            <div className="glass-card relative overflow-hidden rounded-2xl p-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7aad52]/35 to-transparent" />
              <div className="flex flex-col items-center gap-5 rounded-xl border border-[#064d3a]/25 bg-[#061a0f]/50 px-6 py-10">
                <div className="relative size-36 overflow-hidden rounded-full border-2 border-[#7aad52]/30">
                  <Image src="/portrait.png" alt="Jeny Mie" fill sizes="144px" quality={95} className="object-cover" priority />
                  <div className="absolute inset-0 rounded-full border border-[#7aad52]/15" />
                </div>
                <div className="text-center">
                  <p className="mono-label">UI Designer</p>
                  <p className="mt-1.5 text-xs tracking-widest text-[#dff0c8]/30 uppercase" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem" }}>
                    Illustrator & Graphic Designer
                  </p>
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#7aad52]/30 to-transparent" />
                {/* Availability badge */}
                <span
                  className="flex items-center gap-1.5 rounded-full border border-[#7aad52]/20 bg-[#7aad52]/8 px-3 py-1 text-xs text-[#7aad52]/70"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem" }}
                >
                  <span className="animate-pulse-glow inline-block h-1.5 w-1.5 rounded-full bg-[#7aad52]" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Marquee ticker */}
        <div className="relative w-full overflow-hidden border-y border-[#064d3a]/20 bg-[rgba(1,10,6,0.3)] py-3 backdrop-blur">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-8 flex items-center gap-8">
                <span className="mono-label">{item}</span>
                <span className="text-[#7aad52]/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}