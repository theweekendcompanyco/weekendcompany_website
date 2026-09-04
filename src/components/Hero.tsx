export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
          THE WEEKEND COMPANY
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Digital work, without the corporate fuss.
        </h1>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          Websites, data cleanup, design and other digital work — built after hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-3 bg-accent text-white rounded font-medium hover:bg-blue-700 transition">
            Let's work together →
          </a>
          <a href="#services" className="px-8 py-3 border-2 border-gray-300 rounded font-medium hover:border-accent transition">
            See what I do ↓
          </a>
        </div>
      </div>
    </section>
  )
}
