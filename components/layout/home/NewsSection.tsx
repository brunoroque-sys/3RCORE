"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

const news = [
  { id: 1, date: "JUL 26, 2023", title: "Marketing Internacional: ¿Qué es y las Mejores Estrategias?", image: "/images/mundo.png" },
  { id: 2, date: "JUL 27, 2023", title: "Barbie Arrasa en la Conversación Social frente a Oppenheimer", image: "/images/barbie.png" },
  { id: 3, date: "JUL 27, 2023", title: "Agencias de Marketing de Contenidos: Estrategia de éxito", image: "/images/moni.png" },
  { id: 4, date: "AGO 05, 2023", title: "Tendencias de Diseño Web para el 2026", image: "/images/mundo.png" },
  { id: 5, date: "AGO 12, 2023", title: "Cómo optimizar tu SEO con Inteligencia Artificial", image: "/images/barbie.png" },
  { id: 6, date: "SEP 01, 2023", title: "El impacto del Video Marketing en Redes Sociales", image: "/images/moni.png" },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < news.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(news.length - 3); 
    }
  };

  return (
    <section className={`${montserrat.className} py-24 bg-transparent text-white px-6 overflow-hidden`}>
        <div className="flex flex-col items-center justify-center mb-20 w-full group">
        <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
            
            <h2 className="text-white text-s md:text-m tracking-[0.1em] uppercase font-medium whitespace-nowrap">
            Entérate de nuestras noticias
            </h2>
            
            <div className="h-[1px] bg-white/90 w-full md:w-[70%] lg:w-[100%] mx-auto"></div>
            
        </div>
        </div>

      <div className="max-w-7xl mx-auto relative flex items-center">
        <button 
          onClick={prevSlide}
          className="absolute -left-20 z-20 hidden xl:block text-white/20 hover:text-white transition-all hover:scale-110 active:scale-90 cursor-pointer"
        >
          <ChevronLeft size={60} strokeWidth={1} />
        </button>

        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3 + 0.8)}%)` }} 
          >
            {news.map((item) => (
              <div 
                key={item.id} 
                className="group min-w-full md:min-w-[calc(33.333%-22px)] bg-[#2F0729]/40 backdrop-blur-xl rounded-[40px] overflow-hidden flex flex-col min-h-[620px] border border-white/5 transition-all duration-500"
              >
                <div className="relative h-80 w-full p-5">
                  <div className="relative w-full h-full overflow-hidden rounded-[30px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="p-10 pt-4 flex flex-col flex-grow">
                  <span className="text-[11px] text-white font-medium tracking-widest mb-6">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-semibold leading-[1.4] mb-8 text-white/90 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-auto">
                    <button className="relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] cursor-pointer text-white">

                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10 transition-colors duration-300">
                      Leer más
                    </span>
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-20 z-20 hidden xl:block text-white/20 hover:text-white transition-all hover:scale-110 active:scale-90 cursor-pointer"
        >
          <ChevronRight size={60} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
};

export default NewsSection;