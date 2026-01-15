
import { DraggableCardDemo } from "@/components/layout/Nosotros/Activities";
import Founders from "@/components/layout/Nosotros/Founders";
import HeroNosotros from "@/components/layout/Nosotros/HeroNosotros";
import NosotrosSection from "@/components/layout/Nosotros/NosotrosSection";
import Team from "@/components/layout/Nosotros/Team";
export default function Nosotros() {
  return (
    <main>
      <HeroNosotros />
      <NosotrosSection />
      <Founders />
      <Team />
      <DraggableCardDemo/>
    </main>
  );
}