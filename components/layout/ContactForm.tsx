"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ContactForm = () => {
  return (
    <section 
      className={`${montserrat.className} relative w-full py-24 flex justify-center items-center overflow-hidden min-h-screen`}
      style={{
        backgroundImage: "url('/images/fondoFormulario.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* OVERLAY: Ahora es un fondo oscuro semi-transparente que cubre TODA la sección */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* CONTENIDO DEL FORMULARIO */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <h2 className="text-white text-center text-2xl md:text-3xl tracking-[0.3em] uppercase mb-16">
          Contáctanos
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
           {/* ... tus inputs se mantienen igual ... */}
           <div className="flex flex-col gap-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Nombre</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          {/* Repetir para los demás campos */}
          
          <div className="md:col-span-2 flex justify-center mt-12">
            <button 
              type="submit"
              className="border border-white/40 rounded-full px-16 py-3 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 font-bold cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;