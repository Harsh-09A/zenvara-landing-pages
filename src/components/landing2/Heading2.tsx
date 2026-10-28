interface Heading2Props {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  onDark?: boolean;
}

export function Heading2({ eyebrow, title, intro, center, onDark }: Heading2Props) {
  return (
    <div className={`mb-10 max-w-2xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] ${onDark ? "bg-white/10 text-gold" : "bg-butter text-navy"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-6xl ${onDark ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-5 leading-relaxed ${onDark ? "text-white/75" : "text-navy/70"}`}>{intro}</p>}
    </div>
  );
}
