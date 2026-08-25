import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentOpacityRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to animate opacity with requestAnimationFrame
  const animateFade = (targetOpacity: number, durationMs: number, onComplete?: () => void) => {
    // Cancel any running animation frames to prevent competing animations
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    const startOpacity = currentOpacityRef.current;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      
      // Interpolate opacity smoothly without snapping
      const newOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      currentOpacityRef.current = newOpacity;

      if (videoRef.current) {
        videoRef.current.style.opacity = String(newOpacity);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        animFrameRef.current = null;
        if (onComplete) {
          onComplete();
        }
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const handlePlay = () => {
    // Fade in 250ms when play starts/resumes
    fadingOutRef.current = false;
    animateFade(1.0, 250);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const remainingTime = video.duration - video.currentTime;

    // Trigger 250ms fade-out when 0.55 seconds remain before video end
    if (remainingTime <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      animateFade(0.0, 250);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // On ended: opacity set to 0, 100ms delay, reset to currentTime = 0, play, fade back in
    currentOpacityRef.current = 0;
    video.style.opacity = '0';

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!video) return;
      video.currentTime = 0;
      fadingOutRef.current = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            animateFade(1.0, 250);
          })
          .catch((err) => {
            console.warn('Video play blocked or failed:', err);
          });
      } else {
        animateFade(1.0, 250);
      }
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Initialize initial opacity to 0
    currentOpacityRef.current = 0;
    video.style.opacity = '0';

    // Try auto playing on mount
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          handlePlay();
        })
        .catch((err) => {
          console.warn('Autoplay prevented:', err);
        });
    }

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        playsInline
        preload="auto"
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        // NO CSS transition styling applied as mandated (pure JS requestAnimationFrame fade)
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[115%] h-[115%] object-cover object-top max-w-none"
      />
    </div>
  );
};
