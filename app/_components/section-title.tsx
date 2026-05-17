type SectionTitleProps = {
  eyebrow: string;
  inverted?: boolean;
  title: string;
};

export function SectionTitle({
  eyebrow,
  inverted = false,
  title,
}: SectionTitleProps) {
  return (
    <div>
      <p
        className={`mb-3 text-sm font-semibold uppercase ${
          inverted ? "text-emerald-200" : "text-emerald-200"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl font-semibold leading-tight ${
          inverted ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
