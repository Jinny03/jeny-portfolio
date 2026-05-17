import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type Certificate = {
  title: string;
  year: string;
};

type CertificatesSectionProps = {
  certificates: readonly Certificate[];
};

export function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center"
      id="certificates"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle eyebrow="My Certificates" title="Credentials" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              key={certificate.title}
            >
              <CertificatePreview />
              <h3 className="mt-6 min-h-16 text-2xl font-semibold leading-tight text-white">
                {certificate.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
                  {certificate.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function CertificatePreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="relative aspect-[16/10] rounded-md border border-emerald-200/20 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
        <div className="absolute right-5 top-5 size-14 rounded-full border border-emerald-200/30 bg-emerald-300/10" />
        <div className="h-3 w-24 rounded-full bg-emerald-100/80" />
        <div className="mt-7 h-2 w-36 rounded-full bg-white/35" />
        <div className="mt-3 h-2 w-28 rounded-full bg-white/25" />
        <div className="absolute bottom-5 left-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-300/10 text-sm font-bold text-emerald-100">
            C
          </span>
          <span className="h-2 w-20 rounded-full bg-emerald-100/60" />
        </div>
      </div>
    </div>
  );
}
