import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "3RCORE",
  description: "Web Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-black text-white"> {/* Fondo negro base */}
        <Navbar /> {/* <--- Colocar aquí */}
        
        {/* Agregamos padding-top para que el navbar fixed no tape el contenido */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}