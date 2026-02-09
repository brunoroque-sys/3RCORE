'use client';
import { useState, useEffect } from 'react';

interface UseIndividualPageLoaderOptions {
  timeout?: number; 
  minLoadingTime?: number; 
  checkVideos?: boolean; 
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
    document.body.style.overflow = 'hidden';

    const loadPageResources = async () => {
      const images = Array.from(document.querySelectorAll('img')).filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.top < window.innerHeight + 1000; 
      });

      const videos = checkVideos 
        ? Array.from(document.querySelectorAll('video'))
        : [];

      const promises: Promise<void>[] = [];

      images.forEach(img => {
        if (!img.complete && img.src) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 3000);
              
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

      videos.forEach(video => {
        if (video.readyState < 3) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 4000); 
              
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

      const timeoutPromise = new Promise<void>((resolve) => {
        setTimeout(() => resolve(), timeout);
      });

      await Promise.race([
        Promise.all(promises),
        timeoutPromise
      ]);
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed));
      }

      setIsLoading(false);
      
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    };

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