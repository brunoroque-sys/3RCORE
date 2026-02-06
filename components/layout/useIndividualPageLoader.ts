'use client';
import { useState, useEffect } from 'react';

interface UseIndividualPageLoaderOptions {
  timeout?: number; // Tiempo máximo de espera
  minLoadingTime?: number; // Tiempo mínimo visible del loader
  checkVideos?: boolean; // Si debe esperar videos
}

export function useIndividualPageLoader(options: UseIndividualPageLoaderOptions = {}) {
  const { 
    timeout = 4000, 
    minLoadingTime = 1000,
    checkVideos = true 
  } = options;
  
  const [isLoading, setIsLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Bloquear scroll mientras carga
    document.body.style.overflow = 'hidden';

    const loadPageResources = async () => {
      // Obtener imágenes visibles
      const images = Array.from(document.querySelectorAll('img')).filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.top < window.innerHeight + 1000; // Viewport + 1000px
      });

      // Obtener videos si está habilitado
      const videos = checkVideos 
        ? Array.from(document.querySelectorAll('video'))
        : [];

      const promises: Promise<void>[] = [];

      // Promesas para imágenes
      images.forEach(img => {
        if (!img.complete && img.src) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 3000); // 3s max por imagen
              
              img.onload = () => {
                clearTimeout(timer);
                resolve();
              };
              
              img.onerror = () => {
                clearTimeout(timer);
                resolve();
              };
            })
          );
        }
      });

      // Promesas para videos
      videos.forEach(video => {
        if (video.readyState < 3) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 4000); // 4s max por video
              
              video.onloadeddata = () => {
                clearTimeout(timer);
                resolve();
              };
              
              video.onerror = () => {
                clearTimeout(timer);
                resolve();
              };
            })
          );
        }
      });

      // Timeout global
      const timeoutPromise = new Promise<void>((resolve) => {
        setTimeout(() => resolve(), timeout);
      });

      // Esperar recursos o timeout
      await Promise.race([
        Promise.all(promises),
        timeoutPromise
      ]);

      // Asegurar tiempo mínimo
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed));
      }

      // Ocultar loader
      setIsLoading(false);
      
      // Restaurar scroll
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    };

    // Pequeño delay para que el DOM esté listo
    const timer = setTimeout(() => {
      loadPageResources();
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [timeout, minLoadingTime, checkVideos, startTime]);

  return isLoading;
}