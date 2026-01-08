import ServicesSlider from '@/components/layout/ServicesWheel'
import TeamSection from '@/components/layout/TeamSection'
import StatsAndCTA from '@/components/layout/CTASection'
export default function Home() {
  return (
    <main>
      <TeamSection></TeamSection>
      <ServicesSlider></ServicesSlider>
      <StatsAndCTA></StatsAndCTA>
    </main>
  );
}