'use client';
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { useEffect } from 'react';

export default function LoadingScreen() {
  const t = useTranslations('preload');

  useEffect(() => {
    // Asegurar que el body esté oculto mientras carga
    document.body.classList.remove('loaded');
    
    return () => {
      // Cuando el loader se desmonta, mostrar el body
      document.body.classList.add('loaded');
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#ff0055] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 font-light tracking-widest uppercase text-sm">{t('text')}</p>
      </div>
    </motion.div>
  );
}