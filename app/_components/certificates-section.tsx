"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type Certificate = {
  title: string;
  year: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

type CertificatesSectionProps = {
  certificates: readonly Certificate[];
};

function CertificateThumbnail({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center gap-3 rounded-xl border border-dashed border-[#076653]/40 bg-[#010A06]/40 px-4 text-center">
        <svg className="size-5 flex-shrink-0 text-[#86b15d]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3M6.75 7.5h.008v.008H6.75V7.5z" />
        </svg>
        <span className="text-sm leading-snug text-emerald-50/40">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={960}
      height={600}
      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
      sizes="(min-width: 768px) 33vw, 100vw"
      onError={() => setErrored(true)}
    />
  );
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center"
      id="certificates"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle eyebrow="My Certificates" title="Credentials" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <a
              href={certificate.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group relative cursor-pointer rounded-2xl p-6 block no-underline"
              key={certificate.title}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#86b15d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Bottom glow on hover */}
              <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[#076653]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Certificate thumbnail */}
              <div className="overflow-hidden rounded-xl border border-[#076653]/30 bg-[#010A06]/40 transition-all duration-300 group-hover:border-[#076653]/50">
                <CertificateThumbnail src={certificate.image.src} alt={certificate.image.alt} />
              </div>

              <h3 className="mt-6 min-h-16 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#86b15d]">
                {certificate.title}
              </h3>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-[#86b15d]/20 bg-[#86b15d]/8 px-3 py-1 text-sm font-semibold text-[#86b15d]/70 transition-all duration-300 group-hover:border-[#86b15d]/40 group-hover:bg-[#86b15d]/14 group-hover:text-[#86b15d]">
                  {certificate.year}
                </span>
                <span className="flex size-8 items-center justify-center rounded-full border border-[#076653]/30 text-emerald-200/30 transition-all duration-300 group-hover:border-[#86b15d]/30 group-hover:text-[#86b15d] group-hover:translate-x-0.5">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}