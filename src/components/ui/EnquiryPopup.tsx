"use client";

import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { project } from "@/data/project";
import { EnquiryForm } from "./EnquiryForm";

const AUTO_OPEN_MS = 5000; // popup opens by itself after 5 seconds

export function EnquiryPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    let shown = false;
    const open = () => {
      if (dialog.open) return;
      shown = true;
      dialog.showModal();
    };

    // 1) Auto open after 5 seconds (only if the visitor has not opened it already)
    const timer = setTimeout(() => {
      if (!shown) open();
    }, AUTO_OPEN_MS);

    // 2) Every button/link that points to #contact opens the popup instead of scrolling
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href="#popup"]');
      if (!link) return;
      e.preventDefault();
      open();
    };
    document.addEventListener("click", onClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Enquiry form"
      // clicking the dark backdrop closes it
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="m-auto w-[calc(100%-1.5rem)] max-w-lg bg-transparent p-0 backdrop:bg-navy/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] overflow-y-auto bg-white">
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center text-navy hover:text-gold"
        >
          <FiX size={24} />
        </button>
        <div className="px-6 pt-8 md:px-8">
          <p className="font-serif text-3xl text-navy">Get project details</p>
          <p className="mt-2 text-sm text-navy/70">Share your details and our team will call you back.</p>
        </div>
        <EnquiryForm configurations={project.configurations.map((c) => c.name)} />
      </div>
    </dialog>
  );
}
