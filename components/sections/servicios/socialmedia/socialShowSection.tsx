"use client";

import Image from 'next/image';

export function SocialShowSection() {
  

  return (
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/images/social/fondoas.webp"
            alt="Sobre nosotros"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </section>
  );
}