"use client";

import { useRef } from "react";
import { Playfair_Display, Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl"

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



const TeamSection = () => {
  const t = useTranslations('TeamSection');
  const containerRef = useRef(null);

  const titleText =t('title');
  const paragraphText = t('description');
  
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
    <section ref={containerRef} className="w-full py-24 px-10 flex justify-center items-center overflow-hidden">
      <div className="max-w-3xl 2xl:max-w-6xl mx-auto text-center">
        
        <h2 className={`
          team-title ${playfair.className} 
          text-white 
          text-3xl          /* Móvil (pequeño) */
          sm:text-4xl       /* Móvil (grande) */
          md:text-3xl       /* Tablets */
          lg:text-4xl       /* Laptops / Desktop */
          xl:text-5xl       /* Monitores pro (opcional) */
          mb-4 md:mb-6 
          tracking-wide 
          leading-tight
        `}>
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

        <h3 className={`team-subtitle ${montserrat.className} text-[#D11E68] text-2xl
          /* Móvil */
          sm:text-3xl        /* Móvil grande */
          md:text-3xl        /* Tablet */
          xl:text-4xl        /* Desktop */
          2xl:text-5xl       /* Desktop 2K/4K */
          mb-10 tracking-tight will-change-transform`}>
          {t('subtitle')}
        </h3>

        <div className="team-line w-full max-w-2xl mx-auto h-[1px] bg-white/40 my-10 origin-center will-change-transform"></div>

        <p className={`${montserrat.className} text-white text-sm
          sm:text-sm       /* Móvil grande: 16px */
          md:text-sm         /* Tablets: 18px */
          xl:text-sm         /* Desktop XL: 20px */
          2xl:text-xl       /* Pantallas 4K: 24px */
          leading-relaxed max-w-5xl mx-auto 
          px-4`}>
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