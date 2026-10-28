import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { project } from "@/data/project";
import { possessionYear, projectArea } from "@/data/landing-extras";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function Hero3() {
  const { heroImage, developer, location, status, tagline, configurations } = project;

  const facts = [
    { label: "Starting price", value: configurations[0]?.price ?? "On request" },
    { label: "Configurations", value: configurations.map((c) => c.name).join(" · ") },
    { label: "Possession", value: project.possession ?? possessionYear },
    { label: "Project area", value: projectArea },
  ];

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      {/* Background photo under a dark navy wash */}
      <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/65 to-navy" aria-hidden="true" />

      {/* Thin gold lines on both edges */}
      <div className="absolute inset-y-0 left-3 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent md:left-[3%]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-3 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent md:right-[3%]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-36 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">By {developer.name}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">{project.name}</h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-2">
            <FiMapPin className="text-gold" aria-hidden /> {location.locality}, {location.city}
          </span>
          {status && (
            <span className="border border-gold px-3 py-1 text-xs uppercase tracking-widest text-gold">{status}</span>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">{tagline}.</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#popup" className="bg-gold text-white hover:bg-white hover:text-navy">Enquire Now</Button>
          <DownloadButton item={project.downloads.brochure} variant="onDark" />
        </div>

        {/* gap-px on a lighter background draws the thin cell borders */}
        <dl className="mt-12 grid grid-cols-2 gap-px border border-white/25 bg-white/25 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-navy/90 p-5">
              <dt className="text-xs uppercase tracking-[0.15em] text-gold">{f.label}</dt>
              <dd className="mt-2 font-serif text-xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
