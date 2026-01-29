'use client';
import ContactForm from "@/components/layout/ContactForm";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ClientSection from "@/components/layout/ClientSection";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import HeroWeb from "@/components/sections/servicios/web-deveploment/heroWeb";
import ProcessWebSection from "@/components/sections/servicios/web-deveploment/processWebSection";
import WebInfoSection from "@/components/sections/servicios/web-deveploment/webInfoSection";
import ImgWebSection from "@/components/sections/servicios/web-deveploment/imgWebSection";
import WebTypesSection from "@/components/sections/servicios/web-deveploment/webTypesSection";
import WebApplications from "@/components/sections/servicios/web-deveploment/aplicationWebSection";
import WebFaq from "@/components/sections/servicios/web-deveploment/webFaq";
import WebImgSection from "@/components/sections/servicios/web-deveploment/webimgSection";

export default function WebDeveploment(){
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
      
      {/* Renderiza el Hero incluso cuando está cargando para precargar el video */}
      <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <div id="hero">
          <HeroWeb onImageLoad={handleImageLoaded} />
        </div>
        <ProcessWebSection/>
        <WebInfoSection/>
        <ImgWebSection/>
        <WebTypesSection/>
        <WebApplications/>
        <WebFaq/>
        <WebImgSection/>

        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>
    </>
  );
}