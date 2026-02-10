'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

interface HeroLandingProps {
  onImageLoad: () => void; 
}
export default function HeroLanding({ onImageLoad }: HeroLandingProps) {

  const t = useTranslations('LandingHero');
  

  const pinkBgRef = useRef(null);
  const andTextRef = useRef(null);
  const brTextRef = useRef(null);
  const lineRef = useRef(null);
  const sloganRef = useRef(null);
  const sectionRef = useRef(null);
  

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
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

  const renderGoogleText = (text: string) => {
    const googleColors = {
      'G': '#4285F4', 
      'o': '#EA4335', 
      'o2': '#FBBC04', 
      'g': '#4285F4', 
      'l': '#34A853',
      'e': '#EA4335' 
    };

    return text.split(' ').map((word: string, wordIndex: number) => {
      if (word.toLowerCase() === 'google') {
        return (
          <span key={wordIndex}>
            <span style={{ color: googleColors['G'] }}>G</span>
            <span style={{ color: googleColors['o'] }}>o</span>
            <span style={{ color: googleColors['o2'] }}>o</span>
            <span style={{ color: googleColors['g'] }}>g</span>
            <span style={{ color: googleColors['l'] }}>l</span>
            <span style={{ color: googleColors['e'] }}>e</span>
            {' '}
          </span>
        );
      }
      return <span key={wordIndex}>{word} </span>;
    });
  };
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
          onLoadedData={onImageLoad} 
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
                className="text-white text-left text-3xl lg:text-6xl 2xl:text-8xl font-black tracking-[0.1em] leading-none"
              >
                {t('titleLine1')}
              </h2>
            </div>

            <div 
              ref={pinkBgRef}
              className="bg-[#ff0055] px-6 py-2 transform"
            >
              <h2 
                ref={andTextRef}
                className="text-white text-center text-3xl lg:text-6xl 2xl:text-8xl font-black tracking-[0.1em] leading-none"
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
            className="text-white text-sm md:text-xl font-light w-[90%] md:w-full"
          >
            {renderGoogleText(t('slogan'))}
          </p>

          <div className='relative z-10 mt-12 2xl:mt-20'>
            <a 
              href="#contacto" 
              onClick={scrollToContact} 
              className="inline-block"
            > 
              <button 
                className="group relative px-10 py-3 border border-gray-500 rounded-[15px] text-lg tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 ease-in-out hover:border-transparent cursor-pointer"
              >   
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-opacity duration-500 ease-in-out" />
                
                <span className="relative z-10 text-white">
                    {t('buttonText')}
                </span>
              </button>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}