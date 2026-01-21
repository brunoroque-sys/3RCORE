import Image from 'next/image';

export default function HeroBranding() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Imagen de fondo con Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/branding/fondoBranding1.webp" // Reemplaza con tu ruta
          alt="Brand Background"
          fill
          className="object-cover " // Ajusta la opacidad para el efecto oscuro
          priority
        />
        {/* Capa de degradado extra para profundidad */}
        <div className="absolute inset-0 bg-[#130218] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* 2. Contenido Central */}
      <div className="relative z-10 text-center px-4">
        <div className="flex flex-col items-center">
          
          <div className='w-[35%]'>
            <div className="bg-none px-6 py-2 w-[100%] transform ">
            <h2 className="text-white text-left text-6xl md:text-8xl font-black tracking-[0.1em] leading-none">
              BR
            </h2>
            </div>

            <div className="bg-[#ff0055] px-6 py-2 w-[100%] transform " >
              <h2 className="text-white text-left text-6xl md:text-8xl font-black tracking-[0.1em] leading-none">AND</h2>
            </div>
          </div>

          {/* Línea Divisoria */}
          <div className="w-200 h-[1px] bg-white my-8"></div>

          {/* Eslogan en Español */}
          <p className="text-white text-sm md:text-lg font-light w-full">
            Tu imagen dice mucho sobre ti, asegúrate de que sea la correcta.
          </p>
        </div>
      </div>

    </section>
  );
}