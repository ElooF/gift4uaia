"use client";

import React from "react";

export function SparkleIcon({ className = "w-5 h-5 text-pink-400" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function HeartSticker({ className = "w-6 h-6 text-rose-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function CuteBearSticker({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Ears */}
      <circle cx="28" cy="30" r="14" fill="#FBCFE8" />
      <circle cx="28" cy="30" r="8" fill="#F472B6" />
      <circle cx="72" cy="30" r="14" fill="#FBCFE8" />
      <circle cx="72" cy="30" r="8" fill="#F472B6" />
      {/* Head */}
      <ellipse cx="50" cy="54" rx="34" ry="30" fill="#FFF1F2" stroke="#F472B6" strokeWidth="2.5" />
      {/* Eyes */}
      <ellipse cx="38" cy="50" rx="3.5" ry="4.5" fill="#4C0519" />
      <ellipse cx="62" cy="50" rx="3.5" ry="4.5" fill="#4C0519" />
      <circle cx="39" cy="48.5" r="1.5" fill="white" />
      <circle cx="63" cy="48.5" r="1.5" fill="white" />
      {/* Cheeks */}
      <ellipse cx="30" cy="58" rx="5" ry="3" fill="#FDA4AF" opacity="0.8" />
      <ellipse cx="70" cy="58" rx="5" ry="3" fill="#FDA4AF" opacity="0.8" />
      {/* Snout & Nose */}
      <ellipse cx="50" cy="58" rx="9" ry="7" fill="white" />
      <polygon points="50,56 46,52 54,52" fill="#F43F5E" />
      <path d="M47 60 Q50 62 53 60" stroke="#881337" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Little Heart */}
      <path
        d="M50 78 C50 74 42 70 42 66 C42 63.5 44 61.5 46.5 61.5 C48 61.5 49.5 62.5 50 63.5 C50.5 62.5 52 61.5 53.5 61.5 C56 61.5 58 63.5 58 66 C58 70 50 74 50 78 Z"
        fill="#F43F5E"
      />
    </svg>
  );
}

export function CuteBunnySticker({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Ears */}
      <ellipse cx="36" cy="24" rx="8" ry="20" fill="#FFF1F2" stroke="#FB7185" strokeWidth="2" transform="rotate(-8 36 24)" />
      <ellipse cx="36" cy="24" rx="4" ry="14" fill="#FDA4AF" transform="rotate(-8 36 24)" />
      <ellipse cx="64" cy="24" rx="8" ry="20" fill="#FFF1F2" stroke="#FB7185" strokeWidth="2" transform="rotate(8 64 24)" />
      <ellipse cx="64" cy="24" rx="4" ry="14" fill="#FDA4AF" transform="rotate(8 64 24)" />
      {/* Face */}
      <ellipse cx="50" cy="60" rx="32" ry="26" fill="#FFF1F2" stroke="#FB7185" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="38" cy="58" rx="3.5" ry="4.5" fill="#4C0519" />
      <ellipse cx="62" cy="58" rx="3.5" ry="4.5" fill="#4C0519" />
      <circle cx="39.5" cy="56.5" r="1.2" fill="white" />
      <circle cx="63.5" cy="56.5" r="1.2" fill="white" />
      {/* Blush */}
      <circle cx="30" cy="65" r="5" fill="#F472B6" opacity="0.6" />
      <circle cx="70" cy="65" r="5" fill="#F472B6" opacity="0.6" />
      {/* Nose & mouth */}
      <polygon points="50,64 47,61 53,61" fill="#E11D48" />
      <path d="M47 67 Q50 69 53 67" stroke="#9F1239" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
