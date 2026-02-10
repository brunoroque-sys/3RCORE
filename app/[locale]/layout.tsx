import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/ui/SmoothScrolling"
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanners";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import ScrollContactBtn from "@/components/ui/ScrollContactBtn";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getMessages } from "next-intl/server";

import ParticlesBackground from "@/components/ui/AnimatedBackground";
import ReactLenis from "lenis/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
  variable: "--font-poppins", 
  display: 'swap',
});
const lenisOptions = {
    lerp: 0.1,           // Intensidad del frenado (0 a 1). Menor número = más pesado/lento.
    duration: 1.5,       // Duración del scroll en segundos.
    smoothWheel: true,   // Activa scroll suave para ratón.
    wheelMultiplier: 0.5,  // Multiplicador de velocidad (1.5 o 2 para ir más rápido).
    touchMultiplier: 2,  // Sensibilidad en dispositivos táctiles.
    infinite: false,     // ¿Scroll infinito?
  }

export const metadata: Metadata = {
  title: "3RCORE",
  description: "Agencia de Marketing",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  const {locale} = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale} >
      <ReactLenis root options={lenisOptions}>
      <body className={`${poppins.className} text-white`} suppressHydrationWarning={true}>
        <div className="noise-overlay" />
        
        <ParticlesBackground />
        
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex flex-col relative z-10">
              <div className="noise-global" />
              {children}
            </main>
            <Footer />
          
          <CookieBanner />

        </NextIntlClientProvider>
      </body>
      </ReactLenis>
    </html>
  );
}