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
      image: '/images/Fundadores/alejandro2.webp',
      video:'/images/Fundadores/Alejandro.webm'
    },
    { 
      id: 'bruno', 
      name: 'BRUNO', 
      fullName: 'Bruno Roque', 
      role: t('roles.marketingDirector'), 
      image: '/images/Fundadores/Bruno.webp',
      video:'/images/Fundadores/Bruno.webm'
    },
    { 
      id: 'piero', 
      name: 'PIERO', 
      fullName: 'Piero Roque', 
      role: t('roles.seoDirector'), 
      image: '/images/Fundadores/Piero.webp',
      video:'/images/Fundadores/Piero.webm'
    },
  ];
  
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
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
    }, 3000);

    progressAnimationRef.current = gsap.fromTo(progressRef.current, 
      { width: "0%" }, 
      { width: "100%", duration: 3, ease: "none" }
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

const handleMouseEnter = () => {
  setIsHovering(true);
  setShowVideo(true);
  pauseTimer();
  
  if (videoRef.current) {
    // 1. Intentamos quitar el mute
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;

    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Audio esperando interacción del usuario.");
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }

  gsap.to(imageContainerRef.current, {
    height: '450px', 
    width: '150%',   
    x: '0%',       
    borderRadius: '2px', 
    duration: 0.6,
    ease: "expo.out"
  });

  gsap.to([imageRef.current, videoRef.current], {
    scale: 1.2, 
    duration: 0.6,
    ease: "expo.out"
  });
};
const handleMouseLeave = () => {
    setIsHovering(false);
    setShowVideo(false);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    
    gsap.to(imageContainerRef.current, {
      height: '700px',
      width: '100%',
      x: '0%',
      borderRadius: '0px',
      duration: 0.6,
      ease: "elastic.out(1, 0.8)" 
    });

    gsap.to([imageRef.current, videoRef.current], {
      scale: 1,
      duration: 0.6,
      ease: "expo.out"
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
      className="min-h-screen flex items-center justify-center p-8 overflow-hidden font-sans"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div ref={leftSideRef} className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <div className="overflow-hidden h-8 flex items-center">
              <span className="text-pink-500 font-mono text-2xl font-bold">
                0{index + 1}
              </span>
              <span className="text-white mx-2 text-xl">/</span>
              <span className="text-white font-mono text-lg">0{foundersData.length}</span>
            </div>
            <div className="h-[1px] w-12 bg-white"></div>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">
              {t('badge')}
            </span>
          </div>

          <div className="relative">
            <h2
              ref={nameRef}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none min-h-[1.1em] flex items-center"
            >
              {selected.name}
            </h2>
            
            <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gray-900">
              <div 
                ref={progressRef}
                className="h-full bg-pink-500 shadow-[0_0_10px_#d926aa]"
              />
            </div>
          </div>

          <p className="text-gray-500 text-sm max-w-xs italic pt-4 leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div ref={rightSideRef} className="flex flex-col group">
          <div 
            ref={imageContainerRef}
            className="relative w-full overflow-hidden bg-[#1a0b2e] shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-pointer"
            style={{ height: '700px' }} // Altura inicial vertical
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              ref={imageRef} 
              src={selected.image} 
              fill 
              className="object-cover" 
              alt={selected.fullName} 
            />
            <video
              ref={videoRef}
              src={selected.video}
              className="absolute inset-0 w-full h-full  transition-opacity duration-300"
              style={{ opacity: showVideo ? 1 : 0 }}
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0412] via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="mt-8 flex flex-col space-y-1 border-l-2 border-pink-600 pl-6 transition-all duration-500">
            <h3 className="text-white text-3xl font-bold tracking-tight uppercase">
              {selected.fullName}
            </h3>
            <p className="text-pink-500 font-medium tracking-[0.2em] uppercase text-xs">
              {selected.role}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founders;