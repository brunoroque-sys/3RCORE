'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function FiveLandingSection() {

  const t = useTranslations('FiveLandingSection');

  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceCardRef = useRef(null);

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

      gsap.from(priceCardRef.current, {
        scrollTrigger: {
          trigger: priceCardRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-10 px-10 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 
            ref={numberRef}
            className="text-[#A21F8A] text-4xl lg:text-5xl xl:text-6xl font-bold italic tracking-tight"
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
          className="text-white text-lg md:text-xl lg:text-xl 2xl:text-3xl font-semibold mb-6 max-w-7xl leading-tight"
        >
          {t('heading')}
        </h2>

        <p 
          ref={descriptionRef}
          className="text-white text-xs lg:text-sm 2xl:text-base max-w-4xl mb-16 leading-relaxed"
        >
          {t('description')}
        </p>

        <div 
          ref={priceCardRef}
          className="relative max-w-7xl mx-auto mt-20"
        >
          <div className="bg-[#24032D] rounded-[3rem] p-8 md:p-12 md:px-40 transition-shadow duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-center">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-pink-400 text-xl xl:text-3xl italic font-medium mb-3 tracking-wide">
                  {t('pricing.label')}
                </p>
                <p className="text-white text-3xl md:text-3xl xl:text-4xl font-semibold tracking-tight">
                  {t('pricing.amount')}
                </p>
              </div>

              <div className="hidden md:block w-[2px] h-32 bg-white"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <p className="text-gray-200 text-sm md:text-lg">
                    {t('pricing.footer')}
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