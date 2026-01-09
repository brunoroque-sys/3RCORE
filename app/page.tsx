import ServicesSlider from '@/components/layout/home/ServicesWheel'
import TeamSection from '@/components/layout/home/TeamSection'
import StatsAndCTA from '@/components/layout/home/CTASection'
import Hero from '@/components/layout/home/Hero'
import ClientSection from '@/components/layout/home/ClientSection';
import NewsSection from '@/components/layout/home/NewsSection';
export default function Home() {
  return (
    <main >
      <Hero></Hero>
      <TeamSection></TeamSection>
      <ServicesSlider ></ServicesSlider>
      <StatsAndCTA></StatsAndCTA>
      <ClientSection />
      <NewsSection />
    </main>
  );
}