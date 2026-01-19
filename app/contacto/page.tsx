import ContactForm from "@/components/layout/ContactForm";
import CTAContacto from "@/components/layout/contacto/CTContacto";
import Contacto from "@/components/layout/contacto/heroContacto";

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