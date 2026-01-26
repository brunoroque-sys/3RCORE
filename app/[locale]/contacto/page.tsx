import ContactForm from "@/components/layout/ContactForm";
import CTAContacto from "@/components/sections/contacto/CTContacto";
import Contacto from "@/components/sections/contacto/heroContacto";

export default function Nosotros() {
  return (
    <main>
      <div id="hero">
        <Contacto/>
      </div>
      <CTAContacto />
      <div  id="contacto">
        <ContactForm/>
      </div>

    </main>
  );
}