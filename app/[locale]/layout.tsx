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

 import { SmoothCursor } from "@/components/ui/smooth-cursor"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
  variable: "--font-poppins", 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "3RCORE",
  description: "Agencia de Marketing",
};

export default async function RootLayout({children,params}:{children: React.ReactNode,params:any}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages=await getMessages();

  return (
    <html >
      <body className={`${poppins.className} antialiased bg-black text-white cursor-none `}>
        <div className="noise-overlay" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          
          <SmoothScrolling>
            <Navbar />
            <main className="min-h-screen bg-[#130218] flex flex-col">
              <div className="noise-global relative z-10" />
              {children}
            </main>
            <Footer />
          </SmoothScrolling>
          
          <CookieBanner />
          <ScrollContactBtn />
          <WhatsAppBtn />
          <SmoothCursor />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}