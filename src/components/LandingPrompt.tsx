"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Heart } from "lucide-react";
import { playPop } from "@/utils/sound";

interface LandingPromptProps {
  onAccept: () => void;
}

const NO_TEXT_STAGES = [
  "No",
  "No 🙈",
  "Are you sure? 🥺",
  "Can't catch me! 💨",
  "Still no? 🌸",
  "Nope! ✨",
  "Nu-uh 🏃",
  "Try again! 🎀",
];

export default function LandingPrompt({ onAccept }: LandingPromptProps) {
  const [dodgeCount, setDodgeCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const dodgeNoButton = useCallback(() => {
    playPop(480 + Math.min(dodgeCount * 28, 280));
    setDodgeCount((prev) => prev + 1);

    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 800;
    const screenHeight = typeof window !== "undefined" ? window.innerHeight : 600;

    const maxOffsetX = Math.min(screenWidth * 0.35, 240);
    const maxOffsetY = Math.min(screenHeight * 0.28, 180);

    const randomAngle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 110;
    const newX = Math.cos(randomAngle) * Math.min(distance, maxOffsetX);
    const newY = Math.sin(randomAngle) * Math.min(distance, maxOffsetY);

    setNoPosition({
      x: Math.max(-maxOffsetX, Math.min(maxOffsetX, newX)),
      y: Math.max(-maxOffsetY, Math.min(maxOffsetY, newY)),
    });
  }, [dodgeCount]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!noButtonRef.current) return;
      const rect = noButtonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (distance < 70) {
        dodgeNoButton();
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [dodgeNoButton]);

  const yesScale = Math.min(1 + dodgeCount * 0.14, 2.2);
  const noLabel = NO_TEXT_STAGES[dodgeCount % NO_TEXT_STAGES.length];

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center select-none">
      <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-[#2d2428] sm:text-4xl md:text-5xl font-serif">
        Do you want to see the letter?
      </h1>

      <div className="relative mt-12 flex items-center justify-center gap-6 min-h-[140px] w-full max-w-md">
        {/* Yes Button (Scales up with each dodge) */}
        <button
          onClick={() => {
            playPop(720);
            onAccept();
          }}
          style={{
            transform: `scale(${yesScale})`,
          }}
          className="spring-scale z-20 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-3.5 text-base font-semibold text-white shadow-card-lift hover:brightness-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300/40"
        >
          <Heart className="h-4 w-4 fill-white" />
          <span>Yes</span>
        </button>

        {/* No Button (Dodges away) */}
        <button
          ref={noButtonRef}
          onMouseEnter={dodgeNoButton}
          onTouchStart={(e) => {
            e.preventDefault();
            dodgeNoButton();
          }}
          onClick={(e) => {
            e.preventDefault();
            dodgeNoButton();
          }}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          className="dodge-transition z-10 rounded-full border border-pink-200/90 bg-white/80 px-7 py-3 text-sm font-medium text-[#7a626c] shadow-sm backdrop-blur-sm hover:border-pink-300 hover:text-pink-600 active:scale-90"
        >
          {noLabel}
        </button>
      </div>
    </div>
  );
}
