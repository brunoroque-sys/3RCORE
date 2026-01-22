import ContactForm from "@/components/layout/ContactForm";
import FeaturesSection from "@/components/layout/servicios/featuresSection";
import HeroServicios from "@/components/layout/servicios/heroServicios";
import ServiceAbout from "@/components/layout/servicios/serviciesAbout";

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