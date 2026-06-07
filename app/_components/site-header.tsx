type NavItem = { href: string; label: string };
type SiteHeaderProps = { brand: string; navItems: readonly NavItem[] };

export function SiteHeader({ brand, navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#064d3a]/20 bg-[rgba(1,10,6,0.55)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-baseline gap-1 group">
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
            className="text-2xl font-bold text-[#dff0c8] transition-colors group-hover:text-[#7aad52]">
            {brand}
          </span>
          <span className="text-[#7aad52] text-2xl" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em" }}
              className="relative text-[#dff0c8]/50 uppercase transition-colors duration-300 hover:text-[#7aad52]
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#7aad52]
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}