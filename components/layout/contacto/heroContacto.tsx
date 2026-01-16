
const Contacto = () => {
  return (
    <section className="relative h-screen text-white px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      
      <div className="hidden lg:block absolute top-[20%] left-[5%] md:left-[0%] w-32 md:w-100 h-auto ">
        <img src="/images/brand.webp" alt="Decoración 1" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="hidden lg:block absolute bottom-[1%] left-[20%] md:left-[20%] w-28 md:w-120 h-auto z-10">
        <img src="/images/REDES-NEW.gif" alt="Decoración 2" className="w-full h-auto" />
      </div>

      <div className="hidden lg:block absolute bottom-[5%] right-[15%] md:right-[30%] w-100 md:w-70 h-auto shadow-xl">
        <img src="/images/monitor.webp" alt="Decoración 3" className="w-full h-auto rounded-md" />
      </div>

      <div className="hidden lg:block absolute bottom-[20%] right-[10%] md:right-[0%] w-100 md:w-80 h-auto ">
        <img src="/images/oficina.webp " alt="Decoración 4" className="w-full h-auto" />
      </div>
 
      
      <div className="relative z-20"> 
        <h2 className="text-4xl md:text-6xl font-serif italic mb-2">
          Expandimos
        </h2>
        
        <h3 className="text-3xl md:text-5xl font-sans font-bold text-[#d81b60] mb-10">
          tu alcance al mundo
        </h3>

        <div className="w-full max-w-xl h-[0.5px] bg-gray-400 mb-10 opacity-30 mx-auto"></div>

        <div className="text-lg md:text-xl font-light tracking-wide leading-relaxed max-w-md mx-auto">
          <p>Calle Las Caobas 170, Ofic. 400 - 404</p>
          <p>Urb. El Remanso, La Molina, Lima - Perú</p>
        </div>

        <a 
          href="https://maps.app.goo.gl/pGRk9DbiPEhJxaxo8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="mt-12 px-8 py-2 border border-white rounded-[15px] text-[16px] tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all duration-300">
            Google Maps
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contacto;