"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Floor Plans" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

/** Floating glass pill instead of a full-width bar. */
export function Header2() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-5 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-silver/70 bg-white/80 shadow-[0_10px_40px_-18px_rgba(16,20,61,0.45)] backdrop-blur-md">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 md:h-[68px]">
          <a href="#top" aria-label="Go to top" className="shrink-0">
            <Image src="/images/logo/zenvara-logo.png" alt="Project logo" width={180} height={60} priority className="h-11 w-auto object-contain" />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="rounded-full px-4 py-2 text-sm text-navy/80 transition-colors hover:bg-sage/60 hover:text-navy">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden min-h-11 items-center rounded-full bg-navy px-6 text-sm font-medium text-white transition-colors hover:bg-gold md:inline-flex">
              Enquire Now
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-silver-light text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav2"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav2" aria-label="Mobile" className="border-t border-silver/60 p-3 lg:hidden">
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl bg-ivory px-4 py-3 text-sm text-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-navy text-sm font-medium text-white">
              Enquire Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
