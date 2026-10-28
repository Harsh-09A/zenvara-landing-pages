"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { GalleryImage } from "@/types/project";

interface ImageLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onChange: (index: number | null) => void;
}

/** Native <dialog>: focus trap, Esc to close and backdrop come from the browser. */
export function ImageLightbox({ images, index, onChange }: ImageLightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onChange]);

  const image = index !== null ? images[index] : null;

  return (
    <dialog
      ref={ref}
      aria-label="Image viewer"
      onClose={() => onChange(null)}
      onClick={(e) => e.target === ref.current && onChange(null)}
      className="m-auto h-full max-h-none w-full max-w-none bg-navy/95 p-0 backdrop:bg-transparent"
    >
      {image && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 text-white">
            <p className="text-sm" aria-live="polite">
              {(index ?? 0) + 1} / {images.length}
            </p>
            <button type="button" onClick={() => onChange(null)} aria-label="Close" className="p-2">
              <FiX size={26} />
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-contain px-2 md:px-20"
            />
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => onChange(((index ?? 0) - 1 + images.length) % images.length)}
              className="absolute left-1 top-1/2 -translate-y-1/2 p-3 text-white md:left-5"
            >
              <FiChevronLeft size={34} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => onChange(((index ?? 0) + 1) % images.length)}
              className="absolute right-1 top-1/2 -translate-y-1/2 p-3 text-white md:right-5"
            >
              <FiChevronRight size={34} />
            </button>
          </div>
          <p className="p-4 text-center text-sm text-white/80">{image.alt}</p>
        </div>
      )}
    </dialog>
  );
}
