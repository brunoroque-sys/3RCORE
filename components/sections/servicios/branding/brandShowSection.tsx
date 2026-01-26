"use client";

import { useState, useEffect, useRef } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function BrandShowSection() {
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

  if (!mounted) return <div className="min-h-[600px] bg-[#FBECD7]" />;

  return (
    <section className="relative mx-auto w-full bg-[#FBECD7] rounded-3xl ring-1 ring-neutral-700/10 dark:bg-neutral-800 min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[100] bg-[#FBECD7] dark:bg-neutral-800">
          <div className="relative flex items-center justify-center">
             {/* Spinner */}
            <div className="w-20 h-20 border-4 border-neutral-200 border-t-orange-500 rounded-full animate-spin" />
            <span className="absolute text-xs font-bold text-neutral-600">
              {Math.round((loadedCount / totalImages) * 100)}%
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-neutral-500">
            Optimizando Experiencia 3D
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

      <div className={`w-full transition-all duration-1000 ease-in-out ${
        isReady ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
      }`}>
        {loadedCount > 0 && <ThreeDMarquee images={images} />}
      </div>
    </section>
  );
}