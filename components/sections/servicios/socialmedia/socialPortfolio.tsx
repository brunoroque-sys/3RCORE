import PizzaCard from "@/components/ui/pizzaCard";
import { useTranslations } from "next-intl";

export default function SocialPortfolio() {

  const t = useTranslations('SocialMediaHero');
  
  return (
    <main className=" py-20 px-10 lg:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-lg tracking-[0.3em] uppercase mb-12 opacity-80">
          { t('titPost')}
          <div className="w-[60%] h-[1px] bg-white/80 mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          <div className="grid gap-6">
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img1.png" }
              ]} 
              showDots={true} 
              autoOnHover={false}
              className="aspect-[3/4] transition-all duration-500 ease-in-out"
            />
            
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img4.png" }
              ]} 
              autoOnHover={false}
              className="aspect-[3/5]  transition-all duration-500 ease-in-out" 
            />
          </div>

          <div className="grid gap-6">
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img2.png" }
              ]} 
              autoOnHover={true}
              className="aspect-[3/5]  transition-all duration-500 ease-in-out" 
            />
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img5.png" }
              ]} 
              autoOnHover={true}
              className="aspect-[3/4] transition-all duration-500 ease-in-out" 
            />
          </div>

          <div className="grid gap-6">
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img3.png" }
              ]}  
              autoOnHover={true}
              className="aspect-[3/4] transition-all duration-500 ease-in-out" 
            />
            <PizzaCard 
              media={[
                { type: "image", src: "/images/social/portafolioProye/img6.png" }
              ]} 
              autoOnHover={true}
              className="aspect-[3/5]  transition-all duration-500 ease-in-out" 
            />
          </div>

        </div>
      </div>
    </main>
  );
}