"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PizzaCardProps {
  images: string[];
  showDots?: boolean;
  autoOnHover?: boolean; 
  className?: string;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ 
  images, 
  showDots = false, 
  autoOnHover = false, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Referencia para mantener el índice actualizado dentro del setInterval
  const indexRef = useRef(0);

  const slideTo = (index: number) => {
    let targetIndex = index;
    if (index >= images.length) targetIndex = 0;
    if (index < 0) targetIndex = images.length - 1;

    gsap.to(sliderRef.current, {
      xPercent: -100 * targetIndex,
      duration: 0.8,
      ease: "expo.out",
    });
    
    setCurrentIndex(targetIndex);
    indexRef.current = targetIndex;
  };

  const handleMouseEnter = () => {
    if (!autoOnHover || images.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      const next = (indexRef.current + 1) % images.length;
      slideTo(next);
    }, 1200); // Un poco más rápido para el efecto hover
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => handleMouseLeave();
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[1.5rem] bg-[#1a1a1a] group shadow-2xl ${className} `}
    >
      <div ref={sliderRef} className="flex h-full w-full">
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img 
              src={src} 
              alt="" 
              className="w-full h-full object-cover select-none pointer-events-none " 
            />
          </div>
        ))}
      </div>

      {/* Solo mostramos áreas de clic si NO es automático */}
      {!autoOnHover && (
        <div className="absolute inset-0 flex z-10">
          <div className="w-1/2 h-full cursor-pointer" onClick={() => slideTo(currentIndex - 1)} />
          <div className="w-1/2 h-full cursor-pointer" onClick={() => slideTo(currentIndex + 1)} />
        </div>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === i ? "bg-white w-5" : "bg-white/30 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaCard;