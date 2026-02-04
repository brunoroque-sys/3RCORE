'use client';
import ContactForm from "@/components/layout/ContactForm";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import HeroSeo from "@/components/sections/servicios/seo-sem/heroSeo";
import SeoSemSection from "@/components/sections/servicios/seo-sem/seoSemSection";
import SeoSemCall from "@/components/sections/servicios/seo-sem/seoSemCall";
import { SeoClients } from "@/components/sections/servicios/seo-sem/seoClients";
import WorkMethodology from "@/components/sections/servicios/seo-sem/workMetodology";
import ToolsCarousel from "@/components/sections/servicios/seo-sem/toolsCarru";

export default function Seosem(){

    
  return(
    <>
      <main >
        <div id="hero">
          <HeroSeo />
        </div>
        <SeoSemCall/>
        <SeoSemSection/>
        <SeoClients />
        <WorkMethodology/>
        <ToolsCarousel/>
        <div id="contacto">
          <ContactForm/>
        </div>
      </main>
 
    </>
  );
}