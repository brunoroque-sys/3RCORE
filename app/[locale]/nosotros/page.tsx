
import ContactForm from "@/components/layout/ContactForm";
import { DraggableCardDemo } from "@/components/sections/Nosotros/Activities";
import Founders from "@/components/sections/Nosotros/Founders";
import Gallery from "@/components/sections/Nosotros/Gallery";
import HeroNosotros from "@/components/sections/Nosotros/HeroNosotros";
import NosotrosSection from "@/components/sections/Nosotros/NosotrosSection";
import Team from "@/components/sections/Nosotros/Team";


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'
export default function Nosotros() {
  return (
    <main>
      <div id="hero">
        <HeroNosotros />
      </div>
      <NosotrosSection />
      <Founders />
      <Team />
      <DraggableCardDemo/>
      <Gallery/>
      <div  id="contacto">
        <ContactForm/>
      </div>
      <ScrollContactBtn />
      <WhatsAppBtn />
    </main>
  );
}