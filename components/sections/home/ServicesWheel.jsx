"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: "BRANDING", image: "/images/card1.png", desc: "Identidad visual única." },
  { id: 2, title: "SOCIAL MEDIA", image: "/images/card1.png", desc: "Conectando comunidades." },
  { id: 3, title: "WEB DESIGN", image: "/images/card1.png", desc: "Experiencias inmersivas." },
  { id: 4, title: "SEO / SEM", image: "/images/card1.png", desc: "Posicionamiento global." },
  { id: 5, title: "ECOMMERCE", image: "/images/card1.png", desc: "Ventas sin fronteras." }
];

const ServicesSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const wheelRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const totalSlides = services.length;
    
    const isMobile = window.innerWidth < 768;
    
    const movePerSlideX = isMobile ? 75 : 35; 
    const totalMove = (totalSlides - 1) * movePerSlideX;
    
    const anglePerSlide = 360 / totalSlides;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", 
        scrub: 1, 
        pin: true,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut",
          delay: 0.1
        }
      },
    });

    tl.to(sliderRef.current, {
      x: `-${totalMove}vw`, 
      ease: "none",
    }, 0);

    tl.to(wheelRef.current, {
      rotation: -360 + anglePerSlide, 
      ease: "none",
    }, 0);

    itemsRef.current.forEach((item, index) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=400%",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const itemPos = index / (totalSlides - 1);
                    const distance = Math.abs(progress - itemPos);
                    
                    if (distance < 0.1) { 
                        gsap.to(item, { scale: 1, opacity: 1, filter: "brightness(1)", zIndex: 10, duration: 0.2 });
                    } else {
                        gsap.to(item, { scale: 1, opacity: 1, filter: "brightness(0.4)", zIndex: 0, duration: 0.2 });
                    }
                }
            }
        })
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden text-white flex flex-col justify-center">
      
      <div className="absolute inset-0 pointer-events-none  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#120214] to-[#120214]"></div>

      <div className="relative z-10 w-full h-[55vh] flex items-center">
        
        <div 
            ref={sliderRef} 
            className="flex h-full items-center pl-[15vw] md:pl-[35vw] gap-x-[5vw] will-change-transform"
        >
          {services.map((service, index) => (
            <div 
                key={service.id} 
                ref={el => itemsRef.current[index] = el}
                className="relative flex-shrink-0 w-[70vw] md:w-[30vw] h-[60vh] md:h-[70vh] overflow-hidden border border-white/10 shadow-2xl transition-all bg-black"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div 
        ref={wheelRef}
        className="absolute -bottom-[20vw] md:-bottom-[15vw] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none w-[20vw] h-[20vw] md:w-[30vw] md:h-[30vw]"
      >
        <svg 
            
            className="w-full h-full rotate-[54deg] will-change-transform" 
            viewBox="0 0 300 300" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                
                <path 
                    id="circlePath" 
                    d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0" 
                />
            </defs>

            <text fill="white" className="text-[10px] md:text-[14px] font-bold uppercase tracking-[0.2em]">
                {services.map((service, index) => {
                    const total = services.length;
                    
                    const offset = (100 / total) * index + 10;
                    
                    return (
                        <textPath
                            key={service.id}
                            href="#circlePath"
                            startOffset={`${offset}%`}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                        >
                            {service.title} •
                        </textPath>
                    );
                })}
            </text>
        </svg>
      </div>


    </section>
  );
};

export default ServicesSlider;