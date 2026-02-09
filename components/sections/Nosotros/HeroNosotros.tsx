'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroNosotros = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const bottomArrowRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleCanPlayThrough);

    if (video.readyState >= 3) {
      handleCanPlayThrough();
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleCanPlayThrough);
    };
  }, []);

  useEffect(() => {
    if (!isVideoLoaded || !scrollIndicatorRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });


      if (bottomArrowRef.current) {
        gsap.to(bottomArrowRef.current, {
          y: 5,
          opacity: 0.3,
          duration: 1.5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      gsap.to(scrollIndicatorRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150',
          scrub: true,
        },
        opacity: 0,
        y: -30,
      });

      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
          opacity: 0.6,
        });
      }
    });

    return () => ctx.revert();
  }, [isVideoLoaded]);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-700"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ 
            opacity: isVideoLoaded ? 1 : 0
          }}
        >
          <source src="/videos/nosoHero.webm" type="video/webm" />
          <source src="/videos/nosoHero.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-[#130218] opacity-20 mix-blend-multiply"
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={handleScrollClick}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <div className="flex flex-col items-center gap-3 group">
        
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-7 h-11 border-2 border-white/50 rounded-full flex items-start justify-center p-1 transition-all duration-300 group-hover:border-white group-hover:scale-105">
              <div className="w-1 h-2.5 bg-white/60 rounded-full animate-scroll-down group-hover:bg-white"></div>
            </div>
            
            <span className="text-white/70 text-xs font-light tracking-widest uppercase transition-colors group-hover:text-white">
              Scroll
            </span>
          </div>

          <div ref={bottomArrowRef}>
            <svg 
              className="w-5 h-5 text-white/60 transition-colors group-hover:text-white"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {!isVideoLoaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#16021B] via-[#16021B]/50 to-transparent z-[6] pointer-events-none" /> 
    </section>
  );
};

export default HeroNosotros;