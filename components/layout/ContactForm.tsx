"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ContactForm = () => {
  return (
    <section 
      className={`${montserrat.className} relative w-full py-24 flex flex-col justify-center items-center overflow-hidden min-h-screen`}
      style={{
        backgroundImage: "url('/images/Formulario/wmremove-transformed-8-1-1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#130218]/90 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        <h2 className="text-white text-center text-2xl md:text-3xl tracking-[0.2em] uppercase mb-16">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          <div className="flex items-center justify-center">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 w-full">
              
              {/* CAMPO: NOMBRE */}
              <div className="flex flex-col gap-2 relative group/field">
                <label className="text-white text-[10px] uppercase tracking-widest">Nombre</label>
                <input type="text" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                {/* LINEA ANIMADA */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
              </div>

              {/* CAMPO: APELLIDO */}
              <div className="flex flex-col gap-2 relative group/field">
                <label className="text-white text-[10px] uppercase tracking-widest">Apellido</label>
                <input type="text" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
              </div>

              {/* CAMPO: TELÉFONO */}
              <div className="flex flex-col gap-2 relative group/field">
                <label className="text-white text-[10px] uppercase tracking-widest">Teléfono</label>
                <input type="tel" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
              </div>

              {/* CAMPO: EMAIL */}
              <div className="flex flex-col gap-2 relative group/field">
                <label className="text-white text-[10px] uppercase tracking-widest">Email</label>
                <input type="email" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
              </div>

              {/* CAMPO: MENSAJE */}
              <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                <label className="text-white text-[10px] uppercase tracking-widest">Mensaje</label>
                <textarea rows={1} className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors resize-none peer" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
              </div>
              
              <div className="md:col-span-2 flex justify-start mt-6">
                <button type="submit" className="relative inline-flex items-center justify-center px-12 py-3 overflow-hidden font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] group/btn hover:border-transparent cursor-pointer text-white">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-300 ease-out -translate-x-[101%] group-hover/btn:translate-x-0"></span>
                  <span className="relative z-10">Enviar</span>
                </button>
              </div>
            </form>
          </div>



        </div>
      </div>
    </section>
  );
};

export default ContactForm;