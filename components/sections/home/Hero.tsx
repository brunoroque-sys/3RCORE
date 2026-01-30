"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger);

export default function HeroHome() {

  const t = useTranslations('HeroHome');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]); 
  const frameRef = useRef({ frame: 0 });
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const frameCount = 194;
  const palabrasAbajo = [
    t('impact'),
    t('values'),
    t('experience'),
    t('identity'),
    t('professionalism'),
    t('connection')
  ];

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const images = imagesRef.current;

    const render = () => {
      if (!context || !canvas) return;
      const imgIndex = Math.round(frameRef.current.frame);
      const img = images[imgIndex];
      if (img && img.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    if (images.length === 0) {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `/frames/frame_${(i + 1).toString().padStart(3, "0")}.webp`;
        if (i === 0) img.onload = render;
        images.push(img);
      }
    }

    const wordsBottom = gsap.utils.toArray<HTMLElement>(".word-bottom", containerRef.current);
    const wordsTop = gsap.utils.toArray<HTMLElement>(".word-top", containerRef.current);
    const step = 2; 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=900%", 
        scrub: 1,
        pin: true,
        onRefresh: render
      }
    });

      gsap.to(".scroll-arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.8
    });

      tl.to(scrollIndicatorRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
      }, 0);

    tl.to(frameRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: palabrasAbajo.length * step,
      onUpdate: render,
    }, 0);

    wordsBottom.forEach((word, i) => {
      const start = i * step;
      tl.to(word, { opacity: 1, y: 0, duration: 0.5 }, start);
      if (i < wordsBottom.length - 1) {
        tl.to(word, { opacity: 0, y: -20, duration: 0.5 }, start + step - 0.5);
      }
    });

    wordsTop.forEach((word, i) => {
      const start = (i * step) + 1; 
      tl.to(word, { opacity: 1, y: 0, duration: 0.5 }, start);
      if (i < wordsTop.length - 1) {
        tl.to(word, { opacity: 0, y: -20, duration: 0.5 }, start + step - 0.5);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover z-0" />

    <div 
      ref={scrollIndicatorRef}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/70"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
      
      <svg 
        className="scroll-arrow w-6 h-6 mt-2" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </div>

      <div className="absolute bottom-30 left-10 lg:left-20 z-20 text-white pointer-events-none">
        <h2 className="text-3xl md:text-4xl font-light">{t('agency')} <span className="italic font-serif">{t('s')}</span></h2>
        <div className="relative h-20 w-[500px]">
          {palabrasAbajo.map((h2, i) => (
            <h2 key={`bot-${i}`} className="word-bottom absolute top-0 left-0 text-4xl md:text-6xl font-m tracking-tighter opacity-0 translate-y-10 transition-colors">
              {h2}
            </h2>
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-10 lg:right-20 z-20 text-white text-right pointer-events-none">
        <h2 className="text-3xl md:text-4xl font-light ">{t('agency2')}  <span className="italic font-serif">{t('d')}</span></h2>
        <div className="relative h-30 w-[500px] ml-auto">
          <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-[#9C27B0] to-[#E91E63] 
              bg-clip-text text-transparent font-m tracking-tighter leading-tight">
            {t('marketing')}
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
    </div>
  );
}