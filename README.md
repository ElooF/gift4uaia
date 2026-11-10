# Letter WebApp

A cute, pink-themed interactive letter web app built with Next.js, React 19, TypeScript, and Tailwind CSS.

## Features

- **Dodging Landing Page**: "Do you want to see the letter?" with an evasive "No" button that playfully dodges cursor and touch proximity, while the "Yes" button grows bigger with each attempt.
- **Interactive 3D Pink Envelope**: Realistic folds and heart wax seal that shakes with haptic sound on click, flips open in 3D, and triggers a celebration confetti burst.
- **Letter & 4-Photo Showcase**:
  - Heartfelt letter revealed in the center.
  - 4 memory photos arranged symmetrically (2 on each side) with natural polaroid tilts, washi tape, and emojis.
  - Lightbox modal for enlarged viewing on photo click.
  - In-place editing and local persistence via `localStorage`.
- **Delightful Synthesized Audio**: Built-in Web Audio API synthesizer for button pops, envelope rattle, chime chords, and optional soothing music-box melody (zero external audio file dependencies).

## Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
npm run start
```
