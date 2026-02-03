import React from 'react';

const HeroNosotros = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Etiqueta de video con los atributos necesarios para autoplay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/VidPru.webm" type="video/webm" />
        Tu navegador no soporta el tag de video.
      </video>

    </section>
  );
};

export default HeroNosotros;