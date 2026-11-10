"use client";

import React from "react";
import { MemoryPhoto } from "@/data/letterData";

interface SideMomentsProps {
  photos: MemoryPhoto[];
  side: "left" | "right";
  isRevealed: boolean;
  onPhotoClick: (photo: MemoryPhoto) => void;
}

export default function SideMoments({
  photos,
  side,
  isRevealed,
  onPhotoClick,
}: SideMomentsProps) {
  const sidePhotos = photos.filter((p) => p.side === side);

  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
        isRevealed
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      }`}
    >
      {sidePhotos.map((photo, index) => {
        const transitionDelay = `${250 + index * 150}ms`;

        return (
          <div
            key={photo.id}
            onClick={() => onPhotoClick(photo)}
            style={{
              transform: isRevealed ? `rotate(${photo.tilt}deg)` : "scale(0.8)",
              transitionDelay,
            }}
            className="group relative cursor-pointer rounded-2xl bg-white p-3 shadow-polaroid transition-all duration-300 hover:z-30 hover:scale-105 hover:rotate-0 hover:shadow-2xl active:scale-95 w-48 sm:w-52 md:w-56"
          >
            {/* Washi tape sticker at top */}
            <div className="tape-strip" />

            {/* Photo frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-pink-100/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={photo.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
                onError={(e) => {
                  // Fallback cute pastel gradient if external image fails
                  const target = e.currentTarget;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      "from-pink-200",
                      "via-rose-200",
                      "to-pink-300"
                    );
                  }
                }}
              />
              <div className="absolute top-2 right-2 text-xl drop-shadow-sm">
                {photo.emoji}
              </div>
            </div>

            {/* Polaroid bottom caption */}
            <div className="pt-2.5 pb-1 px-1">
              <p className="truncate text-xs font-medium text-[#4a3b42] font-serif">
                {photo.caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
