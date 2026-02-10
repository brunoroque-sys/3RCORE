"use client";
import { useState } from 'react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const max = 24;

  const images = Array.from({ length: max }, (_, i) => 
    (i + 1).toString().padStart(2, '0')
  );

  return (
    <main className="p-6 xl:p-2 ">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 h-screen">
        {images.map((name, index) => (
          <div 
            key={name}
            className={`relative overflow-hidden group cursor-pointer shadow-lg bg-black
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 1 ? 'md:col-span-3 md:row-span-3' : ''}
              ${index === 3 ? 'md:col-span-1 md:row-span-2' : ''}
              ${index === 4 ? 'md:col-span-1 md:row-span-2' : ''}
              ${index === 5 ? 'md:col-span-1 md:row-span-1' : ''}
              ${index === 6 ? 'md:col-span-1 md:row-span-1' : ''}
              ${index === 7 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 8 ? 'md:col-span-1 md:row-span-1' : ''}
              ${index === 13 ? 'md:col-span-1 md:row-span-2' : ''}
              ${index === 14 ? 'md:col-span-3 md:row-span-2' : ''}
              ${index === 15 ? 'md:col-span-1 md:row-span-2' : ''}
              ${index === 17 ? 'md:col-span-1 md:row-span-2' : ''}
              ${index === 19 ? 'md:col-span-1 md:row-span-2' : ''}
            `}
            onClick={() => setSelectedImg(name)}
          >
            <img
              src={`/images/galeriaNosotros/${name}.webp`}
              alt={`Imagen ${name}`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:opacity-60"
            />

            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <img 
                src="/icons/LOGO3R.png" 
                alt="Logo"
                className="w-20 h-20 object-contain opacity-0 scale-0 -translate-y-20 rotate-[30deg] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-500 ease-out"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/images/galeriaNosotros/${selectedImg}.webp`}
              className="max-h-[85vh] w-auto shadow-2xl rounded-sm"
              alt="Vista ampliada"
            />
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}