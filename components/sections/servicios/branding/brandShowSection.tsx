"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function BrandShowSection(){
  const totalImages = 62 - 14 + 1;

  const images = Array.from({ length: totalImages }, (_, i) => {
    const cardNumber = String(i + 14).padStart(2, '0');
    return `/images/branding/manual/manual-estacion 26-${cardNumber}.webp`;
  });

  return (
    <div className="mx-auto w-full bg-[#FBECD7] rounded-3xl  ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}