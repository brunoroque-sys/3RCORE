import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* 1. VIDEO DE FONDO */}
      {/* 'object-cover' asegura que el video cubra todo sin deformarse */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline // Importante para que funcione en móviles (iOS)
        poster="/images/hero-fallback.jpg" // Imagen que carga mientras baja el video
      >
        <source src="/videos/heroFoco.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* 2. OVERLAY (Opcional) */}
      {/* Una capa negra semitransparente para que el texto blanco se lea bien */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* 3. CONTENIDO DEL HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl">
          Creamos el Futuro
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 drop-shadow-md">
          Soluciones digitales que transforman marcas y conectan con audiencias.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/servicios" 
            className="px-8 py-3 bg-[#ff2e63] text-white font-semibold rounded-full hover:bg-white hover:text-[#ff2e63] transition-all duration-300"
          >
            Ver Servicios
          </Link>
          <Link 
            href="/contacto" 
            className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;