export default function WhyUs() {
  const reasons = [
    {
      number: '01',
      title: 'Direct communication',
      description: 'You work directly with the person doing the work.',
    },
    {
      number: '02',
      title: 'Small-project friendly',
      description: 'Not every job needs an agency. Not every problem needs a complex solution.',
    },
    {
      number: '03',
      title: 'Practical solutions',
      description: 'Focus on solving the actual problem, not upselling you on features you don\'t need.',
    },
    {
      number: '04',
      title: 'Personal attention',
      description: 'Each project gets individual attention and thoughtful care.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why work with me</h2>
          <p className="text-xl text-text-muted">What makes The WeekEnd Company different.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition duration-300"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-accent font-bold text-lg">
                  {reason.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
