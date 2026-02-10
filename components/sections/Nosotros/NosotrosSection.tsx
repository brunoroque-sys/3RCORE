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

const NosotrosSection = () => {
  const t = useTranslations('AboutSection');
  
  const titleText = t('title').split(" ");
  const paragraphText = t('description').split(" ");

  const containerRef = useRef(null);

  const keywordsToHighlight = [
    "Experiencia", "Experiencia,", 
    "Visión", "Visión,", 
    "Tecnología", "Tecnología,",
    "Experience", "Experience,",
    "Vision", "Vision,",
    "Technology", "Technology,"
  ];

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
    <section ref={containerRef} className="w-full py-20 px-10 flex justify-center items-center overflow-hidden">
      <div className="max-w-6xl lg:max-w-xl 2xl:max-w-6xl mx-auto text-center">
        
        <h2 className={`team-title ${playfair.className} text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6 tracking-wide`}>
          {titleText.map((word, index) => (
            <span 
              key={index} 
              className="title-char-anim inline-block mr-[0.3em]" 
              style={{ whiteSpace: "pre" }} 
            >
              {word}
            </span>
          ))}
        </h2>

        <h3 className={`team-subtitle ${montserrat.className} text-[#D11E68] text-3xl md:text-3xl xl:text-4xl 2xl:text-6xl font-medium mb-10 tracking-tight will-change-transform leading-tight bg-clip-text text-transparent`}style={{backgroundImage: 'linear-gradient(to right, #9C27B0 0%, #9C27B0 30%, #FF1A55 100%)'}}>
         {t('subtitle')}
        </h3>

        <div className="team-line w-full max-w-xl 2xl:max-w-5xl mx-auto h-[1px] bg-white/90 my-10 origin-center will-change-transform"></div>

        <p className={`${montserrat.className} text-white text-xs ms:text-sm lg:text-[12px] 2xl:text-base leading-[2.2] max-w-5xl mx-auto font-normal`}>
          {paragraphText.map((word, index) => {
            
            const shouldHighlight = keywordsToHighlight.includes(word);

            return (
              <span 
                key={index} 
                className="char-anim inline-block mr-[0.25em]" 
                style={{ whiteSpace: "pre-wrap" }} 
              >
                <span style={shouldHighlight ? {
                  backgroundColor: '#A21F8A',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  fontWeight: '500'
                } : {}}>
                  {word}
                </span>
              </span>
            );
          })}
        </p>

      </div>
    </section>
  );
};

export default NosotrosSection;