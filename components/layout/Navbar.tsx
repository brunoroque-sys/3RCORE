"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const Navbar = () => {

   const t = useTranslations('Navbar');
  const pathname = usePathname();
  
  const handleScrollTop = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    setIsOpen(false);
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (isOpen) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { name: t('nav.home'), href: "/" }, 
    { name: t('nav.about us') ,href: "/nosotros" },
    { name: t('nav.services'), href: "/#servicios" },
    { name: t('nav.blogs'), href: "https://3rcore.com/blog" },
    { name: t('nav.contact'), href: "#contacto", isContact: true },
  ];

  const socialLinks = [
    { name:"FACEBOOK", href:"https://www.facebook.com/3Rcore/"},
    { name:"INSTAGRAM", href:"https://www.instagram.com/3rcore_/?hl=es"},
    { name:"LINKEDIN", href:"https://www.linkedin.com/company/3r-core/"},
    { name:"TIKTOK", href:"https://www.tiktok.com/@3rcore"},
  ]
    

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 bg-[#130218] text-white  transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24 lg:h-20 xl:h-24 relative">
            
            <div className="flex-shrink-0 relative z-[60]">
              <Link 
                href="/" 
                onClick={() => {
                  setIsOpen(false);
                  handleScrollTop("/");
                }}
              > 
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
              <span className="text-white">{t('regular')}</span>
              <span className="font-bold ml-2 text-white">{t('bold')}</span>
            </div>

            <div className="flex items-center gap-6 relative z-[60]">
              <div className={`flex items-center gap-4 text-xs font-bold tracking-widest transition-opacity duration-300 ${isOpen ? 'opacity-0 delay-0' : 'opacity-100 delay-300'} text-gray-400`}>

                <Link 
                  href={pathname} 
                  locale="es" 
                  className="hover:text-[#E91E63] transition-colors cursor-pointer uppercase"
                >
                  ES
                </Link>

                <Link 
                  href={pathname} 
                  locale="en" 
                  className="hover:text-[#E91E63] transition-colors cursor-pointer uppercase"
                >
                  EN
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 text-sm font-bold focus:outline-none tracking-widest uppercase hover:text-gray-300 transition-colors"
              >
                <span className="hidden sm:block">MENU</span>
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
          
          <div onClick={() => {setIsOpen(false), handleScrollTop("/");}} className="hidden lg:flex flex-1 items-center justify-center bg-[#130218] relative border-r border-white/10">
 
            <Link 
              href="/" 
              className={`relative h-100 w-100 cursor-pointer transition-all duration-700 delay-300 transform ${
                isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
              }`}
            >
              <Image
                src="/icons/LogoFull.webp" 
                alt="3RCORE Logo Large"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-between bg-[#130218] p-8 sm:p-16 pt-28 lg:pt-16">
            
            <button 
               onClick={() => setIsOpen(false)}
               className="absolute top-8 right-8 text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
            >
               {t('clo')}
            </button>

            <ul className="flex flex-col space-y-0">
              {links.map((link, index) => (
                <li key={link.name} className="group overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.isContact) {
                        scrollToContact(e);
                      } else {
                        setIsOpen(false);
                        handleScrollTop("/");
                      }
                    }}
                    className={`block text-3xl sm:text-3xl lg:text:4xl font-bold tracking-tight text-white py-4 sm:py-6 border-b border-white/20 relative transition-all duration-500 transform 
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
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
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