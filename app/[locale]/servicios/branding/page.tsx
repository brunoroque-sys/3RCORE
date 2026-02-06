'use client';

import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/ClientSection";
import ProcessSection from "@/components/sections/servicios/branding/processSection";
import BrandManualSection from "@/components/sections/servicios/branding/brandManualSection";
import { BrandShowSection } from "@/components/sections/servicios/branding/brandShowSection";
import Portfolio from "@/components/sections/servicios/branding/Portfolio";
import BrandApplications from "@/components/sections/servicios/branding/aplicationSection";
import HeroBranding from "@/components/sections/servicios/branding/heroBranding";
import { useScrollToSection } from '@/components/ui/useScrollToSection';

import {useIndividualPageLoader} from '@/components/layout/useIndividualPageLoader'
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function Branding() {

  useScrollToSection(); 
  const isLoading = useIndividualPageLoader({ 
    timeout: 4000, 
    minLoadingTime: 1200,
    checkVideos: true 
  });

  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="home-loader" />}
      </AnimatePresence>
      <div id="hero">
        <HeroBranding />
      </div>
      <ProcessSection />
      <BrandManualSection />
      <BrandShowSection />
      <BrandApplications />
      <Portfolio />
      <ClientSection />
      <div id="contacto">
        <ContactForm />
      </div>
      <ScrollContactBtn />
      <WhatsAppBtn />
    </>
  );
}