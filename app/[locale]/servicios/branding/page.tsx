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
import {usePageLoader} from '@/components/layout/usePageLoader'

export default function Branding() {

  useScrollToSection(); 
  usePageLoader({ timeout: 3000, minLoadingTime: 800 });
  
  return (
    <>
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
    </>
  );
}