import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, use mailto as fallback
    const mailtoLink = `mailto:theweekendcompany.co@gmail.com?subject=WeekEnd Company Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-primary">
            Got something that needs doing?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            A website? A messy spreadsheet? A design that needs fixing? Or something else that's been sitting on your to-do list for too long?
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-lg border border-dark-border">
            <p className="text-text-secondary font-semibold mb-6">Tell me about it</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-text-secondary">
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
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
                <label htmlFor="budget" className="block text-sm font-medium mb-2 text-text-secondary">
                  Budget (optional)
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  placeholder="e.g., $500-1000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition resize-none"
                placeholder="Describe what you need..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-200 text-center shadow-lg hover:shadow-2xl shadow-accent/20"
            >
              Send enquiry →
            </button>
          </form>

          {/* Direct Contact Options */}
          <div className="border-t border-dark-border pt-8">
            <p className="text-text-secondary mb-6 font-semibold">Or reach out directly:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-text-muted mb-2 uppercase tracking-wide">Email</p>
                <a
                  href="mailto:theweekendcompany.co@gmail.com"
                  className="text-lg font-semibold hover:text-accent transition"
                >
                  theweekendcompany<br />
                  .co@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-2 uppercase tracking-wide">Instagram</p>
                <a
                  href="https://www.instagram.com/the_weekend_company_official"
                  className="text-lg font-semibold hover:text-accent transition break-all"
                >
                  @the_weekend<br />_company_official
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">GitHub</p>
                <a
                  href="https://github.com/theweekendcompanyco"
                  className="text-lg font-semibold hover:text-accent transition"
                >
                  @theweekendcompanyco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
