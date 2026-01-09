"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import gsap from "gsap";

const playfair = Playfair_Display({ subsets: ["latin"], style: ['italic'], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

const logos = [
  { id: 1, src: "/images/2kLogo.webp", pos: "md:top-[301px] top-[194px] md:left-0 left-0" },
  { id: 2, src: "/images/AutoLogo.webp", pos: "md:top-[180px] top-[126px] md:left-[226px] left-[60px]" },
  { id: 3, src: "/images/domusLogo.webp", pos: "top-[58px] md:left-[452px] left-[137px]" },
  { id: 4, src: "/images/pdk.webp", pos: "md:top-0 top-[126px] md:left-[706px] left-[215px]" },
  { id: 5, src: "/images/pretties.webp", pos: "md:top-[121px] top-[194px] md:left-[932px] left-[280px]" },
  { id: 6, src: "/images/ranchoVentura.webp", pos: "md:top-[181px] top-[334px] right-0" },
  { id: 7, src: "/images/venturaLogo.webp", pos: "md:top-[301px] top-[402px] md:right-[227px] right-[60px]" },
  { id: 8, src: "/images/VenusLogo.webp", pos: "md:top-[421px] top-[470px] md:right-[454px] right-[137px]" },
  { id: 9, src: "/images/vitaLogo.webp", pos: "md:top-[481px] top-[402px] md:right-[708px] right-[215px]" },
  { id: 10, src: "/images/vlissad.webp", pos: "md:top-[361px] top-[334px] md:right-[935px] right-[280px]" },
];

const ClientSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>(".logo-box");
      
      boxes.forEach((box) => {
        const randomFade = () => {
          // Generamos un estado de "apagado" o "encendido"
          const targetOpacity = Math.random() > 0.5 ? gsap.utils.random(0.4, 1) : 0;
          
          gsap.to(box, {
            opacity: targetOpacity,
            duration: gsap.utils.random(1.5, 3), // Un poco más rápido para notar el cambio
            delay: gsap.utils.random(0, 4),      // Delay para que no coincidan
            ease: "power2.inOut",
            onComplete: randomFade 
          });
        };
        randomFade();
      });

      gsap.from(".center-content", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="md:mt-[109px] mt-[117px] w-full py-20 overflow-hidden bg-transparent">
      <div 
        ref={containerRef}
        className="md:w-[1540px] h-[710px] w-full mx-auto relative"
      >
        {logos.map((logo) => (
          <div 
            key={logo.id}
            className={`logo-box absolute md:w-[227px] md:h-[120px] w-[100px] h-[60px] border border-white/10 flex justify-center items-center backdrop-blur-sm transition-colors duration-500  ${logo.pos}`}
            style={{ opacity: 0 }} // Empiezan invisibles para que aparezcan suavemente
          >
            <div className="relative md:w-[132px] w-[80px] md:h-[66px] h-[32px] grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={logo.src}
                alt={`Cliente ${logo.id}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}

        <div className="center-content absolute md:w-[413px] w-[335px] md:top-[240px] top-[224px] md:left-[513px] left-1/2 -translate-x-1/2 md:translate-x-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className={`${montserrat.className} 
                text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-[#C2185B] to-[#9C27B0]
                md:text-[35px] text-[30px] font-bold uppercase tracking-tight leading-none text-center`}>
                Nuestros Clientes
            </h2>
          <div className={`${montserrat.className} mt-6 text-white text-center md:text-[18px] text-[16px] font-light leading-relaxed max-w-[350px]`}>
            Estas son algunas de las empresas que confían en nosotros
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;