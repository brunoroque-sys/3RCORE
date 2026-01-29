'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

interface HeroLandingProps {
  onImageLoad: () => void; 
}
export default function HeroLanding({ onImageLoad }: HeroLandingProps) {

  const t = useTranslations('SeoSemHero');
  

  const pinkBgRef = useRef(null);
  const andTextRef = useRef(null);
  const brTextRef = useRef(null);
  const lineRef = useRef(null);
  const sloganRef = useRef(null);
  const sectionRef = useRef(null);
  
      const phoneNumber = "51986889147";
  const message = "Hola vengo de la página web, quiero agendar una reunión.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  useEffect(() => {
    const playAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      gsap.set(pinkBgRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(andTextRef.current, { clipPath: 'inset(0 100% 0 0)' });
      gsap.set(brTextRef.current, { opacity: 0, y: -20 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'center' });
      gsap.set(sloganRef.current, { opacity: 0, y: 20 });

      tl.to(pinkBgRef.current, {
        scaleX: 1,
        duration: 0.8,
        delay: 0.3
      })
      .to(andTextRef.current, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .to(brTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.4')
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.8
      }, '-=0.2')
      .to(sloganRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.4');

      return tl;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAnimation();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black "
    >
      <div className="absolute inset-0 z-0 items-center">
        <video
          src="/videos/pos.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={onImageLoad} // Similar al onLoad de la imagen
        >
          Tu navegador no soporta videos.
        </video>
        <div className="absolute inset-0 bg-[#130218] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-10">
        <div className="flex flex-col items-center">
          
          <div className='w-auto flex flex-col items-center'>
            <div className="bg-none px-6 py-2 w-[100%] transform">
              <h2 
                ref={brTextRef}
                className="text-white text-left text-3xl md:text-8xl font-black tracking-[0.1em] leading-none"
              >
                POSICIONAMIENTO
              </h2>
            </div>

            <div 
              ref={pinkBgRef}
              className="bg-[#ff0055] px-6 py-2 transform"
            >
              <h2 
                ref={andTextRef}
                className="text-white text-center text-3xl md:text-8xl font-black tracking-[0.1em] leading-none"
              >
                SEO
              </h2>
            </div>
          </div>

          <div 
            ref={lineRef}
            className="w-full md:w-200 h-[1px] bg-white/50 my-8"
          ></div>

          <p 
            ref={sloganRef}
            className="text-white text-xs md:text-sm font-light w-full"
          >
            Impulsa tu negocio en Google y atrae clientes que sí buscan lo que ofreces
          </p>

          <div className='relative index-4 -bottom-50 '>
            <button 
              onClick={handleWhatsAppClick}
              className="group relative px-10 py-3 border border-gray-500 rounded-[15px] text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 ease-in-out hover:border-transparent cursor-pointer"
            >   
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-opacity duration-500 ease-in-out" />
              
              <span className="relative z-10">
                 CONTACTAR SERVICIO
              </span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}