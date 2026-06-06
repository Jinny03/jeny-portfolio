type SectionTitleProps = {
  eyebrow: string;
  inverted?: boolean;
  title: string;
};

export function SectionTitle({
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase text-[#86b15d]">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold leading-tight text-white">
        {title}
      </h2>
    </div>
  );
}
