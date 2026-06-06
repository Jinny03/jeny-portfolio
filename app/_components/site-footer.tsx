type SiteFooterProps = {
  brand: string;
  githubUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
};

export function SiteFooter({
  brand,
  githubUrl = "https://github.com",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
}: SiteFooterProps) {
  const socials = [
    {
      label: "GitHub",
      href: githubUrl,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: facebookUrl,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: linkedinUrl,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-[#076653]/20 bg-[rgba(1,10,6,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-emerald-50/60 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; 2026 <span className="text-[#86b15d]/80 font-medium">{brand}</span>. All rights reserved.
        </p>
        <nav className="flex items-center gap-3" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              rel={social.external ? "noreferrer noopener" : undefined}
              target={social.external ? "_blank" : undefined}
              className="flex size-9 items-center justify-center rounded-full border border-[#076653]/30 bg-[#076653]/10 text-emerald-200/60 backdrop-blur transition-all duration-200 hover:border-[#86b15d]/30 hover:bg-[#86b15d]/10 hover:text-[#86b15d] hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(227,239,38,0.15)]"
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}