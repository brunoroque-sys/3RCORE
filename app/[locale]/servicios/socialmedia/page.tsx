'use client';
import ContactForm from "@/components/layout/ContactForm";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ClientSection from "@/components/layout/ClientSection";
import MediaApplications from "@/components/sections/servicios/socialmedia/aplicationMediaSection";
import HeroSocialMedia from "@/components/sections/servicios/socialmedia/heroSocialMedia";
import PostMedia from "@/components/sections/servicios/socialmedia/postMedia";
import ProcessSMSection from "@/components/sections/servicios/socialmedia/processSMSection";
import SocialPortfolio from "@/components/sections/servicios/socialmedia/socialPortfolio";
import SocialPost from "@/components/sections/servicios/socialmedia/socialPost";
import { SocialShowSection } from "@/components/sections/servicios/socialmedia/socialShowSection";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function socialmedia(){
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
          <HeroSocialMedia onImageLoad={handleImageLoaded} />
        </div>
        <ProcessSMSection/>
        <SocialPost/>
        <PostMedia/>
        <MediaApplications/>
        <SocialShowSection/>
        <SocialPortfolio/>
        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>

    </>
  );
}