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

const titleText = "Te brindamos ideas creativas";
const paragraphText = "En 3R CORE AGENCIA DE MARKETING Somos un equipo con una visión de 3 generaciones enfocados en un mismo objetivo, altamente capacitados que conjugan la experiencia, la Visión y la tecnología enfocados estrategias de marketing Digital, personalizadas de acuerdo a tu empresas";

const ServiceAbout = () => {
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

    tl.from(".title-char-anim", {
      y: 30, 
      opacity: 0,
      filter: "blur(8px)", 
      stagger: 0.04,       
      duration: 1,       
      ease: "power3.out"
    })
    
    .from(".team-subtitle", {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.6") 

    .from(".team-line", {
      scaleX: 0,
      opacity: 0,
      duration: 1.5, 
      ease: "power3.inOut"
    }, "-=1.0")

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
        
        <h2 className={`team-title ${playfair.className} text-white text-4xl md:text-6xl mb-6 tracking-wide`}>
          {titleText.split("").map((char, index) => (
            <span 
              key={index} 
              className="title-char-anim inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </span>
          ))}
        </h2>

        <h3 className={`team-subtitle ${montserrat.className} text-[#D11E68] text-3xl md:text-5xl font-medium mb-10 tracking-tight will-change-transform`}>
          que aseguran resultados exitosos para tus proyectos
        </h3>
      </div>
    </section>
  );
};

export default ServiceAbout;