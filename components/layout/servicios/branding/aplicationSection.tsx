export default function BrandApplications() {
  return (
    <section className="w-full flex items-center px-6 md:px-20 py-12 md:py-24"> 
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center">
        
        {/* LADO IZQUIERDO: Texto */}
        <div className="flex flex-col space-y-4 md:space-y-8 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-5xl font-serif italic tracking-wide">
            Aplicaciones de marca
          </h2>
          
          <p className="text-white/90 text-lg md:text-1xl font-light leading-relaxed max-w-md mx-auto md:mx-0">
            Una vez concebida la marca, se genera el branding para productos y merch, 
            obteniendo una imagen más profesional.
          </p>
        </div>

        {/* LADO DERECHO: Imagen responsiva */}
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