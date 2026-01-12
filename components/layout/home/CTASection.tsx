"use client";

import { useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Poppins, Trirong } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ["latin"], style: ['normal', 'italic'], weight: ["400", "700"] });
const trirong = Trirong({ subsets: ["latin"], style: ['normal', 'italic'], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

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
    gsap.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 85%",
      }
    });

    stats.forEach((stat, index) => {
      const element = numbersRef.current[index];
      if (!element) return;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: stat.endValue,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats-container", start: "top 85%" },
        onUpdate: () => { element.textContent = Math.ceil(counter.val).toString(); }
      });
    });

    // --- ANIMACIÓN 2: CTA CARD ---
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-card-container",
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    ctaTl.from(".cta-bg", {
      scaleX: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    })
    .from(".cta-content", {
      y: 40,
      opacity: 0,
      duration: 1,
    }, "-=1")
    .from(".cta-image-wrapper", {
      x: 100,
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)"
    }, "-=0.8");

    // Flotación infinita
    gsap.to(".cta-image-wrapper", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#120214] py-32 px-4 flex flex-col items-center gap-40  overflow-hidden">
      
      {/* --- ESTADÍSTICAS --- */}
      <div className="stats-container flex flex-col md:flex-row justify-center items-center gap-60 md:gap-60 w-full max-w-7xl">
        {stats.map((stat, index) => (
          <div key={stat.id} className="stat-item text-center flex flex-col items-center">
            <div className={`text-[#D11E68] text-5xl md:text-7xl ${trirong.className} italic font-bold mb-3`}>
              <span>{stat.prefix}</span>
              <span ref={(el) => { if (el) numbersRef.current[index] = el }}>0</span>
            </div>
            <p className={`text-white text-xs md:text-sm tracking-[0.2em] font-medium ${poppins.className} opacity-80`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* --- CTA CARD CONTAINER --- */}
      <div className="cta-card-container w-full max-w-7xl relative h-[500px] md:h-[350px] flex items-center">
        
        {/* Fondo de la tarjeta (con overflow hidden para el gradiente) */}
        <div className="cta-bg absolute inset-0 bg-gradient-to-r from-[#4a0d3d] to-[#120214] rounded-[3rem] shadow-2xl overflow-hidden pointer-events-none">
            {/* Glow interno */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D11E68] opacity-20 blur-[100px]"></div>
        </div>

        {/* Contenido */}
        <div className="cta-content relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
          
          <div className="flex flex-col items-start text-left md:w-1/2 space-y-8">
            <div className="text-white text-2xl md:text-4xl leading-tight">
              <h3 className={`${playfair.className} italic font-normal mb-2`}>
                Posiciónate e Inserta
              </h3>
              <h3 className={`${poppins.className} font-normal`}>
                tu marca en el mercado
              </h3>
            </div>

            <button className={`
              ${poppins.className} 
              relative inline-flex items-center justify-center px-10 py-4 
              overflow-hidden text-xs font-bold uppercase tracking-[0.2em] text-white 
              border border-white/30 rounded-[15px] transition-all duration-500 
              group/btn hover:border-transparent hover:scale-105 cursor-pointer
            `}>
              {/* Fondo degradado que se desliza */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-300 ease-out -translate-x-full group-hover/btn:translate-x-0"></span>
              
              {/* Texto por encima del fondo */}
              <span className="relative z-10 transition-colors duration-300">
                Contáctanos
              </span>
            </button>
          </div>

          {/* Lado Derecho: Imagen Monitor "Saliendo" */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative group">
            <div className="cta-image-wrapper relative 
                            w-[350px] h-[270px]   /* Tamaño más grande */
                            md:w-[550px] md:h-[400px] 
                            -mr-10 md:-mr-32      /* Sale por la derecha */
                            -mt-10 md:-mt-20      /* Sale por arriba */
                            z-30 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]">
              
              <Image
                src="/images/REDES-NEW.gif"
                alt="iMac Display"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default StatsAndCTA;