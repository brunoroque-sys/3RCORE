import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/ui/SmoothScrolling"
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanners";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import ScrollContactBtn from "@/components/ui/ScrollContactBtn";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "3RCORE",
  description: "Agencia de Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        <Navbar/>
        <main className="min-h-screen bg-[#130218]">
          <SmoothScrolling>

            <div className="noise-global relative z-10" />
            {children}
          </SmoothScrolling>
        </main>
        <Footer />
        <CookieBanner />
        <ScrollContactBtn/>
        <WhatsAppBtn />
      </body>
    </html>
  );
}