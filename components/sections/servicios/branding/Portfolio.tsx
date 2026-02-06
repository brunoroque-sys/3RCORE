"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { useTranslations } from 'next-intl';

interface SliderProps {
  images: string[];
}

const ProjectSlider: React.FC<SliderProps> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);

return (
    <div 
      className="group relative w-full h-full overflow-hidden cursor-pointer bg-neutral-900"
      onMouseEnter={() => {
        if (window.innerWidth >= 768 && swiperRef.current) swiperRef.current.autoplay.start();
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768 && swiperRef.current) {
          swiperRef.current.autoplay.stop();
          swiperRef.current.slideTo(0);
        }
      }}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (window.innerWidth < 768) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={500} 
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        allowTouchMove={true} 
        className="h-full w-full  transition-all duration-700 md:group-hover:scale-110"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Proyecto ${index}`} 
              className="h-full w-full object-cover" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="hidden md:block absolute inset-0 z-20" />
    </div>
  );
};

const Portfolio: React.FC = () => {

  const t = useTranslations('BrandingHero');
  

  const projectData: Record<string, string[]> = {
    cafe: ["/images/branding/Proyectos/Cafe.webp", "/images/branding/Proyectos/Cafe1.webp","/images/branding/Proyectos/Cafe2.webp","/images/branding/Proyectos/Cafe3.webp"],
    manelu: ["/images/branding/Proyectos/Meno.webp", "/images/branding/Proyectos/Meno1.webp","/images/branding/Proyectos/Meno2.webp","/images/branding/Proyectos/Meno3.webp"],
    branding: ["/images/branding/Proyectos/Papel.webp", "/images/branding/Proyectos/Papel1.webp","/images/branding/Proyectos/Papel2.webp","/images/branding/Proyectos/Papel3.webp"],
    rapijet: ["/images/branding/Proyectos/Rapi.webp","/images/branding/Proyectos/Rapi1.webp","/images/branding/Proyectos/Rapi2.webp","/images/branding/Proyectos/Rapi3.webp"],
    gls: ["/images/branding/Proyectos/dls.webp","/images/branding/Proyectos/dls1.webp","/images/branding/Proyectos/dls2.webp","/images/branding/Proyectos/dls3.webp"],
  };

return (
    <section className=" min-h-screen py-12 px-10 lg:px-6 md:p-12 flex items-center">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full">
        <header className="mb-12">
          <h2 className="text-white text-center text-lg tracking-[0.2em] uppercase font-light">
            <span style={{ 
                  backgroundColor: '#A21F8A', 
                  padding: '2px 10px', 
                  borderRadius: '2px' 
                }}>
              { t('titPro')}
            </span>
          </h2>
          <div className="w-[60%] h-[1px] bg-white/80 mx-auto mt-4"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[650px]">
          
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[250px] md:h-auto overflow-hidden rounded-sm border border-white/5">
              <ProjectSlider images={projectData.cafe} />
            </div>
            <div className="h-[250px] md:h-auto overflow-hidden rounded-sm border border-white/5">
              <ProjectSlider images={projectData.branding} />
            </div>
            <div className="h-[250px] md:h-auto overflow-hidden rounded-sm border border-white/5">
              <ProjectSlider images={projectData.rapijet} />
            </div>
            <div className="h-[250px] md:h-auto overflow-hidden rounded-sm border border-white/5">
              <ProjectSlider images={projectData.manelu} />
            </div>
          </div>

          <div className="md:col-span-4 h-[450px] md:h-full overflow-hidden rounded-sm border border-white/5">
            <ProjectSlider images={projectData.gls} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;