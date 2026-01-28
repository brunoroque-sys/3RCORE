'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourthLandingSection() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const quoteRef = useRef(null);
  const quoteText1Ref = useRef(null);
  const quoteText2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número "04."
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animación de la línea (crecimiento de 0 a 100%)
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Animación del título principal
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Animación de la descripción
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      });

      // Animación de la primera imagen (desde la izquierda)
      gsap.from(image1Ref.current, {
        scrollTrigger: {
          trigger: image1Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      });

      // Animación de la segunda imagen (desde la derecha)
      gsap.from(image2Ref.current, {
        scrollTrigger: {
          trigger: image2Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      });

      // Animación del contenedor de quote
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Animación del primer texto del quote
      gsap.from(quoteText1Ref.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Animación del segundo texto del quote (gradiente)
      gsap.from(quoteText2Ref.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-5xl md:text-6xl font-bold italic tracking-tight"
          >
            04.
          </h3>
          <div 
            ref={lineRef}
            className="w-50 h-[2px] bg-white mt-2"
          ></div>
        </div>

        <h2 
          ref={headingRef}
          className="text-white text-lg md:text-xl lg:text-3xl font-semibold mb-6 max-w-7xl leading-tight"
        >
          Casos de éxito en posicionamiento SEO
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-sm md:text-base max-w-4xl mb-16 leading-relaxed"
        >
          Hemos trabajado estrategias SEO para diferentes rubros, logrando posicionamiento en búsquedas clave como:
        </p>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div 
            ref={image1Ref}
            className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/landing/pc1.png" 
              alt="Caso de éxito 1"
              fill
              className="object-cover"
            />
          </div>
          <div 
            ref={image2Ref}
            className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/landing/pc2.png" 
              alt="Caso de éxito 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div 
          ref={quoteRef}
          className="relative max-w-5xl mx-auto my-24"
        >
          <div className="text-center px-8 md:px-16">
            <p 
              ref={quoteText1Ref}
              className="text-white/90 text-xl md:text-2xl lg:text-3xl italic mb-1 font-light"
            >
              Cada proyecto parte de un análisis real
            </p>
            <p 
              ref={quoteText2Ref}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed"
            >
              y una estrategia personalizada según el negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}