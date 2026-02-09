"use client"
import ContactForm from "@/components/layout/ContactForm";
import { DraggableCardDemo } from "@/components/sections/Nosotros/Activities";
import Founders from "@/components/sections/Nosotros/Founders";
import Gallery from "@/components/sections/Nosotros/Gallery";
import HeroNosotros from "@/components/sections/Nosotros/HeroNosotros";
import NosotrosSection from "@/components/sections/Nosotros/NosotrosSection";
import Team from "@/components/sections/Nosotros/Team";


import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/layout/PageLoader";
import { useIndividualPageLoader } from "@/components/layout/useIndividualPageLoader";

export default function Nosotros() {
  const isLoading = useIndividualPageLoader({ 
      timeout: 4000, 
      minLoadingTime: 1200,
      checkVideos: true 
    });
  return (
    <>
    <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="home-loader" />}
    </AnimatePresence>
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
    </>
  );
}