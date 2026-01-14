"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const members = [
  { id: 1, name: "Gimena", role: "Brand Director", image: "/images/Equipo/Gimena.webp" },
  { id: 2, name: "Odeth", role: "Brand Designer", image: "/images/Equipo/Odeth.webp" },
  { id: 3, name: "Nadia", role: "Brand Designer", image: "/images/Equipo/Nadia.webp" },
  { id: 4, name: "Elizabeth", role: "Creative Design Supervisor", image: "/images/Equipo/Elizabeth.webp" },
  { id: 5, name: "Nicole", role: "Digital Content Manager", image: "/images/Equipo/Nicole.webp" },
  { id: 6, name: "Maria Fernanda", role: "Commercial Director", image: "/images/Equipo/Mafer.webp" },
  { id: 7, name: "Sofia", role: "Film Maker", image: "/images/Equipo/Sofia.webp" },
  { id: 8, name: "Franco", role: "Grapich Designer", image: "/images/Equipo/Franco.webp" },
  { id: 9, name: "Aaron", role: "Grapich Designer", image: "/images/Equipo/Aaron.webp" },
  { id: 10, name: "Stefany", role: "Grapich Designer", image: "/images/Equipo/Stefany.webp" },
  { id: 11, name: "Sara", role: "Graphic Designer", image: "/images/Equipo/Sara.webp" },
  { id: 12, name: "Karol", role: "Graphic Designer", image: "/images/Equipo/Karol.webp" },
  { id: 13, name: "Josue", role: "Post-Production", image: "/images/Equipo/Josue.webp" },
  { id: 14, name: "Grecia", role: "Social Media Manager", image: "/images/Equipo/Grecia.webp" },
  { id: 15, name: "Claudia", role: "Social Media Manager", image: "/images/Equipo/Claudia.webp" },
  { id: 16, name: "Debora", role: "Head to web", image: "/images/Equipo/Debora.webp" },
  { id: 17, name: "Luis", role: "Web & IT Supervisor", image: "/images/Equipo/Luis.webp" },
  { id: 18, name: "Aymar", role: "Software Engineer", image: "/images/Equipo/Aymar.webp" },

];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const text = textRef.current;

    if (!section || !container) return;

    // Usamos matchMedia en lugar de context
    const mm = gsap.matchMedia();

    mm.add({
      // Definimos nuestras condiciones
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
      all: "(min-width: 0px)"
    }, (context) => {
      const isMobile = context.conditions?.isMobile;

      const totalScroll = container.offsetHeight - window.innerHeight + 200;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(container, {
        y: -totalScroll,
        ease: "none",
      });

      if (isMobile && text) {
        gsap.to(text, {
          opacity: 0,
          y: -60,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "top+=400 top",
            scrub: true,
          },
        });
      }

      return () => {}; 
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden text-white"

    >
      <div
        ref={textRef}
        className="flex w-full md:w-2/4 flex-col justify-center px-6 md:px-16 pt-30 md:pt-0 z-20"
      >


        <h2 className="text-5xl italic mb-6 text-white font-serif">Nuestro Equipo</h2>
        <p className="text-m max-w-xs leading-relaxed">
          Conoce a las personas que hacen posible nuestro éxito.
        </p>
      </div>

      <div className="relative w-full md:w-3/4 h-full">

        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-[20vh] pb-[0vh] px-6 md:px-10"
        >

          {members.map((member, index) => {
            const isMobileSecond = index % 2 === 1; // mobile: 2 columnas
            const isMiddle = index % 3 === 1;       // desktop
            const isLast = index % 3 === 2;


            return (
<div 
  key={member.id} 
  className={`
    flex flex-col group transition-transform duration-300

    /* Mobile */
    ${isMobileSecond ? "mt-10" : "mt-0"}

    /* Desktop */
    md:${isMiddle ? "-mt-16" : isLast ? "mt-8" : "mt-0"}
  `}
>
  {/* Gradient border wrapper */}
  <div className="
    relative  p-[0px]
    bg-[length:300%_300%]
    transition-all duration-500

    group-hover:bg-gradient-to-br
    group-hover:from-[#E91E63]
    group-hover:via-[#FF4081]
    group-hover:to-[#9C27B0]

    group-hover:animate-[rotate-gradient_3s_linear_infinite]

    group-hover:shadow-[0_0_20px_rgba(233,30,99,0.7),0_0_45px_rgba(233,30,99,0.6),0_0_70px_rgba(156,39,176,0.5)]

  ">

    {/* Image container */}
    <div className="relative aspect-[2/3] w-full bg-neutral-800 overflow-hidden ">
      <Image 
        src={member.image} 
        alt={member.name}
        fill
        className="object-cover"
      />

      {/* Glitch overlay */}
      <div className="glitch-overlay absolute inset-0 bg-pink-500/30 opacity-0 mix-blend-screen pointer-events-none" />
    </div>
  </div>

  <div className="px-1 mt-4">
    <h3 className="font-bold text-base uppercase tracking-tight leading-none">
      {member.name}
    </h3>
    <p className="text-white text-[10px] mt-2 uppercase tracking-widest">
      {member.role}
    </p>
  </div>
</div>

            );
          })}
        </div>
      </div>
    </section>
  );
} 