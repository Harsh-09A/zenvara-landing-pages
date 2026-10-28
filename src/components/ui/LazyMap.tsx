"use client";

import { useEffect, useRef, useState } from "react";

/** Mounts the iframe only when the map scrolls near the viewport. */
export function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="aspect-[4/3] w-full bg-beige md:aspect-auto md:h-full md:min-h-[420px]">
      {show && <iframe src={src} title={title} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />}
    </div>
  );
}
