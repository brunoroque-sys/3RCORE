'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SeoSemCall() {
  const t = useTranslations('SEOSEM');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      const titleLines = titleRef.current?.querySelectorAll('span');
      if (titleLines) {
        tl.from(titleLines, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });
      }

      tl.from([paragraph1Ref.current, paragraph2Ref.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.3'); 

      tl.from(imageRef.current, {
        opacity: 0,
        x: 100,
        rotation: 5,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.4');

      gsap.to(imageRef.current, {
        y: -15,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
    >
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-6 px-10 lg:pl-40">
            <h2 
              ref={titleRef}
              className="text-4xl lg:text-6xl font-light leading-tight"
            >
              <span className="italic block">{t('title.part1')}</span>
              <span className="text-pink-600 font-normal block">{t('title.part2')}</span>
              <span className="text-pink-600 font-normal block">{t('title.part3')}</span>
            </h2>

            <div className="space-y-4 text-xs lg:text-xl">
              <p ref={paragraph1Ref} className="leading-relaxed">
                {t('description.paragraph1')}
              </p>

              <p ref={paragraph2Ref} className="leading-relaxed">
                {t('description.paragraph2')}
              </p>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end lg:justify-end">
            <div 
              ref={imageRef}
              className="relative w-full max-w-[450px] lg:max-w-[650px] 2xl:max-w-[750px]"
            >
              <Image
                src="/images/seosem/laptopInici.png"
                alt="Laptop showing Google search results"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}