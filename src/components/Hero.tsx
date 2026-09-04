export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest bg-dark-card border border-dark-border px-4 py-2 rounded-full hover:bg-dark-border transition">
            The Weekend Company
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
          Digital work, without the corporate fuss.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-center text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Websites, data cleanup, design and other digital work — built after hours by someone who actually cares.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-200 text-center shadow-lg hover:shadow-2xl shadow-accent/20 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            Let's work together →
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-dark-border text-text-secondary rounded-lg font-semibold hover:border-accent hover:bg-dark-card transition duration-200 text-center focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            See what I do ↓
          </a>
        </div>

        {/* Decorative Element */}
        <div className="text-center">
          <div className="text-5xl mb-3 animate-bounce">☕</div>
          <p className="text-sm text-text-muted">Built after hours, one cup at a time</p>
        </div>
      </div>
    </section>
  )
}
