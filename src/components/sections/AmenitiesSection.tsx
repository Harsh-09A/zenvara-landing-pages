import Image from "next/image";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmenityIcon } from "@/components/ui/AmenityIcon";

export function AmenitiesSection() {
  const { featuredAmenities, amenities } = project;
  return (
    <section id="amenities" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title="Amenities" />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredAmenities.map((a) => (
            <article key={a.name} className="group relative aspect-[4/3] overflow-hidden bg-navy">
              <Image
                src={a.image.src}
                alt={a.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-serif text-3xl">{a.name}</h3>
                <p className="mt-1 text-sm text-white/80">{a.description}</p>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px border border-beige bg-beige md:grid-cols-4">
          {amenities.map((a) => (
            <li key={a.name} className="flex items-center gap-4 bg-ivory p-5">
              <AmenityIcon name={a.icon} className="h-7 w-7 shrink-0 text-gold" />
              <span className="text-sm">{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
