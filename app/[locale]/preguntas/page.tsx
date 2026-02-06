"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from "next/image";
import ContactForm from '@/components/layout/ContactForm';

import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array de preguntas frecuentes
  const faqs = [
    { id: 1, question: t('faqs.q1.question'), answer: t('faqs.q1.answer') },
    { id: 2, question: t('faqs.q2.question'), answer: t('faqs.q2.answer') },
    { id: 3, question: t('faqs.q3.question'), answer: t('faqs.q3.answer') },
    { id: 4, question: t('faqs.q4.question'), answer: t('faqs.q4.answer') },
    { id: 5, question: t('faqs.q5.question'), answer: t('faqs.q5.answer') },
    { id: 6, question: t('faqs.q6.question'), answer: t('faqs.q6.answer') },
  ];

  return (
    <>
      <section className="relative z-10 pt-40 pb-20 px-10 md:px-6">
        <div className="max-w-4xl mx-auto">

          <header className="mb-12 border-b border-white/50 pb-8">
            <h1 className={`
              leading-tight
              font-bold
              italic
              text-3xl md:text-6xl 
              bg-gradient-to-r from-[#9C27B0] to-[#E91E63] 
              bg-clip-text text-transparent font-m
              mb-3
            `}>
              {t('title')}
            </h1>
            <p className="text-white text-lg uppercase tracking-widest font-light">
              {t('topBadge')}
            </p>
          </header>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <article 
                key={faq.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300"
              >
                {/* Gradient border effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] 
                  transition-opacity duration-300
                  ${openIndex === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'}
                `} />
                
                {/* Content container */}
                <div className="relative bg-[#130218] m-[1px] rounded-[15px]">
                  
                  {/* Question header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0] shrink-0 mt-1">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-white font-semibold text-sm md:text-xl leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle icon */}
                    <svg 
                      className={`
                        shrink-0 w-6 h-6
                        transition-transform duration-300
                        ${openIndex === index ? 'rotate-180' : 'rotate-0'}
                      `}
                      fill="none" 
                      stroke="url(#gradient)" 
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#E91E63" />
                          <stop offset="100%" stopColor="#9C27B0" />
                        </linearGradient>
                      </defs>
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </button>

                  {/* Answer content */}
                  <div className={`
                    overflow-hidden transition-all duration-300
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="px-6 pb-6 pl-16">
                      <div className=" ">
                        <p className="text-gray-300 text-sm md:leading-relaxed md:font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactForm/>
      <ScrollContactBtn />
      <WhatsAppBtn />
    </>
  );
}