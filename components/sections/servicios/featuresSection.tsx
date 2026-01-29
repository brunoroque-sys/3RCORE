'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturesSection = () => {

  const t = useTranslations('FeaturesSection');
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

const features = [
  {
    title: t('committed.title'),
    description: t('committed.description'),
    icon: '/icons/manos.svg',
  },
  {
    title: t('creative.title'),
    description: t('creative.description'),
    icon: '/icons/foco.svg',
  },
  {
    title: t('professional.title'),
    description: t('professional.description'),
    icon: '/icons/maleta.svg',
  },
];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    tl.from('.main-title', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(lineRef.current, {
      scaleX: 0,
      duration: 1,
      ease: 'expo.inOut'
    }, '-=0.4');

    cardsRef.current.forEach((card, index) => {
      const children = card.children;
      
      tl.from(children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      }, `-=${index === 0 ? 0.5 : 0.4}`);
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-12 px-10   text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-20">
          <h2 className="main-title text-xl md:text-2xl font-light tracking-[0.2em] text-center mb-4 uppercase">
           {t('mainTitle')}
          </h2>
          <div ref={lineRef} className="w-full max-w-4xl h-[1px] bg-white/80 origin-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="flex flex-col items-start text-justify"
            >
              <div className="icon-wrapper transition-transform duration-300 hover:scale-110">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-5" />
              </div>
              
              <h3 className="text-lg font-bold tracking-widest mb-5 mt-5 uppercase">
                {feature.title}
              </h3>
              
              <p className="text-xs leading-relaxed font-light text-gray-300 text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;