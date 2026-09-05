import { useState, useEffect } from 'react'
import VelvetCurtainCanvas from './VelvetCurtainCanvas'

interface OpeningCeremonyStageProps {
  onOpeningComplete?: () => void
}

export default function OpeningCeremonyStage({ onOpeningComplete }: OpeningCeremonyStageProps) {
  // State: 'closed' | 'opening' | 'logo_revealed' | 'expanded'
  const [stageState, setStageState] = useState<'closed' | 'opening' | 'logo_revealed' | 'expanded'>('closed')
  const [curtainProgress, setCurtainProgress] = useState(0) // 0 to 1

  // Handle curtain click trigger
  const handleEnterClick = () => {
    if (stageState !== 'closed') return

    setStageState('opening')

    // Smoothly animate curtain progress over ~1.8 seconds using requestAnimationFrame
    const startTime = performance.now()
    const duration = 1800 // 1.8 seconds

    const animateCurtain = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(1, elapsed / duration)

      // Smooth custom ease-in-out cubic curve
      const easedProgress =
        rawProgress < 0.5
          ? 4 * rawProgress * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2

      setCurtainProgress(easedProgress)

      if (rawProgress < 1) {
        requestAnimationFrame(animateCurtain)
      } else {
        // Stage 2: Logo reveal phase
        setStageState('logo_revealed')

        // Brief logo reveal moment (~700ms), then expand stage into standard hero
        setTimeout(() => {
          setStageState('expanded')
          if (onOpeningComplete) {
            onOpeningComplete()
          }
        }, 700)
      }
    }

    requestAnimationFrame(animateCurtain)
  }

  // Once fully expanded, auto-scroll to top and allow normal website document flow
  useEffect(() => {
    if (stageState === 'expanded') {
      window.scrollTo(0, 0)
    }
  }, [stageState])

  // Fallback CSS Curtain translate values (for 100% cross-browser reliability)
  const leftTranslate = -(curtainProgress * 105)
  const rightTranslate = curtainProgress * 105
  const centerEmblemOpacity = Math.max(0, 1 - curtainProgress * 3.5)

  if (stageState === 'expanded') {
    return null // Unmount stage after full expansion to free DOM memory
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden select-none">
      {/* Background Theatre Atmosphere & Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Golden Overhead Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial from-accent/15 via-accent/5 to-transparent blur-3xl rounded-full" />
        
        {/* Perspective Dark Floor Grid */}
        <div 
          className="absolute bottom-0 inset-x-0 h-1/3 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(212,175,55,0.05) 100%), 
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}
        />
      </div>

      {/* Visually Designed Studio Stage Frame */}
      <div className="relative w-full max-w-5xl h-[80vh] sm:h-[85vh] mx-4 rounded-3xl border border-accent/20 bg-gradient-to-b from-dark-card/90 via-[#0a0507] to-primary shadow-2xl overflow-hidden flex items-center justify-center">
        
        {/* 1. Behind the Curtain: Studio Logo Reveal Stage */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-radial from-[#12080a] via-[#080405] to-[#020102]">
          {/* Ambient Gold Halo */}
          <div className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />

          {/* Glowing Studio Spotlight Beam */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative p-2 rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/20 to-transparent shadow-2xl shadow-accent/20 group">
              <img
                src="/logo.jpg"
                alt="The WeekEnd Company Official Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-xl shadow-2xl border border-accent/30"
              />
              
              {/* Subtle Gold Shimmer Effect over Logo */}
              {stageState === 'logo_revealed' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-shimmer" />
              )}
            </div>

            <h2 className="mt-6 text-xl sm:text-2xl font-bold font-mono tracking-widest text-text-primary uppercase drop-shadow-md">
              THE WEEKEND COMPANY
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-accent/80 tracking-wider">
              CREATIVE DIGITAL STUDIO • EST. AFTER HOURS
            </p>
          </div>
        </div>

        {/* 2. Programmatic 3D WebGL Velvet Curtain Canvas */}
        <VelvetCurtainCanvas progress={curtainProgress} />

        {/* 3. GPU CSS 3D Fallback Curtain (Ensures 100% reliability) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 pointer-events-none flex overflow-hidden"
          style={{ opacity: curtainProgress >= 0.98 ? 0 : 1 }}
        >
          {/* Left Velvet Curtain Drape */}
          <div
            className="w-1/2 h-full relative transition-transform duration-75 ease-out border-r border-accent/60 shadow-2xl"
            style={{
              transform: `translate3d(${leftTranslate}%, 0, 0)`,
              background: `
                linear-gradient(90deg, 
                  #1A0205 0%, 
                  #4A050F 25%, 
                  #2F0208 50%, 
                  #5C0612 75%, 
                  #2F0208 100%)
              `,
              boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.8), 10px 0 30px rgba(0,0,0,0.9)',
            }}
          >
            {/* Soft Fabric Folds Texture Overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/80" />
            {/* Inner Gold Trim Line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/90 via-gold-bright to-accent/80 shadow-[0_0_10px_#D4AF37]" />
          </div>

          {/* Right Velvet Curtain Drape */}
          <div
            className="w-1/2 h-full relative transition-transform duration-75 ease-out border-l border-accent/60 shadow-2xl"
            style={{
              transform: `translate3d(${rightTranslate}%, 0, 0)`,
              background: `
                linear-gradient(270deg, 
                  #1A0205 0%, 
                  #4A050F 25%, 
                  #2F0208 50%, 
                  #5C0612 75%, 
                  #2F0208 100%)
              `,
              boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.8), -10px 0 30px rgba(0,0,0,0.9)',
            }}
          >
            {/* Soft Fabric Folds Texture Overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/80" />
            {/* Inner Gold Trim Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/90 via-gold-bright to-accent/80 shadow-[0_0_10px_#D4AF37]" />
          </div>
        </div>

        {/* 4. Center Interactive Gold Emblem Button ("Enter Studio") */}
        {stageState === 'closed' && (
          <button
            onClick={handleEnterClick}
            className="absolute z-40 flex flex-col items-center justify-center group cursor-pointer focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{ opacity: centerEmblemOpacity }}
            aria-label="Click to Enter The WeekEnd Company Studio Stage"
          >
            {/* Outer Glowing Ring */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-accent/50 bg-dark-card/90 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-accent/30 group-hover:border-gold-bright group-hover:shadow-accent/60 transition-all duration-300">
              
              {/* Animated Pulse Halo */}
              <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping opacity-75" />
              
              {/* Inner Gold Crest Emblem */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-accent via-gold-bright to-accent/80 flex items-center justify-center shadow-inner text-primary">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 transform group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Subtle Label */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-dark-card/95 border border-accent/30 text-xs font-mono font-bold text-accent uppercase tracking-widest shadow-xl group-hover:text-gold-bright group-hover:border-accent/80 transition-colors">
              CLICK / TAP TO ENTER
            </div>
            <p className="mt-1 text-[11px] font-mono text-text-muted opacity-80">
              The WeekEnd Company
            </p>
          </button>
        )}
      </div>
    </div>
  )
}
