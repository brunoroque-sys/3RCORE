"use client"
import { ReactLenis } from 'lenis/react'

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,           // ← Más bajo = más suave (era 0.1)
        duration: 2,          // ← Más duración = más suave (era 1.5)
        smoothWheel: true,
        wheelMultiplier: 0.8, // ← Menos sensible al scroll (era 1)
        smoothTouch: false,   // ← Mejor en móviles
        touchMultiplier: 1.5, // ← Control del touch
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}