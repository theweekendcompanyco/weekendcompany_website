import { useState, useEffect, useRef, ReactNode } from 'react'
import VelvetCurtainCanvas from './VelvetCurtainCanvas'

interface CurtainRevealSectionProps {
  children: ReactNode
}

export default function CurtainRevealSection({ children }: CurtainRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress through the section
      // 0 = section top enters viewport bottom
      // 1 = section scrolled through curtain threshold
      const totalScrollableDistance = rect.height - windowHeight
      if (totalScrollableDistance <= 0) return

      const currentScroll = -rect.top
      const rawProgress = currentScroll / (windowHeight * 0.7)
      const clampedProgress = Math.min(1, Math.max(0, rawProgress))

      setScrollProgress(clampedProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // CSS Fallback translate values for mobile / non-WebGL rendering
  const leftTranslate = -(scrollProgress * 100)
  const rightTranslate = scrollProgress * 100
  const badgeOpacity = Math.max(0, 1 - scrollProgress * 2.5)

  return (
    <div ref={sectionRef} className="relative min-h-[140vh] bg-primary overflow-hidden">
      {/* Sticky Curtain Reveal Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Programmatic 3D WebGL Velvet Curtain Canvas */}
        <VelvetCurtainCanvas progress={scrollProgress} />

        {/* 2. GPU CSS 3D Fallback Curtain (Ensures 100% reliability) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 pointer-events-none flex"
          style={{ opacity: scrollProgress >= 0.98 ? 0 : 1 }}
        >
          {/* Left Curtain Drape */}
          <div
            className="w-1/2 h-full bg-gradient-to-r from-[#2F0208] via-[#5C0612] to-[#3A0209] border-r-2 border-accent/80 shadow-2xl relative transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${leftTranslate}%, 0, 0)`,
              backgroundImage: `
                linear-gradient(90deg, 
                  rgba(0,0,0,0.6) 0%, 
                  rgba(92,6,18,0.9) 25%, 
                  rgba(47,2,8,0.95) 50%, 
                  rgba(128,10,28,0.85) 75%, 
                  rgba(0,0,0,0.5) 100%)
              `,
            }}
          />

          {/* Right Curtain Drape */}
          <div
            className="w-1/2 h-full bg-gradient-to-l from-[#2F0208] via-[#5C0612] to-[#3A0209] border-l-2 border-accent/80 shadow-2xl relative transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${rightTranslate}%, 0, 0)`,
              backgroundImage: `
                linear-gradient(270deg, 
                  rgba(0,0,0,0.6) 0%, 
                  rgba(92,6,18,0.9) 25%, 
                  rgba(47,2,8,0.95) 50%, 
                  rgba(128,10,28,0.85) 75%, 
                  rgba(0,0,0,0.5) 100%)
              `,
            }}
          />
        </div>

        {/* 3. Center Theatrical Brand Eyebrow Badge (fades as curtain opens) */}
        <div
          className="absolute z-40 text-center pointer-events-none transition-opacity duration-300 px-6"
          style={{ opacity: badgeOpacity }}
        >
          <div className="inline-flex items-center gap-2 bg-dark-card/90 border border-accent/40 px-5 py-2 rounded-full shadow-2xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
              THE WEEKEND COMPANY — UNVEILING THE DIGITAL STUDIO
            </span>
          </div>
          <p className="text-xs font-mono text-text-muted mt-3 uppercase tracking-wider">
            Scroll to open curtains ↓
          </p>
        </div>

        {/* 4. Revealed Content (Services Section on Dark Creative Stage) */}
        <div className="absolute inset-0 z-10 overflow-y-auto pt-16">
          {children}
        </div>
      </div>
    </div>
  )
}
