import PizzaCard from "@/components/ui/pizzaCard";

export default function SocialPortfolio() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-lg tracking-[0.3em] uppercase mb-12 opacity-80">
          Algunos de nuestros proyectos
          <div className="w-[60%] h-[1px] bg-white/80 mx-auto mt-4"></div>
        </h2>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Columna 1 */}
          <div className="grid gap-6">
            <PizzaCard 
              images={["/images/branding/Proyectos/Cafe.webp", "/images/branding/Proyectos/Cafe1.webp","/images/branding/Proyectos/Cafe2.webp"]} 
              showDots={true} 
              autoOnHover={false}
              className="aspect-[4/5]  grayscale-900 hover:grayscale-0" 
            />
            <PizzaCard 
              images={["/images/branding/Proyectos/dls.webp", "/images/branding/Proyectos/dls.webp"]} 
              autoOnHover={true}
              className="aspect-[3/4]  grayscale-900 hover:grayscale-0" 
            />
          </div>

          {/* Columna 2 */}
          <div className="grid gap-14">
            <PizzaCard 
              images={["/images/branding/Proyectos/dls.webp", "/images/branding/Proyectos/dls.webp"]} 
              autoOnHover={true}
              className="aspect-[2/3]  grayscale-900 hover:grayscale-0" 
            />
            <PizzaCard 
              images={["/images/branding/Proyectos/dls.webp", "/images/branding/Proyectos/dls.webp"]} 
              autoOnHover={true}
              className="aspect-square  grayscale-900 hover:grayscale-0" 
            />
          </div>

          {/* Columna 3 */}
          <div className="grid gap-6">
            <PizzaCard 
              images={["/images/branding/Proyectos/dls.webp", "/images/branding/Proyectos/dls.webp"]}  
              autoOnHover={true}
              className="aspect-[3/4]  grayscale-900 hover:grayscale-0" 
            />
            <PizzaCard 
              images={["/images/branding/Proyectos/dls.webp", "/images/branding/Proyectos/dls.webp"]} 
              autoOnHover={true}
              className="aspect-[4/5] grayscale-900 hover:grayscale-0" 
            />
          </div>

        </div>
      </div>
    </main>
  );
}