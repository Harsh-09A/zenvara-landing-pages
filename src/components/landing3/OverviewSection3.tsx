import Image from "next/image";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OverviewSection3() {
  const { description, highlights, specifications, overviewImage, developer } =
    project;

  return (
    <section
      id="overview"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24"
    >
      <SectionHeading title={`About ${project.name}`} />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* LEFT: image + highlights */}
        <div className="space-y-8">
          {/* Rounded image, zooms slowly on hover */}
          <div className="group relative aspect-[3/2] overflow-hidden rounded-3xl shadow-[0_25px_60px_-30px_rgba(16,20,61,0.5)]">
            <Image
              src={overviewImage.src}
              alt={overviewImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-navy backdrop-blur">
              By {developer.name}
            </span>
          </div>

          {/* Highlight cards lift up on hover */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <li
                key={h.title}
                className="group rounded-2xl border border-beige bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <span className="text-sm font-medium text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl text-navy transition-colors group-hover:text-gold">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {h.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: text, specs, developer */}
        <div className="space-y-8">
          <div className="space-y-4 leading-[1.8] text-navy/80">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Specs card, each row highlights on hover */}
          <dl className="rounded-2xl border border-beige bg-ivory p-2">
            {specifications.map((s) => (
              <div
                key={s.label}
                className="flex justify-between gap-6 rounded-xl px-4 py-3 text-sm transition-colors hover:bg-white"
              >
                <dt className="text-navy/60">{s.label}</dt>
                <dd className="text-right font-medium text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* Developer card */}
          <div className="rounded-2xl border-l-4 border-gold bg-navy p-6 text-white transition-shadow duration-300 hover:shadow-xl">
            <h3 className="font-serif text-2xl">About {developer.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {developer.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
