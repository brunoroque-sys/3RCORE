'use client';

import TeamSection from '@/components/sections/home/TeamSection'
import StatsAndCTA from '@/components/sections/home/CTASection'
import Hero from '@/components/sections/home/Hero'
import ClientSection from '@/components/layout/ClientSection';
import NewsSection from '@/components/sections/home/NewsSection';
import MosaicoParallax from '@/components/sections/home/imagesParallaxSection';
import ContactForm from '@/components/layout/ContactForm';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import { useScrollToSection } from '@/components/ui/useScrollToSection';

export default function Home() {
  useScrollToSection(); 
  
  return (
    <main>
      <div id="hero">
        <Hero />
      </div>
      <TeamSection />
      <div id="servicios">
        <ProjectsSection />
      </div>
      <StatsAndCTA />
      <MosaicoParallax />
      <ClientSection />
      <NewsSection />
      <div id="contacto">
        <ContactForm />
      </div>
    </main>
  );
}