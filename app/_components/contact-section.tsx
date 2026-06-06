"use client";

import { useState } from "react";
import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type ContactSectionProps = {
  email: string;
};

export function ContactSection({ email }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers that block clipboard API
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center text-white"
      id="contact"
    >
      <ScrollReveal className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 sm:px-8">
        <SectionTitle eyebrow="Contact" title="Let us connect." inverted />

        <div className="mt-12 glass-card relative w-full max-w-md rounded-2xl p-8 text-center">
          <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#86b15d]/25 to-transparent" />

          {/* Email icon */}
          <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full border border-[#86b15d]/20 bg-[#86b15d]/8">
            <svg className="size-6 text-[#86b15d]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>

          <p className="text-sm font-medium text-[#86b15d]/60 uppercase tracking-widest">Email</p>
          <p className="mt-2 text-xl font-semibold text-white break-all">{email}</p>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="relative mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#86b15d]/25 bg-[#86b15d]/8 px-6 font-semibold text-[#86b15d] transition-all duration-200 hover:bg-[#86b15d]/18 hover:border-[#86b15d]/45 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(134,177,93,0.15)]"
            type="button"
          >
            {copied ? (
              <>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied to clipboard!
              </>
            ) : (
              <>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Email
              </>
            )}
          </button>

          {/* Toast pop message */}
          <div
            className={`mt-4 text-sm font-medium text-[#86b15d] transition-all duration-300 ${
              copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            ✓ aguilojeny@gmail.com copied — feel free to reach out!
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}