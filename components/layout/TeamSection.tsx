"use client";

import { useRef } from "react";
import { Playfair_Display, Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ['italic'], 
  weight: ["400"]
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"] 
});

// Textos separados para poder dividirlos
const titleText = "Somos un equipo";
const paragraphText = "En 3R CORE AGENCIA DE MARKETING, somos un equipo con una visión de 3 generaciones enfocados en un mismo objetivo, altamente capacitados que conjugan la experiencia, la Visión y la tecnología enfocados en estrategias de marketing Digital, personalizadas de acuerdo a tu empresa.";

const TeamSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. Título LETRA POR LETRA con BLUR
    // Ahora animamos las letras individuales (.title-char-anim) en lugar de todo el h2
    tl.from(".title-char-anim", {
      y: 30, 
      opacity: 0,
      filter: "blur(8px)", // Blur un poco menos intenso por ser letras individuales
      stagger: 0.04,       // Tiempo entre la aparición de cada letra
      duration: 1,       
      ease: "power3.out"
    })
    
    // 2. Subtítulo (Aparece como bloque, solapándose al final del título)
    .from(".team-subtitle", {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.6") // Ajusté el solapamiento para que fluya bien con el stagger del título

    // 3. Línea divisoria
    .from(".team-line", {
      scaleX: 0,
      opacity: 0,
      duration: 1.5, 
      ease: "power3.inOut"
    }, "-=1.0")

    // 4. Párrafo letra por letra
    .from(".char-anim", {
      opacity: 0,
      y: 5,
      filter: "blur(4px)",
      stagger: 0.005, 
      duration: 0.5, 
      ease: "power1.out"
    }, "-=1.2"); 

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 px-4 flex justify-center items-center overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título principal dividido en letras */}
        <h2 className={`team-title ${playfair.className} text-white text-4xl md:text-6xl mb-6 tracking-wide`}>
          {titleText.split("").map((char, index) => (
            <span 
              key={index} 
              className="title-char-anim inline-block" // Nueva clase específica para el título
              style={{ whiteSpace: "pre" }} // "pre" respeta los espacios simples
            >
              {char}
            </span>
          ))}
        </h2>

        {/* El subtítulo se mantiene como bloque para contraste */}
        <h3 className={`team-subtitle ${montserrat.className} text-[#D11E68] text-3xl md:text-5xl font-medium mb-10 tracking-tight will-change-transform`}>
          Profesional y Nativo Digital
        </h3>

        <div className="team-line w-full max-w-2xl mx-auto h-[1px] bg-white/40 my-10 origin-center will-change-transform"></div>

        {/* Párrafo dividido en letras */}
        <p className={`${montserrat.className} text-white text-base md:text-xl leading-relaxed max-w-5xl mx-auto font-normal`}>
          {paragraphText.split("").map((char, index) => (
            <span 
              key={index} 
              className="char-anim inline-block" 
              style={{ whiteSpace: "pre-wrap" }} 
            >
              {char}
            </span>
          ))}
        </p>

      </div>
    </section>
  );
};

export default TeamSection;