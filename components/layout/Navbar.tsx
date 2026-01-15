"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lógica para esconder/mostrar al hacer scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Si el menú está abierto, no queremos que el scroll lo esconda
        if (isOpen) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          // Si bajamos y pasamos los 100px, escondemos
          setIsVisible(false);
        } else {
          // Si subimos, mostramos
          setIsVisible(true);
        }
        
        // Recordar la posición actual para la próxima comparación
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]);

  // Tu useEffect del body overflow se queda igual...
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { name: "HOME", href: "/" }, 
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "CONTACTO", href: "/contacto" },
    { name: "SERVICIOS", href: "/servicios" }
  ];

  const socialLinks = ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "YOUTUBE"];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 bg-[#130218] text-white border-b border-white/10 transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24 relative">
            
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

            <div className={`hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm tracking-wide transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-white">Tu Éxito </span>
              <span className="font-bold ml-2 text-white">NUESTRO ÉXITO</span>
            </div>

            <div className="flex items-center gap-6 relative z-[60]">
              <div className={`hidden sm:flex items-center gap-4 text-xs font-bold tracking-widest transition-opacity duration-300 ${isOpen ? 'opacity-0 delay-0' : 'opacity-100 delay-300'} text-gray-400`}>
                <button className="hover:text-white transition-colors cursor-pointer">ES</button>
                <button className="hover:text-white transition-colors cursor-pointer">EN</button>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 text-sm font-bold focus:outline-none tracking-widest uppercase hover:text-gray-300 transition-colors"
              >
                <span className="hidden sm:block">{isOpen ? "CLOSE" : "MENU"}</span>
                <div className="flex flex-col justify-center items-end w-6 h-6 gap-[5px] cursor-pointer">
                  <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isOpen ? "w-6 " : "w-4 group-hover:w-6"}`}></span>
                  <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isOpen ? "w-6 " : "w-6"}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[55] bg-[#130218] flex overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${isOpen ? "left-0 width-full opacity-100 visible pointer-events-auto" : "left-1/2 width-0 opacity-0 invisible pointer-events-none"}`}
        style={{ width: isOpen ? '100%' : '0%', left: isOpen ? '0%' : '50%' }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row">
          
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#130218] relative border-r border-white/10">
             <div className={`relative h-100 w-100 transition-all duration-700 delay-300 transform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}>
                <Image
                  src="/icons/LogoFull.webp" 
                  alt="3RCORE Logo Large"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
          </div>

          <div className="flex-1 flex flex-col justify-between bg-[#130218] p-8 sm:p-16 pt-28 lg:pt-16">
            
            <button 
               onClick={() => setIsOpen(false)}
               className="lg:hidden absolute top-8 right-8 text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white"
            >
               CLOSE
            </button>

            <ul className="flex flex-col space-y-0">
              {links.map((link, index) => (
                <li key={link.name} className="group overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white py-4 sm:py-6 border-b border-white/20 relative transition-all duration-500 transform 
                      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                      hover:text-white hover:pl-4 transition-all duration-300
                    `}
                    style={{ transitionDelay: `${150 + index * 100}ms` }}
                  >
                   <span className="
                      absolute top-0 left-0 w-0 h-full
                      z-[-1]
                      transition-all duration-500
                      group-hover:w-full

                      bg-gradient-to-r
                      from-[rgba(156,39,176,0.25)]
                      to-[rgba(233,30,99,0.25)]
                    "></span>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs font-bold tracking-widest text-white/50 mt-12 transition-all duration-700 delay-700 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
                {socialLinks.map(social => (
                   <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;