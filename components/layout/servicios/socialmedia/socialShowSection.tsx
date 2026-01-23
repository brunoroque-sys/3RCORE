"use client";
import { ThreeDMarqueeInvertido } from "@/components/ui/3d-marquee-invertido";

export function SocialShowSection(){
  const totalImages = 62 - 14 + 1;

  const images = Array.from({ length: totalImages }, (_, i) => {
    const cardNumber = String(i + 14).padStart(2, '0');
    return `/images/branding/manual/manual-estacion 26-${cardNumber}.webp`;
  });

  return (
    <div className="mx-auto w-full rounded-3xl  ring-1 ring-neutral-700/10 dark:bg-neutral-800"
      style={{
      backgroundImage: "url('/images/social/2707.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <ThreeDMarqueeInvertido images={images} />
    </div>
  );
}