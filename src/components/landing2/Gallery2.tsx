"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { project } from "@/data/project";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Heading2 } from "./Heading2";

const ALL = "All";

/** Horizontal snap slider instead of a grid. */
export function Gallery2() {
  const [category, setCategory] = useState(ALL);
  const [active, setActive] = useState<number | null>(null);
  const track = useRef<HTMLUListElement>(null);

  const categories = [ALL, ...Array.from(new Set(project.gallery.map((g) => g.category)))];
  const visible = project.gallery.filter((g) => category === ALL || g.category === category);
  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * (track.current.clientWidth * 0.7), behavior: "smooth" });

  return (
    <section id="gallery" className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading2 eyebrow="Gallery" title="A closer look" intro="Artistic impressions of the project. Final finishes may vary." />
          <div className="mb-10 flex gap-2 md:mb-14">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scroll(d)}
                aria-label={d < 0 ? "Previous images" : "Next images"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-silver text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {d < 0 ? <FiArrowLeft /> : <FiArrowRight />}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
              className={`min-h-11 rounded-full px-6 text-sm transition-colors ${c === category ? "bg-navy text-white" : "bg-silver-light text-navy hover:bg-blush"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul ref={track} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:gap-6 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visible.map((img, i) => (
          <li key={img.src} className="w-[82%] shrink-0 snap-start md:w-[44%] lg:w-[36%]">
            <button type="button" onClick={() => setActive(i)} aria-label={`View larger: ${img.alt}`} className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="(min-width: 1024px) 36vw, (min-width: 768px) 44vw, 82vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-1.5 text-xs text-navy backdrop-blur">{img.category}</span>
            </button>
          </li>
        ))}
      </ul>
      <ImageLightbox images={visible} index={active} onChange={setActive} />
    </section>
  );
}
