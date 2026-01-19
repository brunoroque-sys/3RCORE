'use client';

import { useState, useEffect, useRef } from 'react';

interface CarouselInterval {
  interval: NodeJS.Timeout;
  currentIndex: number;
}

interface Project {
  id: string;
  bg: string;
  title: string;
  titleMobile: string;
  slides: string[];
}

export default function ProjectsSection() {
const [isMobile, setIsMobile] = useState(false);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);
  const [carouselStates, setCarouselStates] = useState<Record<string, number>>({});
  const mobileTimerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselIntervalsRef = useRef<Record<string, NodeJS.Timeout>>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 'branding',
      bg: '/images/para/parallax5.webp',
      title: '/images/tituloCarru/Branding.svg',
      titleMobile: '/images/tituloCarru/brandingH.svg',
      slides: [
        '/images/para/parallax5.webp',
        '/images/para/parallax8.webp',
        '/images/para/parallax22.webp',
        '/images/para/parallax17.webp',
        '/images/para/parallax4.webp',
      ]
    },
    {
      id: 'socialmedia',
      bg: '/images/tituloCarru/socialCarrubg.webp',
      title: 'images/tituloCarru/SocialMedia.svg',
      titleMobile: 'images/tituloCarru/socialMediaHorizontal.svg',
      slides: [
        '/images/tituloCarru/socialCarrubg.webp',
        '/images/tituloCarru/socialCarru1.webp',
        '/images/tituloCarru/socialCarru2.webp',
        '/images/tituloCarru/socialCarru3.webp'
      ]
    },
    {
      id: 'seosem',
      bg: 'images/tituloCarru/seoCarrubg.webp',
      title: 'images/tituloCarru/SeoSem.svg',
      titleMobile: 'images/tituloCarru/seoSemHorizontal.svg',
      slides: [
        'images/tituloCarru/seoCarrubg.webp',
        'images/tituloCarru/seoCarru1.webp',
        'images/tituloCarru/seoCarru2.webp',
        'images/tituloCarru/seoCarru3.webp'
      ]
    },
    {
      id: 'webdesign',
      bg: 'images/tituloCarru/webCarrubg.webp',
      title: 'images/tituloCarru/WebDesign.svg',
      titleMobile: 'images/tituloCarru/WebDesignHorizontal.svg',
      slides: [
        'images/tituloCarru/webCarrubg.webp',
        'images/tituloCarru/webCarru1.webp',
        'images/tituloCarru/webCarru2.webp',
        'images/tituloCarru/webCarru3.webp'
      ]
    }
  ];

  const startCarousel = (projectId: string, slides: string[]) => {

      if (carouselIntervalsRef.current[projectId]) return;

      const interval = setInterval(() => {
        setCarouselStates(prev => ({
          ...prev,
          [projectId]: ((prev[projectId] || 0) + 1) % slides.length
        }));
      }, 1000);

      carouselIntervalsRef.current[projectId] = interval;
    };
  const stopCarousel = (projectId: string) => {
    if (carouselIntervalsRef.current[projectId]) {
      clearInterval(carouselIntervalsRef.current[projectId]);
      delete carouselIntervalsRef.current[projectId];
      
      setCarouselStates(prev => {
        const newState = { ...prev };
        delete newState[projectId]; 
        return newState;
      });
    }
  };

  const handleMobileClick = (projectId: string, slides: string[]) => {
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);

      const isActive = activeColumn === projectId;
      
      Object.keys(carouselIntervalsRef.current).forEach(id => stopCarousel(id));
      
      if (!isActive) {
        setActiveColumn(projectId);
        startCarousel(projectId, slides);
      } else {
        setActiveColumn(null);
      }
    };
  const handleDesktopHover = (projectId: string, slides: string[], isEntering: boolean) => {
      if (isEntering) {
        startCarousel(projectId, slides);
      } else {
        stopCarousel(projectId);
      }
    };
  useEffect(() => {
    return () => {
      Object.keys(carouselIntervalsRef.current).forEach(id => stopCarousel(id));
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .contenedor-imagenes-hovers {
          display: flex;
          width: 100%;
          height: 670px;
          overflow: hidden;
        }

        .col-static {
          width: 20%;
          position: relative;
          background-color: #0e1a26;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* CAPA OSCURA PARA LA COLUMNA ESTÁTICA */
        .col-static::after {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Misma oscuridad que los demás */
          z-index: 2; /* Por encima del fondo (z-1) pero debajo del título (z-5) */
          transition: opacity 0.4s ease;
        }
        

        .col-static .fondopro {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .col-static .titulo-img {
          position: relative;
          z-index: 5;
          width: 40%;
          object-fit: contain;
        }

        .titulo-img-horizon {
          display: none;
        }

        .col-hover {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0e1a26;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: flex 0.4s ease-in-out, filter 0.4s ease;
        }
        /* CAPA OSCURA INICIAL */
        .col-hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4); /* Nivel de oscuridad inicial */
          z-index: 10;
          transition: opacity 0.4s ease-in-out;
        }

        @media (min-width: 769px) {
          .col-hover:hover {
            flex: 5;
          }
          .col-hover:hover::after {
            opacity: 0;
          }
          .contenedor-imagenes-hovers:hover .col-hover:not(:hover) {
            filter: brightness(100%);
          }
        }
        /* QUITAR OSCURIDAD EN CLICK (Mobile) */
        .col-hover.active-mobile::after {
          opacity: 0;
        }

        .col-hover img.titulo-hover,
        .col-hover img.titulo-hover-mobile {
          position: absolute;
          bottom: 25px;
          right: 25px;
          z-index: 20;
          object-fit: contain;
          pointer-events: none;
        }

        .titulo-hover-mobile {
          display: none;
        }

        .bg-carousel {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        .bg-carousel.active {
          opacity: 1;
        }

        .bg-carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          z-index: 1;
          transition: opacity 0.8s ease-in-out;
        }

        .bg-carousel img.show {
          opacity: 1;
          z-index: 2;
        }

        @media screen and (min-width: 2000px) {
          .contenedor-imagenes-hovers {
            height: auto;
          }
          .col-static .titulo-img {
            object-fit: scale-down;
          }
        }

        @media screen and (min-width: 2561px) {
          .contenedor-imagenes-hovers {
            height: auto;
          }
        }

        @media (max-width: 768px) {
          .contenedor-imagenes-hovers {
            flex-direction: column;
            height: auto;
            overflow: hidden;
          }

          .col-static {
            width: 100%;
            height: 120px;
            padding: 20px;
            box-sizing: border-box;
            z-index: 50;
          }

          .col-static .titulo-img {
            display: none;
          }
          
          .titulo-img-horizon {
            display: block;
            width: 100%;
            max-width: 100%;
            z-index:5;
          }

          .col-hover {
            width: 100%;
            height: 100px;
            flex: none;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 0;
            overflow: hidden;
            position: relative;
            transition: height 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          }

          .col-hover.active-mobile {
            height: 200px;
          }

          .titulo-hover {
            display: none;
          }

          .titulo-hover-mobile {
            display: block;
            height: 30px;
            width: auto;
            position: absolute;
            bottom: 25px;
            left: 20px;
            z-index: 20;
            pointer-events: none;
            transition: all 0.5s ease;
            transform-origin: left bottom;
            transform: translate(0px, 0px) !important;
          }
        }
          .bg-carousel {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        /* Esta clase es clave para que cuando el carrusel esté activo, se vea sobre el fondo estático */
        .bg-carousel.active {
          opacity: 1;
        }
      `}</style>

      <div className="contenedor-imagenes-hovers">
        <div className="col col-static">
          <img src="/images/tituloCarru/serviciosbg.webp" className="fondopro" alt="Background" />
          <img src="/images/tituloCarru/Servicios.svg" className="titulo-img" alt="Our Projects" />
          <img src="/images/tituloCarru/serviciosHorizontal.svg" className="titulo-img-horizon" alt="Our Projects" />
        </div>

        {projects.map((project) => {
          const isCarouselActive = carouselStates[project.id] !== undefined;
          const currentSlideIndex = carouselStates[project.id] || 0;

          return (
            <div
              key={project.id}
              className={`col col-hover ${isMobile && activeColumn === project.id ? 'active-mobile' : ''}`}
              style={{ backgroundImage: `url('${project.bg}')` }}
              onClick={isMobile ? () => handleMobileClick(project.id, project.slides) : undefined}
              onMouseEnter={!isMobile ? () => handleDesktopHover(project.id, project.slides, true) : undefined}
              onMouseLeave={!isMobile ? () => handleDesktopHover(project.id, project.slides, false) : undefined}
              >
              <div className={`bg-carousel ${isCarouselActive ? 'active' : ''}`}>
                {project.slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt=""
                    className={currentSlideIndex === index ? 'show' : ''}
                  />
                ))}
              </div>
              <img src={project.title} className="titulo-hover" alt={project.id} />
              <img src={project.titleMobile} className="titulo-hover-mobile" alt={project.id} />
              </div>
          );
        })}
      </div>
    </>
  );
}