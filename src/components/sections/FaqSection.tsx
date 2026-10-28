import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Native <details>: keyboard accessible, works without JavaScript. */
export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading title="Frequently asked questions" />
      <div className="divide-y divide-beige border-y border-beige">
        {project.faqs.map((f) => (
          <details key={f.question} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl [&::-webkit-details-marker]:hidden">
              {f.question}
              <span aria-hidden className="text-2xl text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-navy/75">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
