"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contacto = () => {
  const t = useTranslations('ExpansionSection');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);

      gsap.from(q(".content-center > *"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      const decorations = q(".decoration-img");
      
      decorations.forEach((img, i) => {
        gsap.to(img, {
          y: i % 2 === 0 ? -60 : 60, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5, 
          }
        });
      });

      decorations.forEach((img) => {
        gsap.to(img, {
          x: "random(-10, 10)",
          y: "random(-10, 10)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative md:h-screen text-white px-4 pt-50 md:pt-0 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      
      <div className="decoration-img hidden lg:block absolute top-[20%] left-[5%] md:left-[0%] w-32 md:w-100 h-auto">
        <img src="/images/brand.webp" alt="Decoración 1" className="w-full h-auto rounded-lg shadow-2xl opacity-60 hover:opacity-100 transition-opacity" />
      </div>

      <div className="decoration-img hidden lg:block absolute bottom-[1%] left-[20%] md:left-[20%] w-28 md:w-120 h-auto z-10">
        <img src="/images/REDES-NEW.gif" alt="Decoración 2" className="w-full h-auto" />
      </div>

      <div className="decoration-img hidden lg:block absolute bottom-[5%] right-[15%] md:right-[30%] w-100 md:w-70 h-auto shadow-xl">
        <img src="/images/monitor.webp" alt="Decoración 3" className="w-full h-auto rounded-md opacity-70" />
      </div>

      <div className="decoration-img hidden lg:block absolute bottom-[20%] right-[10%] md:right-[0%] w-100 md:w-80 h-auto">
        <img src="/images/oficina.webp" alt="Decoración 4" className="w-full h-auto opacity-50" />
      </div>

      <div className="content-center relative z-20"> 
        <h2 className="text-4xl md:text-6xl font-serif italic mb-2">
          { t('title')}
        </h2>
        
        <h3 className="text-3xl md:text-5xl font-sans font-bold text-[#d81b60] mb-10">
          { t('subtitle')}
        </h3>

        <div className="w-full max-w-xl h-[0.5px] bg-gray-400 mb-10 opacity-30 mx-auto"></div>

        <div className="text-lg md:text-xl font-light tracking-wide leading-relaxed max-w-md mx-auto">
          <p>Calle Las Caobas 170, Ofic. 400 - 404</p>
          <p>Urb. El Remanso, La Molina, Lima - Perú</p>
        </div>

        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="mt-12 px-8 py-2 border border-white rounded-[15px] text-[16px] tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all duration-300">
            Google Maps
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contacto;