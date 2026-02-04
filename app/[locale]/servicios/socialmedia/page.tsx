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

export default function socialmedia(){

  return(
    <>
      
      <main >
        <div id="hero">
          <HeroSocialMedia/>
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