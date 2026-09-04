import { useState } from 'react'
import { MailIcon, InstagramIcon, GithubIcon, ArrowUpRightIcon } from './ui/Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const generateMailto = () => {
    return `mailto:theweekendcompany.co@gmail.com?subject=WeekEnd Company Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || 'Not specified'}\nBudget: ${formData.budget || 'Not specified'}\n\nMessage:\n${formData.message}`
    )}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.location.href = generateMailto()
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('theweekendcompany.co@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
      budget: '',
    })
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="py-24 px-6 relative border-b border-dark-border/40">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Got something that needs doing?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            A website? A messy spreadsheet? A design that needs fixing? Or something else that's been sitting on your to-do list for too long?
          </p>
        </div>

        <div className="space-y-8">
          {/* Form Container */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              /* Inline Confirmation State */
              <div className="space-y-6 text-center py-4 animate-fadeIn">
                <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto text-accent text-2xl font-bold">
                  ✓
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-text-primary">
                    Enquiry Prepared!
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Your email app should open automatically with your formatted message to{' '}
                    <span className="font-mono text-accent">theweekendcompany.co@gmail.com</span>.
                  </p>
                </div>

                <div className="p-4 bg-primary border border-dark-border rounded-lg max-w-lg mx-auto text-left text-xs font-mono text-text-secondary space-y-1">
                  <div><span className="text-text-muted">From:</span> {formData.name} ({formData.email})</div>
                  <div><span className="text-text-muted">Service:</span> {formData.service || 'General Inquiry'}</div>
                  <div><span className="text-text-muted">Budget:</span> {formData.budget || 'Open'}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="px-5 py-2.5 bg-accent text-primary text-sm font-bold rounded-lg hover:bg-gold-bright active:scale-95 transition flex items-center justify-center gap-2 shadow-md shadow-accent/10"
                  >
                    {copied ? '✓ Email Copied!' : 'Copy Email Address'}
                  </button>

                  <a
                    href={generateMailto()}
                    className="px-5 py-2.5 border border-dark-border text-text-secondary hover:text-text-primary text-sm font-semibold rounded-lg hover:bg-primary transition text-center"
                  >
                    Re-open Email App ↗
                  </a>
                </div>

                <div className="pt-4 border-t border-dark-border">
                  <button
                    onClick={handleReset}
                    className="text-xs text-text-muted hover:text-accent transition underline"
                  >
                    ← Send another enquiry or edit details
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-text-secondary font-semibold text-base mb-2">Tell me about it</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold">
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="websites">BUILD — Websites</option>
                      <option value="data">CLEAN — Data & Spreadsheets</option>
                      <option value="design">DESIGN — Canva & Visuals</option>
                      <option value="help">HELP — Digital Tasks</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold">
                      Budget (optional)
                    </label>
                    <input
                      id="budget"
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition text-sm"
                      placeholder="e.g., ₹5,000 - ₹25,000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition resize-none text-sm"
                    placeholder="Describe what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-accent text-primary rounded-lg font-bold hover:bg-gold-bright active:scale-95 transition duration-200 text-center shadow-lg shadow-accent/15"
                >
                  Send enquiry →
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Options */}
          <div className="border-t border-dark-border pt-8">
            <p className="text-text-secondary mb-6 font-semibold">Or reach out directly:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Email Contact Card */}
              <a
                href="mailto:theweekendcompany.co@gmail.com"
                aria-label="Email The WeekEnd Company"
                className="group bg-dark-card hover:bg-dark-card-hover border border-dark-border hover:border-accent/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-lg bg-primary border border-dark-border group-hover:border-accent/30 flex items-center justify-center shrink-0 transition-colors">
                  <MailIcon className="w-5 h-5 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-text-muted uppercase font-semibold">Email</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-gold-bright transition-colors truncate">
                    theweekendcompany.co@gmail.com
                  </p>
                </div>
              </a>

              {/* Instagram Contact Card */}
              <a
                href="https://www.instagram.com/the_weekend_company_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The WeekEnd Company on Instagram"
                className="group bg-dark-card hover:bg-dark-card-hover border border-dark-border hover:border-accent/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-lg bg-primary border border-dark-border group-hover:border-accent/30 flex items-center justify-center shrink-0 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-text-muted uppercase font-semibold">Instagram</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-gold-bright transition-colors truncate">
                    @the_weekend_company_official
                  </p>
                </div>
              </a>

              {/* GitHub Contact Card */}
              <a
                href="https://github.com/theweekendcompanyco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The WeekEnd Company on GitHub"
                className="group bg-dark-card hover:bg-dark-card-hover border border-dark-border hover:border-accent/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-lg bg-primary border border-dark-border group-hover:border-accent/30 flex items-center justify-center shrink-0 transition-colors">
                  <GithubIcon className="w-5 h-5 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-text-muted uppercase font-semibold">GitHub</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-gold-bright transition-colors truncate">
                    @theweekendcompanyco
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
