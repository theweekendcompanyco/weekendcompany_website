import { useInView } from '../hooks/useInView'
import { SERVICES } from '../data/services'
import Tilt3DCard from './ui/Tilt3DCard'

export default function Services() {
  const { ref, isVisible } = useInView()

  const renderServiceVisual = (category: string) => {
    switch (category) {
      case 'BUILD':
        return (
          <div className="w-full h-12 bg-primary border border-dark-border rounded-md p-2.5 flex flex-col justify-between mb-5 group-hover:border-accent/40 transition-colors font-mono">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
              </div>
              <span className="text-[9px] text-text-muted">app.local</span>
              <span className="text-[9px] text-accent font-semibold">React / Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-text-primary/30 rounded"></div>
              <div className="w-16 h-1 bg-accent/40 rounded"></div>
            </div>
          </div>
        )
      case 'CLEAN':
        return (
          <div className="w-full h-12 bg-primary border border-dark-border rounded-md p-2.5 flex items-center justify-between mb-5 group-hover:border-accent/40 transition-colors font-mono text-[9px]">
            <div className="flex flex-col gap-0.5 flex-1 overflow-hidden pr-2">
              <span className="text-text-muted/60 truncate">" raw_data " | unformatted</span>
              <span className="text-text-primary truncate">Clean Data | Standardized</span>
            </div>
            <span className="text-[9px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-semibold whitespace-nowrap">
              CSV / Excel
            </span>
          </div>
        )
      case 'DESIGN':
        return (
          <div className="w-full h-12 bg-primary border border-dark-border rounded-md p-2.5 flex items-center justify-between mb-5 group-hover:border-accent/40 transition-colors font-mono text-[9px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-neutral-800 via-neutral-700 to-accent flex items-center justify-center text-[10px] font-bold text-primary shadow">
                ◆
              </div>
              <div className="flex flex-col">
                <span className="text-text-primary font-bold">Visual Kit</span>
                <span className="text-text-muted">Graphics & Assets</span>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
            </div>
          </div>
        )
      case 'HELP':
        return (
          <div className="w-full h-12 bg-primary border border-dark-border rounded-md p-2.5 flex items-center justify-between mb-5 group-hover:border-accent/40 transition-colors font-mono text-[9px]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-accent/10 text-accent border border-accent/20 flex items-center justify-center font-bold text-[10px]">
                ⚙
              </span>
              <span className="text-text-primary font-semibold">Task Pipeline & Workflow</span>
            </div>
            <span className="text-[9px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-semibold whitespace-nowrap">
              Automated
            </span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section 
      id="services" 
      className="py-24 px-6 relative border-b border-dark-border/40"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              WHAT I DO
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">Services</h2>
          <p className="text-xl text-text-secondary">Four ways I can help.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICES.map((service, idx) => (
            <Tilt3DCard
              key={service.id}
              className={`group p-8 border border-dark-border bg-dark-card rounded-xl hover:border-accent/50 transition duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-accent/5 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
            >
              <div>
                {/* Visual Accent */}
                {renderServiceVisual(service.category)}

                {/* Category Badge */}
                <div className="inline-block text-[11px] font-mono font-bold text-accent uppercase tracking-widest bg-primary border border-dark-border px-3 py-1 rounded-full mb-3">
                  {service.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-gold-bright transition duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Examples */}
              <div className="space-y-2.5 border-t border-dark-border/60 pt-6">
                {service.examples.map((example, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-accent font-bold">→</span>
                    <span className="text-text-secondary">{example}</span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}
