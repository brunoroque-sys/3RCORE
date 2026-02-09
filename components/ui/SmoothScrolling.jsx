"use client"
import { ReactLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

export default function SmoothScrolling({ children }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) 
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return <>{children}</>
  }

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}