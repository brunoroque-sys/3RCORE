import { useTranslations } from 'next-intl';
import React from 'react';

import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function Terminos() {
  const t = useTranslations('Terms');

  return (
    <>
          <section className="relative z-10 pt-40 pb-20 px-10 md:px-6 text-justify">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12 border-b border-white/10 pb-8">
                <h1 className={`
                  leading-tight
                  font-bold
                  italic
                  text-3xl md:text-6xl 
                  bg-gradient-to-r from-[#9C27B0] to-[#E91E63] 
                  bg-clip-text text-transparent font-m
                `}>
                  {t('title')}
                </h1>
                <p className="text-white text-lg uppercase tracking-widest font-light">
                  {t('topBadge')}
                </p>
              </header>

              <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                
                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">01.</span> 
                    {t('sections.s1.title')}
                  </h2>
                  <p className='text-sm md:text-base'>{t('sections.s1.text')}</p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">02.</span> 
                    {t('sections.s2.title')}
                  </h2>
                  <p className="mb-4 text-sm md:text-base">{t('sections.s2.text')}</p>
                  <div className="bg-gradient-to-br from-white/10 to-transparent border-l-2 border-[#E91E63] p-6 rounded-r-2xl">
                    <p className="italic text-gray-200 text-sm md:text-base">
                      {t('sections.s2.quote')}
                    </p>
                  </div>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">03.</span> 
                    {t('sections.s3.title')}
                  </h2>
                  <p className="mb-4 text-sm md:text-base">{t('sections.s3.intro')}</p>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0" />
                      <span >{t('sections.s3.law1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9C27B0] mt-2 shrink-0" />
                      <span>{t('sections.s3.law2')}</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm md:text-base">{t('sections.s3.footer')}</p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">04.</span> 
                    {t('sections.s4.title')}
                  </h2>
                  <p className='text-sm md:text-base'>{t('sections.s4.text')}</p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">05.</span> 
                    {t('sections.s5.title')}
                  </h2>
                  <p className="mb-6 text-sm md:text-base">{t('sections.s5.text')}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Vía Presencial */}
                    <div className="group relative p-0.5 rounded-2xl overflow-hidden tracking-wide transition-all hover:shadow-[0_0_20px_rgba(156,39,176,0.2)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]" />
                      <div className="relative bg-[#130218] p-6 rounded-[14px]">
                        <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{t('sections.s5.physical')}</h4>
                        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">Sede Central</p>
                        <p className="text-sm text-gray-300">Av. Las Caobas 170, La Molina, Lima.</p>
                      </div>
                    </div>
                    
                    {/* Vía Digital */}
                    <div className="group relative p-0.5 rounded-2xl overflow-hidden tracking-wide transition-all hover:shadow-[0_0_20px_rgba(156,39,176,0.2)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]" />
                      <div className="relative bg-[#130218] p-6 rounded-[14px]">
                        <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{t('sections.s5.digital')}</h4>
                        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">info@3rcore.com</p>
                        <p className="text-[10px] text-gray-300 mt-1 uppercase">{t('sections.s5.subject')}</p>
                      </div>
                    </div>
                  </div>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">06.</span> 
                    {t('sections.s6.title')}
                  </h2>
                  <p className='text-sm md:text-base'>{t('sections.s6.text')}</p>
                </article>

              </div>
            </div>
          </section>
          <ScrollContactBtn />
          <WhatsAppBtn />
    </>
  );
}