import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-lg font-bold hover:text-accent transition">
          The WeekEnd Company
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 hover:text-accent transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
        >
          Let's work together
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Let's work together
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
