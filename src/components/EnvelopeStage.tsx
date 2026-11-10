"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import { playShakeSound, playOpenChime } from "@/utils/sound";
import SideMoments from "./SideMoments";
import LetterCard from "./LetterCard";
import PhotoLightbox from "./PhotoLightbox";
import { CuteBearSticker, CuteBunnySticker, SparkleIcon } from "./CuteStickers";
import { LetterConfig, MemoryPhoto } from "@/data/letterData";

interface EnvelopeStageProps {
  config: LetterConfig;
}

export default function EnvelopeStage({ config }: EnvelopeStageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const handleEnvelopeClick = () => {
    if (isOpen || isShaking) return;

    // Phase 1: Anticipation Shake
    setIsShaking(true);
    playShakeSound();

    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);

      // Phase 2: Open Chime & Celebration Confetti
      playOpenChime();

      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#f43f7a", "#fda4c0", "#f472b6", "#fff1f5", "#fbbf24"],
        });
        setTimeout(() => {
          confetti({
            particleCount: 35,
            angle: 60,
            spread: 55,
            origin: { x: 0.2, y: 0.6 },
            colors: ["#f43f7a", "#fbcfe8", "#ffffff"],
          });
          confetti({
            particleCount: 35,
            angle: 120,
            spread: 55,
            origin: { x: 0.8, y: 0.6 },
            colors: ["#f43f7a", "#fbcfe8", "#ffffff"],
          });
        }, 200);
      } catch {
        // Safe fallback
      }

      // Phase 3: Reveal letter and side memories
      setTimeout(() => {
        setIsRevealed(true);
      }, 500);
    }, 700);
  };

  const handleFoldBack = () => {
    setIsRevealed(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 select-none overflow-x-hidden">
      {/* Floating Cute Background Stickers & Sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-12 left-10 animate-soft-float opacity-70">
          <CuteBearSticker className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div
          className="absolute bottom-16 right-10 animate-soft-float opacity-70"
          style={{ animationDelay: "2s" }}
        >
          <CuteBunnySticker className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="absolute top-24 right-1/4 animate-pulse opacity-60">
          <SparkleIcon className="w-5 h-5 text-pink-400" />
        </div>
        <div
          className="absolute bottom-28 left-1/4 animate-pulse opacity-60"
          style={{ animationDelay: "1.2s" }}
        >
          <SparkleIcon className="w-4 h-4 text-rose-400" />
        </div>
      </div>

      {/* Main Container: 2 images left, Letter in middle, 2 images right */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-10">
        {/* Desktop Left Side Images (2 images) */}
        {isRevealed && (
          <div className="hidden lg:block lg:mt-6">
            <SideMoments
              photos={config.photos}
              side="left"
              isRevealed={isRevealed}
              onPhotoClick={(photo) => setSelectedPhoto(photo)}
            />
          </div>
        )}

        {/* Center: The Envelope and Letter */}
        <div className="flex flex-col items-center justify-center">
          {!isRevealed ? (
            /* Unopened / Opening Envelope Container */
            <div
              onClick={handleEnvelopeClick}
              className={`group relative cursor-pointer select-none transition-transform duration-300 ${
                isShaking ? "animate-shake" : "hover:scale-103"
              }`}
            >
              {/* Envelope Body */}
              <div className="perspective-1200 relative h-56 w-80 sm:h-64 sm:w-96 rounded-2xl bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 shadow-envelope border border-white/60">
                {/* Envelope Interior Pocket */}
                <div className="absolute inset-0 rounded-2xl bg-rose-200/50" />

                {/* Top Flap (Rotates 180deg upward when open) */}
                <div
                  style={{
                    transformOrigin: "top",
                    transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
                    transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="preserve-3d absolute top-0 left-0 right-0 z-30 h-32"
                >
                  {/* Flap Outer Surface */}
                  <div
                    className="absolute inset-0 flex items-center justify-center backface-hidden"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      background: "linear-gradient(180deg, #f472b6 0%, #fb7185 100%)",
                    }}
                  >
                    {/* Wax Seal with Heart */}
                    {!isOpen && (
                      <div className="wax-seal -mt-6 flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <Heart className="h-6 w-6 fill-white text-white drop-shadow" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Side Fold Left */}
                <div
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 50% 50%)",
                    background: "linear-gradient(135deg, #f47299 0%, #fb7185 100%)",
                    opacity: 0.85,
                  }}
                />

                {/* Side Fold Right */}
                <div
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
                    background: "linear-gradient(225deg, #f47299 0%, #fb7185 100%)",
                    opacity: 0.85,
                  }}
                />

                {/* Bottom Fold */}
                <div
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    clipPath: "polygon(0 100%, 100% 100%, 50% 45%)",
                    background: "linear-gradient(0deg, #ec4899 0%, #f43f7a 100%)",
                  }}
                />

                {/* Peek of Letter Paper inside */}
                <div
                  style={{
                    transform: isOpen ? "translateY(-40px)" : "translateY(0px)",
                    transition: "transform 0.5s ease-out",
                  }}
                  className="absolute inset-x-6 top-4 z-10 h-28 rounded-t-xl bg-[#fffdfc] shadow-sm flex items-center justify-center border-t border-pink-100"
                >
                  <Heart className="h-4 w-4 fill-pink-300 text-pink-300 opacity-60" />
                </div>
              </div>
            </div>
          ) : (
            /* Revealed Letter View */
            <div className="w-full flex justify-center">
              <LetterCard
                config={config}
                onFoldBack={handleFoldBack}
                isRevealed={isRevealed}
              />
            </div>
          )}
        </div>

        {/* Desktop Right Side Images (2 images) */}
        {isRevealed && (
          <div className="hidden lg:block lg:mt-6">
            <SideMoments
              photos={config.photos}
              side="right"
              isRevealed={isRevealed}
              onPhotoClick={(photo) => setSelectedPhoto(photo)}
            />
          </div>
        )}

        {/* Mobile Side Images (2 on left, 2 on right side-by-side) */}
        {isRevealed && (
          <div className="mt-8 flex w-full max-w-lg items-start justify-center gap-3 sm:gap-6 lg:hidden">
            <SideMoments
              photos={config.photos}
              side="left"
              isRevealed={isRevealed}
              onPhotoClick={(photo) => setSelectedPhoto(photo)}
            />
            <SideMoments
              photos={config.photos}
              side="right"
              isRevealed={isRevealed}
              onPhotoClick={(photo) => setSelectedPhoto(photo)}
            />
          </div>
        )}
      </div>

      {/* Lightbox for zooming photos */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
