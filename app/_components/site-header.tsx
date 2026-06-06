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
    <header className="sticky top-0 z-20 border-b border-[#076653]/30 bg-[rgba(1,10,6,0.6)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          className="text-xl font-semibold tracking-tight text-white transition hover:text-[#86b15d]"
          href="#home"
        >
          {brand}
          <span className="text-[#86b15d]">.</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-emerald-50/60 md:flex">
          {navItems.map((item) => (
            <a
              className="relative transition hover:text-[#86b15d] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#86b15d] after:transition-all after:duration-300 hover:after:w-full"
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