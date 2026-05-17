type FooterLink = {
  href: string;
  label: string;
};

type SiteFooterProps = {
  brand: string;
  links: readonly FooterLink[];
};

export function SiteFooter({ brand, links }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-emerald-50/70 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; 2026 {brand}. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              className="transition hover:text-emerald-200"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
