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

          <div className="w-full h-[400px] lg:h-full min-h-[500px] relative overflow-hidden border border-white/10 group rounded-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3044063260063!2d-76.9519657249382!3d-12.09130088814899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c710419b833d%3A0xd38447313365f798!2s3R%20Core%20-%20Agencia%20de%20Marketing!5e0!3m2!1ses-419!2spe!4v1768342086873!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
              className="absolute inset-0 w-full h-full opacity-95 group-hover:opacity-80 transition-all duration-700"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              style={{ border: 0 }} 
              // eslint-disable-next-line react/jsx-no-duplicate-props
              allowFullScreen={true}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              loading="lazy" 
              // eslint-disable-next-line react/jsx-no-duplicate-props
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-[#130218] opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;