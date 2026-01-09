"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Referencias
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]); 
  const frameRef = useRef({ frame: 0 });

  const frameCount = 192; // Actualizado a tus 192 frames
  const palabras = ["Impacto", "Valores", "Experiencia", "Identidad", "Profesionalismo", "Conexión"];

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
    if (images[0]?.complete) render();

    // --- LÓGICA DE TIEMPOS AJUSTADA ---
    const words = gsap.utils.toArray<HTMLElement>(".word-step");
    const timePerWord = 2; 
    // La duración total de la línea de tiempo será exactamente el tiempo de los textos
    const totalDuration = words.length * timePerWord;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 5%",
        end: `+=${frameCount * 5}%`, 
        scrub: 1,
        pin: true,
        onRefresh: render
      }
    });

    // 1. VIDEO: Ocupa exactamente la misma duración que los textos
    tl.to(frameRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: totalDuration,
      onUpdate: render,
    }, 0);

    // 2. TEXTOS: Inicia con el primero y termina con el último
    words.forEach((word, i) => {
      const isFirst = i === 0;
      const isLast = i === words.length - 1;
      const start = i * timePerWord;

      // ENTRADA: La primera palabra ya empieza en opacity 1
      tl.fromTo(word, 
        { opacity: isFirst ? 1 : 0, y: isFirst ? 0 : 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: isFirst ? 0.1 : 0.5, 
          ease: "power2.out" 
        }, 
        start
      );

      // SALIDA: Todas las palabras se van, EXCEPTO la última
      if (!isLast) {
        tl.to(word, { 
          opacity: 0, 
          y: -40, 
          duration: 0.5, 
          ease: "power2.in" 
        }, start + timePerWord - 0.5); // Se va justo antes de que entre la siguiente
      }
      // Si es la última, no añadimos animación de salida (.to opacity 0), se queda fija.
    });

  }, { scope: containerRef });
  return (
    <div ref={containerRef} className="pt-24 relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* CANVAS (FONDO) */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* TEXTO FIJO IZQUIERDA ABAJO */}
      <div className="absolute w-full bottom-10 left-10 z-20 text-white pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-none">
          La Agencia <span className="italic font-serif">es</span>
        </h2>
        
        {/* Contenedor de palabras dinámicas */}
        <div className="relative h-16 w-full overflow-hidden">
        {palabras.map((palabra, index) => (
            <p
            key={index}
            className={`word-step absolute top-0 left-0 text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-white 
            ${index === 0 ? "opacity-100" : "opacity-0"}`}
            style={{ transform: index === 0 ? "translateY(0)" : "translateY(40px)" }}
            >
            {palabra}
            </p>
        ))}
        </div>
      </div>

      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
    </div>
  );
}