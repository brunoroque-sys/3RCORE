import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ['italic'], 
  weight: ["400"]
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  style: ['italic'], 
  weight: ["400"]
});
export function DraggableCardDemo() {
  const items = [
    {
      title: "Fundadores",
      image:
        "/images/Actividades/3R-Team-alta-scaled.webp",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Equipo Mounstroso",
      image:
        "/images/Actividades/43a80682-ddcf-4cfa-b23a-7dea1cd33283-3.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Equipo Branding",
      image:
        "/images/Actividades/Brand-alta-scaled-e1767107339314.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Equipo Domus",
      image:
        "/images/Actividades/domus-alta-scaled.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Sale fulbo?",
      image:
        "/images/Actividades/image-63.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Sale pollito?",
      image:
        "/images/Actividades/image-64.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Equipo Websy",
      image:
        "/images/Actividades/websy-2-alta-scaled-e1767107427647.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className={`absolute top-1/2 mx-auto max-w-sm ${poppins.className} -translate-y-3/4 text-center text-1xl font-black text-white md:text-3xl dark:text-neutral-800`}>
        MOMENTOS QUE FORTALECEN NUESTRO VÍNCULO 
      </p>
        {items.map((item, index) => (
        <DraggableCardBody
            key={`${item.title}-${index}`}
            className={item.className}
        >

            <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className={`mt-4 text-center font-serif text-2xl font-bold text-neutral-700 dark:text-neutral-300`}>
            {item.title}
            </h3>
        </DraggableCardBody>
        ))}

    </DraggableCardContainer>
  );
}
