import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/layout/servicios/featuresSection";
import HeroBranding from "@/components/layout/servicios/branding/heroBranding";

export default function branding(){
  return(
      <main>
        <div id="hero">
          <HeroBranding />
        </div>
        
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>
  );
}