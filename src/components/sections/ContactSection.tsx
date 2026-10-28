import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function ContactSection() {
  const { contact, configurations, downloads } = project;
  return (
    <section id="contact" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            title="Get project details"
            intro="Share your details and our team will call you with current prices, availability and site visit options."
            onDark
          />
          <ul className="space-y-2 text-white/85">
            {contact.phone && <li><a href={`tel:${contact.phone}`} className="hover:text-gold">{contact.phone}</a></li>}
            {contact.email && <li><a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a></li>}
          </ul>
          <DownloadButton item={downloads.brochure} variant="onDark" className="mt-8" />
        </div>
        <div className="text-navy">
          <EnquiryForm configurations={configurations.map((c) => c.name)} />
        </div>
      </div>
    </section>
  );
}
