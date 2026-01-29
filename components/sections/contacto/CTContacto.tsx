"use client";

import { useRef, useEffect } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ["latin"], style: ['normal', 'italic'], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

const CTAContacto = () => {
  const t = useTranslations('ScheduleSection');
  
  const containerRef = useRef(null);
  const cardRef = useRef(null);
// 1. Define el tipo en el useRef
const contentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    // 2. Asegúrate de que contentRef.current no sea nulo antes de usarlo
    if (contentRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      });

      tl.fromTo(cardRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0 }
      )
      .fromTo(
        // Accedemos a los hijos de forma segura
        contentRef.current.children, 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out" 
        }, 
        "-=0.5"
      );
    }
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={containerRef} className="w-full py-20 px-10 md:px-4 flex flex-col items-center overflow-hidden">
      
      <div 
        ref={cardRef} 
        className="cta-card-container w-full max-w-7xl relative min-h-[250px] md:min-h-[250px] flex items-center"
      >
        
        <div className="cta-bg absolute inset-0 bg-[#4a0d3d] rounded-[3rem] shadow-2xl overflow-hidden pointer-events-none">
            <div className="cta-glow absolute -right-20 -top-20 w-80 h-80 bg-[#D11E68] opacity-20 blur-[100px]"></div>
            <div className="cta-glow absolute -left-20 -bottom-20 w-80 h-80 bg-[#4c0046] opacity-30 blur-[100px]"></div>
        </div>

        <div className="cta-content relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-12">
          
          <div ref={contentRef} className="text-center space-y-4">
            <h3 className={`${playfair.className} text-white italic font-normal text-3xl md:text-5xl leading-tight`}>
              {t('title')}
            </h3>
            <h3 className={`${poppins.className} text-white/80 font-light text-2xl md:text-4xl tracking-wide `}>
              {t('hours')}
            </h3>
            
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default CTAContacto;