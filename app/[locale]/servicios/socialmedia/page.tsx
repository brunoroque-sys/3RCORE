import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/home/ClientSection";
import MediaApplications from "@/components/layout/servicios/socialmedia/aplicationMediaSection";
import HeroSocialMedia from "@/components/layout/servicios/socialmedia/heroSocialMedia";
import PostMedia from "@/components/layout/servicios/socialmedia/postMedia";
import ProcessSMSection from "@/components/layout/servicios/socialmedia/processSMSection";
import SocialPortfolio from "@/components/layout/servicios/socialmedia/socialPortfolio";
import SocialPost from "@/components/layout/servicios/socialmedia/socialPost";
import { SocialShowSection } from "@/components/layout/servicios/socialmedia/socialShowSection";


export default function socialmedia(){
  return(
      <main>
        <div id="hero">
          <HeroSocialMedia />
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
  );
}