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
  const priceCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número "01."
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

      // Animación de la sección de quote
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });

      // Animación de la tarjeta de precio
      gsap.from(priceCardRef.current, {
        scrollTrigger: {
          trigger: priceCardRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 px-10 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-4xl md:text-6xl font-bold italic tracking-tight"
          >
            01.
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
          Posicionamiento SEO en Google para empresas que quieren resultados reales
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-xs md:text-base max-w-4xl mb-16 leading-relaxed"
        >
          Mejoramos la visibilidad de tu página web en Google con una estrategia SEO profesional, 
          orientada a atraer tráfico calificado y oportunidades de venta de forma sostenida.
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

          <div className="relative index-3 text-center px-1 md:px-16 py-12">
            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl italic mb-1 font-light">
              El SEO no es publicidad ni redes sociales
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
              es una estrategia de mediano plazo que construye autoridad, posicionamiento y 
              resultados progresivos en Google
            </p>
          </div>
        </div>

        <div 
          ref={priceCardRef}
          className="relative max-w-7xl mx-auto mt-20"
        >
          <div className="bg-[#24032D] rounded-[3rem] p-8 md:p-12 md:px-40 transition-shadow duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-center">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-pink-400 text-xl md:text-5xl italic font-medium mb-3 tracking-wide">
                  Inversión Mensual
                </p>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                  S/1500
                </p>
              </div>

              <div className="hidden md:block w-[2px] h-32 bg-white"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-gray-200 text-base md:text-lg">
                    Estrategia SEO profesional
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-gray-200 text-base md:text-lg">
                    Sin contratos forzosos
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-gray-200 text-base md:text-lg">
                    Resultados progresivos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}