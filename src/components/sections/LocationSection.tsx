import { FiMapPin } from "react-icons/fi";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyMap } from "@/components/ui/LazyMap";

export function LocationSection() {
  const { location, nearby } = project;
  return (
    <section
      id="location"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        title={`Location in ${location.locality}, ${location.city}`}
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <address className="flex gap-3 not-italic leading-relaxed">
            <FiMapPin className="mt-1 shrink-0 text-gold" aria-hidden />
            <span className="ml-2  text-navy/55">Address:</span>
            <b>{location.address}</b>
          </address>
          <ul className="mt-8 divide-y divide-beige border-y border-beige">
            {nearby.map((n) => (
              <li
                key={n.name}
                className="flex items-baseline justify-start gap-6 py-4"
              >
                <FiMapPin className="mt-1 shrink-0 text-gold" aria-hidden />
                <span>
                  {n.name}
                  <span className="ml-2 text-xs text-navy/55">
                    {n.category}
                  </span>
                </span>
                {n.distance && (
                  <span className="shrink-0 text-sm font-medium">
                    {n.distance}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <LazyMap
          src={location.mapEmbedUrl}
          title={`Map showing ${project.name}`}
        />
      </div>
    </section>
  );
}
