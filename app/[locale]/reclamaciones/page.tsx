"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react"; 
import { useTranslations } from "next-intl"

import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

const montserrat = Montserrat({ subsets: ["latin"] });

const ComplaintsForm = () => {

  const t = useTranslations('ComplaintsSection');
  
  const [tipoDocumento, setTipoDocumento] = useState('');
    const [tipoReclamacion, setTipoReclamacion] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    e.currentTarget.reset();
    setTipoDocumento('');  
    setTipoReclamacion(''); 
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus({ type: "success", message: "¡Reclamación enviada con éxito!" });
        
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error al enviar. Intenta de nuevo." });
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
          <section 
            className={`${montserrat.className} relative w-full py-40 flex flex-col justify-center items-center overflow-hidden min-h-screen`}
            style={{
              backgroundImage: "url('/images/Formulario/wmremove-transformed-8-1-1.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#130218]/90 z-0"></div>

            <div className="relative z-10 w-full max-w-7xl px-10 lg:px-6">
              <h2 className="text-white text-center text-2xl md:text-3xl tracking-[0.2em] uppercase mb-16">
                {t('title')}
              </h2>

              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 w-full">
                    
                    <div className="flex flex-col gap-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldName')}</label>
                      <input name="nombre" required type="text" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldLastName')}</label>
                      <input name="apellido" required type="text" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldPhone')}</label>
                      <input name="telefono" required type="tel" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldEmail')}</label>
                      <input name="email" required type="email" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldDocumentType')}</label>
                      <select name="tipoDocumento" required value={tipoDocumento} 
        onChange={(e) => setTipoDocumento(e.target.value)} className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#130218]">Seleccionar</option>
                        <option value="DNI" className="bg-[#130218]">DNI</option>
                        <option value="CE" className="bg-[#130218]">Carné de Extranjería</option>
                        <option value="Pasaporte" className="bg-[#130218]">Pasaporte</option>
                        <option value="RUC" className="bg-[#130218]">RUC</option>
                      </select>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldDocumentNumber')}</label>
                      <input name="numeroDocumento" required type="text" className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldComplaintType')}</label>
                      <select name="tipoReclamacion" required value={tipoDocumento} 
        onChange={(e) => setTipoDocumento(e.target.value)} className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors peer appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#130218]">Seleccionar</option>
                        <option value="Reclamo" className="bg-[#130218]">Reclamo</option>
                        <option value="Queja" className="bg-[#130218]">Queja</option>
                      </select>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldDetail')}</label>
                      <textarea name="detalle" required rows={3} className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors resize-none peer" placeholder="Describe tu reclamación con el mayor detalle posible..." />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 relative group/field">
                      <label className="text-white text-[10px] uppercase tracking-widest">{t('fieldRequest')}</label>
                      <textarea name="pedido" required rows={2} className="bg-transparent border-b border-white/30 py-2 text-white focus:outline-none transition-colors resize-none peer" placeholder="¿Qué solicitas que hagamos?" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-all duration-500 peer-focus:w-full"></span>
                    </div>
                    
                    <div className="md:col-span-2 flex flex-col gap-4 mt-6">
                      <button 
                        disabled={loading} 
                        type="submit" 
                        className="relative inline-flex items-center justify-center px-12 py-3 overflow-hidden font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] group/btn hover:border-transparent cursor-pointer text-white disabled:opacity-50"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-300 ease-out -translate-x-[101%] group-hover/btn:translate-x-0"></span>
                        <span className="relative z-10">{loading ? t('buttonSending') : t('buttonSend')}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <ScrollContactBtn />
          <WhatsAppBtn />
    </>
  );
};

export default ComplaintsForm;