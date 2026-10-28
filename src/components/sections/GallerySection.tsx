"use client";

import Image from "next/image";
import { useState } from "react";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const ALL = "All";

export function GallerySection() {
  const [category, setCategory] = useState(ALL);
  const [active, setActive] = useState<number | null>(null);

  const categories = [
    ALL,
    ...Array.from(new Set(project.gallery.map((g) => g.category))),
  ];
  const visible = project.gallery.filter(
    (g) => category === ALL || g.category === category,
  );

  // Repeating spans give an editorial rhythm instead of identical tiles.
  const spans = ["md:col-span-2 md:row-span-2", "", "", "md:col-span-2", ""];

  return (
    <section id="gallery" className="bg-beige/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Gallery"
          intro="Artistic impressions of the project. Final finishes may vary."
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter gallery"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
              className={`min-h-11 border px-5 text-sm transition-colors ${
                c === category
                  ? "border-navy bg-navy text-white"
                  : "border-gold text-navy hover:bg-gold/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3">
          {visible.map((img, i) => (
            <li key={img.src} className="min-w-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View larger: ${img.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ImageLightbox images={visible} index={active} onChange={setActive} />
    </section>
  );
}
