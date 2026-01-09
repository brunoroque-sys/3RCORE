import ServicesSlider from '@/components/layout/home/ServicesWheel'
import TeamSection from '@/components/layout/home/TeamSection'
import StatsAndCTA from '@/components/layout/home/CTASection'
import Hero from '@/components/layout/home/Hero'
export default function Home() {
  return (
    <main >
      <Hero></Hero>
      <TeamSection></TeamSection>
      <ServicesSlider ></ServicesSlider>
      <StatsAndCTA></StatsAndCTA>
    </main>
  );
}