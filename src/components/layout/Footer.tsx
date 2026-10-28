import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { project } from "@/data/project";
import { Button } from "@/components/ui/Button";

const quickLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

// Cache Components forbids reading the clock during prerender, so the year is cached.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const { contact, location, rera } = project;
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-3xl">{project.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {project.tagline}. Developed by {project.developer.name}.
          </p>
          <Button href="#contact" variant="onDark" className="mt-6">
            Enquire Now
          </Button>
        </div>

        <nav aria-label="Footer">
          <p className="font-serif text-xl text-gold">Quick links</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-serif text-xl text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><FiMapPin className="mt-0.5 shrink-0 text-gold" aria-hidden /> {location.address}</li>
            {contact.phone && (
              <li className="flex gap-3"><FiPhone className="mt-0.5 shrink-0 text-gold" aria-hidden /> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
            )}
            {contact.email && (
              <li className="flex gap-3"><FiMail className="mt-0.5 shrink-0 text-gold" aria-hidden /> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-8 text-xs leading-relaxed text-white/60 md:px-8">
          {rera && <p>MahaRERA registration no. {rera.number}</p>}
          <p>{project.legalDisclaimer}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {/* TODO: create /privacy-policy and /terms pages, then link them here. */}
            <span>© <CopyrightYear /> {project.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
