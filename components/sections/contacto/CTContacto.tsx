"use client";

import { useRef } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ["latin"], style: ['normal', 'italic'], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });


const CTAContacto = () => {

  const t = useTranslations('ScheduleSection');
  
  const containerRef = useRef(null);


  return (
    <section ref={containerRef} className="w-full py-32 px-4 flex flex-col items-center gap-40  overflow-hidden">
      
      <div className="cta-card-container w-full max-w-7xl relative h-[400px] md:h-[250px] flex items-center">
        
        <div className="cta-bg absolute inset-0 bg-[#4a0d3d] rounded-[3rem] shadow-2xl overflow-hidden pointer-events-none">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D11E68] opacity-20 blur-[100px]"></div>
        </div>

        <div className="cta-content relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
          
          <div className="items-start text-center md:w-2/2 space-y-8">
            <div className="text-white text-2xl md:text-4xl leading-tight">
              <h3 className={`${playfair.className} italic font-normal mb-2`}>
                { t('title')}
              </h3>
              <h3 className={`${poppins.className} font-normal`}>
                { t('hours')}
              </h3>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTAContacto;