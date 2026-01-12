"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ContactForm = () => {
  return (
    <section 
      className={`${montserrat.className} relative w-full py-24 flex justify-center items-center overflow-hidden min-h-screen`}
      style={{
        backgroundImage: "url('/images/fondo.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        <h2 className="text-white text-center text-2xl md:text-3xl tracking-[0.3em] uppercase mb-16">
          Contáctanos
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
           <div className="flex flex-col gap-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Nombre</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Apellido</label>
            <input
              type="text"
              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

           <div className="flex flex-col gap-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Teléfono</label>
            <input
              type="tel"

              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Email</label>
            <input
              type="email"
              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-white text-[10px] uppercase tracking-widest opacity-70">Mensaje</label>
            <textarea
              rows={1}
              className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
            />
          </div>
          
          <div className="md:col-span-2 flex justify-center mt-12">
            <button 
              type="submit"
              className="relative inline-flex items-center justify-center px-16 py-3.5 overflow-hidden font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] group/btn hover:border-transparent cursor-pointer text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-300 ease-out -translate-x-[101%] group-hover/btn:translate-x-0 group-hover/btn:scale-x-105"></span>
              
              <span className="relative z-10 transition-colors duration-200">
                Enviar
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;