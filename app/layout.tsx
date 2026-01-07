import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // <--- 1. Importamos directamente desde Google
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 2. Configuramos Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Elegimos los grosores que usaremos (Light, Regular, SemiBold, Bold)
  variable: "--font-poppins", // Variable para usarla en Tailwind si quieres
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
        <Navbar />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}