import Image from 'next/image';

const HeroNosotros = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de Fondo */}
      <Image
        src="/images/Equipo/IMG_8192-1-scaled-e1755014416102.webp"
        alt="Sobre nosotros"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </section>
  );
};

export default HeroNosotros;