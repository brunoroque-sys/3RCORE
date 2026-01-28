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

export default function WebDeveploment(){
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    }, []);
  
    const handleImageLoaded = () => {
      setIsLoading(false);
    };

  return(
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <main>
        <div id="hero">
          <HeroWeb onImageLoad={handleImageLoaded} />
        </div>
        <ProcessWebSection/>
        <WebInfoSection/>
        <ImgWebSection/>
        <WebTypesSection/>
        <WebApplications/>
        <WebFaq/>
        <ImgWebSection/>

        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>

    </>
  );
}