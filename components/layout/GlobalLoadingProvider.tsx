'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/layout/LoadingScreen';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useGlobalLoading = () => useContext(LoadingContext);

// Páginas que requieren loading screen en navegación
const PAGES_WITH_LOADING = [
  '/branding',
  '/web-development', 
  '/social-media',
  '/audiovisual',
  '/seo',
  '/nosotros',
  '/contacto'
];

export function GlobalLoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [previousPath, setPreviousPath] = useState('');

  // Primera carga de la sesión
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoadedBefore');
    
    if (hasLoaded) {
      setIsLoading(false);
      setIsFirstLoad(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad) return;

    const currentPath = pathname.replace(/^\/(en|es)/, '') || '/';
    
    if (previousPath && previousPath !== currentPath) {
      const shouldShowLoading = PAGES_WITH_LOADING.some(page => 
        currentPath.startsWith(page)
      );

      if (shouldShowLoading) {
        setIsLoading(true);
        
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 800); 

        return () => clearTimeout(timer);
      }
    }

    setPreviousPath(currentPath);
  }, [pathname, previousPath, isFirstLoad]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="global-loader" />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}