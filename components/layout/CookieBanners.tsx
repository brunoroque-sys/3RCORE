"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function CookieBanner() {

    const t = useTranslations('CookieBanner');
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        setIsVisible(true);
      }
    };

    const timeoutId = setTimeout(checkConsent, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-950/95 backdrop-blur-sm text-white p-6 flex flex-col md:flex-row justify-between items-center z-50 border-t-2 border-[#9C27B0] shadow-2xl">
      <div className="mb-4 md:mb-0 md:mr-8 max-w-3xl">
        <p className="text-sm text-gray-200">
          {t('message')}
          <a href="/politicas" target="_blank" className="ml-1 text-[#E91E63] hover:text-[#9C27B0] font-semibold transition-colors underline">
           {t('privacyLink')}
          </a>.
        </p>
      </div>
      
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => setIsVisible(false)}
          className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white cursor-pointer transition-colors uppercase tracking-wider"
        >
           {t('decline')}
        </button>
        
        <button 
          onClick={acceptCookies}
          className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:brightness-110 cursor-pointer text-white px-8 py-2.5 rounded-[10px] font-bold shadow-[0 0 15px rgba(233,30,99,0.3)] transition-all active:scale-95 uppercase text-xs tracking-widest"
        >
          {t('acceptAll')}
        </button>
      </div>
    </div>
  );
}