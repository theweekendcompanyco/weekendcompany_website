export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
            THE WEEKEND COMPANY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center leading-tight mb-6">
          Digital work, without the corporate fuss.
        </h1>

        {/* Supporting Copy */}
        <p className="text-xl sm:text-2xl text-center text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Websites, data cleanup, design and other digital work — built after hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 text-center shadow-lg hover:shadow-xl"
          >
            Let's work together →
          </a>
          <a
            href="#services"
            className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-accent hover:bg-gray-50 transition duration-200 text-center"
          >
            See what I do ↓
          </a>
        </div>

        {/* Decorative Element */}
        <div className="text-center text-gray-300">
          <div className="text-4xl">☕</div>
          <p className="text-sm text-gray-400 mt-2">Built after hours</p>
        </div>
      </div>
    </section>
  )
}
