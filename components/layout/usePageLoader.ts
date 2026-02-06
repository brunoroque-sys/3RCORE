'use client';
import { useEffect, useState, useRef } from 'react';
import { useGlobalLoading } from '@/components/layout/GlobalLoadingProvider';

interface UsePageLoaderOptions {
  timeout?: number;
  minLoadingTime?: number;
}

export function usePageLoader(options: UsePageLoaderOptions = {}) {
  const { timeout = 5000, minLoadingTime = 1000 } = options;
  const { setIsLoading } = useGlobalLoading();
  const [startTime] = useState(Date.now());
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const getVisibleMedia = () => {
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));
      
      const visibleImages = images.filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.top < window.innerHeight + 1000;
      });

      return { images: visibleImages, videos };
    };

    const checkAndHideLoader = async () => {
      const { images, videos } = getVisibleMedia();
      
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
              const timer = setTimeout(() => resolve(), 2000);
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
    };

    const initTimer = setTimeout(() => {
      checkAndHideLoader();
    }, 100);

    return () => {
      clearTimeout(initTimer);
    };
  }, [setIsLoading, timeout, minLoadingTime, startTime]);
}