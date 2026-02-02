"use client";

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Clase para las partículas
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      maxOpacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = (canvas?.height || window.innerHeight) + 10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * -1.5 - 0.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.4 + 0.3;
      }

      update() {
        if (!canvas) return;
        
        this.y += this.speedY;
        this.x += this.speedX;

        const totalHeight = canvas.height;
        const distanceFromBottom = totalHeight - this.y;
        const percentFromBottom = distanceFromBottom / totalHeight;

        // Fade in durante los primeros 20% desde abajo
        if (percentFromBottom < 0.2) {
          this.opacity = (percentFromBottom / 0.2) * this.maxOpacity;
        }
        // Fade out durante los últimos 20% hacia arriba
        else if (percentFromBottom > 0.8) {
          this.opacity = ((1 - percentFromBottom) / 0.2) * this.maxOpacity;
        }
        // Opacidad máxima en el medio
        else {
          this.opacity = this.maxOpacity;
        }

        // Resetear cuando sale completamente por arriba
        if (this.y < -50) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
          this.opacity = 0;
        }
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        
        // Color rosa/magenta #D11E68 = rgb(209, 30, 104)
        ctx.fillStyle = `rgba(209, 30, 104, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Brillo suave con tonos más claros del rosa
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, `rgba(241, 94, 164, ${this.opacity * 0.5})`); // Tono más claro
        gradient.addColorStop(1, 'rgba(209, 30, 104, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Crear partículas
    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animación
    let animationFrameId: number;
    
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-[#16021B] pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}