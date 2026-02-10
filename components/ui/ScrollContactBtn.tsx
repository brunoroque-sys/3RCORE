"use client";

import React from 'react';

const ScrollNavBtn = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Limpia el hash después de hacer scroll
      setTimeout(() => {
        window.history.replaceState(null, '', window.location.pathname);
      }, 100);
    }
  };

  return (
    <a
      href="#contacto" 
      onClick={scrollToContact} 
      className="fixed bottom-24 right-6 w-13 h-13 rounded-full z-50 flex items-center justify-center 
                 transition-all duration-500 ease-in-out border border-transparent
                 shadow-[0_8px_30px_rgb(233,30,99,0.3)]
                 animate-pulse-slow group
                 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-white
                 hover:scale-110 hover:bg-none hover:bg-transparent hover:border-[#E91E63] hover:text-[#E91E63]"
      aria-label="Ir a contacto"
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        <svg 
          className="w-full h-full"
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