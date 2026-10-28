import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiPlus } from "react-icons/fi";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { AmenityIcon } from "@/components/ui/AmenityIcon";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { LazyMap } from "@/components/ui/LazyMap";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Heading2 } from "./Heading2";

const wrap = "mx-auto max-w-7xl px-5 md:px-8";
const tints = ["bg-blush", "bg-sage", "bg-sky", "bg-butter"];
const pill = "rounded-full";

export function Hero2() {
  const { heroImage, location, rera, status, possession, developer } = project;
  const facts = [
    status && `Status: ${status}`,
    possession && `Possession: ${possession}`,
    `Developer: ${developer.name}`,
    rera && `MahaRERA: ${rera.number}`,
  ].filter(Boolean) as string[];

  return (
    <section id="top" className="relative overflow-hidden bg-ivory pb-16 pt-28 md:pt-36 lg:pb-24">
      <div aria-hidden="true" className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-sage/70 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky/80 blur-3xl" />
      <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`}>
        <div>
          <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-silver bg-white/70 px-4 py-2 text-sm text-navy">
            <FiMapPin className="text-gold" aria-hidden /> {location.locality}, {location.city}
          </p>
          <h1 className="hero-rise mt-6 font-display text-5xl font-semibold leading-[1.02] text-navy md:text-7xl">
            {project.name}: {project.propertyType.toLowerCase()} in {location.locality}, South Mumbai
          </h1>
          <p className="hero-rise-delay mt-6 max-w-lg text-base leading-relaxed text-navy/75 md:text-lg">{project.tagline}.</p>
          <div className="hero-rise-delay mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className={`${pill} bg-gold hover:bg-navy`}>Enquire Now</Button>
            <DownloadButton item={project.downloads.brochure} variant="secondary" className={`${pill} border-silver`} />
          </div>
          <ul className="hero-rise-delay mt-10 flex flex-wrap gap-2">
            {facts.map((f, i) => (
              <li key={f} className={`${pill} ${tints[i % 4]} px-4 py-2 text-xs text-navy md:text-sm`}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-8 border-white shadow-[0_30px_70px_-30px_rgba(16,20,61,0.55)]">
            <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-center" />
          </div>
          <div className="absolute -bottom-5 left-0 rounded-2xl border border-silver bg-white/90 px-5 py-4 shadow-lg backdrop-blur md:-left-6">
            <p className="font-display text-2xl font-semibold text-navy">{project.name}</p>
            <p className="text-xs text-navy/65">by {developer.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Overview2() {
  const { description, highlights, specifications, overviewImage, developer } = project;
  return (
    <section id="overview" className="bg-white py-20 md:py-28">
      <div className={wrap}>
        <Heading2 center eyebrow="Overview" title={`About ${project.name}`} />
        <div className="mx-auto grid max-w-5xl gap-6 leading-[1.85] text-navy/75 md:grid-cols-2 md:gap-12">
          {description.map((p) => <p key={p}>{p}</p>)}
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <li key={h.title} className={`rounded-[1.75rem] ${tints[i % 4]} p-7`}>
              <span className="font-display text-4xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{h.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2rem]">
            <Image src={overviewImage.src} alt={overviewImage.alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="space-y-6">
            <dl className="rounded-[1.75rem] border border-silver bg-ivory p-2">
              {specifications.map((s) => (
                <div key={s.label} className="flex justify-between gap-6 rounded-2xl px-5 py-4 text-sm odd:bg-white">
                  <dt className="text-navy/60">{s.label}</dt>
                  <dd className="text-right font-medium text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-[1.75rem] bg-navy p-7 text-white">
              <h3 className="font-display text-3xl font-semibold">About {developer.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{developer.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Videos2() {
  if (project.videos.length === 0) return null;
  return (
    <section id="videos" className="bg-ivory py-20 md:py-28">
      <div className={wrap}>
        <Heading2 eyebrow="Videos" title="See it in motion" />
        <div className="grid gap-8 md:grid-cols-2">
          {project.videos.map((v) => (
            <figure key={v.src}>
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lg"><VideoPlayer video={v} /></div>
              <figcaption className="mt-4 px-2 text-sm text-navy/75">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing2() {
  const { configurations, pricingDisclaimer, downloads } = project;
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className={wrap}>
        <Heading2 eyebrow="Floor plans & pricing" title="Choose your home" intro="Choose a configuration to see its carpet area and starting price." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {configurations.map((c, i) => (
            <article key={c.name} className="flex flex-col overflow-hidden rounded-[2rem] border border-silver bg-ivory">
              <div className={`${tints[i % 4]} px-7 py-6`}>
                <h3 className="font-display text-4xl font-semibold text-navy">{c.name}</h3>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-silver pb-3">
                    <dt className="text-navy/60">Carpet area</dt>
                    <dd className="font-medium">{c.carpetArea ?? "On request"}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-navy/60">Starting price</dt>
                    <dd className="font-medium">{c.price ?? "On request"}</dd>
                  </div>
                </dl>
                {c.floorPlan && (
                  <Image src={c.floorPlan.src} alt={c.floorPlan.alt} width={c.floorPlan.width} height={c.floorPlan.height} loading="lazy" className="mt-5 h-auto w-full rounded-2xl border border-silver bg-white" />
                )}
                <Button href="#contact" variant="primary" className={`${pill} mt-auto hover:bg-gold`}>
                  {c.price ? "Enquire Now" : "Enquire for Price"}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-navy/65">{pricingDisclaimer}</p>
          {downloads.priceSheet && <DownloadButton item={downloads.priceSheet} className={pill} />}
        </div>
      </div>
    </section>
  );
}

export function Amenities2() {
  const { featuredAmenities, amenities } = project;
  return (
    <section id="amenities" className="bg-navy py-20 text-white md:py-28">
      <div className={wrap}>
        <Heading2 onDark eyebrow="Amenities" title="Life, elevated" />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredAmenities.map((a) => (
            <article key={a.name} className="group relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src={a.image.src} alt={a.image.alt} fill loading="lazy" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                <h3 className="font-display text-3xl font-semibold">{a.name}</h3>
                <p className="mt-1 text-sm text-white/80">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {amenities.map((a) => (
            <li key={a.name} className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2.5 pl-2.5 pr-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <AmenityIcon name={a.icon} className="h-5 w-5 text-gold" />
              </span>
              <span className="text-sm">{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Location2() {
  const { location, nearby } = project;
  return (
    <section id="location" className="bg-ivory py-20 md:py-28">
      <div className={wrap}>
        <Heading2 eyebrow="Location" title={`Location in ${location.locality}, ${location.city}`} />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <address className="flex gap-3 rounded-2xl bg-sky p-5 not-italic leading-relaxed">
              <FiMapPin className="mt-1 shrink-0 text-gold" aria-hidden />
              <span><span className="text-navy/60">Address: </span><b>{location.address}</b></span>
            </address>
            <ul className="mt-5 space-y-2">
              {nearby.map((n) => (
                <li key={n.name} className="flex items-center justify-between gap-4 rounded-full border border-silver bg-white px-5 py-3 text-sm">
                  <span>{n.name} <span className="ml-1 text-xs text-navy/55">{n.category}</span></span>
                  {n.distance && <span className="shrink-0 rounded-full bg-butter px-3 py-1 text-xs font-medium">{n.distance}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lg">
            <LazyMap src={location.mapEmbedUrl} title={`Map showing ${project.name}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact2() {
  const { contact, configurations, downloads } = project;
  return (
    <section id="contact" className="bg-white px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[2.5rem] bg-navy px-5 py-12 text-white md:px-12 md:py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading2 onDark eyebrow="Enquire" title="Get project details" intro="Share your details and our team will call you with current prices, availability and site visit options." />
          <ul className="space-y-3 text-white/85">
            {contact.phone && <li className="flex items-center gap-3"><FiPhone className="text-gold" aria-hidden /><a href={`tel:${contact.phone}`} className="hover:text-gold">{contact.phone}</a></li>}
            {contact.email && <li className="flex items-center gap-3"><FiMail className="text-gold" aria-hidden /><a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a></li>}
          </ul>
          <DownloadButton item={downloads.brochure} variant="onDark" className={`${pill} mt-8`} />
        </div>
        <div className="rounded-[2rem] text-navy"><EnquiryForm configurations={configurations.map((c) => c.name)} /></div>
      </div>
    </section>
  );
}

export function Faq2() {
  return (
    <section id="faq" className="bg-ivory py-20 md:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading2 eyebrow="FAQ" title="Frequently asked questions" />
        </div>
        <div className="space-y-3">
          {project.faqs.map((f) => (
            <details key={f.question} className="group rounded-3xl border border-silver bg-white px-6 py-5 open:bg-sky/50">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl font-semibold [&::-webkit-details-marker]:hidden">
                {f.question}
                <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-butter text-gold transition-transform group-open:rotate-45"><FiPlus /></span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-navy/75">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cache Components forbids reading the clock during prerender, so the year is cached.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer2() {
  const { contact, location, rera } = project;
  const links = [["#overview", "Overview"], ["#gallery", "Gallery"], ["#amenities", "Amenities"], ["#pricing", "Pricing"], ["#location", "Location"], ["#faq", "FAQ"]];
  return (
    <footer className="rounded-t-[2.5rem] bg-navy text-white">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-3`}>
        <div>
          <p className="font-display text-4xl font-semibold">{project.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{project.tagline}. Developed by {project.developer.name}.</p>
          <Button href="#contact" variant="onDark" className={`${pill} mt-6 hover:bg-gold hover:text-navy`}>Enquire Now</Button>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-2xl font-semibold text-gold">Quick links</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {links.map(([href, label]) => (
              <li key={href}><a href={href} className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-gold hover:text-navy">{label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-2xl font-semibold text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><FiMapPin className="mt-0.5 shrink-0 text-gold" aria-hidden /> {location.address}</li>
            {contact.phone && <li className="flex gap-3"><FiPhone className="mt-0.5 shrink-0 text-gold" aria-hidden /><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>}
            {contact.email && <li className="flex gap-3"><FiMail className="mt-0.5 shrink-0 text-gold" aria-hidden /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className={`${wrap} space-y-3 py-8 text-xs leading-relaxed text-white/60`}>
          {rera && <p>MahaRERA registration no. {rera.number}</p>}
          <p>{project.legalDisclaimer}</p>
          <span>© <CopyrightYear /> {project.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export function MobileCta2() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-30 px-4 md:hidden">
      <a href="#contact" className="flex min-h-12 items-center justify-center rounded-full bg-gold text-sm font-medium text-navy shadow-[0_10px_30px_-8px_rgba(16,20,61,0.6)]">
        Request a Callback
      </a>
    </div>
  );
}
