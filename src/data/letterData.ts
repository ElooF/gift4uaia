export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  emoji: string;
  tilt: number; // degrees for natural polaroid scatter
  side: 'left' | 'right';
  slot: number; // 0 or 1
}

export interface LetterConfig {
  salutation: string;
  message: string;
  signoff: string;
  signature: string;
  date: string;
  photos: MemoryPhoto[];
}

export const defaultLetterConfig: LetterConfig = {
  salutation: "To my beloved,",
  message: `I made this simple gift for you.

When my world feels heavy, you are my light. Among all the people I could have met, you're the one whose presence makes ordinary hours feel worth keeping.

You are more special to me than you'll ever be able to understand, my love. Sometimes I try to find the perfect words to explain what you mean to me, but somehow words still feels too small.

I promise to love you for who you trully are. I'll be here through your mood swings, quiet days, through tough challenges, and every version of you. I'll never make you feel that loving you is difficult or a burden.

Because to me loving you is choice I'll always make. You deserve to be loved with patience, understanding, and reassurance every single day. And if life feels heavy or your heart feels tired,

I'll stay by your side, remind you that you're never alone and love you the way you deserve. I'll keep choosing you through easy days and the hard ones, because you are worth it all.

I am forever grateful for your love, and I will never take it for granted. You are my everything, and I will always cherish you.`,
  signoff: "With all my love,",
  signature: "BoySeth ♡",
  date: "Today & Always",
  photos: [
    {
      id: "photo-1",
      url: "/images/1.jpg",
      caption: "Cutie us heree",
      emoji: "🌸",
      tilt: -4.5,
      side: "left",
      slot: 0,
    },
    {
      id: "photo-2",
      url: "/images/2.jpg",
      caption: "Kyot kaau kaaa",
      emoji: "🌷",
      tilt: 3.5,
      side: "left",
      slot: 1,
    },
    {
      id: "photo-3",
      url: "/images/3.jpg",
      caption: "First kopi date?",
      emoji: "☕",
      tilt: 4.8,
      side: "right",
      slot: 0,
    },
    {
      id: "photo-4",
      url: "/images/4.jpg",
      caption: "Pinakaa recent kyotie pic of us",
      emoji: "✨",
      tilt: -3.8,
      side: "right",
      slot: 1,
    },
  ],
};
