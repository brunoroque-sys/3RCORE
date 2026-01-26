'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Lenis from 'lenis/react';
import Image from 'next/image';

const ParallaxRow = ({ images, x, className }: { images: string[], x: MotionValue<number>, className?: string }) => {
  return (
    <motion.div 
      style={{ x }} 
      className={`flex flex-row gap-1 w-max will-change-transform ${className}`}
    >
      {images.map((src, idx) => (
        <div 
          key={idx} 
          className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] overflow-hidden border-none"
        >
          <Image 
            src={src} 
            alt={`parallax-img-${idx}`}
            fill
            sizes="40vw"
            className="object-cover"
            priority={idx < 2}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function SkewedRowScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const xMoveRight = useTransform(scrollYProgress, [0, 1], [-500, 500]); 
  const xMoveLeft = useTransform(scrollYProgress, [0, 1], [500, -500]);

  return (
    <Lenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div 
        ref={containerRef} 
        className="relative w-full min-h-[70vh] bg-white overflow-hidden flex items-center justify-center"
      >
        
        <div className="flex flex-col gap-1 transform -rotate-[18deg] scale-125 origin-center absolute w-[160vw]">
          
          <ParallaxRow images={imagesGroup1} x={xMoveRight}/>
          
          <ParallaxRow images={imagesGroup2} x={xMoveLeft} className="-ml-60" />
          
          <ParallaxRow images={imagesGroup3} x={xMoveRight} className="-ml-20" />

          <ParallaxRow images={imagesGroup4} x={xMoveLeft} className="-ml-80" />
          
          <ParallaxRow images={imagesGroup1} x={xMoveRight} className="-ml-40" />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-black/10" />
      </div>
    </Lenis>
  );
}

const imagesGroup1 = ["/images/para/parallax1.webp", "/images/para/parallax2.webp", "/images/para/parallax3.webp", "/images/para/parallax4.webp", "/images/para/parallax5.webp","/images/para/parallax6.webp","/images/para/parallax7.webp"];
const imagesGroup2 = ["/images/para/parallax8.webp", "/images/para/parallax9.webp", "/images/para/parallax10.webp", "/images/para/parallax11.webp", "/images/para/parallax12.webp","/images/para/parallax13.webp","/images/para/parallax14.webp"];
const imagesGroup3 = ["/images/para/parallax15.webp", "/images/para/parallax16.webp", "/images/para/parallax17.webp", "/images/para/parallax18.webp", "/images/para/parallax19.webp","/images/para/parallax20.webp","/images/para/parallax21.webp"];
const imagesGroup4 = ["/images/para/parallax22.webp", "/images/para/parallax1.webp", "/images/para/parallax2.webp", "/images/para/parallax3.webp", "/images/para/parallax4.webp","/images/para/parallax5.webp","/images/para/parallax6.webp"];