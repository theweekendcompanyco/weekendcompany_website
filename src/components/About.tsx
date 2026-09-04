export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">About</h2>

        <div className="space-y-8">
          {/* Primary Statement */}
          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
              The 10–7 pays the bills.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">
              The hours after it are for building what's next.
            </p>
          </div>

          {/* Body Text */}
          <div className="border-l-4 border-accent pl-8 py-4">
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              I work a regular job, but I don't want learning and building to stop there. The WeekEnd Company is where I use evenings and weekends to turn what I learn into useful work for real people.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              The goal is simple: build things that matter, help people solve real problems, and maybe eventually make this something I can do full-time.
            </p>
          </div>

          {/* The Brand */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mt-12">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              The Brand Philosophy
            </p>
            <p className="text-2xl font-bold text-gray-900 leading-relaxed">
              Build things. Help people. Learn more. Earn a little. Keep going.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
