'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function SixLandingSection() {

  const t = useTranslations('SixLandingSection');

  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 px-10 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-4xl md:text-6xl font-bold italic tracking-tight"
          >
            {t('number')}
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
          {t('heading')}
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-xs md:text-base max-w-4xl mb-16 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t('description') }}
        />
      </div>
    </section>
  );
}