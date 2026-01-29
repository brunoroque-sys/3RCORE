'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FirstLandingSection() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteText1Ref = useRef(null);
  const quoteText2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número "03."
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
      className="relative w-full py-10 px-10 md:px-12 lg:px-14 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-4xl md:text-6xl font-bold italic tracking-tight"
          >
            03.
          </h3>
          <div 
            ref={lineRef}
            className="w-30 h-[2px] bg-white mt-2"
          ></div>
        </div>

        <h2 
          ref={headingRef}
          className="text-white text-lg md:text-xl lg:text-3xl font-semibold mb-6 max-w-7xl leading-tight"
        >
          ¿Cuándo se empiezan a ver resultados?
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-xs md:text-base max-w-4xl mb-16 leading-relaxed"
        >
          El SEO es una estrategia de mediano plazo. Los primeros avances suelen observarse a partir del tercer mes, dependiendo del rubro, competencia y estado inicial del sitio web.
        </p>

        {/* Quote section with image placeholders */}
        <div 
          ref={quoteRef}
          className="relative max-w-5xl mx-auto my-24"
        >
          <div className="absolute -left-8 md:-left-16 top-0 w-24 h-24 md:w-32 md:h-32 bg-[#24032D] scale-x-[-1]"
            style={{
              maskImage: 'url("/images/landing/comillas.svg")',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskImage: 'url("/images/landing/comillas.svg")',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain'
            }}>
          </div>
          <div className="absolute -right-8 md:-right-16 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-[#24032D]"
            style={{
              maskImage: 'url("/images/landing/comillas.svg")',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskImage: 'url("/images/landing/comillas.svg")',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain'
            }}>
          </div>

          <div className="text-center px-1 md:px-16 py-12">
            <p 
              ref={quoteText1Ref}
              className="text-white/90 text-xl md:text-2xl lg:text-3xl italic mb-1 font-light"
            >
              Trabajamos con datos, análisis y optimización constante 
            </p>
            <p 
              ref={quoteText2Ref}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed"
            >
              no prometemos posiciones inmediatas, ni resultados irreales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}