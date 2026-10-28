"use client";

import Image from "next/image";
import { useState } from "react";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Heading2 } from "./Heading2";

/** One configurator panel with tabs instead of a row of cards. */
export function Pricing2() {
  const { configurations, pricingDisclaimer, downloads } = project;
  const [i, setI] = useState(0);
  const c = configurations[i];

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Heading2 eyebrow="Floor plans & pricing" title="Choose your home" intro="Pick a configuration to see its carpet area and starting price." />

        <div role="tablist" aria-label="Configurations" className="mb-6 flex flex-wrap gap-2">
          {configurations.map((x, idx) => (
            <button
              key={x.name}
              role="tab"
              type="button"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`min-h-12 rounded-full border px-7 text-sm font-medium transition-colors ${idx === i ? "border-navy bg-navy text-white" : "border-silver text-navy hover:border-gold"}`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="grid gap-8 rounded-[2rem] border border-silver bg-ivory p-6 md:p-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            <h3 className="font-display text-6xl font-semibold text-navy md:text-7xl">{c.name}</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-gold pl-5">
                <p className="text-xs uppercase tracking-[0.18em] text-navy/55">Carpet area</p>
                <p className="mt-2 font-display text-3xl font-semibold">{c.carpetArea ?? "On request"}</p>
              </div>
              <div className="border-l-2 border-gold pl-5">
                <p className="text-xs uppercase tracking-[0.18em] text-navy/55">Starting price</p>
                <p className="mt-2 font-display text-3xl font-semibold">{c.price ?? "On request"}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-auto">
              <Button href="#contact" className="rounded-full hover:bg-gold">{c.price ? "Enquire Now" : "Enquire for Price"}</Button>
              {downloads.priceSheet && <DownloadButton item={downloads.priceSheet} className="rounded-full" />}
            </div>
          </div>

          {c.floorPlan ? (
            <Image src={c.floorPlan.src} alt={c.floorPlan.alt} width={c.floorPlan.width} height={c.floorPlan.height} loading="lazy" className="h-auto w-full rounded-2xl border border-silver bg-white" />
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-silver bg-white p-8 text-center">
              <p className="font-display text-3xl font-semibold text-navy">Floor plan on request</p>
              <p className="mt-2 max-w-xs text-sm text-navy/65">Our team will share the {c.name} layout along with current availability.</p>
            </div>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-navy/65">{pricingDisclaimer}</p>
      </div>
    </section>
  );
}
