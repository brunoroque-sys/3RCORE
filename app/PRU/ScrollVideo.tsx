"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Referencias para los textos
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]); 
  const frameRef = useRef({ frame: 0 });

  const frameCount = 240; 

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    
    const images = imagesRef.current;
    const frameObj = frameRef.current;

    if (images.length === 0) {
        const currentFrame = (index: number) => 
            `/frames/frame_${(index + 1).toString().padStart(3, "0")}.webp`;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }
    }

    const render = () => {
      if (!context || !canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const imgIndex = Math.round(frameObj.frame);
      
      if (images[imgIndex] && images[imgIndex].complete) {
           context.drawImage(images[imgIndex], 0, 0, canvas.width, canvas.height);
      }
    };

    // Render inicial
    if(images[0]) images[0].onload = render;

    // 3. MASTER TIMELINE
    // Creamos una línea de tiempo que controla TODO (video y textos)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%", // Espacio suficiente para la historia
        scrub: 1,      // Suavizado general
        pin: true,     // Ancla el contenedor
      }
    });

    // --- CAPA A: Animación del Video (Dura toda la línea de tiempo) ---
    tl.to(frameObj, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 10, // Usamos una duración arbitraria larga para referencia
      onUpdate: render,
    }, 0); // <--- El '0' significa que empieza al inicio absoluto del scroll


    // --- CAPA B: Animaciones de Texto (Sincronizadas) ---
    // La duración total es 10 (según definimos arriba en el video).
    // Calculamos los tiempos basándonos en eso.

    // TEXTO 1: Aparece al inicio (segundo 0.5) y se va al segundo 2.5
    tl.fromTo(text1Ref.current, 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
        0.5 // Empieza un poquito después de iniciar el scroll
    )
    .to(text1Ref.current, 
        { opacity: 0, y: -100, duration: 1, ease: "power2.in" }, 
        2.5 // Desaparece cuando el video va por el 25% aprox
    );

    // TEXTO 2: Aparece al medio (segundo 4) y se va al 6
    tl.fromTo(text2Ref.current, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }, 
        4
    )
    .to(text2Ref.current, 
        { opacity: 0, scale: 1.2, duration: 1 }, 
        6
    );

    // TEXTO 3: Aparece al final (segundo 7.5) y se queda hasta el 9.5
    tl.fromTo(text3Ref.current, 
        { opacity: 0, x: -100 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, 
        7.5
    )
    .to(text3Ref.current, 
        { opacity: 0, x: 100, duration: 1 }, 
        9.5
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* CANVAS (FONDO) */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* CAPA DE TEXTOS (Por encima del canvas z-10) */}
      {/* Usamos 'pointer-events-none' para que el usuario pueda scrollear aunque toque el texto */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        
        {/* Texto 1 */}
        <div ref={text1Ref} className="absolute text-center opacity-0">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                Innovación
            </h2>
            <p className="text-xl text-gray-200">Todo comienza con una idea.</p>
        </div>

        {/* Texto 2 */}
        <div ref={text2Ref} className="absolute text-center opacity-0">
            <h2 className="text-5xl md:text-7xl font-bold text-[#ff2e63] mb-4 drop-shadow-lg">
                Transformación
            </h2>
            <p className="text-xl text-gray-200">Convertimos datos en experiencias.</p>
        </div>

        {/* Texto 3 */}
        <div ref={text3Ref} className="absolute text-center opacity-0">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                Resultados
            </h2>
            <p className="text-xl text-gray-200">Llevamos tu marca al siguiente nivel.</p>
        </div>

      </div>
    </div>
  );
}