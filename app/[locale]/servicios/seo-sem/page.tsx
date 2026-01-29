'use client';
import ContactForm from "@/components/layout/ContactForm";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import HeroSeo from "@/components/sections/servicios/seo-sem/heroSeo";
import SeoSemSection from "@/components/sections/servicios/seo-sem/seoSemSection";
import SeoSemCall from "@/components/sections/servicios/seo-sem/seoSemCall";
import { SeoClients } from "@/components/sections/servicios/seo-sem/seoClients";
import WorkMethodology from "@/components/sections/servicios/seo-sem/workMetodology";
import ToolsCarousel from "@/components/sections/servicios/seo-sem/toolsCarru";

export default function Seosem(){

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const minLoadTime = setTimeout(() => {
      }, 500);
      
      return () => clearTimeout(minLoadTime);
    }, []);
  
    const handleImageLoaded = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    
  return(
    <>
      <AnimatePresence mode="wait">
              {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <div id="hero">
          <HeroSeo onImageLoad={handleImageLoaded} />
        </div>
        <SeoSemCall/>
        <SeoSemSection/>
        <SeoClients />
        <WorkMethodology/>
        <ToolsCarousel/>
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>
 
    </>
  );
}