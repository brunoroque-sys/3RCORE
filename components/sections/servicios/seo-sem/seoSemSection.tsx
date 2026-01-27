'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

const SeoSemSection = () => {
  const t = useTranslations('SeoSemSection');

  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const semRef = useRef<HTMLDivElement>(null);
  const seoLineRef = useRef<HTMLDivElement>(null);
  const semLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        scaleX: 0,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.2
      });

      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4
      });

      gsap.from(seoRef.current, {
        scrollTrigger: {
          trigger: seoRef.current,
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(seoLineRef.current, {
        scrollTrigger: {
          trigger: seoRef.current,
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.2
      });

      gsap.from(seoRef.current?.querySelectorAll('.seo-item') || [], {
        scrollTrigger: {
          trigger: seoRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.5
      });

      gsap.from(semRef.current, {
        scrollTrigger: {
          trigger: semRef.current,
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(semLineRef.current, {
        scrollTrigger: {
          trigger: semRef.current,
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.2
      });

      gsap.from(semRef.current?.querySelectorAll('.sem-item') || [], {
        scrollTrigger: {
          trigger: semRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-30 space-y-6">
          <h2 
            ref={titleRef}
            className="text-base md:text-lg tracking-[0.3em] uppercase font-light"
          >
            {t('header.subtitle')}
          </h2>
          <div 
            ref={lineRef}
            className="h-[1px] w-full bg-white max-w-2xl mx-auto origin-center"
          />
          <p 
            ref={descriptionRef}
            className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light"
            dangerouslySetInnerHTML={{ __html: t('header.description') }}
          />
        </div>

        <div ref={seoRef} className="mb-20">
          <div className="grid md:grid-cols-[40%_60%] gap-0">
            <div className="flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <div className="space-y-2 ">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#E91E63]">
                 {t('seo.title')}
                </h3>
                <p className="text-sm md:text-base font-light">
                  {t('seo.subtitle')}
                </p>
              </div>
            </div>

            {/* SEO Content */}
            <div className="pl-8 md:pl-12 flex items-center relative">
              <div 
                ref={seoLineRef}
                className="absolute left-0 top-0 bottom-0 w-[1px] bg-white origin-top"
              />
              <div className="space-y-6 py-8">
                <p className="text-sm md:text-base leading-relaxed seo-item">
                  {t('seo.description')}
                </p>
                
                <ul className="space-y-3 text-sm md:text-base">
                  {t.raw('seo.items').map((item: string, index: number) => (
                    <li key={index} className="seo-item">- {item}</li>
                  ))}
                </ul>

                <p className="text-sm md:text-base italic font-light pt-4 seo-item">
                  {t('seo.footer')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={semRef}>
          <div className="grid md:grid-cols-[40%_60%] gap-0">
            <div className="flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <div className="space-y-2">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#E91E63]">
                  {t('sem.title')}
                </h3>
                <p className="text-sm md:text-base font-light">
                  {t('sem.subtitle')}
                </p>
              </div>
            </div>

            <div className="pl-8 md:pl-12 flex items-center relative">
              <div 
                ref={semLineRef}
                className="absolute left-0 top-0 bottom-0 w-[1px] bg-white origin-top"
              />
              <div className="space-y-6 py-8">
                <p className="text-sm md:text-base leading-relaxed sem-item">
                  {t('sem.description')}
                </p>
                
                <ul className="space-y-3 text-sm md:text-base">
                  {t.raw('sem.items').map((item: string, index: number) => (
                    <li key={index} className="sem-item">- {item}</li>
                  ))}
                </ul>

                <p className="text-sm md:text-base italic font-light pt-4 sem-item">
                  {t('sem.footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSemSection;
