export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Tell me what you need',
      description: 'Send a message describing the task.',
    },
    {
      number: '02',
      title: 'We figure it out',
      description: 'We\'ll clarify scope, requirements and expectations.',
    },
    {
      number: '03',
      title: 'I get to work',
      description: 'I\'ll build, clean, design or handle the task.',
    },
    {
      number: '04',
      title: 'You get it done',
      description: 'You receive the finished work.',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-primary">How it works</h2>
          <p className="text-xl text-text-secondary">A simple four-step process.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={step.number}
              className="relative flex flex-col p-8 bg-dark-card border border-dark-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition duration-300"
            >
              {/* Step Number */}
              <div className="text-6xl font-black text-accent opacity-20 mb-4 select-none">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-dark-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
