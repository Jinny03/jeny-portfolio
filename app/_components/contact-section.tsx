import { SectionTitle } from "./section-title";
import { ScrollReveal } from "./scroll-reveal";

type Contact = {
  label: string;
  value: string;
};

type ContactLink = {
  external?: boolean;
  href: string;
  label: string;
};

type ContactSectionProps = {
  contacts: readonly Contact[];
  links: readonly ContactLink[];
};

export function ContactSection({ contacts, links }: ContactSectionProps) {
  return (
    <section
      className="flex min-h-screen scroll-mt-16 items-center border-t border-white/10 text-white"
      id="contact"
    >
      <ScrollReveal className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle eyebrow="Contact" title="Let us connect." inverted />
          <div className="mt-10 grid gap-4">
            {contacts.map((contact) => (
              <div
                className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                key={contact.label}
              >
                <p className="text-sm font-medium text-emerald-200">
                  {contact.label}
                </p>
                <p className="mt-2 text-xl font-semibold">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link, index) => (
              <a
                className={
                  index === 0
                    ? "inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-300/15 px-6 font-semibold text-emerald-50 shadow-[0_16px_40px_rgba(16,185,129,0.18)] backdrop-blur-xl transition hover:bg-emerald-300/25"
                    : "inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-300/15 px-6 font-semibold text-emerald-50 shadow-[0_16px_40px_rgba(16,185,129,0.18)] backdrop-blur-xl transition hover:bg-emerald-300/25"
                }
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-lg border border-white/15 bg-white/10 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
          <h3 className="text-3xl font-semibold">Send Message</h3>
          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-emerald-50/80">
              Full Name
              <input
                className="min-h-12 rounded-lg border border-white/15 bg-black/20 px-4 text-base font-medium text-white outline-none backdrop-blur-xl transition placeholder:text-emerald-50/35 focus:border-emerald-300/60 focus:bg-white/10"
                name="fullName"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-emerald-50/80">
              Email Address
              <input
                className="min-h-12 rounded-lg border border-white/15 bg-black/20 px-4 text-base font-medium text-white outline-none backdrop-blur-xl transition placeholder:text-emerald-50/35 focus:border-emerald-300/60 focus:bg-white/10"
                name="email"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-emerald-50/80">
              Your Message
              <textarea
                className="min-h-36 resize-none rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-base font-medium text-white outline-none backdrop-blur-xl transition placeholder:text-emerald-50/35 focus:border-emerald-300/60 focus:bg-white/10"
                name="message"
              />
            </label>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-300/15 px-6 font-semibold text-emerald-50 shadow-[0_16px_40px_rgba(16,185,129,0.18)] backdrop-blur-xl transition hover:bg-emerald-300/25"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}
