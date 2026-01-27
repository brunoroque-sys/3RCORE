import PizzaCard from "@/components/ui/pizzaCard";
import { useTranslations } from "next-intl";

export default function SocialPortfolio() {

  const t = useTranslations('SocialMediaHero');
  
  return (
    <main className="min-h-screen py-20 px-10 lg:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-lg tracking-[0.3em] uppercase mb-12 opacity-80">
          { t('titPost')}
          <div className="w-[60%] h-[1px] bg-white/80 mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Columna izquierda - Con videos tipo Stories */}
          <div className="grid gap-6">
            {/* Primera tarjeta - Video tipo Instagram Story */}
            <PizzaCard 
              media={[
                { type: "video", src: "/videos/PruebaIG.mp4" },
                { type: "video", src: "/videos/PruebaIG.mp4" }
              ]} 
              showDots={true} 
              autoOnHover={false}
              className="aspect-[4/5] grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
            
            {/* Segunda tarjeta - Otro video tipo Story */}
            <PizzaCard 
              media={[
                { type: "video", src: "/videos/PruebaIG.mp4" }
              ]} 
              autoOnHover={false}
              className="aspect-[3/4] grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out" 
            />
          </div>

          {/* Columna centro - Imágenes con auto-hover */}
          <div className="grid gap-14">
            <PizzaCard 
              media={[
                { type: "video", src: "/videos/PruebaIG.mp4" },
                { type: "video", src: "/videos/PruebaIG.mp4" }
              ]} 
              autoOnHover={true}
              className="aspect-[2/3] grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out" 
            />
            <PizzaCard 
              media={[
                { type: "image", src: "/images/branding/Proyectos/dls.webp" },
                { type: "image", src: "/images/branding/Proyectos/dls.webp" }
              ]} 
              autoOnHover={true}
              className="aspect-square grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out" 
            />
          </div>

          {/* Columna derecha - Imágenes con auto-hover */}
          <div className="grid gap-6">
            <PizzaCard 
              media={[
                { type: "image", src: "/images/branding/Proyectos/dls.webp" },
                { type: "image", src: "/images/branding/Proyectos/dls.webp" }
              ]}  
              autoOnHover={true}
              className="aspect-[3/4] grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out" 
            />
            <PizzaCard 
              media={[
                { type: "image", src: "/images/branding/Proyectos/dls.webp" },
                { type: "image", src: "/images/branding/Proyectos/dls.webp" }
              ]} 
              autoOnHover={true}
              className="aspect-[4/5] grayscale-900 hover:grayscale-0 transition-all duration-500 ease-in-out" 
            />
          </div>

        </div>
      </div>
    </main>
  );
}