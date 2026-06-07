type SectionTitleProps = {
  eyebrow: string;
  title: string;
  inverted?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
}: SectionTitleProps) {
  const words = title.split(" ");

  return (
    <div>
      <p className="mono-label mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-[#86b15d]/40" />
        {eyebrow}
      </p>

      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
        }}
        className="text-3xl font-semibold text-[#dff0c8]"
      >
        {title}
      </h2>
    </div>
  );
}