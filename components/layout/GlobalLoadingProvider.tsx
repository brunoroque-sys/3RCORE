'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

export function GlobalLoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Solo mostrar loading en la primera carga de la sesión
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

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && isFirstLoad && <LoadingScreen key="global-loader" />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}