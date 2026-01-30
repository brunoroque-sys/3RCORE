"use client";

import { useRef } from "react";
import { Playfair_Display, Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";

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


const NosotrosSection= () => {

  const t = useTranslations('AboutSection');
  
  const titleText = t('title').split(" ");
  const paragraphText = t('description').split(" ");

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
    <section ref={containerRef} className="w-full py-40 px-10 flex justify-center items-center overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className={`team-title ${playfair.className} text-white text-4xl md:text-6xl mb-6 tracking-wide`}>
          {titleText.map((word, index) => (
            <span 
              key={index} 
              className="title-char-anim inline-block mr-[0.3em]  " 
              style={{ whiteSpace: "pre" }} 
            >
              {word}
            </span>
          ))}
        </h2>

        <h3 className={`team-subtitle ${montserrat.className} text-[#D11E68] text-3xl md:text-5xl font-medium mb-10 tracking-tight will-change-transform`}>
         {t('subtitle')}
        </h3>

        <div className="team-line w-full max-w-2xl mx-auto h-[1px] bg-white/40 my-10 origin-center will-change-transform"></div>

        <p className={`${montserrat.className} text-white text-base md:text-xl leading-relaxed max-w-5xl mx-auto font-normal`}>
          {paragraphText.map((word, index) => (
            <span 
              key={index} 
              className="char-anim inline-block mr-[0.3em]" 
              style={{ whiteSpace: "pre-wrap" }} 
            >
              {word}
            </span>
          ))}
        </p>

      </div>
    </section>
  );
};

export default NosotrosSection;