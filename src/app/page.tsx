"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import LandingPrompt from "@/components/LandingPrompt";
import EnvelopeStage from "@/components/EnvelopeStage";
import { defaultLetterConfig } from "@/data/letterData";
import { setMuted, toggleMusicBox } from "@/utils/sound";

export default function Home() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);

  const handleToggleSound = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    setMuted(nextMuted);
  };

  const handleToggleMusic = () => {
    const active = toggleMusicBox();
    setIsMusicActive(active);
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#fff2f5] via-[#fee7ee] to-[#fbdde6] text-[#2d2428] selection:bg-pink-200">
      {/* Background ambient lighting */}
      <div className="ambient-glow" />

      {/* Top minimalist toolbar */}
      <header className="fixed top-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={handleToggleMusic}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-pink-200/70 bg-white/70 shadow-sm backdrop-blur-md transition-all hover:bg-white active:scale-90 ${
            isMusicActive ? "text-pink-600 ring-2 ring-pink-300" : "text-[#7a626c]"
          }`}
          title="Toggle music box melody"
          aria-label="Toggle music"
        >
          <Sparkles className="h-4 w-4" />
        </button>

        <button
          onClick={handleToggleSound}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200/70 bg-white/70 text-[#7a626c] shadow-sm backdrop-blur-md transition-all hover:bg-white active:scale-90"
          title="Toggle sound effects"
          aria-label="Toggle sound effects"
        >
          {isAudioMuted ? (
            <VolumeX className="h-4 w-4 text-pink-400" />
          ) : (
            <Volume2 className="h-4 w-4 text-pink-600" />
          )}
        </button>
      </header>

      {/* Main Flow */}
      {!hasAccepted ? (
        <LandingPrompt onAccept={() => setHasAccepted(true)} />
      ) : (
        <EnvelopeStage config={defaultLetterConfig} />
      )}
    </main>
  );
}
