"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const members = [
  { id: 1, name: "Sofia", role: "Film Maker", image: "/images/Equipo/Sofia.webp" },
  { id: 2, name: "Sara", role: "Graphic Designer", image: "/images/Equipo/Sara.webp" },
  { id: 3, name: "Odeth", role: "Brand Designer", image: "/images/Equipo/Odeth.webp" },
  { id: 4, name: "Nicole", role: "Digital Content Manager", image: "/images/Equipo/Nicole.webp" },
  { id: 5, name: "Nadia", role: "Brand Designer", image: "/images/Equipo/Nadia.webp" },
  { id: 6, name: "Maria Fernanda", role: "Digital Strategy Director", image: "/images/Equipo/Mafer.webp" },
  { id: 7, name: "Luis", role: "Web & IT Supervisor", image: "/images/Equipo/Luis.webp" },
  { id: 8, name: "Karol", role: "Graphic Designer", image: "/images/Equipo/Karol.webp" },
  { id: 9, name: "Josue", role: "Post-Production", image: "/images/Equipo/Josue.webp" },
  { id: 10, name: "Grecia", role: "Social Media Manager", image: "/images/Equipo/Grecia.webp" },
  { id: 11, name: "Gimena", role: "Brand Director", image: "/images/Equipo/Gimena.webp" },
  { id: 12, name: "Franco", role: "Grapich Designer", image: "/images/Equipo/Franco.webp" },
  { id: 13, name: "Elizabeth", role: "Creative Design Supervisor", image: "/images/Equipo/Elizabeth.webp" },
  { id: 14, name: "Debora", role: "Head to web", image: "/images/Equipo/Debora.webp" },
  { id: 15, name: "Claudia", role: "Social Media Manager", image: "/images/Equipo/Claudia.webp" },
  { id: 16, name: "Aymar", role: "Software Engineer", image: "/images/Equipo/Aymar.webp" },
  { id: 17, name: "Aaron", role: "Grapich Designer", image: "/images/Equipo/Aaron.webp" },
  { id: 18, name: "Stefany", role: "Grapich Designer", image: "/images/Equipo/Stefany.webp" },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative flex h-screen w-full overflow-hidden  text-white"
    >
      <div className="flex w-2/4 flex-col justify-center px-8 md:px-16 z-20 ">
        <h2 className="text-5xl italic mb-6 text-white font-serif">Nuestro Equipo</h2>
        <p className="text-m max-w-xs leading-relaxed">
          Conoce a las personas que hacen posible nuestro éxito.
        </p>
      </div>

      <div className="relative w-3/4 h-full">
        <div 
          ref={containerRef}
          className="grid grid-cols-3 gap-12 pt-[20vh] pb-[5vh] px-10"
        >
          {members.map((member, index) => {
            const isMiddle = index % 3 === 1;
            const isLast = index % 3 === 2;

            return (
              <div 
                key={member.id} 
                className={`flex flex-col group transition-transform duration-300
                  ${isMiddle ? "-mt-16" : isLast ? "mt-8" : "mt-0"}`}
              >
                <div className="relative aspect-[2/3] w-full bg-neutral-800 mb-4 overflow-hidden rounded-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover  "
                  />
                  {/* Glitch overlay */}
                  <div className="glitch-overlay absolute inset-0 bg-pink-500/30 opacity-0 mix-blend-screen pointer-events-none" />
                </div>
                
                <div className="px-1">
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