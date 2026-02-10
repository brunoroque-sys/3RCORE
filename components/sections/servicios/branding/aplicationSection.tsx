import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

interface ColorPalette {
  id: string;
  colors: string[];
  image: string;
  name: string;
}

export default function BrandApplications() {
  const t = useTranslations('BrandingHero');
  
  const palettes: ColorPalette[] = [
    {
      id: "celeste",
      colors: ["#FBECD7"],
      image: "/images/branding/Apli/beige.webp",
      name: "Celeste"
    },
    {
      id: "purple",
      colors: ["#405BB2"],
      image: "/images/branding/Apli/celeste.webp",
      name: "Purple"
    },
    {
      id: "green",
      colors: ["#101B3B"],
      image: "/images/branding/Apli/azul.webp",
      name: "Green"
    }
  ];

  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>(palettes[0]);

  useEffect(() => {
    palettes.forEach((palette) => {
      const img = new Image();
      img.src = palette.image;
    });
  }, []);
  return (
    <section className="w-full flex items-center px-10 lg:px-6 md:px-15 py-12 md:py-18 bg-gradient-to-r from-[#4c0046] to-[#130218]"> 
    
      <div className="max-w-6xl lg:max-w-4xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        
        <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-serif italic tracking-wide">
            {t('apMarca')}
          </h2>
          
          <p className="text-white/90 text-base lg:text-base xl:text-lg 2xl:text-2xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
            {t('apParraf')}
          </p>
        </div>

        <div className="relative w-full h-auto mt-12 md:mt-0 flex flex-row items-center gap-4">
  
          <div className="relative flex-1 mr-0 md:mr-[-50px]">
            <img 
              src={selectedPalette.image}
              alt={`Brand Applications Mockup - ${selectedPalette.name}`}
              className="w-full h-auto object-contain max-h-[300px] md:max-h-none transition-all duration-300 rounded-[20px]"
              loading="eager" 
            />

            <div className="absolute -bottom-20 -left-8 lg:-bottom-10 lg:-left-20 w-24 h-24 lg:w-50 lg:h-30 2xl:h-50 z-10">
              <img 
                src="/images/branding/Apli/stickerAI.png" 
                alt="Alucon Sticker"
                className="w-full h-full object-contain drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            {palettes.map((palette) => (
              <button
                key={palette.id}
                onClick={() => setSelectedPalette(palette)}
                className={`
                  relative group transition-all duration-200 cursor-pointer
                  ${selectedPalette.id === palette.id 
                    ? 'scale-110 z-20' 
                    : 'hover:scale-105'
                  }
                `}
                aria-label={`Select ${palette.name} palette`}
              >
                <div className="relative w-10 h-14 md:w-15 md:h-20">
                  
                  <div 
                    className="absolute top-2 left-0 w-full h-[75%] md:h-16"
                    style={{ 
                      backgroundColor: palette.colors[0],
                      transformOrigin: 'top left'
                    }}
                  />
                  
                  <div 
                    className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-white rounded-b-[5px] md:rounded-b-[15px]"
                    style={{ transformOrigin: 'top left' }}
                  />
                  
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
      
      
    </section>
    
  );
}