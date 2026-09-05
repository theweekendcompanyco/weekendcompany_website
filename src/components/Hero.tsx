import Hero3DCanvas from './ui/Hero3DCanvas'

export default function Hero() {
  return (
    <section className="pt-44 sm:pt-48 pb-28 px-6 relative overflow-hidden hero-bg border-b border-dark-border/60">
      {/* Interactive 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Subtle Brand Logo Badge & Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-md">
          <img
            src="/logo.jpg"
            alt="The WeekEnd Company Mark"
            className="w-5 h-5 rounded-full object-cover border border-accent/40"
          />
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
            THE WEEKEND COMPANY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-text-primary tracking-tight drop-shadow-sm">
          Digital work,<br className="hidden sm:inline" /> without the corporate fuss.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Websites, data cleanup, design and other digital work — built after hours by someone who actually cares.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-10">
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-gold-bright active:scale-95 transition duration-200 text-center shadow-lg shadow-accent/20 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            Let's work together →
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-dark-border bg-dark-card/80 backdrop-blur text-text-secondary rounded-xl font-semibold hover:border-accent hover:text-gold-bright hover:bg-dark-card transition duration-200 text-center focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            See what I do ↓
          </a>
        </div>

        {/* Floating 3D Animated Coffee Note */}
        <div className="flex flex-col items-center justify-center gap-2 relative z-10">
          <div className="w-10 h-10 rounded-full bg-dark-card/90 border border-accent/30 flex items-center justify-center shadow-lg shadow-accent/10 hover:border-accent hover:scale-110 transition-transform duration-300">
            <span className="text-2xl animate-pulse">☕</span>
          </div>
          <p className="text-xs font-mono text-text-muted">Built after hours, one cup at a time</p>
        </div>
      </div>
    </section>
  )
}
