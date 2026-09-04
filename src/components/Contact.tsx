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
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Got something that needs doing?</h2>
        <p className="text-lg text-gray-300 mb-12">
          A website? A messy spreadsheet? A design that needs fixing? Or something else that's been sitting on your to-do list for too long?
        </p>
        
        <div className="space-y-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">What do you need?</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
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
                <label className="block text-sm font-medium mb-2">Budget (optional)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="e.g., $500-1000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tell me about it</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent transition resize-none"
                placeholder="Describe what you need..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded font-medium hover:bg-blue-700 transition"
            >
              Send enquiry →
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-300 mb-6">Or reach out directly:</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:theweekendcompany.co@gmail.com" className="text-lg hover:text-accent transition">
                  theweekendcompany.co@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Instagram</p>
                <a href="https://www.instagram.com/the_weekend_company_official" className="text-lg hover:text-accent transition">
                  @the_weekend_company_official
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">GitHub</p>
                <a href="https://github.com/theweekendcompanyco" className="text-lg hover:text-accent transition">
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
