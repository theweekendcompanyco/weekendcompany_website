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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-lg text-text-muted mb-12">A simple four-step process.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="text-4xl font-bold text-accent mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
