import { useInView } from '../hooks/useInView'

export default function Process() {
  const { ref, isVisible } = useInView()

  const steps = [
    {
      number: '01',
      title: 'Tell me what you need',
      description: 'Send a message describing the task, project goal, or spreadsheet issue.',
    },
    {
      number: '02',
      title: 'We figure it out',
      description: 'We\'ll clarify scope, timeline, expectations and fixed pricing upfront.',
    },
    {
      number: '03',
      title: 'I get to work',
      description: 'I\'ll build, clean, design or automate the work during evenings and weekends.',
    },
    {
      number: '04',
      title: 'You get it done',
      description: 'You receive the polished, verified work ready to use immediately.',
    },
  ]

  return (
    <section 
      id="process" 
      className="py-24 px-6 bg-dark-bg/40 relative border-b border-dark-border/40"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              SIMPLE PROCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">How it works</h2>
          <p className="text-xl text-text-secondary">A straightforward, transparent step-by-step path.</p>
        </div>

        {/* Editorial Horizontal Timeline (Desktop) / Vertical Process Line (Mobile) */}
        <div className={`relative ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 -z-0"></div>

          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-6 w-[1px] bg-accent/30 -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.number}
                className="flex lg:flex-col items-start gap-6 lg:gap-4 group"
                style={{
                  animationDelay: isVisible ? `${idx * 0.15}s` : '0s',
                }}
              >
                {/* Step Number Circle Badge */}
                <div className="w-12 h-12 rounded-full bg-dark-card border border-accent/40 text-accent font-mono font-bold text-base flex items-center justify-center shrink-0 shadow-md group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {step.number}
                </div>

                {/* Step Text Details */}
                <div className="space-y-2 pt-1 lg:pt-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-gold-bright transition duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
