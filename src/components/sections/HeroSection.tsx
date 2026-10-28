import Image from "next/image";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function HeroSection() {
  const { heroImage, location, rera, status, possession, developer } = project;
  const facts = [
    status && `Status: ${status}`,
    possession && `Possession: ${possession}`,
    `Developer: ${developer.name}`,
    rera && `MahaRERA: ${rera.number}`,
  ].filter(Boolean) as string[];

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end bg-navy text-white">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/20" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <p className="hero-rise text-sm text-gold md:text-base">
          {location.locality}, {location.city}
        </p>
        <h1 className="hero-rise mt-3 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
          {project.name}: {project.propertyType.toLowerCase()} in {location.locality}, South Mumbai
        </h1>
        <p className="hero-rise-delay mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          {project.tagline}.
        </p>

        <div className="hero-rise-delay mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#popup" >Enquire Now</Button>
          <DownloadButton item={project.downloads.brochure} variant="onDark" />
        </div>

        <ul className="hero-rise-delay mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-gold/50 pt-5 text-sm text-white/80">
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
