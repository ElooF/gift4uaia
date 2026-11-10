// Web Audio API Synthesizer - Zero external dependencies, 100% reliable
let audioCtx: AudioContext | null = null;
let isMuted = false;
let musicInterval: ReturnType<typeof setInterval> | null = null;
let isMusicPlaying = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMuted(muted: boolean) {
  isMuted = muted;
  if (muted && isMusicPlaying) {
    stopMusicBox();
  }
}

export function getMuted(): boolean {
  return isMuted;
}

/** Play a cute cheerful pop sound (button dodge / click) */
export function playPop(frequency = 520) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(frequency * 1.6, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.11);
}

/** Play an anticipatory envelope rattle/shake sound */
export function playShakeSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // Rapid soft clicks
  [0, 0.08, 0.16, 0.24, 0.32, 0.4].forEach((delay, i) => {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320 + i * 25, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }, delay * 1000);
  });
}

/** Play an enchanting chime chord when the letter opens */
export function playOpenChime() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // Pentatonic sparkle: C5, E5, G5, B5, C6
  const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

    gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.07);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.07 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.07 + 0.85);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.07);
    osc.stop(ctx.currentTime + idx * 0.07 + 0.9);
  });
}

/** Play a delicate music box melody (lofi sweet ambient loop) */
export function startMusicBox() {
  if (isMuted || isMusicPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  isMusicPlaying = true;
  // A gentle arpeggio pattern: [C5, G4, E5, C6, G5, E5, A5, F5]
  const notes = [
    523.25, 392.00, 659.25, 1046.50,
    783.99, 659.25, 880.00, 698.46,
    523.25, 659.25, 783.99, 987.77
  ];
  let step = 0;

  musicInterval = setInterval(() => {
    if (!isMusicPlaying || isMuted) return;
    const currentFreq = notes[step % notes.length];
    step++;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(currentFreq, ctx.currentTime);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.65);
  }, 420);
}

export function stopMusicBox() {
  isMusicPlaying = false;
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
}

export function toggleMusicBox(): boolean {
  if (isMusicPlaying) {
    stopMusicBox();
    return false;
  } else {
    startMusicBox();
    return true;
  }
}
