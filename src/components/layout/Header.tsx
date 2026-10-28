"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import { project } from "@/data/project";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Floor Plans" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

// Floor Plans and Pricing share one section, so show it once in the nav.
const navLinks = links.filter(
  (l, i) => !(l.label === "Pricing" && links[i - 1]?.href === l.href),
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-ivory transition-shadow ${scrolled ? "shadow-[0_1px_0_#e2d5c6,0_8px_24px_-16px_rgba(16,20,61,0.35)]" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* <Link href="#top" className="font-serif text-2xl font-semibold text-navy">
          {"project.name"}
        </Link> */}
        <Link
          href="#top"
          aria-label="Go to homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/logo/zenvara-logo.png"
            alt="Project Logo"
            width={180}
            height={60}
            priority
            className="h-20 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-navy transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center bg-navy px-5 text-sm font-medium text-white hover:bg-navy/90"
          >
            Enquire Now
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-beige bg-ivory px-5 pb-6 lg:hidden"
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-beige py-4 text-lg text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center bg-navy text-sm font-medium text-white"
          >
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
}
