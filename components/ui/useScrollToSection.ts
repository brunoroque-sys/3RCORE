// hooks/useScrollToSection.ts
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollToSection = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Obtener el hash de la URL
    const hash = window.location.hash;
    
    if (hash) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname]);
};