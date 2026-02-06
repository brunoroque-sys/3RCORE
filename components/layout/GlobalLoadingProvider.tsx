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

export function GlobalLoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPathname, setPrevPathname] = useState('');

  // Detectar cambio de ruta y mostrar loader
  useEffect(() => {
    const currentPath = pathname.replace(/^\/(en|es)/, '') || '/';
    
    // Si cambia la ruta, mostrar loader
    if (prevPathname && prevPathname !== currentPath) {
      setIsLoading(true);
    }
    
    setPrevPathname(currentPath);
  }, [pathname, prevPathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="global-loader" />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}