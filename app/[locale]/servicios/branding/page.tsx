import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroBranding from "@/components/sections/servicios/branding/heroBranding";
import ClientSection from "@/components/sections/home/ClientSection";
import ProcessSection from "@/components/sections/servicios/branding/processSection";
import BrandManualSection from "@/components/sections/servicios/branding/brandManualSection";
import { BrandShowSection } from "@/components/sections/servicios/branding/brandShowSection";
import Portfolio from "@/components/sections/servicios/branding/Portfolio";
import BrandApplications from "@/components/sections/servicios/branding/aplicationSection";
import { SocialShowSection } from "@/components/sections/servicios/socialmedia/socialShowSection";

export default function branding(){
  return(
      <main>
        <div id="hero">
          <HeroBranding />
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
  );
}