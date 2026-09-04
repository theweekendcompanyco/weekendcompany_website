import { useInView } from '../hooks/useInView'
import { SERVICES } from '../data/services'

export default function Services() {
  const { ref, isVisible } = useInView()

  return (
    <section 
      id="services" 
      className="py-24 px-6"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-primary">Services</h2>
          <p className="text-xl text-text-secondary">Four ways I can help.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`group p-8 border-2 border-dark-border bg-dark-card rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition duration-300 hover:-translate-y-1 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : '0s',
              }}
            >
              {/* Category Badge */}
              <div className="inline-block text-xs font-bold text-accent uppercase tracking-widest bg-dark-border px-3 py-1 rounded-full mb-4">
                {service.category}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Examples */}
              <div className="space-y-2 border-t border-dark-border pt-6">
                {service.examples.map((example, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span className="text-text-secondary">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
