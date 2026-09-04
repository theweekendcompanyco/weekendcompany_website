import { useInView } from '../hooks/useInView'

export default function WhyUs() {
  const { ref, isVisible } = useInView()

  const reasons = [
    {
      number: '01',
      title: 'Direct communication',
      description: 'You work directly with the person doing the work. No account managers or miscommunication.',
    },
    {
      number: '02',
      title: 'Small-project friendly',
      description: 'Not every job needs an agency. Not every problem needs a complex 6-figure solution.',
    },
    {
      number: '03',
      title: 'Practical solutions',
      description: 'Focus on solving the actual problem cleanly, not upselling features you don\'t need.',
    },
    {
      number: '04',
      title: 'Personal attention',
      description: 'Each project gets individual care and genuine attention to quality.',
    },
  ]

  return (
    <section 
      id="why-us" 
      className="py-24 px-6 bg-dark-bg/60 relative border-b border-dark-border/40"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              THE DIFFERENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">Why work with me</h2>
          <p className="text-xl text-text-secondary">What makes The WeekEnd Company different.</p>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-500 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          {/* Left Column: Bold Editorial Statement */}
          <div className="lg:col-span-5 space-y-6 p-8 bg-dark-card border-l-2 border-accent rounded-r-xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug">
              No agency layers.<br />
              No unnecessary complexity.<br />
              <span className="text-accent font-semibold block mt-2">
                You work directly with the person doing the work.
              </span>
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              When you hire The WeekEnd Company, you aren't paying for agency overhead, account managers, or bloated pitch decks. You get practical digital execution from someone who cares about doing good work.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Key Differentiators */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="space-y-3 p-6 bg-dark-card/60 border border-dark-border rounded-xl">
                <div className="text-xs font-mono font-bold text-accent">
                  {reason.number}
                </div>
                <h4 className="text-lg font-bold text-text-primary">
                  {reason.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
