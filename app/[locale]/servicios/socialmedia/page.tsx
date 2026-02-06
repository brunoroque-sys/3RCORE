'use client';
import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/ClientSection";
import MediaApplications from "@/components/sections/servicios/socialmedia/aplicationMediaSection";
import HeroSocialMedia from "@/components/sections/servicios/socialmedia/heroSocialMedia";
import ProcessSMSection from "@/components/sections/servicios/socialmedia/processSMSection";
import SocialPortfolio from "@/components/sections/servicios/socialmedia/socialPortfolio";
import SocialPost from "@/components/sections/servicios/socialmedia/socialPost";
import { useScrollToSection } from '@/components/ui/useScrollToSection';
import {usePageLoader} from '@/components/layout/usePageLoader'

export default function socialmedia(){
  
  useScrollToSection(); 
  usePageLoader({ timeout: 3000, minLoadingTime: 800 });

  return(
    <>
      
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
      </main>

    </>
  );
}