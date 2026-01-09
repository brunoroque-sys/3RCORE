import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // <--- 1. Importamos directamente desde Google
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/ui/SmoothScrolling"
import Navbar from "@/components/layout/Navbar";

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
    <html lang="es">
      {/* 3. Aplicamos la clase al body */}
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        
        <Navbar/>
        
        <main className="min-h-screen bg-[#120214] ">
          <SmoothScrolling>
            <div className="noise-global" />
            {children}
          </SmoothScrolling>
        </main>
        <Footer />
      </body>
    </html>
  );
}