"use client";

import { useState, useEffect } from "react";
import { ThreeDMarqueeInvertido } from "@/components/ui/3d-marquee-invertido";

export function SocialShowSection() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalImages = 62 - 14 + 1;

  const images = Array.from({ length: totalImages }, (_, i) => {
    const cardNumber = String(i + 14).padStart(2, '0');
    return `/images/branding/manual/manual-estacion 26-${cardNumber}.webp`;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && loadedCount >= totalImages) {
      const timer = setTimeout(() => setIsReady(true), 800);
      return () => clearTimeout(timer);
    }
  }, [loadedCount, totalImages, mounted]);

  if (!mounted) return null;

  return (
    <div 
      className="relative mx-auto w-full rounded-3xl ring-1 ring-neutral-700/10 dark:bg-neutral-800 min-h-[600px] overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/social/2707.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!isReady && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-md transition-opacity duration-500">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-[10px] font-bold text-white">
                 {Math.round((loadedCount / totalImages) * 100)}%
               </span>
            </div>
          </div>
          <p className="mt-4 text-xs font-bold tracking-[0.2em] text-white uppercase animate-pulse">
            Cargando Social Media
          </p>
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        {images.map((src) => (
          <img 
            key={src} 
            src={src} 
            onLoad={() => setLoadedCount(prev => prev + 1)} 
            onError={() => setLoadedCount(prev => prev + 1)} 
          />
        ))}
      </div>
      
      <div className={`w-full transition-all duration-1000 ${
        isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <ThreeDMarqueeInvertido images={images} />
      </div>
    </div>
  );
}