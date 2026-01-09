"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "HOME", href: "/" }, // Usando nombres en inglés como en la referencia
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "CONTACTO", href: "/contacto" },
    { name: "SERVICIOS", href: "/servicios" }
  ];

  const socialLinks = ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "YOUTUBE"];

  return (
    <>
      {/* BARRA DE NAVEGACIÓN SUPERIOR (Siempre visible) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0217] text-white border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24 relative">
            
            {/* 1. IZQUIERDA: LOGO */}
            <div className="flex-shrink-0 relative z-[60]">
              <Link href="/">
                <div className="relative h-10 w-28 cursor-pointer">
                  <Image
                    src="/icons/LogoFull.webp"
                    alt="3RCORE Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* 2. CENTRO: ESLOGAN (Se oculta al abrir el menú) */}
            <div className={`hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm tracking-wide transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-gray-400">Tu Éxito </span>
              <span className="font-bold ml-2 text-white">NUESTRO FUTURO</span>
            </div>

            {/* 3. DERECHA: IDIOMAS Y BOTÓN MENU/CLOSE */}
            <div className="flex items-center gap-6 relative z-[60]">
              {/* Idiomas */}
              <div className={`hidden sm:flex items-center gap-4 text-xs font-bold tracking-widest transition-opacity duration-300 ${isOpen ? 'opacity-0 delay-0' : 'opacity-100 delay-300'} text-gray-400`}>
                <button className="hover:text-white transition-colors cursor-pointer">ES</button>
                <button className="hover:text-white transition-colors cursor-pointer">EN</button>
              </div>

              {/* Botón Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 text-sm font-bold focus:outline-none tracking-widest uppercase hover:text-gray-300 transition-colors"
              >
                <span className="hidden sm:block">{isOpen ? "CLOSE" : "MENU"}</span>
                {/* Icono Hamburguesa / Cruz */}
                <div className="flex flex-col justify-center items-end w-6 h-6 gap-[5px] cursor-pointer">
                  <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isOpen ? "w-6 " : "w-4 group-hover:w-6"}`}></span>
                  <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isOpen ? "w-6 " : "w-6"}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE OVERLAY (Estructura de image_1.png con animación central) */}
      <div
        className={`fixed inset-0 z-[55] bg-black flex overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${isOpen ? "left-0 width-full opacity-100 visible pointer-events-auto" : "left-1/2 width-0 opacity-0 invisible pointer-events-none"}`}
        style={{ width: isOpen ? '100%' : '0%', left: isOpen ? '0%' : '50%' }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row">
          
          {/* COLUMNA IZQUIERDA: Logo Grande */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-black relative border-r border-white/10">
             <div className={`relative h-32 w-64 transition-all duration-700 delay-300 transform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}>
                <Image
                  src="/icons/LogoFull.webp" // Tu logo aquí
                  alt="3RCORE Logo Large"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
          </div>

          {/* COLUMNA DERECHA: Navegación y Footer */}
          <div className="flex-1 flex flex-col justify-between bg-black p-8 sm:p-16 pt-28 lg:pt-16">
            
            {/* Botón CLOSE extra para móvil (opcional, ya está en el navbar) */}
            <button 
               onClick={() => setIsOpen(false)}
               className="lg:hidden absolute top-8 right-8 text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white"
            >
               CLOSE
            </button>

            {/* Lista de Links */}
            <ul className="flex flex-col space-y-0">
              {links.map((link, index) => (
                <li key={link.name} className="group overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white py-4 sm:py-6 border-b border-white/20 relative transition-all duration-500 transform 
                      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                      hover:text-white/70 hover:pl-4 transition-all duration-300
                    `}
                    style={{ transitionDelay: `${150 + index * 100}ms` }} // Delay escalonado
                  >
                    {/* Efecto hover de relleno (opcional) */}
                    <span className="absolute top-0 left-0 w-0 h-full bg-white/10 z-[-1] transition-all duration-500 group-hover:w-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer del Menú */}
            <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs font-bold tracking-widest text-white/50 mt-12 transition-all duration-700 delay-700 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
                {socialLinks.map(social => (
                   <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
                ))}
              </div>
              <div className="text-right">
                <p>3R CORE AGENCIA DE MARKETING DIGITAL</p>
                <p>LAS CAOBAS 170, LA MOLINA</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;