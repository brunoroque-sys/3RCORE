"use client";

import React, { useState, useEffect } from 'react';

const ScrollNavBtn = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById('contacto');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se activa cuando el formulario de contacto entra en el radar
        setIsAtBottom(entry.isIntersecting);
      },
      { threshold: 0.2 } // Se activa cuando vemos el 20% del formulario
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId =  'contacto';
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={"#contacto"}
      onClick={handleScroll}
      className={`fixed bottom-24 right-6 w-14 h-14 rounded-full z-50 flex items-center justify-center 
                 transition-all duration-500 ease-in-out border
                 shadow-[0_8px_30px_rgb(233,30,99,0.3)]
                 animate-pulse-slow group
                 ${isAtBottom 
                   ? "bg-transparent border-[#E91E63] text-[#E91E63] scale-110 shadow-none" 
                   : "bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-white border-transparent"
                 }
                 hover:bg-none hover:bg-transparent hover:border-[#E91E63] hover:text-[#E91E63]`}
      aria-label={isAtBottom ? "Subir al inicio" : "Abrir contacto"}
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        {/* ICONO DE MENSAJE (Aparece cuando estamos arriba) */}
        <svg 
          className={`absolute transition-all duration-500 transform ${isAtBottom ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="14" y2="13" />
        </svg>

      </div>
    </a>
  );
};

export default ScrollNavBtn;