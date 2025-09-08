"use client";
import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // Set slow motion
    video.playbackRate = 0.5; // half speed

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay failed, usually mobile Safari
          console.log("Autoplay prevented:", err);
        });
      }
    };

    // Wait until next paint to attempt autoplay
    requestAnimationFrame(() => {
      attemptPlay();
    });

    // Fallback: allow touch anywhere on hero to play video
    const hero = document.querySelector("section.relative");
    const onTouch = () => {
      attemptPlay();
      hero?.removeEventListener("touchstart", onTouch);
    };
    
    if (hero) {
      hero.addEventListener("touchstart", onTouch);
    }

    // Clean up
    return () => {
      if (hero) {
        hero.removeEventListener("touchstart", onTouch);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-label="Barbershop interior video background"
    />
  );
}