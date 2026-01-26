import { useTranslations } from "next-intl";

export default function BrandApplications() {
    const t = useTranslations('BrandingHero');
  
  return (
    <section className="w-full flex items-center px-10 lg:px-6 md:px-20 py-12 md:py-24 bg-gradient-to-r from-[#4c0046] to-[#130218]"> 
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center">
        
        <div className="flex flex-col space-y-4 md:space-y-8 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif italic tracking-wide">
            { t('apMarca')}
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
            { t('apParraf')}
          </p>
        </div>

        <div className="relative w-full h-auto mt-4 md:mt-0">
          <img 
            src="/images/branding/ApliMarca.webp" 
            alt="Brand Applications Mockup"
            className="w-full h-auto object-contain max-h-[300px] md:max-h-none"
          />
        </div>

      </div>
    </section>
  );
}