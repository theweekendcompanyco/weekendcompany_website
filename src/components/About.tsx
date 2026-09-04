import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isVisible } = useInView()

  return (
    <section id="about" className="py-24 px-6 bg-dark-bg/60 relative border-b border-dark-border/40" ref={ref}>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              BACKGROUND & MISSION
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
            About
          </h2>
        </div>

        {/* Editorial Narrative */}
        <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug">
            The 10–7 pays the bills.{' '}
            <span className="text-accent font-semibold block sm:inline mt-1 sm:mt-0">
              The hours after it are for building what's next.
            </span>
          </h3>

          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              I work a regular full-time job, but I don't want learning and building to stop there. The WeekEnd Company is where I use evenings and weekends to turn what I learn into practical, useful digital work for real people.
            </p>
            <p>
              Whether it's building a fast website for a local service business, sanitizing a messy spreadsheet, or setting up a clean workflow — I focus on getting things done properly without agency overhead or unnecessary complexity.
            </p>
          </div>

          {/* Editorial Callout with Thin Gold Vertical Accent */}
          <div className="p-6 sm:p-8 bg-dark-card border-l-2 border-accent rounded-r-xl space-y-2 shadow-lg">
            <p className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
              BRAND PHILOSOPHY
            </p>
            <p className="text-lg sm:text-xl font-bold text-text-primary">
              Build things. Help people. Learn more. Earn a little. Keep going.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
