"use client";

import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { project } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyMap } from "@/components/ui/LazyMap";

const ALL = "All";

export function LocationSection3() {
  const { location, nearby } = project;
  const [activeTab, setActiveTab] = useState(ALL);

  // Tabs come from the data, so a new category shows up automatically
  const tabs = [ALL, ...Array.from(new Set(nearby.map((n) => n.category)))];
  const places = nearby.filter(
    (n) => activeTab === ALL || n.category === activeTab,
  );

  return (
    <section
      id="location"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        title={`Location in ${location.locality}, ${location.city}`}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* LEFT: address + filter tabs + nearby places */}
        <div>
          <address className="flex items-start gap-4 rounded-2xl bg-ivory p-5 not-italic leading-relaxed">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold">
              <FiMapPin aria-hidden />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-navy/55">
                Address
              </span>
              <b className="text-navy">{location.address}</b>
            </span>
          </address>

          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Nearby places"
            className="mt-6 flex flex-wrap gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={tab === activeTab}
                onClick={() => setActiveTab(tab)}
                className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-300 ${
                  tab === activeTab
                    ? "border-navy bg-navy text-white"
                    : "border-beige bg-white text-navy hover:border-gold hover:text-gold"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* key={activeTab} restarts the fade-in each time the tab changes */}
          <ul
            key={activeTab}
            role="tabpanel"
            className="mt-5 animate-[fadeIn_0.4s_ease-out] space-y-3"
          >
            {places.map((n) => (
              <li
                key={n.name}
                className="group flex items-center gap-4 rounded-2xl border border-beige bg-white p-4 transition duration-300 hover:translate-x-1 hover:border-gold/60 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <FiMapPin aria-hidden />
                </span>

                <span className="flex-1">
                  <span className="block text-navy transition-colors group-hover:text-gold">
                    {n.name}
                  </span>
                  <span className="block text-xs text-navy/55">
                    {n.category}
                  </span>
                </span>

                {n.distance && (
                  <span className="ml-auto shrink-0 rounded-full bg-ivory px-3 py-1 text-sm font-medium">
                    {n.distance}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: map */}
        <div className="overflow-hidden rounded-3xl border border-beige shadow-[0_25px_60px_-35px_rgba(16,20,61,0.5)]">
          <LazyMap
            src={location.mapEmbedUrl}
            title={`Map showing ${project.name}`}
          />
        </div>
      </div>
    </section>
  );
}
