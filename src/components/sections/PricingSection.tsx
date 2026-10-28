import Image from "next/image";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function PricingSection() {
  const { configurations, pricingDisclaimer, downloads } = project;
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        title="Configurations and pricing"
        intro="Choose a configuration to see its carpet area and starting price."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {configurations.map((c) => (
          <article key={c.name} className="flex flex-col border border-beige bg-white p-7">
            <h3 className="font-serif text-3xl">{c.name}</h3>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between border-b border-beige pb-3">
                <dt className="text-navy/60">Carpet area</dt>
                <dd className="font-medium">{c.carpetArea ?? "On request"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-navy/60">Starting price</dt>
                <dd className="font-medium">{c.price ?? "On request"}</dd>
              </div>
            </dl>

            {c.floorPlan && (
              <Image
                src={c.floorPlan.src}
                alt={c.floorPlan.alt}
                width={c.floorPlan.width}
                height={c.floorPlan.height}
                loading="lazy"
                className="mt-5 h-auto w-full border border-beige"
              />
            )}

            <Button href="#contact" variant="secondary" className="mt-7">
              {c.price ? "Enquire Now" : "Enquire for Price"}
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-navy/65">{pricingDisclaimer}</p>
        {downloads.priceSheet && <DownloadButton item={downloads.priceSheet} />}
      </div>
    </section>
  );
}
