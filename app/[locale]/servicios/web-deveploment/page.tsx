'use client';
import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/ClientSection";
import HeroWeb from "@/components/sections/servicios/web-deveploment/heroWeb";
import ProcessWebSection from "@/components/sections/servicios/web-deveploment/processWebSection";
import WebInfoSection from "@/components/sections/servicios/web-deveploment/webInfoSection";
import ImgWebSection from "@/components/sections/servicios/web-deveploment/imgWebSection";
import WebTypesSection from "@/components/sections/servicios/web-deveploment/webTypesSection";
import WebApplications from "@/components/sections/servicios/web-deveploment/aplicationWebSection";
import WebFaq from "@/components/sections/servicios/web-deveploment/webFaq";
import WebImgSection from "@/components/sections/servicios/web-deveploment/webimgSection";
import { useScrollToSection } from '@/components/ui/useScrollToSection';

import {useIndividualPageLoader} from '@/components/layout/useIndividualPageLoader'
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'
export default function WebDeveploment(){
  
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
          <HeroWeb />
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
        <ScrollContactBtn />
        <WhatsAppBtn />
      </main>
    </>
  );
}