import { useState, useEffect } from 'react';

export function useTelemetryCounter(target: number = 73, speed: number = 25) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Respect user's reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      setCount(target);
      setIsComplete(true);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= target) {
        setCount(target);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return { count, isComplete };
}
