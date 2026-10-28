import Image from "next/image";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OverviewSection() {
  const { description, highlights, specifications, overviewImage, developer } = project;
  return (
    <section id="overview" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading title={`About ${project.name}`} />
          <div className="space-y-4 leading-[1.8] text-navy/80">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-px border border-beige bg-beige sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h.title} className="bg-white p-6">
                <h3 className="font-serif text-xl text-navy">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{h.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={overviewImage.src}
              alt={overviewImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="divide-y divide-beige border-y border-beige">
            {specifications.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 py-3 text-sm">
                <dt className="text-navy/60">{s.label}</dt>
                <dd className="text-right font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h3 className="font-serif text-2xl">About {developer.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">{developer.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
