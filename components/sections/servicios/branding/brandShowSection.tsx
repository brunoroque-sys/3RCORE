'use client';
import { Trirong } from 'next/font/google';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslations } from 'next-intl';

export function BrandShowSection(){

  

  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });


      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0% 0% 100% 0%)' }, 
        { 
          clipPath: 'inset(0% 0% 0% 0%)', 
          duration: 1.5, 
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full text-white py-0 font-sans flex flex-col items-center overflow-hidden">
      <div ref={imageContainerRef} className="w-full h-[20vh] lg:h-[50vh] xl:h-[70vh] overflow-hidden">
        <img 
          ref={imageRef}
          src="/images/branding/fond.png" 
          alt="Proceso creativo"
          className="object-cover " 
        />
      </div>
    </section>
  );
}