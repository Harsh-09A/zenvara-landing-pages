import {
  FiArrowUpRight, FiAward, FiCalendar, FiCreditCard, FiHome,
  FiLayers, FiMapPin, FiMaximize, FiShield, FiSun,
} from "react-icons/fi";
import { project } from "@/data/project";
import { stats, trustBadges } from "@/data/landing-extras";

// Icons are matched to stats / badges by position.
const statIcons = [FiLayers, FiArrowUpRight, FiHome, FiSun, FiMaximize, FiCalendar];
const badgeIcons = [FiShield, FiCreditCard, FiMapPin, FiAward];

export function Highlights3() {
  return (
    <section id="highlights" className="bg-ivory">
      <div className="deco-fans h-7" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="text-center">
          <p className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Highlights
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </p>
          <h2 className="mt-4 font-cinzel text-3xl uppercase text-maroon md:text-5xl">
            {project.name}, in numbers
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <li key={s.label} className="flex flex-col items-center border border-gold/30 bg-white px-4 py-9 text-center">
                <Icon className="text-3xl text-maroon" aria-hidden />
                <span className="mt-4 font-display text-5xl font-semibold text-maroon">{s.value}</span>
                <span className="mt-3 text-xs uppercase tracking-[0.15em] text-navy/60">{s.label}</span>
              </li>
            );
          })}
        </ul>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {trustBadges.map((b, i) => {
            const Icon = badgeIcons[i];
            return (
              <li key={b} className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-5 py-3 text-xs uppercase tracking-wider text-navy">
                <Icon className="text-maroon" aria-hidden /> {b}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
