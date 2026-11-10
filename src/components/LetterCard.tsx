"use client";

import React from "react";
import { RotateCcw, Heart } from "lucide-react";
import { LetterConfig } from "@/data/letterData";
import { playPop } from "@/utils/sound";

interface LetterCardProps {
  config: LetterConfig;
  onFoldBack: () => void;
  isRevealed: boolean;
}

export default function LetterCard({
  config,
  onFoldBack,
  isRevealed,
}: LetterCardProps) {
  return (
    <div
      className={`relative w-full max-w-xl transition-all duration-700 ease-out ${
        isRevealed
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-24 scale-95 pointer-events-none"
      }`}
    >
      {/* Letter Paper Container */}
      <div className="relative rounded-3xl bg-[#fffdfc] p-7 sm:p-10 shadow-card-lift border border-pink-100/80 backdrop-blur-sm">
        {/* Top subtle controls */}
        <div className="mb-6 flex items-center justify-between border-b border-pink-100/70 pb-3">
          <button
            onClick={() => {
              playPop(440);
              onFoldBack();
            }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-pink-600/80 hover:bg-pink-50 hover:text-pink-700 transition-colors"
            title="Fold back into envelope"
            aria-label="Fold back into envelope"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Fold</span>
          </button>

          <span className="text-xs font-serif italic text-pink-400">
            {config.date}
          </span>
        </div>

        {/* Letter Body */}
        <div className="space-y-5 font-serif select-text">
          {/* Salutation */}
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#2d2428]">
            {config.salutation}
          </h2>

          {/* Letter Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#4a3b42] whitespace-pre-line">
            {config.message}
          </div>

          {/* Sign-off & Signature */}
          <div className="pt-4">
            <p className="text-xs sm:text-sm text-[#7a626c] italic">
              {config.signoff}
            </p>
            <p className="mt-1 font-handwriting text-2xl sm:text-3xl text-pink-600 font-semibold">
              {config.signature}
            </p>
          </div>
        </div>

        {/* Delicate heart watermark at bottom right */}
        <div className="pointer-events-none absolute bottom-4 right-4 text-pink-200/50">
          <Heart className="h-8 w-8 fill-pink-100" />
        </div>
      </div>
    </div>
  );
}
