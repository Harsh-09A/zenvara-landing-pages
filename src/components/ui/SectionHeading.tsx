interface SectionHeadingProps {
  title: string;
  intro?: string;
  onDark?: boolean;
}

export function SectionHeading({ title, intro, onDark }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <h2 className={`font-serif text-4xl leading-tight md:text-5xl ${onDark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />
      {intro && <p className={`mt-5 leading-relaxed ${onDark ? "text-white/80" : "text-navy/75"}`}>{intro}</p>}
    </div>
  );
}
