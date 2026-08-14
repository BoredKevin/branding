import { useState, useEffect } from 'react';

export function useAudioPlayer(totalSeconds: number = 284) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSeconds((prev) => {
        if (prev >= totalSeconds) return 0;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, totalSeconds]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const progressPercent = (currentSeconds / totalSeconds) * 100;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedCurrent = `${pad(Math.floor(currentSeconds / 60))}:${pad(currentSeconds % 60)}`;
  const formattedTotal = `${pad(Math.floor(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;
  const timeString = `${formattedCurrent} / ${formattedTotal}`;

  return {
    isPlaying,
    togglePlay,
    currentSeconds,
    totalSeconds,
    progressPercent,
    timeString,
  };
}
