"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import type { ProjectVideo } from "@/types/project";

/** Shows the poster first; the video or iframe loads only after the click. */
export function VideoPlayer({ video }: { video: ProjectVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-navy">
      {playing ? (
        video.type === "youtube" ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="absolute inset-0 h-full w-full" src={video.src} controls autoPlay playsInline />
        )
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`} className="group absolute inset-0">
          <Image src={video.poster.src} alt={video.poster.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          <span className="absolute inset-0 bg-navy/30" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold bg-navy/80 text-white transition-colors group-hover:bg-gold">
            <FiPlay size={24} aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
