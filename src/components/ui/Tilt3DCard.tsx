import { useState, useRef, MouseEvent, ReactNode } from 'react'

interface Tilt3DCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  scale?: number
  glare?: boolean
}

export default function Tilt3DCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
  })
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)',
  })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    // Respect reduced motion settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (-(y - centerY) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 0.1s ease-out',
    })

    if (glare) {
      setGlareStyle({
        opacity: 0.8,
        background: `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(212, 175, 55, 0.18), transparent 60%)`,
      })
    }
  }

  const handleMouseEnter = () => {
    setStyle(prev => ({
      ...prev,
      transition: 'transform 0.15s ease-out',
    }))
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    })
    setGlareStyle(prev => ({
      ...prev,
      opacity: 0,
    }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: style.transform,
        transition: style.transition,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}

      {/* Dynamic specular glare overlay */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-inherit z-20"
          style={{
            opacity: glareStyle.opacity,
            background: glareStyle.background,
          }}
        />
      )}
    </div>
  )
}
