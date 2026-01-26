import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroServicios from "@/components/sections/servicios/heroServicios";
import ServiceAbout from "@/components/sections/servicios/serviciesAbout";

export default function Servicios() {
  return (
    <main>
      <HeroServicios></HeroServicios>
      <ServiceAbout></ServiceAbout>
      <FeaturesSection></FeaturesSection>
      <ContactForm></ContactForm>
    </main>
  );
}