
import { DraggableCardDemo } from "@/components/layout/Nosotros/Activities";
import Founders from "@/components/layout/Nosotros/Founders";
import NosotrosSection from "@/components/layout/Nosotros/NosotrosSection";
import Team from "@/components/layout/Nosotros/Team";
export default function Nosotros() {
  return (
    <main>
      <NosotrosSection />
      <Founders/>
      <Team/>
      <DraggableCardDemo/>
    </main>
  );
}