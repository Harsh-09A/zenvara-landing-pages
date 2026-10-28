import Image from "next/image";
import { similarProjects } from "@/data/landing-extras";

/** Cards sit above the footer. `rounded` is for the landing 2 style. */
export function SimilarProjects({ rounded = false }: { rounded?: boolean }) {
  const radius = rounded ? "rounded-3xl" : "";
  return (
    <section id="similar-projects" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Explore more</p>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">Similar projects</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {similarProjects.map((p) => (
            <li key={p.name} className={`overflow-hidden border border-silver bg-ivory ${radius}`}>
              <div className="relative aspect-[4/3]">
                <Image src={p.image.src} alt={`${p.name} in ${p.location}`} fill loading="lazy" sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-navy/70">{p.location}</p>
                <p className="text-sm text-navy/70">{p.type}</p>
                <a href="#contact" className="mt-5 inline-block text-sm font-medium text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                  Enquire now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
