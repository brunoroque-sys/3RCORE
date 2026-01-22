
import TeamSection from '@/components/layout/home/TeamSection'
import StatsAndCTA from '@/components/layout/home/CTASection'
import Hero from '@/components/layout/home/Hero'
import ClientSection from '@/components/layout/home/ClientSection';
import NewsSection from '@/components/layout/home/NewsSection';
import MosaicoParallax from '@/components/layout/home/imagesParallaxSection';
import ContactForm from '@/components/layout/ContactForm';
import ProjectsSection from '@/components/layout/home/ProjectsSection';
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
      <NewsSection />

      <div  id="contacto">
        <ContactForm/>
      </div>

    </main>
  );
}