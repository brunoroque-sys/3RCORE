import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/layout/servicios/featuresSection";
import HeroBranding from "@/components/layout/servicios/branding/heroBranding";
import ClientSection from "@/components/layout/home/ClientSection";
import ProcessSection from "@/components/layout/servicios/branding/processSection";
import BrandManualSection from "@/components/layout/servicios/branding/brandManualSection";
import { BrandShowSection } from "@/components/layout/servicios/branding/brandShowSection";
import Portfolio from "@/components/layout/servicios/branding/Portfolio";
import BrandApplications from "@/components/layout/servicios/branding/aplicationSection";
import { SocialShowSection } from "@/components/layout/servicios/socialmedia/socialShowSection";

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