"use client";

import React, { useEffect } from "react";
import { X, Heart } from "lucide-react";
import { MemoryPhoto } from "@/data/letterData";

interface PhotoLightboxProps {
  photo: MemoryPhoto | null;
  onClose: () => void;
}

export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (photo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full rounded-3xl bg-white p-4 shadow-2xl transition-all duration-300 border border-pink-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-pink-50 hover:text-pink-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Polaroid frame */}
        <div className="overflow-hidden rounded-2xl bg-pink-50/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.url}
            alt={photo.caption}
            className="h-80 w-full object-cover sm:h-96"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-center justify-between px-2 pb-1">
          <p className="text-base font-medium text-[#2d2428] font-serif">
            {photo.caption}
          </p>
          <span className="text-2xl">{photo.emoji}</span>
        </div>
      </div>
    </div>
  );
}
