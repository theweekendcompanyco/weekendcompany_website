export default function WhyUs() {
  const reasons = [
    {
      title: 'Direct communication',
      description: 'You work directly with the person doing the work.',
    },
    {
      title: 'Small-project friendly',
      description: 'Not every job needs an agency.',
    },
    {
      title: 'Practical solutions',
      description: 'Focus on solving the actual problem.',
    },
    {
      title: 'Personal attention',
      description: 'Each project gets individual attention.',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Why work with me</h2>
        <p className="text-lg text-text-muted mb-12">Four good reasons.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="text-text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
