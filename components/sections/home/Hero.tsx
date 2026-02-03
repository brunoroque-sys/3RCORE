"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger);

export default function HeroHome() {

  const t = useTranslations('HeroHome');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]); 
  const frameRef = useRef({ frame: 0 });
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const scrollVelocityRef = useRef(0);
  const lastScrollRef = useRef(0);

  const frameCount = 193;
  const palabrasAbajo = [
    t('impact'),
    t('values'),
    t('experience'),
    t('identity'),
    t('professionalism'),
    t('connection')
  ];

  // Sistema de partículas
  useEffect(() => {
    const canvas = particlesCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x!: number;
      y!: number;
      baseX!: number;
      baseY!: number;
      size!: number;
      speedY!: number;
      opacity!: number;
      angle!: number;
      drift!: number;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 1; // 1-4px
        this.speedY = Math.random() * 0.5 + 0.2; // velocidad base
        this.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
        this.angle = Math.random() * Math.PI * 2;
        this.drift = Math.random() * 0.5 - 0.25; // deriva horizontal
      }

      update(scrollVelocity: number) {
        if (!canvas) return 0;
        
        // Movimiento base de caída
        this.y += this.speedY;
        this.x += Math.sin(this.angle) * 0.3 + this.drift;
        this.angle += 0.01;

        // Efecto de scroll - alargar hacia arriba cuando hay velocidad
        const stretchFactor = Math.abs(scrollVelocity) * 2;
        
        // Si sale de la pantalla, resetear
        if (this.y > canvas.height + 10) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < -10 || this.x > canvas.width + 10) {
          this.x = Math.random() * canvas.width;
        }

        return stretchFactor;
      }

      draw(ctx: CanvasRenderingContext2D, stretchFactor: number) {
        ctx.save();
        
        // Si hay velocidad de scroll, dibujar una estela alargada
        if (stretchFactor > 0.1) {
          const gradient = ctx.createLinearGradient(
            this.x, 
            this.y, 
            this.x, 
            this.y - stretchFactor * 20
          );
          gradient.addColorStop(0, `rgba(209, 30, 104, ${this.opacity})`);
          gradient.addColorStop(1, `rgba(209, 30, 104, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fillRect(this.x - this.size / 2, this.y - stretchFactor * 20, this.size, stretchFactor * 20 + this.size);
        } else {
          // Modo normal - partículas flotantes con color magenta
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
          gradient.addColorStop(0, `rgba(209, 30, 104, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(209, 30, 104, ${this.opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(209, 30, 104, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    const particleCount = 80;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const stretchFactor = particle.update(scrollVelocityRef.current);
        particle.draw(ctx, stretchFactor);
      });

      scrollVelocityRef.current *= 0.95;
      
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

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
        onRefresh: render,
        onUpdate: (self) => {
          const currentScroll = self.progress;
          const delta = currentScroll - lastScrollRef.current;
          scrollVelocityRef.current = delta * 10; 
          lastScrollRef.current = currentScroll;
        },
        onLeave: () => {
          gsap.to(frameRef.current, {
            frame: frameCount - 1,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: render
          });
        },
        onEnterBack: () => {
          render();
        }
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
      tl.to(word, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, start);
      if (i < wordsBottom.length - 1) {
        tl.to(word, { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" }, start + step - 0.5);
      } else {
        // La última palabra se queda visible
        tl.to(word, { opacity: 1, duration: 0.1 }, start + step);
      }
    });

    // Animación de palabras arriba
    wordsTop.forEach((word, i) => {
      const start = (i * step) + 1; 
      tl.to(word, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, start);
      if (i < wordsTop.length - 1) {
        tl.to(word, { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" }, start + step - 0.5);
      }
    });

    tl.to(frameRef.current, {
      frame: frameCount - 1,
      duration: 0.1,
      onUpdate: render
    }, "+=0");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas de frames */}
      <canvas ref={canvasRef} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* Canvas de partículas */}
      <canvas 
        ref={particlesCanvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

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
            <h2 
              key={`bot-${i}`} 
              className="word-bottom absolute top-0 left-0 text-4xl md:text-6xl font-m tracking-tighter opacity-0 translate-y-10 will-change-transform"
            >
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

      <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />
    </div>
  );
}