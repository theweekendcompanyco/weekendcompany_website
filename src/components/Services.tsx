import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-lg text-text-muted mb-12">Four ways I can help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="p-8 border-2 border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition duration-300"
            >
              <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                {service.category}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-text-muted">
                {service.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
