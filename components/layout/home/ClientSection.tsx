"use client"; // Asegúrate de incluir esto si usas Next.js App Router
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Ubuntu } from 'next/font/google';

interface Client {
  name: string;
  logo: string;
  className?: string; 
}

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

const clients: Client[] = [
  { name: 'Client 1', logo: '/images/Logos/2kLogo.webp', className: "lg:-translate-y-4 lg:-translate-x-2" },
  { name: 'Client 2', logo: '/images/Logos/AutoLogo.webp', className: "lg:translate-y-8 lg:translate-x-4" },
  { name: 'Client 3', logo: '/images/Logos/domusLogo.webp', className: "lg:-translate-y-8 lg:scale-90" },
  { name: 'Client 4', logo: '/images/Logos/pdk.webp', className: "lg:translate-y-12 lg:-translate-x-4" },
  { name: 'Client 5', logo: '/images/Logos/pretties.webp', className: "lg:-translate-y-6 lg:translate-x-8" },
  { name: 'Client 6', logo: '/images/Logos/ranchoVentura.webp', className: "lg:translate-y-4 lg:-translate-x-6" },
  { name: 'Client 7', logo: '/images/Logos/venturaLogo.webp', className: "lg:-translate-y-10 lg:translate-x-2" },
  { name: 'Client 8', logo: '/images/Logos/venusLogo.webp', className: "lg:translate-y-6 lg:scale-95" },
  { name: 'Client 9', logo: '/images/Logos/vitaLogo.webp', className: "lg:-translate-y-4 lg:-translate-x-8" },
  { name: 'Client 10', logo: '/images/Logos/vlissad.webp', className: "lg:translate-y-10 lg:translate-x-6" },
];

export default function ClientsSection() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          
          {/* BLOQUE CENTRAL DE TEXTO */}
          <div className="
            col-span-2 
            md:col-start-2 md:row-start-2
            lg:col-span-2 lg:col-start-2 lg:row-start-2
            flex flex-col justify-center items-center text-center 
            z-20 p-8 backdrop-blur-sm
          ">
            <h2 className={`
              tracking-[0.1em] uppercase leading-tight
              text-1xl md:text-3xl 
              bg-gradient-to-r from-[#9C27B0] to-[#E91E63] 
              bg-clip-text text-transparent
            `}>
              Nuestros Clientes
            </h2>
            <p className={`text-white text-sm md:text-base max-w-[300px] ${ubuntu.className} leading-relaxed`}>
              Empresas que confían en nuestra visión y resultados.
            </p>
          </div>

          {/* MAPEO DE LOGOS CON EFECTO ALEATORIO */}
          {clients.map((client, i) => (
            <div key={i} className={`${client.className}`}>
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ClientCard = ({ client }: { client: Client }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const triggerRandomFlicker = () => {
      // Tiempo aleatorio para estar visible o invisible (entre 2 y 6 segundos)
      const randomTime = Math.floor(Math.random() * 2000) + 1000;
      
      setTimeout(() => {
        setVisible(prev => !prev);
        triggerRandomFlicker();
      }, randomTime);
    };

    // Delay inicial aleatorio para que no todos parpadeen al mismo tiempo
    const initialDelay = Math.floor(Math.random() * 5000);
    const timeout = setTimeout(triggerRandomFlicker, initialDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`
      group relative h-32 md:h-40 w-full 
      border border-white/30 
      flex items-center justify-center 
      rounded-sm p-8 md:p-10
      transition-all duration-1000 ease-in-out
      hover:border-white/90 hover:bg-white/[0.06] hover:!opacity-100
      ${visible ? 'opacity-100 blur-none' : 'opacity-0'}
    `}>
      <div className="relative w-full h-full filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform ">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(255,255,255,0.03)] pointer-events-none" />
    </div>
  );
};