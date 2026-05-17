type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  brand: string;
  navItems: readonly NavItem[];
};

export function SiteHeader({ brand, navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="text-xl font-semibold text-white" href="#home">
          {brand}
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-emerald-50/75 md:flex">
          {navItems.map((item) => (
            <a
              className="transition hover:text-emerald-200"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
