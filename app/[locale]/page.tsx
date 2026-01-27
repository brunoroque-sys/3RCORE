
import TeamSection from '@/components/sections/home/TeamSection'
import StatsAndCTA from '@/components/sections/home/CTASection'
import Hero from '@/components/sections/home/Hero'
import ClientSection from '@/components/layout/ClientSection';
import NewsSection from '@/components/sections/home/NewsSection';
import MosaicoParallax from '@/components/sections/home/imagesParallaxSection';
import ContactForm from '@/components/layout/ContactForm';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import {useTranslations} from 'next-intl';

export default function Home() {

  return (
    <main >
      <div id="hero">
      <Hero></Hero>
      </div>
      <TeamSection></TeamSection>
      <ProjectsSection/>
      <StatsAndCTA></StatsAndCTA>
      <MosaicoParallax />
      <ClientSection />
      <NewsSection/>

      <div  id="contacto">
        <ContactForm/>
      </div>

    </main>
  );
}