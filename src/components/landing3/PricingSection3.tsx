import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function PricingSection3() {
  const { configurations, pricingDisclaimer, downloads } = project;

  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        title="Configurations and pricing"
        intro="Choose a configuration to see its carpet area and starting price."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {configurations.map((c) => (
          <article
            key={c.name}
            // "group" lets the children react when the whole card is hovered
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-beige bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_25px_50px_-25px_rgba(16,20,61,0.35)]"
          >
            {/* Gold line that draws across the top on hover */}
            <span
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            />

            <h3 className="font-serif text-4xl text-navy transition-colors group-hover:text-gold">
              {c.name}
            </h3>

            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-beige pb-4">
                <dt className="text-navy/60">Carpet area</dt>
                <dd className="font-medium">{c.carpetArea ?? "On request"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-navy/60">Starting price</dt>
                <dd className="rounded-full bg-ivory px-4 py-1.5 font-medium">
                  {c.price ?? "On request"}
                </dd>
              </div>
            </dl>

            {/* Floor plan zooms inside a rounded frame */}
            {c.floorPlan && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-beige">
                <Image
                  src={c.floorPlan.src}
                  alt={c.floorPlan.alt}
                  width={c.floorPlan.width}
                  height={c.floorPlan.height}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* mt-auto pushes the button to the bottom so all cards line up */}
            <div className="mt-auto pt-8">
              <Button
                href="#popup"
                variant="secondary"
                className="w-full rounded-full"
              >
                <span className="inline-flex items-center gap-2">
                  {c.price ? "Enquire Now" : "Enquire for Price"}
                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-navy/65">
          {pricingDisclaimer}
        </p>
        {downloads.priceSheet && (
          <DownloadButton
            item={downloads.priceSheet}
            className="rounded-full"
          />
        )}
      </div>
    </section>
  );
}
