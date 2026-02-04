'use client';

import { useEffect, useRef, useState } from 'react';

const HeroNosotros = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isAnimationReady, setIsAnimationReady] = useState(false);
      

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
    };

    // Eventos para asegurar la carga en distintos navegadores
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleCanPlayThrough);

    // Forzar carga si el video ya está en caché
    if (video.readyState >= 3) {
      handleCanPlayThrough();
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleCanPlayThrough);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Contenedor del Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ 
            opacity: isVideoLoaded ? 1 : 0
          }}
        >
          <source src="/videos/nosoHero.webm" type="video/webm" />
          Tu navegador no soporta videos.
        </video>
        
        <div className="absolute inset-0 bg-[#130218] opacity-20 mix-blend-multiply"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">

      </div>
    </section>
  );
};

export default HeroNosotros;