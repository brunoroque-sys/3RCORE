'use client';

import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroBranding from "@/components/sections/servicios/branding/heroBranding";
import ClientSection from "@/components/layout/ClientSection";
import ProcessSection from "@/components/sections/servicios/branding/processSection";
import BrandManualSection from "@/components/sections/servicios/branding/brandManualSection";
import { BrandShowSection } from "@/components/sections/servicios/branding/brandShowSection";
import Portfolio from "@/components/sections/servicios/branding/Portfolio";
import BrandApplications from "@/components/sections/servicios/branding/aplicationSection";
import { SocialShowSection } from "@/components/sections/servicios/socialmedia/socialShowSection";
import { useEffect, useState } from "react";


import LoadingScreen from "@/components/layout/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export default function branding(){

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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

      <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <div id="hero">
          <HeroBranding onImageLoad={handleImageLoaded} />
        </div>
        <ProcessSection/>
        <BrandManualSection/>
        <BrandShowSection/>
        <BrandApplications/>
        <Portfolio/>
        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>
    </>
  );
}