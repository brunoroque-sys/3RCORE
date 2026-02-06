'use client';
import ContactForm from "@/components/layout/ContactForm";
import HeroSeo from "@/components/sections/servicios/seo-sem/heroSeo";
import SeoSemSection from "@/components/sections/servicios/seo-sem/seoSemSection";
import SeoSemCall from "@/components/sections/servicios/seo-sem/seoSemCall";
import { SeoClients } from "@/components/sections/servicios/seo-sem/seoClients";
import WorkMethodology from "@/components/sections/servicios/seo-sem/workMetodology";
import ToolsCarousel from "@/components/sections/servicios/seo-sem/toolsCarru";
import { useScrollToSection } from '@/components/ui/useScrollToSection';

import {useIndividualPageLoader} from '@/components/layout/useIndividualPageLoader'
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'
export default function Seosem(){
  
  useScrollToSection(); 
  const isLoading = useIndividualPageLoader({ 
      timeout: 4000, 
      minLoadingTime: 1200,
      checkVideos: true 
    });
  
    
  return(
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="home-loader" />}
      </AnimatePresence>
      <main >
        <div id="hero">
          <HeroSeo />
        </div>
        <SeoSemCall/>
        <SeoSemSection/>
        <SeoClients />
        <WorkMethodology/>
        <ToolsCarousel/>
        <div id="contacto">
          <ContactForm/>
        </div>
        <ScrollContactBtn />
        <WhatsAppBtn />
      </main>
 
    </>
  );
}