'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SecondLandingSection() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número "02."
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

      // Primera tarjeta - Imagen desde la izquierda
      gsap.from(image1Ref.current, {
        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      });

      // Primera tarjeta - Texto desde la derecha
      gsap.from(text1Ref.current, {
        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      });

      // Segunda tarjeta - Texto desde la izquierda
      gsap.from(text2Ref.current, {
        scrollTrigger: {
          trigger: card2Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      });

      // Segunda tarjeta - Imagen desde la derecha
      gsap.from(image2Ref.current, {
        scrollTrigger: {
          trigger: card2Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      });

      // Tercera tarjeta - Imagen desde la izquierda
      gsap.from(image3Ref.current, {
        scrollTrigger: {
          trigger: card3Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      });

      // Tercera tarjeta - Texto desde la derecha
      gsap.from(text3Ref.current, {
        scrollTrigger: {
          trigger: card3Ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-5xl md:text-6xl font-bold italic tracking-tight"
          >
            02.
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
          ¿Por qué hacer Posicionamiento SEO?
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-sm md:text-base max-w-4xl mb-16 leading-relaxed"
        >
          Trabajamos bajo una metodología clara, medible y orientada a resultados.
        </p>
      </div>

      <div className='w-full relative max-w-full mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          
          <div 
            ref={card1Ref}
            className='backdrop-blur-sm md:col-span-2'
          >
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div 
                ref={image1Ref}
                className='flex justify-center bg-gradient-to-r from-[#4c0046] to-[#24032D]'
              >
                <Image 
                  src="/images/landing/secondimg1.png" 
                  alt="Auditoría y Planificación SEO"
                  width={240}
                  height={340}
                  className="w-full max-w-[350px] min-h-[450px]"
                />
              </div>
              <div ref={text1Ref} className='px-32'>
                <div> 
                  <h3 className='text-white text-base md:text-lg font-bold uppercase tracking-wide mb-6'>
                    Auditoría y Planificación SEO 
                  </h3>
                </div>
                <ul className='text-white text-sm md:text-base space-y-3'>
                  <li>- Análisis de palabras clave principales de tu negocio</li>
                  <li>- Estudio de competidores directos en Google</li>
                  <li>- Revisión básica de la estructura de tu sitio web</li>
                  <li>- Propuesta de calendario editorial mensual (8 - 15 títulos optimizados)</li>
                  <li>- Reporte mensual de rendimiento</li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            ref={card2Ref}
            className='rounded-3xl backdrop-blur-sm md:col-span-2'
          >
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div ref={text2Ref} className='px-32'>
                <h3 className='text-white text-base md:text-lg font-bold uppercase tracking-wide mb-6'>
                  Optimización de Interlinks    
                </h3>
                <ul className='text-white text-sm md:text-base space-y-3'>
                  <li>- Análisis de la estructura interna del sitio</li>
                  <li>- Estrategia de enlaces internos entre contenidos</li>
                  <li>- Optimización del recorrido del usuario</li>
                  <li>- Mejora de la autoridad interna de las páginas principales</li>
                </ul>
              </div>
              <div 
                ref={image2Ref}
                className='flex justify-center bg-gradient-to-r from-[#4c0046] to-[#24032D]'
              >
                <Image 
                  src="/images/landing/secondimg2.png" 
                  alt="Optimización de Interlinks"
                  width={240}
                  height={240}
                  className="w-full max-w-[400px] min-h-[450px]"
                />
              </div>
            </div>
          </div>

          <div 
            ref={card3Ref}
            className='backdrop-blur-sm md:col-span-2'
          >
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div 
                ref={image3Ref}
                className='flex justify-center bg-gradient-to-r from-[#4c0046] to-[#24032D]'
              >
                <Image 
                  src="/images/landing/secondimg3.png" 
                  alt="Escalamiento SEO"
                  width={240}
                  height={240}
                  className="w-full max-w-[400px] min-h-[450px]"
                />
              </div>
              <div ref={text3Ref} className='px-32'>
                <h3 className='text-white text-base md:text-lg font-bold uppercase tracking-wide mb-6'>
                  escalamiento seo   
                </h3>
                <ul className='text-white text-sm md:text-base space-y-3'>
                  <li>- Identificación de nuevas oportunidades de posicionamiento</li>
                  <li>- Optimización continua de contenidos existentes</li>
                  <li>- Refuerzo de páginas con mejor desempeño</li>
                  <li>- Reporte de crecimiento y plan de acciones futuras</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}