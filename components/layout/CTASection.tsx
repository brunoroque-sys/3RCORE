"use client";

import { useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- Configuración de Fuentes ---
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ['normal', 'italic'],
  weight: ["400", "700"]
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"] 
});

const stats = [
  { id: 1, endValue: 1000, label: "CLIENTES", prefix: "+" },
  { id: 2, endValue: 10, label: "AÑOS DE EXPERIENCIA", prefix: "" },
  { id: 3, endValue: 3, label: "PAISES ALCANZADOS", prefix: "" },
];

const StatsAndCTA = () => {
  const containerRef = useRef(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    // --- ANIMACIÓN 1: ESTADÍSTICAS ---
    const statsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // 1.1 Aparecen los bloques de estadísticas (escalonados)
    statsTl.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 1.2 Contador numérico (Se ejecuta en paralelo)
    stats.forEach((stat, index) => {
      const element = numbersRef.current[index];
      if (!element) return;
      const counter = { val: 0 };

      gsap.to(counter, {
        val: stat.endValue,
        duration: 2.5, // Un poco más lento para más elegancia
        ease: "power3.out", // Easing más suave
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
        onUpdate: () => {
          element.textContent = Math.ceil(counter.val).toString();
        }
      });
    });


    // --- ANIMACIÓN 2: CTA CARD (Tarjeta Morada) ---
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-card",
        start: "top 80%", // Empieza un poco antes
        toggleActions: "play none none reverse",
      }
    });

    // 2.1 La tarjeta entra con escala y opacidad
    ctaTl.from(".cta-card", {
      y: 100,
      scale: 0.95, // Efecto sutil de crecimiento
      opacity: 0,
      duration: 1.2,
      ease: "expo.out"
    })
    // 2.2 Título línea 1 (Con Blur)
    .from(".cta-title-1", {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    // 2.3 Título línea 2 (Con Blur)
    .from(".cta-title-2", {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    // 2.4 Botón
    .from(".cta-btn", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)" // Un pequeño rebote sutil
    }, "-=0.6")
    // 2.5 Imagen Monitor (Entra deslizándose)
    .from(".cta-image-wrapper", {
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.0");

    // --- ANIMACIÓN 3: FLOTACIÓN (Idle Animation) ---
    // Hacemos que el monitor flote suavemente infinitamente
    gsap.to(".cta-image-wrapper", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut" // Movimiento sinusoidal (como una ola)
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#120214] py-24 px-4 flex flex-col items-center justify-center gap-24 overflow-hidden">
      
      {/* --- SECCIÓN 1: ESTADÍSTICAS --- */}
      <div className="stats-container flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 w-full max-w-6xl">
        {stats.map((stat, index) => (
          // Agregamos la clase 'stat-item' para animar el bloque entero
          <div key={stat.id} className="stat-item text-center flex flex-col items-center will-change-transform">
            <div className={`text-[#D11E68] text-5xl md:text-7xl ${playfair.className} italic font-bold mb-3`}>
              <span>{stat.prefix}</span>
              <span ref={(el) => { if (el) numbersRef.current[index] = el }}>0</span>
            </div>
            <p className={`text-white text-xs md:text-sm tracking-[0.2em] font-medium ${montserrat.className} opacity-80`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* --- SECCIÓN 2: CTA CARD --- */}
      <div className="cta-card w-full max-w-7xl h-auto md:h-[450px] rounded-[3rem] overflow-hidden relative shadow-2xl will-change-transform">
        
        {/* Fondo Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a0d3d] via-[#2d052a] to-[#120214]"></div>

        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-24 md:py-0">
          
          {/* Lado Izquierdo: Textos */}
          <div className="flex flex-col items-start text-left md:w-1/2 space-y-8 z-20">
            <div className="text-white text-3xl md:text-5xl leading-tight">
              {/* Separamos en dos bloques para animar con stagger */}
              <h3 className={`cta-title-1 ${playfair.className} italic font-normal mb-2 block`}>
                Posiciónate e Inserta
              </h3>
              <h3 className={`cta-title-2 ${montserrat.className} font-normal block`}>
                tu marca en el mercado
              </h3>
            </div>

            <button className={`
              cta-btn
              ${montserrat.className} 
              text-xs tracking-[0.2em] text-white uppercase 
              border border-white/30 rounded-full px-10 py-4
              hover:bg-white hover:text-[#2d052a] hover:scale-105
              transition-all duration-500 ease-out
            `}>
              Contáctanos
            </button>
          </div>

          {/* Lado Derecho: Imagen Monitor */}
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative">
            
            {/* Wrapper para animar la entrada y la flotación por separado */}
            <div className="cta-image-wrapper relative w-[320px] h-[260px] md:w-[550px] md:h-[450px]">
              
              {/* Glow opcional detrás del monitor para darle atmósfera */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D11E68] opacity-20 blur-[80px] rounded-full"></div>
              
              <Image
                src="/images/monitor.png"
                alt="iMac Display"
                fill
                className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default StatsAndCTA;