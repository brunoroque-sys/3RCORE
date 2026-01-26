'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

interface HeroBrandingProps {
  onImageLoad: () => void; 
}
export default function HeroBranding({ onImageLoad }: HeroBrandingProps) {

  const t = useTranslations('BrandingHero');
  

  const pinkBgRef = useRef(null);
  const andTextRef = useRef(null);
  const brTextRef = useRef(null);
  const lineRef = useRef(null);
  const sloganRef = useRef(null);
  const sectionRef = useRef(null);

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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/branding/fondoBranding1.webp"
          alt="Brand Background"
          fill
          className="object-cover"
          priority
          onLoad={onImageLoad}
        />
        <div className="absolute inset-0 bg-[#130218] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-10">
        <div className="flex flex-col items-center">
          
          <div className='w-auto md:w-[35%]'>
            <div className="bg-none px-6 py-2 w-[100%] transform">
              <h2 
                ref={brTextRef}
                className="text-white text-left text-6xl md:text-8xl font-black tracking-[0.1em] leading-none"
              >
                BR
              </h2>
            </div>

            <div 
              ref={pinkBgRef}
              className="bg-[#ff0055] px-6 py-2 w-[100%] transform"
            >
              <h2 
                ref={andTextRef}
                className="text-white text-left text-6xl md:text-8xl font-black tracking-[0.1em] leading-none"
              >
                AND
              </h2>
            </div>
          </div>

          <div 
            ref={lineRef}
            className="w-full md:w-200 h-[1px] bg-white/50 my-8"
          ></div>

          <p 
            ref={sloganRef}
            className="text-white text-sm md:text-lg font-light w-full"
          >
            { t('slogan')}
          </p>
        </div>
      </div>

    </section>
  );
}