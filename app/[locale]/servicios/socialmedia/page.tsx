'use client';
import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/ClientSection";
import MediaApplications from "@/components/sections/servicios/socialmedia/aplicationMediaSection";
import HeroSocialMedia from "@/components/sections/servicios/socialmedia/heroSocialMedia";
import ProcessSMSection from "@/components/sections/servicios/socialmedia/processSMSection";
import SocialPortfolio from "@/components/sections/servicios/socialmedia/socialPortfolio";
import SocialPost from "@/components/sections/servicios/socialmedia/socialPost";
import { useScrollToSection } from '@/components/ui/useScrollToSection';

import {useIndividualPageLoader} from '@/components/layout/useIndividualPageLoader'
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'
export default function socialmedia(){
  
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
          <HeroSocialMedia/>
        </div>
        <ProcessSMSection/>
        <SocialPost/>
        <SocialPortfolio/>
        <MediaApplications/>
        
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