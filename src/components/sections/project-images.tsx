"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExpandIcon, X } from "lucide-react";

function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

      <div className="absolute left-4 top-4 z-10 text-sm text-white/70">
        {index + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors cursor-pointer"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <div
        className="relative h-full w-full max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${title} - ${index + 1}`}
          fill
          className="object-contain p-12"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  if (images.length === 0) return null;

  return (
    <>
      <div className="relative overflow-hidden rounded-lg group cursor-pointer bg-muted/30">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative min-w-full aspect-video"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={src}
                alt={`${title} - ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-1.5 text-white opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all cursor-pointer"
        >
          <ExpandIcon className="h-4 w-4" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={current}
          title={title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
