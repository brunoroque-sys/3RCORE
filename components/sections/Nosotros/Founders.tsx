"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const Founders = () => {
  
const t = useTranslations('FoundersSection');

const foundersData = [
    { 
      id: 'alejandro', 
      name: 'ALEJANDRO', 
      fullName: 'Alejandro Roque', 
      role: t('roles.ceo'), 
      image: '/images/Fundadores/AlejandroAlta1.webp',
      video:'/images/Fundadores/Alejandro2.webm'
    },
    { 
      id: 'bruno', 
      name: 'BRUNO', 
      fullName: 'Bruno Roque', 
      role: t('roles.marketingDirector'), 
      image: '/images/Fundadores/BrunoAlta.webp',
      video:'/images/Fundadores/Bruno2.webm'
    },
    { 
      id: 'piero', 
      name: 'PIERO', 
      fullName: 'Piero Roque', 
      role: t('roles.seoDirector'), 
      image: '/images/Fundadores/PieroAlta.webp',
      video:'/images/Fundadores/Piero2.webm'
    },
  ];
  
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const selected = foundersData[index];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const runScramble = (newText: string) => {
    if (!nameRef.current) return;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@";
    let iterations = 0;
    const interval = setInterval(() => {
      if (nameRef.current) {
        nameRef.current.innerText = newText.split("").map((_, i) => {
          if (i < iterations) return newText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
      }
      if (iterations >= newText.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 40);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressAnimationRef.current) progressAnimationRef.current.kill();

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % foundersData.length);
    }, 2000);

    progressAnimationRef.current = gsap.fromTo(progressRef.current, 
      { width: "0%" }, 
      { width: "100%", duration: 2, ease: "none" }
    );
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (progressAnimationRef.current) {
      progressAnimationRef.current.pause();
    }
  };

  const goToPrevious = () => {
    pauseTimer();
    setIndex((prev) => (prev - 1 + foundersData.length) % foundersData.length);
    setTimeout(() => startTimer(), 100);
  };

  const goToNext = () => {
    pauseTimer();
    setIndex((prev) => (prev + 1) % foundersData.length);
    setTimeout(() => startTimer(), 100);
  };

const handleMouseEnter = () => {
  if (!isDesktop) return;

  const video = videoRef.current;
  const container = imageContainerRef.current;
  const image = imageRef.current;

  if (!video || !container || !image) return;

  setIsHovering(true);
  setShowVideo(true);
  pauseTimer();

  video.muted = false;
  video.currentTime = 0;
  
  video.play().catch(() => {
    video.muted = true;
    video.play();
  });

  gsap.to(container, {
    width: '100%',
    borderRadius: '5px', 
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.to(video, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });

  gsap.to([image, video], {
    scale: 1.1, 
    duration: 0.6,
    ease: "power2.out"
  });
};

const handleMouseLeave = () => {
  if (!isDesktop) return;

  setIsHovering(false);
  
  gsap.to(imageContainerRef.current, {
    width: '100%',
    borderRadius: '0px',
    duration: 0.6,
    ease: "power2.inOut"
  });

  gsap.to(videoRef.current, {
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      setShowVideo(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  });

  gsap.to([imageRef.current, videoRef.current], {
    scale: 1,
    duration: 0.6,
    ease: "power2.inOut"
  });

  startTimer();
};

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([leftSideRef.current, rightSideRef.current], 
        { 
          y: 60, 
          opacity: 0 
        }, 
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%", 
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  useEffect(() => {
    if (!isHovering) {
      startTimer();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressAnimationRef.current) progressAnimationRef.current.kill();
    };
  }, [index, isHovering]);

  useEffect(() => {
    runScramble(selected.name);

    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 1.2 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, [index, selected.name]);

  return (
    <section 
      ref={sectionRef}
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 overflow-hidden font-sans"
    >
      <div className="max-w-6xl lg:max-w-4xl 2xl:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        
        <div ref={leftSideRef} className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="overflow-hidden h-7 sm:h-8 flex items-center">
              <span className="text-pink-500 font-mono text-xl lg:text-base 2xl:text-2xl font-bold">
                0{index + 1}
              </span>
              <span className="text-white mx-1.5 sm:mx-2 lg:text-base 2xl:text-lg sm:text-xl">/</span>
              <span className="text-white font-mono text-base sm:text-lg">0{foundersData.length}</span>
            </div>
            <div className="h-[1px] w-10 sm:w-12 bg-white"></div>
            <span className="text-white uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] lg:text-[10px] 2xl:text-[13px] font-bold">
              {t('badge')}
            </span>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 sm:gap-6">
              <h2
                ref={nameRef}
                className="text-5xl 2xl:text-7xl font-black tracking-tighter text-white leading-none min-h-[1.1em] flex items-center"
              >
                {selected.name}
              </h2>
              
              
            </div>
            
            <div className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-[2px] bg-gray-900">
              <div 
                ref={progressRef}
                className="h-full bg-pink-500 shadow-[0_0_10px_#d926aa]"
              />
            </div>
          </div>

          <p className="text-white lg:text-sm 2xl:text-lg max-w-sm italic pt-3 sm:pt-4 leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div ref={rightSideRef} className="flex flex-col group">
          <div 
            ref={imageContainerRef}
            className="relative w-full lg:w-[100%] overflow-hidden bg-[#1a0b2e] cursor-pointer" 
            style={{ height: 'clamp(350px, 60vw, 450px)' }} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              ref={imageRef} 
              src={selected.image} 
              fill 
              className="object-cover" 
              alt={selected.fullName}
              sizes="(max-width: 1024px) 100vw, 450px"
              priority
            />
            {isDesktop && (
              <video
                ref={videoRef}
                src={selected.video}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0 }}
                loop
                playsInline
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0412] via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="flex justify-between mt-6">
            <div className=' flex flex-col space-y-1 border-l-2 border-pink-600 pl-4 sm:pl-5 md:pl-6 transition-all duration-500'>
              <h3 className="text-white text-2xl 2xl:text-3xl font-bold tracking-tight uppercase">
                {selected.fullName}
              </h3>
              <p className="text-pink-500 font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[11px] 2xl:text-xs">
                {selected.role}
              </p>
            </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={goToPrevious}
                  className="group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 rounded hover:cursor-pointer"
                  aria-label="Previous founder"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-pink-500 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNext}
                  className="group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 rounded hover:cursor-pointer"
                  aria-label="Next founder"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-pink-500 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Founders;